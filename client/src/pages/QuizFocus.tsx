import { useState } from 'react';
import { Badge, Button, Card, Progress, StatChain } from '@/components/primitives';
import type { QuizQuestion } from '@/lib/learningData';

/* IZURE Quiz-Fokus-View — Masterplan v3, Phase 7 (Blueprint 5.4).
   Vollbild-Overlay (z 150, über der Rail). Antwort-Feedback strikt über
   Füllung: richtig = Platinum (--accent-primary-bright), falsch = Oxblood
   (--accent-critical) — keine dritte Farbe, kein Grün. Die Fortschritts-
   leiste oben färbt sich nur beim Feedback (success/error), sonst steel. */

export default function QuizFocus({
  questions,
  lfLabel,
  onExit,
}: {
  questions: QuizQuestion[];
  lfLabel: string;
  onExit: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [scoreCount, setScoreCount] = useState(0);
  const [done, setDone] = useState(false);

  const q = questions[idx];
  const options = q?.options ?? [];
  const correctAnswer = Array.isArray(q?.correctAnswer) ? q.correctAnswer[0] : q?.correctAnswer;
  const wasCorrect = picked === correctAnswer;

  const reveal = () => {
    if (!picked) return;
    setRevealed(true);
    if (picked === correctAnswer) setScoreCount(scoreCount + 1);
  };
  const advance = () => {
    if (idx < questions.length - 1) {
      setIdx(idx + 1);
      setPicked(null);
      setRevealed(false);
    } else {
      setDone(true);
    }
  };
  const restart = () => {
    setIdx(0);
    setPicked(null);
    setRevealed(false);
    setScoreCount(0);
    setDone(false);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 150,
        background: 'var(--bg-base)',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
      }}
    >
      <Progress
        value={done ? questions.length : idx + (revealed ? 1 : 0)}
        max={questions.length}
        state={revealed && q.type !== 'open' ? (wasCorrect ? 'success' : 'error') : 'default'}
      />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 28px' }}>
        <button
          onClick={onExit}
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--text-tertiary)',
            cursor: 'pointer',
            transition: 'color var(--motion-micro)',
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
          onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-tertiary)')}
        >
          ← Dossier
        </button>
        {!done && (
          <span
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 500,
              fontSize: 'var(--fs-data)',
              fontVariantNumeric: 'tabular-nums',
              color: 'var(--text-secondary)',
            }}
          >
            Frage {idx + 1} / {questions.length}
          </span>
        )}
      </div>

      <div style={{ flex: 1, display: 'flex', alignItems: done ? 'center' : 'flex-start', justifyContent: 'center', padding: '12px 28px 64px' }}>
        {done ? (
          /* Debrief */
          <div style={{ textAlign: 'center', maxWidth: 560 }}>
            <div className="t-label" style={{ color: 'var(--accent-primary)', marginBottom: 20 }}>
              · Debrief · {lfLabel} ·
            </div>
            <div
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: 'var(--fs-hero)',
                lineHeight: 1,
                color: 'var(--accent-primary-bright)',
                fontVariantNumeric: 'tabular-nums',
                marginBottom: 24,
              }}
            >
              {scoreCount}/{questions.length}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
              <StatChain
                items={[
                  { value: `${Math.round((scoreCount / questions.length) * 100)}%`, label: 'Quote' },
                  { value: questions.length - scoreCount, label: 'Offen' },
                ]}
              />
            </div>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
              <Button onClick={restart}>Nochmal</Button>
              <Button onClick={onExit}>Zum Dossier</Button>
            </div>
          </div>
        ) : (
          <div style={{ width: '100%', maxWidth: 760 }}>
            <div style={{ display: 'flex', gap: 10, marginBottom: 20, flexWrap: 'wrap' }}>
              <Badge>{q.category}</Badge>
              <Badge>{q.difficulty}</Badge>
              <Badge>{q.type === 'open' ? 'Offen' : 'Multiple Choice'}</Badge>
            </div>
            <h2
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 600,
                fontSize: 22,
                lineHeight: 1.3,
                color: 'var(--text-primary)',
                marginBottom: 28,
              }}
            >
              {q.question}
            </h2>

            {q.type === 'open' ? (
              <Card variant="default" style={{ marginBottom: 24 }}>
                <div className="t-label" style={{ fontSize: 9, color: 'var(--accent-primary)', marginBottom: 12 }}>
                  · Musterantwort ·
                </div>
                <p className="t-body" style={{ fontSize: 14, whiteSpace: 'pre-wrap' }}>
                  {correctAnswer}
                </p>
              </Card>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 24 }}>
                {options.map((opt, i) => {
                  const letter = String.fromCharCode(65 + i);
                  const isChosen = picked === opt;
                  const isCorrect = revealed && opt === correctAnswer;
                  const isWrong = revealed && isChosen && opt !== correctAnswer;
                  // Feedback über Füllung: Platinum richtig / Oxblood falsch.
                  // Keys nur setzen wenn definiert — background: undefined würde
                  // beim Style-Spread den Card-Default auslöschen.
                  const feedbackStyle: React.CSSProperties = {};
                  if (isCorrect) {
                    feedbackStyle.background = 'var(--accent-primary-bright)';
                    feedbackStyle.color = 'var(--bg-base)';
                  } else if (isWrong) {
                    feedbackStyle.background = 'var(--accent-critical)';
                    feedbackStyle.color = '#F4F4F4';
                  } else if (isChosen) {
                    feedbackStyle.background = 'var(--bg-panel-raised)';
                  }
                  return (
                    <Card
                      key={i}
                      variant="default"
                      role="button"
                      tabIndex={revealed ? -1 : 0}
                      onClick={() => !revealed && setPicked(opt)}
                      onKeyDown={(e) => {
                        if (!revealed && (e.key === 'Enter' || e.key === ' ')) {
                          e.preventDefault();
                          setPicked(opt);
                        }
                      }}
                      style={{
                        padding: '16px 22px',
                        cursor: revealed ? 'default' : 'pointer',
                        opacity: revealed && !isChosen && !isCorrect ? 0.45 : 1,
                        transition: 'background var(--motion-micro), opacity var(--motion-micro)',
                        ...feedbackStyle,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'Space Grotesk, sans-serif',
                          fontWeight: 600,
                          fontSize: 11,
                          letterSpacing: '0.15em',
                          marginRight: 14,
                          opacity: 0.7,
                        }}
                      >
                        {letter}
                      </span>
                      <span style={{ fontSize: 14 }}>{opt}</span>
                    </Card>
                  );
                })}
              </div>
            )}

            {revealed && q.type !== 'open' && (
              <Card variant="default" style={{ marginBottom: 24 }}>
                <div
                  className="t-label"
                  style={{
                    fontSize: 9,
                    color: wasCorrect ? 'var(--accent-primary-bright)' : 'var(--accent-critical)',
                    marginBottom: 10,
                  }}
                >
                  {wasCorrect ? '· Korrekt ·' : '· Falsch ·'}
                </div>
                <p className="t-body" style={{ fontSize: 13 }}>
                  {q.explanation}
                </p>
              </Card>
            )}

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              {q.type === 'open' || revealed ? (
                <Button onClick={advance}>{idx < questions.length - 1 ? 'Weiter' : 'Abschließen'}</Button>
              ) : (
                <Button onClick={reveal} disabled={!picked}>
                  Auflösen
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
