import { useEffect, useRef } from 'react';

/* Private-OS Widget-Bibliothek — React-Port der Handoff-Canvas-Helfer
   (Count-up, Donut-Ring, Partikel-Orb, Area-/Kurven-Chart). Respektiert
   den Motion-Toggle des Private-OS-Shells (liest die Klasse
   `.po-motion-off` am nächstgelegenen `.private-os`-Root statt eines
   eigenen Zustands, damit ein einziger Schalter alles steuert). */

const EASE = (t: number) => 1 - Math.pow(1 - t, 3);

function isReduced(el: Element | null): boolean {
  return !!el?.closest('.private-os')?.classList.contains('po-motion-off');
}

function fitCanvas(cv: HTMLCanvasElement) {
  const r = cv.getBoundingClientRect();
  const d = Math.min(window.devicePixelRatio || 1, 2);
  cv.width = Math.max(2, Math.round(r.width * d));
  cv.height = Math.max(2, Math.round(r.height * d));
  const c = cv.getContext('2d')!;
  c.setTransform(d, 0, 0, d, 0, 0);
  return { c, w: r.width, h: r.height };
}

function hexA(hex: string, a: number) {
  const h = hex.replace('#', '');
  const r = parseInt(h.substr(0, 2), 16), g = parseInt(h.substr(2, 2), 16), b = parseInt(h.substr(4, 2), 16);
  return `rgba(${r},${g},${b},${a})`;
}

function smoothPath(c: CanvasRenderingContext2D, pts: { x: number; y: number }[]) {
  c.moveTo(pts[0].x, pts[0].y);
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i], p1 = pts[i + 1];
    const xc = (p0.x + p1.x) / 2;
    c.bezierCurveTo(xc, p0.y, xc, p1.y, p1.x, p1.y);
  }
}

/* ---------- Count-up (Zahl zählt beim Erscheinen hoch) ---------- */
export function CountUp({ to, decimals = 0, suffix = '', duration = 1150 }: { to: number; decimals?: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fmt = (v: number) => (decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString('de-DE'));
    if (isReduced(el)) { el.textContent = fmt(to); return; }
    let raf = 0;
    const t0 = performance.now();
    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      el.textContent = fmt(to * EASE(p));
      if (p < 1) raf = requestAnimationFrame(step);
      else el.textContent = fmt(to);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [to, duration]);
  return <span ref={ref} className="num">0{suffix}</span>;
}

/* ---------- Donut-Ring ---------- */
export function Ring({ pct, size = 64, className = '' }: { pct: number; size?: number; className?: string }) {
  const fgRef = useRef<SVGCircleElement>(null);
  const r = size / 2 - 4;
  const C = 2 * Math.PI * r;
  useEffect(() => {
    const fg = fgRef.current;
    if (!fg) return;
    fg.style.strokeDasharray = String(C);
    fg.style.strokeDashoffset = String(C);
    void fg.getBoundingClientRect();
    requestAnimationFrame(() => { fg.style.strokeDashoffset = String(C * (1 - pct / 100)); });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pct, C]);
  return (
    <div className={`po-ring ${className}`} style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
        <circle className="po-bgc" cx={size / 2} cy={size / 2} r={r} />
        <circle ref={fgRef} className="po-fgc" cx={size / 2} cy={size / 2} r={r} />
      </svg>
    </div>
  );
}

/* ---------- Partikel-Orb (Canvas) ---------- */
export function useOrb(ref: React.RefObject<HTMLCanvasElement | null>, pct: number, count = 120, active = true) {
  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const reduced = isReduced(cv);
    let running = false, raf = 0, t = 0, arcP = 0;
    let c: CanvasRenderingContext2D, W: number, H: number, cx: number, cy: number, R: number;
    let parts: { a: number; rad: number; sp: number; sz: number; ph: number; gold: boolean }[] = [];

    function setup() {
      const o = fitCanvas(cv!);
      c = o.c; W = o.w; H = o.h; cx = W / 2; cy = H / 2; R = Math.min(W, H) / 2 - 8;
      parts = Array.from({ length: count }, () => ({
        a: Math.random() * Math.PI * 2,
        rad: R * (0.5 + Math.random() * 0.46),
        sp: (0.06 + Math.random() * 0.22) * (Math.random() < 0.5 ? 1 : -1),
        sz: Math.random() * 1.7 + 0.4,
        ph: Math.random() * Math.PI * 2,
        gold: Math.random() < 0.16,
      }));
    }
    function draw() {
      c.clearRect(0, 0, W, H);
      const g = c.createRadialGradient(cx, cy, 0, cx, cy, R);
      g.addColorStop(0, 'rgba(201,169,110,0.10)');
      g.addColorStop(0.6, 'rgba(201,169,110,0.02)');
      g.addColorStop(1, 'rgba(0,0,0,0)');
      c.fillStyle = g; c.beginPath(); c.arc(cx, cy, R, 0, 7); c.fill();
      c.strokeStyle = 'rgba(184,188,196,0.10)'; c.lineWidth = 1;
      [0.62, 0.8].forEach((f) => { c.setLineDash([1, 5]); c.beginPath(); c.arc(cx, cy, R * f, 0, 7); c.stroke(); });
      c.setLineDash([]);
      c.strokeStyle = 'rgba(184,188,196,0.12)'; c.lineWidth = 3;
      c.beginPath(); c.arc(cx, cy, R * 0.94, 0, 7); c.stroke();
      for (const p of parts) {
        const a = p.a + t * p.sp;
        const x = cx + Math.cos(a) * p.rad, y = cy + Math.sin(a) * p.rad;
        const tw = 0.4 + 0.6 * (0.5 + 0.5 * Math.sin(p.ph + t * 1.4));
        c.beginPath(); c.arc(x, y, p.sz, 0, 7);
        c.fillStyle = p.gold ? `rgba(230,203,148,${tw})` : `rgba(216,218,222,${tw * 0.55})`;
        c.fill();
      }
      const start = -Math.PI / 2, end = start + Math.PI * 2 * (pct / 100) * arcP;
      c.lineCap = 'round'; c.lineWidth = 3.4; c.strokeStyle = '#C9A96E';
      c.shadowColor = 'rgba(201,169,110,0.7)'; c.shadowBlur = 12;
      c.beginPath(); c.arc(cx, cy, R * 0.94, start, end); c.stroke();
      c.shadowBlur = 0;
      const hx = cx + Math.cos(end) * R * 0.94, hy = cy + Math.sin(end) * R * 0.94;
      c.beginPath(); c.arc(hx, hy, 3.4, 0, 7); c.fillStyle = '#EEF0F4'; c.fill();
    }
    function loop() {
      t += 0.016;
      if (arcP < 1) arcP = Math.min(1, arcP + 0.018);
      draw();
      if (running) raf = requestAnimationFrame(loop);
    }
    setup();
    if (active) {
      if (reduced) { arcP = 1; draw(); } else { running = true; raf = requestAnimationFrame(loop); }
    } else {
      arcP = 1; t = 20; draw();
    }
    return () => { running = false; if (raf) cancelAnimationFrame(raf); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, pct, count, active]);
}

