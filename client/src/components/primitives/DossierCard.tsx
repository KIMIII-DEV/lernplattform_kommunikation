import { useState } from 'react';
import Card from './Card';
import DonutRing from './DonutRing';

/* IZURE Dossier-Hover-Reveal — Blueprint v2.1, Abschnitt 6.4.
   Ruhezustand: Titel + Fortschritts-Donut-Ring. Hover/Focus: Crossfade zur
   "geöffneten Akte" (erste 2–3 Kapitelnamen). AUSSCHLIESSLICH Opacity-
   Crossfade (--motion-micro) — kein scale(), kein Parallax. Unter
   prefers-reduced-motion erscheint der Zustand sofort (Token ist 0ms).
   Grid-Stack statt absoluter Positionierung, damit die Kartenhöhe vom
   größeren Layer bestimmt wird und nichts kollabiert. */

export interface DossierCardProps {
  title: string;
  progress: number;
  previewChapters: string[];
  onOpen?: () => void;
  /** LF-Kategorienfarbe (Masterplan 3.4): schmaler Aktenreiter-Rand links +
   *  Fortschrittsring — nur zur LF-Zuordnung, nie Feedback/Chrome. */
  accentColor?: string;
  /** Kleine Meta-Zeile unter dem Titel (z. B. "LF-01 · 80h · 1. Lehrjahr"). */
  meta?: string;
}

export default function DossierCard({ title, progress, previewChapters, onOpen, accentColor, meta }: DossierCardProps) {
  const [revealed, setRevealed] = useState(false);

  return (
    <Card
      variant="default"
      tabIndex={0}
      role={onOpen ? 'button' : undefined}
      onMouseEnter={() => setRevealed(true)}
      onMouseLeave={() => setRevealed(false)}
      onFocus={() => setRevealed(true)}
      onBlur={() => setRevealed(false)}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (onOpen && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onOpen();
        }
      }}
      style={{
        display: 'grid',
        cursor: onOpen ? 'pointer' : 'default',
        // Aktenreiter: linke Seam-Kante trägt die LF-Kategorienfarbe —
        // Kennzeichnung in der Fuge, kein zusätzlicher Schatten/Rahmen.
        borderLeftColor: accentColor,
      }}
    >
      {/* Ruhezustand */}
      <div
        aria-hidden={revealed}
        style={{
          gridArea: '1 / 1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 20,
          opacity: revealed ? 0 : 1,
          transition: 'opacity var(--motion-micro)',
          pointerEvents: revealed ? 'none' : undefined,
        }}
      >
        <div>
          <h3
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 600,
              fontSize: 'var(--fs-h2)',
              lineHeight: 1.15,
              color: 'var(--text-primary)',
            }}
          >
            {title}
          </h3>
          {meta && (
            <div
              className="t-label"
              style={{ fontSize: 9, color: 'var(--text-tertiary)', marginTop: 8 }}
            >
              {meta}
            </div>
          )}
        </div>
        <DonutRing value={progress} label="Progress" size={64} ringColor={accentColor} />
      </div>

      {/* Geöffnete Akte */}
      <div
        aria-hidden={!revealed}
        style={{
          gridArea: '1 / 1',
          opacity: revealed ? 1 : 0,
          transition: 'opacity var(--motion-micro)',
          pointerEvents: revealed ? undefined : 'none',
        }}
      >
        <div className="t-label" style={{ fontSize: 9, color: 'var(--text-tertiary)', marginBottom: 12 }}>
          Dossier · {title}
        </div>
        <ul style={{ listStyle: 'none', borderLeft: '1px solid var(--border-hairline)', paddingLeft: 16 }}>
          {previewChapters.slice(0, 3).map((ch, i) => (
            <li
              key={i}
              style={{
                fontSize: 13,
                color: 'var(--text-secondary)',
                padding: '4px 0',
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              {String(i + 1).padStart(2, '0')} — {ch}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
