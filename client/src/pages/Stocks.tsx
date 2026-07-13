import { Stage, Card, Badge, StatChain } from '@/components/primitives';
import { SectionHead } from '@/components/izure/primitives';

/* IZURE Stocks — Public Layer (IMG_0405). PLATZHALTER.
   Später leicht ersetzbar: nur WATCHLIST füllen und in einem useEffect echte
   Kurse laden (z. B. Finnhub/Alpha Vantage mit Key oder eine andere Quelle).
   Bis dahin Demo-Werte + „Demo"-Badge, damit nichts Echtes vorgetäuscht wird. */

interface Quote {
  name: string;
  ticker: string;
  note: string;
  price?: number; // wird später aus der API befüllt
  changePct?: number;
}

// TODO(Phase B): echte Ticker + Datenquelle. Werte unten sind Demo/Platzhalter.
const WATCHLIST: Quote[] = [
  { name: 'Deutsche Telekom AG', ticker: 'DTE.DE', note: 'Xetra', price: undefined, changePct: undefined },
  { name: 'MSCI ACWI ACC (ETF)', ticker: 'IE00B6R52259', note: 'iShares · thes.', price: undefined, changePct: undefined },
  { name: 'Weitere folgen', ticker: '—', note: 'Watchlist erweiterbar', price: undefined, changePct: undefined },
];

export default function StocksPage() {
  return (
    <div className="page-root" data-screen-label="Public · Stocks">
      <section style={{ padding: '120px 0 100px', minHeight: '80vh' }}>
        <div className="shell">
          <SectionHead
            eyebrow="Public · Markets"
            title="Stocks"
            intro="Ein ruhiger Blick auf ein paar Positionen — Deutsche Telekom, ein Welt-ETF und was sonst noch dazukommt. Kurse folgen, sobald die Datenquelle steht."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 4, marginTop: 40 }}>
            {WATCHLIST.map((q) => (
              <Card key={q.ticker} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12 }}>
                  <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 18, color: 'var(--text-primary)' }}>
                    {q.name}
                  </div>
                  <Badge>Demo</Badge>
                </div>
                <div className="t-label" style={{ color: 'var(--text-tertiary)' }}>
                  {q.ticker} · {q.note}
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginTop: 'auto' }}>
                  <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 34, fontVariantNumeric: 'tabular-nums', color: 'var(--text-primary)' }}>
                    {q.price != null ? q.price.toFixed(2) : '—'}
                  </div>
                  <div style={{ fontSize: 14, color: 'var(--text-secondary)', fontVariantNumeric: 'tabular-nums' }}>
                    {q.changePct != null ? `${q.changePct > 0 ? '+' : ''}${q.changePct.toFixed(2)} %` : '· · ·'}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Stage style={{ marginTop: 40, padding: '28px 32px' }}>
            <StatChain
              items={[
                { value: WATCHLIST.length, label: 'Positionen' },
                { value: '—', label: 'Tagesänderung' },
                { value: 'bald', label: 'Live-Kurse' },
              ]}
            />
          </Stage>
        </div>
      </section>
    </div>
  );
}
