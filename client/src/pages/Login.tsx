import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { Button } from '@/components/primitives';

/* IZURE Login — TOTP-Login wie eine Authenticator-App (Google Authenticator/
   Authy): ein 6-stelliger Code, der alle 30 Sekunden rotiert (RFC 6238).
   Der Worker (worker/index.ts) prüft den Code serverseitig gegen ein
   geheimes Secret und setzt bei Erfolg ein signiertes Session-Cookie — die
   SPA fragt die Session nur über /auth/check ab (nur echtes JSON
   { ok: true } zählt, damit ein SPA-Fallback-HTML niemals als Login
   durchgeht). Kein externer Identity-Provider, kein Cloudflare Access nötig.
   Das alte Codewort bleibt NUR im Vite-Dev-Server als lokaler Fallback
   (kein Worker dahinter). Ambient: Liquid/Chrome-Morph (lazy, nur hier). */

const LoginAmbient = lazy(() => import('@/components/izure/LoginAmbient'));

const DEV_CODES = ['sprezzatura', 'nottonight', 'patina', 'izure'];

async function checkSession(): Promise<boolean> {
  try {
    const r = await fetch('/auth/check', { redirect: 'manual' });
    if (r.status !== 200 || !(r.headers.get('content-type') || '').includes('json')) return false;
    const j = await r.json();
    return j?.ok === true;
  } catch {
    return false;
  }
}

async function verifyTotpCode(code: string): Promise<boolean> {
  try {
    const r = await fetch('/auth/verify', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ code }),
    });
    if (r.status !== 200 || !(r.headers.get('content-type') || '').includes('json')) return false;
    const j = await r.json();
    return j?.ok === true;
  } catch {
    return false;
  }
}

