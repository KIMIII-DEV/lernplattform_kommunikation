import { Stage, Card, Badge, StatChain } from '@/components/primitives';
import { SectionHead } from '@/components/izure/primitives';
import { WATCHLIST } from '@/lib/publicData';

/* IZURE Stocks — Public Layer (IMG_0405). PLATZHALTER.
   Datenquelle geteilt mit der Landing-Card: client/src/lib/publicData.ts.
   Später leicht ersetzbar: WATCHLIST dort füllen / echte Kurse laden. */

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
