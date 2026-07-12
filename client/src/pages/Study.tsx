import { useState } from 'react';
import Experience from '@/experience/Experience';
import { MODULES, MODULE_DEEP, ModuleSummary } from '@/lib/modules';
import { useProgress } from '@/lib/useProgress';
import LernfeldDetail from './LernfeldDetail';
import Simulation from './Simulation';
import Debrief from './Debrief';

/* IZURE Lernecke — Masterplan Phase 12: die Experience-Bühne (Szenen statt
   Scroll) ist der Einstieg der Lernecke. Die Lernfelder-Szene führt per
   Kachel-Klick in die bestehende, abgenommene Dossier/Flashcard/Quiz-
   Struktur (LernfeldDetail) — keine Content-Dopplung. Der LF5-Deep-Sim-
   Flow (Simulation/Debrief) bleibt unverändert über das Dossier erreichbar. */

type View = 'lobby' | 'detail' | 'sim' | 'debrief';

export interface SimResult {
  perDecision: { id: string; selected: string; score: number; correct: boolean }[];
  totalScore: number;
  maxScore: number;
  pct: number;
}

export default function StudyPage() {
  const [view, setView] = useState<View>('lobby');
  const [activeId, setActiveId] = useState<string | null>(null);
  const [result, setResult] = useState<SimResult | null>(null);
  const { startModule, completeModule } = useProgress();

  const open = (m: ModuleSummary) => {
    if (m.locked) return;
    startModule(m.id);
    setActiveId(m.id);
    setView('detail');
  };

  const launchSim = () => setView('sim');

  const onSimComplete = (r: SimResult) => {
    setResult(r);
    if (activeId) completeModule(activeId, r.totalScore);
    setView('debrief');
  };

  const back = () => setView('detail');
  const lobby = () => {
    setView('lobby');
    setActiveId(null);
    setResult(null);
  };

  if (view === 'detail' && activeId) {
    const m = MODULES.find((x) => x.id === activeId);
    if (!m) return null;
    return <LernfeldDetail module={m} onBack={lobby} onLaunchSim={launchSim} />;
  }

  if (view === 'sim' && activeId) {
    const m = MODULES.find((x) => x.id === activeId);
    const deep = m ? MODULE_DEEP[m.id] : null;
    return <Simulation module={m!} deep={deep} onComplete={onSimComplete} onAbort={back} />;
  }

  if (view === 'debrief' && result && activeId) {
    const m = MODULES.find((x) => x.id === activeId);
    if (!m) return null;
    return <Debrief module={m} deep={MODULE_DEEP[m.id]} result={result} onRetry={launchSim} onReturn={lobby} />;
  }

  return <Experience onOpenLf={open} />;
}
