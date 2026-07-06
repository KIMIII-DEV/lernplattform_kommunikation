import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { RailAction } from './IconRail';

/* Theme-Toggle (Blueprint Phase 1, Punkt 5) — sitzt im Bottom-Slot der Icon-Rail.
   Persistenz übernimmt der bestehende ThemeContext (localStorage-Key "theme"). */

export default function ThemeToggle() {
  const { theme, toggleTheme, switchable } = useTheme();
  if (!switchable || !toggleTheme) return null;

  return (
    <RailAction
      label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      icon={theme === 'dark' ? Sun : Moon}
      onClick={toggleTheme}
    />
  );
}
