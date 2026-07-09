import { useRef } from 'react';
import { readSilverTokens, useAmbientCanvas } from './useAmbientCanvas';

/* IZURE Wire-Ambient — Masterplan v3, Phase 9 (Journal/Wire):
   Aurora-/Farbwäsche-Charakter, reinterpretiert im Silber-System —
   zwei bis drei sehr großflächige, monochrome Luminanz-Wäschen, die
   träge durch den Raum driften (alpha ≤0.05). Introspektiver Ton,
   kein Multi-Hue-Verlauf. Lazy geladen, nur auf der Wire-View. */

const WASHES = Array.from({ length: 3 }, (_, i) => ({
  bx: 0.15 + i * 0.35,
  by: 0.2 + (i % 2) * 0.45,
  rx: 0.55 + (i % 2) * 0.2,
  ry: 0.3 + (i % 3) * 0.12,
  ax: 0.1,
  ay: 0.08,
  sx: (Math.PI * 2) / (26 + i * 8),
  sy: (Math.PI * 2) / (32 + i * 6),
  px: i * 2.1,
  py: i * 1.3,
  alpha: 0.028 + i * 0.008, // ≤0.05
  bright: i === 1,
}));

export default function WireAmbient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useAmbientCanvas(canvasRef, (ctx, w, h, t) => {
    const { steel, platinum } = readSilverTokens();
    const base = Math.min(w, h);
    ctx.filter = `blur(${Math.round(base * 0.09)}px)`;
    for (const wash of WASHES) {
      const x = (wash.bx + wash.ax * Math.sin(t * wash.sx + wash.px)) * w;
      const y = (wash.by + wash.ay * Math.sin(t * wash.sy + wash.py)) * h;
      ctx.globalAlpha = wash.alpha;
      ctx.fillStyle = wash.bright ? platinum : steel;
      ctx.beginPath();
      ctx.ellipse(x, y, wash.rx * base, wash.ry * base, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}
    />
  );
}
