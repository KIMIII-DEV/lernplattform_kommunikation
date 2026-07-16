/* Geteilte Platzhalter-Daten des Public Layers (IMG_0405/0409).
   Später leicht ersetzbar: nur diese Konstanten füllen bzw. echte Quellen
   anbinden — die Landing-Card und die /stocks-Seite nutzen dieselbe Liste. */

export interface Quote {
  name: string;
  short: string; // kurzer Name für die kompakte Cockpit-Card
  ticker: string;
  note: string;
  price?: number; // wird später aus einer API befüllt
  changePct?: number;
}

// TODO(Phase B): echte Ticker + Datenquelle. Werte sind Demo/Platzhalter.
export const WATCHLIST: Quote[] = [
  { name: 'Deutsche Telekom AG', short: 'Deutsche Telekom', ticker: 'DTE.DE', note: 'Xetra' },
  { name: 'MSCI ACWI ACC (ETF)', short: 'MSCI ACWI ACC', ticker: 'IE00B6R52259', note: 'iShares · thes.' },
  { name: 'Weitere folgen', short: 'Weitere', ticker: '—', note: 'Watchlist erweiterbar' },
];

// TODO(Phase B): echten Musik-Track (Datei/URL) einsetzen.
export const LANDING_MUSIC_URL = '';
