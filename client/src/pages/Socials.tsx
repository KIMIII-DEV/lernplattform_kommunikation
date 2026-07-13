import { Instagram, Music2, Film, Image as ImageIcon, ArrowUpRight } from 'lucide-react';
import { Card, Badge } from '@/components/primitives';
import { SectionHead } from '@/components/izure/primitives';
import type { LucideIcon } from 'lucide-react';

/* IZURE Socials — Public Layer (IMG_0405). PLATZHALTER.
   Später leicht ersetzbar: in SOCIALS die echten URLs eintragen. Solange
   url leer/'#' ist, wird der Eintrag als „bald" markiert und nicht verlinkt. */

interface Social {
  label: string;
  handle: string;
  url: string;
  icon: LucideIcon;
}

// TODO(Phase B): echte Profil-URLs eintragen.
const SOCIALS: Social[] = [
  { label: 'Instagram', handle: '@izure', url: '', icon: Instagram },
  { label: 'Spotify', handle: 'Playlists', url: '', icon: Music2 },
  { label: 'Letterboxd', handle: 'Films', url: '', icon: Film },
  { label: 'Pinterest', handle: 'Boards', url: '', icon: ImageIcon },
];

export default function SocialsPage() {
  return (
    <div className="page-root" data-screen-label="Public · Socials">
      <section style={{ padding: '120px 0 100px', minHeight: '80vh' }}>
        <div className="shell">
          <SectionHead
            eyebrow="Public · Channels"
            title="Socials"
            intro="Wo es sonst noch etwas zu sehen und zu hören gibt. Links folgen, sobald die Profile stehen."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 4, marginTop: 40 }}>
            {SOCIALS.map((s) => {
              const ready = s.url.length > 0 && s.url !== '#';
              const Icon = s.icon;
              const inner = (
                <Card style={{ display: 'flex', alignItems: 'center', gap: 16, cursor: ready ? 'pointer' : 'default' }}>
                  <div style={{ color: 'var(--accent-primary-bright)' }}><Icon size={24} strokeWidth={1.5} /></div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 16, color: 'var(--text-primary)' }}>{s.label}</div>
                    <div className="t-label" style={{ color: 'var(--text-tertiary)' }}>{s.handle}</div>
                  </div>
                  {ready ? <ArrowUpRight size={18} color="var(--text-secondary)" /> : <Badge>bald</Badge>}
                </Card>
              );
              return ready ? (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>{inner}</a>
              ) : (
                <div key={s.label}>{inner}</div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
