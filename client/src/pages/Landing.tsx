import { useEffect, useRef, useState } from 'react';

export default function LandingPage({ navigate }: { navigate: (to: string) => void }) {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 30_000);
    return () => clearInterval(t);
  }, []);

  const stageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const x = e.clientX / w - 0.5;
      const y = e.clientY / h - 0.5;
      el.style.setProperty('--mx', x.toFixed(3));
      el.style.setProperty('--my', y.toFixed(3));
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const tStr = time.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  const dStr = time.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase();

  return (
    <div
      ref={stageRef}
      className="page-root"
      data-screen-label="01 Landing"
      style={
        {
          position: 'fixed',
          inset: 0,
          background: '#0F0D0B',
          overflow: 'hidden',
          ['--mx' as any]: 0,
          ['--my' as any]: 0,
        } as React.CSSProperties
      }
    >
      <AmbientField />

      {/* Bordeaux side curtains */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 180,
          background: 'linear-gradient(to right, rgba(90,31,34,0.32), transparent 80%)',
          pointerEvents: 'none',
          mixBlendMode: 'multiply',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: 220,
          background: 'linear-gradient(to left, rgba(90,31,34,0.25), transparent 80%)',
          pointerEvents: 'none',
          mixBlendMode: 'multiply',
        }}
      />

      {/* Ghost numerals */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '36%',
          top: '52%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'Cormorant Garamond, serif',
          fontStyle: 'italic',
          fontSize: '40vw',
          lineHeight: 0.85,
          color: 'var(--accent-bordeaux-dim)',
          opacity: 0.1,
          letterSpacing: '-0.04em',
          userSelect: 'none',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        XXVI
      </div>

      {/* Top meta strip */}
      <header
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          padding: '28px 56px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          zIndex: 10,
        }}
      >
        <div
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 28,
            letterSpacing: '0.04em',
            color: 'var(--text-primary)',
          }}
        >
          izure<span style={{ color: 'var(--accent)' }}>.</span>
        </div>
        <div style={{ display: 'flex', gap: 36, color: 'var(--text-muted)' }}>
          <Meta k="EST." v="MMXXVI" />
          <Meta k="LOCAL" v={tStr} />
          <Meta k="DATE" v={dStr} />
        </div>
      </header>

      {/* Left icon sidebar */}
      <aside
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 80,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 40,
          zIndex: 10,
          borderRight: '1px solid var(--line-subtle)',
          background: 'rgba(15,13,11,0.4)',
          backdropFilter: 'blur(2px)',
        }}
      >
        <SideIcon label="Home" active onClick={() => {}} icon={<IconGlobe />} />
        <SideIcon label="About" onClick={() => navigate('/about')} icon={<IconHome />} />
        <SideIcon label="Moods" onClick={() => navigate('/moodboards')} icon={<IconGrid />} />
        <SideIcon label="The Cellar" onClick={() => navigate('/cellar')} icon={<IconBook />} />
        <SideIcon label="Backroom" onClick={() => navigate('/login')} icon={<IconLock />} bordeaux />
      </aside>

      {/* Right polaroid stack */}
      <div
        style={{
          position: 'absolute',
          right: 80,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 8,
          display: 'flex',
          flexDirection: 'column',
          gap: 26,
          width: 250,
        }}
      >
        <Thumbnail variant="curtain" tag="01" caption="curtain · 2:14am" rotate={-3} delay={300} offsetX={20} />
        <Thumbnail variant="window" tag="02" caption="downstairs · side B" rotate={2} delay={600} offsetX={-10} />
        <Thumbnail variant="ember" tag="03" caption="last ember · 3:11am" rotate={-1.5} delay={900} offsetX={30} framed />
      </div>

      {/* Center brand block */}
      <main
        style={{
          position: 'absolute',
          left: 140,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 9,
          maxWidth: 880,
        }}
      >
        <div
          style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 32, color: 'var(--accent)' }}
        >
          <div style={{ width: 56, height: 1, background: 'var(--accent-dim)' }} />
          <div
            style={{
              fontFamily: 'Cinzel, serif',
              fontSize: 10,
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
            }}
          >
            © · &nbsp;a place · not a page · &nbsp;©
          </div>
        </div>

        <div style={{ position: 'relative', display: 'inline-block', marginBottom: 22 }}>
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: -56,
              top: -36,
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(170px, 22vw, 280px)',
              lineHeight: 1,
              color: 'var(--accent-bordeaux-light)',
              opacity: 0.85,
              transform: 'rotate(-6deg)',
              pointerEvents: 'none',
              mixBlendMode: 'screen',
              filter: 'drop-shadow(0 8px 18px rgba(90,31,34,0.5))',
            }}
          >
            I
          </span>

          <h1
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 300,
              fontSize: 'clamp(120px, 16vw, 220px)',
              lineHeight: 0.9,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
              position: 'relative',
              margin: 0,
            }}
          >
            <span style={{ opacity: 0 }}>I</span>ZURE
          </h1>

          <div
            style={{
              position: 'absolute',
              right: -50,
              top: -10,
              fontFamily: 'Cinzel, serif',
              fontSize: 9,
              letterSpacing: '0.3em',
              color: 'var(--accent)',
              textTransform: 'uppercase',
              transform: 'rotate(8deg)',
              border: '1px solid var(--accent-dim)',
              padding: '4px 8px',
            }}
          >
            №&nbsp;01
          </div>
        </div>

        <p
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(20px, 1.8vw, 28px)',
            color: 'var(--text-secondary)',
            maxWidth: 560,
            margin: '0 0 48px',
            lineHeight: 1.3,
          }}
        >
          Built from cinema, espresso, music &amp; memory.
        </p>

        <div style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
          <button
            onClick={() => navigate('/login')}
            style={{
              padding: '16px 36px',
              border: '1px solid var(--accent)',
              background: 'transparent',
              color: 'var(--text-primary)',
              fontFamily: 'Cinzel, serif',
              fontSize: 11,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 600ms var(--ease)',
            }}
            onMouseOver={(e) => {
              const t = e.currentTarget;
              t.style.background = 'rgba(176,141,87,0.08)';
              t.style.color = 'var(--accent-light)';
              t.style.letterSpacing = '0.34em';
            }}
            onMouseOut={(e) => {
              const t = e.currentTarget;
              t.style.background = 'transparent';
              t.style.color = 'var(--text-primary)';
              t.style.letterSpacing = '0.3em';
            }}
          >
            Step inside
          </button>
          <button
            onClick={() => navigate('/cellar')}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-secondary)',
              fontFamily: 'Cinzel, serif',
              fontSize: 11,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              transition: 'all 400ms var(--ease)',
            }}
            onMouseOver={(e) => {
              const t = e.currentTarget;
              t.style.color = 'var(--accent-light)';
              t.style.gap = '20px';
            }}
            onMouseOut={(e) => {
              const t = e.currentTarget;
              t.style.color = 'var(--text-secondary)';
              t.style.gap = '14px';
            }}
          >
            <span>Visit the cellar</span>
            <span style={{ color: 'var(--accent)' }}>→</span>
          </button>
        </div>
      </main>

      {/* Bottom-left: Now Playing */}
      <div
        style={{
          position: 'absolute',
          left: 110,
          bottom: 36,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          zIndex: 10,
        }}
      >
        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: '50%',
            background: 'radial-gradient(circle at center, var(--accent) 0 18%, #0a0805 19% 100%)',
            animation: 'lpSpin 4s linear infinite',
            position: 'relative',
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.6)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: 4,
              height: 4,
              borderRadius: '50%',
              background: '#0a0805',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </div>
        <div>
          <div
            style={{
              fontFamily: 'Cinzel, serif',
              fontSize: 9,
              letterSpacing: '0.3em',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              marginBottom: 4,
            }}
          >
            · now playing · side B ·
          </div>
          <div
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: 16,
              color: 'var(--text-primary)',
            }}
          >
            Ma Quale Idea <span style={{ color: 'var(--text-muted)' }}>— Pino D'Angiò</span>
          </div>
        </div>
      </div>

      {/* Bottom-right vertical hint */}
      <div
        style={{
          position: 'absolute',
          right: 36,
          bottom: 36,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 14,
          zIndex: 10,
          color: 'var(--text-muted)',
        }}
      >
        <div
          style={{
            writingMode: 'vertical-rl',
            fontFamily: 'Cinzel, serif',
            fontSize: 9,
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
          }}
        >
          ENTER · QUIETLY
        </div>
        <div style={{ width: 1, height: 56, background: 'linear-gradient(to bottom, var(--accent), transparent)' }} />
      </div>
    </div>
  );
}

