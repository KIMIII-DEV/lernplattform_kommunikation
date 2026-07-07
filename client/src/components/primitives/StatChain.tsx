import { Fragment } from 'react';

/* IZURE Kennzahl-Kette — Blueprint v2.1, Abschnitt 6.3: horizontale Inline-
   Kette kurzer Kennzahlen, Divider "·" in text-tertiary (nie Pipe/Bullet-Icon).
   Kein eigener Rahmen — lebt innerhalb einer bestehenden Card. */

export interface StatChainItem {
  value: string | number;
  label: string;
}

export default function StatChain({ items }: { items: StatChainItem[] }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
      {items.map((item, i) => (
        <Fragment key={i}>
          {i > 0 && (
            <span aria-hidden="true" style={{ color: 'var(--text-tertiary)' }}>
              ·
            </span>
          )}
          <span style={{ whiteSpace: 'nowrap' }}>
            <span
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 500,
                fontVariantNumeric: 'tabular-nums',
                color: 'var(--text-primary)',
              }}
            >
              {item.value}
            </span>{' '}
            <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{item.label}</span>
          </span>
        </Fragment>
      ))}
    </div>
  );
}
