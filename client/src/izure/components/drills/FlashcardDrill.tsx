import { useState } from 'react';
import { Bracket } from '../ui/Tactical';
import type { Flashcard } from '../../types/learning';
import type { DrillResult } from './types';

/**
 * Flashcard drill: active-recall mode (NOT passive flip).
 *
 * Workflow:
 *   1. Show the question.
 *   2. User THINKS the answer (no input — that's deliberate; typing is too slow
 *      for spaced repetition. The point is mental retrieval).
 *   3. User clicks "REVEAL" to compare.
 *   4. User self-grades: WUSSTE / TEILS / FALSCH.
 *      → score: 1 / 0.5 / 0
 *
 * This is more demanding than the original flip-card (which let the user
 * fool themselves into thinking they knew it).
 */
export function FlashcardDrill({
  card, onAnswer, active = true,
}: {
  card: Flashcard;
  onAnswer: (r: DrillResult) => void;
  active?: boolean;
}) {
  const [revealed, setRevealed] = useState(false);
  const [graded, setGraded] = useState(false);

  function grade(mark: 'right' | 'partial' | 'wrong') {
    if (graded || !active) return;
    setGraded(true);
    const score = mark === 'right' ? 1 : mark === 'partial' ? 0.5 : 0;
    onAnswer({
      correct: mark === 'right',
      score,
      userAnswer: mark,
      feedback: card.answer,
    });
  }

  return (
    <div className="flex col gap-16">
      <div style={{ padding: 24, background: 'var(--bg-2)', border: '1px solid var(--line-bright)', minHeight: 120 }}>
        <div className="label mb-12">
          <Bracket tone="warn">ABRUF</Bracket>
          {card.category && <span style={{ marginLeft: 12 }}>// {card.category}</span>}
        </div>
        <div style={{ fontSize: 16, lineHeight: 1.55, color: 'var(--text)' }}>
          {card.question}
        </div>
      </div>

      {!revealed ? (
        <div className="flex col gap-12">
          <div className="muted" style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            ► Antwort im Kopf formulieren — dann aufdecken
          </div>
          <button className="tbtn primary" onClick={() => setRevealed(true)} disabled={!active}>
            ANTWORT AUFDECKEN
          </button>
        </div>
      ) : (
        <>
          <div style={{ padding: 20, background: 'var(--bg-3)', borderLeft: '2px solid var(--confirm)' }}>
            <div className="label mb-8"><Bracket tone="ok">REFERENZ</Bracket></div>
            <div style={{ fontSize: 14, lineHeight: 1.6 }}>{card.answer}</div>
          </div>

          {!graded && (
            <div className="flex col gap-8">
              <div className="label">SELBSTBEWERTUNG</div>
              <div className="flex gap-8">
                <button className="tbtn" onClick={() => grade('right')} disabled={!active}>
                  WUSSTE ICH (+1)
                </button>
                <button className="tbtn" onClick={() => grade('partial')} disabled={!active}>
                  TEILS (+0.5)
                </button>
                <button className="tbtn ghost" onClick={() => grade('wrong')} disabled={!active}>
                  FALSCH (0)
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
