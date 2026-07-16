/* IZURÉ Cloudflare Worker — statische SPA + Zero-Trust-Gate.
   Die /auth/*-Pfade werden in Cloudflare Zero Trust als Access-Application
   geschützt (Login per One-Time-PIN „Zero Trust Code" an erlaubte E-Mails).
   Wer einen /auth/*-Pfad erreicht, hat Access bereits passiert — Cloudflare
   hängt dann das signierte JWT als Header an. Workers haben keinen
   umgehbaren Origin, deshalb genügt hier die Header-Präsenz; die eigentliche
   Durchsetzung macht Access an der Edge.

   Lokal gilt ein expliziter Dev-Bypass NUR über die Var DEV_BYPASS="1",
   die ausschließlich das npm-Script cf:dev setzt (wrangler dev --var …).
   Beim Deploy existiert die Var nicht — auf izu-re.com und *.workers.dev
   (wo kein Access davor hängt) bleibt /auth ohne Access-JWT gesperrt. */

interface Env {
  ASSETS: Fetcher;
  DEV_BYPASS?: string;
}

const ACCESS_JWT_HEADER = 'Cf-Access-Jwt-Assertion';

function decodeJwtEmail(jwt: string): string | null {
  try {
    const payload = jwt.split('.')[1];
    const json = JSON.parse(atob(payload.replace(/-/g, '+').replace(/_/g, '/')));
    return typeof json.email === 'string' ? json.email : null;
  } catch {
    return null;
  }
}

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url);
    const devBypass = env.DEV_BYPASS === '1';

    // Identitäts-Check der SPA: 200 + JSON nur mit gültiger Access-Session.
    if (url.pathname === '/auth/check') {
      const jwt = request.headers.get(ACCESS_JWT_HEADER);
      const email = jwt ? decodeJwtEmail(jwt) : devBypass ? 'dev@localhost' : null;
      if (!email) return Response.json({ ok: false }, { status: 401 });
      return Response.json({ ok: true, email }, { headers: { 'cache-control': 'no-store' } });
    }

    // Login-Einstieg: Navigation hierhin zwingt Access zum OTP-Login,
    // danach zurück in die SPA (Login-View schließt den Unlock ab).
    if (url.pathname === '/auth/unlock') {
      const jwt = request.headers.get(ACCESS_JWT_HEADER);
      if (!jwt && !devBypass) return Response.json({ ok: false }, { status: 401 });
      return Response.redirect(new URL('/#/login', url.origin).toString(), 302);
    }

    // Access-Session beenden (Cookie widerrufen), dann zurück zur Landing.
    if (url.pathname === '/auth/logout') {
      return Response.redirect(new URL('/cdn-cgi/access/logout', url.origin).toString(), 302);
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
