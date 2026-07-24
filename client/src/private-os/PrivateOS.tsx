import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Grid3x3, BookOpen, Sparkles, Newspaper, CloudSun, TrendingUp, Music,
  LogOut, Search, Bell, Clock3,
} from 'lucide-react';
import { useAmbiance } from '@/contexts/AmbianceContext';
import DeckView from './views/DeckView';
import LerneckeView from './views/LerneckeView';
import MarcoView from './views/MarcoView';
import WireView from './views/WireView';
import WetterView from './views/WetterView';
import KapitalView from './views/KapitalView';
import AmbianceView from './views/AmbianceView';
import './private-os.css';

export type ViewId = 'deck' | 'lernecke' | 'marco' | 'wire' | 'wetter' | 'stocks' | 'ambiance';

const VIEWS: { id: ViewId; dossier: string; icon: typeof Grid3x3; tip: string }[] = [
  { id: 'deck', dossier: 'Command Deck', icon: Grid3x3, tip: 'Deck' },
  { id: 'lernecke', dossier: 'Lernecke', icon: BookOpen, tip: 'Lernecke' },
  { id: 'marco', dossier: 'Marco', icon: Sparkles, tip: 'Marco · KI' },
  { id: 'wire', dossier: 'Wire', icon: Newspaper, tip: 'Wire · News' },
  { id: 'wetter', dossier: 'Wetter', icon: CloudSun, tip: 'Wetter' },
  { id: 'stocks', dossier: 'Kapital', icon: TrendingUp, tip: 'Kapital' },
  { id: 'ambiance', dossier: 'Ambiance', icon: Music, tip: 'Ambiance' },
];
const ORDER: ViewId[] = VIEWS.map((v) => v.id);

const BOOT_KEY = 'private-os-booted';
const MOTION_KEY = 'izos-motion';

const DAYS = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
const MON = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
const p2 = (n: number) => String(n).padStart(2, '0');

interface CmdItem {
  sec: 'Räume' | 'Aktionen';
  label: string;
  key?: string;
  icon: typeof Grid3x3;
  go?: ViewId;
  fn?: () => void;
}

/* IZURÉ — Privat Layer OS. React-Port des vom Nutzer gelieferten Design-
   Handoffs (eigenes, selbstextrahierendes HTML-Bundle). Eine einzige
   Shell für den gesamten privaten Bereich: linke Rail, Command-Palette
   (⌘K), Topbar, 7 intern wechselbare Views — kein Scroll, nur
   Szenenwechsel (wie das öffentliche Cockpit, aber ein eigenständiges
   Design-System: Cinzel/Fraunces statt reinem Space Grotesk, bewusst
   ausschließlich dunkel). */
