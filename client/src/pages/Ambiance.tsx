import { useEffect, useRef, useState } from 'react';
import { Pause, Play, RotateCcw, Volume2, VolumeX } from 'lucide-react';
import { Stage, Card, Button } from '@/components/primitives';
import { SectionHead } from '@/components/izure/primitives';

/* IZURE Ambiance — Privat Layer (IMG_0405). Wallpaper + Loop, sonst nichts:
   der Video-Loop läuft vollflächig als Hintergrund hinter dem Pomodoro-
   Timer. Kein sichtbares YouTube-Branding:
   - youtube-nocookie.com + controls=0/modestbranding=1/rel=0/iv_load_policy=3
     (offizielle Embed-Parameter, keine Manipulation der Plattform)
   - zusätzlich per CSS überskaliert + zentriert zugeschnitten (Standard-
     Technik für „Chromeless"-Hintergrundvideos: die Ecke, in der YouTube
     bei Bedarf ein kleines Wasserzeichen einblendet, liegt dadurch immer
     außerhalb des sichtbaren Ausschnitts).
   - enablejsapi=1 + postMessage fürs eigene Mute/Play — kein zusätzliches
     YouTube-Script eingebunden.
   Lautstärke-Pegelrad (wie auf der Landing) ist ein möglicher Ausbauschritt,
   hier bewusst ein einfacher Mute-Schalter, da der Loop nur An/Aus braucht. */

const AMBIANCE_VIDEO_ID = 'kR-9AIXWIG4';
const FOCUS_MIN = 25;
const BREAK_MIN = 5;

export default function AmbiancePage() {
  const [mode, setMode] = useState<'focus' | 'break'>('focus');
  const [secs, setSecs] = useState(FOCUS_MIN * 60);
  const [running, setRunning] = useState(false);
  const tick = useRef<number | null>(null);

  const [videoPlaying, setVideoPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

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

  const postToVideo = (func: string) => {
    iframeRef.current?.contentWindow?.postMessage(JSON.stringify({ event: 'command', func, args: [] }), '*');
  };
  const toggleMute = () => { postToVideo(muted ? 'unMute' : 'mute'); setMuted((m) => !m); };
  const toggleVideoPlay = () => { postToVideo(videoPlaying ? 'pauseVideo' : 'playVideo'); setVideoPlaying((p) => !p); };

  const embedSrc =
    `https://www.youtube-nocookie.com/embed/${AMBIANCE_VIDEO_ID}` +
    `?autoplay=1&mute=1&loop=1&playlist=${AMBIANCE_VIDEO_ID}` +
    `&controls=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&playsinline=1` +
    `&enablejsapi=1&origin=${encodeURIComponent(location.origin)}`;

  return (
    <div className="page-root" data-screen-label="Private · Ambiance">
      <section style={{ position: 'relative', padding: '120px 0 100px', minHeight: '86vh', overflow: 'hidden' }}>
        {/* Video-Wallpaper: überskaliert + zentriert, kein UI/Branding sichtbar */}
        <div aria-hidden style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <iframe
            ref={iframeRef}
            title="Ambiance-Loop"
            src={embedSrc}
            allow="autoplay; encrypted-media"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100vw',
              height: '56.25vw',
              minWidth: '177.78vh',
              minHeight: '100vh',
              transform: 'translate(-50%, -50%) scale(1.16)',
              border: 0,
            }}
          />
        </div>
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
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

            {/* Ambient-Audio-Steuerung */}
            <Card style={{ display: 'flex', flexDirection: 'column', gap: 14, justifyContent: 'center' }}>
              <div className="t-label" style={{ color: 'var(--text-secondary)' }}>Now playing</div>
              <div style={{ fontSize: 15, color: 'var(--text-primary)' }}>Ambiance-Loop</div>
              <div style={{ display: 'flex', gap: 10 }}>
                <button onClick={toggleVideoPlay} aria-label={videoPlaying ? 'Loop pausieren' : 'Loop abspielen'} style={resetBtn}>
                  {videoPlaying ? <Pause size={16} /> : <Play size={16} />}
                </button>
                <button onClick={toggleMute} aria-label={muted ? 'Ton einschalten' : 'Ton stumm schalten'} style={resetBtn}>
                  {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
              </div>
              <div className="t-body" style={{ fontSize: 12 }}>{muted ? 'Stumm — Ton einschalten' : 'Ton an'}</div>
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
