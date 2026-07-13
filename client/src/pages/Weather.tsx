import { CloudSun, Wind, Droplets } from 'lucide-react';
import { Stage, Card, Badge, StatChain } from '@/components/primitives';
import { SectionHead } from '@/components/izure/primitives';

/* IZURE Wetter — Privat Layer (IMG_0405). PLATZHALTER.
   Später leicht ersetzbar: WEATHER_LOCATION setzen und in einem useEffect
   Open-Meteo abfragen (kostenlos, kein Key). Aktuell Demo-Anzeige. */

// TODO(Phase B): Ort + Open-Meteo-Abfrage.
const WEATHER_LOCATION = 'Ort folgt';

export default function WeatherPage() {
  return (
    <div className="page-root" data-screen-label="Private · Wetter">
      <section style={{ padding: '120px 0 100px', minHeight: '80vh' }}>
        <div className="shell">
          <SectionHead
            eyebrow="Private · Sky"
            title="Wetter"
            intro="Ein kurzer Blick nach draußen, bevor der Tag losgeht. Live-Daten folgen über Open-Meteo."
          />

          <Stage style={{ marginTop: 40, padding: '48px 44px', display: 'flex', alignItems: 'center', gap: 40, flexWrap: 'wrap' }}>
            <div style={{ color: 'var(--accent-primary-bright)' }}>
              <CloudSun size={72} strokeWidth={1.2} />
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
                <span className="t-label" style={{ color: 'var(--text-secondary)' }}>{WEATHER_LOCATION}</span>
                <Badge>Demo</Badge>
              </div>
              <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 64, lineHeight: 1, color: 'var(--text-primary)', fontVariantNumeric: 'tabular-nums' }}>
                —°
              </div>
              <div className="t-body" style={{ marginTop: 8 }}>Bedingungen folgen</div>
            </div>
          </Stage>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 4, marginTop: 40 }}>
            <Card style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <Wind size={22} color="var(--accent-primary-bright)" strokeWidth={1.5} />
              <div>
                <div className="t-label" style={{ color: 'var(--text-tertiary)' }}>Wind</div>
                <div style={{ fontSize: 20, color: 'var(--text-primary)' }}>— km/h</div>
              </div>
            </Card>
            <Card style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <Droplets size={22} color="var(--accent-primary-bright)" strokeWidth={1.5} />
              <div>
                <div className="t-label" style={{ color: 'var(--text-tertiary)' }}>Luftfeuchte</div>
                <div style={{ fontSize: 20, color: 'var(--text-primary)' }}>— %</div>
              </div>
            </Card>
            <Card style={{ display: 'flex', alignItems: 'center' }}>
              <StatChain items={[{ value: 'bald', label: 'Live via Open-Meteo' }]} />
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
