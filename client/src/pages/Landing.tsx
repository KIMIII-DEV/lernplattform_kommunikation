import { useEffect, useMemo, useRef, useState } from 'react';
import { Moon, Pause, Play, Sun } from 'lucide-react';
import { Seal, StatChain } from '@/components/primitives';
import { useTheme } from '@/contexts/ThemeContext';
import IzxAmbient from '@/experience/IzxAmbient';
import '@/experience/experience.css';

/* IZURE Landing — Public Layer (IMG_0405). Öffentliche, nicht-scrollbare
   Startseite im Cockpit-Look: Ambient + Glass-Panel + IZURÉ-Chrome. Dient als
   Hub zu den Public-Sektionen und trägt Hintergrundmusik mit „Pegelrad" als
   Lautstärkeregler (aus dem Cockpit-Dial umgenutzt).

   PLATZHALTER, leicht ersetzbar: LANDING_MUSIC_URL auf einen echten Track
   setzen — das Pegelrad steuert bereits die Lautstärke, der Play-Button
   startet/stoppt. Ohne Track bleibt die Bedienung sichtbar (Demo). */

// TODO(Phase B): echten Musik-Track (Datei/URL) einsetzen.
const LANDING_MUSIC_URL = '';
const BOOT_MS = 1650;

const HUB: { label: string; to: string; desc: string }[] = [
  { label: 'About', to: '/about', desc: 'Behind the curtain' },
  { label: 'Moods', to: '/moodboards', desc: 'Boards · Playlists' },
  { label: 'Stocks', to: '/stocks', desc: 'Markets, quietly' },
  { label: 'Coffee', to: '/coffee', desc: 'Buy me a coffee' },
  { label: 'Socials', to: '/socials', desc: 'Channels' },
  { label: 'Contact', to: '/contact', desc: 'Say hello' },
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

  // Pegelrad → Lautstärke
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume / 100;
  }, [volume]);

  const togglePlay = () => {
    const a = audioRef.current;
    if (!a || !LANDING_MUSIC_URL) { setPlaying((p) => !p); return; }
    if (playing) { a.pause(); setPlaying(false); }
    else { a.play().then(() => setPlaying(true)).catch(() => setPlaying(false)); }
  };

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

  const tStr = time.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  const dStr = time.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase();
  const waveBars = useMemo(
    () => Array.from({ length: 22 }, () => ({ h: Math.round(18 + Math.random() * 78), d: (Math.random() * -2).toFixed(2) })),
    []
  );

  // Pegelrad: 0..100 → -135°..+135°
  const dialRot = -135 + (volume / 100) * 270;
  const onDialWheel = (e: React.WheelEvent) => {
    setVolume((v) => Math.max(0, Math.min(100, v + (e.deltaY < 0 ? 4 : -4))));
  };

  return (
    <div className="page-root" data-screen-label="01 Landing (public)">
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
          <main className="izx-lp-panel" ref={panelRef}>
            <div className="izx-sheen" />

            <section className="izx-lp-main">
              <header className="izx-lp-top">
                <div className="izx-lp-mark">izuré<span>.</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <StatChain items={[{ value: tStr, label: 'Local' }, { value: dStr, label: 'Date' }]} />
                  {switchable && toggleTheme && (
                    <button className="izx-ric" onClick={toggleTheme} title="Theme" aria-label="Theme wechseln">
                      {theme === 'dark' ? <Sun size={16} strokeWidth={1.5} /> : <Moon size={16} strokeWidth={1.5} />}
                    </button>
                  )}
                </div>
              </header>

              <div className="izx-lp-hero">
                <div className="izx-hero" style={{ justifyContent: 'center' }}>
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

                  <div className="izx-lp-hub">
                    {HUB.map((h) => (
                      <button key={h.to} className="izx-lp-tile" onClick={() => navigate(h.to)}>
                        <span className="izx-lp-tile-label">{h.label}</span>
                        <span className="izx-lp-tile-desc">{h.desc}</span>
                      </button>
                    ))}
                  </div>

                  <div className="izx-ctas" style={{ marginTop: 8 }}>
                    <button className="izx-solid" onClick={() => navigate('/private')}>The Backroom</button>
                    <button className="izx-ghost-cta" onClick={() => navigate('/private')}>Login <span className="izx-arr">→</span></button>
                  </div>
                </div>
              </div>
            </section>

            {/* Side: Musik + Pegelrad */}
            <aside className="izx-side izx-lp-side">
              <div className="izx-side-card izx-dial-card">
                <div className="izx-sc-label t-label">Signal · Lautstärke</div>
                <div className="izx-dial" title="Scrollen = Lautstärke" onWheel={onDialWheel} onClick={togglePlay}>
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
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
                  <button className="izx-solid sm" onClick={togglePlay}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                      {playing ? <Pause size={13} /> : <Play size={13} />}
                      {playing ? 'Pause' : 'Play'}
                    </span>
                  </button>
                  <span className="izx-sc-meta">{LANDING_MUSIC_URL ? 'Ambient loop' : 'Track folgt'}</span>
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