export default function LoginPage({
  navigate,
  onUnlock,
}: {
  navigate: (to: string) => void;
  onUnlock: () => void;
}) {
  const [code, setCode] = useState('');
  const [devCode, setDevCode] = useState('');
  const [reject, setReject] = useState(false);
  const [fading, setFading] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [checking, setChecking] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const devMode = import.meta.env.DEV;

  const admit = () => {
    setFading(true);
    setTimeout(() => {
      onUnlock();
      setTimeout(() => navigate('/private'), 400);
    }, 800);
  };

  const denied = () => {
    setReject(true);
    setCode('');
    navigator?.vibrate?.(80);
    setTimeout(() => setReject(false), 1200);
  };

  // Bestehende Session prüfen (z. B. Rückkehr innerhalb der 12h-Gültigkeit).
  useEffect(() => {
    let alive = true;
    checkSession().then((ok) => {
      if (!alive) return;
      setChecking(false);
      if (ok) admit();
    });
    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (checking) return;
    inputRef.current?.focus();
  }, [checking]);

  useEffect(() => {
    if (!devMode) return;
    const t = setTimeout(() => setShowHint(true), 4000);
    return () => clearTimeout(t);
  }, [devMode]);

  // Auto-Submit sobald 6 Ziffern stehen — wie beim Eintippen aus der App.
  const onCodeChange = async (raw: string) => {
    const digits = raw.replace(/\D/g, '').slice(0, 6);
    setCode(digits);
    if (digits.length !== 6 || verifying || fading) return;
    setVerifying(true);
    const ok = await verifyTotpCode(digits);
    setVerifying(false);
    if (ok) admit();
    else denied();
  };

  const handleDevSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fading) return;
    if (DEV_CODES.includes(devCode.trim().toLowerCase())) {
      admit();
    } else {
      setDevCode('');
      navigator?.vibrate?.(80);
    }
  };

  return (
    <div
      className="page-root"
      data-screen-label="04 Login"
      style={{
        position: 'fixed',
        inset: 0,
        background: 'var(--bg-base)',
        opacity: fading ? 0 : 1,
        transition: 'opacity var(--motion-base)',
        overflow: 'hidden',
      }}
    >
      <Suspense fallback={null}>
        <LoginAmbient />
      </Suspense>

      <div style={{ position: 'absolute', top: 28, left: 100, zIndex: 5 }}>
        <a
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--text-secondary)',
            transition: 'color var(--motion-micro)',
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
          onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
        >
          ← IZURE
        </a>
      </div>

      <div
        className="t-label"
        style={{ position: 'absolute', top: 30, right: 56, fontSize: 9, color: 'var(--text-tertiary)' }}
      >
        Authenticator · Code alle 30s
      </div>

      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          zIndex: 4,
          width: 'min(560px, 90vw)',
        }}
      >
        <div className="t-label" style={{ color: 'var(--accent-primary)', marginBottom: 24 }}>
          · The Backroom ·
        </div>
        <h1
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(44px, 5.5vw, 72px)',
            lineHeight: 1.02,
            color: 'var(--text-primary)',
            marginBottom: 16,
          }}
        >
          Knock twice.
        </h1>
        <p className="t-body" style={{ fontSize: 14, maxWidth: 380, margin: '0 auto 48px' }}>
          Kein Codewort mehr an der Tür. Der Code kommt aus deiner Authenticator-App — dreht sich alle 30 Sekunden.
        </p>

        {/* TOTP-Eingabe */}
        <form onSubmit={(e) => e.preventDefault()}>
          <div style={{ animation: reject ? 'shake 0.4s' : 'none' }}>
            <input
              ref={inputRef}
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              pattern="\d*"
              value={code}
              onChange={(e) => onCodeChange(e.target.value)}
              disabled={checking || fading}
              maxLength={6}
              aria-label="6-stelliger Authenticator-Code"
              placeholder="000000"
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                borderBottom: `1px solid ${reject ? 'var(--accent-critical)' : 'var(--border-hairline-strong)'}`,
                color: reject ? 'var(--accent-critical)' : 'var(--text-primary)',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 500,
                fontSize: 44,
                textAlign: 'center',
                padding: '12px 0 16px',
                outline: 'none',
                letterSpacing: '0.5em',
                fontVariantNumeric: 'tabular-nums',
                transition: 'border-color var(--motion-micro), color var(--motion-micro)',
                caretColor: 'var(--accent-primary)',
              }}
            />
          </div>

          <div style={{ marginTop: 20, height: 18, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {reject ? (
              <div className="t-label" style={{ color: 'var(--accent-critical)', fontSize: 11 }}>
                · Not tonight ·
              </div>
            ) : (
              <div className="t-label" style={{ fontSize: 10, color: 'var(--text-tertiary)' }}>
                {checking ? 'Prüfe Sitzung …' : verifying ? 'Prüfe Code …' : 'Sechsstelliger Code'}
              </div>
            )}
          </div>
        </form>

        {/* Lokaler Dev-Fallback (nur Vite-Dev-Server, ohne Worker dahinter) */}
        {devMode && (
          <form onSubmit={handleDevSubmit} style={{ marginTop: 56 }}>
            <div className="t-label" style={{ fontSize: 9, color: 'var(--text-tertiary)', marginBottom: 14 }}>
              Dev-Fallback · Codewort (nur `vite dev`, kein Worker)
            </div>
            <input
              type="text"
              value={devCode}
              onChange={(e) => setDevCode(e.target.value)}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              aria-label="Dev-Codewort"
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                borderBottom: '1px solid var(--border-hairline-strong)',
                color: 'var(--text-primary)',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 500,
                fontSize: 24,
                textAlign: 'center',
                padding: '10px 0 12px',
                outline: 'none',
                letterSpacing: '0.06em',
              }}
            />
            <div style={{ marginTop: 24 }}>
              <Button type="submit">Step inside (dev)</Button>
            </div>
          </form>
        )}

        {devMode && showHint && (
          <div style={{ marginTop: 40, opacity: 0.7 }}>
            <div className="t-label" style={{ fontSize: 9, color: 'var(--text-tertiary)', marginBottom: 10 }}>
              House tip
            </div>
            <p className="t-body" style={{ fontSize: 12, color: 'var(--text-secondary)' }}>
              Dev-Codewort, unter uns: <span style={{ color: 'var(--accent-primary-bright)' }}>sprezzatura</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
