/**
 * IZURÉ — Entry App
 *
 * Replaces the previous Shadcn/Tailwind app with the Izuré tactical learning system.
 * The old App.tsx is preserved as App.tsx.original-backup.
 *
 * Design tokens are scoped to [data-izure="true"] — no Tailwind conflicts.
 */
import './izure/izure.css';
import { IzureApp } from './izure/IzureApp';

export default function App() {
  return <IzureApp />;
}
