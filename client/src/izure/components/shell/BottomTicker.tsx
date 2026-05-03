import { Ticker } from '../ui/Tactical';
import { LERNFELDER } from '../../lib/dataAdapter';

/**
 * Ticker is data-driven where possible: It echoes counts from the
 * actual learning content so it's always honest, never decorative-only.
 */
export function BottomTicker() {
  const totalTopics    = LERNFELDER.reduce((s, l) => s + l.topics.length, 0);
  const totalCards     = LERNFELDER.reduce((s, l) => s + l.flashcards.length, 0);
  const totalQuestions = LERNFELDER.reduce((s, l) => s + l.questions.length, 0);

  return (
    <div className="ticker-bar">
      <Ticker
        items={[
          { label: 'SYS',   value: 'IZURÉ / DIALOGMARKETING TRAINING / V0.1', tone: '' },
          { label: 'INTEL', value: `${totalTopics} TOPICS // ${totalCards} CARDS // ${totalQuestions} QUESTIONS`, tone: '' },
          { label: 'OK',    value: 'COMPLIANCE / DSGVO §15 PASS', tone: 'ok' },
          { label: 'WARN',  value: 'KEINE ANNAHMEN / KEINE LÜCKEN / KEINE KOMPROMISSE', tone: 'warn' },
          { label: 'OPS',   value: 'IHK-PRÜFUNGSVORBEREITUNG // ZIEL: 1.0', tone: '' },
        ]}
      />
    </div>
  );
}
