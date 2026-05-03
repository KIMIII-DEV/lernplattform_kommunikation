import { useState } from 'react';
import { Tag } from '../ui/Tactical';
import type { QuizQuestion } from '../../types/learning';
import type { DrillProps } from './types';

const KEYS = ['A', 'B', 'C', 'D', 'E', 'F'];

export function MultipleChoiceDrill({ question, onAnswer, active = true }: DrillProps<QuizQuestion>) {
  const [picked, setPicked] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const correctIdx = normalizeCorrectIdx(question);
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
              {question.tag && <span className="meta"><Tag>{question.tag}</Tag></span>}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function normalizeCorrectIdx(q: QuizQuestion): number {
  const c = q.correctAnswer;
  if (typeof c === 'number') return c;
  if (typeof c === 'string') {
    // accept "A".."F" or full text
    const k = c.trim().toUpperCase();
    if (k.length === 1 && KEYS.includes(k)) return KEYS.indexOf(k);
    const idx = (q.options ?? []).findIndex((o) => o.trim() === c.trim());
    return idx >= 0 ? idx : 0;
  }
  return 0;
}