function Meta({ k, v }: { k: string; v: string }) {
  return (
    <div style={{ textAlign: 'right' }}>
      <div
        style={{
          fontFamily: 'Cinzel, serif',
          fontSize: 8,
          letterSpacing: '0.35em',
          color: 'var(--text-muted)',
          marginBottom: 2,
        }}
      >
        {k}
      </div>
      <div style={{ fontFamily: 'Cinzel, serif', fontSize: 11, letterSpacing: '0.18em', color: 'var(--text-primary)' }}>
        {v}
      </div>
    </div>
  );
}

function SideIcon({
  icon,
  label,
  onClick,
  active,
  bordeaux,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  active?: boolean;
  bordeaux?: boolean;
}) {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 8,
        color: active
          ? 'var(--accent)'
          : bordeaux
            ? 'var(--accent-bordeaux-light)'
            : hover
              ? 'var(--accent-light)'
              : 'var(--text-secondary)',
        transition: 'all 400ms var(--ease)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
      }}
    >
      <div style={{ width: 22, height: 22 }}>{icon}</div>
      <div
        style={{
          fontFamily: 'Cinzel, serif',
          fontSize: 7,
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          opacity: hover || active ? 1 : 0.55,
          transition: 'opacity 400ms var(--ease)',
        }}
      >
        {label}
      </div>
      {active && (
        <span
          style={{
            position: 'absolute',
            left: -1,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 2,
            height: 28,
            background: 'var(--accent)',
          }}
        />
      )}
    </button>
  );
}

