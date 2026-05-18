import { useState } from 'react';
import { CineImg, GhostText, GoldLine } from '@/components/izure/primitives';
import { IMG } from '@/lib/atmosphere';

type Category = 'faces' | 'places' | 'films' | 'paintings' | 'movement';

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
    note: 'Worldliness without arrogance. Asks the right question, then shuts up long enough to hear the answer. The right way to walk into a room you don\'t belong in.',
  },
  {
    id: 'camus',
    title: 'Albert Camus',
    italic: 'L\'Étranger · 1942',
    cat: 'faces',
    img: IMG.ref_camus,
    note: 'The brain running in circles. A cigarette and a glass and still more left to figure out than there is time. Existential calm is not the same as giving up.',
  },
  {
    id: 'matthew',
    title: 'Matthew McConaughey',
    italic: 'just keep livin',
    cat: 'faces',
    img: IMG.ref_matthew,
    note: 'Longbranch, notebook, a window view. Not in a hurry. The man who slowed a room down to his tempo.',
  },
  {
    id: 'che',
    title: 'Ernesto "Che" Guevara',
    italic: 'La Habana · 1960s',
    cat: 'faces',
    img: IMG.ref_che,
    note: 'Read before you decide what you think. The photograph knows more than the poster.',
  },
  {
    id: 'castro',
    title: 'Fidel Castro',
    italic: 'Pico Turquino · summit',
    cat: 'faces',
    img: IMG.ref_castro,
    note: 'At the side of Martí\'s bust — a reminder that ideas outlast the people who carry them. The summit is just a place to catch your breath.',
  },
  {
    id: 'gbu',
    title: 'The Good, the Bad and the Ugly',
    italic: 'Leone · 1966',
    cat: 'films',
    img: IMG.ref_gbu,
    span: 2,
    note: 'Long silences. Wind doing the talking. A wide frame where nothing happens for a full minute — then everything does. The way to hold a scene.',
  },
  {
    id: 'gallery',
    title: 'National Gallery of Ireland',
    italic: 'Dublin · early hour',
    cat: 'places',
    img: IMG.mood_gallery,
    span: 2,
    note: 'A morning in the old wing. Light through the skylight, nobody above a whisper. The kind of silence that costs nothing and takes a lifetime to find.',
  },
  {
    id: 'painter',
    title: 'The painter at the sea',
    italic: 'after Van Gogh',
    cat: 'paintings',
    img: IMG.mood_painter,
    note: 'Copying Van Gogh at the sea. Not to own it — to understand it from the inside. The irises never look the same after.',
  },
  {
    id: 'caravaggio',
    title: 'Caravaggio · Taking of Christ',
    italic: 'c. 1602 · Dublin',
    cat: 'paintings',
    img: IMG.ref_caravaggio,
    span: 2,
    note: 'Lantern in the dark. The one face that knows exactly what is happening — and still doesn\'t move. Saints with dirty fingernails. Light from nowhere obvious.',
  },
  {
    id: 'movement',
    title: 'The practice',
    italic: 'before anyone wakes',
    cat: 'movement',
    img: IMG.ref_movement,
    note: 'The practice nobody sees. Not performance. Just the body obeying — until it doesn\'t, and then until it does again.',
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
  { id: 'films', label: 'Films' },
  { id: 'places', label: 'Places' },
  { id: 'paintings', label: 'Paintings' },
  { id: 'movement', label: 'Movement' },
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
              Faces, places, films, paintings, movement. Things kept on the wall
              above the desk because they hold something worth borrowing.
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
                  gridColumn: r.span === 2 ? 'span 2' : 'span 1',
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
