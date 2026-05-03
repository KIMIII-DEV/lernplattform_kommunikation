/**
 * IZURÉ — Learning Domain Types
 * Aligned with the REAL learningData.ts schema (verified from source).
 */

export type LernfeldId = 'LF1' | 'LF2' | 'LF3' | 'LF4' | 'LF5';

// ── Verbatim schema from real learningData.ts ─────────────────────────────────
export interface Topic {
  id: string;
  title: string;
  description: string;
  content: string;
  keyPoints: string[];
  examRelevance: 'high' | 'medium' | 'low';
}

export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  type: 'multiple-choice' | 'open' | 'matching';
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}

// ── Lernfeld container (built by adapter) ────────────────────────────────────
export interface Lernfeld {
  id: LernfeldId;
  code: string;
  name: string;
  sub: string;
  intel: string;
  threat: 'low' | 'elevated' | 'critical';
  topics: Topic[];
  flashcards: Flashcard[];
  questions: QuizQuestion[];
}

// ── Progress / State ─────────────────────────────────────────────────────────
export interface LernfeldProgress {
  theoryRead: string[];
  drillStats: {
    seen: number;
    correct: number;
    streak: number;
    cardScores: Record<string, { right: number; wrong: number }>;
  };
  simRuns: SimRun[];
}

export interface SimRun {
  ts: number;
  lernfeld: LernfeldId;
  total: number;
  correct: number;
  scorePct: number;
  picks: Array<{ qid: string; correct: boolean; userAnswer: unknown }>;
  durationS: number;
}

export interface AppProgress {
  modules: Record<LernfeldId, LernfeldProgress>;
  lastSeen: number | null;
  streak: number;
}
