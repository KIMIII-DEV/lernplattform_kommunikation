import { useState } from 'react';
import { CineImg, GhostText } from '@/components/izure/primitives';
import { IMG } from '@/lib/atmosphere';

export default function PrivateDashboard({ navigate }: { navigate: (to: string) => void }) {
  const [now] = useState(new Date());
  const greet = (() => {
    const h = now.getHours();
    if (h < 5) return 'Still up.';
    if (h < 11) return 'Early hand.';
    if (h < 17) return 'Afternoon.';
    if (h < 22) return 'Evening.';
    return 'Late.';
  })();

  const rooms = [
    {
      id: '/private/learn',
      title: 'Study',
      italic: 'Dialogmarketing',
      img: IMG.priv_books,
      meta: '5 modules · 1 deep sim',
      body: 'The reading room. Quiet light, no music, and one cup of coffee per chapter.',
    },
    {
      id: '/private/barkeeper',
      title: 'The Barkeeper',
      italic: 'in residence',
      img: IMG.hero_bar,
      meta: 'in progress',
      body: "Has opinions about your day. Knows when to pour and when to shut up. We're still teaching him the manners.",
    },
    {
      id: '/private/news',
      title: 'The Wire',
      italic: 'world, quietly',
      img: IMG.priv_newspaper,
      meta: '5 stories · last :30',
      body: "What's happening, told slowly. The Barkeeper does the cutting — you do the listening.",
    },
  ];

  return (
    <div className="page-root" data-screen-label="05 Private Dashboard">
      <section style={{ position: 'relative', paddingTop: 160, paddingBottom: 80, overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${IMG.priv_backroom})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.42) contrast(1.1) saturate(0.7) sepia(0.18)',
            opacity: 0.6,
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(22,15,10,0.6), var(--bg-primary) 85%)',
          }}
        />

        <GhostText right="-2vw" top="20%" size="28vw" style={{ opacity: 0.05, fontStyle: 'italic' }}>
          {greet.split(' ')[0].toLowerCase()}
        </GhostText>

        <div className="shell" style={{ position: 'relative', zIndex: 2 }}>
          <div className="t-label" style={{ color: 'var(--accent)', marginBottom: 24 }}>
            · The Backroom · Member since {now.getFullYear()}
          </div>
          <h1
            className="t-display italic"
            style={{ fontSize: 'clamp(56px, 9vw, 132px)', fontStyle: 'italic', lineHeight: 0.95, marginBottom: 32 }}
          >
            {greet}
            <br />
            <span style={{ fontStyle: 'normal', color: 'var(--text-secondary)' }}>The booth's still warm.</span>
          </h1>
          <p className="t-body" style={{ maxWidth: 540, fontSize: 16 }}>
            The chairs are turned. The lamp by the door is on. Sit a while — the Barkeeper said he'd be down shortly.
            Doors close again at half past.
          </p>
        </div>
      </section>

      <section className="section-block" style={{ padding: '40px 0 80px' }}>
        <div className="shell">
          <div className="gold-line" style={{ marginBottom: 56 }}>
            <span>Three doors · choose one</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
            {rooms.map((r, i) => (
              <article
                key={r.id}
                onClick={() => navigate(r.id)}
                style={{
                  position: 'relative',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--line-subtle)',
                  padding: 0,
                  cursor: 'pointer',
                  transition: 'all 600ms var(--ease)',
                  overflow: 'hidden',
                  marginTop: (i % 2) * 24,
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
                <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                  <CineImg src={r.img} alt={r.title} style={{ position: 'absolute', inset: 0 }} />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(22,15,10,0.8), transparent 60%)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: 16,
                      left: 18,
                      fontFamily: 'Cinzel, serif',
                      fontSize: 9,
                      color: 'var(--accent-light)',
                      letterSpacing: '0.3em',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')} — ROOM
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 16,
                      right: 20,
                      fontFamily: 'Cinzel, serif',
                      fontSize: 9,
                      color: 'var(--text-secondary)',
                      letterSpacing: '0.2em',
                    }}
                  >
                    {r.meta}
                  </div>
                </div>
                <div style={{ padding: '32px 28px 36px' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 12 }}>
                    <h3 className="t-display" style={{ fontSize: 32 }}>
                      {r.title}
                    </h3>
                    <span className="t-display italic" style={{ fontStyle: 'italic', color: 'var(--accent-light)' }}>
                      {r.italic}
                    </span>
                  </div>
                  <p className="t-body" style={{ fontSize: 14 }}>
                    {r.body}
                  </p>
                  <div
                    style={{
                      marginTop: 28,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      color: 'var(--accent)',
                      fontFamily: 'Cinzel, serif',
                      fontSize: 10,
                      letterSpacing: '0.3em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Enter <span>→</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 0 120px' }}>
        <div className="shell">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '5fr 7fr',
              gap: 60,
              padding: '56px 0',
              borderTop: '1px solid var(--line-subtle)',
              borderBottom: '1px solid var(--line-subtle)',
            }}
          >
            <div>
              <div className="t-label" style={{ color: 'var(--accent)', marginBottom: 16 }}>
                House note · {now.toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })}
              </div>
              <h3 className="t-display italic" style={{ fontStyle: 'italic', fontSize: 40, lineHeight: 1.1 }}>
                Something about the
                <br />
                weather tonight.
              </h3>
            </div>
            <div>
              <p className="t-body" style={{ fontSize: 15, marginBottom: 18 }}>
                Marco brought a record back from a flea market in Bologna last week — Italian library music from '74,
                untitled, no sleeve. We're putting it on side A at half past midnight.
              </p>
              <p className="t-body" style={{ fontSize: 15 }}>
                The barkeeper has been reading too much Camus again. If he gets philosophical before your second drink,
                signal the bell. We'll bring him an espresso and a magazine.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
