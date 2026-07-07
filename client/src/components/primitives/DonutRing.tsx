/* IZURE Donut-Ring — Blueprint v2.1, Abschnitt 6.2: stroke 3px, Grundring
   Hairline, Fortschrittsring accent-primary, Mittelpunkt-Zahl Space Grotesk 600.
   Kein Farbverlauf, kein Schatten — reine Linienzeichnung (Kompass-/Zifferblatt-
   Charakter, kein Chart-Widget). */

export interface DonutRingProps {
  value: number; // 0–100
  label: string;
  size?: number; // Standard 96px
  /** LF-Kategorienfarbe für den Fortschrittsring (Masterplan 3.4 — Aktenreiter-
   *  Zuordnung, nur für LF-Kennzeichnung). Default bleibt accent-primary. */
  ringColor?: string;
}

const R = 46.5;
const C = 2 * Math.PI * R;

export default function DonutRing({ value, label, size = 96, ringColor }: DonutRingProps) {
  const clamped = Math.min(100, Math.max(0, value));
  return (
    <div
      role="img"
      aria-label={`${label}: ${clamped}%`}
      style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}
    >
      <div style={{ position: 'relative', width: size, height: size }}>
        <svg viewBox="0 0 96 96" width={size} height={size} aria-hidden="true">
          <circle cx={48} cy={48} r={R} fill="none" stroke="var(--border-hairline)" strokeWidth={3} />
          <circle
            cx={48}
            cy={48}
            r={R}
            fill="none"
            stroke={ringColor || 'var(--accent-primary)'}
            strokeWidth={3}
            strokeDasharray={C}
            strokeDashoffset={C * (1 - clamped / 100)}
            strokeLinecap="butt"
            transform="rotate(-90 48 48)"
          />
        </svg>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 600,
            fontSize: size >= 96 ? 'var(--fs-h2)' : 14,
            fontVariantNumeric: 'tabular-nums',
            color: 'var(--text-primary)',
          }}
        >
          {clamped}
        </div>
      </div>
      <div className="t-label" style={{ fontSize: 9, color: 'var(--text-tertiary)' }}>
        {label}
      </div>
    </div>
  );
}
