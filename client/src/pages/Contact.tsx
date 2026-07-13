import { Mail } from 'lucide-react';
import { Stage, Card, Badge } from '@/components/primitives';
import { SectionHead } from '@/components/izure/primitives';

/* IZURE Contact — Public Layer (IMG_0405). PLATZHALTER.
   Später leicht ersetzbar: CONTACT_EMAIL setzen und das Formular an ein
   Backend/Mailto binden. Aktuell reine Anzeige, kein Versand. */

// TODO(Phase B): echte Kontaktadresse + Formular-Backend.
const CONTACT_EMAIL = '';

export default function ContactPage() {
  const mailto = CONTACT_EMAIL ? `mailto:${CONTACT_EMAIL}` : undefined;
  return (
    <div className="page-root" data-screen-label="Public · Contact">
      <section style={{ padding: '120px 0 100px', minHeight: '80vh' }}>
        <div className="shell">
          <SectionHead
            eyebrow="Public · Say hello"
            title="Contact"
            intro="Post, Kooperation, oder einfach ein Gruß — hier landet er. Formularversand folgt; bis dahin per Mail."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 4, marginTop: 40 }}>
            <Card style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--accent-primary-bright)' }}>
                <Mail size={22} strokeWidth={1.5} />
                <span className="t-label" style={{ color: 'var(--text-secondary)' }}>E-Mail</span>
              </div>
              {mailto ? (
                <a href={mailto} style={{ fontSize: 18, color: 'var(--text-primary)' }}>{CONTACT_EMAIL}</a>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 18, color: 'var(--text-tertiary)' }}>Adresse folgt</span>
                  <Badge>Platzhalter</Badge>
                </div>
              )}
            </Card>

            <Card style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span className="t-label" style={{ color: 'var(--text-secondary)' }}>Nachricht</span>
              <input disabled placeholder="Dein Name" style={inputStyle} />
              <input disabled placeholder="Deine E-Mail" style={inputStyle} />
              <textarea disabled placeholder="Worum geht's?" rows={4} style={{ ...inputStyle, resize: 'none' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Badge>Formular folgt</Badge>
                <span className="t-body" style={{ fontSize: 12 }}>Backend wird in Phase B angebunden.</span>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  background: 'var(--bg-card)',
  border: '1px solid var(--border-hairline)',
  borderRadius: 'var(--radius-card)',
  padding: '12px 14px',
  color: 'var(--text-primary)',
  fontFamily: 'Space Grotesk, sans-serif',
  fontSize: 14,
  outline: 'none',
};
