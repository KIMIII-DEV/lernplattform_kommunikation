import { useAmbiance, AMBIANCE_VIDEO_ID, AMBIANCE_START_SECONDS } from '@/contexts/AmbianceContext';

/* Einmalig in Home.tsx gerendert, überlebt jeden Routenwechsel — deshalb
   läuft die Musik weiter, wenn man /private/ambiance verlässt. Auf der
   Ambiance-Seite selbst füllt der iframe per Overscan-Crop den ganzen
   Viewport (Wallpaper, kein YouTube-Branding sichtbar); auf jeder anderen
   Route wird er unsichtbar aus dem Viewport geschoben, aber NICHT unmounted
   oder display:none gesetzt — beides würde die Wiedergabe stoppen. */

const EMBED_SRC =
  `https://www.youtube-nocookie.com/embed/${AMBIANCE_VIDEO_ID}` +
  `?autoplay=1&mute=1&loop=1&playlist=${AMBIANCE_VIDEO_ID}&start=${AMBIANCE_START_SECONDS}` +
  `&controls=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&playsinline=1` +
  `&enablejsapi=1&origin=${encodeURIComponent(location.origin)}`;

export default function AmbiancePlayer({ fullBleed }: { fullBleed: boolean }) {
  const { active, registerIframe } = useAmbiance();
  if (!active) return null;

  return (
    <div
      aria-hidden
      style={
        fullBleed
          ? { position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }
          : {
              position: 'fixed',
              left: -9999,
              top: -9999,
              width: 200,
              height: 113,
              overflow: 'hidden',
              pointerEvents: 'none',
            }
      }
    >
      <iframe
        ref={registerIframe}
        title="Ambiance-Loop"
        src={EMBED_SRC}
        allow="autoplay; encrypted-media"
        style={
          fullBleed
            ? {
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '100vw',
                height: '56.25vw',
                minWidth: '177.78vh',
                minHeight: '100vh',
                transform: 'translate(-50%, -50%) scale(1.16)',
                border: 0,
              }
            : { width: '100%', height: '100%', border: 0 }
        }
      />
    </div>
  );
}
