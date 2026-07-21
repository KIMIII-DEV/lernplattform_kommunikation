import { createContext, useCallback, useContext, useMemo, useRef, useState, ReactNode } from 'react';

/* Ambiance-Player-State — auf Shell-Ebene (Home.tsx), NIE ans Ambiance-
   Page-Component gebunden. Grund: die Musik soll weiterlaufen, wenn man
   aus /private/ambiance heraus in einen anderen privaten Raum wechselt
   (Bug-Report: „Musik hört auf zu spielen, wenn man rausgeht" — das lag
   daran, dass der <iframe> Teil der Page war und beim Routenwechsel
   unmounted wurde). Das eigentliche <iframe> rendert AmbiancePlayer.tsx,
   einmalig in Home.tsx — dieser Context verbindet Ambiance.tsx (Steuerung)
   mit AmbiancePlayer (Darstellung + tatsächlicher DOM-Node). */

export const AMBIANCE_VIDEO_ID = 'kR-9AIXWIG4';
// TODO: Startzeitpunkt (Sekunden) für die gewünschte Video-Stelle setzen,
// sobald bekannt — aktuell startet der Loop am Anfang des Videos.
export const AMBIANCE_START_SECONDS = 0;

interface AmbianceApi {
  /** true sobald der Player zum ersten Mal gestartet wurde (lazy: kein
   *  Laden/Abspielen, solange niemand die Ambiance-Seite geöffnet hat). */
  active: boolean;
  playing: boolean;
  muted: boolean;
  start: () => void;
  stop: () => void;
  togglePlay: () => void;
  toggleMute: () => void;
  /** Vom AmbiancePlayer gesetzt, damit Steuerbefehle den echten iframe-Node treffen. */
  registerIframe: (el: HTMLIFrameElement | null) => void;
}

const AmbianceContext = createContext<AmbianceApi | null>(null);

export function AmbianceProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const registerIframe = useCallback((el: HTMLIFrameElement | null) => {
    iframeRef.current = el;
  }, []);

  const post = useCallback((func: string) => {
    iframeRef.current?.contentWindow?.postMessage(JSON.stringify({ event: 'command', func, args: [] }), '*');
  }, []);

  const start = useCallback(() => setActive(true), []);
  const stop = useCallback(() => {
    setActive(false);
    setPlaying(true);
    setMuted(true);
  }, []);
  const togglePlay = useCallback(() => {
    post(playing ? 'pauseVideo' : 'playVideo');
    setPlaying((p) => !p);
  }, [playing, post]);
  const toggleMute = useCallback(() => {
    post(muted ? 'unMute' : 'mute');
    setMuted((m) => !m);
  }, [muted, post]);

  const value = useMemo<AmbianceApi>(
    () => ({ active, playing, muted, start, stop, togglePlay, toggleMute, registerIframe }),
    [active, playing, muted, start, stop, togglePlay, toggleMute, registerIframe]
  );

  return <AmbianceContext.Provider value={value}>{children}</AmbianceContext.Provider>;
}

export function useAmbiance(): AmbianceApi {
  const ctx = useContext(AmbianceContext);
  if (!ctx) throw new Error('useAmbiance must be used within AmbianceProvider');
  return ctx;
}
