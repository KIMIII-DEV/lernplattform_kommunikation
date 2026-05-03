import type { ReactNode } from 'react';

/** Outcome of a single drill answer. */
export interface DrillResult {
  correct: boolean;
  /** Score 0..1 for partial credit (cloze/multi-select/matching). */
  score: number;
  /** What the user submitted (for review/debrief). */
  userAnswer: unknown;
  /** Explanation / feedback text. */
  feedback: ReactNode;
}

/** Common props every drill component receives. */
export interface DrillProps<TQ> {
  question: TQ;
  /** Called once when user submits — only ever called once per mount. */
  onAnswer: (r: DrillResult) => void;
  /** When false, the drill becomes read-only (review mode). */
  active?: boolean;
}
