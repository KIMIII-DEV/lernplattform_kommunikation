import { useMemo, useState } from 'react';
import { GhostText, GoldLine } from '@/components/izure/primitives';
import {
  ModuleSummary,
  topicsForLernfeld,
  flashcardsForLernfeld,
  quizForLernfeld,
  MODULE_DEEP,
} from '@/lib/modules';
import type { Topic, Flashcard, QuizQuestion } from '@/lib/learningData';

type Tab = 'topics' | 'flashcards' | 'quiz';

export default function LernfeldDetail({
  module: m,
  onBack,
  onLaunchSim,
}: {
  module: ModuleSummary;
  onBack: () => void;
  onLaunchSim: () => void;
}) {
  const [tab, setTab] = useState<Tab>('topics');
  const topics = useMemo(() => topicsForLernfeld(m.lernfeld), [m.lernfeld]);
  const flashcards = useMemo(() => flashcardsForLernfeld(m.lernfeld), [m.lernfeld]);
  const quiz = useMemo(() => quizForLernfeld(m.lernfeld), [m.lernfeld]);
  const hasSim = !!MODULE_DEEP[m.id];

  return (
    <div className="page-root" data-screen-label={`Lernfeld · ${m.lernfeld}`}>
      <section style={{ paddingTop: 140, paddingBottom: 40, position: 'relative' }}>
        <GhostText right="-3vw" top="10vh" size="28vw" style={{ opacity: 0.04, fontStyle: 'italic' }}>
          {m.lernfeld.toLowerCase()}
        </GhostText>
        <div className="shell">
          <button onClick={onBack} className="btn-secondary" style={{ marginBottom: 24, color: 'var(--text-muted)' }}>
            <span className="arrow">←</span> <span>Back to Study</span>
          </button>
          <div className="t-label" style={{ color: 'var(--accent)', marginBottom: 22 }}>
            · {m.code} · {m.intel} · {m.duration}
          </div>
          <h1 className="t-display" style={{ fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: 0.95, marginBottom: 24 }}>
            {m.name.split('—')[0].trim()}
            <br />
            <span className="italic" style={{ color: 'var(--text-secondary)' }}>
              {(m.name.split('—')[1] || m.short).trim()}.
            </span>
          </h1>
          <p className="t-body" style={{ fontSize: 16, maxWidth: 640, marginBottom: 30 }}>
            {m.summary}
          </p>

          <div style={{ display: 'flex', gap: 28, alignItems: 'baseline', marginBottom: 12 }}>
            <Stat label="Topics" value={topics.length} />
            <Stat label="Flashcards" value={flashcards.length} />
            <Stat label="Quiz" value={quiz.length} />
            {hasSim && <Stat label="Simulation" value={'1'} />}
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: 0, marginTop: 30, borderBottom: '1px solid var(--line-subtle)' }}>
            {(['topics', 'flashcards', 'quiz'] as Tab[]).map((t) => (
              <TabButton key={t} label={t} active={tab === t} onClick={() => setTab(t)} count={t === 'topics' ? topics.length : t === 'flashcards' ? flashcards.length : quiz.length} />
            ))}
            {hasSim && (
              <button
                onClick={onLaunchSim}
                style={{
                  marginLeft: 'auto',
                  padding: '14px 22px',
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--accent-bordeaux-light)',
                  fontFamily: 'Cinzel, serif',
                  fontSize: 10,
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                }}
              >
                · Launch simulation →
              </button>
            )}
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: 120 }}>
        <div className="shell">
          {tab === 'topics' && <TopicsView topics={topics} />}
          {tab === 'flashcards' && <FlashcardsView cards={flashcards} />}
          {tab === 'quiz' && <QuizView questions={quiz} />}
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number | string }) {
  return (
    <div>
      <div className="t-num" style={{ fontSize: 24, color: 'var(--accent-light)' }}>{value}</div>
      <div className="t-label" style={{ fontSize: 9, color: 'var(--text-muted)' }}>{label}</div>
    </div>
  );
}

function TabButton({ label, active, onClick, count }: { label: string; active: boolean; onClick: () => void; count: number }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '14px 22px',
        background: 'transparent',
        border: 'none',
        borderBottom: `2px solid ${active ? 'var(--accent)' : 'transparent'}`,
        color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
        fontFamily: 'Cinzel, serif',
        fontSize: 10,
        letterSpacing: '0.28em',
        textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'all 300ms var(--ease)',
      }}
    >
      {label} <span style={{ color: 'var(--text-muted)', marginLeft: 6 }}>{count}</span>
    </button>
  );
}

