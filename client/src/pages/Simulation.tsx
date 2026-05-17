import { useState } from 'react';
import { GhostText } from '@/components/izure/primitives';
import { ModuleDeep, ModuleSummary } from '@/lib/modules';
import type { SimResult } from './Study';

export default function Simulation({
  module: m,
  deep,
  onComplete,
  onAbort,
}: {
  module: ModuleSummary;
  deep: ModuleDeep | null;
  onComplete: (r: SimResult) => void;
  onAbort: () => void;
}) {
  if (!deep) {
    return (
      <div className="page-root" data-screen-label="Sim · stub">
        <section style={{ paddingTop: 160, paddingBottom: 120 }}>
          <div className="shell" style={{ textAlign: 'center' }}>
            <div className="t-label" style={{ color: 'var(--accent)', marginBottom: 18 }}>
              Simulation
            </div>
            <h1 className="t-display italic" style={{ fontSize: 'clamp(48px, 6vw, 80px)', fontStyle: 'italic' }}>
              In preparation.
            </h1>
            <p className="t-body" style={{ maxWidth: 480, margin: '24px auto 40px' }}>
              Die Live-Sim für {m.code} wird im nächsten Drop ergänzt. Zurück ins Mission-Briefing.
            </p>
            <button className="btn-primary" onClick={onAbort}>
              Back
            </button>
          </div>
        </section>
      </div>
    );
  }

  return <DecisionFlow deep={deep} onComplete={onComplete} onAbort={onAbort} />;
}

function DecisionFlow({
  deep,
  onComplete,
  onAbort,
}: {
  deep: ModuleDeep;
  onComplete: (r: SimResult) => void;
  onAbort: () => void;
}) {
  const decisions = deep.simulation.decisions;
  const [idx, setIdx] = useState(0);
  const [picks, setPicks] = useState<SimResult['perDecision']>([]);
  const [chosen, setChosen] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);

  const current = decisions[idx];
  const chosenOpt = current.options.find((o) => o.id === chosen);

  const advance = () => {
    if (!chosenOpt) return;
    const next: SimResult['perDecision'][number] = {
      id: current.id,
      selected: chosenOpt.id,
      score: chosenOpt.score,
      correct: chosenOpt.correct,
    };
    const newPicks = [...picks, next];

    if (idx < decisions.length - 1) {
      setPicks(newPicks);
      setIdx(idx + 1);
      setChosen(null);
      setRevealed(false);
    } else {
      const totalScore = newPicks.reduce((s, p) => s + p.score, 0);
      const maxScore = decisions.reduce(
        (s, d) => s + Math.max(...d.options.map((o) => o.score)),
        0,
      );
      onComplete({
        perDecision: newPicks,
        totalScore,
        maxScore,
        pct: Math.round((totalScore / maxScore) * 100),
      });
    }
  };

  return (
    <div className="page-root" data-screen-label="Sim · live">
      <section style={{ paddingTop: 120, paddingBottom: 60, position: 'relative' }}>
        <GhostText left="-2vw" top="6vh" size="26vw" style={{ opacity: 0.04, fontStyle: 'italic' }}>
          live
        </GhostText>
        <div className="shell">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 30 }}>
            <div className="t-label" style={{ color: 'var(--accent)' }}>
              {current.bracket}
            </div>
            <div className="t-num" style={{ fontSize: 11, color: 'var(--text-muted)' }}>
              Decision {idx + 1} of {decisions.length}
            </div>
          </div>

          {/* Transcript intro shown on first decision only */}
          {idx === 0 && (
            <div
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--line-subtle)',
                padding: '24px 28px',
                marginBottom: 36,
              }}
            >
              {deep.simulation.transcript_intro.map((t, i) => (
                <div key={i} style={{ marginBottom: 12, display: 'grid', gridTemplateColumns: '64px 1fr', gap: 16 }}>
                  <span
                    className="t-label"
                    style={{
                      fontSize: 9,
                      color: t.who === 'SYS' ? 'var(--text-muted)' : 'var(--accent-bordeaux-light)',
                      paddingTop: 4,
                    }}
                  >
                    {t.who}
                  </span>
                  <p
                    className="t-body"
                    style={{
                      fontSize: t.who === 'SYS' ? 12 : 16,
                      fontStyle: t.who === 'SYS' ? 'normal' : 'italic',
                      color: t.who === 'SYS' ? 'var(--text-muted)' : 'var(--text-primary)',
                      fontFamily: t.who === 'SYS' ? 'Cinzel, serif' : 'Cormorant Garamond, serif',
                    }}
                  >
                    {t.what}
                  </p>
                </div>
              ))}
            </div>
          )}

          <h2
            className="t-display"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', lineHeight: 1.15, marginBottom: 36 }}
          >
            {current.prompt}
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {current.options.map((opt) => {
              const isChosen = chosen === opt.id;
              const showFeedback = revealed && isChosen;
              return (
                <button
                  key={opt.id}
                  onClick={() => !revealed && setChosen(opt.id)}
                  disabled={revealed && !isChosen}
                  style={{
                    background: isChosen ? 'rgba(176,141,87,0.08)' : 'var(--bg-card)',
                    border: `1px solid ${isChosen ? 'var(--accent)' : 'var(--line-subtle)'}`,
                    padding: '20px 24px',
                    textAlign: 'left',
                    cursor: revealed ? 'default' : 'pointer',
                    transition: 'all 300ms var(--ease)',
                    opacity: revealed && !isChosen ? 0.4 : 1,
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
                      Option {opt.id}
                    </span>
                    <span className="t-label" style={{ fontSize: 8, color: 'var(--text-muted)' }}>
                      {opt.tag}
                    </span>
                  </div>
                  <p className="t-body" style={{ fontSize: 15, color: 'var(--text-primary)' }}>
                    {opt.text}
                  </p>

                  {showFeedback && (
                    <div
                      style={{
                        marginTop: 16,
                        paddingTop: 14,
                        borderTop: '1px solid var(--line-subtle)',
                        display: 'flex',
                        gap: 16,
                      }}
                    >
                      <span
                        className="t-label"
                        style={{
                          fontSize: 10,
                          color: opt.correct ? 'var(--accent-light)' : 'var(--accent-bordeaux-light)',
                          paddingTop: 3,
                        }}
                      >
                        {opt.correct ? '· CORRECT ·' : '· FLAG ·'}
                      </span>
                      <p
                        className="t-body"
                        style={{ fontSize: 13, fontStyle: 'italic', color: 'var(--text-primary)' }}
                      >
                        {opt.feedback}
                      </p>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <div style={{ marginTop: 40, display: 'flex', gap: 24, justifyContent: 'space-between' }}>
            <button className="btn-secondary" onClick={onAbort} style={{ color: 'var(--text-muted)' }}>
              <span className="arrow">←</span>
              <span>Abort sim</span>
            </button>
            {!revealed ? (
              <button
                className="btn-primary"
                onClick={() => chosen && setRevealed(true)}
                disabled={!chosen}
                style={{ opacity: chosen ? 1 : 0.4 }}
              >
                Reveal feedback
              </button>
            ) : (
              <button className="btn-primary" onClick={advance}>
                {idx < decisions.length - 1 ? 'Next decision →' : 'Open debrief →'}
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
