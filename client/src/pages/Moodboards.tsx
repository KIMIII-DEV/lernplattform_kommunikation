import { useState } from 'react';
import { CineImg, GhostText, GoldLine } from '@/components/izure/primitives';
import { IMG } from '@/lib/atmosphere';

type Category = 'faces' | 'places' | 'films' | 'sounds' | 'marks' | 'paintings';

interface Ref {
  id: string;
  title: string;
  italic?: string;
  cat: Category;
  img: string;
  span?: 1 | 2;
  note: string;
}

const REFS: Ref[] = [
  {
    id: 'bourdain',
    title: 'Anthony Bourdain',
    italic: 'Kitchen Confidential',
    cat: 'faces',
    img: IMG.ref_bourdain,
    span: 2,
    note:
      "Worldliness without arrogance. Asks the right question, then shuts up long enough to hear the answer. The right way to walk into a room you don't belong in.",
  },
  {
    id: 'camus',
    title: 'Albert Camus',
    italic: "L'Étranger · 1942",
    cat: 'faces',
    img: IMG.ref_camus,
    note:
      'Existential calm. Saying less, meaning more. A reminder that being a stranger to a thing is not the same as not understanding it.',
  },
  {
    id: 'matthew',
    title: 'Matthew McConaughey',
    italic: 'just keep livin',
    cat: 'faces',
    img: IMG.ref_matthew,
    note:
      "Relaxed charisma. Not in a hurry. The school of being where the room slows down to your tempo instead of the other way round.",
  },
  {
    id: 'fleet',
    title: 'Fleetwood Mac',
    italic: 'Rumours · 1977',
    cat: 'sounds',
    img: IMG.ref_fleet,
    span: 2,
    note:
      'Heartbreak that still moves. Warm analog feelings, played loud at the right hour. The whole record, in order, with the dust still on it.',
  },
  {
    id: 'pino',
    title: "Pino D'Angiò",
    italic: 'Ma Quale Idea',
    cat: 'sounds',
    img: IMG.ref_pino,
    note:
      'Italian nightlife at its most ironic. The cool of not taking yourself too seriously, set to a bass line you forget on purpose.',
  },
  {
    id: 'sideb',
    title: 'Side B',
    italic: 'the better half',
    cat: 'sounds',
    img: IMG.mat_vinyl,
    note:
      "The track no one plays first. Usually the one worth keeping the record for. Flip the side. Slow down. Listen properly.",
  },
  {
    id: 'gbu',
    title: 'The Good, the Bad and the Ugly',
    italic: 'Leone · 1966',
    cat: 'films',
    img: IMG.ref_zztop,
    span: 2,
    note:
      'Long silences. Wind doing the talking. A wide frame where nothing happens for a full minute — and then everything does. The way to hold a scene.',
  },
  {
    id: 'jazz',
    title: 'The club downstairs',
    italic: 'side B, low',
    cat: 'films',
    img: IMG.hero_jazz,
    note:
      "The kind of small room a story should end in. Smoke optional. Tempo low. Conversation honest.",
  },
  {
    id: 'sicily',
    title: 'Sicily · Italian streets',
    italic: 'noon and after',
    cat: 'places',
    img: IMG.mood_alley,
    span: 2,
    note:
      'Narrow lanes, washed walls, motorinos at noon. Loud lunches, quiet afternoons. The afternoon nap as a piece of national architecture.',
  },
  {
    id: 'dublin',
    title: 'National Gallery of Ireland',
    italic: 'Dublin · early hour',
    cat: 'paintings',
    img: IMG.hero_window,
    note:
      'A morning in the old wing. Caravaggio on the wall, nobody speaking above a whisper, the light arriving slowly through the high windows.',
  },
  {
    id: 'oldmasters',
    title: 'Pre-1700 · gilded edges',
    italic: 'chiaroscuro',
    cat: 'paintings',
    img: IMG.mood_books,
    note:
      "Saints with dirty fingernails. Light coming from somewhere just out of frame. The kind of painting that earns the silence around it.",
  },
  {
    id: 'celtic',
    title: 'Celtic knotwork',
    italic: 'marks worth keeping',
    cat: 'marks',
    img: IMG.mat_silver,
    note:
      "Lines that turn back on themselves. No beginning, no end. Marks that mean something only to the person who wears them — which is the whole point.",
  },
];

const QUOTES = [
  {
    text: "I don't have time to read your book. I have to live my life.",
    by: 'Anthony Bourdain',
  },
  {
    text: 'In the depth of winter, I finally learned that within me there lay an invincible summer.',
    by: 'Albert Camus',
  },
  {
    text: 'Just keep livin.',
    by: 'Matthew McConaughey',
  },
];

const TABS: { id: 'all' | Category; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'faces', label: 'Faces' },
  { id: 'sounds', label: 'Sounds' },
  { id: 'films', label: 'Films' },
  { id: 'places', label: 'Places' },
  { id: 'paintings', label: 'Paintings' },
  { id: 'marks', label: 'Marks' },
];

