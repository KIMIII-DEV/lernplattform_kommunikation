import { useState } from 'react';
import { GhostText } from '@/components/izure/primitives';
import { MODULES, MODULE_DEEP, ModuleSummary } from '@/lib/modules';
import { useProgress } from '@/lib/useProgress';
import Mission from './Mission';
import Simulation from './Simulation';
import Debrief from './Debrief';

type View = 'lobby' | 'mission' | 'sim' | 'debrief';

export interface SimResult {
  perDecision: { id: string; selected: string; score: number; correct: boolean }[];
  totalScore: number;
  maxScore: number;
  pct: number;
}

export default function StudyPage() {
  const [view, setView] = useState<View>('lobby');
  const [activeId, setActiveId] = useState<string | null>(null);
  const [result, setResult] = useState<SimResult | null>(null);
  const { progress, startModule, completeModule } = useProgress();

  const totalDone = Object.values(progress.modules).filter((m) => m.completed).length;
  const pct = Math.round((totalDone / MODULES.length) * 100);

  const open = (m: ModuleSummary) => {
    if (m.locked) return;
    startModule(m.id);
    setActiveId(m.id);
    setView('mission');
  };

  const launchSim = () => setView('sim');

  const onSimComplete = (r: SimResult) => {
    setResult(r);
    if (activeId) completeModule(activeId, r.totalScore);
    setView('debrief');
  };

  const back = () => setView('mission');
  const lobby = () => {
    setView('lobby');
    setActiveId(null);
    setResult(null);
  };

  if (view === 'mission' && activeId) {
    const m = MODULES.find((x) => x.id === activeId);
    if (!m) return null;
    return <Mission module={m} deep={MODULE_DEEP[m.id]} onLaunch={launchSim} onBack={lobby} />;
  }

  if (view === 'sim' && activeId) {
    const m = MODULES.find((x) => x.id === activeId);
    const deep = m ? MODULE_DEEP[m.id] : null;
    return <Simulation module={m!} deep={deep} onComplete={onSimComplete} onAbort={back} />;
  }

  if (view === 'debrief' && result && activeId) {
    const m = MODULES.find((x) => x.id === activeId);
    if (!m) return null;
    return <Debrief module={m} deep={MODULE_DEEP[m.id]} result={result} onRetry={launchSim} onReturn={lobby} />;
  }

  return (
    <div className="page-root" data-screen-label="06 Private · Study">
      <section style={{ paddingTop: 140, paddingBottom: 60, position: 'relative' }}>
        <GhostText right="-3vw" top="10vh" size="28vw" style={{ opacity: 0.04, fontStyle: 'italic' }}>
          study
        </GhostText>
        <div className="shell">
          <div className="t-label" style={{ color: 'var(--accent)', marginBottom: 22 }}>
            · Room 01 · Study · Dialogmarketing · LF4 + LF5
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '6fr 6fr', gap: 60, alignItems: 'end', marginBottom: 60 }}>
            <h1 className="t-display" style={{ fontSize: 'clamp(56px, 8vw, 112px)', lineHeight: 0.95 }}>
              The reading
              <br />
              <span className="italic">room.</span>
            </h1>
            <div style={{ paddingBottom: 16 }}>
              <p className="t-body" style={{ marginBottom: 28, maxWidth: 440 }}>
                Fünf Module aus dem Dialogmarketing — sortiert nach Schwere, nicht nach Reihenfolge. Wähle was du heute
                aushältst. Der Stoff wartet.
              </p>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                  <span className="t-label" style={{ fontSize: 9 }}>
                    Overall · session by session
                  </span>
                  <span className="t-num" style={{ fontSize: 11, color: 'var(--accent)' }}>
                    {pct}% · {totalDone}/{MODULES.length}
                  </span>
                </div>
                <div style={{ height: 2, background: 'var(--line-subtle)', position: 'relative' }}>
                  <div
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      height: '100%',
                      width: pct + '%',
                      background: 'var(--accent)',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Module grid */}
      <section style={{ paddingBottom: 120 }}>
        <div className="shell">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            {MODULES.map((m, i) => {
              const p = progress.modules[m.id] || {};
              const done = !!p.completed;
              const accent = colorVar(m.color);
              return (
                <article
                  key={m.id}
                  onClick={() => open(m)}
                  style={{
                    background: 'var(--bg-card)',
                    border: `1px solid ${done ? accent : 'var(--line-subtle)'}`,
                    padding: '32px 28px',
                    cursor: m.locked ? 'not-allowed' : 'pointer',
                    opacity: m.locked ? 0.4 : 1,
                    transition: 'all 500ms var(--ease)',
                    position: 'relative',
                  }}
                  onMouseOver={(e) => {
                    if (m.locked) return;
                    e.currentTarget.style.borderColor = accent;
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = done ? accent : 'var(--line-subtle)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      marginBottom: 18,
                    }}
                  >
                    <div className="t-num" style={{ fontSize: 11, color: accent }}>
                      {String(i + 1).padStart(2, '0')} · {m.code}
                    </div>
                    <div className="t-label" style={{ fontSize: 8, color: 'var(--text-muted)' }}>
                      {m.lernfeld} · {m.intel}
                    </div>
                  </div>
                  <h3 className="t-display" style={{ fontSize: 26, marginBottom: 8, lineHeight: 1.1 }}>
                    {m.short}
                  </h3>
                  <p className="t-body" style={{ fontSize: 13, marginBottom: 24 }}>
                    {m.summary}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingTop: 16,
                      borderTop: '1px solid var(--line-subtle)',
                      color: 'var(--text-muted)',
                      fontFamily: 'Cinzel, serif',
                      fontSize: 9,
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                    }}
                  >
                    <span>{m.duration}</span>
                    {m.locked ? (
                      <span>· locked</span>
                    ) : done ? (
                      <span style={{ color: accent }}>✓ cleared · {p.score ?? 0}</span>
                    ) : p.started ? (
                      <span>in progress →</span>
                    ) : (
                      <span style={{ color: 'var(--accent)' }}>open →</span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

function colorVar(c: ModuleSummary['color']) {
  if (c === 'bordeaux') return 'var(--accent-bordeaux-light)';
  if (c === 'petrol') return 'var(--accent-petrol-light)';
  if (c === 'olive') return 'var(--accent-olive)';
  return 'var(--accent-gold-light)';
}
