import { useRef } from 'react';
import { CloudSun, Play } from 'lucide-react';
import { MODULES } from '@/lib/modules';
import { useProgress } from '@/lib/useProgress';
import { useAmbiance } from '@/contexts/AmbianceContext';
import { CountUp, Ring, useOrb, useAreaChart } from '../widgets';
import type { ViewId } from '../PrivateOS';
import { WIRE_STORIES } from './wireStories';

/* Command Deck — Übersicht aller Räume. Lernecke-Kachel + Wire-Kachel
   zeigen echte Daten (useProgress/MODULES, aktuellste Story); Kapital
   und Wetter sind klar als Demo/Platzhalter markiert (keine Datenquelle
   vorhanden), Marco zeigt eine statische Zeile (Chat bleibt simuliert). */
export default function DeckView({ active, onGo }: { active: boolean; onGo: (v: ViewId) => void }) {
  const { progress } = useProgress();
  const ambiance = useAmbiance();
  const orbRef = useRef<HTMLCanvasElement>(null);
  const areaRef = useRef<HTMLCanvasElement>(null);

  const completed = MODULES.filter((m) => progress.modules[m.id]?.completed).length;
  const pct = Math.round((completed / MODULES.length) * 100);
  const today = new Date();
  const dayLabel = `${['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'][today.getDay()]} · ${String(today.getDate()).padStart(2, '0')}. ${['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'][today.getMonth()]}`;
  const lead = WIRE_STORIES[0];
  const openTasks = (MODULES.length - completed) + 1; // Lernfelder offen + Ambiance-Hinweis, ehrliche grobe Zahl

  useOrb(orbRef, pct, 130, active);
  useAreaChart(areaRef, [1, 1, 1, 1, 1, 1, 1], { accent: '#9DBE9A', duration: 1400 }); // flache Demo-Linie (kein echtes Kapital-Depot)

  return (
    <div className="deck-grid">
      <div className="po-card pad d-hero">
        <div className="hero-top">
          <div className="eyebrow">{dayLabel}</div>
          <h1 className="fr hero-h">Elevate<br />your <span className="gld">focus</span>.</h1>
          <p className="hero-p">Dein Privat Layer ist entsiegelt. <CountUp to={openTasks} /> Räume verlangen heute Aufmerksamkeit.</p>
        </div>
        <div className="hero-orb">
          <canvas className="orb-cv" ref={orbRef} width={380} height={380} />
          <div className="orb-mid">
            <div className="eyebrow">Fortschritt</div>
            <div className="orb-val fr"><CountUp to={pct} /><i>%</i></div>
            <div className="orb-cap mono">{completed}/{MODULES.length} Lernfelder</div>
          </div>
        </div>
        <button className="hero-now" onClick={() => onGo('ambiance')}>
          <span className="po-eq"><i /><i /><i /><i /></span>
          <div className="now-meta"><b>Ambiance-Loop</b><span className="mono">Ambiance · Fokus</span></div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 18l6-6-6-6" /></svg>
        </button>
      </div>

      <button className="po-card pad d-tile" onClick={() => onGo('lernecke')}>
        <div className="po-c-hd"><span className="t-label">Lernecke</span><span className="po-hd-x">{MODULES.length} Räume</span></div>
        <div className="tile-ring">
          <Ring pct={pct} size={76} />
          <div className="tile-lines">
            {MODULES.slice(0, 2).map((m) => (
              <div key={m.id} className="tl-row"><span>{m.short}</span><em className="mono">{progress.modules[m.id]?.completed ? '100' : '0'}%</em></div>
            ))}
            <div className="tl-row dim"><span>Klausur</span><em className="mono gld">Demo</em></div>
          </div>
        </div>
        <div className="tile-foot"><span className="mono">{completed}/{MODULES.length} abgeschlossen</span><span className="go-arrow">→</span></div>
      </button>

      <button className="po-card pad d-tile d-stocks" onClick={() => onGo('stocks')}>
        <div className="po-c-hd"><span className="t-label">Kapital</span><span className="po-badge">Demo</span></div>
        <div className="stk-val fr"><span className="po-cur">€</span>—</div>
        <div className="stk-sub mono">Portfolio-Tracking folgt</div>
        <canvas className="area-cv" ref={areaRef} width={440} height={240} />
      </button>

      <button className="po-card pad d-tile" onClick={() => onGo('wetter')}>
        <div className="po-c-hd"><span className="t-label">Wetter</span><span className="po-hd-x">Demo</span></div>
        <div className="wx-row">
          <CloudSun className="wx-ic" size={40} strokeWidth={1.3} />
          <div className="wx-temp fr" style={{ fontSize: 32 }}>—°</div>
          <div className="wx-meta"><b>Ort folgt</b><span className="mono">Live via Open-Meteo</span></div>
        </div>
        <div className="tile-foot"><span className="mono">Anbindung folgt</span><span className="go-arrow">→</span></div>
      </button>

      <button className="po-card pad d-tile d-marco" onClick={() => onGo('marco')}>
        <div className="po-c-hd"><span className="t-label">Marco</span><span className="po-badge gld">KI · Demo</span></div>
        <p className="mc-say">„Frag mich, wenn du eine <b>Fokus-Session</b> planen willst — ich antworte in Stimmung, nicht in Fakten."</p>
        <div className="mc-quick"><span className="po-chip">Ja, planen</span><span className="po-chip">Zusammenfassen</span></div>
      </button>

      <button className="po-card pad d-tile" onClick={() => onGo('wire')}>
        <div className="po-c-hd"><span className="t-label">Wire</span><span className="po-hd-x">{WIRE_STORIES.length} Storys</span></div>
        <div className="wr-lead"><span className="po-badge">{lead.tag}</span><b>{lead.title}</b></div>
        <div className="wr-list-mini">
          {WIRE_STORIES.slice(1, 3).map((s, i) => (
            <div key={i} className="wr-i"><i className="po-dot2" />{s.title}</div>
          ))}
        </div>
      </button>
    </div>
  );
}
