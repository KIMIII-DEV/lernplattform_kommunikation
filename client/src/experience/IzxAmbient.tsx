import { useEffect, useRef } from 'react';

/* Ambient-Hintergrund der IZURÉ-Welt: Fall-Streifen, Dot-Grid, zwei Glows,
   Vignette, Korn, drei Glints. Aus Experience.tsx extrahiert (Phase 12b),
   damit die öffentliche Landing exakt denselben Look teilt, ohne die
   Fall-/Grain-Generierung zu duplizieren. Rein dekorativ (aria-hidden).

   Die Fall-Keyframes werden pro Mount frisch aus der aktuellen
   --accent-primary-Farbe erzeugt und beim Unmount wieder entfernt. */
export default function IzxAmbient() {
  const fallRef = useRef<HTMLDivElement>(null);
  const grainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grain = grainRef.current;
    if (grain) {
      grain.style.backgroundImage =
        'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'2\'/%3E%3CfeColorMatrix type=\'saturate\' values=\'0\'/%3E%3C/filter%3E%3Crect width=\'160\' height=\'160\' filter=\'url(%23n)\'/%3E%3C/svg%3E")';
    }
    const el = fallRef.current;
    if (!el) return;
    const steel = getComputedStyle(document.documentElement).getPropertyValue('--accent-primary').trim() || '#B8BCC4';
    const hex = steel.replace('#', '');
    const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.substr(i, 2), 16));
    const C = `rgba(${r},${g},${b},0.9)`;
    const ROWS = [235, 252, 150, 253, 204, 134, 179, 299, 215, 281, 158, 210];
    const imgs: string[] = [], sizes: string[] = [], p0: string[] = [], p1: string[] = [];
    ROWS.forEach((rh, i) => {
      const xA = i * 25, xB = i * 25 + 3, xC = 151.5 + i * 25;
      const st = Math.round(Math.random() * 260);
      const st2 = Math.round(Math.random() * 260);
      const K = 26 + i * 3;
      imgs.push(
        `radial-gradient(4px 100px at 0px ${rh}px, ${C}, transparent)`,
        `radial-gradient(4px 100px at 300px ${rh}px, ${C}, transparent)`,
        `radial-gradient(1.5px 1.5px at 150px ${rh / 2}px, ${C} 100%, transparent 150%)`
      );
      sizes.push(`300px ${rh}px`, `300px ${rh}px`, `300px ${rh}px`);
      p0.push(`${xA}px ${st}px`, `${xB}px ${st}px`, `${xC}px ${st2}px`);
      p1.push(`${xA}px ${st + rh * K}px`, `${xB}px ${st + rh * K}px`, `${xC}px ${st2 + rh * K}px`);
    });
    el.style.backgroundImage = imgs.join(', ');
    el.style.backgroundSize = sizes.join(', ');
    const styleEl = document.createElement('style');
    styleEl.textContent = `@keyframes izxFall { from { background-position: ${p0.join(', ')}; } to { background-position: ${p1.join(', ')}; } }`;
    document.head.appendChild(styleEl);
    return () => styleEl.remove();
  }, []);

  return (
    <div className="izx-bg" aria-hidden="true">
      <div className="izx-bg-fall" ref={fallRef} />
      <div className="izx-bg-dots" />
      <div className="izx-bg-glow g1" />
      <div className="izx-bg-glow g2" />
      <div className="izx-bg-vignette" />
      <div className="izx-bg-grain" ref={grainRef} />
      {(['gA', 'gB', 'gC'] as const).map((c) => (
        <svg key={c} className={`izx-glint ${c}`} viewBox="0 0 24 24">
          <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" fill="currentColor" />
        </svg>
      ))}
    </div>
  );
}
