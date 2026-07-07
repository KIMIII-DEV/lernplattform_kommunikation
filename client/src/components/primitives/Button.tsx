import { ButtonHTMLAttributes, useState } from 'react';

/* IZURE Button (primär) — Blueprint v2.1, Abschnitt 6: Pill-Radius,
   Fläche accent-primary, Text in bg-base, Hover nur Farbwechsel zu
   accent-primary-bright — kein Gradient, KEIN scale() (Sprezzatura:
   kontrolliert, nicht verspielt). Focus-Ring via .izure-button in index.css. */

export default function Button({ style, children, disabled, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {
  const [hover, setHover] = useState(false);
  return (
    <button
      className="izure-button"
      disabled={disabled}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      style={{
        background: hover && !disabled ? 'var(--accent-primary-bright)' : 'var(--accent-primary)',
        color: 'var(--bg-base)',
        borderRadius: 'var(--radius-pill)',
        padding: '12px 28px',
        fontFamily: 'Space Grotesk, sans-serif',
        fontWeight: 600,
        fontSize: 11,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        transition: 'background var(--motion-micro)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
