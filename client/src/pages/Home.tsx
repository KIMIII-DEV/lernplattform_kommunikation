import { Suspense, lazy, useEffect, useState } from 'react';
import { Home as HomeIcon, LayoutGrid, Lock, LogOut, UserRound } from 'lucide-react';
import { Footer, GrainFilter, GrainOverlay } from '@/components/izure/primitives';
import IconRail, { IconRailItem, RailAction } from '@/components/shell/IconRail';
import ThemeToggle from '@/components/shell/ThemeToggle';
import { useIsMobile } from '@/components/shell/useIsMobile';
import { Seal } from '@/components/primitives';
import Experience from '@/experience/Experience';
import LoginPage from './Login';
import PrivateDashboard from './PrivateDashboard';
import StudyPage from './Study';
import BarkeeperPage from './Barkeeper';
import WirePage from './Wire';
import AboutPage from './About';
import MoodboardsPage from './Moodboards';

// DEV-Testbett für die Phase-2-Primitives — lazy, damit es nie im Prod-Bundle landet.
const PreviewPage = lazy(() => import('./Preview'));

export default function Home() {
  const [route, setRoute] = useState<string>(() => location.hash.slice(1) || '/');
  const [unlocked, setUnlocked] = useState<boolean>(() => sessionStorage.getItem('izure-unlocked') === '1');
  const [transitionBlack, setTransitionBlack] = useState(false);
  const [sealState, setSealState] = useState<'idle' | 'loading' | 'route-change'>('idle');
  const isMobile = useIsMobile();

  useEffect(() => {
    // Siegel (Blueprint Abschnitt 4): kurzer "Stempel-Impact" bei jedem
    // View-Wechsel. Nur auf echte hashchange-Events, nicht auf den
    // initialen Mount-Zustand.
    const onHash = () => {
      setRoute(location.hash.slice(1) || '/');
      setSealState('route-change');
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Das Study-OS-Cockpit trägt beide Enden: öffentlich als nicht-scrollbare
  // Startseite (`/`, Showcase) UND privat als echte Study (`/private/learn`,
  // hinter Login, mit Dossiers/getrackter Sim). Beide sind Vollbild-Cockpits:
  // keine globale Rail, kein Footer, kein Scroll.
  const isCockpit = route === '/' || route === '' || route === '/private/learn';
  const isPrivate = route.startsWith('/private');

  useEffect(() => {
    document.documentElement.setAttribute('data-layer', isPrivate ? 'private' : 'public');
  }, [isPrivate]);

  // Landingpage soll nicht scrollbar sein: auf dem Cockpit vertikalen Scroll sperren.
  useEffect(() => {
    document.documentElement.classList.toggle('cockpit-lock', isCockpit);
    return () => document.documentElement.classList.remove('cockpit-lock');
  }, [isCockpit]);

  const navigate = (to: string) => {
    if (to.startsWith('/private') && sessionStorage.getItem('izure-unlocked') !== '1') {
      location.hash = '/login';
      return;
    }
    const goingPrivate = !route.startsWith('/private') && to.startsWith('/private');
    const leavingPrivate = route.startsWith('/private') && !to.startsWith('/private');
    if (goingPrivate || leavingPrivate) {
      setTransitionBlack(true);
      setTimeout(() => {
        location.hash = to;
        window.scrollTo(0, 0);
        setTimeout(() => setTransitionBlack(false), 50);
      }, 400);
    } else {
      location.hash = to;
      window.scrollTo(0, 0);
    }
  };

  const unlock = () => {
    sessionStorage.setItem('izure-unlocked', '1');
    setUnlocked(true);
  };
  const lock = () => {
    sessionStorage.removeItem('izure-unlocked');
    setUnlocked(false);
    navigate('/');
  };

  const renderPage = () => {
    // Öffentliches Cockpit = Showcase: alle Szenen frei durchblätterbar, aber
    // der Sprung in die echte Study (Lernfeld-Dossier) führt über das Gate in
    // den privaten Layer.
    if (route === '/' || route === '') {
      return <Experience onOpenLf={() => navigate('/private/learn')} />;
    }
    if (route === '/about') return <AboutPage />;
    if (route === '/moodboards') return <MoodboardsPage />;
    if (route === '/login') return <LoginPage navigate={navigate} onUnlock={unlock} />;
    // Render-Gate (Defense-in-Depth): private Routen brauchen Unlock — greift auch,
    // wenn der Hash direkt gesetzt wird (z. B. das Tür-Icon im Cockpit).
    if (route.startsWith('/private') && !unlocked) {
      return <LoginPage navigate={navigate} onUnlock={unlock} />;
    }
    if (route === '/private') return <PrivateDashboard navigate={navigate} />;
    if (route === '/private/learn') return <StudyPage />;
    if (route === '/private/barkeeper') return <BarkeeperPage />;
    if (route === '/private/news') return <WirePage />;
    if (import.meta.env.DEV && route === '/preview') {
      return (
        <Suspense fallback={null}>
          <PreviewPage />
        </Suspense>
      );
    }
    return <Experience onOpenLf={() => navigate('/private/learn')} />;
  };

  // Auf dem Cockpit: keine globale Rail (es bringt seine eigene mit), kein Footer,
  // keine linke Einrückung — die Seite steht als ein Vollbild still.
  const showFooter = !isCockpit && !route.startsWith('/private') && route !== '/login';

  // Blueprint 5.1 — globale Shell (auf allen Nicht-Cockpit-Views). Der Backroom-Zweig
  // trägt die privaten Räume; „Study" zeigt jetzt auf das öffentliche Cockpit.
  const railItems: IconRailItem[] = [
    { id: '/', icon: HomeIcon, label: 'Home' },
    { id: '/about', icon: UserRound, label: 'About' },
    { id: '/moodboards', icon: LayoutGrid, label: 'Moods' },
    {
      id: '/private',
      icon: Lock,
      label: 'The Backroom',
      children: [
        { id: '/private/learn', label: 'Study', href: '/private/learn' },
        { id: '/private/barkeeper', label: 'The Barkeeper', href: '/private/barkeeper' },
        { id: '/private/news', label: 'Wire', href: '/private/news' },
      ],
    },
  ];

  return (
    <>
      <GrainFilter />
      <GrainOverlay />

      {/* Siegel Corner-Persistent (Blueprint Abschnitt 4) — auf Shell-Ebene,
          nie innerhalb einer Stage (deren filter wäre Containing-Block für fixed). */}
      <Seal state={sealState} onRouteAnimationEnd={() => setSealState('idle')} />

      {!isCockpit && (
        <IconRail
          items={railItems}
          activeId={route === '' ? '/' : route}
          onNavigate={navigate}
          bottom={
            <>
              <ThemeToggle />
              {isPrivate && <RailAction label="Step out" icon={LogOut} onClick={lock} />}
            </>
          }
        />
      )}

      {/* Rail 64px + Inset; wenn der aktive Zweig sein Kinder-Panel zeigt (private Routen),
          rückt der Content zusätzlich um die Panelbreite ein statt überdeckt zu werden.
          Kein Landing-Sonderfall mehr — die Flow-Landing (Phase 3) muss die Rail-Breite
          genauso kompensieren (Masterplan v3, 4.1).
          Mobil (<768px): Rail dockt unten, Content bekommt Bottom- statt Left-Padding. */}
      <main
        style={
          isMobile
            ? { paddingLeft: 0, paddingBottom: isCockpit ? 0 : 92 }
            : {
                paddingLeft: isCockpit ? 0 : isPrivate ? 276 : 88,
                transition: 'padding-left var(--motion-micro)',
              }
        }
      >
        {renderPage()}
      </main>

      {showFooter && <Footer />}

      {transitionBlack && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9000,
            background: '#000',
            animation: 'fadeBlack 800ms var(--ease)',
          }}
        />
      )}
    </>
  );
}
