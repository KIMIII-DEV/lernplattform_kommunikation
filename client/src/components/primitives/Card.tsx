import { HTMLAttributes } from 'react';

/* IZURE Card — Blueprint v2.1, Abschnitt 6 (Komponenten-Tabelle) + 2.3 (Seam-Technik).
   default: Seam statt Hairline — die Karte trennt sich vom Panel durch eine
   "Fuge" in --bg-base, nicht durch eine gezeichnete Kontur. KEIN eigener
   box-shadow (der einzige Schatten liegt auf der Stage, siehe Stage.tsx).
   glass-subtle: NUR für Dashboard-Home-Panels zulässig (Blueprint 6.1,
   Drei-Stufen-Regel) — nicht bei Dossier-/Flashcard-/Quiz-Cards. */

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass-subtle';
}

export default function Card({ variant = 'default', className, style, children, ...rest }: CardProps) {
  if (variant === 'glass-subtle') {
    return (
      <div
        className={['glass-subtle', className].filter(Boolean).join(' ')}
        style={{ padding: 24, ...style }}
        {...rest}
      >
        {children}
      </div>
    );
  }
  return (
    <div
      className={className}
      style={{
        background: 'var(--bg-panel)',
        border: 'var(--seam) solid var(--bg-base)',
        borderRadius: 'var(--radius-card)',
        padding: 24,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
