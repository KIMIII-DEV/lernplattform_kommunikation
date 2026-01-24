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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900 dark:text-white">
                  Kommunikation
                </h1>
                <p className="text-xs text-muted-foreground">Klausur-Vorbereitung</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-slate-900 dark:text-white">
                {progress.totalScore} Punkte
              </p>
              <p className="text-xs text-muted-foreground">
                {progress.completedTopics.length} / {topics.length} Themen
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        <Tabs
          value={currentTab}
          onValueChange={setCurrentTab}
          className="w-full"
        >
          {/* Tab Navigation */}
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="dashboard" className="gap-2">
              <HomeIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Übersicht</span>
            </TabsTrigger>
            <TabsTrigger value="topics" className="gap-2">
              <Lightbulb className="w-4 h-4" />
              <span className="hidden sm:inline">Themen</span>
            </TabsTrigger>
            <TabsTrigger value="flashcards" className="gap-2">
              <Zap className="w-4 h-4" />
              <span className="hidden sm:inline">Karten</span>
            </TabsTrigger>
            <TabsTrigger value="quiz" className="gap-2">
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">Quiz</span>
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            <DashboardPage
              topicsProgress={topicsProgress}
              flashcardsProgress={flashcardsProgress}
              quizProgress={quizProgress}
              totalScore={progress.totalScore}
              onNavigate={setCurrentTab}
            />
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
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-6 mt-12">
        <div className="container text-center text-sm text-muted-foreground">
          <p>
            💡 Tipp: Nutze alle Lernmethoden für den besten Erfolg. Viel Spaß beim
            Lernen!
          </p>
        </div>
      </footer>
    </div>
  );
}
