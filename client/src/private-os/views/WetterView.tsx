import { useRef } from 'react';
import { CloudSun, Wind, Droplets } from 'lucide-react';
import { useAreaChart } from '../widgets';

/* Wetter — exakt derselbe Demo-Platzhalter-Zustand wie die bisherige
   pages/Weather.tsx: keine echte Wetter-API angebunden (TODO Open-Meteo
   bleibt bestehen), keine erfundenen Werte. */
export default function WetterView({ active }: { active: boolean }) {
  const curveRef = useRef<HTMLCanvasElement>(null);
  useAreaChart(curveRef, active ? [12, 12, 11, 11, 10, 10, 9, 9] : [12, 12, 11, 11, 10, 10, 9, 9], { curve: true });

  return (
    <div className="wx-grid">
      <div className="po-card pad wx-now">
        <div className="po-c-hd"><span className="t-label">Ort folgt · jetzt</span><span className="po-hd-x mono">Demo</span></div>
        <div className="wx-hero">
          <CloudSun className="wx-big" size={104} strokeWidth={1.1} />
          <div className="wx-temp fr">—<span>°C</span></div>
        </div>
        <div className="wx-cond">Live via Open-Meteo folgt</div>
        <div className="wx-tiles">
          <div className="wt"><span className="mono dim">Wind</span><b>— km/h</b></div>
          <div className="wt"><span className="mono dim">Luftf.</span><b>— %</b></div>
          <div className="wt"><span className="mono dim">UV</span><b>—</b></div>
          <div className="wt"><span className="mono dim">Sonne ↓</span><b>—</b></div>
        </div>
      </div>
      <div className="po-card pad wx-hourly">
        <div className="po-c-hd"><span className="t-label">Verlauf · Demo</span><span className="po-hd-x mono">°C</span></div>
        <canvas className="wxcurve" ref={curveRef} width={720} height={220} />
        <div className="wx-hours">
          {['19', '20', '21', '22', '23', '00', '01', '02'].map((h) => (
            <div key={h} className="wh"><span>{h}</span><b>—°</b></div>
          ))}
        </div>
      </div>
      <div className="po-card pad wx-week">
        <div className="po-c-hd"><span className="t-label">7 Tage · Demo</span></div>
        <div className="wx-days">
          {['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map((d) => (
            <div key={d} className="wd">
              <span className="wd-day">{d}</span>
              <Wind size={16} strokeWidth={1.5} />
              <span className="wd-lo">—°</span>
              <div className="wd-bar" />
              <span className="wd-hi">—°</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
