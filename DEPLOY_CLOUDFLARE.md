# IZURÉ auf Cloudflare — Deploy + TOTP-Login (izu-re.com)

Die App läuft als **Cloudflare Worker mit Static Assets** (SPA aus `dist/public`,
Worker nur für `/auth/*`). Der private Layer wird durch einen **TOTP-Login**
geschützt — wie bei Google Authenticator/Authy: ein 6-stelliger Code, der
alle 30 Sekunden rotiert (RFC 6238). Kein externer Identity-Provider, kein
Cloudflare Access nötig. Der Worker selbst prüft den Code gegen ein Secret,
das **niemals im Repo steht**, sondern nur als verschlüsseltes Worker-Secret
im Cloudflare-Dashboard existiert.

## 1) Git-Integration (einmalig, falls noch nicht eingerichtet)

Dashboard → **Workers & Pages → Create → Workers → Import a repository**
→ GitHub verbinden → Repo wählen → Branch `claude/izure-learning-platform-VSBfu`
(oder `main`, falls dorthin gemerged) → Build command `npx vite build`,
Deploy command `npx wrangler deploy`. Danach deployt jeder Push automatisch.

## 2) TOTP-Secret erzeugen und im Dashboard eintragen

Das Secret ist ein zufälliger Base32-String (RFC 4648), 20 Byte Entropie.
Erzeuge eins lokal (oder lass es dir generieren):

```bash
node -e "
const { webcrypto: c } = require('node:crypto');
const A = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
const b = c.getRandomValues(new Uint8Array(20));
let bits=''; for (const x of b) bits += x.toString(2).padStart(8,'0');
let out=''; for (let i=0;i<bits.length;i+=5) out += A[parseInt(bits.slice(i,i+5).padEnd(5,'0'),2)];
console.log(out);
"
```

Dann im Dashboard: **Workers & Pages → iruze → Settings → Variables and
secrets → Add → Type: Secret** — Name **`TOTP_SECRET`**, Value = der oben
erzeugte String. Speichern (löst einen Redeploy aus, das ist normal).

**Wichtig:** dieses Secret ist der einzige Schlüssel zum Backroom. Nirgends
committen, nicht in Screenshots teilen. Wer es hat, kann gültige Codes
berechnen.

## 3) Authenticator-App einrichten

In Google Authenticator, Authy o. Ä.: **„Setup-Schlüssel manuell
eingeben"** (nicht QR-Scan, dafür bräuchte es ein QR-Bild):

- Konto-/Kontenname: `IZURÉ`
- Ihr Schlüssel: der `TOTP_SECRET`-Wert aus Schritt 2
- Typ: **Zeitbasiert** (Standard — Algorithmus SHA1, 6 Stellen, 30s sind
  überall die Vorgabe, muss man i. d. R. nicht extra einstellen)

Die App zeigt danach einen 6-stelligen Code, der alle 30 Sekunden wechselt.

## 4) Deploy

```bash
npm run cf:deploy
```

(Oder einfach pushen — die Git-Integration baut automatisch.) Die Custom
Domains `izu-re.com` und `www.izu-re.com` sind in `wrangler.jsonc` deklariert.

## Wie der Login läuft

„Step inside" → 6-stelligen Code aus der Authenticator-App eintippen →
automatischer Submit bei der 6. Ziffer → der Worker prüft den Code
(`/auth/verify`) und setzt bei Erfolg ein signiertes, httpOnly Session-Cookie
(12h gültig, ±30s Toleranz für Uhr-Drift) → die App fragt die Session über
`/auth/check` ab und öffnet den Backroom. „Step out" löscht das Cookie
(`/auth/logout`).

## Lokal testen

```bash
npm run dev        # Vite-Dev-Server: Codewort-Fallback (kein Worker lokal)
npm run cf:dev      # wrangler dev: DEV_BYPASS=1 → jeder Code / kein Cookie nötig
```

Auf jedem echten Deploy (izu-re.com, `*.workers.dev`) existiert `DEV_BYPASS`
nicht — dort zählt ausschließlich ein gültiger TOTP-Code.

## Empfohlen: Rate-Limit-Regel

`/auth/verify` bremst falsche Versuche bewusst nicht künstlich aus (das
würde bei korrekten Codes nur unnötig verzögern). Für zusätzlichen Schutz
gegen automatisiertes Durchprobieren: Dashboard → **Security → WAF → Rate
limiting rules** → Regel auf Pfad `/auth/verify`, z. B. „mehr als 10
Anfragen pro Minute pro IP → blocken für 10 Minuten". Optional, aber sinnvoll.

## Hinweise
- `vercel.json` bleibt vorerst im Repo, bis der Cloudflare-Betrieb steht;
  danach kann es zusammen mit `server/` (Express wird auf Cloudflare nicht
  genutzt) entfernt werden.
- Secret rotieren: einfach einen neuen Wert erzeugen, im Dashboard
  überschreiben, in der Authenticator-App neu einrichten — alte Sessions
  bleiben bis zum Ablauf gültig (max. 12h), da die Signatur vom Secret
  abhängt.
- Ehrliche Grenze: Die Lerninhalte stecken als statische Daten im JS-Bundle.
  Der TOTP-Login schützt den **Zugang** sauber; wer das Bundle analysiert,
  kann die Inhalte theoretisch lesen. Harte Inhalts-Trennung hieße, die
  privaten Daten hinter `/auth`-geschützte API-Pfade zu verlagern — möglich
  als späterer Ausbau.
