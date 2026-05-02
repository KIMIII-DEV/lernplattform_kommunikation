import { Button } from '@/components/ui/button';
import { BookOpen, Zap, BarChart3 } from 'lucide-react';

interface DashboardProps {
  topicsProgress: number;
  flashcardsProgress: number;
  quizProgress: number;
  totalScore: number;
  activeLF: 'lf4' | 'lf5';
  activeTopicsCount: number;
  activeFlashcardsCount: number;
  activeQuizCount: number;
  completedTopicsCount: number;
  completedFlashcardsCount: number;
  onNavigate: (tab: string) => void;
}

export default function DashboardPage({
  topicsProgress,
  flashcardsProgress,
  quizProgress,
  totalScore,
  activeLF,
  activeTopicsCount,
  activeFlashcardsCount,
  activeQuizCount,
  completedTopicsCount,
  completedFlashcardsCount,
  onNavigate,
}: DashboardProps) {
  const overallProgress = Math.round((topicsProgress + flashcardsProgress + quizProgress) / 3);

  const masteryLabel =
    overallProgress >= 100
      ? 'FULL MASTERY'
      : overallProgress >= 70
        ? 'PERFORMANCE LEVEL: HIGH'
        : overallProgress >= 40
          ? 'PERFORMANCE LEVEL: MID'
          : 'SYSTEM INITIALIZING';

  return (
    <div className="space-y-6">
      {/* Command Center Header */}
      <div className="quiz-card border-2 border-[#390007] bg-[#1a0a0a] p-8">
        <h2 className="text-3xl font-bold mb-2 text-[#cc0000] uppercase tracking-widest">
          ▶ COMMAND CENTER ◀
        </h2>
        <p className="text-[#888888] mb-6 uppercase tracking-widest font-bold text-xs">
          {activeLF.toUpperCase()} — Mastery Status Overview
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-[#0e0e0e] border-2 border-[#390007] p-4">
            <p className="text-[#cc0000] text-xs mb-2 font-bold uppercase tracking-widest">Score</p>
            <p className="text-3xl font-bold text-[#e8e8e8]">{totalScore}</p>
          </div>
          <div className="bg-[#0e0e0e] border-2 border-[#c8a96a] p-4">
            <p className="text-[#c8a96a] text-xs mb-2 font-bold uppercase tracking-widest">Progress</p>
            <p className="text-3xl font-bold text-[#e8e8e8]">{overallProgress}%</p>
          </div>
          <div className="bg-[#0e0e0e] border-2 border-[#390007] p-4">
            <p className="text-[#888888] text-xs mb-2 font-bold uppercase tracking-widest">Mastery</p>
            <p className="text-sm font-bold text-[#cc0000] leading-tight">{masteryLabel}</p>
          </div>
        </div>
      </div>

      {/* Progress Cards */}
      <div className="grid md:grid-cols-3 gap-4">
        {/* Modules */}
        <div className="quiz-card p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-[#390007] border-2 border-[#cc0000] flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-[#cc0000]" />
            </div>
            <span className="text-2xl font-bold text-[#cc0000] uppercase tracking-widest">
              {topicsProgress}%
            </span>
          </div>
          <h3 className="font-bold mb-2 text-[#cc0000] uppercase tracking-widest">Modules</h3>
          <p className="text-xs text-[#888888] mb-4">
            {completedTopicsCount} / {activeTopicsCount} abgeschlossen
          </p>
          <div className="w-full bg-[#0e0e0e] h-2 border border-[#390007] mb-4">
            <div
              className="bg-[#cc0000] h-2 transition-all duration-300"
              style={{ width: `${topicsProgress}%` }}
            />
          </div>
          <Button
            onClick={() => onNavigate('topics')}
            className="w-full bg-[#390007] hover:bg-[#cc0000] text-[#e8e8e8] font-bold uppercase tracking-widest text-xs border border-[#cc0000]"
          >
            ▶ OPEN MODULES ◀
          </Button>
        </div>

        {/* Flashcards */}
        <div className="quiz-card p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-[#1a0a0a] border-2 border-[#c8a96a] flex items-center justify-center">
              <Zap className="w-6 h-6 text-[#c8a96a]" />
            </div>
            <span className="text-2xl font-bold text-[#c8a96a] uppercase tracking-widest">
              {flashcardsProgress}%
            </span>
          </div>
          <h3 className="font-bold mb-2 text-[#c8a96a] uppercase tracking-widest">Flashcards</h3>
          <p className="text-xs text-[#888888] mb-4">
            {completedFlashcardsCount} / {activeFlashcardsCount} gelernt
          </p>
          <div className="w-full bg-[#0e0e0e] h-2 border border-[#c8a96a] mb-4">
            <div
              className="bg-[#c8a96a] h-2 transition-all duration-300"
              style={{ width: `${flashcardsProgress}%` }}
            />
          </div>
          <Button
            onClick={() => onNavigate('flashcards')}
            className="w-full bg-[#1a0a0a] hover:bg-[#c8a96a] hover:text-[#0e0e0e] text-[#c8a96a] font-bold uppercase tracking-widest text-xs border border-[#c8a96a]"
          >
            ▶ OPEN CARDS ◀
          </Button>
        </div>

        {/* Simulation */}
        <div className="quiz-card p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-[#390007] border-2 border-[#cc0000] flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-[#cc0000]" />
            </div>
            <span className="text-2xl font-bold text-[#cc0000] uppercase tracking-widest">
              {quizProgress}%
            </span>
          </div>
          <h3 className="font-bold mb-2 text-[#cc0000] uppercase tracking-widest">Simulation</h3>
          <p className="text-xs text-[#888888] mb-4">
            {activeQuizCount} Assessment Nodes
          </p>
          <div className="w-full bg-[#0e0e0e] h-2 border border-[#390007] mb-4">
            <div
              className="bg-[#cc0000] h-2 transition-all duration-300"
              style={{ width: `${quizProgress}%` }}
            />
          </div>
          <Button
            onClick={() => onNavigate('quiz')}
            className="w-full bg-[#390007] hover:bg-[#cc0000] text-[#e8e8e8] font-bold uppercase tracking-widest text-xs border border-[#cc0000]"
          >
            ▶ INITIATE SIMULATION ◀
          </Button>
        </div>
      </div>

      {/* Overall Progress */}
      <div className="adhs-section">
        <h3 className="adhs-section-title">▶ SYSTEM READINESS ◀</h3>
        <div className="w-full bg-[#0e0e0e] h-4 border-2 border-[#390007]">
          <div
            className="bg-gradient-to-r from-[#390007] via-[#cc0000] to-[#c8a96a] h-4 transition-all duration-300"
            style={{ width: `${overallProgress}%` }}
          />
        </div>
        <p className="text-sm text-[#888888] mt-3">
          System Readiness: <span className="text-[#cc0000] font-bold">{overallProgress}%</span> — {masteryLabel}
        </p>
      </div>

      {/* Info */}
      <div className="adhs-section border-l-4 border-[#cc0000]">
        <h3 className="adhs-section-title">▶ INTELLIGENCE BRIEF ◀</h3>
        <p className="text-sm leading-relaxed text-[#888888]">
          {activeLF === 'lf5'
            ? `Lernfeld 5 enthält ${activeFlashcardsCount} Flashcards und ${activeQuizCount} Assessment Nodes zur Dialogmarketing-Kompetenz. Fokus auf kritische Kerninhalte.`
            : `Lernfeld 4 enthält ${activeFlashcardsCount} Flashcards und ${activeQuizCount} Assessment Nodes zu IKT-Systemen. Konzentriere dich auf die markierten kritischen Kerninhalte.`}
        </p>
      </div>

      {/* Tactical Tips */}
      <div className="quiz-card">
        <h3 className="font-bold text-[#c8a96a] uppercase tracking-widest mb-4">
          ▶ TACTICAL PROTOCOLS ◀
        </h3>
        <ul className="space-y-2 text-sm text-[#888888]">
          <li className="flex gap-2">
            <span className="text-[#cc0000] font-bold">▸</span>
            <span>Module sequential abarbeiten — Grundlagen zuerst</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#cc0000] font-bold">▸</span>
            <span>Flashcard Shuffle-Modus für tieferes Retention Training</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#cc0000] font-bold">▸</span>
            <span>Simulation regelmäßig starten — Performance Level messen</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#c8a96a] font-bold">▸</span>
            <span>Schwache Nodes wiederholen bis Full Mastery erreicht</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
