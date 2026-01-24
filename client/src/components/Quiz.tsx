import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { QuizQuestion } from '@/lib/learningData';

interface QuizProps {
  question: QuizQuestion;
  onAnswer: (correct: boolean) => void;
  questionNumber: number;
  totalQuestions: number;
  showFeedback?: boolean;
}

export default function Quiz({
  question,
  onAnswer,
  questionNumber,
  totalQuestions,
  showFeedback = false,
}: QuizProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [openAnswer, setOpenAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleSubmit = () => {
    let correct = false;

    if (question.type === 'multiple-choice') {
      correct = selectedAnswer === question.correctAnswer;
    } else if (question.type === 'open') {
      const userAnswer = openAnswer.toLowerCase().trim();
      const correctAnswerLower = (question.correctAnswer as string).toLowerCase();
      correct =
        userAnswer.includes(correctAnswerLower) ||
        correctAnswerLower.includes(userAnswer) ||
        userAnswer.length > 10;
    } else if (question.type === 'matching') {
      correct = selectedAnswer === question.correctAnswer;
    }

    setIsCorrect(correct);
    setShowResult(true);
    onAnswer(correct);
  };

  const handleNext = () => {
    setSelectedAnswer('');
    setOpenAnswer('');
    setShowResult(false);
    setIsCorrect(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress - ADHS Optimized */}
      <div className="mb-6 adhs-focus">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-bold uppercase tracking-widest text-cyan-400">
            Frage {questionNumber} / {totalQuestions}
          </span>
          <span className="text-xs font-bold text-yellow-400 uppercase">
            {question.difficulty === 'easy'
              ? '● LEICHT'
              : question.difficulty === 'medium'
                ? '● MITTEL'
                : '● SCHWER'}
          </span>
        </div>
        <div className="w-full bg-gray-800 rounded-sm h-3 border border-pink-500">
          <div
            className="bg-gradient-to-r from-pink-500 to-cyan-400 h-3 rounded-sm transition-all duration-300"
            style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card - Hotline Miami Style */}
      <div className="quiz-card mb-6">
        <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wide">
          {question.question}
        </h3>

        {/* Multiple Choice */}
        {question.type === 'multiple-choice' && (
          <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
            <div className="space-y-3">
              {question.options?.map((option, idx) => (
                <div key={idx} className="flex items-center space-x-3 p-3 border border-gray-700 rounded-sm hover:bg-gray-800/50 cursor-pointer">
                  <RadioGroupItem value={option} id={`option-${idx}`} />
                  <Label htmlFor={`option-${idx}`} className="cursor-pointer flex-1 text-gray-200">
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        )}

        {/* Open Answer */}
        {question.type === 'open' && (
          <Textarea
            value={openAnswer}
            onChange={(e) => setOpenAnswer(e.target.value)}
            placeholder="Schreibe deine Antwort hier..."
            className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 rounded-sm min-h-32"
          />
        )}

        {/* Matching */}
        {question.type === 'matching' && (
          <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
            <div className="space-y-3">
              {question.options?.map((option, idx) => (
                <div key={idx} className="flex items-center space-x-3 p-3 border border-gray-700 rounded-sm hover:bg-gray-800/50 cursor-pointer">
                  <RadioGroupItem value={option} id={`match-${idx}`} />
                  <Label htmlFor={`match-${idx}`} className="cursor-pointer flex-1 text-gray-200">
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        )}
      </div>

      {/* Feedback - ONLY if showFeedback is true (at end of quiz) */}
      {showResult && showFeedback && (
        <div className={`mb-6 p-4 rounded-sm border-2 ${
          isCorrect
            ? 'border-cyan-400 bg-cyan-400/10'
            : 'border-pink-500 bg-pink-500/10'
        }`}>
          <div className="flex items-start gap-3">
            {isCorrect ? (
              <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
            ) : (
              <XCircle className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
            )}
            <div>
              <h4 className={`font-bold uppercase tracking-widest mb-2 ${
                isCorrect ? 'text-cyan-400' : 'text-pink-500'
              }`}>
                {isCorrect ? '✓ RICHTIG' : '✗ FALSCH'}
              </h4>
              <p className="text-sm text-gray-300 mb-3">
                {question.explanation}
              </p>
              {!isCorrect && (
                <p className="text-sm text-yellow-400 font-bold">
                  Richtige Antwort: {question.correctAnswer}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Submit Button */}
      {!showResult && (
        <Button
          onClick={handleSubmit}
          disabled={
            (question.type === 'multiple-choice' && !selectedAnswer) ||
            (question.type === 'open' && !openAnswer) ||
            (question.type === 'matching' && !selectedAnswer)
          }
          className="w-full bg-pink-600 hover:bg-pink-500 text-black font-bold uppercase tracking-widest rounded-sm disabled:opacity-50"
        >
          ▶ ANTWORT PRÜFEN ◀
        </Button>
      )}

      {/* Next Button */}
      {showResult && (
        <Button
          onClick={handleNext}
          className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold uppercase tracking-widest rounded-sm"
        >
          ▶ NÄCHSTE FRAGE ◀
        </Button>
      )}
    </div>
  );
}
