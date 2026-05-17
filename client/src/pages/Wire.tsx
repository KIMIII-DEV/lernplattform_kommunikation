import { useState } from 'react';
import { CineImg, GhostText } from '@/components/izure/primitives';
import { IMG } from '@/lib/atmosphere';

const STORIES = [
  {
    tag: 'CULTURE',
    mins: 4,
    time: '11:08 PM',
    title: 'Vinyl outsells CDs for the fourth year running.',
    body:
      'The record industry continues a quiet reversal — analog format sales overtook compact discs again this quarter, with independent pressing plants reporting backlogs into the autumn. The barkeeper notes: "people want to hold the thing again."',
    take: 'MARCO\'S TAKE — "You can\'t cheat a needle. That\'s why."',
  },
  {
    tag: 'POLITICS',
    mins: 6,
    time: '10:42 PM',
    title: 'European leaders quietly walk back AI regulation in late-night session.',
    body:
      'Behind closed doors in Brussels, the most contentious provisions of the AI Act enforcement framework were softened ahead of a Q3 implementation deadline, according to three sources familiar with the talks.',
    take: 'MARCO\'S TAKE — "The deal is always written in the room with no windows."',
  },
  {
    tag: 'ECONOMY',
    mins: 5,
    time: '9:15 PM',
    title: 'Italian espresso bars formally request UNESCO protection.',
    body:
      'A consortium of Italian café owners filed for UNESCO Intangible Cultural Heritage status this week, citing the disappearance of "the bar standing ritual" under chain-coffee pressure.',
    take: 'MARCO\'S TAKE — "If you have to ask UNESCO, you already lost."',
  },
  {
    tag: 'OBITS',
    mins: 3,
    time: '8:22 PM',
    title: 'Last surviving member of a forgotten 70s Italian library music label dies at 82.',
    body:
      'Giovanni Castellani, the keyboardist and de facto producer behind a tiny Bologna imprint whose untitled records now sell for four figures, passed away at home on Tuesday. He never gave an interview.',
    take: 'MARCO\'S TAKE — "Side B will outlive most of us. He knew."',
  },
  {
    tag: 'SPORT',
    mins: 4,
    time: '7:58 PM',
    title: 'Lazio fans light flares to mourn a draw, not a loss.',
    body:
      'In a scene that has split commentators for the third night running, the Stadio Olimpico erupted in pyrotechnic mourning after a 1-1 draw against a mid-table opponent.',
    take: 'MARCO\'S TAKE — "Italians mourn correctly. The rest of the world should take notes."',
  },
];

export default function WirePage() {
  const [reading, setReading] = useState(0);
  const story = STORIES[reading];

  return (
    <div className="page-root" data-screen-label="08 Private · News">
      <section style={{ paddingTop: 140, paddingBottom: 40, position: 'relative' }}>
        <GhostText right="-2vw" top="6vh" size="26vw" style={{ opacity: 0.05, fontStyle: 'italic' }}>
          wire
        </GhostText>
        <div className="shell">
          <div className="t-label" style={{ color: 'var(--accent)', marginBottom: 22 }}>
            · Room 03 · The Wire · Edition · Tonight
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '6fr 6fr', gap: 60, alignItems: 'end', marginBottom: 60 }}>
            <h1 className="t-display" style={{ fontSize: 'clamp(56px, 8vw, 112px)', lineHeight: 0.95 }}>
              The world,
              <br />
              <span className="italic">told slowly.</span>
            </h1>
            <p className="t-body" style={{ paddingBottom: 16, maxWidth: 440 }}>
              Five stories tonight, cut down to what matters. Marco sat with each one for ten minutes before letting us
              print it.
            </p>
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: 120 }}>
        <div className="shell">
          <div style={{ display: 'grid', gridTemplateColumns: '4fr 8fr', gap: 56 }}>
            <ul style={{ listStyle: 'none', borderTop: '1px solid var(--line-subtle)' }}>
              {STORIES.map((s, i) => (
                <li
                  key={i}
                  onClick={() => setReading(i)}
                  style={{
                    padding: '24px 0',
                    borderBottom: '1px solid var(--line-subtle)',
                    cursor: 'pointer',
                    position: 'relative',
                    paddingLeft: reading === i ? 18 : 0,
                    transition: 'all 400ms var(--ease)',
                    color: reading === i ? 'var(--text-primary)' : 'var(--text-secondary)',
                  }}
                >
                  {reading === i && (
                    <span style={{ position: 'absolute', left: 0, top: 30, color: 'var(--accent)' }}>·</span>
                  )}
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                    <span className="t-label" style={{ fontSize: 9, color: 'var(--accent)' }}>
                      {s.tag}
                    </span>
                    <span className="t-num" style={{ fontSize: 9, color: 'var(--text-muted)' }}>
                      {s.time} · {s.mins}m read
                    </span>
                  </div>
                  <h3 className="t-display" style={{ fontSize: 19, lineHeight: 1.2 }}>
                    {s.title}
                  </h3>
                </li>
              ))}
            </ul>

            <article style={{ paddingTop: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <span className="t-label" style={{ color: 'var(--accent)' }}>
                  {story.tag} · STORY {String(reading + 1).padStart(2, '0')} of {STORIES.length}
                </span>
                <span className="t-label" style={{ fontSize: 9, color: 'var(--text-muted)' }}>
                  {story.time} · {story.mins} MIN READ
                </span>
              </div>
              <h2 className="t-display" style={{ fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.05, marginBottom: 36 }}>
                {story.title}
              </h2>
              <div style={{ position: 'relative', aspectRatio: '16/9', marginBottom: 36, overflow: 'hidden' }}>
                <CineImg src={IMG.priv_newspaper} alt="" style={{ position: 'absolute', inset: 0 }} />
              </div>
              <p className="t-body" style={{ fontSize: 16, marginBottom: 28 }}>
                {story.body}
              </p>

              <div
                style={{
                  padding: '28px 32px',
                  background: 'var(--bg-card)',
                  borderLeft: '2px solid var(--accent)',
                  marginTop: 32,
                }}
              >
                <div className="t-label" style={{ fontSize: 9, color: 'var(--accent-light)', marginBottom: 12 }}>
                  {story.take.split(' — ')[0]}
                </div>
                <p className="t-display italic" style={{ fontStyle: 'italic', fontSize: 22, lineHeight: 1.3 }}>
                  {story.take.split(' — ')[1]}
                </p>
              </div>

              <div
                style={{
                  marginTop: 48,
                  paddingTop: 24,
                  borderTop: '1px solid var(--line-subtle)',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <button
                  onClick={() => setReading(Math.max(0, reading - 1))}
                  className="btn-secondary"
                  disabled={reading === 0}
                  style={{ opacity: reading === 0 ? 0.3 : 1 }}
                >
                  <span className="arrow">←</span>
                  <span>Earlier</span>
                </button>
                <button
                  onClick={() => setReading(Math.min(STORIES.length - 1, reading + 1))}
                  className="btn-secondary"
                  disabled={reading === STORIES.length - 1}
                  style={{ opacity: reading === STORIES.length - 1 ? 0.3 : 1 }}
                >
                  <span>Next</span>
                  <span className="arrow">→</span>
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
