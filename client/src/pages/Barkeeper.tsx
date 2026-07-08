import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { CineImg } from '@/components/izure/primitives';
import { Badge, Button, Card, GlassSurface } from '@/components/primitives';
import { IMG } from '@/lib/atmosphere';

// Sonar-Sweep-Ambient (Masterplan Phase 9) — liegt HINTER dem Voll-Glas-Panel,
// das Glas blurrt den Sweep (One-Way-Glass-Metapher). Lazy, nur diese View.
const MarcoAmbient = lazy(() => import('@/components/izure/MarcoAmbient'));

interface Msg {
  role: 'house' | 'you' | 'marco';
  text: string;
}

const STOCK_REPLIES = [
  "Hm. That's a long way of asking for an espresso. Coming up.",
  "I'd think on that one a bit longer. Patience tastes better.",
  "You want my honest answer or my barkeeper answer? They're not the same.",
  'Try me again after the second drink. Everything sounds smarter.',
  "I'd say yes. Quietly. And only if no one's watching.",
  "Marco's been around long enough to know — never trust a question that wears a tie.",
];

export default function BarkeeperPage() {
  const [messages, setMessages] = useState<Msg[]>([
    { role: 'house', text: 'Apologies — Marco is still on his break. Take a seat. He pours when he\'s ready.' },
  ]);
  const [draft, setDraft] = useState('');
  const [thinking, setThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 99999, behavior: 'smooth' });
  }, [messages, thinking]);

  const send = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!draft.trim()) return;
    const userMsg: Msg = { role: 'you', text: draft };
    setMessages((m) => [...m, userMsg]);
    setDraft('');
    setThinking(true);
    setTimeout(() => {
      const reply = STOCK_REPLIES[Math.floor(Math.random() * STOCK_REPLIES.length)];
      setMessages((m) => [...m, { role: 'marco', text: reply }]);
      setThinking(false);
    }, 1200 + Math.random() * 1200);
  };

  return (
    <div className="page-root" data-screen-label="07 Private · Barkeeper">
      <Suspense fallback={null}>
        <MarcoAmbient />
      </Suspense>
      <section style={{ paddingTop: 120, paddingBottom: 40, position: 'relative' }}>
        <div className="shell">
          <div className="t-label" style={{ color: 'var(--accent-primary)', marginBottom: 22 }}>
            · Room 02 · The Barkeeper · In residence: Marco
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 60, alignItems: 'end' }}>
            <h1 className="t-display" style={{ fontSize: 'clamp(56px, 8vw, 112px)', lineHeight: 0.95 }}>
              He's still
              <br />
              <span className="italic">drying glasses.</span>
            </h1>
            <div style={{ paddingBottom: 16 }}>
              <Badge>Opening soon</Badge>
              <p className="t-body" style={{ marginTop: 22, maxWidth: 380 }}>
                The KI Barkeeper is in training. For now he answers in mood, not in facts — the full character comes
                later, with you in the room.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '40px 0 120px' }}>
        <div className="shell">
          <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 12, alignItems: 'stretch', position: 'relative', zIndex: 1 }}>
            <Card variant="default" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden', borderRadius: 8 }}>
                <CineImg src={IMG.hero_bar} alt="Marco" style={{ position: 'absolute', inset: 0 }} />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)',
                  }}
                />
                <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24 }}>
                  <div className="t-label" style={{ color: 'var(--accent-primary)', marginBottom: 8 }}>
                    Bartender · since '78
                  </div>
                  <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 40, lineHeight: 1.05, color: '#F4F4F4' }}>
                    Marco
                  </h3>
                </div>
              </div>
              <div style={{ padding: '28px 24px' }}>
                <p className="t-body" style={{ fontSize: 13, fontStyle: 'italic', marginBottom: 20 }}>
                  "Has opinions about your day. Knows when to pour and when to shut up. Quotes Camus before he quotes the
                  menu."
                </p>
                <dl style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '10px 16px' }}>
                  {[
                    ['Drink', 'Negroni · stirred'],
                    ['Cigar', 'Cohiba Robusto'],
                    ['Music', 'Side B, low'],
                    ['Tongue', 'EN · IT · ein bisschen DE'],
                  ].map(([k, v]) => (
                    <div key={k} style={{ display: 'contents' }}>
                      <dt className="t-label" style={{ fontSize: 9, color: 'var(--accent)', paddingTop: 3 }}>
                        {k}
                      </dt>
                      <dd className="t-body" style={{ fontSize: 12 }}>
                        {v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Card>

            {/* Marco-Interface: einziger Voll-Glas-Ort außerhalb von Modals
                (Blueprint 6.1) — blickt auf den Sonar-Sweep dahinter. */}
            <GlassSurface
              variant="full"
              style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: 560,
                padding: 0,
              }}
            >
              <div
                style={{
                  padding: '20px 28px',
                  borderBottom: '1px solid var(--border-hairline)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span className="t-label" style={{ color: 'var(--accent)' }}>
                  · Conversation · 02:14am
                </span>
                <span className="t-label" style={{ fontSize: 9, color: 'var(--text-muted)' }}>
                  HE'S LISTENING
                </span>
              </div>

              <div
                ref={scrollRef}
                style={{ flex: 1, padding: '32px 28px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 28 }}
              >
                {messages.map((m, i) => (
                  <ChatLine key={i} m={m} />
                ))}
                {thinking && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--text-muted)' }}>
                    <span className="t-label" style={{ fontSize: 9, color: 'var(--accent)' }}>
                      MARCO
                    </span>
                    <span style={{ display: 'inline-flex', gap: 4 }}>
                      {[0, 200, 400].map((d) => (
                        <span
                          key={d}
                          style={{
                            width: 4,
                            height: 4,
                            background: 'var(--accent)',
                            borderRadius: '50%',
                            animation: `pulse 1.2s ${d}ms infinite ease-in-out`,
                          }}
                        ></span>
                      ))}
                    </span>
                  </div>
                )}
              </div>

              <form
                onSubmit={send}
                style={{
                  borderTop: '1px solid var(--border-hairline)',
                  padding: '16px 24px',
                  display: 'flex',
                  gap: 14,
                  alignItems: 'center',
                }}
              >
                <input
                  type="text"
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder="Ask him anything. Or nothing."
                  aria-label="Nachricht an Marco"
                  style={{
                    flex: 1,
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: 16,
                    color: 'var(--text-primary)',
                    padding: '8px 0',
                  }}
                />
                <Button type="submit">Pour</Button>
              </form>
            </GlassSurface>
          </div>
        </div>
      </section>
    </div>
  );
}

function ChatLine({ m }: { m: Msg }) {
  const isYou = m.role === 'you';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: isYou ? 'flex-end' : 'flex-start' }}>
      <div
        className="t-label"
        style={{
          fontSize: 9,
          color: isYou ? 'var(--text-muted)' : 'var(--accent)',
          marginBottom: 6,
        }}
      >
        {m.role === 'you' ? 'YOU' : m.role === 'marco' ? 'MARCO' : 'HOUSE'}
      </div>
      <p
        style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontStyle: m.role !== 'you' ? 'italic' : 'normal',
          fontSize: 19,
          lineHeight: 1.45,
          maxWidth: '85%',
          color: m.role === 'house' ? 'var(--text-muted)' : 'var(--text-primary)',
          borderLeft: !isYou ? '1px solid var(--accent-dim)' : 'none',
          borderRight: isYou ? '1px solid var(--line-subtle)' : 'none',
          paddingLeft: !isYou ? 16 : 0,
          paddingRight: isYou ? 16 : 0,
        }}
      >
        {m.text}
      </p>
    </div>
  );
}
