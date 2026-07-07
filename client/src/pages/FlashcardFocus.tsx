import { useState } from 'react';
import { Badge, Button, Card, Progress } from '@/components/primitives';
import type { Flashcard } from '@/lib/learningData';

/* IZURE Flashcard-Fokus-View — Masterplan v3, Phase 7 (Blueprint 5.4).
   Vollbild, ein Element im Zentrum. Kein Chrome außer der dünnen
   Fortschrittsleiste oben und dem Rückweg zum Dossier; das Siegel (z 900)
   kommt aus der Shell und bleibt sichtbar. Das Overlay (z 150) liegt über
   der Rail (z 100) — "keine Sidebar sichtbar" ohne Shell-Umbau. */

export default function FlashcardFocus({
  cards,
  lfLabel,
  onExit,
}: {
  cards: Flashcard[];
  lfLabel: string;
  onExit: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const card = cards[idx];

  const next = () => {
    setFlipped(false);
    setIdx((idx + 1) % cards.length);
  };
  const prev = () => {
    setFlipped(false);
    setIdx((idx - 1 + cards.length) % cards.length);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 150,
        background: 'var(--bg-base)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Progress value={idx + 1} max={cards.length} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 28px' }}>
        <button
          onClick={onExit}
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--text-tertiary)',
            cursor: 'pointer',
            transition: 'color var(--motion-micro)',
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
          onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-tertiary)')}
        >
          ← Dossier
        </button>
        <span
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 500,
            fontSize: 'var(--fs-data)',
            fontVariantNumeric: 'tabular-nums',
            color: 'var(--text-secondary)',
          }}
        >
          {idx + 1} / {cards.length}
        </span>
      </div>

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 28px' }}>
        <div style={{ width: '100%', maxWidth: 720 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <Badge>{card.category}</Badge>
            <Badge>{lfLabel}</Badge>
          </div>
          <Card
            variant="default"
            role="button"
            tabIndex={0}
            onClick={() => setFlipped(!flipped)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setFlipped(!flipped);
              }
            }}
            style={{ minHeight: 320, cursor: 'pointer', padding: '44px 40px' }}
          >
            <div className="t-label" style={{ fontSize: 9, color: flipped ? 'var(--accent-primary-bright)' : 'var(--accent-primary)', marginBottom: 20 }}>
              {flipped ? '· Antwort ·' : '· Frage ·'}
            </div>
            <p
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: flipped ? 400 : 600,
                fontSize: flipped ? 17 : 24,
                lineHeight: 1.45,
                color: 'var(--text-primary)',
                whiteSpace: 'pre-wrap',
              }}
            >
              {flipped ? card.answer : card.question}
            </p>
          </Card>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 24 }}>
            <button
              onClick={prev}
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
              }}
            >
              ← Zurück
            </button>
            <Button onClick={() => setFlipped(!flipped)}>{flipped ? 'Frage' : 'Aufdecken'}</Button>
            <button
              onClick={next}
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
              }}
            >
              Weiter →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
