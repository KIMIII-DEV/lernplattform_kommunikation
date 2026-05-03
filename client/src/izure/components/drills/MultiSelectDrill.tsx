import { useState } from 'react';
import type { QuizQuestion } from '../../types/learning';
import type { DrillProps } from './types';

const KEYS = ['A', 'B', 'C', 'D', 'E', 'F'];

export function MultiSelectDrill({ question, onAnswer, active = true }: DrillProps<QuizQuestion>) {
  const [picked, setPicked] = useState<Set<number>>(new Set());
  const [submitted, setSubmitted] = useState(false);
  const options = question.options ?? [];

  const correctIdx = normalizeCorrectArr(question);

  function toggle(i: number) {
    if (submitted || !active) return;
    setPicked((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  }

  function submit() {
    if (submitted || !active) return;
    const got = [...picked];
    const wanted = correctIdx;
    const correctSet = new Set(wanted);
    const tp = got.filter((i) => correctSet.has(i)).length;
    const fp = got.filter((i) => !correctSet.has(i)).length;
    const fn = wanted.filter((i) => !picked.has(i)).length;
    // Score: F1-ish, capped to [0..1]
    const denom = (tp + fp + fn) || 1;
    const score = Math.max(0, tp / denom);
    setSubmitted(true);
    onAnswer({
      correct: fp === 0 && fn === 0,
      score,
      userAnswer: got,
      feedback: question.explanation,
    });
  }

  return (
    <div className="flex col gap-8">
      {options.map((text, i) => {
        const sel = picked.has(i);
        const cls = !submitted
          ? sel ? 'selected' : ''
          : correctIdx.includes(i)
            ? (sel ? 'correct' : 'correct')
            : (sel ? 'wrong' : '');
        return (
          <button
            key={i}
            className={`choice ${cls}`}
            disabled={submitted || !active}
            onClick={() => toggle(i)}
          >
            <span className="key">{KEYS[i] ?? i + 1}</span>
            <span className="body">
              <span className="lead">{text}</span>
              <span className="meta">
                {sel ? '◼ AUSGEWÄHLT' : '◻'}
              </span>
            </span>
          </button>
        );
      })}
      {!submitted && (
        <button className="tbtn primary mt-8" onClick={submit} disabled={picked.size === 0}>
          ANTWORT BESTÄTIGEN ({picked.size} GEWÄHLT)
        </button>
      )}
    </div>
  );
}

function normalizeCorrectArr(q: QuizQuestion): number[] {
  const c = q.correctAnswer;
  if (Array.isArray(c)) {
    return (c as Array<number | string>).map((v) => {
      if (typeof v === 'number') return v;
      const k = v.trim().toUpperCase();
      if (k.length === 1 && KEYS.includes(k)) return KEYS.indexOf(k);
      const idx = (q.options ?? []).findIndex((o) => o.trim() === v.trim());
      return idx;
    }).filter((i) => i >= 0);
  }
  if (typeof c === 'number') return [c];
  if (typeof c === 'string') {
    return c.split(/[,\s]+/).map((s) => {
      const k = s.trim().toUpperCase();
      if (k.length === 1 && KEYS.includes(k)) return KEYS.indexOf(k);
      const idx = (q.options ?? []).findIndex((o) => o.trim() === s.trim());
      return idx;
    }).filter((i) => i >= 0);
  }
  return [];
}
