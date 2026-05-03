import { useCallback, useState } from 'react';
import type { LernfeldId, LernfeldProgress, SimRun } from '../types/learning';
import type { RawQuestion } from '../lib/dataAdapter';
import { DrillRouter } from '../components/drills/DrillRouter';
import { DebriefPanel } from '../components/ui/DebriefPanel';
import { Bracket, KbdHint, ProgressSegments, Tag, TacticalCard } from '../components/ui/Tactical';
import type { DrillResult } from '../components/drills/types';

type SimPhase = 'config' | 'running' | 'debrief';

function diffLabel(d: string) {
  if (d === 'easy')   return { label: 'LEICHT', tone: 'ok'   as const };
  if (d === 'hard')   return { label: 'SCHWER', tone: 'warn' as const };
  return               { label: 'MITTEL', tone: 'caution' as const };
}

export function SimulationPage({
  questions, lernfeldId, progress, onUpdate,
}: {
  questions: RawQuestion[];
  lernfeldId: LernfeldId;
  progress: LernfeldProgress;
  onUpdate: (p: LernfeldProgress) => void;
}) {
  type FilterMode = 'all' | 'wrong' | 'hard';
  const [filterMode, setFilterMode] = useState<FilterMode>('all');
  const [phase, setPhase] = useState<SimPhase>('config');
  const [queue, setQueue] = useState<RawQuestion[]>([]);
  const [cursor, setCursor] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [results, setResults] = useState<Array<{ q: RawQuestion; r: DrillResult }>>([]);
  const [startTs, setStartTs] = useState(0);
  const [currentResult, setCurrentResult] = useState<DrillResult | null>(null);

  // previous wrong question IDs from latest run
  const lastRunWrong = new Set(
    (progress.simRuns[progress.simRuns.length - 1]?.picks ?? [])
      .filter(p => !p.correct)
      .map(p => p.qid),
  );

  function buildQueue(mode: FilterMode): RawQuestion[] {
    let pool = [...questions];
    if (mode === 'wrong') pool = pool.filter(q => lastRunWrong.has(q.id));
    if (mode === 'hard')  pool = pool.filter(q => q.difficulty === 'hard');
    // shuffle
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool;
  }

  function startSim() {
    const q = buildQueue(filterMode);
    if (!q.length) return;
    setQueue(q);
    setCursor(0);
    setResults([]);
    setCurrentResult(null);
    setAnswered(false);
    setStartTs(Date.now());
    setPhase('running');
  }

  const handleAnswer = useCallback((result: DrillResult) => {
    setCurrentResult(result);
    setAnswered(true);
  }, []);

  function next() {
    if (!currentResult) return;
    const qItem = queue[cursor];
    const newResults = [...results, { q: qItem, r: currentResult }];
    setResults(newResults);

    if (cursor + 1 >= queue.length) {
      // compute run
      const tp      = newResults.filter(r => r.r.correct).length;
      const partial = newResults.filter(r => !r.r.correct && r.r.score > 0)
                                .reduce((s, r) => s + r.r.score, 0);
      const total   = queue.length;
      const scorePct = Math.round(((tp + partial) / total) * 100);
      const run: SimRun = {
        ts: Date.now(), lernfeld: lernfeldId,
        total, correct: tp, scorePct,
        picks: newResults.map(r => ({ qid: r.q.id, correct: r.r.correct, userAnswer: r.r.userAnswer })),
        durationS: Math.round((Date.now() - startTs) / 1000),
      };
      onUpdate({ ...progress, simRuns: [...progress.simRuns, run] });
      setPhase('debrief');
    } else {
      setCursor(c => c + 1);
      setAnswered(false);
      setCurrentResult(null);
    }
  }

  // ── CONFIG ─────────────────────────────────────────────────────────────────
  if (phase === 'config') {
    const lastRun = progress.simRuns[progress.simRuns.length - 1];
    return (
      <div className="flex col gap-24">
        <Bracket tone="warn">SIMULATION // EINSATZ-KONFIGURATION</Bracket>

        {lastRun && (
          <TacticalCard title="LETZTER RUN" status={new Date(lastRun.ts).toLocaleDateString('de-DE')}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              <div>
                <div className="label mb-4">SCORE</div>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: 32,
                  color: lastRun.scorePct >= 70 ? 'var(--confirm)' : 'var(--warn)',
                }}>
                  {lastRun.scorePct}%
                </div>
              </div>
              <div>
                <div className="label mb-4">KORREKT</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 32 }}>
                  {lastRun.correct}/{lastRun.total}
                </div>
              </div>
              <div>
                <div className="label mb-4">DAUER</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 32 }}>
                  {Math.floor(lastRun.durationS / 60)}m{lastRun.durationS % 60}s
                </div>
              </div>
            </div>
          </TacticalCard>
        )}

        <TacticalCard title="FRAGENMENGE">
          {[
            { m: 'all',   label: `ALLE FRAGEN (${questions.length})`,            desc: 'Gesamte Fragenbasis' },
            { m: 'wrong', label: `WIEDERHOLUNG FEHLER (${lastRunWrong.size})`,   desc: 'Nur falsche Fragen aus letztem Run', disabled: lastRunWrong.size === 0 },
            { m: 'hard',  label: `NUR SCHWER (${questions.filter(q => q.difficulty === 'hard').length})`, desc: 'Schwierigkeitsgrad: hard' },
          ].map(({ m, label, desc, disabled }) => (
            <div
              key={m}
              className={`choice ${filterMode === m ? 'selected' : ''} ${disabled ? '' : ''}`}
              onClick={() => !disabled && setFilterMode(m as FilterMode)}
              style={{ cursor: disabled ? 'not-allowed' : 'pointer', marginBottom: 6, opacity: disabled ? 0.4 : 1 }}
            >
              <span className="key">{m === 'all' ? 'A' : m === 'wrong' ? 'B' : 'C'}</span>
              <span className="body">
                <span className="lead">{label}</span>
                <span className="meta">{desc}</span>
              </span>
            </div>
          ))}
        </TacticalCard>

        <button className="tbtn primary" onClick={startSim}
          disabled={(filterMode === 'wrong' && lastRunWrong.size === 0)}>
          SIMULATION STARTEN
        </button>
      </div>
    );
  }

  // ── RUNNING ────────────────────────────────────────────────────────────────
  if (phase === 'running') {
    const q = queue[cursor];
    const { label: dLabel, tone: dTone } = diffLabel(q.difficulty);

    return (
      <div className="flex col gap-16">
        <div className="row-between">
          <Bracket tone="warn">SIMULATION</Bracket>
          <div className="flex gap-16" style={{ alignItems: 'center' }}>
            <Tag tone={dTone}>{dLabel}</Tag>
            <span className="label">{cursor + 1} / {queue.length}</span>
            <KbdHint keys={['ENTER']} label="WEITER" />
          </div>
        </div>

        <ProgressSegments total={queue.length} done={cursor} active={!answered} />

        <div className="tcard bordered corner-marks">
          <div className="tcard-head">
            <span>
              <span className={`dot ${answered ? (currentResult?.correct ? 'ok' : 'live') : 'live'}`} />
              FRAGE {String(cursor + 1).padStart(2, '0')} // {q.category}
            </span>
            <span className="label">{q.id}</span>
          </div>
          <div className="tcard-body">
            {/* Question text */}
            {q.type !== 'case' && (
              <div style={{
                fontSize: 15, lineHeight: 1.6, marginBottom: 20,
                fontFamily: 'var(--font-mono)', color: 'var(--text)',
              }}>
                {q.question}
              </div>
            )}

            <DrillRouter
              question={q as any}
              onAnswer={handleAnswer}
              active={!answered}
            />

            {/* Feedback + explanation */}
            {answered && currentResult && (
              <div className={`feedback ${currentResult.correct ? 'ok' : 'bad'} mt-16`}>
                <div className="label mb-8">
                  {currentResult.correct ? '✓ KORREKT' : '✗ FALSCH / UNVOLLSTÄNDIG'}
                </div>
                <div style={{ fontSize: 12, lineHeight: 1.65 }}>{q.explanation}</div>
              </div>
            )}
          </div>
        </div>

        {answered && (
          <button
            className="tbtn primary"
            onClick={next}
          >
            {cursor + 1 >= queue.length ? 'SIMULATION ABSCHLIESSEN' : 'NÄCHSTE FRAGE'}
          </button>
        )}
      </div>
    );
  }

  // ── DEBRIEF ────────────────────────────────────────────────────────────────
  const lastRun = progress.simRuns[progress.simRuns.length - 1]!;
  const tp      = results.filter(r => r.r.correct).length;
  const partial = results.reduce((s, r) => s + (!r.r.correct ? r.r.score : 0), 0);
  const pct     = Math.round(((tp + partial) / (queue.length || 1)) * 100);

  return (
    <DebriefPanel
      title="AFTER-ACTION REPORT // SIMULATION"
      scorePct={pct}
      passed={pct >= 60}
      stats={[
        { label: 'FRAGEN',   value: queue.length },
        { label: 'KORREKT',  value: tp, tone: 'ok' },
        { label: 'SCORE',    value: pct + '%', tone: pct >= 70 ? 'ok' : 'warn' },
        { label: 'DAUER',    value: `${Math.floor(lastRun.durationS / 60)}m ${lastRun.durationS % 60}s` },
      ]}
      picks={results.map(r => ({
        label: r.q.question.slice(0, 80) + (r.q.question.length > 80 ? '…' : ''),
        correct: r.r.correct,
        scorePct: Math.round(r.r.score * 100),
        detail: r.r.correct ? undefined : r.q.explanation.slice(0, 100) + '…',
      }))}
      reflectionQuestions={[
        'Welche Kategorie war am schwierigsten? Was ist der Grund?',
        'Welche Begriffe muss ich noch einmal im Briefing nachschlagen?',
      ]}
      onReset={startSim}
      onContinue={() => setPhase('config')}
    />
  );
}