/* ----- Topics view ----- */
function TopicsView({ topics }: { topics: Topic[] }) {
  const [openId, setOpenId] = useState<string | null>(topics[0]?.id ?? null);
  if (!topics.length) return <EmptyState label="Topics" />;
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '4fr 8fr', gap: 40, marginTop: 48 }}>
      <aside>
        <GoldLine label={`Topics · ${topics.length}`} align="left" />
        <ul style={{ listStyle: 'none', marginTop: 24, maxHeight: '60vh', overflowY: 'auto' }}>
          {topics.map((t) => {
            const active = t.id === openId;
            return (
              <li key={t.id}>
                <button
                  onClick={() => setOpenId(t.id)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '12px 14px',
                    background: active ? 'var(--bg-card)' : 'transparent',
                    border: 'none',
                    borderLeft: `2px solid ${active ? 'var(--accent)' : 'transparent'}`,
                    color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 15,
                    fontStyle: active ? 'italic' : 'normal',
                    cursor: 'pointer',
                    transition: 'all 200ms var(--ease)',
                  }}
                >
                  {t.title}
                </button>
              </li>
            );
          })}
        </ul>
      </aside>
      <article>
        {(() => {
          const t = topics.find((x) => x.id === openId) || topics[0];
          if (!t) return null;
          return (
            <div>
              <div className="t-label" style={{ color: 'var(--accent)', marginBottom: 12 }}>
                Exam relevance · {t.examRelevance}
              </div>
              <h2 className="t-display" style={{ fontSize: 36, lineHeight: 1.1, marginBottom: 14 }}>
                {t.title}
              </h2>
              <p className="t-body" style={{ fontSize: 15, fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: 24 }}>
                {t.description}
              </p>
              <div
                className="t-body"
                style={{ fontSize: 14, lineHeight: 1.7, whiteSpace: 'pre-wrap', marginBottom: 28 }}
              >
                {t.content}
              </div>
              {t.keyPoints?.length > 0 && (
                <>
                  <div className="t-label" style={{ color: 'var(--accent-light)', marginBottom: 12 }}>
                    Key points
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {t.keyPoints.map((kp, i) => (
                      <li
                        key={i}
                        className="t-body"
                        style={{ fontSize: 13, paddingLeft: 18, borderLeft: '1px solid var(--accent-dim)' }}
                      >
                        {kp}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          );
        })()}
      </article>
    </div>
  );
}

/* ----- Flashcards view ----- */
function FlashcardsView({ cards }: { cards: Flashcard[] }) {
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  if (!cards.length) return <EmptyState label="Flashcards" />;
  const card = cards[idx];

  const next = () => {
    setFlipped(false);
    setIdx((idx + 1) % cards.length);
  };
  const prev = () => {
    setFlipped(false);
    setIdx((idx - 1 + cards.length) % cards.length);
  };

  return (
    <div style={{ marginTop: 48, maxWidth: 760, marginLeft: 'auto', marginRight: 'auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
        <div className="t-label" style={{ color: 'var(--accent)' }}>{card.category}</div>
        <div className="t-num" style={{ fontSize: 11, color: 'var(--text-muted)' }}>
          {idx + 1} / {cards.length}
        </div>
      </div>
      <button
        onClick={() => setFlipped(!flipped)}
        style={{
          width: '100%',
          minHeight: 320,
          background: 'var(--bg-card)',
          border: '1px solid var(--line-subtle)',
          padding: '48px 40px',
          textAlign: 'left',
          cursor: 'pointer',
          transition: 'all 300ms var(--ease)',
        }}
      >
        <div className="t-label" style={{ fontSize: 9, color: flipped ? 'var(--accent-light)' : 'var(--accent)', marginBottom: 18 }}>
          {flipped ? '· ANSWER ·' : '· QUESTION ·'}
        </div>
        <p
          className="t-display"
          style={{
            fontSize: flipped ? 22 : 28,
            lineHeight: 1.3,
            fontStyle: flipped ? 'normal' : 'italic',
            color: 'var(--text-primary)',
            whiteSpace: 'pre-wrap',
          }}
        >
          {flipped ? card.answer : card.question}
        </p>
      </button>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 22 }}>
        <button className="btn-secondary" onClick={prev}>
          <span className="arrow">←</span><span>Prev</span>
        </button>
        <button className="btn-secondary" onClick={() => setFlipped(!flipped)}>
          {flipped ? 'Question' : 'Reveal'}
        </button>
        <button className="btn-primary" onClick={next}>
          Next →
        </button>
      </div>
    </div>
  );
}

/* ----- Quiz view ----- */
function QuizView({ questions }: { questions: QuizQuestion[] }) {
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [scoreCount, setScoreCount] = useState(0);
  const [done, setDone] = useState(false);

  if (!questions.length) return <EmptyState label="Quiz" />;
  if (done) {
    return (
      <div style={{ marginTop: 64, textAlign: 'center', maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
        <div className="t-label" style={{ color: 'var(--accent)', marginBottom: 16 }}>· DEBRIEF ·</div>
        <h2 className="t-display italic" style={{ fontStyle: 'italic', fontSize: 56, marginBottom: 20 }}>
          {scoreCount} / {questions.length}
        </h2>
        <p className="t-body" style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 30 }}>
          {scoreCount / questions.length >= 0.8
            ? 'Performance level: high. Mastery confirmed.'
            : scoreCount / questions.length >= 0.5
              ? 'Partial readiness. Retake recommended.'
              : 'Retraining required. The material is waiting.'}
        </p>
        <button
          className="btn-primary"
          onClick={() => {
            setIdx(0); setPicked(null); setRevealed(false); setScoreCount(0); setDone(false);
          }}
        >
          Restart quiz
        </button>
      </div>
    );
  }

  const q = questions[idx];
  const options = q.options ?? [];
  const correctAnswer = Array.isArray(q.correctAnswer) ? q.correctAnswer[0] : q.correctAnswer;

  const reveal = () => {
    if (!picked) return;
    setRevealed(true);
    if (picked === correctAnswer) setScoreCount(scoreCount + 1);
  };
  const advance = () => {
    if (idx < questions.length - 1) {
      setIdx(idx + 1); setPicked(null); setRevealed(false);
    } else {
      setDone(true);
    }
  };

  return (
    <div style={{ marginTop: 48, maxWidth: 800, marginLeft: 'auto', marginRight: 'auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 18 }}>
        <div className="t-label" style={{ color: 'var(--accent)' }}>
          {q.category} · {q.difficulty}
        </div>
        <div className="t-num" style={{ fontSize: 11, color: 'var(--text-muted)' }}>
          Q {idx + 1} / {questions.length} · Score {scoreCount}
        </div>
      </div>

      <h3 className="t-display" style={{ fontSize: 26, lineHeight: 1.25, marginBottom: 30 }}>
        {q.question}
      </h3>

      {q.type === 'open' ? (
        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--line-subtle)',
            padding: '24px 26px',
            marginBottom: 24,
          }}
        >
          <div className="t-label" style={{ fontSize: 9, color: 'var(--accent)', marginBottom: 12 }}>
            · MODEL ANSWER ·
          </div>
          <p className="t-body" style={{ fontSize: 14, fontStyle: 'italic', whiteSpace: 'pre-wrap' }}>
            {correctAnswer}
          </p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
          {options.map((opt, i) => {
            const letter = String.fromCharCode(65 + i);
            const isChosen = picked === opt;
            const isCorrect = revealed && opt === correctAnswer;
            const isWrong = revealed && isChosen && opt !== correctAnswer;
            return (
              <button
                key={i}
                onClick={() => !revealed && setPicked(opt)}
                disabled={revealed}
                style={{
                  textAlign: 'left',
                  background: isCorrect ? 'rgba(176,141,87,0.08)' : isWrong ? 'rgba(90,31,34,0.15)' : isChosen ? 'rgba(176,141,87,0.04)' : 'var(--bg-card)',
                  border: `1px solid ${isCorrect ? 'var(--accent)' : isWrong ? 'var(--accent-bordeaux-light)' : isChosen ? 'var(--accent-dim)' : 'var(--line-subtle)'}`,
                  padding: '16px 22px',
                  cursor: revealed ? 'default' : 'pointer',
                  transition: 'all 200ms var(--ease)',
                  opacity: revealed && !isChosen && !isCorrect ? 0.45 : 1,
                }}
              >
                <span className="t-label" style={{ fontSize: 10, color: 'var(--accent)', marginRight: 14 }}>
                  {letter}
                </span>
                <span className="t-body" style={{ fontSize: 14 }}>{opt}</span>
              </button>
            );
          })}
        </div>
      )}

      {revealed && (
        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--accent-dim)',
            padding: '18px 22px',
            marginBottom: 24,
          }}
        >
          <div className="t-label" style={{ fontSize: 9, color: picked === correctAnswer ? 'var(--accent-light)' : 'var(--accent-bordeaux-light)', marginBottom: 10 }}>
            {picked === correctAnswer ? '· CORRECT ·' : '· FLAG ·'}
          </div>
          <p className="t-body" style={{ fontSize: 13, fontStyle: 'italic' }}>
            {q.explanation}
          </p>
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="t-label" style={{ fontSize: 9, color: 'var(--text-muted)' }}>
          {q.type === 'open' ? 'Open · self-assessed' : 'Multiple choice'}
        </div>
        {q.type === 'open' || revealed ? (
          <button className="btn-primary" onClick={advance}>
            {idx < questions.length - 1 ? 'Next →' : 'Finish'}
          </button>
        ) : (
          <button
            className="btn-primary"
            onClick={reveal}
            disabled={!picked}
            style={{ opacity: picked ? 1 : 0.4 }}
          >
            Reveal answer
          </button>
        )}
      </div>
    </div>
  );
}

function EmptyState({ label }: { label: string }) {
  return (
    <div
      style={{
        padding: '80px 40px',
        background: 'var(--bg-card)',
        border: '1px solid var(--line-subtle)',
        textAlign: 'center',
        marginTop: 48,
      }}
    >
      <div className="t-label" style={{ color: 'var(--accent)', marginBottom: 14 }}>· In residence ·</div>
      <h3 className="t-display italic" style={{ fontStyle: 'italic', fontSize: 28, marginBottom: 12 }}>
        {label} folgen.
      </h3>
      <p className="t-body" style={{ fontSize: 13, maxWidth: 480, margin: '0 auto', color: 'var(--text-secondary)' }}>
        Die Inhalte für dieses Lernfeld werden aus den Quelldokumenten extrahiert und im nächsten Drop ergänzt.
      </p>
    </div>
  );
}
