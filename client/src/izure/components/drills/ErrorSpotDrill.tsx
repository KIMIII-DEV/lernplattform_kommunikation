import { useMemo, useState } from 'react';
import type { QuizQuestion } from '../../types/learning';
import type { DrillProps } from './types';

/**
 * Error-spot (Fehler markieren) drill.
 * Source format:
 *   q.question       = "Brutto-Force probiert Wortlisten."   ← Text mit Fehlern
 *   q.correctAnswer  = ["Brutto-Force", "Wortlisten"]        ← Tokens, die markiert werden müssen
 *
 * Tokenisierung: an Whitespace splitten, Satzzeichen trennen.
 */
export function ErrorSpotDrill({ question, onAnswer, active = true }: DrillProps<QuizQuestion>) {
  const text = String(question.question ?? '');
  const targets = (Array.isArray(question.correctAnswer)
    ? (question.correctAnswer as Array<unknown>).map(String)
    : [String(question.correctAnswer ?? '')])
    .map((t) => t.trim())
    .filter(Boolean);

  const tokens = useMemo(() => tokenize(text), [text]);
  const [marked, setMarked] = useState<Set<number>>(new Set());
  const [submitted, setSubmitted] = useState(false);

  // Determine which token indices correspond to the targets (longest match)
  const correctIdx = useMemo(() => {
    const out = new Set<number>();
    for (const target of targets) {
      const tnorm = norm(target);
      // try multi-word match
      const tparts = tnorm.split(/\s+/).filter(Boolean);
      for (let i = 0; i <= tokens.length - tparts.length; i++) {
        const window = tokens.slice(i, i + tparts.length).map((t) => norm(t.value)).join(' ');
        if (window === tparts.join(' ')) {
          for (let k = 0; k < tparts.length; k++) out.add(i + k);
          break;
        }
      }
    }
    return out;
  }, [tokens, targets]);

  function toggle(i: number) {
    if (submitted || !active) return;
    if (tokens[i].kind !== 'word') return;
    setMarked((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  }

  function submit() {
    if (submitted || !active) return;
    const tp = [...marked].filter((i) => correctIdx.has(i)).length;
    const fp = [...marked].filter((i) => !correctIdx.has(i)).length;
    const fn = [...correctIdx].filter((i) => !marked.has(i)).length;
    const denom = (tp + fp + fn) || 1;
    const score = Math.max(0, tp / denom);
    setSubmitted(true);
    onAnswer({
      correct: fp === 0 && fn === 0 && tp > 0,
      score,
      userAnswer: [...marked],
      feedback: question.explanation,
    });
  }

  function classFor(i: number): string {
    if (tokens[i].kind !== 'word') return '';
    if (!submitted) return marked.has(i) ? 'marked' : '';
    const isCorrect = correctIdx.has(i);
    const isMarked = marked.has(i);
    if (isCorrect && isMarked) return 'right';
    if (isCorrect && !isMarked) return 'miss';
    if (!isCorrect && isMarked) return 'bad';
    return '';
  }

  return (
    <div className="flex col gap-12">
      <div className="errspot">
        {tokens.map((tk, i) => {
          if (tk.kind !== 'word') return <span key={i}>{tk.value}</span>;
          return (
            <span key={i} className={`w ${classFor(i)}`} onClick={() => toggle(i)}>
              {tk.value}
            </span>
          );
        })}
      </div>

      {!submitted && (
        <button className="tbtn primary" disabled={marked.size === 0} onClick={submit}>
          MARKIERUNG BESTÄTIGEN ({marked.size})
        </button>
      )}

      {submitted && (
        <div className="feedback">
          <div className="label mb-8">ZIEL-MARKIERUNGEN</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {targets.map((t, i) => <span key={i} className="tag ok">{t}</span>)}
          </div>
        </div>
      )}
    </div>
  );
}

function tokenize(text: string): Array<{ kind: 'word' | 'space'; value: string }> {
  const out: Array<{ kind: 'word' | 'space'; value: string }> = [];
  // Words = letters/digits/§/-, everything else is "space" (kept for layout)
  const re = /([\p{L}\p{N}§%€\-]+)|(\s+)|([^\p{L}\p{N}\s§%€\-]+)/gu;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m[1] !== undefined) out.push({ kind: 'word', value: m[1] });
    else out.push({ kind: 'space', value: m[2] ?? m[3] ?? '' });
  }
  return out;
}

function norm(s: string) {
  return s.toLowerCase().normalize('NFKD').replace(/[^\p{L}\p{N}§€%\s\-]/gu, '').replace(/\s+/g, ' ').trim();
}
