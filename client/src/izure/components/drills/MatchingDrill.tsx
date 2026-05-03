import { useMemo, useState } from 'react';
import type { QuizQuestion } from '../../types/learning';
import type { DrillProps } from './types';

/**
 * Matching (Zuordnung) drill.
 * Source format:
 *   q.correctAnswer = [{ left: "POP3", right: "Mails werden vom Server geladen" }, ...]
 */
type Pair = { left: string; right: string };

export function MatchingDrill({ question, onAnswer, active = true }: DrillProps<QuizQuestion>) {
  const truth = (Array.isArray(question.correctAnswer) ? question.correctAnswer : []) as Pair[];

  // Stable shuffles per mount so the user can't memorize order across re-renders
  const lefts = useMemo(() => shuffle(truth.map((p) => p.left)), [truth]);
  const rights = useMemo(() => shuffle(truth.map((p) => p.right)), [truth]);

  const [selL, setSelL] = useState<string | null>(null);
  const [selR, setSelR] = useState<string | null>(null);
  const [pairs, setPairs] = useState<Record<string, string>>({}); // left -> right
  const [submitted, setSubmitted] = useState(false);

  // Try to match when both selected
  if (selL && selR) {
    setPairs((p) => ({ ...p, [selL]: selR }));
    setSelL(null); setSelR(null);
  }

  const allPaired = Object.keys(pairs).length === lefts.length;

  function submit() {
    if (submitted || !active) return;
    const truthMap = new Map(truth.map((p) => [p.left, p.right]));
    let tp = 0;
    for (const [l, r] of Object.entries(pairs)) if (truthMap.get(l) === r) tp++;
    const score = truth.length ? tp / truth.length : 0;
    setSubmitted(true);
    onAnswer({
      correct: tp === truth.length,
      score,
      userAnswer: pairs,
      feedback: question.explanation,
    });
  }

  function isMatched(side: 'l' | 'r', val: string) {
    if (side === 'l') return Object.prototype.hasOwnProperty.call(pairs, val);
    return Object.values(pairs).includes(val);
  }

  return (
    <div className="flex col gap-16">
      <div className="match-grid">
        <div>
          <div className="match-col-head">// SET A — BEGRIFFE</div>
          <div className="flex col gap-4">
            {lefts.map((l) => {
              const matched = isMatched('l', l);
              const sel = selL === l;
              const cls = matched ? 'matched' : sel ? 'selected' : '';
              return (
                <div
                  key={l}
                  className={`match-item ${cls}`}
                  onClick={() => !matched && !submitted && active && setSelL(sel ? null : l)}
                >
                  <span>{l}</span>
                  <span className="pin">{matched ? '↔ ' + pairs[l] : ''}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className="match-col-head">// SET B — DEFINITIONEN</div>
          <div className="flex col gap-4">
            {rights.map((r) => {
              const matched = isMatched('r', r);
              const sel = selR === r;
              const cls = matched ? 'matched' : sel ? 'selected' : '';
              return (
                <div
                  key={r}
                  className={`match-item ${cls}`}
                  onClick={() => !matched && !submitted && active && setSelR(sel ? null : r)}
                >
                  <span>{r}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex gap-12">
        {!submitted && (
          <button
            className="tbtn primary"
            disabled={!allPaired}
            onClick={submit}
          >
            BESTÄTIGEN ({Object.keys(pairs).length}/{lefts.length})
          </button>
        )}
        {!submitted && Object.keys(pairs).length > 0 && (
          <button className="tbtn ghost" onClick={() => setPairs({})}>
            ZURÜCKSETZEN
          </button>
        )}
      </div>

      {submitted && (
        <div className="feedback">
          <div className="label mb-8">KORREKTE ZUORDNUNG</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 12px 1fr', gap: '4px 12px' }}>
            {truth.map((p, i) => (
              <span key={i} style={{ display: 'contents' }}>
                <span className="ok">{p.left}</span>
                <span className="muted">↔</span>
                <span>{p.right}</span>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
