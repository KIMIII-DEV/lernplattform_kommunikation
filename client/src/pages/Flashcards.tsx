import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { flashcards } from '@/lib/learningData';
import { useLearningProgress } from '@/hooks/useLearningProgress';
import Flashcard from '@/components/Flashcard';
import { RotateCcw, Shuffle } from 'lucide-react';

export default function FlashcardsPage() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isShuffled, setIsShuffled] = useState(false);
  const { progress, markFlashcardComplete } = useLearningProgress();

  // Get unique categories
  const categories = Array.from(new Set(flashcards.map((card) => card.category)));

  // Filter cards by category
  const filteredCards = selectedCategory
    ? flashcards.filter((card) => card.category === selectedCategory)
    : flashcards;

  // Shuffle if needed
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

  if (!currentCard) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Keine Karten verfügbar.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">🃏 Flashcards</h2>
        <p className="text-muted-foreground">
          Lerne mit interaktiven Kartensets. Klick auf eine Karte, um die Antwort
          zu sehen.
        </p>
      </div>

      {/* Category Filter */}
      <Card className="p-4">
        <p className="text-sm font-medium mb-3">Kategorie wählen:</p>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === null ? 'default' : 'outline'}
            size="sm"
            onClick={() => {
              setSelectedCategory(null);
              setCurrentCardIndex(0);
            }}
          >
            Alle ({flashcards.length})
          </Button>
          {categories.map((category) => {
            const count = flashcards.filter((c) => c.category === category).length;
            return (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentCardIndex(0);
                }}
              >
                {category} ({count})
              </Button>
            );
          })}
        </div>
      </Card>

      {/* Progress */}
      <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">Fortschritt</span>
          <span className="text-sm font-bold">
            {completedCount} / {displayCards.length}
          </span>
        </div>
        <div className="w-full bg-blue-200 dark:bg-blue-900 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{
              width: `${
                displayCards.length > 0
                  ? (completedCount / displayCards.length) * 100
                  : 0
              }%`,
            }}
          />
        </div>
      </div>

      {/* Flashcard */}
      <Flashcard
        question={currentCard.question}
        answer={currentCard.answer}
        onComplete={handleComplete}
        cardNumber={currentCardIndex + 1}
        totalCards={displayCards.length}
      />

      {/* Navigation */}
      <div className="flex gap-3 justify-between">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentCardIndex === 0}
        >
          ← Zurück
        </Button>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setIsShuffled(!isShuffled);
              setCurrentCardIndex(0);
            }}
            className="gap-2"
          >
            <Shuffle className="w-4 h-4" />
            {isShuffled ? 'Sortiert' : 'Gemischt'}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleReset}
            className="gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Zurücksetzen
          </Button>
        </div>

        <Button
          onClick={handleNext}
          disabled={currentCardIndex === displayCards.length - 1}
        >
          Weiter →
        </Button>
      </div>

      {/* Motivation */}
      {isCardCompleted && (
        <Card className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800 p-4 text-center">
          <p className="text-sm font-medium text-green-700 dark:text-green-200">
            ✓ Du hast diese Karte schon gelernt!
          </p>
        </Card>
      )}
    </div>
  );
}
