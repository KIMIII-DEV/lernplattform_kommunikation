import { useState } from 'react';
import { Bracket, Tag } from '../ui/Tactical';
import type { QuizQuestion } from '../../types/learning';
import type { DrillProps } from './types';

const KEYS = ['A', 'B', 'C', 'D'];

/**
 * Praxisfall (Case) drill.
 * Same data shape as multiple-choice but the question text is treated as
 * a scenario block, and feedback is shown per option in the spirit of the
 * ZIP simulation engine. `q.question` may contain newlines for scenario layout.
 */
export function CaseDrill({ question, onAnswer, active = true }: DrillProps<QuizQuestion>) {
  const [picked, setPicked] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const correctIdx = normalizeIdx(question);
  const options = question.options ?? [];

  function submit(i: number) {
    if (submitted || !active) return;
    setPicked(i);
    setSubmitted(true);
    const correct = i === correctIdx;
    onAnswer({
      correct,
      score: correct ? 1 : 0,
      userAnswer: i,
      feedback: question.explanation,
    });
  }

  return (
    <div className="flex col gap-16">
      <div
        style={{
          padding: 16,
          background: 'var(--bg-3)',
          borderLeft: '2px solid var(--warn)',
          fontSize: 13,
          lineHeight: 1.65,
          whiteSpace: 'pre-wrap',
        }}
      >
        <div className="label mb-8"><Bracket tone="warn">SZENARIO</Bracket></div>
        {question.question}
      </div>

      <div className="flex col gap-8">
        {options.map((text, i) => {
          const isPicked = picked === i;
          const cls = !submitted
            ? isPicked ? 'selected' : ''
            : isPicked
              ? (i === correctIdx ? 'correct' : 'wrong')
              : (i === correctIdx ? 'correct' : '');
          return (
            <button
              key={i}
              className={`choice ${cls}`}
              disabled={submitted || !active}
              onClick={() => submit(i)}
            >
              <span className="key">{KEYS[i] ?? i + 1}</span>
              <span className="body">
                <span className="lead">{text}</span>
                <span className="meta">
                  {submitted && i === correctIdx && <Tag tone="ok">OPTIMAL</Tag>}
                  {submitted && isPicked && i !== correctIdx && <Tag tone="warn">SUBOPTIMAL</Tag>}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function normalizeIdx(q: QuizQuestion): number {
  const c = q.correctAnswer;
  if (typeof c === 'number') return c;
  if (typeof c === 'string') {
    const k = c.trim().toUpperCase();
    if (k.length === 1 && KEYS.includes(k)) return KEYS.indexOf(k);
    const idx = (q.options ?? []).findIndex((o) => o.trim() === c.trim());
    return idx >= 0 ? idx : 0;
  }
  return 0;
}
