import { CSSProperties, ReactNode, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Button,
  Card,
  DonutRing,
  DossierCard,
  GlassSurface,
  Progress,
  Seal,
  StatChain,
  Stage,
} from '@/components/primitives';

/* IZURE Primitives-Preview — Phase-2-Isolations-Testbett (Guide-Abnahme:
   "isoliert getestet, z. B. in einer temporären Preview-Route").
   Nur im DEV-Modus erreichbar (#/preview, lazy-Import in Home.tsx).
   Das Siegel ist ENTWURF — Freigabe durch den Menschen ausstehend. */

/* Unruhiger Hintergrund, um Glas-Blur + Seam sichtbar zu machen (bewusst
   CSS statt <img>, damit der globale img-Filter nicht dazwischenfunkt). */
const busyBg: CSSProperties = {
  background:
    'repeating-linear-gradient(45deg, var(--accent-primary) 0 14px, transparent 14px 34px), radial-gradient(circle at 30% 40%, var(--accent-critical) 0 60px, transparent 61px), radial-gradient(circle at 75% 65%, var(--accent-primary-bright) 0 42px, transparent 43px)',
  borderRadius: 'var(--radius-card)',
  padding: 32,
};

function Section({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section style={{ marginBottom: 48 }}>
      <div className="t-label" style={{ color: 'var(--accent-primary)', marginBottom: 16 }}>
        {label}
      </div>
      {children}
    </section>
  );
}

export default function PreviewPage() {
  const [sealState, setSealState] = useState<'idle' | 'loading' | 'route-change'>('idle');

  return (
    <div className="page-root" data-screen-label="DEV · Primitives Preview" style={{ padding: '60px 48px 120px' }}>
      <h1 className="t-display" style={{ fontSize: 40, marginBottom: 8 }}>
        Primitives
      </h1>
      <p className="t-body" style={{ marginBottom: 40 }}>
        Phase-2-Testbett · DEV only · Blueprint v2.1
      </p>

      <Stage style={{ padding: 40, marginBottom: 48 }}>
        <Section label="Card · default (Seam) vs glass-subtle">
          <div style={busyBg}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              <Card variant="default">
                <div className="t-label" style={{ marginBottom: 8 }}>Default</div>
                <p className="t-body">Seam-Technik: Fuge in bg-base statt Hairline. Kein eigener Schatten.</p>
              </Card>
              <Card variant="glass-subtle">
                <div className="t-label" style={{ marginBottom: 8 }}>Glass-Subtle</div>
                <p className="t-body">6px Blur, höhere Deckkraft. Nur Dashboard-Home (Phase 4).</p>
              </Card>
            </div>
          </div>
        </Section>

        <Section label="Accordion · 2 Ebenen, Auto-Close pro Ebene">
          <Accordion defaultValue="a">
            <AccordionItem value="a">
              <AccordionTrigger meta="(12)">Kapitel 1 · Kommunikationsanlagen</AccordionTrigger>
              <AccordionContent>
                <p className="t-body">Inhalt Ebene 1. Verschachtelte Ebene darunter:</p>
                <Accordion>
                  <AccordionItem value="a1">
                    <AccordionTrigger meta="(4)">Unterpunkt A</AccordionTrigger>
                    <AccordionContent>
                      <p className="t-body">Inhalt A</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="a2">
                    <AccordionTrigger meta="(3)">Unterpunkt B</AccordionTrigger>
                    <AccordionContent>
                      <p className="t-body">Inhalt B</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="b">
              <AccordionTrigger meta="(8)">Kapitel 2 · Betriebssysteme &amp; Software</AccordionTrigger>
              <AccordionContent>
                <p className="t-body">Inhalt Kapitel 2 — öffnet dieses, schließt Kapitel 1.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="c">
              <AccordionTrigger meta="(9)">Kapitel 3 · Mehrwertdienste</AccordionTrigger>
              <AccordionContent>
                <p className="t-body">Inhalt Kapitel 3.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Section>

        <Section label="Badge · Button · Progress">
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 20, flexWrap: 'wrap' }}>
            <Badge>Lernfeld 01</Badge>
            <Badge>45 Karten</Badge>
            <Badge>Ø 78%</Badge>
            <Button>Start Quiz</Button>
            <Button disabled>Disabled</Button>
          </div>
          <div style={{ display: 'grid', gap: 16, maxWidth: 420 }}>
            <div>
              <div className="t-label" style={{ fontSize: 9, marginBottom: 6 }}>default · 30%</div>
              <Progress value={30} />
            </div>
            <div>
              <div className="t-label" style={{ fontSize: 9, marginBottom: 6 }}>success · 100%</div>
              <Progress value={100} state="success" />
            </div>
            <div>
              <div className="t-label" style={{ fontSize: 9, marginBottom: 6 }}>error · 45%</div>
              <Progress value={45} state="error" />
            </div>
          </div>
        </Section>

        <Section label="Donut-Ring">
          <div style={{ display: 'flex', gap: 32, alignItems: 'flex-end', flexWrap: 'wrap' }}>
            <DonutRing value={0} label="LF1" />
            <DonutRing value={33} label="LF2" />
            <DonutRing value={67} label="LF3" />
            <DonutRing value={100} label="LF4" />
            <DonutRing value={67} label="klein" size={64} />
          </div>
        </Section>

        <Section label="Kennzahl-Kette">
          <Card variant="default" style={{ maxWidth: 480 }}>
            <StatChain
              items={[
                { value: 42, label: 'Beantwortet' },
                { value: 7, label: 'Serie' },
                { value: 12, label: 'Offen' },
              ]}
            />
          </Card>
        </Section>

        <Section label="GlassSurface · full (18px + Streak) vs subtle (6px)">
          <div style={busyBg}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              <GlassSurface variant="full">
                <div className="t-label" style={{ marginBottom: 8 }}>Voll-Glas</div>
                <p className="t-body">Nur Marco / Modal / Toast / Command-Palette.</p>
              </GlassSurface>
              <GlassSurface variant="subtle">
                <div className="t-label" style={{ marginBottom: 8 }}>Glass-Subtle</div>
                <p className="t-body">Nur Dashboard-Home-Cards.</p>
              </GlassSurface>
            </div>
          </div>
        </Section>

        <Section label="Dossier-Hover-Reveal (nur Opacity)">
          <div style={{ maxWidth: 420 }}>
            <DossierCard
              title="Den Betrieb"
              progress={67}
              previewChapters={['Unternehmensziele', 'Entscheidungsfindung', 'Vollmachten & Organisation']}
            />
          </div>
        </Section>
      </Stage>

      {/* Siegel bewusst AUSSERHALB der Stage (filter = Containing-Block für fixed) */}
      <Section label="Siegel · ENTWURF — zur Freigabe">
        <p className="t-body" style={{ maxWidth: 520, marginBottom: 16 }}>
          Erster Vorschlag: IZ-Ligatur als Linienzeichnung im Kreis. Unten rechts fixiert (idle 40%).
          Das Pfad-Design ist NICHT final — Freigabe ausstehend.
        </p>
        <div style={{ display: 'flex', gap: 12 }}>
          <Button onClick={() => setSealState('idle')}>idle</Button>
          <Button onClick={() => setSealState('loading')}>loading</Button>
          <Button onClick={() => setSealState('route-change')}>route-change</Button>
        </div>
      </Section>
      <Seal state={sealState} onRouteAnimationEnd={() => setSealState('idle')} />
    </div>
  );
}
