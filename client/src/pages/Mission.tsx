import { GhostText, GoldLine } from '@/components/izure/primitives';
import { ModuleDeep, ModuleSummary } from '@/lib/modules';

export default function Mission({
  module: m,
  deep,
  onLaunch,
  onBack,
}: {
  module: ModuleSummary;
  deep: ModuleDeep | undefined;
  onLaunch: () => void;
  onBack: () => void;
}) {
  return (
    <div className="page-root" data-screen-label="Mission">
      <section style={{ paddingTop: 140, paddingBottom: 60, position: 'relative' }}>
        <GhostText right="-3vw" top="10vh" size="26vw" style={{ opacity: 0.04, fontStyle: 'italic' }}>
          mission
        </GhostText>
        <div className="shell">
          <button
            onClick={onBack}
            className="btn-secondary"
            style={{ marginBottom: 24, color: 'var(--text-muted)' }}
          >
            <span className="arrow">←</span> <span>Back to Study</span>
          </button>
          <div className="t-label" style={{ color: 'var(--accent)', marginBottom: 22 }}>
            · Mission · {m.code} · {m.lernfeld} · {m.intel}
          </div>
          <h1
            className="t-display"
            style={{ fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: 0.95, marginBottom: 28 }}
          >
            {m.name.split('—')[0].trim()}
            <br />
            <span className="italic" style={{ color: 'var(--text-secondary)' }}>
              {(m.name.split('—')[1] || m.short).trim()}.
            </span>
          </h1>
          <p className="t-body" style={{ fontSize: 16, maxWidth: 640, marginBottom: 40 }}>
            {m.summary}
          </p>
        </div>
      </section>

      {deep ? (
        <>
          {/* Briefing */}
          <section style={{ padding: '40px 0 80px' }}>
            <div className="shell">
              <GoldLine label={`Briefing · ${deep.briefing.classification} · Issued ${deep.briefing.issued}`} />
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '7fr 5fr',
                  gap: 60,
                  marginTop: 48,
                }}
              >
                <div>
                  <div className="t-label" style={{ color: 'var(--accent-light)', marginBottom: 12 }}>
                    Objective
                  </div>
                  <p
                    className="t-display italic"
                    style={{ fontStyle: 'italic', fontSize: 30, lineHeight: 1.25, marginBottom: 36 }}
                  >
                    {deep.briefing.objective}
                  </p>

                  <div className="t-label" style={{ color: 'var(--accent)', marginBottom: 16 }}>
                    Constraints
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {deep.briefing.constraints.map((c, i) => (
                      <li
                        key={i}
                        className="t-body"
                        style={{
                          fontSize: 14,
                          paddingLeft: 18,
                          borderLeft: '1px solid var(--line-subtle)',
                          color: 'var(--text-primary)',
                        }}
                      >
                        {c}
                      </li>
                    ))}
                  </ul>

                  <div className="t-label" style={{ color: 'var(--accent)', marginTop: 36, marginBottom: 16 }}>
                    Rules of engagement
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {deep.briefing.rules.map((c, i) => (
                      <li
                        key={i}
                        className="t-body"
                        style={{
                          fontSize: 14,
                          paddingLeft: 18,
                          borderLeft: '1px solid var(--accent-dim)',
                          color: 'var(--text-primary)',
                        }}
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Target dossier */}
                <aside style={{ background: 'var(--bg-card)', border: '1px solid var(--line-subtle)', padding: 32 }}>
                  <div className="t-label" style={{ color: 'var(--accent-bordeaux-light)', marginBottom: 18 }}>
                    Target Dossier
                  </div>
                  <h3 className="t-display italic" style={{ fontStyle: 'italic', fontSize: 28, marginBottom: 18 }}>
                    {deep.briefing.target.name}
                  </h3>
                  <dl style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '14px 16px' }}>
                    {[
                      ['Account', deep.briefing.target.account],
                      ['ARR', deep.briefing.target.arr],
                      ['Sentiment', deep.briefing.target.sentiment],
                      ['History', deep.briefing.target.history],
                    ].map(([k, v]) => (
                      <div key={k} style={{ display: 'contents' }}>
                        <dt
                          className="t-label"
                          style={{ fontSize: 9, color: 'var(--accent)', paddingTop: 3 }}
                        >
                          {k}
                        </dt>
                        <dd className="t-body" style={{ fontSize: 12 }}>
                          {v}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </aside>
              </div>
            </div>
          </section>

          {/* Scan / 5-Phase Model */}
          <section style={{ padding: '40px 0 80px', background: 'var(--bg-secondary)' }}>
            <div className="shell">
              <GoldLine label={`Field Intel · ${deep.scan.title}`} />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0, marginTop: 48 }}>
                {deep.scan.phases.map((p, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '24px 20px',
                      borderRight: i < deep.scan.phases.length - 1 ? '1px solid var(--line-subtle)' : 'none',
                      borderTop: '1px solid var(--line-subtle)',
                      borderBottom: '1px solid var(--line-subtle)',
                    }}
                  >
                    <div className="t-num" style={{ fontSize: 11, color: 'var(--accent)', marginBottom: 12 }}>
                      0{i + 1} —
                    </div>
                    <div className="t-display" style={{ fontSize: 22, marginBottom: 4 }}>
                      {p.name}
                    </div>
                    <div className="t-display italic" style={{ fontStyle: 'italic', fontSize: 16, color: 'var(--accent-light)', marginBottom: 10 }}>
                      {p.de}
                    </div>
                    <p className="t-body" style={{ fontSize: 12 }}>
                      {p.body}
                    </p>
                  </div>
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '6fr 6fr', gap: 56, marginTop: 56 }}>
                <div>
                  <div className="t-label" style={{ color: 'var(--accent-bordeaux-light)', marginBottom: 16 }}>
                    Signals
                  </div>
                  <dl style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '12px 16px' }}>
                    {deep.scan.intel.map((it) => (
                      <div key={it.label} style={{ display: 'contents' }}>
                        <dt className="t-label" style={{ fontSize: 9, color: 'var(--accent)' }}>
                          {it.label}
                        </dt>
                        <dd className="t-body" style={{ fontSize: 13 }}>
                          {it.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div>
                  <div className="t-label" style={{ color: 'var(--accent-bordeaux-light)', marginBottom: 16 }}>
                    Failure patterns · do not
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {deep.scan.fail_patterns.map((f, i) => (
                      <li
                        key={i}
                        className="t-body"
                        style={{
                          fontSize: 13,
                          paddingLeft: 18,
                          borderLeft: '1px solid var(--accent-bordeaux-dim)',
                        }}
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <section style={{ padding: '40px 0 80px' }}>
          <div className="shell">
            <div
              style={{
                padding: '60px 40px',
                background: 'var(--bg-card)',
                border: '1px solid var(--line-subtle)',
                textAlign: 'center',
              }}
            >
              <div className="t-label" style={{ color: 'var(--accent)', marginBottom: 18 }}>
                Deep prototype
              </div>
              <h3 className="t-display italic" style={{ fontStyle: 'italic', fontSize: 32, marginBottom: 14 }}>
                In residence.
              </h3>
              <p className="t-body" style={{ fontSize: 14, maxWidth: 560, margin: '0 auto' }}>
                Dieses Modul ist bereit für die Simulation — die vollständige Decision-Tree-Tiefe wird im nächsten Drop
                ergänzt. Für jetzt: Briefing oben, Simulation unten.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ padding: '40px 0 140px' }}>
        <div className="shell" style={{ display: 'flex', justifyContent: 'center', gap: 24 }}>
          <button className="btn-primary" onClick={onLaunch} disabled={!deep} style={{ opacity: deep ? 1 : 0.4 }}>
            Launch simulation
          </button>
          <button className="btn-secondary" onClick={onBack}>
            <span className="arrow">←</span>
            <span>Back to Study</span>
          </button>
        </div>
      </section>
    </div>
  );
}
