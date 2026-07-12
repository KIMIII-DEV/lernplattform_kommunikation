import { useEffect, useMemo, useRef, useState } from 'react';
import { MODULES, ModuleColor, ModuleSummary } from '@/lib/modules';
import { flashcards, quizQuestions } from '@/lib/learningData';
import { useProgress } from '@/lib/useProgress';
import './experience.css';

/* IZURÉ Experience — Phase 12. React-Port des Original-Handoffs (exp.js aus
   dem Standalone-Bundle extrahiert). Szenen statt Scroll: Hero → Lernfelder →
   Karten → Simulation, eine Glass-Bühne, Dial-Navigation.

   Architektur-Kontrakt (Masterplan Phase 12):
   - NUR die Lernecke bekommt diese Bühne; Marco/Wire/Public bleiben Routen.
   - Lernfelder-Szene = Auswahl-Einstieg → onOpenLf führt in die bestehende
     Dossier/Flashcard/Quiz-Struktur (keine Content-Dopplung).
   - Alle Zahlen echt aus learningData/useProgress, keine Demo-Werte.
   - Genehmigte Ausnahmen (nur hier): Hover-Lifts + Card-Schatten,
     kein prefers-reduced-motion (Animationen laufen immer, Toggle entfernt),
     Quiz-Fehler in Bordeaux. Wheel-Geste NUR auf Szene 0+1 (Hero/Lernfelder),
     damit sie nie mit Inhalts-Scroll kollidiert. */

const LF_COLOR: Record<ModuleColor, string> = {
  gold: 'var(--accent-gold-light)',
  bordeaux: 'var(--accent-bordeaux-light)',
  petrol: 'var(--accent-petrol-light)',
  olive: 'var(--accent-olive)',
  rust: 'var(--accent-rust-light)',
};

const RING_C = 119.4; // 2πr bei r=19 (Original-Geometrie)
const SIM_SIZE = 10;
const BOOT_KEY = 'izx-booted';

function Seal({ size }: { size: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="11" strokeWidth="1" />
      <path d="M8.5 8 v8" strokeWidth="1.25" />
      <path d="M11.5 8 h4.5 l-4.5 8 h4.5" strokeWidth="1.25" />
    </svg>
  );
}

