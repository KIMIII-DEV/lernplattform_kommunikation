import { useState, useEffect } from 'react';

interface ProgressData {
  completedTopics: string[];
  completedFlashcards: string[];
  quizResults: {
    questionId: string;
    answered: boolean;
    correct: boolean;
  }[];
  totalScore: number;
}

const STORAGE_KEY = 'learning_progress';

export function useLearningProgress() {
  const [progress, setProgress] = useState<ProgressData>({
    completedTopics: [],
    completedFlashcards: [],
    quizResults: [],
    totalScore: 0,
  });

  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setProgress(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load progress:', e);
      }
    }
  }, []);

  // Save progress to localStorage
  const saveProgress = (newProgress: ProgressData) => {
    setProgress(newProgress);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
  };

  const markTopicComplete = (topicId: string) => {
    const updated = {
      ...progress,
      completedTopics: Array.from(new Set([...progress.completedTopics, topicId])),
    };
    saveProgress(updated);
  };

  const markFlashcardComplete = (cardId: string) => {
    const updated = {
      ...progress,
      completedFlashcards: Array.from(new Set([...progress.completedFlashcards, cardId])),
    };
    saveProgress(updated);
  };

  const recordQuizAnswer = (questionId: string, correct: boolean) => {
    const updated = {
      ...progress,
      quizResults: [
        ...progress.quizResults,
        { questionId, answered: true, correct },
      ],
      totalScore: progress.totalScore + (correct ? 1 : 0),
    };
    saveProgress(updated);
  };

  const resetProgress = () => {
    const empty: ProgressData = {
      completedTopics: [],
      completedFlashcards: [],
      quizResults: [],
      totalScore: 0,
    };
    saveProgress(empty);
  };

  const getProgressPercentage = (total: number, completed: number) => {
    return total > 0 ? Math.round((completed / total) * 100) : 0;
  };

  return {
    progress,
    markTopicComplete,
    markFlashcardComplete,
    recordQuizAnswer,
    resetProgress,
    getProgressPercentage,
  };
}
