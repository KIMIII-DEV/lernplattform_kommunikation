import { useEffect, useRef, useState } from 'react';
import { GhostText } from '@/components/izure/primitives';
import { IMG } from '@/lib/atmosphere';

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
      style={{
        position: 'fixed',
        inset: 0,
        background: 'var(--bg-primary)',
        opacity: fading ? 0 : 1,
        transition: 'opacity 800ms var(--ease)',
        overflow: 'hidden',
      }}
      data-screen-label="04 Login"
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${IMG.hero_street})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.32) contrast(1.2) saturate(0.6) sepia(0.2)',
          opacity: 0.55,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(15,13,11,0.92) 70%)',
        }}
      />

      <GhostText
        left="50%"
        top="14%"
        size="22vw"
        style={{ opacity: 0.05, transform: 'translateX(-50%)', fontStyle: 'italic' }}
      >
        knock
      </GhostText>

      <div style={{ position: 'absolute', top: 28, left: 64, zIndex: 5 }}>
        <a
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 22,
            color: 'var(--text-secondary)',
          }}
        >
          ← IZURE
        </a>
      </div>

      <div
        style={{
          position: 'absolute',
          top: 28,
          right: 64,
          fontFamily: 'Cinzel, serif',
          fontSize: 9,
          letterSpacing: '0.3em',
          color: 'var(--text-muted)',
        }}
      >
        CODE ROTATES · :00 · :30
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
        <div
          style={{
            marginBottom: 36,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 18,
            color: 'var(--accent)',
          }}
        >
          <div style={{ width: 60, height: 1, background: 'var(--accent-dim)' }} />
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={0.8}>
            <path d="M7 1 L9 5 L13 7 L9 9 L7 13 L5 9 L1 7 L5 5 Z" />
          </svg>
          <div style={{ width: 60, height: 1, background: 'var(--accent-dim)' }} />
        </div>

        <h1
          className="t-display italic"
          style={{ fontSize: 'clamp(48px, 6vw, 80px)', fontStyle: 'italic', lineHeight: 1.05, marginBottom: 16 }}
        >
          Knock twice.
        </h1>
        <p
          className="t-body"
          style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 56, maxWidth: 360, margin: '0 auto 56px' }}
        >
          We don't keep a list at the door. You either know the word for tonight, or you don't.
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ position: 'relative', animation: reject ? 'shake 0.4s' : 'none' }}>
            <input
              ref={inputRef}
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                borderBottom: `1px solid ${reject ? 'var(--accent-bordeaux-light)' : 'var(--accent)'}`,
                color: reject ? 'var(--accent-bordeaux-light)' : 'var(--text-primary)',
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 48,
                textAlign: 'center',
                padding: '12px 0 16px',
                outline: 'none',
                letterSpacing: '0.04em',
                transition: 'all 400ms var(--ease)',
                caretColor: 'var(--accent)',
              }}
            />
          </div>

          <div style={{ marginTop: 22, height: 18, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {reject ? (
              <div
                className="t-label"
                style={{ color: 'var(--accent-bordeaux-light)', fontSize: 11, animation: 'fadeIn 0.4s' }}
              >
                · NOT TONIGHT ·
              </div>
            ) : (
              <div className="t-label" style={{ color: 'var(--text-muted)' }}>
                ENTER THE CODE
              </div>
            )}
          </div>

          <button
            type="submit"
            style={{
              marginTop: 48,
              padding: '14px 36px',
              border: '1px solid var(--accent)',
              background: 'transparent',
              color: 'var(--text-primary)',
              fontFamily: 'Cinzel, serif',
              fontSize: 11,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 400ms var(--ease)',
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(176,141,87,0.1)')}
            onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            Step inside
          </button>
        </form>

        {showHint && (
          <div style={{ marginTop: 80, opacity: 0.6, animation: 'fadeIn 1s' }}>
            <div className="gold-line" style={{ maxWidth: 260, margin: '0 auto 18px' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: 9 }}>house tip</span>
            </div>
            <p className="t-body" style={{ fontSize: 12, fontStyle: 'italic', color: 'var(--text-muted)' }}>
              Tonight's word, between us: <span style={{ color: 'var(--accent-light)' }}>sprezzatura</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