export default function PrivateOS({
  initialView,
  onViewChange,
  onExit,
  onOpenLernfeld,
}: {
  initialView: ViewId;
  onViewChange: (v: ViewId) => void;
  onExit: () => void;
  onOpenLernfeld: (moduleId: string) => void;
}) {
  const ambiance = useAmbiance();
  const [view, setView] = useState<ViewId>(initialView);
  const [exiting, setExiting] = useState<ViewId | null>(null);
  const [booted, setBooted] = useState(() => sessionStorage.getItem(BOOT_KEY) === '1');
  const [motionOn, setMotionOn] = useState(() => localStorage.getItem(MOTION_KEY) !== 'off');
  const [sealStamp, setSealStamp] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [sel, setSel] = useState(0);
  const [now, setNow] = useState(() => new Date());
  const panelRef = useRef<HTMLDivElement>(null);
  const cmdInputRef = useRef<HTMLInputElement>(null);
  const viewRef = useRef(view);
  viewRef.current = view;

  // Externe Navigation (z. B. Alt-Link) synchronisieren, ohne einen Klick auszulösen.
  useEffect(() => {
    if (initialView !== viewRef.current) go(initialView);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialView]);

  // Ambiance starten, sobald die View aktiv ist — auch bei direktem Deep-Link/
  // Reload auf /private/ambiance (go() feuert dort NICHT, da view bereits
  // beim ersten Render == initialView ist und sich nie "ändert").
  useEffect(() => {
    if (view === 'ambiance') ambiance.start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view]);

  const go = useCallback((v: ViewId) => {
    if (v === viewRef.current) return;
    const prev = viewRef.current;
    setExiting(prev);
    setTimeout(() => setExiting(null), 420);
    viewRef.current = v;
    setView(v);
    setSealStamp(true);
    setTimeout(() => setSealStamp(false), 520);
    onViewChange(v);
    if (v === 'ambiance') ambiance.start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onViewChange]);

  // Uhrzeit/Datum, sekündlich.
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const greet = (() => {
    const h = now.getHours();
    return h < 5 ? 'Gute Nacht' : h < 11 ? 'Guten Morgen' : h < 17 ? 'Guten Tag' : h < 22 ? 'Guten Abend' : 'Gute Nacht';
  })();

  // Boot — einmalig pro Session.
  useEffect(() => {
    if (booted) return;
    const t = setTimeout(() => { sessionStorage.setItem(BOOT_KEY, '1'); setBooted(true); }, motionOn ? 1550 : 60);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Ambient Fall-Muster (einmalig, zufällig, wie im Handoff via SVG-Data-URI).
  const fallRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const host = fallRef.current;
    if (!host) return;
    const cols = 26, rows = 16, cell = 46;
    let svg = `<svg width="${cols * cell}" height="${rows * cell}" viewBox="0 0 ${cols * cell} ${rows * cell}" xmlns="http://www.w3.org/2000/svg">`;
    for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
      const cx = x * cell + cell / 2, cy = y * cell + cell / 2;
      const op = (0.03 + Math.random() * 0.16).toFixed(2);
      svg += Math.random() < 0.12
        ? `<circle cx="${cx}" cy="${cy}" r="1.4" fill="rgba(201,169,110,${op})"/>`
        : `<circle cx="${cx}" cy="${cy}" r="1" fill="rgba(184,188,196,${op})"/>`;
    }
    svg += '</svg>';
    host.style.backgroundImage = `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
    host.style.backgroundRepeat = 'repeat';
  }, []);

  // Motion-Toggle — persistiert, pausiert Orbs/Animationen global.
  const setMotion = useCallback((on: boolean) => {
    setMotionOn(on);
    try { localStorage.setItem(MOTION_KEY, on ? 'on' : 'off'); } catch { /* ignore */ }
  }, []);

  // Command-Palette-Einträge.
  const CMDS: CmdItem[] = useMemo(() => [
    ...VIEWS.map((v, i) => ({ sec: 'Räume' as const, label: v.dossier, key: String(i + 1), icon: v.icon, go: v.id })),
    { sec: 'Aktionen', label: 'Fokus-Session starten', icon: BookOpen, fn: () => go('lernecke') },
    { sec: 'Aktionen', label: 'Marco fragen', icon: Sparkles, fn: () => go('marco') },
    { sec: 'Aktionen', label: 'Bewegung umschalten', key: 'M', icon: Clock3, fn: () => setMotion(!motionOn) },
  ], [go, motionOn, setMotion]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return CMDS.filter((c) => !q || c.label.toLowerCase().includes(q));
  }, [CMDS, query]);

  const runCmd = useCallback((c: CmdItem) => {
    setCmdOpen(false);
    if (c.go) go(c.go); else c.fn?.();
  }, [go]);

  const openCmd = useCallback(() => { setQuery(''); setSel(0); setCmdOpen(true); setTimeout(() => cmdInputRef.current?.focus(), 40); }, []);
  const closeCmd = useCallback(() => setCmdOpen(false), []);

  // Globale Tastatur: ⌘K/Strg+K, 1-7, M, Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const typing = /^(INPUT|TEXTAREA)$/.test((document.activeElement as HTMLElement)?.tagName || '');
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); cmdOpen ? closeCmd() : openCmd(); return; }
      if (e.key === 'Escape') { closeCmd(); return; }
      if (typing) return;
      if (e.key >= '1' && e.key <= '7') go(ORDER[+e.key - 1]);
      if (e.key.toLowerCase() === 'm') setMotion(!motionOn);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [cmdOpen, openCmd, closeCmd, go, motionOn, setMotion]);

  // Panel-Parallax.
  useEffect(() => {
    if (!motionOn) return;
    const onMove = (e: MouseEvent) => {
      const panel = panelRef.current;
      if (!panel) return;
      panel.style.setProperty('--po-rx', ((e.clientY / innerHeight - 0.5) * -3.2).toFixed(2) + 'deg');
      panel.style.setProperty('--po-ry', ((e.clientX / innerWidth - 0.5) * 3.2).toFixed(2) + 'deg');
    };
    document.addEventListener('mousemove', onMove);
    return () => document.removeEventListener('mousemove', onMove);
  }, [motionOn]);

  const meta = VIEWS.find((v) => v.id === view)!;

  return (
    <div className={`private-os ${booted ? 'po-ready' : ''} ${motionOn ? '' : 'po-motion-off'}`} data-screen-label={`Private OS · ${meta.dossier}`}>
      {/* Ambient */}
      <div className="po-bg" aria-hidden="true">
        <div className="po-bg-fall" ref={fallRef} />
        <div className="po-bg-dots" />
        <div className="po-bg-glow g1" />
        <div className="po-bg-glow g2" />
        {(['gA', 'gB', 'gC'] as const).map((c) => (
          <svg key={c} className={`po-glint ${c}`} viewBox="0 0 24 24" fill="none"><path d="M12 0 L13.4 10.6 L24 12 L13.4 13.4 L12 24 L10.6 13.4 L0 12 L10.6 10.6 Z" fill="currentColor" /></svg>
        ))}
        <div className="po-bg-vignette" />
        <div
          className="po-bg-grain"
          ref={(el) => {
            if (el && !el.style.backgroundImage) {
              el.style.backgroundImage = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E\")";
            }
          }}
        />
      </div>

      {/* Boot */}
      {!booted && (
        <div className="po-boot run">
          <svg className="po-boot-seal" width="46" height="46" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1" /><path d="M17 15h14M17 15l14 18M17 33h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
          <div className="po-boot-bar"><i /></div>
          <div className="po-boot-tag eyebrow">Privat Layer wird entsiegelt</div>
        </div>
      )}

      <main className="po-os">
        <div className="po-os-float">
          <div className={`po-panel ${view === 'ambiance' ? 'is-ambiance-active' : ''}`} ref={panelRef}>
            <div className="po-panel-sheen" />

            {/* RAIL */}
            <nav className="po-rail" aria-label="Räume">
              <div className="po-rail-mark" title="IZURÉ">
                <svg width="26" height="26" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1" /><path d="M17 15h14M17 15l14 18M17 33h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
              </div>
              <div className="po-rail-icons">
                {VIEWS.map((v) => (
                  <button key={v.id} className={`po-ric ${view === v.id ? 'is-on' : ''}`} data-tip={v.tip} aria-label={v.tip} onClick={() => go(v.id)}>
                    <v.icon size={20} strokeWidth={1.6} />
                  </button>
                ))}
              </div>
              <div className="po-rail-sep" />
              <div className="po-rail-hr" />
              <button className="po-ric po-rail-exit" data-tip="Layer verlassen" aria-label="Verlassen" onClick={onExit}>
                <LogOut size={20} strokeWidth={1.6} />
              </button>
            </nav>

            {/* STAGE */}
            <section className="po-stage">
              <header className="po-topbar">
                <div className="po-tb-eye">
                  <div className="po-tb-dossier">{meta.dossier}</div>
                  <div className="po-tb-sub">
                    <span className="eyebrow">{greet}.</span>
                    <span className="po-dot" />
                    <span className="po-tb-clock mono">{p2(now.getHours())}:{p2(now.getMinutes())}:{p2(now.getSeconds())}</span>
                    <span className="po-dot" />
                    <span className="mono">{p2(now.getDate())}. {MON[now.getMonth()]} {now.getFullYear()}</span>
                  </div>
                </div>
                <div className="po-tb-mark fr">IZUR<span>É</span></div>
                <div className="po-tb-actions">
                  <button className="po-cmd-btn" onClick={openCmd}><Search size={14} />Befehl<kbd>⌘K</kbd></button>
                  <button className="po-tgl" aria-label="Benachrichtigungen"><Bell size={16} strokeWidth={1.7} /></button>
                  <button className={`po-tgl ${motionOn ? '' : 'is-off'}`} aria-label="Bewegung" onClick={() => setMotion(!motionOn)}><Clock3 size={16} strokeWidth={1.7} /></button>
                </div>
              </header>

              <div className="po-views">
                {VIEWS.map((v) => (
                  <section
                    key={v.id}
                    className={`po-view ${view === v.id ? 'is-active' : ''} ${exiting === v.id ? 'is-exit' : ''}`}
                    data-view={v.id}
                    data-screen-label={v.dossier}
                  >
                    {v.id === 'deck' && <DeckView active={view === 'deck'} onGo={go} />}
                    {v.id === 'lernecke' && <LerneckeView active={view === 'lernecke'} onOpenLernfeld={onOpenLernfeld} />}
                    {v.id === 'marco' && <MarcoView active={view === 'marco'} />}
                    {v.id === 'wire' && <WireView />}
                    {v.id === 'wetter' && <WetterView active={view === 'wetter'} />}
                    {v.id === 'stocks' && <KapitalView active={view === 'stocks'} />}
                    {v.id === 'ambiance' && <AmbianceView />}
                  </section>
                ))}
              </div>

              <svg className={`po-seal ${sealStamp ? 'stamp' : ''}`} viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1" />
                <path d="M17 15h14M17 15l14 18M17 33h14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </section>
          </div>
        </div>
      </main>

      {/* COMMAND PALETTE */}
      <div className={`po-cmdk ${cmdOpen ? 'open' : ''}`} onMouseDown={(e) => { if (e.target === e.currentTarget) closeCmd(); }}>
        <div className="po-cmdk-box">
          <div className="po-cmdk-in">
            <Search size={18} />
            <input
              ref={cmdInputRef}
              type="text"
              placeholder="Raum wechseln, Aktion ausführen …"
              autoComplete="off"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setSel(0); }}
              onKeyDown={(e) => {
                if (e.key === 'ArrowDown') { e.preventDefault(); setSel((s) => (s + 1) % Math.max(1, filtered.length)); }
                else if (e.key === 'ArrowUp') { e.preventDefault(); setSel((s) => (s - 1 + filtered.length) % Math.max(1, filtered.length)); }
                else if (e.key === 'Enter') { e.preventDefault(); if (filtered[sel]) runCmd(filtered[sel]); }
              }}
            />
            <span className="po-esc">ESC</span>
          </div>
          <div className="po-cmdk-list scry">
            {(['Räume', 'Aktionen'] as const).map((sec) => {
              const rows = filtered.filter((c) => c.sec === sec);
              if (!rows.length) return null;
              return (
                <div key={sec}>
                  <div className="po-cmdk-sec">{sec}</div>
                  {rows.map((c) => {
                    const globalIdx = filtered.indexOf(c);
                    const Icon = c.icon;
                    return (
                      <div key={c.label} className={`po-cmdk-row ${globalIdx === sel ? 'sel' : ''}`} onClick={() => runCmd(c)}>
                        <span className="po-ci"><Icon size={15} strokeWidth={1.7} /></span>
                        <span className="po-ct">{c.label}</span>
                        {c.key && <span className="po-ck">{c.key}</span>}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
