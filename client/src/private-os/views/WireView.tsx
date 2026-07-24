import { useState } from 'react';
import { WIRE_STORIES } from './wireStories';

const FILTERS = ['Für dich', 'Finanzen', 'Wirtschaft', 'Bildung', 'Tech', 'Welt'];

/* Wire — News-Reader. Echte STORIES (aus der bisherigen pages/Wire.tsx
   übernommen). Der Marktlaufband unten ist reine Demo (keine echte
   Marktdaten-Anbindung vorhanden) — Werte bewusst als "—" markiert. */
export default function WireView() {
  const [reading, setReading] = useState(0);
  const [filter, setFilter] = useState('Für dich');
  const story = WIRE_STORIES[reading];
  const tickerRow = ['DAX', '€/$', 'Gold', 'Öl'].map((n) => `${n} —`).join('   ·   ');

  return (
    <div className="wire-grid">
      <div className="wire-filters">
        {FILTERS.map((f) => (
          <span key={f} className={`po-chip ${filter === f ? 'on' : ''}`} onClick={() => setFilter(f)} style={{ cursor: 'pointer' }}>{f}</span>
        ))}
      </div>
      <button className="po-card wire-hero" onClick={() => setReading(0)}>
        <div className="wh-img"><div className="wh-ph" /><div className="wh-tag"><span className="po-badge gld">{WIRE_STORIES[0].tag}</span><span className="mono dim">{WIRE_STORIES[0].time}</span></div></div>
        <div className="wh-body"><h2 className="fr">{WIRE_STORIES[0].title}</h2><p>{WIRE_STORIES[0].body.slice(0, 140)}…</p></div>
      </button>
      <div className="wire-list scry">
        {WIRE_STORIES.map((s, i) => (
          <button key={i} className="wr-story" onClick={() => setReading(i)}>
            <div className="ws-n mono">{String(i + 1).padStart(2, '0')}</div>
            <div className="ws-b"><span className="po-badge">{s.tag}</span><b>{s.title}</b><span className="mono dim">{s.time} · {s.mins} min</span></div>
          </button>
        ))}
      </div>
      <div className="wire-ticker"><div className="tick-track"><span className="ti mono">{tickerRow}   ·   {tickerRow}</span></div></div>

      {/* Leser für die gewählte Story — eigene kleine Detailkarte statt separatem Screen. */}
      {story && (
        <div className="po-card pad" style={{ gridColumn: '1 / 3', maxHeight: 160, overflowY: 'auto' }}>
          <div className="po-c-hd"><span className="t-label">{story.tag} · {reading + 1}/{WIRE_STORIES.length}</span></div>
          <p style={{ fontSize: 13, color: 'var(--po-txt-2)', lineHeight: 1.5 }}>{story.body}</p>
          <p style={{ fontSize: 12, color: 'var(--po-gold)', marginTop: 8, fontStyle: 'italic' }}>{story.take}</p>
        </div>
      )}
    </div>
  );
}
