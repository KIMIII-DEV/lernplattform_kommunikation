import { Pause, Play, Volume2, VolumeX } from 'lucide-react';
import { useAmbiance } from '@/contexts/AmbianceContext';

/* Ambiance — echte, bereits gebaute Wiedergabe (AmbianceContext +
   globaler AmbiancePlayer in Home.tsx, überlebt Routenwechsel). Layout
   bewusst auf EINE echte Quelle vereinfacht statt der 6 imaginären
   Klangräume/12 Playlist-Einträge im Handoff (die dort ohne echtes
   Audio waren) — keine vorgetäuschte Funktionalität. Der reale
   Video-Loop liegt als Vollbild-Hintergrund unter dem gesamten Panel;
   `.po-panel.is-ambiance-active` (private-os.css) macht das Panel dafür
   durchscheinend/milchig, damit er sichtbar wird. */
export default function AmbianceView() {
  const ambiance = useAmbiance();
  return (
    <div className="amb-grid">
      <div className="po-card amb-player" style={{ background: 'transparent', backdropFilter: 'none' }}>
        <div className="ap-meta">
          <span className="eyebrow">Now Playing · Fokus</span>
          <h2 className="fr">Ambiance-Loop</h2>
          <span className="ap-artist mono">läuft weiter, auch auf anderen Räumen</span>
        </div>
        <div className="ap-transport">
          <button className="pbtn play" aria-label={ambiance.playing ? 'Pause' : 'Play'} onClick={ambiance.togglePlay}>
            {ambiance.playing ? <Pause size={22} /> : <Play size={22} />}
          </button>
          <button className="pbtn" aria-label={ambiance.muted ? 'Ton an' : 'Stumm'} onClick={ambiance.toggleMute}>
            {ambiance.muted ? <VolumeX size={18} strokeWidth={1.7} /> : <Volume2 size={18} strokeWidth={1.7} />}
          </button>
        </div>
      </div>
    </div>
  );
}
