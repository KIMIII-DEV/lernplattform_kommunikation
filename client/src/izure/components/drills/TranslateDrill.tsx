import { useState } from 'react';
import type { QuizQuestion } from '../../types/learning';
import type { DrillProps } from './types';

/**
 * Translate (Fachsprache-Übersetzung) drill.
 *
 * Two source formats supported:
 *   1) Term → Long form:
 *      q.question      = "POP3"
 *      q.correctAnswer = "Post Office Protocol Version 3"
 *
 *   2) Long form → Term:
 *      q.question      = "Welches Akronym beschreibt: 'Verteilung von Anrufen an freie Mitarbeiter'?"
 *      q.correctAnswer = "ACD"
 *
 * Behavior is identical: tolerant text comparison + optional self-grading.
 */
export function TranslateDrill({ question, onAnswer, active = true }: DrillProps<QuizQuestion>) {
  const ref = String(question.correctAnswer ?? '');
  const [val, setVal] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [selfMark, setSelfMark] = useState<null | 'right' | 'wrong'>(null);

  function submit() {
    if (submitted || !active) return;
    if (autoMatch(val, ref)) {
      setSubmitted(true);
      onAnswer({ correct: true, score: 1, userAnswer: val, feedback: question.explanation });
    } else {
      setSubmitted(true);
    }
  }

  function selfGrade(mark: 'right' | 'wrong') {
    setSelfMark(mark);
    onAnswer({
      correct: mark === 'right',
      score: mark === 'right' ? 1 : 0,
      userAnswer: val,
      feedback: question.explanation,
    });
  }

  return (
    <div className="flex col gap-12">
      <input
        className="tinput"
        placeholder="// ÜBERSETZUNG ..."
        value={val}
        disabled={submitted || !active}
        onChange={(e) => setVal(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && val.trim() && submit()}
      />

      {!submitted && (
        <button className="tbtn primary" disabled={!val.trim()} onClick={submit}>
          BESTÄTIGEN
        </button>
      )}

      {submitted && selfMark === null && !autoMatch(val, ref) && (
        <div className="feedback">
          <div className="label mb-8">REFERENZ</div>
          <div style={{ marginBottom: 12 }}>{ref}</div>
          <div className="label mb-8">SELBSTBEWERTUNG</div>
          <div className="flex gap-12">
            <button className="tbtn" onClick={() => selfGrade('right')}>RICHTIG</button>
            <button className="tbtn ghost" onClick={() => selfGrade('wrong')}>FALSCH</button>
          </div>
        </div>
      )}
    </div>
  );
}

function autoMatch(input: string, ref: string): boolean {
  const norm = (s: string) =>
    s.toLowerCase().normalize('NFKD').replace(/[^\p{L}\p{N}§€]/gu, '').trim();
  const a = norm(input);
  const b = norm(ref);
  return !!a && !!b && a === b;
}
