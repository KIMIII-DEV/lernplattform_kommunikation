import { useEffect, useRef, useState } from 'react';
import { Pause, Play, RotateCcw } from 'lucide-react';
import { Stage, Card, Badge, Button } from '@/components/primitives';
import { SectionHead } from '@/components/izure/primitives';

/* IZURE Ambiance — Privat Layer (IMG_0405). PLATZHALTER (mit funktionierendem
   Pomodoro, da self-contained). Später leicht ersetzbar:
   - AMBIANCE_YT_URL: Lofi wie „Johnny Silverhand" einbetten (Pegelrad-Lautstärke folgt in Phase B).
   - WALLPAPER: echtes Wallpaper/Video statt Verlauf.
   Zweck: Meditation, Lernen oder Arbeit mit Pomodoro-Timer und sonst nichts. */

// TODO(Phase B): echten Lofi-Embed-Link (YouTube) + Wallpaper einsetzen.
const AMBIANCE_YT_URL = '';
const FOCUS_MIN = 25;
const BREAK_MIN = 5;

export default function AmbiancePage() {
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
      <section style={{ position: 'relative', padding: '120px 0 100px', minHeight: '86vh', overflow: 'hidden' }}>
        {/* Wallpaper-Platzhalter: ruhiger Verlauf, später durch Bild/Video ersetzbar */}
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 90% 70% at 50% 30%, var(--bg-panel-raised), var(--bg-base) 70%)', opacity: 0.8 }} />
        <div className="shell" style={{ position: 'relative', zIndex: 2 }}>
          <SectionHead
            eyebrow="Private · Focus room"
            title="Ambiance"
            intro="Wallpaper, ein Loop wie Johnny Silverhand — und sonst nichts. Für Meditation, Lernen oder Arbeit mit dem Pomodoro-Timer."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 1fr) minmax(260px, 340px)', gap: 4, marginTop: 40, alignItems: 'stretch' }}>
            {/* Pomodoro — funktioniert bereits */}
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

            {/* Lofi-Slot */}
            <Card style={{ display: 'flex', flexDirection: 'column', gap: 14, justifyContent: 'center' }}>
              <div className="t-label" style={{ color: 'var(--text-secondary)' }}>Now playing</div>
              {AMBIANCE_YT_URL ? (
                <div style={{ position: 'relative', aspectRatio: '16/9', borderRadius: 'var(--radius-card)', overflow: 'hidden' }}>
                  <iframe title="Ambiance" src={AMBIANCE_YT_URL} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }} allow="autoplay" />
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ fontSize: 16, color: 'var(--text-primary)' }}>Lofi-Loop folgt</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <Badge>Platzhalter</Badge>
                    <span className="t-body" style={{ fontSize: 12 }}>Embed + Lautstärke in Phase B</span>
                  </div>
                </div>
              )}
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
