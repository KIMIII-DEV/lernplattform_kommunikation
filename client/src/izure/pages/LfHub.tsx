import { useState } from 'react';
import type { Lernfeld, LernfeldId, LernfeldProgress } from '../types/learning';
import type { RawQuestion } from '../lib/dataAdapter';
import { TheoryPage } from './TheoryPage';
import { DrillPage } from './DrillPage';
import { SimulationPage } from './SimulationPage';
import { Bracket, ProgressSegments, Tag } from '../components/ui/Tactical';

type Tab = 'theory' | 'drill' | 'sim';

function TabBar({ active, onChange, counts, readCount, totalTopics }: {
  active: Tab;
  onChange: (t: Tab) => void;
  counts: { topics: number; cards: number; questions: number };
  readCount: number;
  totalTopics: number;
}) {
  const tabs: Array<{ id: Tab; label: string; sub: string; count: number; done?: number }> = [
    { id: 'theory', label: 'THEORY', sub: 'Tactical Briefing', count: counts.topics, done: readCount },
    { id: 'drill',  label: 'DRILL',  sub: 'Aktiver Abruf',     count: counts.cards },
    { id: 'sim',    label: 'SIM',    sub: 'Entscheidungslogik', count: counts.questions },
  ];
  return (
    <div style={{ display: 'flex', borderBottom: '1px solid var(--line-bright)' }}>
      {tabs.map(t => {
        const isActive = t.id === active;
        return (
          <button
            key={t.id}
            onClick={() => onChange(t.id)}
            style={{
              flex: 1, padding: '16px 20px', cursor: 'pointer',
              background: isActive ? 'var(--bg-2)' : 'transparent',
              border: 'none', borderBottom: isActive ? '2px solid var(--warn)' : '2px solid transparent',
              textAlign: 'left', transition: 'background 0.08s',
            }}
          >
            <div style={{
              fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: isActive ? 'var(--text)' : 'var(--text-dim)',
            }}>
              {t.label}
            </div>
            <div style={{ marginTop: 4, display: 'flex', gap: 8, alignItems: 'center' }}>
              <span style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>
                {t.sub}
              </span>
              <span style={{ fontSize: 10, color: isActive ? 'var(--warn)' : 'var(--text-faint)' }}>
                [{t.count}]
              </span>
            </div>
            {t.done !== undefined && (
              <div style={{ marginTop: 6 }}>
                <ProgressSegments total={totalTopics} done={t.done} />
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}

export function LfHub({
  lf, progress, onUpdate,
}: {
  lf: Lernfeld;
  progress: LernfeldProgress;
  onUpdate: (p: LernfeldProgress) => void;
}) {
  const [tab, setTab] = useState<Tab>('theory');

  const readIds = progress.theoryRead ?? [];
  const readCount = lf.topics.filter(t => readIds.includes(t.id)).length;
  const runs = progress.simRuns ?? [];
  const bestScore = runs.length ? Math.max(...runs.map(r => r.scorePct)) : null;

  function markRead(id: string) {
    if (readIds.includes(id)) return;
    onUpdate({ ...progress, theoryRead: [...readIds, id] });
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* LF Header */}
      <div style={{
        padding: '20px 24px', borderBottom: '1px solid var(--line)',
        background: 'var(--bg-2)',
      }}>
        <div className="flex gap-12 mb-8" style={{ alignItems: 'center' }}>
          <Bracket tone="warn">{lf.code}</Bracket>
          <Tag tone={lf.threat === 'critical' ? 'warn' : lf.threat === 'elevated' ? 'caution' : 'ok'}>
            {lf.intel}
          </Tag>
          {bestScore !== null && (
            <Tag tone={bestScore >= 70 ? 'ok' : 'warn'}>BEST: {bestScore}%</Tag>
          )}
        </div>
        <h1 style={{ fontSize: 18, letterSpacing: '0.1em', textTransform: 'uppercase', lineHeight: 1.2, marginBottom: 4 }}>
          {lf.name}
        </h1>
        <div className="label muted">// {lf.sub}</div>
      </div>

      {/* Tab bar */}
      <TabBar
        active={tab}
        onChange={setTab}
        counts={{ topics: lf.topics.length, cards: lf.flashcards.length, questions: lf.questions.length }}
        readCount={readCount}
        totalTopics={lf.topics.length}
      />

      {/* Tab content */}
      <div style={{ flex: 1, overflow: 'hidden' }}>
        {tab === 'theory' && (
          <TheoryPage
            topics={lf.topics as any}
            lernfeldId={lf.id as LernfeldId}
            readIds={readIds}
            onMarkRead={markRead}
          />
        )}
        {tab === 'drill' && (
          <div style={{ padding: 24, overflowY: 'auto', height: '100%' }}>
            <DrillPage
              flashcards={lf.flashcards as any}
              progress={progress}
              onUpdate={onUpdate}
            />
          </div>
        )}
        {tab === 'sim' && (
          <div style={{ padding: 24, overflowY: 'auto', height: '100%' }}>
            <SimulationPage
              questions={lf.questions as RawQuestion[]}
              lernfeldId={lf.id as LernfeldId}
              progress={progress}
              onUpdate={onUpdate}
            />
          </div>
        )}
      </div>
    </div>
  );
}
