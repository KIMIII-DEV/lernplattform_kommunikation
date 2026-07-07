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

/* ----------- Footer ----------- */
export function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-grid">
          <div className="closing">
            "Kept quiet.
            <br />
            Kept exact."
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
          <span>All hours warm</span>
        </div>
      </div>
    </footer>
  );
}
