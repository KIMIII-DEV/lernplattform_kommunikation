import { useEffect, useState } from 'react';

/* Mobile-Breakpoint für die Rail (Masterplan Phase 10, Punkt 3 —
   Entscheidung per Plan-Freigabe): unter 768px dockt die Rail als
   horizontale Icon-Leiste an den unteren Rand. */

const QUERY = '(max-width: 767px)';

export function useIsMobile(): boolean {
  const [mobile, setMobile] = useState(() => typeof matchMedia !== 'undefined' && matchMedia(QUERY).matches);
  useEffect(() => {
    const mq = matchMedia(QUERY);
    const onChange = () => setMobile(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return mobile;
}
