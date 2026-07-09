import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { Button } from '@/components/primitives';

/* IZURE Login — Masterplan v3, Phase 8. Präsentations-Restyle,
   Unlock-Logik unangetastet (Codewort-Liste bis zur TOTP-Migration).
   Ambient: Liquid/Chrome-Morph (lazy, nur auf dieser View). */

const LoginAmbient = lazy(() => import('@/components/izure/LoginAmbient'));

const VALID_CODES = ['sprezzatura', 'nottonight', 'patina', 'izure'];

export default function LoginPage({
  navigate,
  onUnlock,
}: {
  navigate: (to: string) => void;
  onUnlock: () => void;
}) {
  const [code, setCode] = useState('');
  const [reject, setReject] = useState(false);
  const [fading, setFading] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const t = setTimeout(() => setShowHint(true), 4000);
    return () => clearTimeout(t);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fading) return;
    const tried = code.trim().toLowerCase();
    if (VALID_CODES.includes(tried)) {
      setFading(true);
      setTimeout(() => {
        onUnlock();
        setTimeout(() => navigate('/private'), 400);
      }, 800);
    } else {
      setReject(true);
      setCode('');
      navigator?.vibrate?.(80);
      setTimeout(() => setReject(false), 1800);
    }
  };

  return (
    <div
      className="page-root"
      data-screen-label="04 Login"
      style={{
        position: 'fixed',
        inset: 0,
        background: 'var(--bg-base)',
        opacity: fading ? 0 : 1,
        transition: 'opacity var(--motion-base)',
        overflow: 'hidden',
      }}
    >
      <Suspense fallback={null}>
        <LoginAmbient />
      </Suspense>

      <div style={{ position: 'absolute', top: 28, left: 100, zIndex: 5 }}>
        <a
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--text-secondary)',
            transition: 'color var(--motion-micro)',
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
          onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
        >
          ← IZURE
        </a>
      </div>

      <div
        className="t-label"
        style={{ position: 'absolute', top: 30, right: 56, fontSize: 9, color: 'var(--text-tertiary)' }}
      >
        Code rotates · :00 · :30
      </div>

      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          zIndex: 4,
          width: 'min(560px, 90vw)',
        }}
      >
        <div className="t-label" style={{ color: 'var(--accent-primary)', marginBottom: 24 }}>
          · The Backroom ·
        </div>
        <h1
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(44px, 5.5vw, 72px)',
            lineHeight: 1.02,
            color: 'var(--text-primary)',
            marginBottom: 16,
          }}
        >
          Knock twice.
        </h1>
        <p className="t-body" style={{ fontSize: 14, maxWidth: 380, margin: '0 auto 48px' }}>
          We don't keep a list at the door. You either know the word for tonight, or you don't.
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ animation: reject ? 'shake 0.4s' : 'none' }}>
            <input
              ref={inputRef}
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              aria-label="Codewort"
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                borderBottom: `1px solid ${reject ? 'var(--accent-critical)' : 'var(--border-hairline-strong)'}`,
                color: reject ? 'var(--accent-critical)' : 'var(--text-primary)',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 500,
                fontSize: 40,
                textAlign: 'center',
                padding: '12px 0 16px',
                outline: 'none',
                letterSpacing: '0.06em',
                transition: 'border-color var(--motion-micro), color var(--motion-micro)',
                caretColor: 'var(--accent-primary)',
              }}
            />
          </div>

          <div style={{ marginTop: 20, height: 18, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {reject ? (
              <div className="t-label" style={{ color: 'var(--accent-critical)', fontSize: 11 }}>
                · Not tonight ·
              </div>
            ) : (
              <div className="t-label" style={{ fontSize: 10, color: 'var(--text-tertiary)' }}>
                Enter the code
              </div>
            )}
          </div>

          <div style={{ marginTop: 40 }}>
            <Button type="submit">Step inside</Button>
          </div>
        </form>

        {showHint && (
          <div style={{ marginTop: 72, opacity: 0.7 }}>
            <div className="t-label" style={{ fontSize: 9, color: 'var(--text-tertiary)', marginBottom: 10 }}>
              House tip
            </div>
            <p className="t-body" style={{ fontSize: 12, color: 'var(--text-secondary)' }}>
              Tonight's word, between us:{' '}
              <span style={{ color: 'var(--accent-primary-bright)' }}>sprezzatura</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
