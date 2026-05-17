import { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react';

/* ----------- CineImg ----------- */
export function CineImg({
  src,
  alt,
  className,
  style,
  fade,
  dark,
}: {
  src: string;
  alt?: string;
  className?: string;
  style?: CSSProperties;
  fade?: boolean;
  dark?: boolean;
}) {
  const cls = `cine-img ${className || ''} ${fade ? 'img-fade' : ''}`;
  const filter = dark
    ? 'brightness(0.62) contrast(1.12) saturate(0.7) sepia(0.18)'
    : 'brightness(1.02) contrast(1.04) saturate(0.85) sepia(0.10)';
  return (
    <div
      className={cls}
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter,
        ...style,
      }}
      role="img"
      aria-label={alt}
    />
  );
}

/* ----------- Grain ----------- */
export function GrainFilter() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <filter id="grain-filter">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves={2} stitchTiles="stitch" seed={3} />
        <feColorMatrix type="saturate" values="0" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="1.4" intercept="-0.2" />
        </feComponentTransfer>
      </filter>
    </svg>
  );
}

export function GrainOverlay() {
  return (
    <div className="grain-overlay" aria-hidden="true">
      <svg width="100%" height="100%">
        <rect width="100%" height="100%" filter="url(#grain-filter)" />
      </svg>
    </div>
  );
}

/* ----------- GhostText ----------- */
export function GhostText({
  children,
  top,
  left,
  right,
  bottom,
  size = '22vw',
  style,
}: {
  children: ReactNode;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  size?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const offset = (window.innerHeight / 2 - rect.top) * 0.05;
      el.style.transform = `translateY(${offset}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div
      ref={ref}
      className="ghost-text"
      style={{ top, left, right, bottom, fontSize: size, ...style }}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}

/* ----------- GoldLine ----------- */
export function GoldLine({
  label,
  align = 'center',
  ornament = '·',
}: {
  label?: ReactNode;
  align?: 'left' | 'center' | 'right';
  ornament?: string;
}) {
  return (
    <div className={`gold-line ${align}`}>
      {label ? <span>{label}</span> : <span style={{ color: 'var(--accent)' }}>{ornament}</span>}
    </div>
  );
}

/* ----------- SectionHead ----------- */
export function SectionHead({
  eyebrow,
  title,
  intro,
  align = 'left',
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  intro?: ReactNode;
  align?: 'left' | 'center' | 'right';
}) {
  return (
    <header style={{ marginBottom: 64, textAlign: align, position: 'relative', zIndex: 2 }}>
      {eyebrow && (
        <div className="t-label" style={{ color: 'var(--accent)', marginBottom: 24 }}>
          {eyebrow}
        </div>
      )}
      <h2 className="t-display" style={{ fontSize: 'clamp(48px, 7vw, 84px)', marginBottom: 24 }}>
        {title}
      </h2>
      {intro && (
        <p className="t-body" style={{ maxWidth: 560, fontSize: 16 }}>
          {intro}
        </p>
      )}
    </header>
  );
}

/* ----------- PublicNav ----------- */
export function PublicNav({
  current,
  navigate,
}: {
  current: string;
  navigate: (to: string) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
    { id: '/cellar', label: 'The Cellar' },
    { id: '/about', label: 'About' },
    { id: '/moodboards', label: 'Moodboards' },
  ];
  return (
    <nav className={`pub-nav ${scrolled ? 'scrolled' : ''}`}>
      <a
        href="#/"
        onClick={(e) => {
          e.preventDefault();
          navigate('/');
        }}
        className="brand"
      >
        IZURE<span className="dot">.</span>
      </a>
      <div className="pub-nav-links">
        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            onClick={(e) => {
              e.preventDefault();
              navigate(l.id);
            }}
            className={current === l.id ? 'active' : ''}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#/login"
          onClick={(e) => {
            e.preventDefault();
            navigate('/login');
          }}
          className="enter-link"
        >
          The Backroom
        </a>
      </div>
    </nav>
  );
}

/* ----------- PrivateNav ----------- */
export function PrivateNav({
  current,
  navigate,
  lock,
}: {
  current: string;
  navigate: (to: string) => void;
  lock: () => void;
}) {
  const links = [
    { id: '/private', label: 'The Backroom' },
    { id: '/private/learn', label: 'Study' },
    { id: '/private/barkeeper', label: 'The Barkeeper' },
    { id: '/private/news', label: 'Wire' },
  ];
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '22px 64px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(22, 15, 10, 0.92)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid var(--line-subtle)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <a
          href="#/private"
          onClick={(e) => {
            e.preventDefault();
            navigate('/private');
          }}
          style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: 24 }}
        >
          IZURE
        </a>
        <span style={{ width: 1, height: 16, background: 'var(--line-subtle)' }} />
        <span className="t-label" style={{ fontSize: 9, color: 'var(--accent)' }}>
          BACKROOM · OPEN
        </span>
      </div>
      <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            onClick={(e) => {
              e.preventDefault();
              navigate(l.id);
            }}
            style={{
              fontFamily: 'Cinzel, serif',
              fontSize: 11,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              color: current === l.id ? 'var(--text-primary)' : 'var(--text-secondary)',
              position: 'relative',
              paddingLeft: current === l.id ? 14 : 0,
            }}
          >
            {current === l.id && (
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--accent)',
                }}
              >
                ·
              </span>
            )}
            {l.label}
          </a>
        ))}
        <button
          onClick={lock}
          style={{
            fontFamily: 'Cinzel, serif',
            fontSize: 9,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            background: 'none',
            border: '1px solid var(--line-subtle)',
            padding: '8px 14px',
            cursor: 'pointer',
          }}
        >
          Step out
        </button>
      </div>
    </nav>
  );
}

/* ----------- Footer ----------- */
export function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-grid">
          <div className="closing">
            "Old-world charisma
            <br />
            in digital form."
          </div>
          <div className="links">
            <div className="t-label" style={{ color: 'var(--accent)', marginBottom: 8 }}>
              Channels
            </div>
            <a href="#">Instagram</a>
            <a href="#">Spotify</a>
            <a href="#">Letterboxd</a>
            <a href="#">Pinterest</a>
          </div>
          <div className="links">
            <div className="t-label" style={{ color: 'var(--accent)', marginBottom: 8 }}>
              Etc.
            </div>
            <a href="#">Press</a>
            <a href="#">Contact</a>
            <a href="#">Colophon</a>
          </div>
        </div>
        <div className="meta">
          <span>Izure — Estd. MMXXVI</span>
          <span>Italian Noir · Bohemian</span>
          <span>All hours warm</span>
        </div>
      </div>
    </footer>
  );
}
