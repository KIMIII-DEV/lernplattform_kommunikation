import { useMemo, useState } from 'react';
import type { QuizQuestion } from '../../types/learning';
import type { DrillProps } from './types';

/**
 * Cloze (Lückentext) drill.
 * Source format:
 *   q.cloze = "Der __1__ ist die kleinste Einheit. Eine Sammlung ist ein __2__."
 *   q.correctAnswer = ["Datenfeld", "Datensatz"]
 *
 * Backward-compat: also accepts `{{1}}` style markers.
 */
export function ClozeDrill({ question, onAnswer, active = true }: DrillProps<QuizQuestion>) {
  const template = String(question.cloze ?? question.question ?? '');
  const refs = (Array.isArray(question.correctAnswer)
    ? (question.correctAnswer as Array<unknown>).map(String)
    : [String(question.correctAnswer ?? '')]);

  const segments = useMemo(() => splitCloze(template), [template]);
  const blanks = segments.filter((s) => s.kind === 'blank').length;
  const refList = refs.slice(0, blanks);
  while (refList.length < blanks) refList.push('');

  const [vals, setVals] = useState<string[]>(() => Array(blanks).fill(''));
  const [submitted, setSubmitted] = useState(false);

  function submit() {
    if (submitted || !active) return;
    const checks = refList.map((r, i) => isMatch(vals[i] ?? '', r));
    const tp = checks.filter(Boolean).length;
    const score = blanks ? tp / blanks : 0;
    setSubmitted(true);
    onAnswer({
      correct: tp === blanks,
      score,
      userAnswer: vals,
      feedback: question.explanation,
    });
  }

  let blankIdx = -1;
  return (
    <div className="flex col gap-12">
      <div className="cloze-line">
        {segments.map((s, i) => {
          if (s.kind === 'text') return <span key={i}>{s.value}</span>;
          blankIdx++;
          const idx = blankIdx;
          const cls = !submitted ? '' : isMatch(vals[idx] ?? '', refList[idx]) ? 'correct' : 'wrong';
          return (
            <input
              key={i}
              className={`cloze-blank ${cls}`}
              value={vals[idx]}
              disabled={submitted || !active}
              onChange={(e) => setVals((v) => v.map((x, k) => (k === idx ? e.target.value : x)))}
              placeholder="…"
              size={Math.max(8, refList[idx].length + 2)}
            />
          );
        })}
      </div>

      {!submitted && (
        <button
          className="tbtn primary"
          disabled={vals.some((v) => !v.trim())}
          onClick={submit}
        >
          ANTWORT BESTÄTIGEN
        </button>
      )}

      {submitted && (
        <div className="feedback">
          <div className="label mb-8">REFERENZANTWORTEN</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '6px 16px' }}>
            {refList.map((r, i) => (
              <span key={i} style={{ display: 'contents' }}>
                <span className="label">LÜCKE {i + 1}</span>
                <span className={isMatch(vals[i] ?? '', r) ? 'ok' : 'warn'}>{r}</span>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function splitCloze(tpl: string): Array<{ kind: 'text' | 'blank'; value: string }> {
  const parts: Array<{ kind: 'text' | 'blank'; value: string }> = [];
  // matches __1__ or __2__ or {{1}}/{{2}}
  const re = /(__\d+__|\{\{\d+\}\})/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(tpl)) !== null) {
    if (m.index > last) parts.push({ kind: 'text', value: tpl.slice(last, m.index) });
    parts.push({ kind: 'blank', value: m[0] });
    last = m.index + m[0].length;
  }
  if (last < tpl.length) parts.push({ kind: 'text', value: tpl.slice(last) });
  return parts;
}

function isMatch(a: string, b: string) {
  const norm = (s: string) =>
    s.toLowerCase().normalize('NFKD').replace(/[^\w§€]/g, '').trim();
  return !!a && norm(a) === norm(b);
}
