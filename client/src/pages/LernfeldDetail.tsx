import { useMemo, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Button,
  Card,
  DonutRing,
  Stage,
  StatChain,
} from '@/components/primitives';
import {
  ModuleSummary,
  topicsForLernfeld,
  flashcardsForLernfeld,
  quizForLernfeld,
  MODULE_DEEP,
} from '@/lib/modules';
import { useProgress } from '@/lib/useProgress';
import FlashcardFocus from './FlashcardFocus';
import QuizFocus from './QuizFocus';

/* IZURE Lernfeld-Dossier-View — Masterplan v3, Phase 6 (Blueprint 5.2).
   Accordion über die Topics als Kapitel-Ebene (nummerierte Marker = echte
   Fachbuch-Reihenfolge), Flashcard-Deck- und Quiz-Card auf LF-Ebene.

   Gemeldete Wireframe-Abweichung (STOP-Regel, Datenmodell unangetastet):
   Blueprint 5.2 zeigt Deck/Quiz-Cards PRO Kapitel — das Datenmodell ordnet
   Flashcards/Quizfragen aber nur dem Lernfeld zu (keine Kapitel-Zuordnung).
   Deshalb LF-Ebene. Kein Glass auf dieser View (Blueprint 6.1, Stufe 3). */

type FocusView = 'dossier' | 'flashcards' | 'quiz';

export default function LernfeldDetail({
  module: m,
  onBack,
  onLaunchSim,
}: {
  module: ModuleSummary;
  onBack: () => void;
  onLaunchSim: () => void;
}) {
  const [focus, setFocus] = useState<FocusView>('dossier');
  const { progress } = useProgress();
  const topics = useMemo(() => topicsForLernfeld(m.lernfeld), [m.lernfeld]);
  const flashcards = useMemo(() => flashcardsForLernfeld(m.lernfeld), [m.lernfeld]);
  const quiz = useMemo(() => quizForLernfeld(m.lernfeld), [m.lernfeld]);
  const hasSim = !!MODULE_DEEP[m.id];
  const lfNumber = m.lernfeld.replace('LF', '0');

  if (focus === 'flashcards') {
    return <FlashcardFocus cards={flashcards} lfLabel={m.code} onExit={() => setFocus('dossier')} />;
  }
  if (focus === 'quiz') {
    return <QuizFocus questions={quiz} lfLabel={m.code} onExit={() => setFocus('dossier')} />;
  }

  return (
    <div className="page-root" data-screen-label={`Lernfeld · ${m.lernfeld}`} style={{ padding: '48px 48px 96px 0' }}>
      <Stage style={{ padding: '56px 48px', maxWidth: 1240, margin: '0 auto' }}>
        {/* Dossier-Kopf */}
        <button
          onClick={onBack}
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--text-tertiary)',
            cursor: 'pointer',
            marginBottom: 28,
            transition: 'color var(--motion-micro)',
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
          onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-tertiary)')}
        >
          ← Study
        </button>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 32, marginBottom: 20 }}>
          <div>
            <div
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 600,
                fontSize: 'var(--fs-label)',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--accent-primary)',
                marginBottom: 18,
              }}
            >
              Dossier {lfNumber} — {m.name.split('—')[0].trim()}
            </div>
            <h1
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(32px, 4vw, 56px)',
                lineHeight: 1.02,
                color: 'var(--text-primary)',
                marginBottom: 16,
                maxWidth: 640,
              }}
            >
              {(m.name.split('—')[1] || m.short).trim()}
            </h1>
            <p className="t-body" style={{ fontSize: 15, maxWidth: 560, marginBottom: 22 }}>
              {m.summary}
            </p>
            <StatChain
              items={[
                { value: topics.length, label: 'Topics' },
                { value: flashcards.length, label: 'Karten' },
                { value: quiz.length, label: 'Fragen' },
              ]}
            />
          </div>
          {/* Kopfzeilen-Ring (Blueprint 6.2) — ehrlich: nur Abschluss-Status,
              feinere Granularität fehlt im Datenmodell (gemeldet) */}
          <DonutRing value={progress.modules[m.id]?.completed ? 100 : 0} label={m.code} size={96} />
        </div>

        <div style={{ display: 'flex', gap: 12, alignItems: 'center', margin: '28px 0 40px', flexWrap: 'wrap' }}>
          <Badge>{m.intel}</Badge>
          <Badge>{m.duration}</Badge>
          {hasSim && <Button onClick={onLaunchSim}>Launch Simulation</Button>}
        </div>

        {/* Deck- und Quiz-Card — LF-Ebene (Abweichung vom Wireframe gemeldet) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 4, marginBottom: 44 }}>
          <Card variant="default" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
            <div>
              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 'var(--fs-h2)', marginBottom: 6 }}>
                Flashcard-Deck
              </h3>
              <div className="t-label" style={{ fontSize: 9, color: 'var(--text-tertiary)' }}>
                {flashcards.length} Karten
              </div>
            </div>
            <Button onClick={() => setFocus('flashcards')} disabled={!flashcards.length}>
              Öffnen
            </Button>
          </Card>
          <Card variant="default" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
            <div>
              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 'var(--fs-h2)', marginBottom: 6 }}>
                Quiz
              </h3>
              <div className="t-label" style={{ fontSize: 9, color: 'var(--text-tertiary)' }}>
                {quiz.length} Fragen
              </div>
            </div>
            <Button onClick={() => setFocus('quiz')} disabled={!quiz.length}>
              Starten
            </Button>
          </Card>
        </div>

        {/* Kapitel-Accordion (Blueprint 5.2) — ein Item pro Ebene offen */}
        <div
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 600,
            fontSize: 'var(--fs-label)',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--text-secondary)',
            marginBottom: 12,
          }}
        >
          Kapitel · {topics.length}
        </div>
        {topics.length ? (
          <Accordion defaultValue={topics[0]?.id}>
            {topics.map((t, i) => (
              <AccordionItem key={t.id} value={t.id}>
                <AccordionTrigger meta={t.examRelevance}>
                  <span style={{ color: 'var(--text-tertiary)', marginRight: 12, fontVariantNumeric: 'tabular-nums' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {t.title}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="t-body" style={{ fontSize: 14, fontStyle: 'italic', marginBottom: 18 }}>
                    {t.description}
                  </p>
                  <div className="t-body" style={{ fontSize: 14, lineHeight: 1.7, whiteSpace: 'pre-wrap', marginBottom: 22 }}>
                    {t.content}
                  </div>
                  {t.keyPoints?.length > 0 && (
                    <>
                      <div className="t-label" style={{ fontSize: 9, color: 'var(--accent-primary)', marginBottom: 10 }}>
                        Key Points
                      </div>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {t.keyPoints.map((kp, j) => (
                          <li
                            key={j}
                            className="t-body"
                            style={{ fontSize: 13, paddingLeft: 16, borderLeft: '1px solid var(--border-hairline)' }}
                          >
                            {kp}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <Card variant="default" style={{ textAlign: 'center', padding: '56px 32px' }}>
            <p className="t-body" style={{ fontSize: 14 }}>
              Die Inhalte für dieses Lernfeld folgen im nächsten Drop.
            </p>
          </Card>
        )}
      </Stage>
    </div>
  );
}
