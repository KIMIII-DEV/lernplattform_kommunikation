import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Lightbulb, Zap, BarChart3, Home as HomeIcon } from 'lucide-react';
import { useLearningProgress } from '@/hooks/useLearningProgress';
import { topics, flashcards, quizQuestions } from '@/lib/learningData';
import TopicsPage from './Topics';
import FlashcardsPage from './Flashcards';
import QuizPage from './Quiz';
import DashboardPage from './Dashboard';

type ActiveLF = 'lf4' | 'lf5';

const LF_META: Record<ActiveLF, { label: string; subtitle: string }> = {
  lf4: { label: 'LF 4', subtitle: 'IKT-SYSTEME' },
  lf5: { label: 'LF 5', subtitle: 'DIALOGMARKETING' },
};

export default function Home() {
  const [currentTab, setCurrentTab] = useState('dashboard');
  const [activeLF, setActiveLF] = useState<ActiveLF>('lf5');
  const { progress, getProgressPercentage } = useLearningProgress();

  const activeTopics = topics.filter((t) => t.id.startsWith(activeLF));
  const activeFlashcards = flashcards.filter((f) => f.id.startsWith(activeLF));
  const activeQuizQuestions = quizQuestions.filter((q) => q.id.startsWith(activeLF));

  const topicsProgress = getProgressPercentage(
    activeTopics.length,
    progress.completedTopics.filter((id) => id.startsWith(activeLF)).length
  );
  const flashcardsProgress = getProgressPercentage(
    activeFlashcards.length,
    progress.completedFlashcards.filter((id) => id.startsWith(activeLF)).length
  );
  const quizProgress = getProgressPercentage(
    activeQuizQuestions.length,
    progress.quizResults.filter((r) => r.questionId?.startsWith(activeLF)).length
  );

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#e8e8e8]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0e0e0e] border-b-2 border-[#390007] shadow-lg">
        <div className="container py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#390007] flex items-center justify-center border-2 border-[#cc0000]">
                <BookOpen className="w-5 h-5 text-[#e8e8e8]" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#cc0000] uppercase tracking-widest">
                  IZURE
                </h1>
                <p className="text-[10px] text-[#c8a96a] uppercase tracking-widest">
                  ▶ TACTICAL TRAINING SYSTEM ◀
                </p>
              </div>
            </div>

            {/* LF Switcher */}
            <div className="flex items-center gap-1 border-2 border-[#390007]">
              {(['lf4', 'lf5'] as ActiveLF[]).map((lf) => (
                <button
                  key={lf}
                  onClick={() => setActiveLF(lf)}
                  className={`px-3 py-2 text-[10px] font-bold uppercase tracking-widest transition-all ${
                    activeLF === lf
                      ? 'bg-[#390007] text-[#cc0000]'
                      : 'bg-transparent text-[#888888] hover:text-[#e8e8e8]'
                  }`}
                >
                  <div>{LF_META[lf].label}</div>
                  <div className="text-[8px] opacity-70">{LF_META[lf].subtitle}</div>
                </button>
              ))}
            </div>

            {/* Score */}
            <div className="text-right border-l-2 border-[#390007] pl-4">
              <p className="text-lg font-bold text-[#cc0000] uppercase tracking-widest">
                {progress.totalScore} PTS
              </p>
              <p className="text-[10px] text-[#c8a96a] uppercase tracking-widest">
                {progress.completedTopics.filter((id) => id.startsWith(activeLF)).length} / {activeTopics.length} MODULES
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
          {/* Tab Navigation */}
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-[#1a0a0a] border-2 border-[#390007]">
            <TabsTrigger
              value="dashboard"
              className="gap-2 data-[state=active]:bg-[#390007] data-[state=active]:text-[#cc0000] text-[#888888] uppercase font-bold tracking-widest"
            >
              <HomeIcon className="w-4 h-4" />
              <span className="hidden sm:inline">HQ</span>
            </TabsTrigger>
            <TabsTrigger
              value="topics"
              className="gap-2 data-[state=active]:bg-[#390007] data-[state=active]:text-[#c8a96a] text-[#888888] uppercase font-bold tracking-widest"
            >
              <Lightbulb className="w-4 h-4" />
              <span className="hidden sm:inline">MODULES</span>
            </TabsTrigger>
            <TabsTrigger
              value="flashcards"
              className="gap-2 data-[state=active]:bg-[#390007] data-[state=active]:text-[#c8a96a] text-[#888888] uppercase font-bold tracking-widest"
            >
              <Zap className="w-4 h-4" />
              <span className="hidden sm:inline">CARDS</span>
            </TabsTrigger>
            <TabsTrigger
              value="quiz"
              className="gap-2 data-[state=active]:bg-[#390007] data-[state=active]:text-[#cc0000] text-[#888888] uppercase font-bold tracking-widest"
            >
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">SIMULATION</span>
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            <DashboardPage
              topicsProgress={topicsProgress}
              flashcardsProgress={flashcardsProgress}
              quizProgress={quizProgress}
              totalScore={progress.totalScore}
              activeLF={activeLF}
              activeTopicsCount={activeTopics.length}
              activeFlashcardsCount={activeFlashcards.length}
              activeQuizCount={activeQuizQuestions.length}
              completedTopicsCount={progress.completedTopics.filter((id) => id.startsWith(activeLF)).length}
              completedFlashcardsCount={progress.completedFlashcards.filter((id) => id.startsWith(activeLF)).length}
              onNavigate={setCurrentTab}
            />
          </TabsContent>

          {/* Modules Tab */}
          <TabsContent value="topics">
            <TopicsPage topics={activeTopics} />
          </TabsContent>

          {/* Cards Tab */}
          <TabsContent value="flashcards">
            <FlashcardsPage flashcards={activeFlashcards} />
          </TabsContent>

          {/* Simulation Tab */}
          <TabsContent value="quiz">
            <QuizPage quizQuestions={activeQuizQuestions} />
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-[#390007] bg-[#0e0e0e] py-6 mt-12">
        <div className="container text-center">
          <p className="text-[10px] text-[#888888] uppercase tracking-widest">
            ▶ IZURE TACTICAL TRAINING SYSTEM ◀ | DIALOGMARKETING
          </p>
          <p className="text-[10px] text-[#c8a96a] mt-2 uppercase tracking-widest">
            Strikt faktenbasiert · {LF_META[activeLF].label} aktiv
          </p>
        </div>
      </footer>
    </div>
  );
}
