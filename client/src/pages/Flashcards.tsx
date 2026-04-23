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
        <p className="text-gray-400 uppercase tracking-widest font-bold">
          ▶ KEINE KARTEN VERFÜGBAR ◀
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="adhs-section">
        <h2 className="adhs-section-title">▶ FLASHCARDS ◀</h2>
        <p className="text-sm text-gray-300">
          Trainiere mit interaktiven Lernkarten. Klicke zum Umdrehen.
        </p>
      </div>

      {/* Progress */}
      <div className="quiz-card">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-bold uppercase tracking-widest text-cyan-400">
            Fortschritt
          </span>
          <span className="text-lg font-bold text-pink-500">
            {completedCount} / {displayCards.length}
          </span>
        </div>
        <div className="w-full bg-gray-800 rounded-sm h-3 border border-yellow-400">
          <div
            className="bg-gradient-to-r from-yellow-400 to-pink-500 h-3 rounded-sm transition-all duration-300"
            style={{ width: `${displayCards.length > 0 ? (completedCount / displayCards.length) * 100 : 0}%` }}
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="quiz-card">
        <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">
          ▶ KATEGORIEN ◀
        </h3>
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => {
              setSelectedCategory(null);
              setCurrentCardIndex(0);
            }}
            className={`text-xs uppercase tracking-widest rounded-sm ${
              selectedCategory === null
                ? 'bg-cyan-500 hover:bg-cyan-400 text-black font-bold'
                : 'bg-gray-800 hover:bg-gray-700 text-cyan-400 border border-gray-600'
            }`}
          >
            Alle
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentCardIndex(0);
              }}
              className={`text-xs uppercase tracking-widest rounded-sm ${
                selectedCategory === category
                  ? 'bg-pink-600 hover:bg-pink-500 text-black font-bold'
                  : 'bg-gray-800 hover:bg-gray-700 text-pink-400 border border-gray-600'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Current Card */}
      <div className="flex flex-col items-center gap-6">
        <div className="w-full max-w-2xl">
          <Flashcard
            question={currentCard.question}
            answer={currentCard.answer}
            onComplete={handleComplete}
            cardNumber={currentCardIndex + 1}
            totalCards={displayCards.length}
          />
        </div>

        {/* Card Counter */}
        <div className="text-center">
          <p className="text-sm font-bold text-cyan-400 uppercase tracking-widest">
            Karte {currentCardIndex + 1} von {displayCards.length}
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-3 justify-center flex-wrap">
        <Button
          onClick={handlePrevious}
          disabled={currentCardIndex === 0}
          className="bg-gray-800 hover:bg-gray-700 text-cyan-400 font-bold uppercase tracking-widest rounded-sm disabled:opacity-50"
        >
          ▶ ZURÜCK ◀
        </Button>
        <Button
          onClick={handleNext}
          disabled={currentCardIndex === displayCards.length - 1}
          className="bg-gray-800 hover:bg-gray-700 text-pink-500 font-bold uppercase tracking-widest rounded-sm disabled:opacity-50"
        >
          ▶ WEITER ◀
        </Button>
        <Button
          onClick={() => setIsShuffled(!isShuffled)}
          className={`font-bold uppercase tracking-widest rounded-sm ${
            isShuffled
              ? 'bg-yellow-400 hover:bg-yellow-300 text-black'
              : 'bg-gray-800 hover:bg-gray-700 text-yellow-400'
          }`}
        >
          <Shuffle className="w-4 h-4 mr-2" />
          SHUFFLE
        </Button>
        <Button
          onClick={handleReset}
          className="bg-gray-800 hover:bg-gray-700 text-purple-400 font-bold uppercase tracking-widest rounded-sm"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          RESET
        </Button>
      </div>

      {/* Study Tip */}
      <div className="adhs-section mt-8 border-l-4 border-cyan-400">
        <div className="text-cyan-400 font-bold uppercase tracking-widest mb-2">▶ LERNSTRATEGIE ◀</div>
        <p className="text-sm leading-relaxed text-gray-300">
          Nutzen Sie den Shuffle-Modus, um die Reihenfolge der Fragen zu variieren. Dies verhindert ein rein auswendiges Lernen der Abfolge und festigt das tatsächliche Fachwissen. Wiederholen Sie Karten mit Fehlern gezielt.
        </p>
      </div>
    </div>
  );
}
