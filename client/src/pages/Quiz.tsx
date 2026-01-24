import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { quizQuestions } from '@/lib/learningData';
import { useLearningProgress } from '@/hooks/useLearningProgress';
import QuizComponent from '@/components/Quiz';
import { RotateCcw, Trophy } from 'lucide-react';

type QuizState = 'start' | 'quiz' | 'results';

export default function QuizPage() {
  const [quizState, setQuizState] = useState<QuizState>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<
    { questionId: string; correct: boolean }[]
  >([]);
  const { recordQuizAnswer } = useLearningProgress();

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleStartQuiz = () => {
    setQuizState('quiz');
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setQuizAnswers([]);
  };

  const handleAnswer = (correct: boolean) => {
    const newAnswers = [
      ...quizAnswers,
      { questionId: currentQuestion.id, correct },
    ];
    setQuizAnswers(newAnswers);

    if (correct) {
      setCorrectAnswers(correctAnswers + 1);
    }

    recordQuizAnswer(currentQuestion.id, correct);

    // Move to next question or finish
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizState('results');
    }
  };

  const handleRestartQuiz = () => {
    setQuizState('start');
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setQuizAnswers([]);
  };

  const percentage = Math.round((correctAnswers / quizQuestions.length) * 100);
  const isPassed = percentage >= 70;

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">📝 Klausur-Quiz</h2>
        <p className="text-muted-foreground">
          Teste dein Wissen mit {quizQuestions.length} prüfungsrelevanten Fragen.
        </p>
      </div>

      {/* Start Screen */}
      {quizState === 'start' && (
        <Card className="p-8 text-center space-y-6">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto">
            <Trophy className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Bereit für das Quiz?</h3>
            <p className="text-muted-foreground mb-6">
              Du wirst {quizQuestions.length} Fragen beantworten. Jede Frage hat
              eine Erklärung, damit du lernst.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-6 text-center">
              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">
                  {quizQuestions.length}
                </p>
                <p className="text-xs text-muted-foreground">Fragen</p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                <p className="text-2xl font-bold text-green-600">~10 min</p>
                <p className="text-xs text-muted-foreground">Dauer</p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                <p className="text-2xl font-bold text-purple-600">70%</p>
                <p className="text-xs text-muted-foreground">Bestanden</p>
              </div>
            </div>
          </div>
          <Button onClick={handleStartQuiz} size="lg" className="w-full">
            Quiz starten
          </Button>
        </Card>
      )}

      {/* Quiz Screen */}
      {quizState === 'quiz' && (
        <QuizComponent
          question={currentQuestion}
          onAnswer={handleAnswer}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={quizQuestions.length}
        />
      )}

      {/* Results Screen */}
      {quizState === 'results' && (
        <div className="space-y-6">
          {/* Score Card */}
          <Card
            className={`p-8 text-center border-2 ${
              isPassed
                ? 'border-green-500 bg-green-50 dark:bg-green-950'
                : 'border-orange-500 bg-orange-50 dark:bg-orange-950'
            }`}
          >
            <div className="mb-4">
              <p className="text-6xl font-bold mb-2">
                {percentage}
                <span className="text-3xl">%</span>
              </p>
              <p className="text-xl font-semibold mb-2">
                {correctAnswers} von {quizQuestions.length} richtig
              </p>
              <p
                className={`text-lg font-medium ${
                  isPassed
                    ? 'text-green-700 dark:text-green-200'
                    : 'text-orange-700 dark:text-orange-200'
                }`}
              >
                {isPassed ? '🎉 Bestanden!' : '💪 Noch nicht ganz...'}
              </p>
            </div>
          </Card>

          {/* Feedback */}
          <Card className="p-6 space-y-4">
            <h3 className="font-semibold text-lg">Dein Ergebnis:</h3>
            {isPassed ? (
              <div className="space-y-3">
                <p className="text-green-700 dark:text-green-200">
                  ✓ Großartig! Du hast die Klausur bestanden!
                </p>
                <p className="text-sm text-muted-foreground">
                  Du bist gut vorbereitet. Wiederhole die Themen, bei denen du
                  unsicher warst, und du wirst eine sehr gute Note bekommen.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-orange-700 dark:text-orange-200">
                  Noch nicht ganz – aber du machst Fortschritte!
                </p>
                <p className="text-sm text-muted-foreground">
                  Gehe zurück zu den Themen, die dir Schwierigkeiten bereitet
                  haben, und wiederhole die Flashcards. Du schaffst das!
                </p>
              </div>
            )}
          </Card>

          {/* Stats */}
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Statistik:</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Richtige Antworten</span>
                <span className="font-bold text-green-600">
                  {correctAnswers}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Falsche Antworten</span>
                <span className="font-bold text-red-600">
                  {quizQuestions.length - correctAnswers}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Erfolgsquote</span>
                <span className="font-bold text-blue-600">{percentage}%</span>
              </div>
            </div>
          </Card>

          {/* Actions */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={handleRestartQuiz}
              className="flex-1 gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Nochmal versuchen
            </Button>
            <Button className="flex-1">Zur Übersicht</Button>
          </div>
        </div>
      )}
    </div>
  );
}
