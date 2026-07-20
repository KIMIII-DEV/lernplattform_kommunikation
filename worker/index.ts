/* IZURÉ Cloudflare Worker — statische SPA + TOTP-Login (Google-Authenticator-
   Stil: 6-stelliger Code, rotiert alle 30 Sekunden, RFC 6238).

   Kein externer Identity-Provider, kein Cloudflare Access nötig — der Worker
   selbst prüft den Code gegen ein geheimes Secret (Env-Var TOTP_SECRET, als
   verschlüsseltes Worker-Secret im Dashboard gesetzt, NIE im Repo). Bei
   Erfolg setzt der Worker ein signiertes, httpOnly Session-Cookie (HMAC-
   SHA256, 12h TTL) — die eigentliche Freigabe passiert also serverseitig,
   die SPA fragt sie nur über /auth/check ab.

   Algorithmus (base32Decode/hotp) ist vor dem Einbau gegen die offiziellen
   RFC-4226-Testvektoren (HOTP-Kern) und RFC-4648-Testvektoren (Base32)
   verifiziert worden — siehe Commit-Message. */

interface Env {
  ASSETS: Fetcher;
  DEV_BYPASS?: string;
  /** Base32-Secret für TOTP, gesetzt als verschlüsseltes Worker-Secret
   *  (Dashboard → Workers & Pages → iruze → Settings → Variables and
   *  secrets → Add → Encrypted). Siehe DEPLOY_CLOUDFLARE.md. */
  TOTP_SECRET?: string;
}

const SESSION_COOKIE = 'izure_session';
const SESSION_TTL_MS = 12 * 60 * 60 * 1000; // 12h
const TOTP_STEP_SECONDS = 30;
const TOTP_WINDOW = 1; // ±1 Schritt (±30s) toleriert Uhr-Drift der Auth-App

// ---------- Base32 (RFC 4648) ----------
const BASE32_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';

function base32Decode(input: string): Uint8Array {
  const clean = input.toUpperCase().replace(/[^A-Z2-7]/g, '');
  let bits = '';
  for (const char of clean) {
    const val = BASE32_ALPHABET.indexOf(char);
    if (val === -1) continue;
    bits += val.toString(2).padStart(5, '0');
  }
  const bytes = new Uint8Array(Math.floor(bits.length / 8));
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = parseInt(bits.slice(i * 8, i * 8 + 8), 2);
  }
  return bytes;
}

// ---------- TOTP / HOTP (RFC 6238 / RFC 4226) ----------
async function hotp(keyBytes: Uint8Array, counter: number): Promise<string> {
  const counterBytes = new ArrayBuffer(8);
  const view = new DataView(counterBytes);
  view.setUint32(0, Math.floor(counter / 2 ** 32));
  view.setUint32(4, counter >>> 0);
  const key = await crypto.subtle.importKey('raw', keyBytes, { name: 'HMAC', hash: 'SHA-1' }, false, ['sign']);
  const sig = new Uint8Array(await crypto.subtle.sign('HMAC', key, counterBytes));
  const offset = sig[sig.length - 1] & 0x0f;
  const binCode =
    ((sig[offset] & 0x7f) << 24) | ((sig[offset + 1] & 0xff) << 16) | ((sig[offset + 2] & 0xff) << 8) | (sig[offset + 3] & 0xff);
  return (binCode % 1_000_000).toString().padStart(6, '0');
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

async function verifyTotp(secretB32: string, code: string): Promise<boolean> {
  if (!/^\d{6}$/.test(code)) return false;
  const keyBytes = base32Decode(secretB32);
  if (keyBytes.length === 0) return false;
  const counter = Math.floor(Date.now() / 1000 / TOTP_STEP_SECONDS);
  for (let drift = -TOTP_WINDOW; drift <= TOTP_WINDOW; drift++) {
    const candidate = await hotp(keyBytes, counter + drift);
    if (timingSafeEqual(candidate, code)) return true;
  }
  return false;
}

// ---------- Session-Cookie (HMAC-signiert, kein Server-State nötig) ----------
async function sessionKey(env: Env): Promise<CryptoKey> {
  const material = new TextEncoder().encode(`${env.TOTP_SECRET || 'dev-only-insecure'}::izure-session-v1`);
  const digest = await crypto.subtle.digest('SHA-256', material);
  return crypto.subtle.importKey('raw', digest, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify']);
}

function toBase64(bytes: Uint8Array): string {
  let bin = '';
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin);
}

async function issueSessionCookie(env: Env): Promise<string> {
  const exp = Date.now() + SESSION_TTL_MS;
  const payloadB64 = btoa(JSON.stringify({ exp }));
  const key = await sessionKey(env);
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(payloadB64));
  const token = `${payloadB64}.${toBase64(new Uint8Array(sig))}`;
  return `${SESSION_COOKIE}=${token}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=${SESSION_TTL_MS / 1000}`;
}

const CLEAR_SESSION_COOKIE = `${SESSION_COOKIE}=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0`;

async function verifySessionCookie(request: Request, env: Env): Promise<boolean> {
  const cookieHeader = request.headers.get('Cookie') || '';
  const match = cookieHeader.match(new RegExp(`${SESSION_COOKIE}=([^;]+)`));
  if (!match) return false;
  const [payloadB64, sigB64] = match[1].split('.');
  if (!payloadB64 || !sigB64) return false;
  try {
    const key = await sessionKey(env);
    const sigBytes = Uint8Array.from(atob(sigB64), (c) => c.charCodeAt(0));
    const valid = await crypto.subtle.verify('HMAC', key, sigBytes, new TextEncoder().encode(payloadB64));
    if (!valid) return false;
    const payload = JSON.parse(atob(payloadB64));
    return typeof payload.exp === 'number' && payload.exp > Date.now();
  } catch {
    return false;
  }
}

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url);
    const devBypass = env.DEV_BYPASS === '1';

    // Code-Eingabe prüfen → bei Erfolg Session-Cookie setzen.
    if (url.pathname === '/auth/verify' && request.method === 'POST') {
      let ok = devBypass;
      if (!ok && env.TOTP_SECRET) {
        const body = (await request.json().catch(() => null)) as { code?: string } | null;
        ok = await verifyTotp(env.TOTP_SECRET, (body?.code || '').trim());
      }
      if (!ok) return Response.json({ ok: false }, { status: 401, headers: { 'cache-control': 'no-store' } });
      return Response.json(
        { ok: true },
        { headers: { 'set-cookie': await issueSessionCookie(env), 'cache-control': 'no-store' } }
      );
    }

    // Session-Check der SPA: 200 nur mit gültigem, unabgelaufenem Cookie.
    if (url.pathname === '/auth/check') {
      const ok = devBypass || (await verifySessionCookie(request, env));
      return Response.json({ ok }, { status: ok ? 200 : 401, headers: { 'cache-control': 'no-store' } });
    }

    // Abmelden: Cookie löschen.
    if (url.pathname === '/auth/logout') {
      return new Response(null, { status: 204, headers: { 'set-cookie': CLEAR_SESSION_COOKIE } });
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
