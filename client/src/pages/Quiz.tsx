import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { quizQuestions } from '@/lib/learningData';
import { useLearningProgress } from '@/hooks/useLearningProgress';
import QuizComponent from '@/components/Quiz';
import { RotateCcw, Trophy, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

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
      {/* Header */}
      <div className="adhs-section">
        <h2 className="adhs-section-title">▶ KLAUSUR-QUIZ ◀</h2>
        <p className="text-sm text-gray-300">
          Teste dein Wissen mit {quizQuestions.length} prüfungsrelevanten Fragen.
        </p>
      </div>

      {/* Start Screen */}
      {quizState === 'start' && (
        <div className="quiz-card p-8 text-center space-y-6">
          <div className="w-16 h-16 bg-pink-500/20 border-2 border-pink-500 rounded-sm flex items-center justify-center mx-auto">
            <Trophy className="w-8 h-8 text-pink-500" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2 text-pink-500 uppercase tracking-widest">
              ▶ BEREIT FÜR DAS QUIZ? ◀
            </h3>
            <p className="text-gray-300 mb-6">
              Du wirst {quizQuestions.length} Fragen beantworten. 
              Alle Ergebnisse werden am Ende angezeigt.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-6 text-center">
              <div className="bg-gray-800 border-2 border-cyan-400 p-4 rounded-sm">
                <p className="text-2xl font-bold text-cyan-400">
                  {quizQuestions.length}
                </p>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Fragen</p>
              </div>
              <div className="bg-gray-800 border-2 border-yellow-400 p-4 rounded-sm">
                <p className="text-2xl font-bold text-yellow-400">~15 min</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Dauer</p>
              </div>
              <div className="bg-gray-800 border-2 border-purple-400 p-4 rounded-sm">
                <p className="text-2xl font-bold text-purple-400">70%</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Bestanden</p>
              </div>
            </div>
          </div>
          <Button 
            onClick={handleStartQuiz} 
            className="w-full bg-pink-600 hover:bg-pink-500 text-black font-bold uppercase tracking-widest rounded-sm text-lg py-6"
          >
            ▶ QUIZ STARTEN ◀
          </Button>

          {/* Narrator Tip */}
          <div className="narrator don-juan mt-6">
            <div className="narrator-name text-yellow-400">▶ DON JUAN ◀</div>
            <p className="text-sm leading-relaxed">
              "Vertrau deinem Instinkt. Du wirst alle Ergebnisse am Ende sehen – konzentriere dich jetzt auf jede Frage."
            </p>
          </div>
        </div>
      )}

      {/* Quiz Screen */}
      {quizState === 'quiz' && currentQuestion && (
        <div>
          <QuizComponent
            question={currentQuestion}
            onAnswer={handleAnswer}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={quizQuestions.length}
            showFeedback={false}
          />
        </div>
      )}

      {/* Results Screen */}
      {quizState === 'results' && (
        <div className="space-y-6">
          {/* Score Card */}
          <div className={`quiz-card p-8 text-center border-2 ${
            isPassed ? 'border-cyan-400 bg-cyan-400/10' : 'border-pink-500 bg-pink-500/10'
          }`}>
            <div className="flex justify-center mb-4">
              {isPassed ? (
                <CheckCircle className="w-16 h-16 text-cyan-400" />
              ) : (
                <AlertCircle className="w-16 h-16 text-pink-500" />
              )}
            </div>
            <h2 className={`text-3xl font-bold mb-2 uppercase tracking-widest ${
              isPassed ? 'text-cyan-400' : 'text-pink-500'
            }`}>
              {isPassed ? '✓ BESTANDEN!' : '✗ NICHT BESTANDEN'}
            </h2>
            <p className="text-gray-300 mb-6">
              {isPassed 
                ? 'Großartig! Du bist bereit für die Klausur!' 
                : 'Noch nicht ganz – wiederhole die schwachen Punkte!'}
            </p>

            {/* Score Display */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-800 border-2 border-cyan-400 p-6 rounded-sm">
                <p className="text-4xl font-bold text-cyan-400">{percentage}%</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">Gesamt</p>
              </div>
              <div className="bg-gray-800 border-2 border-green-400 p-6 rounded-sm">
                <p className="text-4xl font-bold text-green-400">{correctAnswers}</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">Richtig</p>
              </div>
              <div className="bg-gray-800 border-2 border-red-400 p-6 rounded-sm">
                <p className="text-4xl font-bold text-red-400">{quizQuestions.length - correctAnswers}</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">Falsch</p>
              </div>
            </div>
          </div>

          {/* Detailed Results */}
          <div className="adhs-section">
            <h3 className="adhs-section-title">▶ DETAILLIERTE ERGEBNISSE ◀</h3>
            <div className="space-y-2">
              {quizAnswers.map((answer, idx) => {
                const question = quizQuestions.find(q => q.id === answer.questionId);
                return (
                  <div 
                    key={idx}
                    className={`p-4 rounded-sm border-l-4 ${
                      answer.correct
                        ? 'border-cyan-400 bg-cyan-400/10'
                        : 'border-pink-500 bg-pink-500/10'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {answer.correct ? (
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                      ) : (
                        <XCircle className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                      )}
                      <div className="flex-1">
                        <p className="text-sm font-bold text-white mb-1">
                          Frage {idx + 1}: {question?.question}
                        </p>
                        <p className="text-xs text-gray-300 mb-2">
                          {question?.explanation}
                        </p>
                        {!answer.correct && (
                          <p className="text-xs text-yellow-400 font-bold">
                            Richtige Antwort: {question?.correctAnswer}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Narrator Messages */}
          <div className="grid md:grid-cols-2 gap-4">
            {isPassed ? (
              <>
                <div className="narrator richard">
                  <div className="narrator-name text-pink-500">▶ RICHARD ◀</div>
                  <p className="text-sm leading-relaxed">
                    "Hervorragend! Du beherrschst das Thema. Geh jetzt in die Klausur und zeig, was du kannst!"
                  </p>
                </div>
                <div className="narrator rasmus">
                  <div className="narrator-name text-cyan-400">▶ RASMUS ◀</div>
                  <p className="text-sm leading-relaxed">
                    "Deine Logik und Struktur sind perfekt. Du bist vorbereitet."
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="narrator richard">
                  <div className="narrator-name text-pink-500">▶ RICHARD ◀</div>
                  <p className="text-sm leading-relaxed">
                    "Nicht aufgeben! Wiederhole die Themen, bei denen du Fehler gemacht hast."
                  </p>
                </div>
                <div className="narrator don-juan">
                  <div className="narrator-name text-yellow-400">▶ DON JUAN ◀</div>
                  <p className="text-sm leading-relaxed">
                    "Du bist näher dran, als du denkst. Vertrau deinem Bauchgefühl und lerne weiter."
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              onClick={handleRestartQuiz}
              className="flex-1 bg-pink-600 hover:bg-pink-500 text-black font-bold uppercase tracking-widest rounded-sm"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              ▶ QUIZ WIEDERHOLEN ◀
            </Button>
            <Button
              onClick={() => setQuizState('start')}
              className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-black font-bold uppercase tracking-widest rounded-sm"
            >
              ▶ ZURÜCK ZUM START ◀
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
