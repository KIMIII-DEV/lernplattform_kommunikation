import { useState } from 'react';
import { Card, DonutRing, DossierCard, Stage, StatChain } from '@/components/primitives';
import { MODULES, MODULE_DEEP, ModuleSummary, ModuleColor, topicsForLernfeld } from '@/lib/modules';
import { useProgress } from '@/lib/useProgress';
import LernfeldDetail from './LernfeldDetail';
import Simulation from './Simulation';
import Debrief from './Debrief';

/* IZURE Dashboard-Home — Masterplan v3, Phase 5 (Blueprint 5.3 + 6.1/6.2/6.4).
   Eine große Zahl trägt den Screen (Gesamtfortschritt-%); darunter die
   5 LF-Donut-Ringe und die Dossier-Karten mit Hover-Reveal. glass-subtle
   ist HIER erlaubt (einzige View außerhalb von Overlays, Blueprint 6.1).

   Datenlage (gemeldet, nicht erweitert): useProgress kennt nur
   started/completed/score/attempts pro LF — Ringe zeigen deshalb ehrlich
   100 (abgeschlossen) oder 0, keine erfundenen Zwischenstände. */

type View = 'lobby' | 'detail' | 'sim' | 'debrief';

export interface SimResult {
  perDecision: { id: string; selected: string; score: number; correct: boolean }[];
  totalScore: number;
  maxScore: number;
  pct: number;
}

/* LF-Kategorienfarben (Masterplan 3.4) — nur Zuordnung, nie Chrome/Feedback. */
const LF_COLOR: Record<ModuleColor, string> = {
  gold: 'var(--accent-gold-light)',
  bordeaux: 'var(--accent-bordeaux-light)',
  petrol: 'var(--accent-petrol-light)',
  olive: 'var(--accent-olive)',
};

export default function StudyPage() {
  const [view, setView] = useState<View>('lobby');
  const [activeId, setActiveId] = useState<string | null>(null);
  const [result, setResult] = useState<SimResult | null>(null);
  const { progress, startModule, completeModule } = useProgress();

  const totalDone = MODULES.filter((m) => progress.modules[m.id]?.completed).length;
  const pct = Math.round((totalDone / MODULES.length) * 100);
  const totalAttempts = Object.values(progress.modules).reduce((s, m) => s + (m.attempts || 0), 0);

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

  return (
    <div className="page-root" data-screen-label="06 Private · Study" style={{ padding: '48px 48px 96px 0' }}>
      <Stage style={{ padding: '56px 48px', maxWidth: 1240, margin: '0 auto' }}>
        <div className="t-label" style={{ color: 'var(--accent-primary)', marginBottom: 40 }}>
          Study · Dialogmarketing · LF1—LF5
        </div>

        {/* Fokus-Stat-Hero — genau ein dominantes Element */}
        <Card variant="glass-subtle" style={{ textAlign: 'center', padding: '56px 32px 44px', marginBottom: 24 }}>
          <div
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700,
              fontSize: 'var(--fs-hero)',
              lineHeight: 1,
              color: 'var(--accent-primary-bright)',
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            {pct}%
          </div>
          <div
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 600,
              fontSize: 'var(--fs-label)',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
              marginTop: 16,
            }}
          >
            Gesamtfortschritt
          </div>

          {/* 5 LF-Ringe — Ringrand in Kategorienfarbe (3.4), Screenshot-Checkpoint */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 36,
              marginTop: 44,
              flexWrap: 'wrap',
            }}
          >
            {MODULES.map((m) => (
              <DonutRing
                key={m.id}
                value={progress.modules[m.id]?.completed ? 100 : 0}
                label={m.code}
                size={72}
                ringColor={LF_COLOR[m.color]}
              />
            ))}
          </div>
        </Card>

        {/* Kennzahl-Kette — nur echte Daten */}
        <Card variant="glass-subtle" style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
          <StatChain
            items={[
              { value: `${totalDone}/5`, label: 'Lernfelder' },
              { value: progress.streak, label: 'Streak' },
              { value: totalAttempts, label: 'Versuche' },
            ]}
          />
        </Card>

        {/* LF-Dossier-Karten mit Hover-Reveal (6.4) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 4 }}>
          {MODULES.map((m) => (
            <DossierCard
              key={m.id}
              title={m.short}
              meta={`${m.code} · ${m.duration}`}
              progress={progress.modules[m.id]?.completed ? 100 : 0}
              previewChapters={topicsForLernfeld(m.lernfeld)
                .slice(0, 3)
                .map((t) => t.title)}
              accentColor={LF_COLOR[m.color]}
              onOpen={() => open(m)}
            />
          ))}
        </div>
      </Stage>
    </div>
  );
}
