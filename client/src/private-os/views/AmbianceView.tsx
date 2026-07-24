import { Pause, Play, Volume2, VolumeX } from 'lucide-react';
import { useAmbiance } from '@/contexts/AmbianceContext';

/* Ambiance — echte, bereits gebaute Wiedergabe (AmbianceContext +
   globaler AmbiancePlayer in Home.tsx, überlebt Routenwechsel). Layout
   bewusst auf EINE echte Quelle vereinfacht statt der 6 imaginären
   Klangräume/12 Playlist-Einträge im Handoff (die dort ohne echtes
   Audio waren) — keine vorgetäuschte Funktionalität.

   Der reale Video-Loop liegt als Vollbild-Hintergrund unter der Shell;
   `.private-os.po-ambiance-active` (private-os.css) blendet Grundfarbe
   + Ambient-Muster der Hülle aus, `.po-panel.po-ambiance-active` macht
   das Panel milchig-durchscheinend, damit der Loop sichtbar wird. Die
   Bedienelemente sitzen bewusst unten links (statt zentriert), damit
   sie das Video nicht verdecken. */
export default function AmbianceView() {
  const ambiance = useAmbiance();
  return (
    <div className="amb-grid">
      <div className="amb-player-corner">
        <div className="ap-meta-corner">
          <span className="eyebrow">Now Playing · Fokus</span>
          <h2 className="fr">Ambiance-Loop</h2>
        </div>
        <div className="ap-transport-corner">
          <button className="pbtn play" aria-label={ambiance.playing ? 'Pause' : 'Play'} onClick={ambiance.togglePlay}>
            {ambiance.playing ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button className="pbtn" aria-label={ambiance.muted ? 'Ton an' : 'Stumm'} onClick={ambiance.toggleMute}>
            {ambiance.muted ? <VolumeX size={16} strokeWidth={1.7} /> : <Volume2 size={16} strokeWidth={1.7} />}
          </button>
        </div>
      </div>
    </div>
  );
}
