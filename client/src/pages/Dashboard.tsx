import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  BookOpen,
  Zap,
  BarChart3,
  Lightbulb,
  TrendingUp,
  Award,
} from 'lucide-react';

interface DashboardProps {
  topicsProgress: number;
  flashcardsProgress: number;
  quizProgress: number;
  totalScore: number;
  onNavigate: (tab: string) => void;
}

export default function DashboardPage({
  topicsProgress,
  flashcardsProgress,
  quizProgress,
  totalScore,
  onNavigate,
}: DashboardProps) {
  const overallProgress = Math.round((topicsProgress + flashcardsProgress + quizProgress) / 3);

  return (
    <div className="space-y-6">
      {/* Welcome Section - Hotline Miami Style */}
      <div className="quiz-card border-2 border-pink-500 bg-gradient-to-r from-black via-gray-900 to-black p-8">
        <h2 className="text-3xl font-bold mb-2 text-pink-500 uppercase tracking-widest">
          ▶ WILLKOMMEN ZURÜCK ◀
        </h2>
        <p className="text-cyan-400 mb-6 uppercase tracking-widest font-bold">
          Du machst großartige Fortschritte. Weiter so!
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-800 border-2 border-pink-500 rounded-sm p-4">
            <p className="text-pink-500 text-xs mb-2 font-bold uppercase tracking-widest">Punkte</p>
            <p className="text-3xl font-bold text-cyan-400">{totalScore}</p>
          </div>
          <div className="bg-gray-800 border-2 border-cyan-400 rounded-sm p-4">
            <p className="text-cyan-400 text-xs mb-2 font-bold uppercase tracking-widest">Fortschritt</p>
            <p className="text-3xl font-bold text-yellow-400">{overallProgress}%</p>
          </div>
          <div className="bg-gray-800 border-2 border-yellow-400 rounded-sm p-4">
            <p className="text-yellow-400 text-xs mb-2 font-bold uppercase tracking-widest">Motivation</p>
            <p className="text-3xl font-bold text-pink-500">🔥</p>
          </div>
        </div>
      </div>

      {/* Progress Cards */}
      <div className="grid md:grid-cols-3 gap-4">
        {/* Topics Card */}
        <div className="quiz-card p-6 border-cyan-400">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-cyan-500/20 border-2 border-cyan-400 rounded-sm flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-cyan-400" />
            </div>
            <span className="text-2xl font-bold text-cyan-400 uppercase tracking-widest">
              {topicsProgress}%
            </span>
          </div>
          <h3 className="font-bold mb-2 text-cyan-400 uppercase tracking-widest">Themen gelernt</h3>
          <p className="text-xs text-gray-400 mb-4">
            Lerne die Grundlagen Schritt für Schritt.
          </p>
          <div className="w-full bg-gray-800 rounded-sm h-2 border border-cyan-400 mb-4">
            <div
              className="bg-cyan-400 h-2 rounded-sm transition-all duration-300"
              style={{ width: `${topicsProgress}%` }}
            />
          </div>
          <Button
            onClick={() => onNavigate('topics')}
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold uppercase tracking-widest rounded-sm text-xs"
          >
            ▶ ZU DEN THEMEN ◀
          </Button>
        </div>

        {/* Flashcards Card */}
        <div className="quiz-card p-6 border-yellow-400">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-yellow-400/20 border-2 border-yellow-400 rounded-sm flex items-center justify-center">
              <Zap className="w-6 h-6 text-yellow-400" />
            </div>
            <span className="text-2xl font-bold text-yellow-400 uppercase tracking-widest">
              {flashcardsProgress}%
            </span>
          </div>
          <h3 className="font-bold mb-2 text-yellow-400 uppercase tracking-widest">Flashcards gelernt</h3>
          <p className="text-xs text-gray-400 mb-4">
            Trainiere mit interaktiven Karten.
          </p>
          <div className="w-full bg-gray-800 rounded-sm h-2 border border-yellow-400 mb-4">
            <div
              className="bg-yellow-400 h-2 rounded-sm transition-all duration-300"
              style={{ width: `${flashcardsProgress}%` }}
            />
          </div>
          <Button
            onClick={() => onNavigate('flashcards')}
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold uppercase tracking-widest rounded-sm text-xs"
          >
            ▶ ZU DEN KARTEN ◀
          </Button>
        </div>

        {/* Quiz Card */}
        <div className="quiz-card p-6 border-pink-500">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-pink-500/20 border-2 border-pink-500 rounded-sm flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-pink-500" />
            </div>
            <span className="text-2xl font-bold text-pink-500 uppercase tracking-widest">
              {quizProgress}%
            </span>
          </div>
          <h3 className="font-bold mb-2 text-pink-500 uppercase tracking-widest">Quiz absolviert</h3>
          <p className="text-xs text-gray-400 mb-4">
            Teste dein Wissen mit Prüfungsfragen.
          </p>
          <div className="w-full bg-gray-800 rounded-sm h-2 border border-pink-500 mb-4">
            <div
              className="bg-pink-500 h-2 rounded-sm transition-all duration-300"
              style={{ width: `${quizProgress}%` }}
            />
          </div>
          <Button
            onClick={() => onNavigate('quiz')}
            className="w-full bg-pink-600 hover:bg-pink-500 text-black font-bold uppercase tracking-widest rounded-sm text-xs"
          >
            ▶ ZUM QUIZ ◀
          </Button>
        </div>
      </div>

      {/* Overall Progress */}
      <div className="adhs-section">
        <h3 className="adhs-section-title">▶ GESAMTFORTSCHRITT ◀</h3>
        <div className="w-full bg-gray-800 rounded-sm h-4 border-2 border-cyan-400">
          <div
            className="bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 h-4 rounded-sm transition-all duration-300"
            style={{ width: `${overallProgress}%` }}
          />
        </div>
        <p className="text-sm text-gray-300 mt-3">
          Du bist {overallProgress}% des Weges zur Bestnote. Halte durch!
        </p>
      </div>

      {/* Narrator Messages */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Richard */}
        <div className="narrator richard">
          <div className="narrator-name text-pink-500">▶ RICHARD ◀</div>
          <p className="text-sm leading-relaxed">
            "Dein Fortschritt ist beeindruckend. Konzentriere dich auf die Themen, die dir noch schwerfallen."
          </p>
        </div>

        {/* Don Juan */}
        <div className="narrator don-juan">
          <div className="narrator-name text-yellow-400">▶ DON JUAN ◀</div>
          <p className="text-sm leading-relaxed">
            "Vertrau deinem Instinkt. Du bist näher an der Bestnote, als du denkst."
          </p>
        </div>
      </div>

      {/* Tips Section */}
      <div className="quiz-card">
        <h3 className="font-bold text-purple-400 uppercase tracking-widest mb-4">
          ▶ LERN-TIPPS ◀
        </h3>
        <ul className="space-y-2 text-sm text-gray-300">
          <li className="flex gap-2">
            <span className="text-purple-400 font-bold">▸</span>
            <span>Lerne jeden Tag ein neues Thema</span>
          </li>
          <li className="flex gap-2">
            <span className="text-purple-400 font-bold">▸</span>
            <span>Nutze Flashcards für schnelle Wiederholungen</span>
          </li>
          <li className="flex gap-2">
            <span className="text-purple-400 font-bold">▸</span>
            <span>Teste dich regelmäßig mit dem Quiz</span>
          </li>
          <li className="flex gap-2">
            <span className="text-purple-400 font-bold">▸</span>
            <span>Konzentriere dich auf schwache Punkte</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
