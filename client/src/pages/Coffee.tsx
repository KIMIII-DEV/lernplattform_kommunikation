import { Coffee } from 'lucide-react';
import { Stage, Button, Badge } from '@/components/primitives';
import { SectionHead } from '@/components/izure/primitives';

/* IZURE Buy me a coffee — Public Layer (IMG_0405). PLATZHALTER.
   Später leicht ersetzbar: COFFEE_URL auf den echten Link setzen
   (Ko-fi / PayPal.me / BuyMeACoffee). Solange leer, zeigt der Button
   „Link folgt" und ist inaktiv. */

// TODO(Phase B): echten Tip-Jar-Link eintragen.
const COFFEE_URL = '';

export default function CoffeePage() {
  const ready = COFFEE_URL.length > 0;
  return (
    <div className="page-root" data-screen-label="Public · Buy me a coffee">
      <section style={{ padding: '120px 0 100px', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="shell" style={{ width: '100%' }}>
          <Stage style={{ maxWidth: 640, margin: '0 auto', padding: '56px 48px', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24, color: 'var(--accent-primary-bright)' }}>
              <Coffee size={44} strokeWidth={1.4} />
            </div>
            <SectionHead
              align="center"
              eyebrow="Public · Support"
              title="Buy me a coffee"
              intro="Wenn dir das hier den Tag ein bisschen besser macht: ein Espresso als Dankeschön hält den Laden am Laufen."
            />
            <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
              {ready ? (
                <a href={COFFEE_URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <Button>Einen Espresso ausgeben</Button>
                </a>
              ) : (
                <>
                  <Button disabled>Link folgt</Button>
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
