import { Suspense, lazy, useEffect, useState } from 'react';
import { Seal, Button, StatChain } from '@/components/primitives';

// Netzwerk-Graph-Ambient (Masterplan v3, 4.4) — lazy: eigener Chunk,
// lädt ausschließlich auf der Landing, nicht global.
const LandingAmbient = lazy(() => import('@/components/izure/LandingAmbient'));

/* IZURE Landing — Blueprint v2.1, Abschnitt 5.0 "Public-Landing-Hero".
   Ghost-Headline-Technik: der bestehende Tagline-Satz läuft riesig und
   fast unsichtbar (--ghost-text) HINTER dem Fokus-Element, wortweise
   gestaffelt eingeblendet — erst nach der Boot-Sequenz. Siegel doppelt:
   Corner-Persistent kommt global aus Home.tsx, hier zusätzlich im
   Trenner-Modus zwischen Hero und Footer. Normaler Dokumentenfluss
   (kein position:fixed) — "kein Scroll-Jacking" ist sonst nicht prüfbar. */

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

  const tStr = time.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  const dStr = time.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase();

  const words = TAGLINE.split(' ');

  return (
    <div className="page-root" data-screen-label="01 Landing">
      {/* Boot-Sequenz: Siegel pulsiert + Ladebalken, dann Stage-Fade-in */}
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

      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '48px 56px 80px 24px',
          opacity: booted ? 1 : 0,
          transition: 'opacity var(--motion-base)',
        }}
      >
        {/* Kopfzeile: Wortmark + Kennzahl-Kette (EST/LOCAL/DATE) */}
        <header
          style={{
            position: 'absolute',
            top: 28,
            left: 24,
            right: 56,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <div
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700,
              fontSize: 20,
              letterSpacing: '0.04em',
              color: 'var(--text-primary)',
            }}
          >
            izure<span style={{ color: 'var(--accent-primary)' }}>.</span>
          </div>
          <StatChain
            items={[
              { value: 'MMXXVI', label: 'Est.' },
              { value: tStr, label: 'Local' },
              { value: dStr, label: 'Date' },
            ]}
          />
        </header>

        {/* Netzwerk-Graph-Ambient — unterste Ebene, erst nach der Boot-Sequenz */}
        {booted && (
          <Suspense fallback={null}>
            <LandingAmbient />
          </Suspense>
        )}

        {/* Ghost-Headline — liegt hinter dem Fokus-Element */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexWrap: 'wrap',
            alignContent: 'center',
            justifyContent: 'center',
            gap: '0 0.4ch',
            padding: '0 5vw',
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(44px, 6.2vw, 110px)',
            textTransform: 'uppercase',
            lineHeight: 1.05,
            color: 'var(--ghost-text)',
            pointerEvents: 'none',
            userSelect: 'none',
            zIndex: 0,
          }}
        >
          {booted &&
            words.map((w, i) => (
              <span
                key={i}
                className="izure-ghost-word"
                style={{ ['--word-delay' as string]: `${i * 180}ms` }}
              >
                {w}
              </span>
            ))}
        </div>

        {/* Fokus-Element — weicher Scrim in bg-base maskiert die Ghost-Wörter direkt
            hinter dem lesbaren Inhalt, damit sich Buchstaben nicht überlagern;
            außerhalb des Scrims bleibt der Ghost-Text sichtbar. */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: 640,
            padding: '48px 64px',
            margin: '-48px 0 -48px -64px',
            background:
              'radial-gradient(ellipse 85% 100% at 30% 50%, var(--bg-base) 55%, transparent 100%)',
          }}
        >
          <div
            className="t-label"
            style={{ color: 'var(--accent-primary)', marginBottom: 20 }}
          >
            · A place, not a page ·
          </div>
          <h1
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(64px, 9vw, 132px)',
              lineHeight: 0.95,
              letterSpacing: '-0.01em',
              color: 'var(--text-primary)',
              margin: '0 0 28px',
            }}
          >
            IZURE
          </h1>
          <p
            className="t-body"
            style={{ fontSize: 17, maxWidth: 460, marginBottom: 40 }}
          >
            {TAGLINE}
          </p>
          <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
            <Button onClick={() => navigate('/login')}>Step inside</Button>
            <button
              onClick={() => navigate('/about')}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-secondary)',
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                transition: 'color var(--motion-micro)',
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              <span>Who's pouring</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Siegel im Trenner-Modus — Naht zwischen Hero und Footer */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '40px 0' }}>
        <Seal standalone size={26} />
      </div>
    </div>
  );
}
