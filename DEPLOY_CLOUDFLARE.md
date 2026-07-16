# IZURÉ auf Cloudflare — Deploy + Zero Trust (izu-re.com)

Die App läuft als **Cloudflare Worker mit Static Assets** (SPA aus `dist/public`,
Worker nur für `/auth/*`). Der private Layer wird durch **Cloudflare Zero Trust
(Access)** geschützt: Login per One-Time-PIN („Zero Trust Code") an erlaubte
E-Mail-Adressen — das alte Codewort existiert nur noch als Dev-Fallback im
lokalen Vite-Dev-Server.

## 1) Einmalig: wrangler authentifizieren

```bash
npx wrangler login          # öffnet den Browser (auf deinem Rechner)
# ODER headless mit API-Token (Dashboard → My Profile → API Tokens →
# Template „Edit Cloudflare Workers"):
export CLOUDFLARE_API_TOKEN=…
```

## 2) Deploy

```bash
npm run cf:deploy           # baut (vite build) und deployt den Worker
```

Die Custom Domains `izu-re.com` und `www.izu-re.com` sind in `wrangler.jsonc`
deklariert — beim ersten Deploy legt Cloudflare die DNS-Einträge automatisch
an, weil die Zone dir gehört. (Falls `www` nicht gewünscht: den Eintrag in
`wrangler.jsonc` unter `routes` entfernen.)

Danach ist die Seite unter https://izu-re.com erreichbar. Der private Layer
bleibt zu, bis Schritt 3 eingerichtet ist.

## 3) Zero Trust einrichten (einmalig, ~5 Minuten im Dashboard)

Dashboard → **Zero Trust** (one.dash.cloudflare.com) → ggf. Team-Namen wählen
(Free-Plan reicht, bis 50 Nutzer):

1. **Access → Applications → Add an application → Self-hosted**
   - Application name: `IZURÉ Backroom`
   - **Public hostname:** Domain `izu-re.com`, Path `auth` (schützt `izu-re.com/auth/*`)
   - Optional zweiter Hostname: `www.izu-re.com`, Path `auth`
2. **Policy** (gleich im Assistenten):
   - Name: `Members`, Action: **Allow**
   - Include → Selector **Emails** → deine E-Mail-Adresse(n) eintragen
     (jede weitere erlaubte Person einfach ergänzen)
3. **Authentication → Login methods:** sicherstellen, dass **One-time PIN**
   aktiv ist (Standard). Das ist der „Zero Trust Code" per Mail.
4. Speichern. Fertig.

### Wie der Login dann läuft
„Step inside" → `/auth/unlock` → Cloudflare Access fragt die E-Mail ab und
schickt den Code → nach Eingabe zurück in die App → die App bestätigt die
Session über `/auth/check` und öffnet den Backroom. „Step out" beendet auch
die Access-Session (`/cdn-cgi/access/logout`).

## Lokal testen

```bash
npm run dev        # Vite-Dev-Server: Codewort-Fallback aktiv (kein Access lokal)
npm run cf:dev     # wrangler dev (localhost): /auth/* mit Dev-Bypass → voller Flow
```

Auf `*.workers.dev` (falls aktiviert) hängt **kein** Access vor `/auth/*` —
dort bleibt der private Layer bewusst gesperrt (401), es gibt keinen Bypass.

## Hinweise
- `vercel.json` bleibt vorerst im Repo, bis der Cloudflare-Betrieb steht;
  danach kann es zusammen mit `server/` (Express wird auf Cloudflare nicht
  genutzt) entfernt werden.
- Ehrliche Grenze: Die Lerninhalte stecken als statische Daten im JS-Bundle.
  Zero Trust schützt den **Zugang/Login** sauber; wer das Bundle analysiert,
  kann die Inhalte theoretisch lesen. Harte Inhalts-Trennung hieße, die
  privaten Daten hinter Access-geschützte API-Pfade zu verlagern — möglich
  als späterer Ausbau (der `/auth/*`-Worker ist die Basis dafür).
