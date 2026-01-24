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
      // Simple check: if the answer contains key words from the correct answer
      const userAnswer = openAnswer.toLowerCase().trim();
      const correctAnswerLower = (question.correctAnswer as string).toLowerCase();
      correct =
        userAnswer.includes(correctAnswerLower) ||
        correctAnswerLower.includes(userAnswer) ||
        userAnswer.length > 10; // Give partial credit for effort
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
      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">
            Frage {questionNumber} von {totalQuestions}
          </span>
          <span className="text-xs text-muted-foreground">
            Schwierigkeit:{' '}
            {question.difficulty === 'easy'
              ? 'Leicht'
              : question.difficulty === 'medium'
                ? 'Mittel'
                : 'Schwer'}
          </span>
        </div>
        <div className="w-full bg-secondary rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <Card className="p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">{question.question}</h3>

        {/* Multiple Choice */}
        {question.type === 'multiple-choice' && (
          <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
            <div className="space-y-3">
              {question.options?.map((option, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={`option-${idx}`} />
                  <Label
                    htmlFor={`option-${idx}`}
                    className="cursor-pointer flex-1 font-normal"
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
            className="min-h-32"
          />
        )}
      </Card>

      {/* Result */}
      {showResult && (
        <Card
          className={`p-6 mb-6 border-2 ${
            isCorrect
              ? 'border-green-500 bg-green-50 dark:bg-green-950'
              : 'border-red-500 bg-red-50 dark:bg-red-950'
          }`}
        >
          <div className="flex gap-3 mb-3">
            {isCorrect ? (
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
            ) : (
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
            )}
            <div>
              <h4 className="font-semibold mb-2">
                {isCorrect ? '✓ Richtig!' : '✗ Leider falsch'}
              </h4>
              <p className="text-sm mb-3">{question.explanation}</p>
              {!isCorrect && (
                <div className="bg-white dark:bg-slate-900 p-3 rounded border border-red-200 dark:border-red-800">
                  <p className="text-xs font-medium text-muted-foreground mb-1">
                    Richtige Antwort:
                  </p>
                  <p className="text-sm font-medium">
                    {Array.isArray(question.correctAnswer)
                      ? question.correctAnswer.join(', ')
                      : question.correctAnswer}
                  </p>
                </div>
              )}
            </div>
          </div>
        </Card>
      )}

      {/* Buttons */}
      <div className="flex gap-3 justify-between">
        {!showResult ? (
          <Button
            onClick={handleSubmit}
            disabled={
              (question.type === 'multiple-choice' && !selectedAnswer) ||
              (question.type === 'open' && !openAnswer.trim())
            }
            className="w-full"
          >
            Antwort prüfen
          </Button>
        ) : (
          <Button onClick={handleNext} className="w-full">
            {questionNumber < totalQuestions ? 'Nächste Frage' : 'Zum Ergebnis'}
          </Button>
        )}
      </div>
    </div>
  );
}
