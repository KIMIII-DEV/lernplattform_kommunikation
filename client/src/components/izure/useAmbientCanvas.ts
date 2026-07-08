import { RefObject, useEffect } from 'react';

/* Gemeinsamer Lifecycle für IZURE-Ambient-Canvas-Layer (Masterplan 4.4/8/9):
   DPR-aware Resize, ~30fps-Drossel, Pause bei verstecktem Tab,
   prefers-reduced-motion = exakt EIN statischer Frame (t=0), Cleanup.
   Die draw-Funktion bekommt (ctx, w, h, tSec) und liest Theme-Farben
   selbst aus den Tokens. */

const FRAME_MS = 1000 / 30;

export function useAmbientCanvas(
  canvasRef: RefObject<HTMLCanvasElement | null>,
  draw: (ctx: CanvasRenderingContext2D, w: number, h: number, tSec: number) => void
) {
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
      dpr = window.devicePixelRatio || 1;
      w = rect ? rect.width : window.innerWidth;
      h = rect ? rect.height : window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    };
    resize();

    const mq = matchMedia('(prefers-reduced-motion: reduce)');

    const frame = (tSec: number) => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      draw(ctx, w, h, tSec);
      ctx.globalAlpha = 1;
      ctx.filter = 'none';
    };

    let raf = 0;
    let last = 0;
    const start = performance.now();
    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      if (now - last < FRAME_MS) return;
      last = now;
      frame((now - start) / 1000);
    };

    const applyMotionPreference = () => {
      cancelAnimationFrame(raf);
      if (mq.matches) frame(0);
      else raf = requestAnimationFrame(tick);
    };

    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else applyMotionPreference();
    };
    const onResize = () => {
      resize();
      if (mq.matches) frame(0);
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
    // draw ist bewusst stabil zu halten (Modul-Konstanten) — kein Re-Subscribe pro Render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export function readSilverTokens() {
  const rootStyle = getComputedStyle(document.documentElement);
  return {
    steel: rootStyle.getPropertyValue('--accent-primary').trim() || '#B8BCC4',
    platinum: rootStyle.getPropertyValue('--accent-primary-bright').trim() || '#D8DADE',
  };
}
