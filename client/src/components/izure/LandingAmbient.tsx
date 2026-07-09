import { useEffect, useRef } from 'react';

/* IZURE Landing-Ambient — Masterplan v3, Abschnitt 4.4.
   Netzwerk-Graph-Charakter (Punktfeld + Verbindungslinien zwischen nahen
   Knoten), handgerollt in Canvas2D — kein Fremdcode, kein WebGL, kein
   Farbverlauf. Ausschließlich Silber (--accent-primary/-bright); Oxblood
   bleibt exklusiv kritischen Zuständen vorbehalten.

   Bewegung: langsamer, zeitbasierter Sinus-Drift um fixe Basispositionen
   ("kontrolliert, nie gehetzt") — kein physikbasiertes Bouncing.
   prefers-reduced-motion: exakt EIN statischer Frame (Startposition),
   kein Loop — sichtbar bleiben, nicht ersatzlos entfernen.
   Wird von Landing.tsx lazy geladen (eigener Chunk, nur auf der Landing). */

const LINK_DIST = 150;
const NODE_ALPHA_MIN = 0.15;
const NODE_ALPHA_MAX = 0.25;
const LINE_ALPHA_MAX = 0.12;
const FRAME_MS = 1000 / 30; // ~30fps reicht für Drift dieser Geschwindigkeit

interface Node {
  bx: number; // Basisposition (relativ 0–1, skaliert bei Resize)
  by: number;
  ax: number; // Drift-Amplituden (px)
  ay: number;
  sx: number; // Drift-Geschwindigkeiten (rad/s)
  sy: number;
  px: number; // Phasen
  py: number;
  r: number;
  alpha: number;
  bright: boolean; // ~1/6 in --accent-primary-bright
}

function makeNodes(count: number): Node[] {
  return Array.from({ length: count }, (_, i) => ({
    bx: Math.random(),
    by: Math.random(),
    ax: 8 + Math.random() * 10,
    ay: 8 + Math.random() * 10,
    sx: (Math.PI * 2) / (6 + Math.random() * 8),
    sy: (Math.PI * 2) / (6 + Math.random() * 8),
    px: Math.random() * Math.PI * 2,
    py: Math.random() * Math.PI * 2,
    r: 1 + Math.random(),
    alpha: NODE_ALPHA_MIN + Math.random() * (NODE_ALPHA_MAX - NODE_ALPHA_MIN),
    bright: i % 6 === 0,
  }));
}

export default function LandingAmbient() {
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
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      dpr = window.devicePixelRatio || 1;
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    };
    resize();

    // ~50 Knoten auf voller Hero-Fläche, flächenskaliert und gedeckelt
    const nodes = makeNodes(Math.min(60, Math.max(30, Math.round((w * h) / 28000))));

    const mq = matchMedia('(prefers-reduced-motion: reduce)');

    const draw = (tSec: number) => {
      // Tokens pro Frame lesen — folgt dem Theme-Toggle live, eine Abfrage
      // pro Frame bei 30fps ist vernachlässigbar.
      const rootStyle = getComputedStyle(document.documentElement);
      const steel = rootStyle.getPropertyValue('--accent-primary').trim() || '#B8BCC4';
      const platinum = rootStyle.getPropertyValue('--accent-primary-bright').trim() || '#D8DADE';

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const pts = nodes.map((n) => ({
        x: n.bx * w + n.ax * Math.sin(tSec * n.sx + n.px),
        y: n.by * h + n.ay * Math.sin(tSec * n.sy + n.py),
        n,
      }));

      // Linien: Alpha steigt linear mit Nähe, gedeckelt bei LINE_ALPHA_MAX
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist >= LINK_DIST) continue;
          ctx.globalAlpha = LINE_ALPHA_MAX * (1 - dist / LINK_DIST);
          ctx.strokeStyle = steel;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[j].x, pts[j].y);
          ctx.stroke();
        }
      }

      for (const p of pts) {
        ctx.globalAlpha = p.n.alpha;
        ctx.fillStyle = p.n.bright ? platinum : steel;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.n.r, 0, Math.PI * 2);
        ctx.fill();
      }
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
        draw(0); // eingefroren auf Startposition — ein Frame, kein Loop
      } else {
        raf = requestAnimationFrame(tick);
      }
    };

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else {
        applyMotionPreference();
      }
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
