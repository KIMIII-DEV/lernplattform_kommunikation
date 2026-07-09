import { HTMLAttributes } from 'react';

/* IZURE Progress (linear) — Blueprint v2.1, Abschnitt 6: dünne 2px-Linie,
   kein dicker Balken. Zustände über Füllung, keine neue Farbe:
   default = steel, success (richtig) = platinum, error (falsch) = oxblood. */

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  state?: 'default' | 'success' | 'error';
}

const FILL: Record<NonNullable<ProgressProps['state']>, string> = {
  default: 'var(--accent-primary)',
  success: 'var(--accent-primary-bright)',
  error: 'var(--accent-critical)',
};

export default function Progress({ value, max = 100, state = 'default', style, ...rest }: ProgressProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={value}
      style={{ height: 2, background: 'var(--border-hairline)', position: 'relative', ...style }}
      {...rest}
    >
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          height: '100%',
          width: `${pct}%`,
          background: FILL[state],
          transition: 'width var(--motion-micro), background var(--motion-micro)',
        }}
      />
    </div>
  );
}
