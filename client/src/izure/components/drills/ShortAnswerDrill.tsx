import { useState } from 'react';
import type { QuizQuestion } from '../../types/learning';
import type { DrillProps } from './types';

/**
 * Short-answer drill.
 * Compares user input to `correctAnswer` (string) using a tolerant
 * normalization (case-insensitive, trim, collapse whitespace, strip
 * trailing punctuation). This is conservative: ambiguous matches are
 * shown as "ÜBERPRÜFEN" and the user can self-grade.
 */
export function ShortAnswerDrill({ question, onAnswer, active = true }: DrillProps<QuizQuestion>) {
  const [val, setVal] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [selfMark, setSelfMark] = useState<null | 'right' | 'wrong'>(null);

  const reference = String(question.correctAnswer ?? '');
  const auto = autoMatch(val, reference);

  function submit() {
    if (submitted || !active) return;
    if (auto === 'match') {
      setSubmitted(true);
      onAnswer({ correct: true, score: 1, userAnswer: val, feedback: question.explanation });
    } else {
      // require self-grading for ambiguous
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
      <textarea
        className="tinput"
        rows={3}
        placeholder="// ANTWORT EINGEBEN ..."
        value={val}
        disabled={submitted || !active}
        onChange={(e) => setVal(e.target.value)}
      />
      {!submitted && (
        <button className="tbtn primary" disabled={!val.trim()} onClick={submit}>
          ANTWORT BESTÄTIGEN
        </button>
      )}

      {submitted && selfMark === null && auto !== 'match' && (
        <div className="feedback">
          <div className="label mb-8">REFERENZANTWORT</div>
          <div style={{ marginBottom: 12 }}>{reference}</div>
          <div className="label mb-8">SELBSTBEWERTUNG</div>
          <div className="flex gap-12">
            <button className="tbtn" onClick={() => selfGrade('right')}>RICHTIG</button>
            <button className="tbtn ghost" onClick={() => selfGrade('wrong')}>FALSCH / UNVOLLSTÄNDIG</button>
          </div>
        </div>
      )}
    </div>
  );
}

function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^\w\s§%€]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function autoMatch(input: string, ref: string): 'match' | 'unsure' {
  const a = normalize(input);
  const b = normalize(ref);
  if (!a || !b) return 'unsure';
  if (a === b) return 'match';
  // accept exact substring match if input contains the reference (or vice versa for short refs)
  if (b.length <= 12 && a.includes(b)) return 'match';
  return 'unsure';
}
