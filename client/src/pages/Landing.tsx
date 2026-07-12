import { useEffect, useMemo, useRef, useState } from 'react';
import { Seal, StatChain } from '@/components/primitives';
import IzxAmbient from '@/experience/IzxAmbient';
import '@/experience/experience.css';

/* IZURE Landing — Phase 12b: die öffentliche Startseite trägt jetzt den
   Experience-Look (Ambient + Glass-Panel mit Levitation/Tilt/Sheen +
   Chrome-Wortmark), damit Wurzel-URL und die Study-OS-Lernecke dieselbe
   Welt sind. Bleibt aber eine Public-Landing: echte CTAs (Step inside →
   Login-Gate, Who's pouring → About), keine gated/interaktive Navigation,
   keine gefakten Bedienelemente. Boot-Sequenz + reduced-motion-Respekt
   wie zuvor (außerhalb der Experience gilt die Motion-Regel weiter). */

const TAGLINE = 'Built from cinema, espresso, music & memory.';
const BOOT_MS = 1650;

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
  const [booted, setBooted] = useState(reducedMotion);
  const [time, setTime] = useState(() => new Date());
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (reducedMotion) {
      setBooted(true);
      return;
    }
    const t = setTimeout(() => setBooted(true), BOOT_MS);
    return () => clearTimeout(t);
  }, [reducedMotion]);

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 30_000);
    return () => clearInterval(t);
  }, []);

  /* Panel-Tilt — wie in der Experience, auf Touch (iPad) deaktiviert. */
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

  /* Dekorativer Signal-Waveform (einmalig zufällig, wie im Experience-Side). */
  const waveBars = useMemo(
    () => Array.from({ length: 26 }, () => ({ h: Math.round(18 + Math.random() * 78), d: (Math.random() * -2).toFixed(2) })),
    []
  );

  return (
    <div className="page-root" data-screen-label="01 Landing">
      {/* Boot-Sequenz: Siegel pulsiert + Ladebalken, dann Panel-Fade-in */}
      {!booted && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
            background: 'var(--bg-base)',
          }}
        >
          <Seal state="loading" size={40} />
          <div style={{ width: 160, height: 2, background: 'var(--border-hairline)' }}>
            <div
              style={{
                height: '100%',
                background: 'var(--accent-primary)',
                animation: `izure-boot-fill ${BOOT_MS}ms linear both`,
              }}
            />
          </div>
        </div>
      )}

      {/* Ambient — dieselbe Welt wie die Experience */}
      <IzxAmbient />

      <div className="izx-viewport">
        <div className={`izx-float ${booted ? 'ready' : 'pre'}`}>
          <main className="izx-lp-panel" ref={panelRef}>
            <div className="izx-sheen" />

            {/* Haupt-Hero */}
            <section className="izx-lp-main">
              <header className="izx-lp-top">
                <div className="izx-lp-mark">izure<span>.</span></div>
                <StatChain
                  items={[
                    { value: 'MMXXVI', label: 'Est.' },
                    { value: tStr, label: 'Local' },
                    { value: dStr, label: 'Date' },
                  ]}
                />
              </header>

              <div className="izx-lp-hero">
                <div className="izx-hero">
                  <div className="izx-eyebrow t-label">· A place, not a page ·</div>
                  <div className="izx-chrome-wrap">
                    <svg className="izx-orbit" viewBox="0 0 600 240" aria-hidden="true">
                      <ellipse cx="300" cy="120" rx="285" ry="88" />
                      <path className="orb-star" d="M540 52 L542 60 L550 62 L542 64 L540 72 L538 64 L530 62 L538 60 Z" />
                    </svg>
                    <h1 className="izx-chrome">IZURE</h1>
                    <span className="izx-chrome-sheen" aria-hidden="true">IZURE</span>
                  </div>
                  <p className="izx-hero-sub">{TAGLINE}</p>
                  <div className="izx-ctas">
                    <button className="izx-solid" onClick={() => navigate('/private')}>Step inside</button>
                    <button className="izx-ghost-cta" onClick={() => navigate('/about')}>
                      Who's pouring <span className="izx-arr">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Signal-Seite — dekoratives Echo der Experience-Cockpit-Spalte */}
            <aside className="izx-side izx-lp-side">
              <div className="izx-side-card">
                <div className="izx-sc-label t-label">Signal · Live</div>
                <div className="izx-wave">
                  {waveBars.map((b, i) => (
                    <i key={i} style={{ ['--h' as string]: `${b.h}%`, ['--d' as string]: `${b.d}s` }} />
                  ))}
                </div>
                <div className="izx-sc-meta">
                  <b>Est. MMXXVI</b> · gebaut aus Kino, Espresso, Musik & Erinnerung
                </div>
              </div>
              <div className="izx-side-card izx-lp-seal">
                <Seal standalone size={40} />
                <div className="izx-sc-meta">Ein Ort, keine Seite.</div>
              </div>
            </aside>
          </main>
        </div>
      </div>
    </div>
  );
}
