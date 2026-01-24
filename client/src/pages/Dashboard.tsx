import { Card } from '@/components/ui/card';
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
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8">
        <h2 className="text-3xl font-bold mb-2">Willkommen zurück! 👋</h2>
        <p className="text-blue-100 mb-6">
          Du machst großartige Fortschritte. Weiter so!
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/20 backdrop-blur rounded-lg p-4">
            <p className="text-blue-100 text-sm mb-1">Punkte</p>
            <p className="text-3xl font-bold">{totalScore}</p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-lg p-4">
            <p className="text-blue-100 text-sm mb-1">Fortschritt</p>
            <p className="text-3xl font-bold">
              {Math.round((topicsProgress + flashcardsProgress + quizProgress) / 3)}%
            </p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-lg p-4">
            <p className="text-blue-100 text-sm mb-1">Motivation</p>
            <p className="text-3xl font-bold">🔥</p>
          </div>
        </div>
      </Card>

      {/* Progress Cards */}
      <div className="grid md:grid-cols-3 gap-4">
        {/* Topics Card */}
        <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <span className="text-2xl font-bold text-blue-600">
              {topicsProgress}%
            </span>
          </div>
          <h3 className="font-semibold mb-2">Themen gelernt</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Lerne die Grundlagen Schritt für Schritt.
          </p>
          <Progress value={topicsProgress} className="mb-4" />
          <Button
            variant="outline"
            size="sm"
            onClick={() => onNavigate('topics')}
            className="w-full"
          >
            Zu den Themen
          </Button>
        </Card>

        {/* Flashcards Card */}
        <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <span className="text-2xl font-bold text-purple-600">
              {flashcardsProgress}%
            </span>
          </div>
          <h3 className="font-semibold mb-2">Flashcards gelernt</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Trainiere mit interaktiven Karten.
          </p>
          <Progress value={flashcardsProgress} className="mb-4" />
          <Button
            variant="outline"
            size="sm"
            onClick={() => onNavigate('flashcards')}
            className="w-full"
          >
            Zu den Karten
          </Button>
        </Card>

        {/* Quiz Card */}
        <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <span className="text-2xl font-bold text-green-600">
              {quizProgress}%
            </span>
          </div>
          <h3 className="font-semibold mb-2">Quiz absolviert</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Teste dein Wissen mit Prüfungsfragen.
          </p>
          <Progress value={quizProgress} className="mb-4" />
          <Button
            variant="outline"
            size="sm"
            onClick={() => onNavigate('quiz')}
            className="w-full"
          >
            Zum Quiz
          </Button>
        </Card>
      </div>

      {/* Tips Section */}
      <Card className="p-6 bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800">
        <div className="flex gap-4">
          <Lightbulb className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold mb-2 text-amber-900 dark:text-amber-100">
              💡 Lern-Tipps für maximalen Erfolg
            </h3>
            <ul className="space-y-2 text-sm text-amber-800 dark:text-amber-200">
              <li>✓ Beginne mit den Themen, um die Grundlagen zu verstehen.</li>
              <li>✓ Nutze die Flashcards täglich zur Wiederholung.</li>
              <li>✓ Teste dein Wissen regelmäßig mit dem Quiz.</li>
              <li>✓ Konzentriere dich auf Themen, bei denen du unsicher bist.</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Motivation Section */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="p-6 bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
          <div className="flex gap-3 mb-3">
            <Award className="w-6 h-6 text-green-600 dark:text-green-400" />
            <h3 className="font-semibold text-green-900 dark:text-green-100">
              Du schaffst das!
            </h3>
          </div>
          <p className="text-sm text-green-800 dark:text-green-200">
            Mit dieser Lernplattform und deinem Engagement wirst du eine
            ausgezeichnete Note erreichen. Bleib fokussiert und konsistent!
          </p>
        </Card>

        <Card className="p-6 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
          <div className="flex gap-3 mb-3">
            <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h3 className="font-semibold text-blue-900 dark:text-blue-100">
              Dein Fortschritt
            </h3>
          </div>
          <p className="text-sm text-blue-800 dark:text-blue-200">
            Du hast bereits {topicsProgress}% der Themen gelernt. Jeder Tag
            bringt dich näher zum Ziel. Weiter so!
          </p>
        </Card>
      </div>

      {/* Quick Start */}
      <Card className="p-6">
        <h3 className="font-semibold mb-4">🚀 Schnelleinstieg</h3>
        <div className="grid md:grid-cols-3 gap-3">
          <Button
            variant="outline"
            className="justify-start"
            onClick={() => onNavigate('topics')}
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Themen lernen
          </Button>
          <Button
            variant="outline"
            className="justify-start"
            onClick={() => onNavigate('flashcards')}
          >
            <Zap className="w-4 h-4 mr-2" />
            Flashcards üben
          </Button>
          <Button
            variant="outline"
            className="justify-start"
            onClick={() => onNavigate('quiz')}
          >
            <BarChart3 className="w-4 h-4 mr-2" />
            Quiz starten
          </Button>
        </div>
      </Card>
    </div>
  );
}
