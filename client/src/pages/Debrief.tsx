import { GhostText, GoldLine } from '@/components/izure/primitives';
import { ModuleDeep, ModuleSummary } from '@/lib/modules';
import type { SimResult } from './Study';

export default function Debrief({
  module: m,
  deep,
  result,
  onRetry,
  onReturn,
}: {
  module: ModuleSummary;
  deep: ModuleDeep | undefined;
  result: SimResult;
  onRetry: () => void;
  onReturn: () => void;
}) {
  const verdict =
    result.pct >= 90
      ? 'Full mastery.'
      : result.pct >= 70
        ? 'Performance: high.'
        : result.pct >= 50
          ? 'Partial readiness.'
          : 'Retraining required.';

  return (
    <div className="page-root" data-screen-label="Debrief">
      <section style={{ paddingTop: 140, paddingBottom: 60, position: 'relative' }}>
        <GhostText right="-3vw" top="6vh" size="28vw" style={{ opacity: 0.04, fontStyle: 'italic' }}>
          debrief
        </GhostText>
        <div className="shell">
          <div className="t-label" style={{ color: 'var(--accent)', marginBottom: 22 }}>
            · Debrief · {m.code} · {m.lernfeld}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 60, alignItems: 'end', marginBottom: 60 }}>
            <h1
              className="t-display"
              style={{ fontSize: 'clamp(56px, 8vw, 112px)', lineHeight: 0.95 }}
            >
              <span className="italic">{verdict}</span>
            </h1>
            <div style={{ paddingBottom: 16 }}>
              <p className="t-body" style={{ fontSize: 16, maxWidth: 420 }}>
                Score, decision by decision. Markus saved or lost depending on which option you picked.
              </p>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 0,
              border: '1px solid var(--line-subtle)',
            }}
          >
            <Stat label="Score" value={`${result.totalScore} / ${result.maxScore}`} />
            <Stat label="Percent" value={`${result.pct} %`} accent />
            <Stat label="Decisions" value={`${result.perDecision.length} cleared`} />
          </div>

          {deep && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '5fr 7fr',
                gap: 56,
                marginTop: 56,
                padding: '40px 0',
                borderTop: '1px solid var(--line-subtle)',
                borderBottom: '1px solid var(--line-subtle)',
              }}
            >
              <div>
                <div className="t-label" style={{ color: 'var(--accent)', marginBottom: 16 }}>
                  Bench average
                </div>
                <dl style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '12px 16px' }}>
                  <dt className="t-label" style={{ fontSize: 9, color: 'var(--accent)' }}>
                    Score
                  </dt>
                  <dd className="t-body" style={{ fontSize: 13 }}>
                    {deep.reflection.bench.avg_score} / 12
                  </dd>
                  <dt className="t-label" style={{ fontSize: 9, color: 'var(--accent)' }}>
                    Duration
                  </dt>
                  <dd className="t-body" style={{ fontSize: 13 }}>
                    {deep.reflection.bench.avg_duration}s
                  </dd>
                  <dt className="t-label" style={{ fontSize: 9, color: 'var(--accent)' }}>
                    Churn save
                  </dt>
                  <dd className="t-body" style={{ fontSize: 13 }}>
                    {Math.round(deep.reflection.bench.churn_save_rate * 100)} %
                  </dd>
                </dl>
              </div>
              <div>
                <div className="t-label" style={{ color: 'var(--accent-bordeaux-light)', marginBottom: 16 }}>
                  Reflection · for your notebook
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {deep.reflection.questions.map((q, i) => (
                    <li
                      key={i}
                      className="t-display italic"
                      style={{ fontStyle: 'italic', fontSize: 20, lineHeight: 1.3 }}
                    >
                      — {q}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {deep && (
            <>
              <GoldLine label="Decision log" />
              <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 14 }}>
                {result.perDecision.map((p, i) => {
                  const d = deep.simulation.decisions.find((x) => x.id === p.id);
                  const opt = d?.options.find((o) => o.id === p.selected);
                  if (!d || !opt) return null;
                  return (
                    <div
                      key={p.id}
                      style={{
                        padding: '20px 24px',
                        background: 'var(--bg-card)',
                        border: '1px solid',
                        borderColor: p.correct ? 'var(--accent-dim)' : 'var(--accent-bordeaux-dim)',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'baseline',
                          marginBottom: 10,
                        }}
                      >
                        <span className="t-label" style={{ fontSize: 9, color: 'var(--accent)' }}>
                          {d.bracket} · Option {opt.id}
                        </span>
                        <span
                          className="t-label"
                          style={{
                            fontSize: 9,
                            color: p.correct ? 'var(--accent-light)' : 'var(--accent-bordeaux-light)',
                          }}
                        >
                          {p.correct ? '✓ ' + p.score + '/3' : '· ' + p.score + '/3'}
                        </span>
                      </div>
                      <p className="t-body" style={{ fontSize: 14, marginBottom: 10 }}>
                        {opt.text}
                      </p>
                      <p
                        className="t-body"
                        style={{
                          fontSize: 13,
                          fontStyle: 'italic',
                          color: p.correct ? 'var(--text-primary)' : 'var(--accent-bordeaux-light)',
                        }}
                      >
                        {opt.feedback}
                      </p>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>

      <section style={{ padding: '40px 0 140px' }}>
        <div className="shell" style={{ display: 'flex', justifyContent: 'center', gap: 24 }}>
          <button className="btn-primary" onClick={onRetry}>
            Re-run sim
          </button>
          <button className="btn-secondary" onClick={onReturn}>
            <span className="arrow">←</span>
            <span>Back to Study</span>
          </button>
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div style={{ padding: '40px 32px', borderRight: '1px solid var(--line-subtle)' }}>
      <div className="t-label" style={{ fontSize: 9, color: 'var(--text-muted)', marginBottom: 12 }}>
        {label}
      </div>
      <div
        className="t-display"
        style={{ fontSize: 44, color: accent ? 'var(--accent)' : 'var(--text-primary)' }}
      >
        {value}
      </div>
    </div>
  );
}
