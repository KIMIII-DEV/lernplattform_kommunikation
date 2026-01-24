import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Lightbulb, Zap, BarChart3, Home as HomeIcon } from 'lucide-react';
import { useLearningProgress } from '@/hooks/useLearningProgress';
import { topics, flashcards, quizQuestions } from '@/lib/learningData';
import TopicsPage from './Topics';
import FlashcardsPage from './Flashcards';
import QuizPage from './Quiz';
import DashboardPage from './Dashboard';

export default function Home() {
  const [currentTab, setCurrentTab] = useState('dashboard');
  const { progress, getProgressPercentage } = useLearningProgress();

  const topicsProgress = getProgressPercentage(
    topics.length,
    progress.completedTopics.length
  );
  const flashcardsProgress = getProgressPercentage(
    flashcards.length,
    progress.completedFlashcards.length
  );
  const quizProgress = getProgressPercentage(
    quizQuestions.length,
    progress.quizResults.length
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header - Hotline Miami Style */}
      <header className="sticky top-0 z-50 bg-black border-b-2 border-pink-500 shadow-lg">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-cyan-400 rounded-sm flex items-center justify-center border-2 border-pink-500">
                <BookOpen className="w-6 h-6 text-black font-bold" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-pink-500 uppercase tracking-widest">
                  KOMMUNIKATION
                </h1>
                <p className="text-xs text-cyan-400 uppercase tracking-widest">▶ Klausur-Vorbereitung ◀</p>
              </div>
            </div>
            <div className="text-right border-l-2 border-cyan-400 pl-4">
              <p className="text-lg font-bold text-cyan-400 uppercase tracking-widest">
                {progress.totalScore} PTS
              </p>
              <p className="text-xs text-pink-500 uppercase tracking-widest">
                {progress.completedTopics.length} / {topics.length} THEMEN
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - Hotline Miami Dark Background */}
      <main className="container py-8">
        <Tabs
          value={currentTab}
          onValueChange={setCurrentTab}
          className="w-full"
        >
          {/* Tab Navigation - Hotline Miami Style */}
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-gray-900 border-2 border-pink-500 rounded-sm">
            <TabsTrigger 
              value="dashboard" 
              className="gap-2 data-[state=active]:bg-pink-600 data-[state=active]:text-black text-cyan-400 uppercase font-bold tracking-widest rounded-sm"
            >
              <HomeIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Übersicht</span>
            </TabsTrigger>
            <TabsTrigger 
              value="topics" 
              className="gap-2 data-[state=active]:bg-cyan-500 data-[state=active]:text-black text-pink-500 uppercase font-bold tracking-widest rounded-sm"
            >
              <Lightbulb className="w-4 h-4" />
              <span className="hidden sm:inline">Themen</span>
            </TabsTrigger>
            <TabsTrigger 
              value="flashcards" 
              className="gap-2 data-[state=active]:bg-yellow-400 data-[state=active]:text-black text-cyan-400 uppercase font-bold tracking-widest rounded-sm"
            >
              <Zap className="w-4 h-4" />
              <span className="hidden sm:inline">Karten</span>
            </TabsTrigger>
            <TabsTrigger 
              value="quiz" 
              className="gap-2 data-[state=active]:bg-purple-600 data-[state=active]:text-white text-pink-500 uppercase font-bold tracking-widest rounded-sm"
            >
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">Quiz</span>
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* Welcome Section - Hotline Miami Narrator */}
            <div className="narrator richard mb-8 border-l-4 border-pink-500">
              <div className="narrator-name text-pink-500">▶ RICHARD ◀</div>
              <p className="text-sm leading-relaxed">
                "Willkommen zurück. Du machst großartige Fortschritte. Weiter so!"
              </p>
            </div>

            {/* Progress Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Topics Progress */}
              <div className="quiz-card">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                    Themen
                  </h3>
                  <span className="text-xl font-bold text-pink-500">{topicsProgress}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-sm h-3 border border-cyan-400">
                  <div
                    className="bg-gradient-to-r from-cyan-400 to-pink-500 h-3 rounded-sm transition-all duration-300"
                    style={{ width: `${topicsProgress}%` }}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  {progress.completedTopics.length} von {topics.length} abgeschlossen
                </p>
              </div>

              {/* Flashcards Progress */}
              <div className="quiz-card">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-yellow-400">
                    Flashcards
                  </h3>
                  <span className="text-xl font-bold text-cyan-400">{flashcardsProgress}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-sm h-3 border border-yellow-400">
                  <div
                    className="bg-gradient-to-r from-yellow-400 to-pink-500 h-3 rounded-sm transition-all duration-300"
                    style={{ width: `${flashcardsProgress}%` }}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  {progress.completedFlashcards.length} von {flashcards.length} gelernt
                </p>
              </div>

              {/* Quiz Progress */}
              <div className="quiz-card">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-purple-400">
                    Quiz
                  </h3>
                  <span className="text-xl font-bold text-cyan-400">{quizProgress}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-sm h-3 border border-purple-400">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-sm transition-all duration-300"
                    style={{ width: `${quizProgress}%` }}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  {progress.quizResults.length} von {quizQuestions.length} beantwortet
                </p>
              </div>
            </div>

            {/* Narrator Sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {/* Rasmus Section */}
              <div className="narrator rasmus">
                <div className="narrator-name text-cyan-400">▶ RASMUS ◀</div>
                <p className="text-xs leading-relaxed mb-3">
                  "Logik und Struktur sind der Schlüssel. Konzentriere dich auf die Grundlagen."
                </p>
                <Button className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold uppercase tracking-widest rounded-sm text-xs">
                  ▶ ZUR ANALYSE ◀
                </Button>
              </div>

              {/* Don Juan Section */}
              <div className="narrator don-juan">
                <div className="narrator-name text-yellow-400">▶ DON JUAN ◀</div>
                <p className="text-xs leading-relaxed mb-3">
                  "Nutze deine Intuition. Manchmal führt das Bauchgefühl zum Ziel."
                </p>
                <Button className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold uppercase tracking-widest rounded-sm text-xs">
                  ▶ INTUITION TESTEN ◀
                </Button>
              </div>

              {/* Motivation Section */}
              <div className="quiz-card">
                <div className="text-pink-500 font-bold uppercase tracking-widest mb-3">
                  ▶ MOTIVATION ◀
                </div>
                <p className="text-xs leading-relaxed mb-3">
                  Du bist {Math.round((topicsProgress + flashcardsProgress + quizProgress) / 3)}% des Weges. 
                  Halte durch – die Bestnote ist in Reichweite!
                </p>
                <div className="text-right text-pink-500 font-bold text-xs">
                  🔥 KEEP GOING 🔥
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="adhs-section mt-8">
              <h2 className="adhs-section-title">▶ NÄCHSTE SCHRITTE ◀</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <Button 
                  onClick={() => setCurrentTab('topics')}
                  className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold uppercase tracking-widest rounded-sm"
                >
                  ▶ THEMEN LERNEN ◀
                </Button>
                <Button 
                  onClick={() => setCurrentTab('flashcards')}
                  className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold uppercase tracking-widest rounded-sm"
                >
                  ▶ KARTEN ÜBEN ◀
                </Button>
                <Button 
                  onClick={() => setCurrentTab('quiz')}
                  className="bg-pink-600 hover:bg-pink-500 text-black font-bold uppercase tracking-widest rounded-sm"
                >
                  ▶ QUIZ STARTEN ◀
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Topics Tab */}
          <TabsContent value="topics">
            <TopicsPage />
          </TabsContent>

          {/* Flashcards Tab */}
          <TabsContent value="flashcards">
            <FlashcardsPage />
          </TabsContent>

          {/* Quiz Tab */}
          <TabsContent value="quiz">
            <QuizPage />
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-pink-500 bg-black py-6 mt-12">
        <div className="container text-center">
          <p className="text-xs text-gray-500 uppercase tracking-widest">
            ▶ Hotline Miami Learning Platform ◀ | Klausur-Vorbereitung Kommunikation
          </p>
          <p className="text-xs text-pink-500 mt-2 uppercase tracking-widest">
            Powered by Richard, Rasmus & Don Juan
          </p>
        </div>
      </footer>
    </div>
  );
}
