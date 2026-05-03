import { Link, useLocation } from 'wouter';
import { LERNFELDER } from '../../lib/dataAdapter';
import type { AppProgress } from '../../types/learning';

export function Sidebar({ progress }: { progress: AppProgress }) {
  const [location] = useLocation();
  const isActive = (p: string) => location === p || location.startsWith(p + '/');

  return (
    <div className="sidebar">
      <div className="nav-section">// COMMAND</div>

      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className={`nav-item ${isActive('/') && location === '/' ? 'active' : ''}`}>
          <span className="num">00</span>
          <span>DASHBOARD</span>
        </div>
      </Link>

      <div className="nav-section">// LERNFELDER</div>

      {LERNFELDER.map((lf) => {
        const path = `/lf/${lf.id}`;
        const lfp = progress.modules[lf.id];
        const runs = lfp?.simRuns?.length ?? 0;
        const empty = lf.topics.length + lf.flashcards.length + lf.questions.length === 0;
        return (
          <Link
            key={lf.id}
            to={empty ? '#' : path}
            style={{ textDecoration: 'none', pointerEvents: empty ? 'none' : 'auto' }}
            onClick={(e) => empty && e.preventDefault()}
          >
            <div
              className={`nav-item ${isActive(path) ? 'active' : ''} ${empty ? 'locked' : ''} ${runs > 0 ? 'done' : ''}`}
              title={lf.name}
            >
              <span className="num">{lf.id.replace('LF', '0')}</span>
              <span style={{
                flex: 1, overflow: 'hidden',
                textOverflow: 'ellipsis', whiteSpace: 'nowrap',
              }}>
                {lf.name.split(/[—,]/)[0].trim()}
              </span>
              {runs > 0 && <span className="ok" style={{ fontSize: 9 }}>✓</span>}
              {empty && <span className="faint" style={{ fontSize: 9 }}>⊘</span>}
            </div>
          </Link>
        );
      })}

      <div className="nav-section">// SYSTEM</div>
      <div className="nav-item locked"><span className="num">SY</span><span>COMPLIANCE</span></div>
      <div className="nav-item locked"><span className="num">SY</span><span>EXPORT LOG</span></div>

      <div style={{ padding: 16, marginTop: 24 }}>
        <div className="label mb-8">SESSION</div>
        <div style={{ fontSize: 11, lineHeight: 1.7 }} className="muted">
          ID: 4471-A<br />
          NODE: ZULU-014<br />
          UPLINK: <span className="ok">SECURE</span>
        </div>
      </div>
    </div>
  );
}
