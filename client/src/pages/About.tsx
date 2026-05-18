import { CineImg, GhostText, GoldLine } from '@/components/izure/primitives';
import { IMG } from '@/lib/atmosphere';

export default function AboutPage() {
  return (
    <div className="page-root" data-screen-label="02 About">
      {/* ───────── Hero ───────── */}
      <section style={{ position: 'relative', paddingTop: 160, paddingBottom: 80 }}>
        <GhostText right="-2vw" top="6vh" size="34vw" style={{ opacity: 0.045, fontStyle: 'italic' }}>
          who
        </GhostText>

        <div className="shell" style={{ position: 'relative', zIndex: 2 }}>
          <div className="t-label" style={{ color: 'var(--accent)', marginBottom: 28 }}>
            · Chapter One · Who's pouring
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '5fr 1fr 6fr',
              gap: '4%',
              alignItems: 'end',
              marginBottom: 100,
            }}
          >
            <h1 className="t-display" style={{ fontSize: 'clamp(64px, 9vw, 132px)', lineHeight: 0.95 }}>
              Behind the
              <br />
              <span className="italic">curtain.</span>
            </h1>
            <div />
            <p className="t-body" style={{ maxWidth: 460, fontSize: 16, paddingBottom: 20 }}>
              Not a portfolio. Not a CV. A few rooms, a few records, and the
              things that have stayed in my pocket long enough to matter —
              kept by Maurice, born 2007, somewhere between Bad Segeberg
              and the late shift in Hamburg.
            </p>
          </div>

          {/* Editorial portrait + habits */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '7fr 5fr',
              gap: 60,
              alignItems: 'start',
              marginBottom: 120,
            }}
          >
            <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden' }}>
              <CineImg src={IMG.about_portrait} alt="Portrait" style={{ position: 'absolute', inset: 0 }} />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, transparent 60%, rgba(15,13,11,0.5))',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 20,
                  left: 24,
                  fontFamily: 'Cinzel, serif',
                  fontSize: 9,
                  letterSpacing: '0.3em',
                  color: 'var(--accent-light)',
                }}
              >
                EST. MMVII · ROLL 01
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: 20,
                  right: 24,
                  fontFamily: 'Cinzel, serif',
                  fontSize: 9,
                  letterSpacing: '0.3em',
                  color: 'var(--accent-light)',
                }}
              >
                35mm · push +1
              </div>
            </div>

            <div style={{ paddingTop: 24 }}>
              <div className="gold-line left" style={{ marginBottom: 40 }}>
                <span>habits · rituals</span>
              </div>

              <dl style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '24px 24px' }}>
                {[
                  ['Carries', 'Charisma — used quietly, never poured out.'],
                  ['Holds', "Discipline that doesn't ask for permission."],
                  ['Refuses', 'To break under pressure. Or under boredom.'],
                  ['Studies', 'Psychology by night. Philosophy between shifts.'],
                  ['Trains', 'Sport, mostly. The body keeps the mind honest.'],
                  ['Watches', 'Internet, media, the small print under everything.'],
                  ['Mothered by', 'Maja — Stralsund, 1972. Segeberger Kliniken.'],
                  ['Fathered by', 'Marco — Quedlinburg, 1974. Telekom, Hamburg.'],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: 'contents' }}>
                    <dt className="t-label" style={{ color: 'var(--accent)', paddingTop: 4 }}>
                      {k}
                    </dt>
                    <dd className="t-body" style={{ fontSize: 14 }}>
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Bourdain quote ───────── */}
      <section style={{ position: 'relative', padding: '40px 0 120px' }}>
        <GhostText left="-3vw" top="-2vh" size="32vw" style={{ opacity: 0.04, fontStyle: 'italic' }}>
          talk
        </GhostText>

        <div className="shell" style={{ position: 'relative', zIndex: 2 }}>
          <GoldLine label="House quote · for the record" />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 8fr 2fr',
              gap: 40,
              alignItems: 'center',
              marginTop: 56,
            }}
          >
            <div
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: 'clamp(60px, 8vw, 120px)',
                lineHeight: 1,
                color: 'var(--accent)',
                opacity: 0.6,
                textAlign: 'right',
              }}
            >
              "
            </div>

            <blockquote
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 'clamp(28px, 3.6vw, 52px)',
                lineHeight: 1.2,
                color: 'var(--text-primary)',
                textAlign: 'center',
                padding: '0 20px',
              }}
            >
              Of course I talk to myself —
              <br />
              <span style={{ color: 'var(--accent-light)' }}>
                I just need an expert's opinion sometimes.
              </span>
            </blockquote>

            <div
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: 'clamp(60px, 8vw, 120px)',
                lineHeight: 1,
                color: 'var(--accent)',
                opacity: 0.6,
                textAlign: 'left',
              }}
            >
              "
            </div>
          </div>
          <div
            className="t-label"
            style={{
              color: 'var(--text-muted)',
              textAlign: 'center',
              marginTop: 32,
              fontSize: 10,
            }}
          >
            — in the spirit of Anthony Bourdain · pinned above the espresso machine
          </div>
        </div>
      </section>

      {/* ───────── Curriculum — kept like a wine list ───────── */}
      <section style={{ padding: '40px 0 120px', background: 'var(--bg-secondary)' }}>
        <div className="shell">
          <GoldLine label="The slow CV · told in chapters" />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '5fr 7fr',
              gap: 56,
              marginTop: 56,
            }}
          >
            {/* Schooling */}
            <div>
              <div className="t-label" style={{ color: 'var(--accent)', marginBottom: 20 }}>
                · The reading years
              </div>
              <h2
                className="t-display italic"
                style={{ fontStyle: 'italic', fontSize: 'clamp(32px, 4.2vw, 56px)', lineHeight: 1.1, marginBottom: 24 }}
              >
                Two schools,
                <br />
                three certificates,
                <br />
                one detour.
              </h2>
              <p className="t-body" style={{ fontSize: 14, maxWidth: 380 }}>
                The classroom never quite fit. The hallway did. Maurice read the
                signs, picked up what was useful, and kept moving.
              </p>
            </div>

            <ul style={{ listStyle: 'none', borderTop: '1px solid var(--line-subtle)' }}>
              {[
                {
                  year: '2023',
                  title: 'Hauptschulabschluss',
                  place: 'Poul-Due-Jensen-Schule · Wahlstedt',
                  note: 'The first stamp. The one that opens the door.',
                },
                {
                  year: '2024',
                  title: 'Realschulabschluss',
                  place: 'Poul-Due-Jensen-Schule · Wahlstedt',
                  note: 'The second stamp — same hallway, harder paper.',
                },
                {
                  year: '2024',
                  title: 'BWL · VWL · Wirtschaftswissenschaften',
                  place: 'Theodor-Litt-Schule · Neumünster',
                  note: 'No certificate — but the books were read, the questions were the right ones.',
                },
              ].map((s, i) => (
                <li
                  key={i}
                  style={{
                    padding: '24px 0',
                    borderBottom: '1px solid var(--line-subtle)',
                    display: 'grid',
                    gridTemplateColumns: '70px 1fr',
                    gap: 24,
                    alignItems: 'baseline',
                  }}
                >
                  <span
                    className="t-num"
                    style={{ fontSize: 13, color: 'var(--accent)', fontFamily: 'Cinzel, serif' }}
                  >
                    {s.year}
                  </span>
                  <div>
                    <div className="t-display" style={{ fontSize: 22, lineHeight: 1.2 }}>
                      {s.title}
                    </div>
                    <div className="t-label" style={{ fontSize: 9, color: 'var(--text-muted)', marginTop: 6 }}>
                      {s.place}
                    </div>
                    <p
                      className="t-body"
                      style={{ fontSize: 13, fontStyle: 'italic', color: 'var(--text-secondary)', marginTop: 10 }}
                    >
                      {s.note}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────── Field work ───────── */}
      <section style={{ padding: '80px 0 120px' }}>
        <div className="shell">
          <GoldLine label="Field work · what got done" />

          <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 28 }}>
            {[
              {
                period: '09 / 2025 — present',
                role: 'Auszubildender',
                place: 'Deutsche Telekom AG · Hamburg',
                note: 'The current shift. Late voices on the line, early notes in the book. Inherited the trade from a father who has been with the company since before the millennium.',
                accent: true,
              },
              {
                period: '11 / 2023',
                role: 'Jugend im Kreistag',
                place: 'VJIKA & KJR · Bad Segeberg',
                note: 'A week with the youth council. Watched how decisions actually get made — in side rooms, between coffees.',
              },
              {
                period: '08 / 2022 — 02 / 2023',
                role: 'JobXperience',
                place: 'Berufsbildungszentrum · Bad Segeberg',
                note: 'Six months of trying on roles. Some fit. Most pointed elsewhere.',
              },
              {
                period: '04 — 05 / 2022',
                role: 'Praktikant',
                place: 'Grundschule Fahrenkrug',
                note: 'First time on the other side of the desk. Small chairs, big lessons.',
              },
            ].map((j, i) => (
              <article
                key={i}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid',
                  borderColor: j.accent ? 'var(--accent-dim)' : 'var(--line-subtle)',
                  padding: '28px 28px 32px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    marginBottom: 14,
                  }}
                >
                  <span className="t-label" style={{ fontSize: 9, color: 'var(--accent)' }}>
                    {j.period}
                  </span>
                  {j.accent && (
                    <span className="t-label" style={{ fontSize: 8, color: 'var(--accent-light)' }}>
                      · ON SHIFT ·
                    </span>
                  )}
                </div>
                <h3 className="t-display" style={{ fontSize: 26, lineHeight: 1.15, marginBottom: 4 }}>
                  {j.role}
                </h3>
                <div className="t-label" style={{ fontSize: 9, color: 'var(--text-muted)', marginBottom: 16 }}>
                  {j.place}
                </div>
                <p className="t-body" style={{ fontSize: 13, fontStyle: 'italic' }}>
                  {j.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Tongues & contact ───────── */}
      <section style={{ padding: '40px 0 140px', borderTop: '1px solid var(--line-subtle)' }}>
        <div className="shell">
          <div style={{ display: 'grid', gridTemplateColumns: '6fr 6fr', gap: 60, marginTop: 60 }}>
            <div>
              <div className="t-label" style={{ color: 'var(--accent)', marginBottom: 18 }}>
                · Tongues kept
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  ['Deutsch', 'Muttersprache · die Heimspur'],
                  ['English', 'Verhandlungssicher · for the late shift'],
                  ['Français', 'Gute Kenntnisse · for the menu and the manners'],
                  ['Italiano', 'Grundkenntnisse · enough to order a doppio without translating'],
                ].map(([k, v]) => (
                  <li
                    key={k}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '140px 1fr',
                      gap: 24,
                      paddingBottom: 14,
                      borderBottom: '1px solid var(--line-subtle)',
                      alignItems: 'baseline',
                    }}
                  >
                    <span className="t-display italic" style={{ fontStyle: 'italic', fontSize: 22, color: 'var(--accent-light)' }}>
                      {k}
                    </span>
                    <span className="t-body" style={{ fontSize: 14 }}>
                      {v}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="t-label" style={{ color: 'var(--accent)', marginBottom: 18 }}>
                · Reachable, if quietly
              </div>
              <p
                className="t-display italic"
                style={{ fontStyle: 'italic', fontSize: 28, lineHeight: 1.2, marginBottom: 32, color: 'var(--text-primary)' }}
              >
                Bahnhofstraße 4b
                <br />
                29553 Bienenbüttel.
              </p>
              <dl style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '14px 16px' }}>
                <dt className="t-label" style={{ fontSize: 9, color: 'var(--accent)', paddingTop: 3 }}>
                  By line
                </dt>
                <dd className="t-body" style={{ fontSize: 14 }}>
                  +49 151 723 131 13
                </dd>
                <dt className="t-label" style={{ fontSize: 9, color: 'var(--accent)', paddingTop: 3 }}>
                  By letter
                </dt>
                <dd className="t-body" style={{ fontSize: 14 }}>
                  maurice.risch@icloud.com
                </dd>
                <dt className="t-label" style={{ fontSize: 9, color: 'var(--accent)', paddingTop: 3 }}>
                  Best hour
                </dt>
                <dd className="t-body" style={{ fontSize: 14, fontStyle: 'italic' }}>
                  after the third espresso · before the second drink
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
