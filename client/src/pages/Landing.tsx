import { useEffect, useMemo, useRef, useState } from 'react';
import { AtSign, Bug, Coffee, LayoutGrid, LogIn, Mail, Moon, Pause, Play, Sun, TrendingUp, UserRound } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Seal, StatChain } from '@/components/primitives';
import { useTheme } from '@/contexts/ThemeContext';
import IzxAmbient from '@/experience/IzxAmbient';
import { LANDING_MUSIC_URL, WATCHLIST } from '@/lib/publicData';
import '@/experience/experience.css';

/* IZURÉ Landing — Public Cockpit (IMG_0409). Das Cockpit-DESIGN bleibt
   (Glass-Panel, Rail, zwei rechte Karten, Dock, IZURÉ-Chrome, Ambient) —
   nur der INHALT ist public: Rail = direkte Public-Nav, oben rechts Stocks
   (statt Fortschritt), unten rechts das Lautstärke-Pegelrad (statt Navigator).
   Keine Lernecke, keine Szenen — jede Sektion ist mit EINEM Klick erreichbar.
   Die echte Lernecke lebt privat unter /private/learn. */

const BOOT_MS = 1520;

// Direkte Navigation — ein Klick pro Sektion (Rail).
const NAV: { to: string; label: string; icon: LucideIcon }[] = [
  { to: '/about', label: 'About', icon: UserRound },
  { to: '/moodboards', label: 'Moods · Playlists', icon: LayoutGrid },
  { to: '/socials', label: 'Socials', icon: AtSign },
  { to: '/stocks', label: 'Stocks', icon: TrendingUp },
  { to: '/coffee', label: 'Buy me a coffee', icon: Coffee },
  { to: '/contact', label: 'Contact', icon: Mail },
  { to: '/report-bug', label: 'Report a Bug', icon: Bug },
];
// Prominente Schnell-Pills oben (Teilmenge, ebenfalls Direkt-Nav).
const PILLS = [
  { to: '/about', label: 'About' },
  { to: '/moodboards', label: 'Moods' },
  { to: '/stocks', label: 'Stocks' },
  { to: '/coffee', label: 'Coffee' },
];

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  useEffect(() => {
    const mq = matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return reduced;
}

export default function LandingPage({ navigate }: { navigate: (to: string) => void }) {
  const reducedMotion = usePrefersReducedMotion();
  const { theme, toggleTheme, switchable } = useTheme();
  const [booted, setBooted] = useState(reducedMotion);
  const [time, setTime] = useState(() => new Date());
  const [volume, setVolume] = useState(35);
  const [playing, setPlaying] = useState(false);
  const panelRef = useRef<HTMLElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (reducedMotion) { setBooted(true); return; }
    const t = setTimeout(() => setBooted(true), BOOT_MS);
    return () => clearTimeout(t);
  }, [reducedMotion]);

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 30_000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume / 100;
  }, [volume]);

  // Panel-Tilt (nicht auf Touch)
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (matchMedia('(hover: none)').matches) return;
      const panel = panelRef.current;
      if (!panel) return;
      const x = e.clientX / innerWidth - 0.5;
      const y = e.clientY / innerHeight - 0.5;
      panel.style.setProperty('--rx', (-y * 2.0).toFixed(2) + 'deg');
      panel.style.setProperty('--ry', (x * 2.4).toFixed(2) + 'deg');
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  const togglePlay = () => {
    const a = audioRef.current;
    if (!a || !LANDING_MUSIC_URL) { setPlaying((p) => !p); return; }
    if (playing) { a.pause(); setPlaying(false); }
    else { a.play().then(() => setPlaying(true)).catch(() => setPlaying(false)); }
  };
  const onDialWheel = (e: React.WheelEvent) =>
    setVolume((v) => Math.max(0, Math.min(100, v + (e.deltaY < 0 ? 4 : -4))));

  const tStr = time.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  const dStr = time.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase();
  const waveBars = useMemo(
    () => Array.from({ length: 26 }, () => ({ h: Math.round(18 + Math.random() * 78), d: (Math.random() * -2).toFixed(2) })),
    []
  );
  const dialRot = -135 + (volume / 100) * 270;

  return (
    <div className="page-root" data-screen-label="01 Landing · Public Cockpit">
      {!booted && (
        <div className="izx-boot run">
          <div className="izx-boot-seal"><Seal size={34} /></div>
          <div className="izx-boot-bar"><i /></div>
          <div className="izx-boot-tag t-label">IZURÉ · Boot</div>
        </div>
      )}

      <IzxAmbient />
      <audio ref={audioRef} src={LANDING_MUSIC_URL || undefined} loop preload="none" />

      <div className="izx-viewport">
        <div className={`izx-float ${booted ? 'ready' : 'pre'}`}>
          <main className="izx-panel" ref={panelRef}>
            <div className="izx-sheen" />

            {/* Rail — direkte Public-Nav */}
            <nav className="izx-rail" aria-label="Navigation">
              <div className="izx-rail-mark"><Seal size={28} /></div>
              <div className="izx-rail-icons">
                {NAV.map((n) => {
                  const Icon = n.icon;
                  return (
                    <button key={n.to} className="izx-ric" onClick={() => navigate(n.to)} aria-label={n.label} title={n.label}>
                      <Icon size={17} strokeWidth={1.5} />
                    </button>
                  );
                })}
              </div>
              <div className="izx-rail-bottom">
                {switchable && toggleTheme && (
                  <button className="izx-ric" onClick={toggleTheme} title="Theme" aria-label="Theme wechseln">
                    {theme === 'dark' ? <Sun size={17} strokeWidth={1.5} /> : <Moon size={17} strokeWidth={1.5} />}
                  </button>
                )}
                <button className="izx-ric" onClick={() => navigate('/private')} title="Login · The Backroom" aria-label="Login">
                  <LogIn size={17} strokeWidth={1.5} />
                </button>
              </div>
            </nav>

            {/* Main */}
            <section className="izx-main">
              <header className="izx-top">
                <div className="izx-pills">
                  {PILLS.map((p) => (
                    <button key={p.to} className="izx-pill" onClick={() => navigate(p.to)}>{p.label}</button>
                  ))}
                </div>
                <div className="izx-mark">izuré<span>.</span></div>
                <div className="izx-top-actions">
                  <StatChain items={[{ value: tStr, label: 'Local' }, { value: dStr, label: 'Date' }]} />
                </div>
              </header>

              <div className="izx-stage">
                <div className="izx-ghost" aria-hidden="true">a place</div>
                <div className="izx-hero">
                  <div className="izx-eyebrow t-label">· A place, not a page ·</div>
                  <div className="izx-chrome-wrap">
                    <svg className="izx-orbit" viewBox="0 0 600 240" aria-hidden="true">
                      <ellipse cx="300" cy="120" rx="285" ry="88" />
                      <path className="orb-star" d="M540 52 L542 60 L550 62 L542 64 L540 72 L538 64 L530 62 L538 60 Z" />
                    </svg>
                    <h1 className="izx-chrome">IZURÉ</h1>
                    <span className="izx-chrome-sheen" aria-hidden="true">IZURÉ</span>
                  </div>
                  <p className="izx-hero-sub">Built from cinema, espresso, music &amp; memory.</p>
                  <div className="izx-ctas">
                    <button className="izx-solid" onClick={() => navigate('/private')}>The Backroom</button>
                    <button className="izx-ghost-cta" onClick={() => navigate('/about')}>About <span className="izx-arr">→</span></button>
                  </div>
                </div>
              </div>

              {/* Dock — Public-Teaser */}
              <aside className="izx-dock">
                <div className="izx-dock-kicker t-label">IZURÉ · MMXXVI</div>
                <h3 className="izx-dock-title">Ein Ort, keine Seite.</h3>
                <p className="izx-dock-text">Kino, Espresso, Musik &amp; Erinnerung — an einem Ort, ohne zu scrollen.</p>
                <div className="izx-dock-row">
                  <span className="izx-dock-stat">{NAV.length} Räume</span>
                  <button className="izx-solid sm" onClick={() => navigate('/coffee')}>Buy me a coffee</button>
                </div>
              </aside>
            </section>

            {/* Side — oben Stocks, unten Lautstärke-Pegelrad */}
            <aside className="izx-side">
              <button className="izx-side-card" onClick={() => navigate('/stocks')} style={{ textAlign: 'left', cursor: 'pointer' }}>
                <div className="izx-sc-label t-label">Stocks · Watchlist</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: '8px 0 auto' }}>
                  {WATCHLIST.map((q) => (
                    <div key={q.ticker} style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 10 }}>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{q.short}</div>
                        <div style={{ fontSize: 10, color: 'var(--text-tertiary)', letterSpacing: '0.04em' }}>{q.ticker}</div>
                      </div>
                      <div style={{ fontSize: 13, fontVariantNumeric: 'tabular-nums', color: 'var(--text-secondary)' }}>
                        {q.price != null ? q.price.toFixed(2) : '—'}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="izx-sc-meta">Demo · Klick für die volle Watchlist →</div>
              </button>

              <div className="izx-side-card izx-dial-card">
                <div className="izx-sc-label t-label">Lautstärke</div>
                <div className="izx-dial" title="Scrollen = Lautstärke · Klick = Play/Pause" onWheel={onDialWheel} onClick={togglePlay}>
                  <svg viewBox="0 0 200 200">
                    <circle className="izx-d-ring" cx="100" cy="100" r="92" />
                    <g>
                      {Array.from({ length: 48 }, (_, i) => {
                        const a = (i / 48) * Math.PI * 2;
                        const major = i % 12 === 0;
                        const r1 = major ? 79 : 84, r2 = 91;
                        return (
                          <line key={i} x1={100 + r1 * Math.sin(a)} y1={100 - r1 * Math.cos(a)} x2={100 + r2 * Math.sin(a)} y2={100 - r2 * Math.cos(a)} className={`izx-d-tick ${major ? 'major' : ''}`} />
                        );
                      })}
                    </g>
                    <g className="izx-d-rot" style={{ transform: `rotate(${dialRot}deg)` }}>
                      <circle className="izx-d-notch" cx="100" cy="22" r="4.5" />
                      <circle className="izx-d-notch-halo" cx="100" cy="22" r="9" />
                    </g>
                  </svg>
                  <div className="izx-dial-num">{volume}<small>%</small></div>
                </div>
                <div className="izx-wave" style={{ opacity: playing ? 1 : 0.4, transition: 'opacity 300ms' }}>
                  {waveBars.map((b, i) => (
                    <i key={i} style={{ ['--h' as string]: `${b.h}%`, ['--d' as string]: `${b.d}s` }} />
                  ))}
                </div>
                <div className="izx-sc-meta" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
                  <button className="izx-solid sm" onClick={togglePlay}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
                      {playing ? <Pause size={12} /> : <Play size={12} />}{playing ? 'Pause' : 'Play'}
                    </span>
                  </button>
                  <span>{LANDING_MUSIC_URL ? 'Ambient loop' : 'Track folgt'}</span>
                </div>
              </div>
            </aside>
          </main>
        </div>
      </div>

      <footer className="izx-baseline">
        IZURÉ MMXXVI · <b>A place, not a page</b> — die Seite selbst steht still.
      </footer>
    </div>
  );
}
