import { useCallback, useMemo, useState } from 'react';
import type { LernfeldProgress } from '../types/learning';
import type { RawFlashcard } from '../lib/dataAdapter';
import { FlashcardDrill } from '../components/drills/FlashcardDrill';
import { Bracket, BigNumber, KbdHint, ProgressSegments, Tag, TacticalCard } from '../components/ui/Tactical';
import type { DrillResult } from '../components/drills/types';

type DrillMode = 'all' | 'wrong' | 'category';
type Phase = 'config' | 'drill' | 'summary';

interface CardScore { right: number; wrong: number }

export function DrillPage({
  flashcards, progress, onUpdate,
}: {
  flashcards: RawFlashcard[];
  progress: LernfeldProgress;
  onUpdate: (p: LernfeldProgress) => void;
}) {
  const categories = useMemo(() => [...new Set(flashcards.map(f => f.category))], [flashcards]);
  const [mode, setMode] = useState<DrillMode>('all');
  const [filterCat, setFilterCat] = useState<string>('ALL');
  const [phase, setPhase] = useState<Phase>('config');
  const [queue, setQueue] = useState<RawFlashcard[]>([]);
  const [cursor, setCursor] = useState(0);
  const [results, setResults] = useState<Array<{ card: RawFlashcard; result: DrillResult }>>([]);

  const stats = progress.drillStats;
  const scores: Record<string, CardScore> = stats.cardScores ?? {};

  function buildQueue() {
    let pool = [...flashcards];
    if (mode === 'wrong') {
      pool = pool.filter(f => (scores[f.id]?.wrong ?? 0) > 0);
    }
    if (filterCat !== 'ALL') {
      pool = pool.filter(f => f.category === filterCat);
    }
    // Fisher-Yates shuffle
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool;
  }

  function startDrill() {
    const q = buildQueue();
    if (!q.length) return;
    setQueue(q);
    setCursor(0);
    setResults([]);
    setPhase('drill');
  }

  const handleAnswer = useCallback((result: DrillResult) => {
    const card = queue[cursor];
    setResults(prev => [...prev, { card, result }]);

    // update progress
    const newScores = { ...scores };
    const prev = newScores[card.id] ?? { right: 0, wrong: 0 };
    newScores[card.id] = result.correct
      ? { right: prev.right + 1, wrong: prev.wrong }
      : { right: prev.right, wrong: prev.wrong + 1 };

    const newSeen = stats.seen + 1;
    const newCorrect = stats.correct + (result.correct ? 1 : 0);
    const newStreak = result.correct ? stats.streak + 1 : 0;

    onUpdate({
      ...progress,
      drillStats: { seen: newSeen, correct: newCorrect, streak: newStreak, cardScores: newScores },
    });

    if (cursor + 1 >= queue.length) {
      setTimeout(() => setPhase('summary'), 400);
    } else {
      setTimeout(() => setCursor(c => c + 1), 400);
    }
  }, [cursor, queue, scores, stats, progress, onUpdate]);

  // ── CONFIG ─────────────────────────────────────────────────────────────────
  if (phase === 'config') {
    const wrongCount = flashcards.filter(f => (scores[f.id]?.wrong ?? 0) > 0).length;
    return (
      <div className="flex col gap-24">
        <div>
          <Bracket tone="warn" className="mb-12">DRILL-KONFIGURATION</Bracket>
          <h2 style={{ fontSize: 20, letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 12 }}>
            {flashcards.length} KARTEN VERFÜGBAR
          </h2>
        </div>

        <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <div style={{ padding: 16 }}>
            <BigNumber value={stats.seen} label="GESEHEN GESAMT" />
          </div>
          <div style={{ padding: 16 }}>
            <BigNumber
              value={stats.seen ? Math.round((stats.correct / stats.seen) * 100) + '%' : '—'}
              label="TREFFERQUOTE"
              tone={stats.seen > 0 && stats.correct / stats.seen >= 0.7 ? 'ok' : undefined}
            />
          </div>
          <div style={{ padding: 16 }}>
            <BigNumber value={stats.streak} label="CURRENT STREAK" tone={stats.streak >= 5 ? 'ok' : undefined} />
          </div>
        </div>

        <TacticalCard title="MODUS" status="WÄHLE DRILL-TYP">
          <div className="flex col gap-8">
            {[
              { m: 'all',      label: `ALLE KARTEN (${flashcards.length})`,     desc: 'Komplette Kartenmenge, zufällig' },
              { m: 'wrong',    label: `NUR FEHLER (${wrongCount})`,              desc: 'Nur Karten, die du bisher falsch hattest' },
              { m: 'category', label: `NACH KATEGORIE`,                          desc: 'Gefiltert nach Themenbereich' },
            ].map(({ m, label, desc }) => (
              <div
                key={m}
                className={`choice ${mode === m ? 'selected' : ''}`}
                onClick={() => setMode(m as DrillMode)}
                style={{ cursor: 'pointer' }}
              >
                <span className="key">{m === 'all' ? 'A' : m === 'wrong' ? 'B' : 'C'}</span>
                <span className="body">
                  <span className="lead">{label}</span>
                  <span className="meta">{desc}</span>
                </span>
              </div>
            ))}
          </div>
        </TacticalCard>

        {mode === 'category' && (
          <TacticalCard title="KATEGORIE WÄHLEN">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['ALL', ...categories].map(c => (
                <button
                  key={c}
                  className={`tbtn ${filterCat === c ? 'primary' : 'ghost'}`}
                  onClick={() => setFilterCat(c)}
                  style={{ padding: '8px 14px', fontSize: 10 }}
                >
                  {c}
                </button>
              ))}
            </div>
          </TacticalCard>
        )}

        <button
          className="tbtn primary"
          onClick={startDrill}
          disabled={(mode === 'wrong' && wrongCount === 0)}
        >
          DRILL STARTEN
        </button>
        {mode === 'wrong' && wrongCount === 0 && (
          <div className="feedback ok" style={{ fontSize: 12 }}>
            Keine Fehler-Karten vorhanden — alle bisher korrekt beantwortet.
          </div>
        )}
      </div>
    );
  }

  // ── DRILL ──────────────────────────────────────────────────────────────────
  if (phase === 'drill') {
    const card = queue[cursor];
    return (
      <div className="flex col gap-16">
        <div className="row-between">
          <Bracket tone="warn">DRILL // AKTIVER ABRUF</Bracket>
          <div className="flex gap-16" style={{ alignItems: 'center' }}>
            <KbdHint keys={['SPACE']} label="AUFDECKEN" />
            <span className="label">{cursor + 1} / {queue.length}</span>
          </div>
        </div>

        <ProgressSegments total={queue.length} done={cursor} active />

        <div className="tcard bordered corner-marks">
          <div className="tcard-head">
            <span>
              <span className="dot live" />
              KARTE {String(cursor + 1).padStart(2, '0')} // {card.category}
            </span>
            <Tag>{card.id}</Tag>
          </div>
          <div className="tcard-body">
            <FlashcardDrill
              key={card.id}
              card={card}
              onAnswer={handleAnswer}
              active
            />
          </div>
        </div>

        <button className="tbtn ghost" onClick={() => setPhase('config')} style={{ alignSelf: 'flex-start' }}>
          ABBRECHEN
        </button>
      </div>
    );
  }

  // ── SUMMARY ────────────────────────────────────────────────────────────────
  const correct = results.filter(r => r.result.correct).length;
  const partial = results.filter(r => !r.result.correct && r.result.score > 0).length;
  const wrong   = results.filter(r => r.result.score === 0).length;
  const pct     = Math.round((correct + partial * 0.5) / (results.length || 1) * 100);
  const passed  = pct >= 70;

  return (
    <div className="flex col gap-24">
      <div className="corner-marks" style={{
        padding: 32, background: 'var(--bg-2)',
        border: `1px solid ${passed ? 'var(--confirm)' : 'var(--warn)'}`,
        position: 'relative',
      }}>
        <div className="label mb-16">DRILL ABGESCHLOSSEN</div>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          <div><BigNumber value={String(pct) + '%'} label="GESAMT-SCORE" tone={passed ? 'ok' : 'warn'} /></div>
          <div><BigNumber value={correct} label="WUSSTE ICH" tone="ok" /></div>
          <div><BigNumber value={partial} label="TEILS" /></div>
          <div><BigNumber value={wrong} label="FALSCH" tone={wrong > 0 ? 'warn' : undefined} /></div>
        </div>
      </div>

      <TacticalCard title="CARD-REVIEW">
        <table className="ttable">
          <thead>
            <tr>
              <th style={{ width: 60 }}>#</th>
              <th>FRAGE</th>
              <th style={{ width: 100 }}>EVAL</th>
            </tr>
          </thead>
          <tbody>
            {results.map((r, i) => (
              <tr key={i}>
                <td className="muted">{String(i + 1).padStart(2, '0')}</td>
                <td style={{ fontSize: 12 }}>{r.card.question}</td>
                <td>
                  {r.result.correct
                    ? <Tag tone="ok">KORREKT</Tag>
                    : r.result.score > 0
                      ? <Tag tone="caution">TEILWEISE</Tag>
                      : <Tag tone="warn">FALSCH</Tag>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TacticalCard>

      <div className="flex gap-12">
        <button className="tbtn primary" onClick={startDrill}>WIEDERHOLEN</button>
        <button className="tbtn ghost" onClick={() => setPhase('config')}>ZURÜCK ZUR AUSWAHL</button>
      </div>
    </div>
  );
}
