import { useMemo, useState } from 'react';
import type { QuizQuestion } from '../../types/learning';
import type { DrillProps } from './types';

/**
 * Ordering (Reihenfolge ordnen) drill.
 * Source format:
 *   q.options        = ["Phase A", "Phase B", "Phase C", ...]   (display order, will be shuffled)
 *   q.correctAnswer  = ["Phase B", "Phase A", "Phase C", ...]   (correct order)
 *
 * UI: up/down buttons per item — keyboard-friendly, works without drag-and-drop.
 */
export function OrderingDrill({ question, onAnswer, active = true }: DrillProps<QuizQuestion>) {
  const correct = (Array.isArray(question.correctAnswer)
    ? (question.correctAnswer as Array<unknown>).map(String)
    : []);

  // Start order: shuffled version of correct answer, computed once
  const initial = useMemo(() => {
    const arr = [...correct];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // ensure shuffled is not accidentally already correct
    if (arr.length > 1 && arr.every((v, i) => v === correct[i])) {
      [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    }
    return arr;
  }, [question.id]);

  const [items, setItems] = useState<string[]>(initial);
  const [submitted, setSubmitted] = useState(false);

  function move(i: number, dir: -1 | 1) {
    if (submitted || !active) return;
    const j = i + dir;
    if (j < 0 || j >= items.length) return;
    setItems((arr) => {
      const next = [...arr];
      [next[i], next[j]] = [next[j], next[i]];
      return next;
    });
  }

  function submit() {
    if (submitted || !active) return;
    let tp = 0;
    for (let i = 0; i < items.length; i++) if (items[i] === correct[i]) tp++;
    const score = items.length ? tp / items.length : 0;
    setSubmitted(true);
    onAnswer({
      correct: tp === items.length,
      score,
      userAnswer: items,
      feedback: question.explanation,
    });
  }

  return (
    <div className="flex col gap-12">
      <div className="order-list">
        {items.map((it, i) => {
          const cls = !submitted ? '' : it === correct[i] ? 'correct' : 'wrong';
          return (
            <div key={`${it}-${i}`} className={`order-item ${cls}`}>
              <span className="pos">{String(i + 1).padStart(2, '0')}</span>
              <span style={{ fontSize: 13 }}>{it}</span>
              <span className="ctrl">
                <button onClick={() => move(i, -1)} disabled={submitted || !active || i === 0} title="Up">▲</button>
                <button onClick={() => move(i, 1)} disabled={submitted || !active || i === items.length - 1} title="Down">▼</button>
              </span>
            </div>
          );
        })}
      </div>

      {!submitted && (
        <button className="tbtn primary" onClick={submit}>
          REIHENFOLGE BESTÄTIGEN
        </button>
      )}

      {submitted && (
        <div className="feedback">
          <div className="label mb-8">KORREKTE REIHENFOLGE</div>
          <ol style={{ paddingLeft: 20, fontSize: 12, lineHeight: 1.7 }}>
            {correct.map((s) => <li key={s} className="ok">{s}</li>)}
          </ol>
        </div>
      )}
    </div>
  );
}
