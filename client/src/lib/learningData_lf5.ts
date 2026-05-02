// IZURE — Lernfeld 5 data slice
// Re-exports the LF5 subset from the combined learningData module.

import { topics, flashcards, quizQuestions } from './learningData';
export type { Topic, Flashcard, QuizQuestion } from './learningData';

export const lf5Topics = topics.filter((t) => t.id.startsWith('lf5'));
export const lf5Flashcards = flashcards.filter((f) => f.id.startsWith('lf5'));
export const lf5QuizQuestions = quizQuestions.filter((q) => q.id.startsWith('lf5'));
