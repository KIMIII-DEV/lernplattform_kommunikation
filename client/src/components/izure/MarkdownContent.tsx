import { Streamdown } from 'streamdown';

/* IZURE Markdown-Renderer — Masterplan v3.2, Abschnitt 14.2.
   Topic-Content in learningData.ts ist Markdown (Fett, Listen, GFM-Tabellen);
   bisher wurde er roh mit sichtbaren **Sternchen** angezeigt. streamdown war
   bereits installiert. Diese Komponente wird per React.lazy geladen, damit
   der Renderer als eigener Chunk mit der Dossier-View kommt, nicht im
   Haupt-Bundle. Styling über .izure-md in index.css (Token-System). */

export default function MarkdownContent({ children }: { children: string }) {
  return (
    <div className="izure-md">
      <Streamdown>{children}</Streamdown>
    </div>
  );
}
