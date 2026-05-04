/**
 * IZURÉ — Root Application Component
 * Uses wouter (already installed in this repo) for routing.
 * Imports the Izuré design tokens from izure.css.
 */
import { Route, Switch, useParams } from 'wouter';
import { getLernfeld } from './lib/dataAdapter';
import { useProgress } from './hooks/useProgress';
import { Topbar } from './components/shell/Topbar';
import { Sidebar } from './components/shell/Sidebar';
import { BottomTicker } from './components/shell/BottomTicker';
import { Dashboard } from './pages/Dashboard';
import { LfHub } from './pages/LfHub';
import type { LernfeldId } from './types/learning';

function LfRoute({ patchLF, progress }: {
  patchLF: ReturnType<typeof useProgress>['patchLF'];
  progress: ReturnType<typeof useProgress>['progress'];
}) {
  const { id } = useParams<{ id: string }>();
  const lf = getLernfeld(id as LernfeldId);

  if (!lf) {
    return (
      <div style={{ padding: 40, textAlign: 'center' }}>
        <div style={{
          fontFamily: 'var(--izure-font-mono)', fontSize: 11,
          letterSpacing: '0.3em', textTransform: 'uppercase',
          color: 'var(--izure-warn)', marginBottom: 16,
        }}>
          // FEHLER: UNBEKANNTES LERNFELD
        </div>
        <div style={{ color: 'var(--izure-text-dim)', fontSize: 12 }}>
          ID „{id}" nicht gefunden. Prüfe learningData.ts.
        </div>
      </div>
    );
  }

  const lfProgress = progress.modules[lf.id as LernfeldId];
  return (
    <LfHub
      lf={lf}
      progress={lfProgress}
      onUpdate={(p) => patchLF(lf.id as LernfeldId, () => p)}
    />
  );
}

export function IzureApp() {
  const { progress, patchLF } = useProgress();

  return (
    <div
      data-izure="true"
      style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '240px 1fr',
        gridTemplateRows: '56px 1fr 32px',
        gridTemplateAreas: '"topbar topbar" "side main" "ticker ticker"',
        background: 'var(--izure-bg)',
        color: 'var(--izure-text)',
        fontFamily: 'var(--izure-font-mono)',
        fontSize: '13px',
      }}
    >
      <div style={{ gridArea: 'topbar' }}>
        <Topbar progress={progress} />
      </div>
      <div style={{ gridArea: 'side', borderRight: '1px solid var(--izure-line)', overflowY: 'auto' }}>
        <Sidebar progress={progress} />
      </div>
      <main style={{
        gridArea: 'main',
        overflowY: 'auto',
        maxHeight: 'calc(100vh - 56px - 32px)',
      }}>
        <Switch>
          <Route path="/">
            <Dashboard progress={progress} />
          </Route>
          <Route path="/dashboard">
            <Dashboard progress={progress} />
          </Route>
          <Route path="/lf/:id">
            <LfRoute patchLF={patchLF} progress={progress} />
          </Route>
        </Switch>
      </main>
      <div style={{ gridArea: 'ticker' }}>
        <BottomTicker />
      </div>
    </div>
  );
}

export default IzureApp;
