import { useEffect, useState } from 'react';
import { Footer, GrainFilter, GrainOverlay, PrivateNav, PublicNav } from '@/components/izure/primitives';
import LandingPage from './Landing';
import LoginPage from './Login';
import PrivateDashboard from './PrivateDashboard';
import StudyPage from './Study';
import BarkeeperPage from './Barkeeper';
import WirePage from './Wire';
import { MoodboardsPage } from './StubPages';
import AboutPage from './About';

export default function Home() {
  const [route, setRoute] = useState<string>(() => location.hash.slice(1) || '/');
  const [unlocked, setUnlocked] = useState<boolean>(() => sessionStorage.getItem('izure-unlocked') === '1');
  const [transitionBlack, setTransitionBlack] = useState(false);

  useEffect(() => {
    const onHash = () => setRoute(location.hash.slice(1) || '/');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const isPrivate = route.startsWith('/private');
  useEffect(() => {
    document.documentElement.setAttribute('data-layer', isPrivate ? 'private' : 'public');
  }, [isPrivate]);

  const navigate = (to: string) => {
    if (to.startsWith('/private') && !unlocked) {
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
    return <LandingPage navigate={navigate} />;
  };

  const isLanding = route === '/' || route === '';
  const showPublicNav = !route.startsWith('/private') && route !== '/login' && !isLanding;
  const showPrivateNav = route.startsWith('/private');
  const showFooter = !route.startsWith('/private') && route !== '/login' && !isLanding;

  return (
    <>
      <GrainFilter />
      <GrainOverlay />

      {showPublicNav && <PublicNav current={route} navigate={navigate} />}
      {showPrivateNav && <PrivateNav current={route} navigate={navigate} lock={lock} />}

      <main>{renderPage()}</main>

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