const SCENE_ICONS = [
  <path key="h" d="M4 11 L12 4.5 L20 11 V19.5 H14.5 V14.5 H9.5 V19.5 H4 Z" />,
  <g key="l"><path d="M12 4 L21 8.5 L12 13 L3 8.5 Z" /><path d="M4.5 12.5 L12 16.5 L19.5 12.5" /><path d="M4.5 16 L12 20 L19.5 16" /></g>,
  <g key="k"><rect x="3.5" y="7" width="13" height="12.5" rx="2" /><path d="M8 4.5 H18.5 A2 2 0 0 1 20.5 6.5 V15" /></g>,
  <g key="s"><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="0.8" fill="currentColor" /></g>,
];
const SCENE_LABELS = ['Home', 'Lernfelder', 'Karten', 'Simulation'];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Experience({ onOpenLf }: { onOpenLf: (m: ModuleSummary) => void }) {
  const { progress } = useProgress();
  const [cur, setCur] = useState(0);
  const curRef = useRef(0);
  const busyRef = useRef(false);
  const [booted, setBooted] = useState(() => sessionStorage.getItem(BOOT_KEY) === '1');
  const [dockSwap, setDockSwap] = useState(false);
  const [dockScene, setDockScene] = useState(0);
  const sceneRefs = useRef<(HTMLDivElement | null)[]>([]);
  const panelRef = useRef<HTMLElement>(null);

  /* --- echte Zahlen (Content-Korrektur, Masterplan-Pflicht) --- */
  const totalDone = MODULES.filter((m) => progress.modules[m.id]?.completed).length;
  const pct = Math.round((totalDone / MODULES.length) * 100);
  const totalCards = flashcards.length;
  const mcQuestions = useMemo(() => quizQuestions.filter((q) => q.type === 'multiple-choice' && (q.options?.length ?? 0) === 4), []);

  const DOCK = useMemo(
    () => [
      { k: 'Study OS', t: 'Ein Ort, keine Seite.', x: 'Kino-Ruhe statt Tab-Chaos: alles lebt auf einer Bühne — Szenen statt Scroll, Bewegung statt Seitenwechsel.', s: `${MODULES.length} Lernfelder`, c: 'Step inside', go: 1 },
      { k: 'Lernfelder', t: 'Fünf Räume, ein Weg.', x: 'Vom Betrieb bis zur Kundenbindung — jeder Raum hat eigene Farbe und eigenes Tempo. Klick öffnet das Dossier.', s: `${pct} % Gesamt`, c: 'Weiter zu Karten', go: 2 },
      { k: 'Flashcards', t: 'Umdrehen, merken, weiter.', x: `${totalCards} Karten gegen das Vergessen, quer durch alle Lernfelder. Tippe die Karte, um sie zu wenden.`, s: `${totalCards} Karten`, c: 'Zur Simulation', go: 3 },
      { k: 'Klausur-Simulation', t: 'Ernstfall, ohne Ernst.', x: `${SIM_SIZE} Fragen pro Durchlauf aus einem Pool von ${mcQuestions.length} — quer durch alle Lernfelder, mit sofortigem Feedback.`, s: `${mcQuestions.length} Fragen im Pool`, c: 'Zurück zum Anfang', go: 0 },
    ],
    [pct, totalCards, mcQuestions.length]
  );

  /* --- Szenenwechsel (Original-Logik: out-Stagger → Swap → in-Stagger) --- */
  const go = (n: number) => {
    const N = 4;
    n = ((n % N) + N) % N;
    if (busyRef.current || n === curRef.current) return;
    busyRef.current = true;
    const prev = curRef.current;
    curRef.current = n;
    setCur(n);
    setDockSwap(true);
    setTimeout(() => {
      setDockScene(n);
      setDockSwap(false);
    }, 240);
    const a = sceneRefs.current[prev];
    const b = sceneRefs.current[n];
    const swap = () => {
      a?.classList.remove('is-active', 'out');
      b?.classList.add('is-active', 'in');
      setTimeout(() => {
        b?.classList.remove('in');
        busyRef.current = false;
      }, 980);
    };
    a?.classList.add('out');
    a?.classList.remove('in');
    setTimeout(swap, 390);
  };

  /* --- Boot (1x pro Session — Rückkehr aus dem Dossier bootet nicht erneut) --- */
  useEffect(() => {
    const reveal = () => {
      const s0 = sceneRefs.current[0];
      s0?.classList.add('is-active', 'in');
      setTimeout(() => s0?.classList.remove('in'), 1600);
    };
    if (booted) {
      reveal();
      return;
    }
    const t = setTimeout(() => {
      sessionStorage.setItem(BOOT_KEY, '1');
      setBooted(true);
      reveal();
    }, 1520);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* --- Ambient: Fall-Keyframes + Grain (Original-JS, tokenfarben-basiert) --- */
  useEffect(() => {
    const grain = document.querySelector('.izx-bg-grain') as HTMLElement | null;
    if (grain) {
      grain.style.backgroundImage =
        'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'2\'/%3E%3CfeColorMatrix type=\'saturate\' values=\'0\'/%3E%3C/filter%3E%3Crect width=\'160\' height=\'160\' filter=\'url(%23n)\'/%3E%3C/svg%3E")';
    }
    const el = document.querySelector('.izx-bg-fall') as HTMLElement | null;
    if (!el) return;
    const steel = getComputedStyle(document.documentElement).getPropertyValue('--accent-primary').trim() || '#B8BCC4';
    const hex = steel.replace('#', '');
    const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.substr(i, 2), 16));
    const C = `rgba(${r},${g},${b},0.9)`;
    const ROWS = [235, 252, 150, 253, 204, 134, 179, 299, 215, 281, 158, 210];
    const imgs: string[] = [], sizes: string[] = [], p0: string[] = [], p1: string[] = [];
    ROWS.forEach((rh, i) => {
      const xA = i * 25, xB = i * 25 + 3, xC = 151.5 + i * 25;
      const st = Math.round(Math.random() * 260);
      const st2 = Math.round(Math.random() * 260);
      const K = 26 + i * 3;
      imgs.push(
        `radial-gradient(4px 100px at 0px ${rh}px, ${C}, transparent)`,
        `radial-gradient(4px 100px at 300px ${rh}px, ${C}, transparent)`,
        `radial-gradient(1.5px 1.5px at 150px ${rh / 2}px, ${C} 100%, transparent 150%)`
      );
      sizes.push(`300px ${rh}px`, `300px ${rh}px`, `300px ${rh}px`);
      p0.push(`${xA}px ${st}px`, `${xB}px ${st}px`, `${xC}px ${st2}px`);
      p1.push(`${xA}px ${st + rh * K}px`, `${xB}px ${st + rh * K}px`, `${xC}px ${st2 + rh * K}px`);
    });
    el.style.backgroundImage = imgs.join(', ');
    el.style.backgroundSize = sizes.join(', ');
    const st = document.createElement('style');
    st.textContent = `@keyframes izxFall { from { background-position: ${p0.join(', ')}; } to { background-position: ${p1.join(', ')}; } }`;
    document.head.appendChild(st);
    return () => st.remove();
  }, []);

  /* --- Panel-Tilt --- */
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (matchMedia('(hover: none)').matches) return;
      const panel = panelRef.current;
      if (!panel) return;
      const x = e.clientX / innerWidth - 0.5;
      const y = e.clientY / innerHeight - 0.5;
      panel.style.setProperty('--rx', (-y * 2.0).toFixed(2) + 'deg');
      panel.style.setProperty('--ry', (x * 2.4).toFixed(2) + 'deg');
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  /* --- Wheel/Touch/Tastatur: Szenenwechsel NUR auf Hero + Lernfeldern (Risiko-Regel) --- */
  const stepCardRef = useRef<(d: number) => void>(() => {});
  useEffect(() => {
    let cool = 0;
    const wheelOk = () => curRef.current <= 1;
    const onWheel = (e: WheelEvent) => {
      if (!wheelOk()) return;
      const now = Date.now();
      if (now - cool < 1100 || Math.abs(e.deltaY) < 18) return;
      cool = now;
      go(curRef.current + (e.deltaY > 0 ? 1 : -1));
    };
    let ty: number | null = null;
    const onTouchStart = (e: TouchEvent) => { ty = e.touches[0].clientY; };
    const onTouchEnd = (e: TouchEvent) => {
      if (ty === null || !wheelOk()) { ty = null; return; }
      const dy = ty - e.changedTouches[0].clientY;
      if (Math.abs(dy) > 46) go(curRef.current + (dy > 0 ? 1 : -1));
      ty = null;
    };
    const onKey = (e: KeyboardEvent) => {
      if (curRef.current === 2) {
        // Karten-Szene: Pfeile blättern Karten, wechseln keine Szene
        if (e.key === 'ArrowRight') stepCardRef.current(1);
        else if (e.key === 'ArrowLeft') stepCardRef.current(-1);
        return;
      }
      if (!wheelOk()) return;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown') go(curRef.current + 1);
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') go(curRef.current - 1);
    };
    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('keydown', onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* --- Waveform-Balken (einmalig zufällig, wie Original) --- */
  const waveBars = useMemo(
    () => Array.from({ length: 26 }, () => ({ h: Math.round(18 + Math.random() * 78), d: (Math.random() * -2).toFixed(2) })),
    []
  );

  /* --- Flashcards: echter Cross-LF-Stapel --- */
  const [ci, setCi] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [fcSwap, setFcSwap] = useState(false);
  const card = flashcards[ci];
  const cardLf = card ? card.id.slice(0, 3).toUpperCase().replace('LF', 'LF·0') : '';
  const stepCard = (dir: number) => {
    setFlipped(false);
    setTimeout(() => {
      setCi((i) => (i + dir + flashcards.length) % flashcards.length);
      setFcSwap(true);
      setTimeout(() => setFcSwap(false), 380);
    }, flipped ? 200 : 60);
  };
  stepCardRef.current = stepCard;

  /* --- Simulation: echter Cross-LF-Fragenpool, 10 pro Durchlauf --- */
  const [simSeed, setSimSeed] = useState(0);
  const simSet = useMemo(() => shuffle(mcQuestions).slice(0, SIM_SIZE), [mcQuestions, simSeed]);
  const [qi, setQi] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const q = simSet[qi];
  const correctIdx = q ? q.options!.findIndex((o) => o === (Array.isArray(q.correctAnswer) ? q.correctAnswer[0] : q.correctAnswer)) : -1;
  const answer = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    if (i === correctIdx) setScore((s) => s + 1);
  };
  const nextQ = () => {
    if (qi === simSet.length - 1) {
      setSimSeed((s) => s + 1);
      setQi(0);
      setScore(0);
      setPicked(null);
    } else {
      setQi((i) => i + 1);
      setPicked(null);
    }
  };

  const d = DOCK[dockScene];

  return (
    <div className="page-root" data-screen-label="06 Private · Lernecke · Experience">
      {/* Ambient */}
      <div className="izx-bg" aria-hidden="true">
        <div className="izx-bg-fall" />
        <div className="izx-bg-dots" />
        <div className="izx-bg-glow g1" />
        <div className="izx-bg-glow g2" />
        <div className="izx-bg-vignette" />
        <div className="izx-bg-grain" />
        {(['gA', 'gB', 'gC'] as const).map((c) => (
          <svg key={c} className={`izx-glint ${c}`} viewBox="0 0 24 24">
            <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" fill="currentColor" />
          </svg>
        ))}
      </div>

      {/* Boot — nur beim ersten Betreten pro Session */}
      {!booted && (
        <div className="izx-boot run">
          <div className="izx-boot-seal"><Seal size={34} /></div>
          <div className="izx-boot-bar"><i /></div>
          <div className="izx-boot-tag t-label">Study OS · Boot</div>
        </div>
      )}

      <div className="izx-viewport">
        <div className={`izx-float ${booted ? 'ready' : 'pre'}`}>
          <main className="izx-panel" ref={panelRef}>
            <div className="izx-sheen" />

            {/* Rail (Szenen-Navigation; mobil Bottom-Dock) */}
            <nav className="izx-rail" aria-label="Szenen-Navigation">
              <div className="izx-rail-mark"><Seal size={28} /></div>
              <div className="izx-rail-icons">
                {SCENE_LABELS.map((label, i) => (
                  <button
                    key={label}
                    className={`izx-ric ${cur === i ? 'is-on' : ''}`}
                    onClick={() => go(i)}
                    aria-label={label}
                    title={label}
                  >
                    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      {SCENE_ICONS[i]}
                    </svg>
                  </button>
                ))}
              </div>
              <button className="izx-ric izx-rail-exit" aria-label="Zurück zum Backroom" title="Zurück zum Backroom" onClick={() => { location.hash = '/private'; }}>
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 4.5 H5.5 V19.5 H10" /><path d="M15 8 L19 12 L15 16" /><path d="M19 12 H9.5" />
                </svg>
              </button>
            </nav>

            {/* Main */}
            <section className="izx-main">
              <header className="izx-top">
                <div className="izx-pills">
                  {SCENE_LABELS.map((label, i) => (
                    <button key={label} className={`izx-pill ${cur === i ? 'is-on' : ''}`} onClick={() => go(i)}>
                      {label}
                    </button>
                  ))}
                </div>
                <div className="izx-mark">izuré<span>.</span></div>
                <div className="izx-top-actions" />
              </header>

              <div className="izx-stage">
                {/* Szene 1 · Hero */}
                <div className="izx-scene" ref={(el) => { sceneRefs.current[0] = el; }} data-screen-label="Experience · Hero">
                  <div className="izx-ghost izx-sv" style={{ ['--i' as string]: 0 }}>studieren</div>
                  <div className="izx-hero">
                    <div className="izx-eyebrow t-label izx-sv" style={{ ['--i' as string]: 1 }}>· Ein Ort, keine Seite ·</div>
                    <div className="izx-chrome-wrap izx-sv" style={{ ['--i' as string]: 2 }}>
                      <svg className="izx-orbit" viewBox="0 0 600 240" aria-hidden="true">
                        <ellipse cx="300" cy="120" rx="285" ry="88" />
                        <path className="orb-star" d="M540 52 L542 60 L550 62 L542 64 L540 72 L538 64 L530 62 L538 60 Z" />
                      </svg>
                      <h1 className="izx-chrome">IZURÉ</h1>
                      <span className="izx-chrome-sheen" aria-hidden="true">IZURÉ</span>
                    </div>
                    <p className="izx-hero-sub izx-sv" style={{ ['--i' as string]: 3 }}>
                      Study OS für Kommunikation im Dialogmarketing.<br />
                      Fünf Lernfelder, {totalCards} Karten, Klausur-Simulation — ohne eine Seite zu scrollen.
                    </p>
                    <div className="izx-ctas izx-sv" style={{ ['--i' as string]: 4 }}>
                      <button className="izx-solid" onClick={() => go(1)}>Step inside</button>
                      <button className="izx-ghost-cta" onClick={() => go(2)}>Karten ansehen <span className="izx-arr">→</span></button>
                    </div>
                  </div>
                </div>

                {/* Szene 2 · Lernfelder (echte Westermann-LF, Klick → Dossier) */}
                <div className="izx-scene" ref={(el) => { sceneRefs.current[1] = el; }} data-screen-label="Experience · Lernfelder">
                  <div className="izx-lf-wrap">
                    <div className="izx-scene-head izx-sv" style={{ ['--i' as string]: 0 }}>
                      <h2>Lernfelder</h2>
                      <span className="t-label">{String(MODULES.length).padStart(2, '0')} Räume · {pct} % Gesamt</span>
                    </div>
                    <div className="izx-lf-grid">
                      {MODULES.map((m, i) => {
                        const p = progress.modules[m.id]?.completed ? 100 : 0;
                        return (
                          <button
                            key={m.id}
                            className="izx-lf-card izx-sv"
                            style={{ ['--i' as string]: i + 1, ['--lf' as string]: LF_COLOR[m.color] }}
                            onClick={() => onOpenLf(m)}
                          >
                            <div className="izx-lf-code t-label">{m.code.replace('-', '·')}</div>
                            <div className="izx-lf-name">{m.short}</div>
                            <div className="izx-lf-ring">
                              <svg viewBox="0 0 46 46" width="46" height="46">
                                <circle className="bgc" cx="23" cy="23" r="19" fill="none" strokeWidth="2.5" />
                                <circle className="fgc" cx="23" cy="23" r="19" fill="none" strokeWidth="2.5" strokeDasharray={RING_C} strokeDashoffset={RING_C * (1 - p / 100)} />
                              </svg>
                              <div className="izx-lf-pct">{p}</div>
                            </div>
                            <div className="izx-lf-open">Öffnen <span className="izx-arr">→</span></div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Szene 3 · Karten (echter Cross-LF-Stapel) */}
                <div className="izx-scene" ref={(el) => { sceneRefs.current[2] = el; }} data-screen-label="Experience · Karten">
                  <div className="izx-ghost izx-sv" style={{ ['--i' as string]: 0 }}>merken</div>
                  <div className="izx-fc-wrap">
                    <div className="izx-fc-stage izx-sv" style={{ ['--i' as string]: 1 }}>
                      <div className={`izx-fc ${flipped ? 'flipped' : ''} ${fcSwap ? 'swap' : ''}`} onClick={() => setFlipped(!flipped)}>
                        <div className="izx-fc-face">
                          <div className="izx-fc-tag t-label">{cardLf} · Frage {ci + 1}</div>
                          <div className="izx-fc-q">{card?.question}</div>
                          <div className="izx-fc-hint">Tippen zum Umdrehen</div>
                        </div>
                        <div className="izx-fc-face izx-fc-back">
                          <div className="izx-fc-a">{card?.answer}</div>
                          <div className="izx-fc-src">{card?.category}</div>
                        </div>
                      </div>
                    </div>
                    <div className="izx-fc-nav izx-sv" style={{ ['--i' as string]: 2 }}>
                      <button className="izx-cbtn" onClick={(e) => { e.stopPropagation(); stepCard(-1); }} aria-label="Vorherige Karte">←</button>
                      <span className="izx-fc-count">{String(ci + 1).padStart(2, '0')} / {flashcards.length}</span>
                      <button className="izx-cbtn" onClick={(e) => { e.stopPropagation(); stepCard(1); }} aria-label="Nächste Karte">→</button>
                    </div>
                  </div>
                </div>

                {/* Szene 4 · Simulation (echter Cross-LF-Pool) */}
                <div className="izx-scene" ref={(el) => { sceneRefs.current[3] = el; }} data-screen-label="Experience · Simulation">
                  <div className="izx-qz-wrap">
                    <div className="izx-scene-head izx-sv" style={{ ['--i' as string]: 0 }}>
                      <span className="t-label" style={{ color: 'var(--accent-primary)' }}>Klausur-Simulation · quer durch alle Lernfelder</span>
                    </div>
                    <div className="izx-qz-q izx-sv" style={{ ['--i' as string]: 1 }}>{q?.question}</div>
                    <div className="izx-qz-opts">
                      {q?.options?.map((opt, i) => {
                        const isOk = picked !== null && i === correctIdx;
                        const isBad = picked === i && i !== correctIdx;
                        return (
                          <button
                            key={`${qi}-${i}`}
                            className={`izx-qz-opt izx-sv ${isOk ? 'ok' : ''} ${isBad ? 'bad' : ''}`}
                            style={{ ['--i' as string]: i + 2 }}
                            disabled={picked !== null}
                            onClick={() => answer(i)}
                          >
                            <span className="izx-qz-letter">{String.fromCharCode(65 + i)}</span>
                            <span>{opt}</span>
                          </button>
                        );
                      })}
                    </div>
                    <div className="izx-qz-foot izx-sv" style={{ ['--i' as string]: 6 }}>
                      <span className="izx-qz-meta">Frage {qi + 1} / {simSet.length} · {score} richtig</span>
                      <button className={`izx-solid sm izx-qz-next ${picked !== null ? 'show' : ''}`} onClick={nextQ}>
                        {qi === simSet.length - 1 ? 'Neuer Durchlauf' : 'Nächste Frage'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Dots + Pfeile */}
                <div className="izx-dots" aria-hidden="true">
                  {SCENE_LABELS.map((_, i) => (
                    <span key={i} className={`izx-dot ${cur === i ? 'is-on' : ''}`} />
                  ))}
                </div>
                <div className="izx-navarr">
                  <button className="izx-cbtn" onClick={() => go(cur - 1)} aria-label="Vorherige Szene">←</button>
                  <button className="izx-cbtn" onClick={() => go(cur + 1)} aria-label="Nächste Szene">→</button>
                </div>
              </div>

              {/* Dock */}
              <aside className={`izx-dock ${dockSwap ? 'swap' : ''}`}>
                <div className="izx-dock-kicker t-label">{d.k}</div>
                <h3 className="izx-dock-title">{d.t}</h3>
                <p className="izx-dock-text">{d.x}</p>
                <div className="izx-dock-row">
                  <span className="izx-dock-stat">{d.s}</span>
                  <button className="izx-solid sm" onClick={() => go(d.go)}>{d.c}</button>
                </div>
              </aside>
            </section>

            {/* Side */}
            <aside className="izx-side">
              <div className="izx-side-card">
                <div className="izx-sc-label t-label">Signal · Fortschritt</div>
                <div className="izx-wave">
                  {waveBars.map((b, i) => (
                    <i key={i} style={{ ['--h' as string]: `${b.h}%`, ['--d' as string]: `${b.d}s` }} />
                  ))}
                </div>
                <div className="izx-sc-meta">
                  <b>{pct} %</b> Gesamt · {totalDone}/{MODULES.length} Lernfelder abgeschlossen
                </div>
              </div>
              <div className="izx-side-card izx-dial-card">
                <div className="izx-sc-label t-label">Navigator</div>
                <div className="izx-dial" title="Klick: nächste Szene" onClick={() => go(cur + 1)}>
                  <svg viewBox="0 0 200 200">
                    <circle className="izx-d-ring" cx="100" cy="100" r="92" />
                    <g>
                      {Array.from({ length: 48 }, (_, i) => {
                        const a = (i / 48) * Math.PI * 2;
                        const major = i % 12 === 0;
                        const r1 = major ? 79 : 84, r2 = 91;
                        return (
                          <line
                            key={i}
                            x1={100 + r1 * Math.sin(a)}
                            y1={100 - r1 * Math.cos(a)}
                            x2={100 + r2 * Math.sin(a)}
                            y2={100 - r2 * Math.cos(a)}
                            className={`izx-d-tick ${major ? 'major' : ''}`}
                          />
                        );
                      })}
                    </g>
                    <g className="izx-d-rot" style={{ transform: `rotate(${cur * 90}deg)` }}>
                      <circle className="izx-d-notch" cx="100" cy="22" r="4.5" />
                      <circle className="izx-d-notch-halo" cx="100" cy="22" r="9" />
                    </g>
                  </svg>
                  <div className="izx-dial-num">
                    {String(cur + 1).padStart(2, '0')}<small>/ 04</small>
                  </div>
                </div>
                <div className="izx-sc-meta">Klick, Scroll-Geste oder ←/→ wechseln die Szene.</div>
              </div>
            </aside>
          </main>
        </div>
      </div>

      <footer className="izx-baseline">
        IZURÉ MMXXVI · Study OS · <b>Scroll = Szenenwechsel</b> — die Seite selbst steht still.
      </footer>
    </div>
  );
}
