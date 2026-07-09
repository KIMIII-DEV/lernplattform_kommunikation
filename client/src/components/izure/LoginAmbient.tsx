import { useEffect, useRef } from 'react';

/* IZURE Login-Ambient — Masterplan v3, Phase 8.
   Liquid/Chrome-Morph-Charakter, reinterpretiert im Silber-Token-System:
   wenige große, weich geblurte Silber-Flächen, die langsam ineinander
   morphen — Schwellenmoment vor dem Eintritt. Handgerollt (Canvas2D),
   monochrom (nur --accent-primary/-bright), kein Multi-Hue-Verlauf.
   Gleiche Pflichten wie 4.4: lazy (eigener Chunk, nur Login), ~30fps,
   Tab-Pause, prefers-reduced-motion = 1 statischer Frame. */

const FRAME_MS = 1000 / 30;

interface Blob {
  bx: number;
  by: number;
  r: number; // Basisradius (relativ zur kleineren Viewport-Kante)
  ax: number;
  ay: number;
  ar: number; // Radius-Atmung
  sx: number;
  sy: number;
  sr: number;
  px: number;
  py: number;
  pr: number;
  alpha: number;
  bright: boolean;
}

function makeBlobs(): Blob[] {
  return Array.from({ length: 4 }, (_, i) => ({
    bx: 0.2 + Math.random() * 0.6,
    by: 0.25 + Math.random() * 0.5,
    r: 0.18 + Math.random() * 0.14,
    ax: 0.06 + Math.random() * 0.08,
    ay: 0.05 + Math.random() * 0.07,
    ar: 0.03 + Math.random() * 0.04,
    sx: (Math.PI * 2) / (14 + Math.random() * 10),
    sy: (Math.PI * 2) / (16 + Math.random() * 12),
    sr: (Math.PI * 2) / (10 + Math.random() * 8),
    px: Math.random() * Math.PI * 2,
    py: Math.random() * Math.PI * 2,
    pr: Math.random() * Math.PI * 2,
    alpha: 0.035 + Math.random() * 0.025, // ≤0.06
    bright: i === 0,
  }));
}

export default function LoginAmbient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let dpr = 1;
    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    };
    resize();

    const blobs = makeBlobs();
    const mq = matchMedia('(prefers-reduced-motion: reduce)');

    const draw = (tSec: number) => {
      const rootStyle = getComputedStyle(document.documentElement);
      const steel = rootStyle.getPropertyValue('--accent-primary').trim() || '#B8BCC4';
      const platinum = rootStyle.getPropertyValue('--accent-primary-bright').trim() || '#D8DADE';

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      const base = Math.min(w, h);

      // Weicher Blur macht aus den Kreisen ineinanderlaufende Flächen —
      // der "Liquid"-Charakter entsteht aus Überlappung, nicht aus Shadern.
      ctx.filter = `blur(${Math.round(base * 0.06)}px)`;
      for (const b of blobs) {
        const x = (b.bx + b.ax * Math.sin(tSec * b.sx + b.px)) * w;
        const y = (b.by + b.ay * Math.sin(tSec * b.sy + b.py)) * h;
        const r = (b.r + b.ar * Math.sin(tSec * b.sr + b.pr)) * base;
        ctx.globalAlpha = b.alpha;
        ctx.fillStyle = b.bright ? platinum : steel;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.filter = 'none';
      ctx.globalAlpha = 1;
    };

    let raf = 0;
    let last = 0;
    const start = performance.now();
    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      if (now - last < FRAME_MS) return;
      last = now;
      draw((now - start) / 1000);
    };

    const applyMotionPreference = () => {
      cancelAnimationFrame(raf);
      if (mq.matches) {
        draw(0);
      } else {
        raf = requestAnimationFrame(tick);
      }
    };

    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else applyMotionPreference();
    };
    const onResize = () => {
      resize();
      if (mq.matches) draw(0);
    };

    applyMotionPreference();
    mq.addEventListener('change', applyMotionPreference);
    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      mq.removeEventListener('change', applyMotionPreference);
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
    />
  );
}
