import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

interface FlashcardProps {
  question: string;
  answer: string;
  onComplete?: () => void;
  cardNumber?: number;
  totalCards?: number;
}

export default function Flashcard({
  question,
  answer,
  onComplete,
  cardNumber = 1,
  totalCards = 1,
}: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Flashcard Container */}
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="flashcard cursor-pointer min-h-64 flex flex-col items-center justify-center p-8 text-center"
      >
        <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
          {isFlipped ? '▶ ANTWORT ◀' : '▶ FRAGE ◀'}
        </div>
        
        <div className="text-lg font-bold text-white mb-6">
          {isFlipped ? answer : question}
        </div>

        <div className="text-xs text-gray-400 uppercase tracking-widest mt-auto">
          Klicke zum Umdrehen
        </div>
      </div>

      {/* Completion Button */}
      {onComplete && (
        <div className="mt-6 flex justify-center">
          <Button
            onClick={onComplete}
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold uppercase tracking-widest rounded-sm"
          >
            ▶ ERLEDIGT ◀
          </Button>
        </div>
      )}
    </div>
  );
}
