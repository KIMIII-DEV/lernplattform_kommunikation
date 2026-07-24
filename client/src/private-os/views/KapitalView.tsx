/* Kapital — neue private Sektion aus dem Handoff (dort "stocks"-View):
   ein persönliches Portfolio-Dashboard, inhaltlich klar getrennt von der
   bestehenden ÖFFENTLICHEN Watchlist-Seite (/stocks, einfache Kursliste
   ohne Personenbezug). Da keine echte Portfolio-Datenquelle existiert
   (kein Broker-Feed, keine eigenen Positionen bekannt), bleibt dies ein
   klar gekennzeichneter Phase-A-Platzhalter — keine erfundenen
   Depotwerte oder Positionen, konsistent mit dem übrigen Projekt
   (vgl. pages/Stocks.tsx, pages/Weather.tsx). */
export default function KapitalView({ active: _active }: { active: boolean }) {
  return (
    <div className="stk-grid">
      <div className="po-card pad stk-head">
        <div className="sh-l">
          <span className="t-label">Depot · Gesamt</span>
          <div className="sh-val fr"><span className="po-cur">€</span>—</div>
          <div className="sh-delta mono dim">Portfolio-Tracking folgt</div>
        </div>
        <div className="sh-range">
          {['1T', '1W', '1M', '1J', 'MAX'].map((r) => <span key={r} className="po-chip">{r}</span>)}
        </div>
      </div>
      <div className="po-card pad stk-chart">
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--po-txt-3)' }}>
          <span className="mono">Chart folgt, sobald eine Datenquelle verbunden ist</span>
        </div>
        <div className="stk-axis">{['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map((d) => <span key={d}>{d}</span>)}</div>
      </div>
      <div className="po-card pad stk-hold">
        <div className="po-c-hd"><span className="t-label">Positionen</span><span className="po-hd-x">Demo</span></div>
        <div className="hold-list scry">
          <div style={{ padding: '20px 12px', color: 'var(--po-txt-3)', fontSize: 12, textAlign: 'center' }}>
            Noch keine Positionen hinterlegt.
          </div>
        </div>
      </div>
    </div>
  );
}