const IconGlobe = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round">
    <circle cx={12} cy={12} r={9} />
    <path d="M3 12h18" />
    <path d="M12 3c2.5 3 2.5 15 0 18" />
    <path d="M12 3c-2.5 3-2.5 15 0 18" />
  </svg>
);
const IconHome = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round">
    <path d="M3 11l9-7 9 7v10H3z" />
    <path d="M9 21v-7h6v7" />
  </svg>
);
const IconGrid = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}>
    <rect x={3} y={3} width={7} height={7} />
    <rect x={14} y={3} width={7} height={7} />
    <rect x={3} y={14} width={7} height={7} />
    <rect x={14} y={14} width={7} height={7} />
  </svg>
);
const IconBook = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round">
    <path d="M4 4h7v16H4z" />
    <path d="M13 4h7v16h-7z" />
    <path d="M4 8h7M13 8h7M4 12h7M13 12h7" />
  </svg>
);
const IconLock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round">
    <rect x={5} y={11} width={14} height={10} />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    <circle cx={12} cy={16} r={1.2} fill="currentColor" />
  </svg>
);

function Thumbnail({
  variant = 'curtain',
  tag,
  caption,
  rotate = 0,
  delay = 0,
  offsetX = 0,
  framed,
}: {
  variant?: 'curtain' | 'window' | 'ember';
  tag: string;
  caption?: string;
  rotate?: number;
  delay?: number;
  offsetX?: number;
  framed?: boolean;
}) {
  return (
    <div
      style={
        {
          position: 'relative',
          transform: `translateX(calc(var(--mx) * -16px + ${offsetX}px)) translateY(calc(var(--my) * -10px)) rotate(${rotate}deg)`,
          ['--rot' as any]: `${rotate}deg`,
          opacity: 0,
          animation: `thumbIn 1000ms cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}ms forwards`,
          transition: 'transform 600ms cubic-bezier(0.25, 0.1, 0.25, 1)',
          willChange: 'transform',
        } as React.CSSProperties
      }
    >
      <div
        style={{
          position: 'relative',
          background: framed ? 'var(--bg-card)' : 'transparent',
          padding: framed ? 12 : 0,
          border: framed ? '1px solid rgba(176,141,87,0.22)' : 'none',
          boxShadow: '0 18px 36px rgba(0,0,0,0.7), 0 4px 10px rgba(0,0,0,0.4)',
        }}
      >
        <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', overflow: 'hidden' }}>
          <ThumbScene variant={variant} />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
              opacity: 0.45,
              mixBlendMode: 'overlay',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 10,
              left: 12,
              fontFamily: 'Cinzel, serif',
              fontSize: 9,
              letterSpacing: '0.3em',
              color: 'var(--accent-light)',
              textShadow: '0 1px 2px rgba(0,0,0,0.8)',
            }}
          >
            {tag}
          </div>
        </div>
      </div>
      {caption && (
        <div
          style={{
            marginTop: 10,
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: 12,
            color: 'var(--text-muted)',
            textAlign: 'right',
            paddingRight: 6,
          }}
        >
          {caption}
        </div>
      )}
    </div>
  );
}

