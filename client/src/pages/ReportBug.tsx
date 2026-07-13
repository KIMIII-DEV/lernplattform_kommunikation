import { Bug } from 'lucide-react';
import { Stage, Badge, Button } from '@/components/primitives';
import { SectionHead } from '@/components/izure/primitives';

/* IZURE Report a Bug — Public Layer (IMG_0405). PLATZHALTER.
   Später leicht ersetzbar: BUG_REPORT_URL auf ein Ziel setzen (GitHub-Issues-
   Link, Formular oder Mailto). Solange leer, ist der Button inaktiv. */

// TODO(Phase B): Ziel setzen — z. B. GitHub Issues / Formular / Mailto.
const BUG_REPORT_URL = '';

export default function ReportBugPage() {
  const ready = BUG_REPORT_URL.length > 0;
  return (
    <div className="page-root" data-screen-label="Public · Report a Bug">
      <section style={{ padding: '120px 0 100px', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="shell" style={{ width: '100%' }}>
          <Stage style={{ maxWidth: 620, margin: '0 auto', padding: '52px 44px', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 22, color: 'var(--accent-primary-bright)' }}>
              <Bug size={40} strokeWidth={1.4} />
            </div>
            <SectionHead
              align="center"
              eyebrow="Public · Feedback"
              title="Report a Bug"
              intro="Irgendwo hakt's? Sag Bescheid. Kurz beschreiben, was passiert ist — je konkreter, desto schneller ist es gefixt."
            />
            <div style={{ marginTop: 34, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
              {ready ? (
                <a href={BUG_REPORT_URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <Button>Bug melden</Button>
                </a>
              ) : (
                <>
                  <Button disabled>Kanal folgt</Button>
                  <Badge>Platzhalter</Badge>
                </>
              )}
            </div>
          </Stage>
        </div>
      </section>
    </div>
  );
}
