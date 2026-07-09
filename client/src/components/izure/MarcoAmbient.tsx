import { useRef } from 'react';
import { readSilverTokens, useAmbientCanvas } from './useAmbientCanvas';

/* IZURE Marco-Ambient — Masterplan v3, Phase 9 (Marco-Interface):
   Sonar-/Radar-Sweep-Charakter — rotierender Strahl mit Nachleuchten
   plus konzentrische Standringe, monochrom Silber. Deckt sich mit der
   One-Way-Glass-Metapher (Beobachtungsscheibe): das Voll-Glas-Panel
   liegt darüber und blurrt den Sweep. reduced-motion: Sweep steht. */

const SWEEP_PERIOD = 14; // Sekunden pro Umdrehung — "kontrolliert, nie gehetzt"
const RINGS = [0.22, 0.38, 0.54];

export default function MarcoAmbient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useAmbientCanvas(canvasRef, (ctx, w, h, t) => {
    const { steel, platinum } = readSilverTokens();
    const cx = w * 0.72;
    const cy = h * 0.55;
    const maxR = Math.min(w, h) * 0.6;

    // Standringe
    ctx.globalAlpha = 0.05;
    ctx.strokeStyle = steel;
    ctx.lineWidth = 1;
    for (const r of RINGS) {
      ctx.beginPath();
      ctx.arc(cx, cy, maxR * r, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Sweep mit Nachleuchten: mehrere Segmente hinter der Strahlspitze
    const angle = ((t % SWEEP_PERIOD) / SWEEP_PERIOD) * Math.PI * 2;
    const trail = 24;
    for (let i = 0; i < trail; i++) {
      const a = angle - i * 0.035;
      ctx.globalAlpha = 0.09 * (1 - i / trail);
      ctx.strokeStyle = i === 0 ? platinum : steel;
      ctx.lineWidth = i === 0 ? 1.5 : 1;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(a) * maxR * 0.58, cy + Math.sin(a) * maxR * 0.58);
      ctx.stroke();
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
