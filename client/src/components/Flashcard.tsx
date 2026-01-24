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
      {/* Progress indicator */}
      <div className="mb-4 text-sm text-muted-foreground text-center">
        Karte {cardNumber} von {totalCards}
      </div>

      {/* Flashcard */}
      <div
        className="h-64 cursor-pointer perspective"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <Card
          className={`h-full w-full flex items-center justify-center p-8 transition-all duration-300 transform ${
            isFlipped ? 'bg-accent' : 'bg-card'
          } hover:shadow-lg`}
        >
          <div className="text-center">
            <div className="text-xs font-semibold text-muted-foreground mb-4 uppercase tracking-wide">
              {isFlipped ? '✓ Antwort' : '? Frage'}
            </div>
            <p className="text-lg font-medium leading-relaxed">
              {isFlipped ? answer : question}
            </p>
            <div className="mt-6 text-xs text-muted-foreground">
              Klick zum Umdrehen
            </div>
          </div>
        </Card>
      </div>

      {/* Controls */}
      <div className="flex gap-3 mt-6 justify-center">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsFlipped(false)}
          className="gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          Zurücksetzen
        </Button>
        <Button
          variant="default"
          size="sm"
          onClick={onComplete}
          className="gap-2"
        >
          Verstanden
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
