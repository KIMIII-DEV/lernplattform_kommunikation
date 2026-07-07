import { HTMLAttributes } from 'react';

/* IZURE Badge — Blueprint v2.1, Abschnitt 6: Space Grotesk 500, uppercase,
   tabular-nums, Hairline-strong-Rand, Pill-Radius, KEINE Füllung. */

export default function Badge({ style, children, ...rest }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      style={{
        display: 'inline-block',
        fontFamily: 'Space Grotesk, sans-serif',
        fontWeight: 500,
        fontSize: 11,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        fontVariantNumeric: 'tabular-nums',
        padding: '4px 12px',
        border: '1px solid var(--border-hairline-strong)',
        borderRadius: 'var(--radius-pill)',
        background: 'transparent',
        color: 'var(--text-secondary)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
