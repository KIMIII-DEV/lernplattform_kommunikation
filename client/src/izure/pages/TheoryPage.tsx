import { useState } from 'react';
import type { LernfeldId } from '../types/learning';
import type { RawTopic } from '../lib/dataAdapter';
import { Bracket, Tag, TacticalCard } from '../components/ui/Tactical';

// Parse the **bold** + bullet markdown used in learningData.ts content fields
function parseContent(raw: string): Array<{ type: 'text' | 'bold' | 'bullet' | 'heading'; text: string }> {
  const lines = raw.split('\n');
  const out: Array<{ type: 'text' | 'bold' | 'bullet' | 'heading'; text: string }> = [];
  for (const line of lines) {
    const t = line.trim();
    if (!t) continue;
    if (t.startsWith('**') && t.endsWith('**') && !t.slice(2, -2).includes('**')) {
      out.push({ type: 'heading', text: t.slice(2, -2) });
    } else if (t.startsWith('- ')) {
      // replace **x** within bullet
      out.push({ type: 'bullet', text: t.slice(2) });
    } else {
      out.push({ type: 'text', text: t });
    }
  }
  return out;
}

function InlineText({ text }: { text: string }) {
  // render **bold** spans inline
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith('**') && p.endsWith('**') ? (
          <strong key={i} style={{ color: 'var(--text)', fontWeight: 600 }}>
            {p.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </>
  );
}

function TopicDetail({ topic, onMark, isRead }: {
  topic: RawTopic;
  onMark: () => void;
  isRead: boolean;
}) {
  const blocks = parseContent(topic.content);
  const relevanceTone: 'warn' | 'ok' | 'caution' =
    topic.examRelevance === 'high' ? 'warn' : topic.examRelevance === 'medium' ? 'caution' : 'ok';
  const relevanceLabel =
    topic.examRelevance === 'high' ? 'PRÜFUNGSRELEVANT' :
    topic.examRelevance === 'medium' ? 'RELEVANT' : 'OPTIONAL';

  return (
    <div className="flex col gap-16">
      {/* Header */}
      <div style={{ borderBottom: '1px solid var(--line)', paddingBottom: 16 }}>
        <div className="flex gap-12 mb-8" style={{ alignItems: 'center' }}>
          <Tag tone={relevanceTone}>{relevanceLabel}</Tag>
          {isRead && <Tag tone="ok">BRIEFING ABGESCHLOSSEN</Tag>}
        </div>
        <h2 style={{ fontSize: 22, letterSpacing: '0.12em', textTransform: 'uppercase', lineHeight: 1.2 }}>
          {topic.title}
        </h2>
        <p style={{ marginTop: 8, color: 'var(--text-dim)', fontSize: 13, lineHeight: 1.6 }}>
          {topic.description}
        </p>
      </div>

      {/* Content */}
      <div style={{ fontSize: 13, lineHeight: 1.75, color: 'var(--text-dim)' }}>
        {blocks.map((b, i) => {
          if (b.type === 'heading') {
            return (
              <div key={i} style={{
                fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'var(--text)', marginTop: 20, marginBottom: 6,
              }}>
                <span style={{ color: 'var(--warn)' }}>// </span>{b.text}
              </div>
            );
          }
          if (b.type === 'bullet') {
            return (
              <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 4 }}>
                <span style={{ color: 'var(--warn)', flexShrink: 0, marginTop: 1 }}>▸</span>
                <span><InlineText text={b.text} /></span>
              </div>
            );
          }
          return (
            <p key={i} style={{ marginBottom: 6 }}>
              <InlineText text={b.text} />
            </p>
          );
        })}
      </div>

      {/* Key Points */}
      {topic.keyPoints.length > 0 && (
        <TacticalCard title="SCHLÜSSELPUNKTE" statusTone="ok" marks>
          <div className="flex col gap-8">
            {topic.keyPoints.map((kp, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, fontSize: 13, alignItems: 'flex-start' }}>
                <span style={{
                  fontFamily: 'var(--font-display)', fontSize: 11, color: 'var(--warn)',
                  paddingTop: 2, flexShrink: 0,
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <InlineText text={kp} />
              </div>
            ))}
          </div>
        </TacticalCard>
      )}

      {/* Mark as read */}
      {!isRead && (
        <button className="tbtn primary" onClick={onMark}>
          BRIEFING ABSCHLIESSEN — NÄCHSTES THEMA
        </button>
      )}
      {isRead && (
        <div className="feedback ok" style={{ fontSize: 12 }}>
          ✓ Dieses Briefing wurde als gelesen markiert. Fortschritt gespeichert.
        </div>
      )}
    </div>
  );
}

