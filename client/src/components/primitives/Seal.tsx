/* IZURE Siegel — Blueprint v2.1, Abschnitt 4 + Schritt 2.6.
   IZ-Monogramm als dünne Linienzeichnung im Kreis, fixe Position unten
   rechts, idle 40% Opazität. Loading = Puls-Loop, route-change = einmaliger
   "Stempel-Impact".

   ⚠️ ENTWURF — das SVG-Pfad-Design ist ein erster Vorschlag und durch den
   Menschen noch NICHT freigegeben (STOP-Regel Guide Schritt 2.6).

   Einbau-Muster für spätere Phasen (dokumentiert, noch nicht verdrahtet):
   Home.tsx hält sealState, setzt 'route-change' im bestehenden onHash-Handler
   und resettet über onRouteAnimationEnd auf 'idle'. Rendern IMMER auf
   Shell-Ebene neben <GrainOverlay/> — NIE innerhalb einer Stage (deren
   `filter` macht sie zum Containing-Block für position:fixed). */

export interface SealProps {
  state?: 'idle' | 'loading' | 'route-change';
  size?: number;
  onRouteAnimationEnd?: () => void;
}

export default function Seal({ state = 'idle', size = 30, onRouteAnimationEnd }: SealProps) {
  const stateClass =
    state === 'loading' ? ' izure-seal--loading' : state === 'route-change' ? ' izure-seal--route' : '';
  return (
    <div
      className={`izure-seal${stateClass}`}
      aria-hidden="true"
      onAnimationEnd={() => {
        if (state === 'route-change') onRouteAnimationEnd?.();
      }}
    >
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        stroke="var(--accent-primary)"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="11" strokeWidth="1" />
        {/* I */}
        <path d="M8.5 8 v8" strokeWidth="1.25" />
        {/* Z */}
        <path d="M11.5 8 h4.5 l-4.5 8 h4.5" strokeWidth="1.25" />
      </svg>
    </div>
  );
}