export default function MoodboardsPage() {
  const [filter, setFilter] = useState<'all' | Category>('all');
  const visible = REFS.filter((r) => filter === 'all' || r.cat === filter);

  return (
    <div className="page-root" data-screen-label="03 Moodboards">
      {/* Hero */}
      <section style={{ position: 'relative', paddingTop: 160, paddingBottom: 60 }}>
        <GhostText right="-2vw" top="6vh" size="32vw" style={{ opacity: 0.045, fontStyle: 'italic' }}>
          mood
        </GhostText>

        <div className="shell" style={{ position: 'relative', zIndex: 2 }}>
          <div className="t-label" style={{ color: 'var(--accent)', marginBottom: 24 }}>
            · Chapter Two · The wall of references
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '6fr 6fr',
              gap: 60,
              alignItems: 'end',
              marginBottom: 56,
            }}
          >
            <h1 className="t-display" style={{ fontSize: 'clamp(56px, 9vw, 132px)', lineHeight: 0.95 }}>
              Pictures from
              <br />
              <span className="italic" style={{ color: 'var(--text-secondary)' }}>
                elsewhere.
              </span>
            </h1>
            <p className="t-body" style={{ paddingBottom: 16, maxWidth: 460, fontSize: 16 }}>
              Faces, places, sounds, films, marks, paintings. Things kept on the
              wall above the desk because they hold something worth borrowing.
              None of it is mine — all of it is in the kit.
            </p>
          </div>

          {/* Filter tabs */}
          <div
            style={{
              display: 'flex',
              gap: 0,
              flexWrap: 'wrap',
              borderBottom: '1px solid var(--line-subtle)',
            }}
          >
            {TABS.map((t) => {
              const active = filter === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setFilter(t.id)}
                  style={{
                    padding: '14px 22px',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: `2px solid ${active ? 'var(--accent)' : 'transparent'}`,
                    color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
                    fontFamily: 'Cinzel, serif',
                    fontSize: 10,
                    letterSpacing: '0.28em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 300ms var(--ease)',
                  }}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reference grid */}
      <section style={{ paddingBottom: 100 }}>
        <div className="shell">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 24,
              gridAutoFlow: 'dense',
            }}
          >
            {visible.map((r, i) => (
              <article
                key={r.id}
                style={{
                  gridColumn: r.span === 2 ? 'span 2' : 'span 2',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--line-subtle)',
                  padding: 0,
                  overflow: 'hidden',
                  transition: 'all 500ms var(--ease)',
                  marginTop: (i % 3) * 16,
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(176,141,87,0.5)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'var(--line-subtle)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ position: 'relative', aspectRatio: r.span === 2 ? '16/9' : '4/3', overflow: 'hidden' }}>
                  <CineImg src={r.img} alt={r.title} style={{ position: 'absolute', inset: 0 }} />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(22,15,10,0.85), transparent 55%)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: 16,
                      left: 18,
                      fontFamily: 'Cinzel, serif',
                      fontSize: 9,
                      letterSpacing: '0.3em',
                      color: 'var(--accent-light)',
                      textTransform: 'uppercase',
                    }}
                  >
                    · {r.cat} ·
                  </div>
                  <div style={{ position: 'absolute', bottom: 18, left: 22, right: 22 }}>
                    <div className="t-display" style={{ fontSize: 24, lineHeight: 1.1, color: 'var(--text-primary)' }}>
                      {r.title}
                    </div>
                    {r.italic && (
                      <div
                        className="t-display italic"
                        style={{ fontStyle: 'italic', fontSize: 14, color: 'var(--accent-light)', marginTop: 2 }}
                      >
                        {r.italic}
                      </div>
                    )}
                  </div>
                </div>
                <div style={{ padding: '22px 24px 26px' }}>
                  <p className="t-body" style={{ fontSize: 13, fontStyle: 'italic' }}>
                    {r.note}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes strip */}
      <section style={{ padding: '40px 0 100px', background: 'var(--bg-secondary)' }}>
        <div className="shell">
          <GoldLine label="Lines kept · folded into the wallet" />
          <div
            style={{
              marginTop: 56,
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 40,
            }}
          >
            {QUOTES.map((q, i) => (
              <figure
                key={i}
                style={{
                  borderLeft: '1px solid var(--accent-dim)',
                  paddingLeft: 24,
                }}
              >
                <blockquote
                  className="t-display italic"
                  style={{
                    fontStyle: 'italic',
                    fontSize: 22,
                    lineHeight: 1.3,
                    color: 'var(--text-primary)',
                    marginBottom: 16,
                  }}
                >
                  "{q.text}"
                </blockquote>
                <figcaption
                  className="t-label"
                  style={{ fontSize: 9, color: 'var(--accent)' }}
                >
                  — {q.by}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Films list */}
      <section style={{ padding: '40px 0 140px' }}>
        <div className="shell">
          <GoldLine label="Films · the slow ones" />
          <ul
            style={{
              marginTop: 48,
              listStyle: 'none',
              borderTop: '1px solid var(--line-subtle)',
              maxWidth: 800,
            }}
          >
            {[
              { title: 'The Good, the Bad and the Ugly', dir: 'Sergio Leone', year: 1966 },
              { title: 'Once Upon a Time in the West', dir: 'Sergio Leone', year: 1968 },
              { title: 'True Detective · Season One', dir: 'Cary Joji Fukunaga', year: 2014 },
              { title: 'La Grande Bellezza', dir: 'Paolo Sorrentino', year: 2013 },
              { title: "Ocean's Eleven", dir: 'Steven Soderbergh', year: 2001 },
            ].map((f, i) => (
              <li
                key={i}
                style={{
                  padding: '18px 0',
                  borderBottom: '1px solid var(--line-subtle)',
                  display: 'grid',
                  gridTemplateColumns: '60px 1fr 220px',
                  gap: 24,
                  alignItems: 'baseline',
                }}
              >
                <span
                  className="t-num"
                  style={{ fontSize: 11, color: 'var(--accent)', fontFamily: 'Cinzel, serif' }}
                >
                  {f.year}
                </span>
                <span className="t-display" style={{ fontSize: 22, lineHeight: 1.2 }}>
                  {f.title}
                </span>
                <span className="t-body" style={{ fontSize: 12, color: 'var(--text-muted)', fontStyle: 'italic', textAlign: 'right' }}>
                  {f.dir}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