function ThumbScene({ variant }: { variant: 'curtain' | 'window' | 'ember' }) {
  if (variant === 'curtain') {
    return (
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(105deg, rgba(0,0,0,0.6) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.8) 100%), repeating-linear-gradient(95deg, #5A1F22 0px, #3a1316 4px, #5A1F22 8px, #6e272a 11px), radial-gradient(ellipse at 50% 30%, #7a2a2e, #2a0e10 80%)',
          backgroundBlendMode: 'multiply, overlay, normal',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'repeating-linear-gradient(95deg, transparent 0px, transparent 20px, rgba(0,0,0,0.35) 22px, transparent 28px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '60%',
            width: 120,
            height: 120,
            background: 'radial-gradient(circle, rgba(201,169,110,0.5), transparent 70%)',
            filter: 'blur(8px)',
          }}
        />
      </div>
    );
  }
  if (variant === 'window') {
    return (
      <div style={{ position: 'absolute', inset: 0, background: '#0a0805' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 50% 110%, rgba(176,141,87,0.18), transparent 60%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: '20%',
            top: '20%',
            right: '20%',
            bottom: '32%',
            background:
              'linear-gradient(180deg, rgba(176,141,87,0.45) 0%, rgba(90,31,34,0.55) 40%, rgba(20,10,8,0.9) 100%)',
            border: '1px solid rgba(40,30,20,0.9)',
            boxShadow: '0 10px 30px rgba(176,141,87,0.18), inset 0 0 30px rgba(0,0,0,0.5)',
          }}
        >
          <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 1, background: 'rgba(15,10,8,0.95)' }} />
          <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 1, background: 'rgba(15,10,8,0.95)' }} />
        </div>
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: '30%',
            background: 'linear-gradient(to bottom, transparent, rgba(176,141,87,0.06))',
          }}
        />
      </div>
    );
  }
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#0a0604' }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 70% 50% at 50% 80%, rgba(50,30,20,0.95), transparent 70%), radial-gradient(circle at 50% 65%, rgba(201,90,40,0.65), transparent 25%), radial-gradient(circle at 50% 65%, rgba(255,200,80,0.95), transparent 8%)',
        }}
      />
    </div>
  );
}

function AmbientField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth * devicePixelRatio;
      canvas.height = window.innerHeight * devicePixelRatio;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
    };
    resize();
    window.addEventListener('resize', resize);

    const motes = Array.from({ length: 32 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: (0.4 + Math.random() * 1.6) * devicePixelRatio,
      vx: (Math.random() - 0.5) * 0.15 * devicePixelRatio,
      vy: -(0.05 + Math.random() * 0.25) * devicePixelRatio,
      a: 0.15 + Math.random() * 0.45,
      tw: Math.random() * Math.PI * 2,
    }));

    let raf = 0;
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      motes.forEach((m) => {
        m.x += m.vx;
        m.y += m.vy;
        m.tw += 0.02;
        if (m.y < -20) {
          m.y = canvas.height + 20;
          m.x = Math.random() * canvas.width;
        }
        if (m.x < -20) m.x = canvas.width + 20;
        if (m.x > canvas.width + 20) m.x = -20;
        const alpha = m.a * (0.5 + 0.5 * Math.sin(m.tw));
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 169, 110, ${alpha.toFixed(3)})`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(176, 141, 87, ${(alpha * 0.08).toFixed(3)})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 70% 60% at 25% 110%, rgba(90,31,34,0.45), transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 50% 40% at 85% 10%, rgba(176,141,87,0.10), transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.55) 100%)',
          pointerEvents: 'none',
        }}
      />
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
    </>
  );
}
