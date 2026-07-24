import { useRef } from 'react';
import { Lock } from 'lucide-react';
import { MODULES } from '@/lib/modules';
import { useProgress } from '@/lib/useProgress';
import { CountUp, Ring, useOrb, Wave } from '../widgets';

/* Lernecke — neues Dashboard-Entry (ersetzt die Experience-Szenenbühne
   als privaten Einstieg). Echte Daten: MODULES (5 Lernfelder) +
   useProgress (nur ehrliche 100/0-Ringe, wie zuvor in Experience.tsx —
   keine erfundenen Zwischenstände). Wiederholung/Streak/Klausur haben
   keine echte Datenquelle im Projekt und sind klar als "Demo" markiert.
   Klick auf ein Lernfeld ruft onOpenLernfeld auf — das öffnet weiterhin
   unverändert das bestehende LernfeldDetail-Dossier (Study.tsx). */
export default function LerneckeView({ active, onOpenLernfeld }: { active: boolean; onOpenLernfeld: (moduleId: string) => void }) {
  const { progress } = useProgress();
  const orbRef = useRef<HTMLCanvasElement>(null);
  const completed = MODULES.filter((m) => progress.modules[m.id]?.completed).length;
  const pct = Math.round((completed / MODULES.length) * 100);
  useOrb(orbRef, pct, 100, active);

  return (
    <div className="lern-grid">
      <div className="po-card pad ln-left">
        <div className="po-c-hd"><span className="t-label">Gesamtfortschritt</span></div>
        <div className="ln-orb">
          <canvas className="orb-cv" ref={orbRef} width={300} height={300} />
          <div className="orb-mid"><div className="orb-val fr"><CountUp to={pct} /><i>%</i></div><div className="orb-cap mono">{completed}/{MODULES.length} abgeschlossen</div></div>
        </div>
        <div className="ln-streak">
          <div className="strk-hd"><span className="t-label">Serie</span><b className="fr strk-n">Demo</b></div>
          <div className="strk-bars">{Array.from({ length: 14 }, (_, i) => <i key={i} className="sb" style={{ height: '30%' }} />)}</div>
        </div>
      </div>

      <div className="po-card pad ln-mid">
        <div className="po-c-hd"><span className="t-label">Lernfelder</span><span className="po-hd-x">{MODULES.length} Räume</span></div>
        <div className="lf-list scry">
          {MODULES.map((m) => {
            const done = !!progress.modules[m.id]?.completed;
            return m.locked ? (
              <div key={m.id} className="lf-row lk">
                <div className="lf-lock"><Lock size={18} strokeWidth={1.6} /></div>
                <div className="lf-name"><b>{m.short}</b><small>{m.code}</small></div>
                <span className="lf-go lock">gesperrt</span>
              </div>
            ) : (
              <button key={m.id} className="lf-row" onClick={() => onOpenLernfeld(m.id)}>
                <Ring pct={done ? 100 : 0} size={52} />
                <div className="lf-name"><b>{m.short}</b><small>{m.intel}</small></div>
                <span className="lf-go">→</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="ln-right">
        <div className="po-card pad ln-rep">
          <div className="po-c-hd"><span className="t-label">Wiederholung</span></div>
          <div className="rep-row">
            <div className="rep-big fr">—<span>Demo</span></div>
            <Ring pct={0} size={64} />
          </div>
          <div className="rep-cap mono">Spaced-Repetition folgt</div>
          <button className="po-pill-btn rep-cta" disabled style={{ opacity: 0.5, cursor: 'default' }}>Bald verfügbar</button>
        </div>
        <div className="po-card pad ln-exam">
          <div className="po-c-hd"><span className="t-label">Klausur</span></div>
          <div className="exam-row">
            <Ring pct={0} size={70} />
            <div className="exam-meta"><b>Termin folgt</b><span className="mono dim">Demo</span></div>
          </div>
        </div>
      </div>

      <div className="po-card ln-dock">
        <div className="dk-l">
          <div className="dk-cover"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5z" /><path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5z" /></svg></div>
          <div className="dk-meta"><span className="eyebrow">Fokus-Session</span><b>Demo · noch nicht verdrahtet</b></div>
        </div>
        <div className="dk-c">
          <Wave n={64} played={0} playing={false} />
        </div>
        <div className="dk-r"><div className="pomo fr">25:00</div><span className="mono dim">Pomodoro · Demo</span></div>
      </div>
    </div>
  );
}
