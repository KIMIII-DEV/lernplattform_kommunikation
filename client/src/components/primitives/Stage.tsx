import { HTMLAttributes } from 'react';

/* IZURE Stage — Blueprint v2.1, Schritt 2.1b: der äußerste Container einer View.
   Trägt den EINZIGEN Schatten der gesamten Komposition (drop-shadow, kein
   box-shadow auf inneren Cards).

   ACHTUNG: `filter` macht dieses Element zum Containing-Block für
   position:fixed-Nachfahren — Siegel, Modals und Toasts dürfen deshalb NIE
   als Kinder einer Stage gerendert werden, sondern nur auf Shell-Ebene
   (Home.tsx, neben GrainOverlay). Außerdem ist die Stage ein Backdrop-Root:
   backdrop-filter im Inneren blurrt nur Stage-internen Inhalt (für das
   Phase-4-Dashboard ausreichend). */

export default function Stage({ style, children, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      style={{
        background: 'var(--bg-panel)',
        borderRadius: 'var(--radius-outer)',
        filter: 'drop-shadow(var(--shadow-stage))',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
