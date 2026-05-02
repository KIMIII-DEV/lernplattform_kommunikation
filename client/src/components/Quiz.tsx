import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, XCircle } from 'lucide-react';
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
  const [autoAdvanceTimer, setAutoAdvanceTimer] = useState<NodeJS.Timeout | null>(null);

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

    if (questionNumber < totalQuestions) {
      const timer = setTimeout(() => {
        handleNext();
      }, 2000);
      setAutoAdvanceTimer(timer);
    }
  };

  const handleNext = () => {
    if (autoAdvanceTimer) {
      clearTimeout(autoAdvanceTimer);
      setAutoAdvanceTimer(null);
    }
    setSelectedAnswer('');
    setOpenAnswer('');
    setShowResult(false);
    setIsCorrect(null);
  };

  useEffect(() => {
    return () => {
      if (autoAdvanceTimer) clearTimeout(autoAdvanceTimer);
    };
  }, [autoAdvanceTimer]);

  const nodeLabel = (n: number) => String(n).padStart(2, '0');

  const difficultyLabel =
    question.difficulty === 'easy'
      ? '● BASIC'
      : question.difficulty === 'medium'
        ? '● STANDARD'
        : '● CRITICAL';

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-6 adhs-focus">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-bold uppercase tracking-widest text-[#cc0000]">
            NODE {nodeLabel(questionNumber)} / {nodeLabel(totalQuestions)}
          </span>
          <span className={`text-xs font-bold uppercase tracking-widest ${
            question.difficulty === 'hard' ? 'text-[#cc0000]' : 'text-[#c8a96a]'
          }`}>
            {difficultyLabel}
          </span>
        </div>
        <div className="w-full bg-[#0e0e0e] h-3 border border-[#390007]">
          <div
            className="bg-gradient-to-r from-[#390007] to-[#cc0000] h-3 transition-all duration-300"
            style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="quiz-card mb-6">
        <h3 className="text-lg font-bold mb-6 text-[#e8e8e8] uppercase tracking-wide">
          {question.question}
        </h3>

        {/* Multiple Choice */}
        {question.type === 'multiple-choice' && (
          <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
            <div className="space-y-3">
              {question.options?.map((option, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-3 p-3 border border-[#390007] hover:bg-[#2a1010]/50 cursor-pointer"
                >
                  <RadioGroupItem value={option} id={`option-${idx}`} />
                  <Label htmlFor={`option-${idx}`} className="cursor-pointer flex-1 text-[#e8e8e8]">
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
            placeholder=">_ Antwort eingeben..."
            className="bg-[#0e0e0e] border-[#390007] text-[#e8e8e8] placeholder-[#888888] min-h-32"
          />
        )}

        {/* Matching */}
        {question.type === 'matching' && (
          <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
            <div className="space-y-3">
              {question.options?.map((option, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-3 p-3 border border-[#390007] hover:bg-[#2a1010]/50 cursor-pointer"
                >
                  <RadioGroupItem value={option} id={`match-${idx}`} />
                  <Label htmlFor={`match-${idx}`} className="cursor-pointer flex-1 text-[#e8e8e8]">
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        )}
      </div>

      {/* Feedback — showFeedback mode (end of quiz) */}
      {showResult && showFeedback && (
        <div className={`mb-6 p-4 border-2 ${
          isCorrect
            ? 'border-[#c8a96a] bg-[#c8a96a]/8'
            : 'border-[#cc0000] bg-[#cc0000]/8'
        }`}>
          <div className="flex items-start gap-3">
            {isCorrect ? (
              <CheckCircle className="w-6 h-6 text-[#c8a96a] flex-shrink-0 mt-1" />
            ) : (
              <XCircle className="w-6 h-6 text-[#cc0000] flex-shrink-0 mt-1" />
            )}
            <div>
              <h4 className={`font-bold uppercase tracking-widest mb-2 ${
                isCorrect ? 'text-[#c8a96a]' : 'text-[#cc0000]'
              }`}>
                {isCorrect ? '✓ CONFIRMED' : '✗ INCORRECT'}
              </h4>
              <p className="text-sm text-[#888888] mb-3">{question.explanation}</p>
              {!isCorrect && (
                <p className="text-sm text-[#c8a96a] font-bold">
                  ▶ Correct: {question.correctAnswer}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Quick Feedback during simulation */}
      {showResult && !showFeedback && (
        <div className={`mb-6 p-3 border-2 text-center ${
          isCorrect
            ? 'border-[#c8a96a] bg-[#c8a96a]/8'
            : 'border-[#cc0000] bg-[#cc0000]/8'
        }`}>
          <p className={`font-bold uppercase tracking-widest ${
            isCorrect ? 'text-[#c8a96a]' : 'text-[#cc0000]'
          }`}>
            {isCorrect ? '✓ CONFIRMED' : '✗ INCORRECT'}
          </p>
          <p className="text-xs text-[#888888] mt-1">Next node loading...</p>
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
          className="w-full bg-[#390007] hover:bg-[#cc0000] text-[#e8e8e8] font-bold uppercase tracking-widest border border-[#cc0000] disabled:opacity-30"
        >
          &gt;_ SUBMIT RESPONSE
        </Button>
      )}

      {/* Final node — advance to debriefing */}
      {showResult && questionNumber === totalQuestions && (
        <Button
          onClick={handleNext}
          className="w-full bg-[#1a0a0a] hover:bg-[#390007] text-[#c8a96a] font-bold uppercase tracking-widest border border-[#c8a96a]"
        >
          ▶ OPEN DEBRIEFING ◀
        </Button>
      )}
    </div>
  );
}
