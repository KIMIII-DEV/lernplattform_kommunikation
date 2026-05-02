import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Flashcard as FlashcardType } from '@/lib/learningData';
import { useLearningProgress } from '@/hooks/useLearningProgress';
import FlashcardComponent from '@/components/Flashcard';
import { RotateCcw, Shuffle } from 'lucide-react';

interface FlashcardsPageProps {
  flashcards: FlashcardType[];
}

export default function FlashcardsPage({ flashcards }: FlashcardsPageProps) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isShuffled, setIsShuffled] = useState(false);
  const { progress, markFlashcardComplete } = useLearningProgress();

  const categories = Array.from(new Set(flashcards.map((card) => card.category)));

  const filteredCards = selectedCategory
    ? flashcards.filter((card) => card.category === selectedCategory)
    : flashcards;

  const displayCards = isShuffled
    ? [...filteredCards].sort(() => Math.random() - 0.5)
    : filteredCards;

  const currentCard = displayCards[currentCardIndex];
  const isCardCompleted = progress.completedFlashcards.includes(currentCard?.id);

  const handleNext = () => {
    if (currentCardIndex < displayCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  const handleComplete = () => {
    markFlashcardComplete(currentCard.id);
    handleNext();
  };

  const handleReset = () => {
    setCurrentCardIndex(0);
    setIsShuffled(false);
  };

  const completedCount = displayCards.filter((card) =>
    progress.completedFlashcards.includes(card.id)
  ).length;

  const nodeLabel = (n: number) => String(n).padStart(2, '0');

  if (!currentCard) {
    return (
      <div className="text-center py-12">
        <p className="text-[#888888] uppercase tracking-widest font-bold">
          ▶ KEINE CARDS VERFÜGBAR ◀
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="adhs-section">
        <h2 className="adhs-section-title">▶ FLASHCARD TRAINING ◀</h2>
        <p className="text-sm text-[#888888]">
          Memory Cards — Klicken zum Umdrehen. Shuffle für randomisierten Retention-Test.
        </p>
      </div>

      {/* Progress */}
      <div className="quiz-card">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-bold uppercase tracking-widest text-[#c8a96a]">
            Retention Progress
          </span>
          <span className="text-lg font-bold text-[#cc0000]">
            {completedCount} / {displayCards.length}
          </span>
        </div>
        <div className="w-full bg-[#0e0e0e] h-3 border border-[#c8a96a]">
          <div
            className="bg-[#c8a96a] h-3 transition-all duration-300"
            style={{ width: `${displayCards.length > 0 ? (completedCount / displayCards.length) * 100 : 0}%` }}
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="quiz-card">
        <h3 className="text-xs font-bold uppercase tracking-widest text-[#cc0000] mb-3">
          ▶ FILTER BY CATEGORY ◀
        </h3>
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => { setSelectedCategory(null); setCurrentCardIndex(0); }}
            className={`text-xs uppercase tracking-widest ${
              selectedCategory === null
                ? 'bg-[#390007] text-[#cc0000] border border-[#cc0000] font-bold'
                : 'bg-[#1a0a0a] text-[#888888] border border-[#390007] hover:text-[#e8e8e8]'
            }`}
          >
            ALL
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => { setSelectedCategory(category); setCurrentCardIndex(0); }}
              className={`text-xs uppercase tracking-widest ${
                selectedCategory === category
                  ? 'bg-[#390007] text-[#cc0000] border border-[#cc0000] font-bold'
                  : 'bg-[#1a0a0a] text-[#888888] border border-[#390007] hover:text-[#e8e8e8]'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Card Display */}
      <div className="flex flex-col items-center gap-6">
        <div className="w-full max-w-2xl">
          <FlashcardComponent
            question={currentCard.question}
            answer={currentCard.answer}
            onComplete={handleComplete}
            cardNumber={currentCardIndex + 1}
            totalCards={displayCards.length}
          />
        </div>

        {/* Node Counter */}
        <div className="text-center">
          <p className="text-sm font-bold text-[#c8a96a] uppercase tracking-widest">
            NODE {nodeLabel(currentCardIndex + 1)} / {nodeLabel(displayCards.length)}
          </p>
          {isCardCompleted && (
            <p className="text-[10px] text-[#c8a96a] uppercase tracking-widest mt-1">✓ CLEARED</p>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex gap-3 justify-center flex-wrap">
        <Button
          onClick={handlePrevious}
          disabled={currentCardIndex === 0}
          className="bg-[#1a0a0a] hover:bg-[#390007] text-[#cc0000] font-bold uppercase tracking-widest border border-[#390007] disabled:opacity-30"
        >
          ◀ PREV
        </Button>
        <Button
          onClick={handleNext}
          disabled={currentCardIndex === displayCards.length - 1}
          className="bg-[#1a0a0a] hover:bg-[#390007] text-[#cc0000] font-bold uppercase tracking-widest border border-[#390007] disabled:opacity-30"
        >
          NEXT ▶
        </Button>
        <Button
          onClick={() => { setIsShuffled(!isShuffled); setCurrentCardIndex(0); }}
          className={`font-bold uppercase tracking-widest ${
            isShuffled
              ? 'bg-[#c8a96a] text-[#0e0e0e] border border-[#c8a96a]'
              : 'bg-[#1a0a0a] text-[#c8a96a] border border-[#c8a96a] hover:bg-[#c8a96a] hover:text-[#0e0e0e]'
          }`}
        >
          <Shuffle className="w-4 h-4 mr-2" />
          SHUFFLE
        </Button>
        <Button
          onClick={handleReset}
          className="bg-[#1a0a0a] hover:bg-[#390007] text-[#888888] font-bold uppercase tracking-widest border border-[#390007]"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          RESET
        </Button>
      </div>

      {/* Protocol */}
      <div className="adhs-section mt-8 border-l-4 border-[#c8a96a]">
        <div className="text-[#c8a96a] font-bold uppercase tracking-widest mb-2">▶ TRAINING PROTOCOL ◀</div>
        <p className="text-sm leading-relaxed text-[#888888]">
          Shuffle-Modus aktivieren um Reihenfolge zu randomisieren. Verhindert sequentielles Auswendiglernen.
          Cards mit Fehlern gezielt wiederholen bis Full Mastery erreicht.
        </p>
      </div>
    </div>
  );
}
