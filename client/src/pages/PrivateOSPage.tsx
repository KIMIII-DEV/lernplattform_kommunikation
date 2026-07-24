import { useState } from 'react';
import PrivateOS, { ViewId } from '@/private-os/PrivateOS';
import { MODULES, MODULE_DEEP, ModuleSummary } from '@/lib/modules';
import { useProgress } from '@/lib/useProgress';
import LernfeldDetail from './LernfeldDetail';
import Simulation from './Simulation';
import Debrief from './Debrief';

/* IZURÉ Privat Layer — Einstiegspunkt für ALLE /private/*-Routen.
   Ersetzt die vormals getrennten Seiten (PrivateDashboard/Study/
   Barkeeper/Wire/Weather/Ambiance) durch die eine PrivateOS-Shell
   (Design-Handoff-Port: Rail + Command-Palette + 7 Views, kein Scroll).

   Bleibt für den Lernfeld-Tiefen-Flow (Dossier/Simulation/Debrief) exakt
   die bisherige, bereits abgenommene State-Machine von Study.tsx — nur
   was vorher "lobby" hieß und die alte Experience-Szenenbühne zeigte,
   ist jetzt die neue PrivateOS-Shell mit ihren 7 Views. Ein Klick auf
   ein Lernfeld verlässt die Shell (kein Scroll/Panel-Rahmen passt zu
   einem langen Dossier) und zeigt wie gewohnt LernfeldDetail/Simulation/
   Debrief; "Zurück" kehrt in die Shell zurück (Lernecke-View). */

type Sub = 'os' | 'detail' | 'sim' | 'debrief';

export interface SimResult {
  perDecision: { id: string; selected: string; score: number; correct: boolean }[];
  totalScore: number;
  maxScore: number;
  pct: number;
}

const ROUTE_TO_VIEW: Record<string, ViewId> = {
  '/private': 'deck',
  '/private/learn': 'lernecke',
  '/private/barkeeper': 'marco',
  '/private/news': 'wire',
  '/private/weather': 'wetter',
  '/private/kapital': 'stocks',
  '/private/ambiance': 'ambiance',
};
const VIEW_TO_ROUTE: Record<ViewId, string> = {
  deck: '/private',
  lernecke: '/private/learn',
  marco: '/private/barkeeper',
  wire: '/private/news',
  wetter: '/private/weather',
  stocks: '/private/kapital',
  ambiance: '/private/ambiance',
};

export default function PrivateOSPage({
  route,
  navigate,
  onExit,
}: {
  route: string;
  navigate: (to: string) => void;
  onExit: () => void;
}) {
  const [sub, setSub] = useState<Sub>('os');
  const [activeId, setActiveId] = useState<string | null>(null);
  const [result, setResult] = useState<SimResult | null>(null);
  const { startModule, completeModule } = useProgress();

  const openLernfeld = (moduleId: string) => {
    const m = MODULES.find((x) => x.id === moduleId);
    if (!m || m.locked) return;
    startModule(m.id);
    setActiveId(m.id);
    setSub('detail');
  };
  const launchSim = () => setSub('sim');
  const onSimComplete = (r: SimResult) => {
    setResult(r);
    if (activeId) completeModule(activeId, r.totalScore);
    setSub('debrief');
  };
  const backToDetail = () => setSub('detail');
  const backToOS = () => { setSub('os'); setActiveId(null); setResult(null); };

  if (sub === 'detail' && activeId) {
    const m = MODULES.find((x) => x.id === activeId);
    if (!m) return null;
    return <LernfeldDetail module={m} onBack={backToOS} onLaunchSim={launchSim} />;
  }
  if (sub === 'sim' && activeId) {
    const m = MODULES.find((x) => x.id === activeId) as ModuleSummary;
    return <Simulation module={m} deep={MODULE_DEEP[m.id]} onComplete={onSimComplete} onAbort={backToDetail} />;
  }
  if (sub === 'debrief' && result && activeId) {
    const m = MODULES.find((x) => x.id === activeId);
    if (!m) return null;
    return <Debrief module={m} deep={MODULE_DEEP[m.id]} result={result} onRetry={launchSim} onReturn={backToOS} />;
  }

  const activeView = ROUTE_TO_VIEW[route] ?? 'deck';
  return (
    <PrivateOS
      initialView={activeView}
      onViewChange={(v) => navigate(VIEW_TO_ROUTE[v])}
      onExit={onExit}
      onOpenLernfeld={openLernfeld}
    />
  );
}
