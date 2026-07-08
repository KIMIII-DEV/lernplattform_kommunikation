import { useState } from 'react';
import { CineImg } from '@/components/izure/primitives';
import { Card } from '@/components/primitives';
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
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.55), var(--bg-base) 85%)',
          }}
        />

        <div className="shell" style={{ position: 'relative', zIndex: 2 }}>
          <div className="t-label" style={{ color: 'var(--accent-primary)', marginBottom: 24 }}>
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
          <div className="t-label" style={{ color: 'var(--text-secondary)', marginBottom: 40 }}>
            Three doors · choose one
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4 }}>
            {rooms.map((r, i) => (
              <RoomCard key={r.id} room={r} index={i} onOpen={() => navigate(r.id)} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 0 120px' }}>
        <div className="shell">
          <Card variant="default" style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 60, padding: '48px 44px' }}>
            <div>
              <div className="t-label" style={{ color: 'var(--accent-primary)', marginBottom: 16 }}>
                House note · {now.toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })}
              </div>
              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 32, lineHeight: 1.15 }}>
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
          </Card>
        </div>
      </section>
    </div>
  );
}

/* Türkarte — Hover ausschließlich über Farbe/Opacity (Blueprint 6.4: kein
   scale(), kein translate; Bewegung ist dem Crossfade vorbehalten). */
function RoomCard({
  room: r,
  index: i,
  onOpen,
}: {
  room: { id: string; title: string; italic: string; img: string; meta: string; body: string };
  index: number;
  onOpen: () => void;
}) {
  const [hover, setHover] = useState(false);
  return (
    <Card
      variant="default"
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpen();
        }
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      style={{ padding: 0, overflow: 'hidden', cursor: 'pointer' }}
    >
      <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', borderRadius: 8 }}>
        <CineImg src={r.img} alt={r.title} style={{ position: 'absolute', inset: 0 }} />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.75), transparent 60%)',
          }}
        />
        <div className="t-label" style={{ position: 'absolute', top: 16, left: 18, fontSize: 9, color: '#D8DADE' }}>
          {String(i + 1).padStart(2, '0')} — Room
        </div>
        <div className="t-label" style={{ position: 'absolute', bottom: 14, right: 18, fontSize: 9, color: 'rgba(244,244,244,0.75)' }}>
          {r.meta}
        </div>
      </div>
      <div style={{ padding: '28px 26px 32px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 10, flexWrap: 'wrap' }}>
          <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 26, color: 'var(--text-primary)' }}>
            {r.title}
          </h3>
          <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 14, color: 'var(--text-tertiary)' }}>
            {r.italic}
          </span>
        </div>
        <p className="t-body" style={{ fontSize: 14 }}>
          {r.body}
        </p>
        <div
          className="t-label"
          style={{
            marginTop: 24,
            fontSize: 10,
            color: hover ? 'var(--text-primary)' : 'var(--text-secondary)',
            transition: 'color var(--motion-micro)',
          }}
        >
          Enter →
        </div>
      </div>
    </Card>
  );
}
