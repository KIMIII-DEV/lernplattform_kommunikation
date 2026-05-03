/**
 * IZURÉ — Data Adapter
 * Imports from the existing learningData.ts using ESM.
 * learningData.ts is NEVER modified.
 */
import {
  topics as rawTopics,
  flashcards as rawFlashcards,
  quizQuestions as rawQuestions,
  type Topic as RawTopicImport,
  type Flashcard as RawFlashcardImport,
  type QuizQuestion as RawQuestionImport,
} from '../../../lib/learningData';

export type RawTopic     = RawTopicImport;
export type RawFlashcard = RawFlashcardImport;
export type RawQuestion  = RawQuestionImport;

import type { AppProgress, Lernfeld, LernfeldId, LernfeldProgress } from '../types/learning';

const LF_META: Record<LernfeldId, Omit<Lernfeld, 'topics' | 'flashcards' | 'questions'>> = {
  LF1: { id: 'LF1', code: 'LF-01', name: 'Ausbildung im Dialogmarketing mitgestalten',                      sub: 'Foundation / Onboarding',      intel: 'BASIS',    threat: 'low' },
  LF2: { id: 'LF2', code: 'LF-02', name: 'Dienstleistungen analysieren und vergleichen',                    sub: 'Reconnaissance / Branche',     intel: 'BASIS',    threat: 'low' },
  LF3: { id: 'LF3', code: 'LF-03', name: 'Mit Kundinnen und Kunden kommunizieren',                          sub: 'Comms / Psychology',           intel: 'TAKTISCH', threat: 'elevated' },
  LF4: { id: 'LF4', code: 'LF-04', name: 'Gespräche führen, Datenbanken nutzen, Informationen verarbeiten', sub: 'Systems / Telephony / Data',    intel: 'KRITISCH', threat: 'critical' },
  LF5: { id: 'LF5', code: 'LF-05', name: 'Kundinnen und Kunden betreuen und binden',                        sub: 'Retention / Escalation / CRM', intel: 'KRITISCH', threat: 'critical' },
};

function idToLF(id: string): LernfeldId {
  const p = id.slice(0, 3).toLowerCase();
  if (p === 'lf5') return 'LF5';
  if (p === 'lf4') return 'LF4';
  if (p === 'lf3') return 'LF3';
  if (p === 'lf2') return 'LF2';
  if (p === 'lf1') return 'LF1';
  return 'LF4';
}

function build(id: LernfeldId): Lernfeld {
  return {
    ...LF_META[id],
    topics:     rawTopics.filter(t => idToLF(t.id) === id),
    flashcards: rawFlashcards.filter(f => idToLF(f.id) === id),
    questions:  rawQuestions.filter(q => idToLF(q.id) === id),
  };
}

export const ALL_LF_IDS: LernfeldId[] = ['LF1', 'LF2', 'LF3', 'LF4', 'LF5'];
export const LERNFELDER: Lernfeld[]   = ALL_LF_IDS.map(build);
export const ACTIVE_LERNFELDER        = LERNFELDER.filter(
  lf => lf.topics.length + lf.flashcards.length + lf.questions.length > 0,
);

export function getLernfeld(id: LernfeldId) {
  return LERNFELDER.find(lf => lf.id === id);
}

export function diagnostics() {
  return LERNFELDER.map(lf => ({
    id: lf.id, code: lf.code,
    topics: lf.topics.length, flashcards: lf.flashcards.length, questions: lf.questions.length,
  }));
}

export function emptyLfProgress(): LernfeldProgress {
  return {
    theoryRead: [],
    drillStats: { seen: 0, correct: 0, streak: 0, cardScores: {} },
    simRuns: [],
  };
}

export function emptyAppProgress(): AppProgress {
  return {
    modules: {
      LF1: emptyLfProgress(), LF2: emptyLfProgress(), LF3: emptyLfProgress(),
      LF4: emptyLfProgress(), LF5: emptyLfProgress(),
    },
    lastSeen: null,
    streak: 0,
  };
}