/* ---------- Area-/Kurven-Chart (Canvas) ---------- */
export function useAreaChart(ref: React.RefObject<HTMLCanvasElement | null>, vals: number[], opts?: { accent?: string; duration?: number; curve?: boolean }) {
  const accent = opts?.accent || '#9DBE9A';
  const duration = opts?.duration || 1300;
  const curve = !!opts?.curve;
  useEffect(() => {
    const cv = ref.current;
    if (!cv || vals.length < 2) return;
    const reduced = isReduced(cv);
    const padY = curve ? 22 : 14, padX = curve ? 14 : 0;
    const mn = Math.min(...vals), mx = Math.max(...vals), rng = mx - mn || 1;
    const { c, w: W, h: H } = fitCanvas(cv);
    const pts = vals.map((v, i) => ({ x: padX + (i / (vals.length - 1)) * (W - padX * 2), y: padY + (1 - (v - mn) / rng) * (H - padY * 2) }));
    let raf = 0;
    function render(prog: number) {
      c.clearRect(0, 0, W, H);
      c.save();
      c.beginPath(); c.rect(0, 0, W * prog, H); c.clip();
      c.beginPath(); smoothPath(c, pts);
      c.lineTo(pts[pts.length - 1].x, H); c.lineTo(pts[0].x, H); c.closePath();
      const g = c.createLinearGradient(0, 0, 0, H);
      if (curve) { g.addColorStop(0, 'rgba(201,169,110,0.22)'); g.addColorStop(0.5, 'rgba(47,88,98,0.12)'); g.addColorStop(1, 'rgba(47,88,98,0)'); }
      else { g.addColorStop(0, hexA(accent, 0.28)); g.addColorStop(1, hexA(accent, 0)); }
      c.fillStyle = g; c.fill();
      c.beginPath(); smoothPath(c, pts);
      if (curve) {
        const lg = c.createLinearGradient(0, 0, W, 0);
        lg.addColorStop(0, '#2F5862'); lg.addColorStop(1, '#C9A96E');
        c.strokeStyle = lg;
      } else {
        c.strokeStyle = accent;
        c.shadowColor = hexA(accent, 0.5); c.shadowBlur = 8;
      }
      c.lineWidth = curve ? 2.2 : 2; c.lineJoin = 'round'; c.stroke(); c.shadowBlur = 0;
      c.restore();
      if (curve) {
        pts.forEach((p, i) => { if (i % 2) return; c.beginPath(); c.arc(p.x, p.y, 2.4, 0, 7); c.fillStyle = 'rgba(236,237,239,0.7)'; c.fill(); });
      } else {
        const hp = pts[Math.min(pts.length - 1, Math.floor(prog * (pts.length - 1)))];
        if (hp) { c.beginPath(); c.arc(hp.x, hp.y, 3, 0, 7); c.fillStyle = '#EEF0F4'; c.fill(); }
      }
    }
    if (reduced) { render(1); return; }
    const t0 = performance.now();
    const step = (now: number) => {
      const prog = EASE(Math.min(1, (now - t0) / duration));
      render(prog);
      if (prog < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, vals.join(','), accent, duration, curve]);
}

/* ---------- Waveform-Balken ---------- */
export function Wave({ n = 60, played = 0.7, playing = true }: { n?: number; played?: number; playing?: boolean }) {
  const bars = Array.from({ length: n }, (_, i) => ({
    h: 20 + Math.abs(Math.sin(i * 0.7) * Math.cos(i * 0.19)) * 78,
    d: i * 22,
    played: i / n < played,
  }));
  return (
    <div className={`po-wave ${playing ? 'playing' : ''}`}>
      {bars.map((b, i) => (
        <i key={i} className={b.played ? 'played' : ''} style={{ ['--po-h' as string]: `${b.h.toFixed(0)}%`, ['--po-d' as string]: `${b.d}ms` }} />
      ))}
    </div>
  );
}