export function TheoryPage({
  topics, readIds, onMarkRead,
}: {
  topics: RawTopic[];
  lernfeldId: LernfeldId;
  readIds: string[];
  onMarkRead: (id: string) => void;
}) {
  const [selected, setSelected] = useState<string | null>(topics[0]?.id ?? null);
  const selectedTopic = topics.find(t => t.id === selected);
  const readCount = topics.filter(t => readIds.includes(t.id)).length;

  if (topics.length === 0) {
    return (
      <div style={{ padding: 40, textAlign: 'center', color: 'var(--text-dim)' }}>
        <Bracket tone="warn">KEINE TOPICS GELADEN</Bracket>
        <p style={{ marginTop: 16, fontSize: 12 }}>
          Prüfe learningData.ts — für dieses Lernfeld sind keine Topics vorhanden.
        </p>
      </div>
    );
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 0, height: '100%' }}>
      {/* Topic list */}
      <div style={{ borderRight: '1px solid var(--line)', padding: '16px 0', overflowY: 'auto' }}>
        <div style={{ padding: '0 16px 12px', borderBottom: '1px solid var(--line)' }}>
          <div className="label mb-4">BRIEFING-DOKUMENTE</div>
          <div className="label muted">{readCount}/{topics.length} ABGESCHLOSSEN</div>
          {/* progress bar */}
          <div style={{ display: 'flex', gap: 1, marginTop: 8, height: 4 }}>
            {topics.map(t => (
              <div key={t.id} style={{
                flex: 1,
                background: readIds.includes(t.id) ? 'var(--confirm)' :
                  t.id === selected ? 'var(--warn)' : 'var(--line)',
              }} />
            ))}
          </div>
        </div>
        {topics.map((t, i) => {
          const isRead = readIds.includes(t.id);
          const isActive = t.id === selected;
          const tone = isRead ? 'ok' : t.examRelevance === 'high' ? 'warn' : '';
          return (
            <div
              key={t.id}
              onClick={() => setSelected(t.id)}
              style={{
                padding: '12px 16px', cursor: 'pointer',
                borderLeft: `2px solid ${isActive ? 'var(--warn)' : 'transparent'}`,
                background: isActive ? 'var(--bg-3)' : 'transparent',
                transition: 'background 0.08s',
              }}
            >
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 4 }}>
                <span style={{
                  fontSize: 9, fontFamily: 'var(--font-mono)', letterSpacing: '0.2em',
                  color: isActive ? 'var(--warn)' : 'var(--text-faint)',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                {isRead && <span style={{ color: 'var(--confirm)', fontSize: 10 }}>✓</span>}
                {t.examRelevance === 'high' && !isRead && (
                  <span style={{ color: 'var(--warn)', fontSize: 9, letterSpacing: '0.2em' }}>★</span>
                )}
              </div>
              <div style={{
                fontSize: 12, color: isActive ? 'var(--text)' : 'var(--text-dim)',
                lineHeight: 1.4,
              }}>
                {t.title}
              </div>
            </div>
          );
        })}
      </div>

      {/* Topic content */}
      <div style={{ padding: 24, overflowY: 'auto' }}>
        {selectedTopic ? (
          <TopicDetail
            topic={selectedTopic}
            isRead={readIds.includes(selectedTopic.id)}
            onMark={() => {
              onMarkRead(selectedTopic.id);
              // auto-advance to next unread
              const nextUnread = topics.find(t => !readIds.includes(t.id) && t.id !== selectedTopic.id);
              if (nextUnread) setSelected(nextUnread.id);
            }}
          />
        ) : (
          <div className="center" style={{ height: 200 }}>
            <span className="muted label">THEMA AUSWÄHLEN</span>
          </div>
        )}
      </div>
    </div>
  );
}
