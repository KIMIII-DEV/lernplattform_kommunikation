import { Suspense, lazy, useEffect, useState } from 'react';
import { Home as HomeIcon, LayoutGrid, Lock, LogOut, UserRound } from 'lucide-react';
import { Footer, GrainFilter, GrainOverlay } from '@/components/izure/primitives';
import IconRail, { IconRailItem, RailAction } from '@/components/shell/IconRail';
import ThemeToggle from '@/components/shell/ThemeToggle';
import { useIsMobile } from '@/components/shell/useIsMobile';
import { Seal } from '@/components/primitives';
import LandingPage from './Landing';
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

  const isPrivate = route.startsWith('/private');
  useEffect(() => {
    document.documentElement.setAttribute('data-layer', isPrivate ? 'private' : 'public');
  }, [isPrivate]);

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
    if (route === '/' || route === '') return <LandingPage navigate={navigate} />;
    if (route === '/about') return <AboutPage />;
    if (route === '/moodboards') return <MoodboardsPage />;
    if (route === '/login') return <LoginPage navigate={navigate} onUnlock={unlock} />;
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
    return <LandingPage navigate={navigate} />;
  };

  const isLanding = route === '/' || route === '';
  const showFooter = !route.startsWith('/private') && route !== '/login';

  // Blueprint 5.1 — globale Shell: eine Rail für beide Layer. Der Backroom-Zweig
  // trägt die drei privaten Räume als children (expandiert nur, wenn aktiv).
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

      {/* Rail 64px + Inset; wenn der aktive Zweig sein Kinder-Panel zeigt (private Routen),
          rückt der Content zusätzlich um die Panelbreite ein statt überdeckt zu werden.
          Kein Landing-Sonderfall mehr — die Flow-Landing (Phase 3) muss die Rail-Breite
          genauso kompensieren (Masterplan v3, 4.1).
          Mobil (<768px): Rail dockt unten, Content bekommt Bottom- statt Left-Padding. */}
      <main
        style={
          isMobile
            ? { paddingLeft: 0, paddingBottom: 92 }
            : {
                paddingLeft: isPrivate ? 276 : 88,
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
