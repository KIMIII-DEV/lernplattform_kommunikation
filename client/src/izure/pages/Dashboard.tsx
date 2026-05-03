import { Link } from 'wouter';
import { LERNFELDER, diagnostics } from '../lib/dataAdapter';
import { Bracket, BigNumber, Glitch, KbdHint, StatusLine, TacticalCard, Tag } from '../components/ui/Tactical';
import type { AppProgress } from '../types/learning';

export function Dashboard({ progress }: { progress: AppProgress }) {
  const diag = diagnostics();
  const totals = diag.reduce(
    (s, d) => ({ topics: s.topics + d.topics, cards: s.cards + d.flashcards, qs: s.qs + d.questions }),
    { topics: 0, cards: 0, qs: 0 },
  );
  const totalRuns = Object.values(progress.modules).reduce((s, m) => s + (m.simRuns?.length ?? 0), 0);
  const totalRead = Object.values(progress.modules).reduce((s, m) => s + (m.theoryRead?.length ?? 0), 0);

  return (
    <div className="flex col gap-24">
      {/* HERO */}
      <div className="grid" style={{ gridTemplateColumns: '1.4fr 1fr' }}>
        <div style={{ padding: 24 }}>
          <div className="flex gap-12 mb-12" style={{ alignItems: 'center' }}>
            <Bracket tone="warn">MISSION HUB</Bracket>
            <span className="label">// CLEARANCE STUFE-2</span>
          </div>
          <h1 style={{ fontSize: 38, lineHeight: 1.05, marginBottom: 12 }}>
            <Glitch>IZURÉ —</Glitch><br />
            <span style={{ color: 'var(--warn)' }}>Operational Training</span>
          </h1>
          <p style={{ color: 'var(--text-dim)', maxWidth: 620, fontSize: 13, lineHeight: 1.6 }}>
            Du bist Operator. Jedes Lernfeld ist eine Mission.
            Theory drillt das Wissen, Drill prüft das Abrufen, Simulation testet die Anwendung.
            Kein passives Lernen. Kein Multiple-Choice ohne Konsequenz.
          </p>
          <div className="flex gap-12 mt-16" style={{ alignItems: 'center' }}>
            <Link to="/lf/LF4" style={{ textDecoration: 'none' }}>
              <button className="tbtn primary">EINSATZ AUFNEHMEN — LF4</button>
            </Link>
            <KbdHint keys={['ENTER']} label="ENGAGE" />
          </div>
        </div>

        <div style={{ padding: 20 }}>
          <div className="label mb-12">// BOOT SEQUENCE</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, lineHeight: 1.9, color: 'var(--text-dim)' }}>
            <div>$ load curriculum.lf04 ........... <span className="ok">OK</span></div>
            <div>$ load curriculum.lf05 ........... <span className={diag.find(d => d.id === 'LF5')!.topics > 0 ? 'ok' : 'warn'}>
              {diag.find(d => d.id === 'LF5')!.topics > 0 ? 'OK' : 'EMPTY'}
            </span></div>
            <div>$ link cohort.benchmark .......... <span className="ok">OK</span></div>
            <div>$ enable drill.engine ............ <span className="ok">OK</span></div>
            <div>$ enable simulation.engine ....... <span className="ok">OK</span></div>
            <div>$ rec.compliance §15.dsgvo ....... <span className="warn">ARMED</span></div>
            <div style={{ marginTop: 8, color: 'var(--text)' }}>
              $ system.ready ..100% <span className="warn">ENGAGE</span>
            </div>
          </div>
        </div>
      </div>

      {/* COUNTS */}
      <div className="grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <div><BigNumber value={String(totals.topics).padStart(2, '0')} label="TOPICS GELADEN" /></div>
        <div><BigNumber value={String(totals.cards).padStart(2, '0')} label="FLASHCARDS" /></div>
        <div><BigNumber value={String(totals.qs).padStart(2, '0')} label="QUIZ-FRAGEN" /></div>
        <div><BigNumber tone="ok" value={String(totalRuns).padStart(2, '0')} label="ABGESCHLOSSENE RUNS" /></div>
      </div>

      {/* MODULE LIST */}
      <TacticalCard title="LERNFELDER // TRAINING-KATALOG" status={`${LERNFELDER.length} ITEMS`}>
        <table className="ttable">
          <thead>
            <tr>
              <th style={{ width: 60 }}>ID</th>
              <th>NAME</th>
              <th style={{ width: 90 }}>TOPICS</th>
              <th style={{ width: 90 }}>DRILL</th>
              <th style={{ width: 90 }}>SIM</th>
              <th style={{ width: 110 }}>STATUS</th>
              <th style={{ width: 110 }} />
            </tr>
          </thead>
          <tbody>
            {LERNFELDER.map((lf) => {
              const empty = lf.topics.length + lf.flashcards.length + lf.questions.length === 0;
              const lfp = progress.modules[lf.id];
              const runs = lfp?.simRuns?.length ?? 0;
              const tone = empty ? '' : runs > 0 ? 'ok' : 'warn';
              const status = empty ? 'EMPTY' : runs > 0 ? 'TRAINED' : 'READY';
              return (
                <tr key={lf.id} style={{ opacity: empty ? 0.5 : 1 }}>
                  <td className="muted">{lf.code}</td>
                  <td>
                    <div style={{ color: 'var(--text)', fontSize: 13 }}>{lf.name}</div>
                    <div className="label" style={{ marginTop: 2, color: 'var(--text-faint)' }}>// {lf.sub}</div>
                  </td>
                  <td className="muted">{lf.topics.length}</td>
                  <td className="muted">{lf.flashcards.length}</td>
                  <td className="muted">{lf.questions.length}</td>
                  <td><Tag tone={tone as any}>{status}</Tag></td>
                  <td>
                    {empty ? (
                      <button className="tbtn ghost" disabled style={{ padding: '6px 12px', fontSize: 10 }}>
                        LOCKED
                      </button>
                    ) : (
                      <Link to={`/lf/${lf.id}`} style={{ textDecoration: 'none' }}>
                        <button className="tbtn ghost" style={{ padding: '6px 12px', fontSize: 10 }}>OPEN</button>
                      </Link>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </TacticalCard>

      {/* INTEL FEED */}
      <div className="grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
        <div style={{ padding: 20 }}>
          <Bracket className="mb-12">OPERATOR STATUS</Bracket>
          <div className="mt-16">
            <StatusLine label="CLEARANCE" value="STUFE-2" />
            <StatusLine label="THEORY READ" value={String(totalRead)} tone={totalRead > 0 ? 'ok' : undefined} />
            <StatusLine label="SIM RUNS" value={String(totalRuns)} tone={totalRuns > 0 ? 'ok' : undefined} />
            <StatusLine label="STREAK" value={`${progress.streak ?? 0} TAGE`} />
          </div>
        </div>

        <div style={{ padding: 20 }}>
          <Bracket className="mb-12">PROTOKOLL</Bracket>
          <pre style={{ fontFamily: 'var(--font-mono)', fontSize: 11, lineHeight: 1.5, color: 'var(--text-dim)', whiteSpace: 'pre' }}>
{`> SYSTEM:    IZURÉ / DIALOGMARKETING
> CHANNEL:   014.7 SECURE
> MISSION:   IHK 1.0
> RULE:      KEINE ANNAHMEN
> RULE:      KEINE LÜCKEN
> RULE:      KEINE KOMPROMISSE
> AWAITING DEPLOYMENT...`}
          </pre>
        </div>
      </div>
    </div>
  );
}
