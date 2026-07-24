import { useEffect, useRef, useState } from 'react';
import { useOrb } from '../widgets';

interface Msg { role: 'marco' | 'me'; text: string }

/* Marco — Chat-UI. Antworten bleiben simuliert (wie zuvor in
   pages/Barkeeper.tsx — dieselbe STOCK_REPLIES-Logik übernommen),
   aber der Senden-Button funktioniert jetzt tatsächlich (im Handoff
   selbst hatte weder #mcSend noch #mcInput irgendeinen Handler). */
const REPLIES = [
  "Hm. That's a long way of asking for an espresso. Coming up.",
  "I'd think on that one a bit longer. Patience tastes better.",
  "You want my honest answer or my barkeeper answer? They're not the same.",
  'Try me again after the second drink. Everything sounds smarter.',
  "I'd say yes. Quietly. And only if no one's watching.",
  "Marco's been around long enough to know — never trust a question that wears a tie.",
];
const PROMPTS = [
  'Fasse mein Lernfeld zusammen',
  'Erstelle 10 Karteikarten',
  'Plane meine Woche',
  'Erklär mir das nochmal einfacher',
];

export default function MarcoView({ active }: { active: boolean }) {
  const [messages, setMessages] = useState<Msg[]>([
    { role: 'marco', text: 'Guten Abend. Sag mir, woran du gerade arbeitest — ich helfe, so gut es geht.' },
  ]);
  const [draft, setDraft] = useState('');
  const [thinking, setThinking] = useState(false);
  const threadRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLCanvasElement>(null);
  useOrb(orbRef, 100, 46, active);

  useEffect(() => { threadRef.current?.scrollTo({ top: 99999, behavior: 'smooth' }); }, [messages, thinking]);

  const send = (text: string) => {
    if (!text.trim() || thinking) return;
    setMessages((m) => [...m, { role: 'me', text }]);
    setDraft('');
    setThinking(true);
    setTimeout(() => {
      setMessages((m) => [...m, { role: 'marco', text: REPLIES[Math.floor(Math.random() * REPLIES.length)] }]);
      setThinking(false);
    }, 1200 + Math.random() * 1200);
  };

  return (
    <div className="marco-grid">
      <aside className="po-card pad mc-side">
        <div className="mc-orb"><canvas ref={orbRef} width={120} height={120} /></div>
        <div className="mc-id"><b className="fr">Marco</b><span className="mono dim">Studien-Copilot</span></div>
        <div className="mc-status"><i className="live" />Simuliert · kein Backend</div>
        <div className="mc-cap t-label">Vorschläge</div>
        <div className="mc-prompts">
          {PROMPTS.map((p) => <button key={p} className="mc-pr" onClick={() => send(p)}>{p}</button>)}
        </div>
      </aside>
      <div className="mc-main">
        <div className="mc-thread scry" ref={threadRef}>
          {messages.map((m, i) => (
            <div key={i} className={`msg ${m.role === 'marco' ? 'marco' : 'me'}`}>
              {m.role === 'marco' && <div className="msg-av">M</div>}
              <div className="msg-b"><p>{m.text}</p></div>
            </div>
          ))}
          {thinking && (
            <div className="msg marco"><div className="msg-av">M</div><div className="msg-b"><span className="po-eq"><i /><i /><i /></span></div></div>
          )}
        </div>
        <form className="mc-input" onSubmit={(e) => { e.preventDefault(); send(draft); }}>
          <input type="text" value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Frag Marco …" aria-label="Nachricht an Marco" />
          <button type="submit" className="po-iconb send" aria-label="Senden">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" /></svg>
          </button>
        </form>
      </div>
    </div>
  );
}
