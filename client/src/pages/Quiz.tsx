import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { QuizQuestion } from '@/lib/learningData';
import { useLearningProgress } from '@/hooks/useLearningProgress';
import QuizComponent from '@/components/Quiz';
import { RotateCcw, Trophy, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

type QuizState = 'start' | 'quiz' | 'results';

interface QuizPageProps {
  quizQuestions: QuizQuestion[];
}

export default function QuizPage({ quizQuestions }: QuizPageProps) {
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

    if (correct) setCorrectAnswers(correctAnswers + 1);
    recordQuizAnswer(currentQuestion.id, correct);

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

  const percentage = quizQuestions.length > 0
    ? Math.round((correctAnswers / quizQuestions.length) * 100)
    : 0;

  const isPassed = percentage >= 70;

  const masteryResult =
    percentage >= 90
      ? 'FULL MASTERY'
      : percentage >= 70
        ? 'SYSTEM CLEARED'
        : percentage >= 50
          ? 'PARTIAL READINESS'
          : 'RETRAINING REQUIRED';

  const nodeLabel = (n: number) => String(n).padStart(2, '0');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="adhs-section">
        <h2 className="adhs-section-title">▶ ASSESSMENT SIMULATION ◀</h2>
        <p className="text-sm text-[#888888]">
          {quizQuestions.length} kritische Assessment Nodes — Performance Level wird gemessen.
        </p>
      </div>

      {/* Start Screen */}
      {quizState === 'start' && (
        <div className="quiz-card p-8 text-center space-y-6">
          <div className="w-16 h-16 bg-[#390007] border-2 border-[#cc0000] flex items-center justify-center mx-auto">
            <Trophy className="w-8 h-8 text-[#cc0000]" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2 text-[#cc0000] uppercase tracking-widest">
              ▶ SIMULATION READY ◀
            </h3>
            <p className="text-[#888888] mb-6 text-sm">
              {quizQuestions.length} Assessment Nodes — alle Ergebnisse im Debriefing.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-6 text-center">
              <div className="bg-[#0e0e0e] border-2 border-[#390007] p-4">
                <p className="text-2xl font-bold text-[#cc0000]">{quizQuestions.length}</p>
                <p className="text-[10px] text-[#888888] uppercase tracking-widest">Nodes</p>
              </div>
              <div className="bg-[#0e0e0e] border-2 border-[#c8a96a] p-4">
                <p className="text-2xl font-bold text-[#c8a96a]">~{Math.ceil(quizQuestions.length * 0.15)} min</p>
                <p className="text-[10px] text-[#888888] uppercase tracking-widest">Runtime</p>
              </div>
              <div className="bg-[#0e0e0e] border-2 border-[#390007] p-4">
                <p className="text-2xl font-bold text-[#cc0000]">70%</p>
                <p className="text-[10px] text-[#888888] uppercase tracking-widest">Threshold</p>
              </div>
            </div>
          </div>
          <Button
            onClick={handleStartQuiz}
            className="w-full bg-[#390007] hover:bg-[#cc0000] text-[#e8e8e8] font-bold uppercase tracking-widest border border-[#cc0000] text-lg py-6"
          >
            &gt;_ INITIATE SIMULATION
          </Button>

          <div className="adhs-section mt-6 border-l-4 border-[#c8a96a]">
            <div className="text-[#c8a96a] font-bold uppercase tracking-widest mb-2">▶ INTEL ◀</div>
            <p className="text-sm leading-relaxed text-[#888888]">
              Jeden Node einzeln durchdenken. Detailliertes Debriefing mit Erklärungen nach Abschluss der Simulation.
            </p>
          </div>
        </div>
      )}

      {/* Quiz Screen */}
      {quizState === 'quiz' && currentQuestion && (
        <QuizComponent
          question={currentQuestion}
          onAnswer={handleAnswer}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={quizQuestions.length}
          showFeedback={false}
        />
      )}

      {/* Results Screen — DEBRIEFING */}
      {quizState === 'results' && (
        <div className="space-y-6">
          {/* Score Card */}
          <div className={`quiz-card p-8 text-center border-2 ${
            isPassed ? 'border-[#c8a96a] bg-[#c8a96a]/5' : 'border-[#cc0000] bg-[#cc0000]/5'
          }`}>
            <div className="flex justify-center mb-4">
              {isPassed ? (
                <CheckCircle className="w-16 h-16 text-[#c8a96a]" />
              ) : (
                <AlertCircle className="w-16 h-16 text-[#cc0000]" />
              )}
            </div>
            <h2 className={`text-3xl font-bold mb-2 uppercase tracking-widest ${
              isPassed ? 'text-[#c8a96a]' : 'text-[#cc0000]'
            }`}>
              {masteryResult}
            </h2>
            <p className="text-[#888888] mb-6 text-sm">
              {isPassed
                ? 'Performance Level erreicht. Debriefing zeigt offene Wissenslücken.'
                : 'Threshold nicht erreicht. Schwache Nodes identifizieren und wiederholen.'}
            </p>

            {/* Score Display */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-[#0e0e0e] border-2 border-[#390007] p-6">
                <p className="text-4xl font-bold text-[#cc0000]">{percentage}%</p>
                <p className="text-[10px] text-[#888888] uppercase tracking-widest mt-2">Score</p>
              </div>
              <div className="bg-[#0e0e0e] border-2 border-[#c8a96a] p-6">
                <p className="text-4xl font-bold text-[#c8a96a]">{correctAnswers}</p>
                <p className="text-[10px] text-[#888888] uppercase tracking-widest mt-2">Cleared</p>
              </div>
              <div className="bg-[#0e0e0e] border-2 border-[#390007] p-6">
                <p className="text-4xl font-bold text-[#cc0000]">{quizQuestions.length - correctAnswers}</p>
                <p className="text-[10px] text-[#888888] uppercase tracking-widest mt-2">Failed</p>
              </div>
            </div>
          </div>

          {/* DEBRIEFING */}
          <div className="adhs-section">
            <h3 className="adhs-section-title">▶ DEBRIEFING ◀</h3>
            <div className="space-y-2">
              {quizAnswers.map((answer, idx) => {
                const question = quizQuestions.find((q) => q.id === answer.questionId);
                return (
                  <div
                    key={idx}
                    className={`p-4 border-l-4 ${
                      answer.correct
                        ? 'border-[#c8a96a] bg-[#c8a96a]/5'
                        : 'border-[#cc0000] bg-[#cc0000]/5'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {answer.correct ? (
                        <CheckCircle className="w-5 h-5 text-[#c8a96a] flex-shrink-0 mt-1" />
                      ) : (
                        <XCircle className="w-5 h-5 text-[#cc0000] flex-shrink-0 mt-1" />
                      )}
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-[#888888] mb-1 uppercase tracking-widest">
                          NODE {nodeLabel(idx + 1)}
                        </p>
                        <p className="text-sm font-bold text-[#e8e8e8] mb-1">
                          {question?.question}
                        </p>
                        <p className="text-xs text-[#888888] mb-2">
                          {question?.explanation}
                        </p>
                        {!answer.correct && (
                          <p className="text-xs text-[#c8a96a] font-bold">
                            ▶ Correct: {question?.correctAnswer}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Evaluation */}
          <div className="adhs-section border-l-4 border-[#cc0000]">
            <h3 className="adhs-section-title">▶ EVALUATION ◀</h3>
            <p className="text-sm leading-relaxed text-[#888888]">
              {isPassed
                ? 'Performance Level erreicht. Debriefing nutzen um auch die verbleibenden Wissenslücken zu schließen.'
                : 'Threshold nicht erreicht. Entsprechende Module im Training wiederholen. Debriefing-Erklärungen zur gezielten Nacharbeit nutzen.'}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              onClick={handleRestartQuiz}
              className="flex-1 bg-[#390007] hover:bg-[#cc0000] text-[#e8e8e8] font-bold uppercase tracking-widest border border-[#cc0000]"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              &gt;_ RE-RUN SIMULATION
            </Button>
            <Button
              onClick={() => setQuizState('start')}
              className="flex-1 bg-[#1a0a0a] hover:bg-[#390007] text-[#c8a96a] font-bold uppercase tracking-widest border border-[#c8a96a]"
            >
              ▶ BACK TO START ◀
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
