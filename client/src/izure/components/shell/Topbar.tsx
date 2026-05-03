import { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import type { AppProgress } from '../../types/learning';

function fmt2(n: number) { return String(n).padStart(2, '0'); }
function useClock() {
  const [t, setT] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setT(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

export function Topbar({ progress }: { progress: AppProgress }) {
  const t = useClock();
  const loc = useLocation();

  const completedRuns = Object.values(progress.modules ?? {})
    .reduce((s, m) => s + (m.simRuns?.length ?? 0), 0);

  let label = '';
  if (loc.pathname.startsWith('/lf/')) label = '[ MODULE ]';
  else if (loc.pathname.startsWith('/dashboard') || loc.pathname === '/') label = '[ COMMAND ]';

  return (
    <div className="topbar">
      <Link to="/" style={{ textDecoration: 'none', cursor: 'pointer' }}>
        <span className="brand">IZURÉ<span className="red">.</span></span>
      </Link>
      <span className="label">// DIALOGMARKETING / TACTICAL TRAINING</span>
      {label && <span className="label muted" style={{ marginLeft: 8 }}>{label}</span>}

      <div className="topbar-meta">
        <span><span className="muted">OPERATOR //</span> <span className="v">A.RIVERA</span></span>
        <span><span className="muted">CLEARANCE //</span> <span className="v">2</span></span>
        <span><span className="muted">RUNS //</span> <span className="v">{completedRuns}</span></span>
        <span>
          <span className="muted">ZULU //</span>{' '}
          <span className="v">{fmt2(t.getHours())}:{fmt2(t.getMinutes())}:{fmt2(t.getSeconds())}</span>
        </span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <span style={{ display: 'inline-block', width: 8, height: 8, background: 'var(--warn)' }} />
          <span className="warn">REC</span>
        </span>
      </div>
    </div>
  );
}
