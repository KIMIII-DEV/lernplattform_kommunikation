import { Bracket, BigNumber, TacticalCard, Tag } from '../ui/Tactical';
import type { ReactNode } from 'react';

export interface DebriefStat {
  label: string;
  value: ReactNode;
  tone?: 'warn' | 'ok';
}

export interface DebriefPick {
  label: string;
  correct: boolean;
  scorePct: number; // 0..100
  detail?: ReactNode;
}

/**
 * Universal after-action panel.
 * Used after a Drill batch AND after a Simulation run.
 */
export function DebriefPanel({
  title = 'AFTER-ACTION REPORT',
  scorePct,
  passed,
  stats,
  picks,
  onReset,
  onContinue,
  reflectionQuestions = [],
}: {
  title?: string;
  scorePct: number;
  passed: boolean;
  stats: DebriefStat[];
  picks: DebriefPick[];
  onReset?: () => void;
  onContinue?: () => void;
  reflectionQuestions?: string[];
}) {
  const grade =
    scorePct >= 90 ? 'A' :
    scorePct >= 75 ? 'B' :
    scorePct >= 60 ? 'C' :
    scorePct >= 40 ? 'D' : 'F';

  return (
    <div className="flex col gap-24">
      <div
        className="corner-marks"
        style={{
          padding: 32,
          background: 'var(--bg-2)',
          border: `1px solid ${passed ? 'var(--confirm)' : 'var(--warn)'}`,
          position: 'relative',
        }}
      >
        <div className="row-between mb-16">
          <Bracket tone={passed ? 'ok' : 'warn'}>{title}</Bracket>
          <span className="label">{stats.map((s) => `${s.label}: ${s.value}`).slice(0, 1).join('')}</span>
        </div>

        <div
          className="grid"
          style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, border: '1px solid var(--line)' }}
        >
          <div>
            <div className="label mb-8">VERDICT</div>
            <div className={`big-num ${passed ? 'ok' : 'warn'}`} style={{ fontSize: 56 }}>
              {passed ? 'PASS' : 'FAIL'}
            </div>
          </div>
          <div>
            <div className="label mb-8">GRADE</div>
            <div className="big-num" style={{ fontSize: 56 }}>{grade}</div>
            <div className="label mt-8">{Math.round(scorePct)}% / 100</div>
          </div>
          <div>
            <div className="label mb-8">SCORE</div>
            <div className="big-num" style={{ fontSize: 56 }}>{Math.round(scorePct)}<span className="small">%</span></div>
          </div>
          <div>
            <div className="label mb-8">CORRECT</div>
            <BigNumber
              value={picks.filter((p) => p.correct).length}
              label={`/ ${picks.length}`}
            />
          </div>
        </div>
      </div>

      {stats.length > 0 && (
        <div className="grid" style={{ gridTemplateColumns: `repeat(${stats.length}, 1fr)` }}>
          {stats.map((s, i) => (
            <div key={i} style={{ padding: 16 }}>
              <div className="label mb-8">{s.label}</div>
              <div className={`big-num ${s.tone ?? ''}`} style={{ fontSize: 32 }}>{s.value}</div>
            </div>
          ))}
        </div>
      )}

      {picks.length > 0 && (
        <TacticalCard title="DECISION REVIEW" status={`${picks.length} ITEMS`}>
          <table className="ttable">
            <thead>
              <tr>
                <th style={{ width: 60 }}>#</th>
                <th>ITEM</th>
                <th style={{ width: 120 }}>EVAL</th>
                <th style={{ width: 80 }}>SCORE</th>
              </tr>
            </thead>
            <tbody>
              {picks.map((p, i) => (
                <tr key={i}>
                  <td className="muted">{String(i + 1).padStart(2, '0')}</td>
                  <td>
                    <div style={{ fontSize: 12 }}>{p.label}</div>
                    {p.detail && (
                      <div className="label muted" style={{ marginTop: 2, color: 'var(--text-faint)' }}>
                        {p.detail}
                      </div>
                    )}
                  </td>
                  <td>
                    {p.correct
                      ? <Tag tone="ok">OPTIMAL</Tag>
                      : p.scorePct > 0
                        ? <Tag tone="caution">PARTIAL</Tag>
                        : <Tag tone="warn">FAIL</Tag>}
                  </td>
                  <td className={p.correct ? 'ok' : p.scorePct > 0 ? '' : 'warn'}>
                    {Math.round(p.scorePct)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TacticalCard>
      )}

      {reflectionQuestions.length > 0 && (
        <TacticalCard title="REFLEXION // SELF-DEBRIEF" status="OPTIONAL">
          <div className="flex col gap-12">
            {reflectionQuestions.map((q, i) => (
              <div key={i}>
                <div className="label mb-8">FRAGE 0{i + 1}</div>
                <div style={{ fontSize: 13, marginBottom: 8 }}>{q}</div>
                <textarea className="tinput" rows={2} placeholder="// ANTWORT EINGEBEN ..." />
              </div>
            ))}
          </div>
        </TacticalCard>
      )}

      <div className="flex gap-12">
        {onContinue && <button className="tbtn primary" onClick={onContinue}>WEITER</button>}
        {onReset && <button className="tbtn" onClick={onReset}>WIEDERHOLEN</button>}
      </div>
    </div>
  );
}
