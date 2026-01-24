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
}

export default function Quiz({
  question,
  onAnswer,
  questionNumber,
  totalQuestions,
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
          <span className="text-sm font-bold uppercase tracking-widest">
            Frage {questionNumber} / {totalQuestions}
          </span>
          <span className="text-xs font-bold text-cyan-400 uppercase">
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
                <div key={idx} className="flex items-center space-x-3 p-3 border border-gray-700 rounded-sm hover:border-pink-500 transition-colors cursor-pointer">
                  <RadioGroupItem value={option} id={`option-${idx}`} />
                  <Label
                    htmlFor={`option-${idx}`}
                    className="cursor-pointer flex-1 font-normal text-white"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        )}

        {/* Open Question */}
        {question.type === 'open' && (
          <Textarea
            placeholder="Deine Antwort hier..."
            value={openAnswer}
            onChange={(e) => setOpenAnswer(e.target.value)}
            className="min-h-32 bg-black/50 border-2 border-gray-700 text-white placeholder-gray-600 focus:border-cyan-400"
          />
        )}
      </div>

      {/* Result - Hotline Miami Style */}
      {showResult && (
        <div className={`quiz-card ${isCorrect ? 'correct' : 'incorrect'}`}>
          <div className="flex gap-4 mb-4">
            {isCorrect ? (
              <CheckCircle className="w-8 h-8 text-cyan-400 flex-shrink-0" />
            ) : (
              <XCircle className="w-8 h-8 text-pink-500 flex-shrink-0" />
            )}
            <div className="flex-1">
              <h4 className={`font-bold mb-3 text-lg ${isCorrect ? 'text-cyan-400' : 'text-pink-500'} uppercase tracking-widest`}>
                {isCorrect ? '▶ RICHTIG ◀' : '▶ FALSCH ◀'}
              </h4>
              <p className="text-sm mb-4 leading-relaxed text-gray-200">{question.explanation}</p>
              {!isCorrect && (
                <div className="bg-black/50 p-4 rounded-sm border-l-4 border-cyan-400 mb-3">
                  <p className="text-xs font-bold text-cyan-400 mb-2 uppercase tracking-widest">
                    Korrekte Antwort:
                  </p>
                  <p className="text-sm font-semibold text-white">
                    {Array.isArray(question.correctAnswer)
                      ? question.correctAnswer.join(', ')
                      : question.correctAnswer}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Buttons - Hotline Miami Style */}
      <div className="flex gap-3 justify-between">
        {!showResult ? (
          <Button
            onClick={handleSubmit}
            disabled={
              (question.type === 'multiple-choice' && !selectedAnswer) ||
              (question.type === 'open' && !openAnswer.trim())
            }
            className="w-full bg-pink-600 hover:bg-pink-500 text-black font-bold uppercase tracking-widest border-2 border-pink-500 rounded-sm"
          >
            ▶ ANTWORT PRÜFEN ◀
          </Button>
        ) : (
          <Button 
            onClick={handleNext} 
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold uppercase tracking-widest border-2 border-cyan-500 rounded-sm"
          >
            {questionNumber < totalQuestions ? '▶ NÄCHSTE ◀' : '▶ ERGEBNIS ◀'}
          </Button>
        )}
      </div>
    </div>
  );
}
