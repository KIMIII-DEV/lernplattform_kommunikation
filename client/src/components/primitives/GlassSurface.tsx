import { HTMLAttributes } from 'react';

/* IZURE Glass-Surface — Blueprint v2.1, Abschnitt 2.4 + 6.1 ("One-Way Glass").
   Gesamte visuelle Logik inkl. Pflicht-Fallback liegt in index.css:
   Basis opak → @supports Glas → prefers-reduced-transparency erzwingt opak.

   Einsatzregel (Drei-Stufen-Tabelle 6.1, nicht verhandelbar):
   - variant="full" (18px Blur): NUR Marco-Interface, Modals, Toasts,
     Command-Palette — Overlays über dem Hauptinhalt.
   - variant="subtle" (6px Blur): NUR Dashboard-Home-Cards (Phase 4).
   - NIE in Dossier-/Flashcard-/Quiz-Views oder auf der Rail. */

export interface GlassSurfaceProps extends HTMLAttributes<HTMLDivElement> {
  variant: 'full' | 'subtle';
}

export default function GlassSurface({ variant, className, style, children, ...rest }: GlassSurfaceProps) {
  const cls = variant === 'full' ? 'glass-full' : 'glass-subtle';
  return (
    <div className={[cls, className].filter(Boolean).join(' ')} style={{ padding: 24, ...style }} {...rest}>
      {children}
    </div>
  );
}
