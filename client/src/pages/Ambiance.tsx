import { useEffect, useRef, useState } from 'react';
import { Pause, Play, RotateCcw, Volume2, VolumeX } from 'lucide-react';
import { Stage, Card, Button } from '@/components/primitives';
import { SectionHead } from '@/components/izure/primitives';
import { useAmbiance } from '@/contexts/AmbianceContext';

/* IZURE Ambiance — Privat Layer (IMG_0405). Wallpaper + Loop, sonst nichts.
   Das eigentliche <iframe> lebt NICHT hier, sondern dauerhaft auf Shell-
   Ebene in AmbiancePlayer.tsx (siehe Home.tsx) — genau das behebt den
   Bug, dass die Musik beim Verlassen dieser Seite stoppte: vorher wurde
   der iframe mit der Page unmounted, jetzt läuft er unabhängig vom
   Routenwechsel weiter. Diese Seite steuert ihn nur noch über den
   AmbianceContext (Play/Pause/Mute) und zeigt den Pomodoro-Timer. */

const FOCUS_MIN = 25;
const BREAK_MIN = 5;

export default function AmbiancePage() {
  const ambiance = useAmbiance();

  // Lazy-Start: der globale Player lädt erst, wenn die Ambiance-Seite
  // zum ersten Mal geöffnet wird — nicht schon beim App-Start.
  useEffect(() => {
    ambiance.start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [mode, setMode] = useState<'focus' | 'break'>('focus');
  const [secs, setSecs] = useState(FOCUS_MIN * 60);
  const [running, setRunning] = useState(false);
  const tick = useRef<number | null>(null);

  useEffect(() => {
    if (!running) return;
    tick.current = window.setInterval(() => {
      setSecs((s) => {
        if (s <= 1) {
          const nextMode = mode === 'focus' ? 'break' : 'focus';
          setMode(nextMode);
          setRunning(false);
          return (nextMode === 'focus' ? FOCUS_MIN : BREAK_MIN) * 60;
        }
        return s - 1;
      });
    }, 1000);
    return () => { if (tick.current) window.clearInterval(tick.current); };
  }, [running, mode]);

  const reset = () => { setRunning(false); setSecs((mode === 'focus' ? FOCUS_MIN : BREAK_MIN) * 60); };
  const mm = String(Math.floor(secs / 60)).padStart(2, '0');
  const ss = String(secs % 60).padStart(2, '0');

  return (
    <div className="page-root" data-screen-label="Private · Ambiance">
      <section style={{ position: 'relative', padding: '120px 0 100px', minHeight: '86vh' }}>
        {/* Scrim über dem global gerenderten Video-Wallpaper (AmbiancePlayer),
            für Textlesbarkeit — das Video selbst liegt fixed dahinter (z-index 0). */}
        <div
          aria-hidden
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1,
            pointerEvents: 'none',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.55), var(--bg-base) 88%)',
          }}
        />

        <div className="shell" style={{ position: 'relative', zIndex: 2 }}>
          <SectionHead
            eyebrow="Private · Focus room"
            title="Ambiance"
            intro="Wallpaper, ein Loop wie Johnny Silverhand — und sonst nichts. Für Meditation, Lernen oder Arbeit mit dem Pomodoro-Timer."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 1fr) minmax(220px, 300px)', gap: 4, marginTop: 40, alignItems: 'stretch' }}>
            {/* Pomodoro */}
            <Stage style={{ padding: '48px 40px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 24 }}>
              <div className="t-label" style={{ color: 'var(--accent-primary)' }}>
                {mode === 'focus' ? 'Fokus' : 'Pause'} · {mode === 'focus' ? FOCUS_MIN : BREAK_MIN} min
              </div>
              <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 'clamp(64px, 12vw, 120px)', lineHeight: 1, fontVariantNumeric: 'tabular-nums', color: 'var(--text-primary)' }}>
                {mm}:{ss}
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 14 }}>
                <Button onClick={() => setRunning((r) => !r)}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                    {running ? <Pause size={14} /> : <Play size={14} />}
                    {running ? 'Pause' : 'Start'}
                  </span>
                </Button>
                <button onClick={reset} aria-label="Zurücksetzen" style={resetBtn}>
                  <RotateCcw size={16} />
                </button>
              </div>
            </Stage>

            {/* Ambient-Audio-Steuerung — wirkt auf den globalen Player */}
            <Card style={{ display: 'flex', flexDirection: 'column', gap: 14, justifyContent: 'center' }}>
              <div className="t-label" style={{ color: 'var(--text-secondary)' }}>Now playing</div>
              <div style={{ fontSize: 15, color: 'var(--text-primary)' }}>Ambiance-Loop</div>
              <div style={{ display: 'flex', gap: 10 }}>
                <button onClick={ambiance.togglePlay} aria-label={ambiance.playing ? 'Loop pausieren' : 'Loop abspielen'} style={resetBtn}>
                  {ambiance.playing ? <Pause size={16} /> : <Play size={16} />}
                </button>
                <button onClick={ambiance.toggleMute} aria-label={ambiance.muted ? 'Ton einschalten' : 'Ton stumm schalten'} style={resetBtn}>
                  {ambiance.muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
              </div>
              <div className="t-body" style={{ fontSize: 12 }}>
                {ambiance.muted ? 'Stumm — Ton einschalten' : 'Ton an'} · läuft weiter, auch wenn du diese Seite verlässt
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

const resetBtn: React.CSSProperties = {
  width: 44,
  height: 44,
  borderRadius: 'var(--radius-pill)',
  border: '1px solid var(--border-hairline-strong)',
  background: 'transparent',
  color: 'var(--text-secondary)',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
};
