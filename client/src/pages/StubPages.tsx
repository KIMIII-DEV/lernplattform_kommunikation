import { CineImg, GhostText } from '@/components/izure/primitives';
import { IMG } from '@/lib/atmosphere';

function StubPage({
  label,
  word,
  title,
  italic,
  body,
  img,
}: {
  label: string;
  word: string;
  title: string;
  italic: string;
  body: string;
  img: string;
}) {
  return (
    <div className="page-root">
      <section style={{ paddingTop: 140, paddingBottom: 80, position: 'relative' }}>
        <GhostText right="-2vw" top="6vh" size="30vw" style={{ opacity: 0.045, fontStyle: 'italic' }}>
          {word}
        </GhostText>
        <div className="shell" style={{ position: 'relative', zIndex: 2 }}>
          <div className="t-label" style={{ color: 'var(--accent)', marginBottom: 22 }}>
            {label}
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '6fr 6fr',
              gap: 60,
              alignItems: 'end',
              marginBottom: 80,
            }}
          >
            <h1 className="t-display" style={{ fontSize: 'clamp(56px, 9vw, 132px)', lineHeight: 0.95 }}>
              {title}
              <br />
              <span className="italic" style={{ color: 'var(--text-secondary)' }}>
                {italic}.
              </span>
            </h1>
            <p className="t-body" style={{ paddingBottom: 16, maxWidth: 460, fontSize: 16 }}>
              {body}
            </p>
          </div>

          <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
            <CineImg src={img} alt="" style={{ position: 'absolute', inset: 0 }} />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(15,13,11,0.85), transparent 50%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 28,
                left: 32,
                fontFamily: 'Cinzel, serif',
                fontSize: 10,
                letterSpacing: '0.3em',
                color: 'var(--accent-light)',
                textTransform: 'uppercase',
              }}
            >
              · in residence · next drop ·
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function AboutPage() {
  return (
    <StubPage
      label="· Chapter One · Who's pouring"
      word="who"
      title="Behind the"
      italic="curtain"
      body="Not a portfolio. Not a CV. A few rooms, a few records, and the things that have stayed in my pocket long enough to matter. The full chapter is being typed up — slowly, between espressos."
      img={IMG.about_portrait}
    />
  );
}

export function CellarPage() {
  return (
    <StubPage
      label="· The Cellar · Sources we keep"
      word="cellar"
      title="A late hour"
      italic="kept warm"
      body="Books, records, films and references the house leans on. The shelves are being arranged — pull up a stool, the proper visit comes with the next drop."
      img={IMG.hero_window}
    />
  );
}

export function MoodboardsPage() {
  return (
    <StubPage
      label="· Moodboards · Music · Books · Visuals"
      word="mood"
      title="Pictures from"
      italic="elsewhere"
      body="Quotes, records, paragraphs and frames. The proper grid arrives shortly — for now, the house is collecting."
      img={IMG.mood_alley}
    />
  );
}
