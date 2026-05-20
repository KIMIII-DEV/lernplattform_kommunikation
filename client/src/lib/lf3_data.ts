// IZURE — Lernfeld 3: Mit Kundinnen und Kunden kommunizieren
// Quelle: Westermann „Kaufleute für Dialogmarketing", S. 210–316

import type { Topic, Flashcard, QuizQuestion } from './learningData';

export const lf3Topics: Topic[] = [
  {
    id: 'lf3-1-1',
    title: '1.1 Texte nach DIN 5008',
    description: 'Schreib- und Gestaltungsregeln, Aufbau des Geschäftsbriefs.',
    examRelevance: 'medium',
    content: `**DIN 5008** = Schreib- und Gestaltungsregeln für die Textverarbeitung.

**Bestandteile eines Geschäftsbriefs:**
- Briefkopf
- Anschriftenfeld (max. 9 Zeilen)
- Bezugszeichenzeile (Ihre Zeichen, Unsere Zeichen, Datum)
- Betreff (ohne das Wort „Betreff")
- Anrede + Komma
- Brieftext (danach Kleinschreibung)
- Grußformel
- Unterschrift
- Anlagen, Verteiler`,
    keyPoints: [
      'DIN 5008 = Schreib-/Gestaltungsregeln',
      'Anschriftenfeld max. 9 Zeilen',
      'Betreff ohne das Wort „Betreff"',
      'Nach Anrede + Komma: Kleinschreibung',
    ],
  },
  {
    id: 'lf3-1-2',
    title: '1.2 Kundenorientiert formulieren',
    description: 'Sie-Stil, positive Sprache, Textbausteine, E-Mail-Gestaltung.',
    examRelevance: 'medium',
    content: `**Grundsätze kundenorientierter Formulierung:**
- Wir-Stil vermeiden, **Sie-Stil** bevorzugen
- positive Formulierungen
- aktive Sätze
- klare, kurze Sätze
- Fachwörter erklären

**Textbausteine** = vorgefertigte Textmodule für wiederkehrende Inhalte (Bestellbestätigung, Reklamationsantwort, Mahnung).
- Vorteile: schnell + konsistent
- Nachteile: unpersönlich + standardisiert

**E-Mail-Gestaltung:** aussagekräftige Betreffzeile, Anrede mit Komma, kurze Absätze, Signatur. Disclaimer-Pflicht im B2B. CC/BCC-Logik beachten.`,
    keyPoints: [
      'Sie-Stil statt Wir-Stil',
      'Positive, aktive, kurze Sätze',
      'Textbausteine: schnell aber unpersönlich',
    ],
  },
  {
    id: 'lf3-2-1',
    title: '2.1 Die 3 Kommunikationsmittel',
    description: 'Verbal, paraverbal, nonverbal und die Bedeutung am Telefon.',
    examRelevance: 'high',
    content: `**Drei Kommunikationsmittel:**
- **Verbal** — das gesprochene oder geschriebene Wort (gewählte Worte)
- **Paraverbal** — die **hörbare** Ausdrucksform: Tonfall, Lautstärke, Tempo, Stimmlage, Pausen, Modulation
- **Nonverbal** — die **sichtbare** Körpersprache: Mimik, Gestik, Haltung, Blick, Distanz

**Kongruenz** = Übereinstimmung aller drei Mittel.
**Inkongruenz** = Widerspruch zwischen den Mitteln (z. B. „Ich freue mich" mit gelangweilter Stimme).

**Folge fürs Telefon:** Beim Telefonieren entfallen die **nonverbalen** Anteile. Deshalb muss besonders auf die Übereinstimmung von verbalen und paraverbalen Anteilen geachtet werden.`,
    keyPoints: [
      'Verbal = Wort, paraverbal = hörbar, nonverbal = sichtbar',
      'Kongruenz = Übereinstimmung aller 3',
      'Am Telefon entfällt das Nonverbale',
    ],
  },
  {
    id: 'lf3-2-2',
    title: '2.2 Sender-Empfänger-Modell',
    description: 'Codierung, Decodierung und drei Quellen für Informationsverlust.',
    examRelevance: 'high',
    content: `**Drei Elemente:**
1. **Sender** — codiert die Nachricht durch Kommunikationsmittel
2. **Nachricht** — Inhalt / Information
3. **Empfänger** — decodiert und reagiert

**Kommunikationsformen:**
- **Ein-Weg-Kommunikation** — der Empfänger bleibt in der Zuhörerrolle
- **Zwei-Wege-Kommunikation** — der Empfänger antwortet und wird selbst zum Sender

Decodierung funktioniert nur über **gemeinsame Zeichen** (Worte, Gesten, Grammatik, Dialekt).

**3 Quellen für Informationsverlust:**
1. Was man meint, ist oft nicht das, was man sagt.
2. Was man sagt, ist nicht das, was der andere hört.
3. Was der andere hört, ist nicht zwangsläufig verstanden.`,
    keyPoints: [
      '3 Elemente: Sender, Nachricht, Empfänger',
      'Ein-Weg vs. Zwei-Wege-Kommunikation',
      'Decodierung braucht gemeinsame Zeichen',
      '3 Verlustquellen: meinen ≠ sagen ≠ hören ≠ verstehen',
    ],
  },
  {
    id: 'lf3-2-3',
    title: '2.3 Watzlawick — Die 5 Axiome',
    description: 'Die fünf Grundsätze menschlicher Kommunikation.',
    examRelevance: 'high',
    content: `**Paul Watzlawick** — Kommunikationsforscher. „Axiom" = anerkannter Grundsatz ohne Beweis.

**1. Axiom:** „Man kann **nicht nicht** kommunizieren." Jedes Verhalten ist Kommunikation — auch Schweigen.

**2. Axiom:** Jede Kommunikation hat einen **Inhalts-** und einen **Beziehungsaspekt**, wobei der Beziehungsaspekt den Inhaltsaspekt bestimmt (= Metakommunikation).

**3. Axiom:** Die Natur einer Beziehung ist durch die **Interpunktion** der Kommunikationsabläufe bedingt. Jeder Partner glaubt, der andere habe begonnen.

**4. Axiom:** Kommunikation bedient sich **digitaler und analoger** Modalitäten. Digital = Worte/Zeichen, analog = Körpersprache/Stimmlage.

**5. Axiom:** Kommunikationsabläufe sind **symmetrisch** (Gleichheit) oder **komplementär** (Unterschiedlichkeit).`,
    keyPoints: [
      'Axiom 1: nicht nicht kommunizieren',
      'Axiom 2: Inhalt + Beziehung, Beziehung bestimmt Inhalt',
      'Axiom 3: Interpunktion — keiner hat „angefangen"',
      'Axiom 4: digital + analog',
      'Axiom 5: symmetrisch vs. komplementär',
    ],
  },
  {
    id: 'lf3-2-4',
    title: '2.4 Schulz von Thun — 4 Seiten einer Nachricht',
    description: 'Das Vier-Ohren-Modell der quadratischen Kommunikation.',
    examRelevance: 'high',
    content: `**Friedemann Schulz von Thun** — Kommunikationspsychologe. Baut auf Watzlawicks 2. Axiom auf. Auch „quadratische Kommunikation" oder „Vier-Ohren-Modell".

**Die 4 Seiten / 4 Ohren:**
- **Sachinhalt** — worüber ich informiere
- **Selbstoffenbarung** — was ich von mir selbst kundgebe
- **Beziehung** — was ich von dir halte und wie wir zueinander stehen
- **Appell** — wozu ich dich veranlassen möchte

**Beispiel „Ich kann diese Aufgaben nicht lösen!"**
- Sachinhalt: kann die Aufgaben nicht lösen
- Selbstoffenbarung: „ich bin gestresst"
- Beziehung: „du hast Verständnis"
- Appell: „hilf mir"

Der Empfänger hört alle 4 Ohren **gleichzeitig**. Die **Beziehungsseite** hat das größte Konfliktpotenzial.`,
    keyPoints: [
      '4 Seiten: Sachinhalt, Selbstoffenbarung, Beziehung, Appell',
      'Empfänger hört alle 4 Ohren gleichzeitig',
      'Beziehungsseite = größtes Konfliktpotenzial',
      'Baut auf Watzlawicks 2. Axiom auf',
    ],
  },
  {
    id: 'lf3-2-5',
    title: '2.5 Berne — Transaktionsanalyse: Ich-Zustände',
    description: 'Eltern-Ich, Erwachsenen-Ich, Kind-Ich mit ihren Ausprägungen.',
    examRelevance: 'high',
    content: `**Eric Berne** — Psychiater. Popularisiert durch „Ich bin okay – du bist okay".

**3 Ich-Zustände mit insgesamt 6 Ausprägungen:**

- **Eltern-Ich (EL)** — 2 Ausprägungen:
  - Nährendes/fürsorgliches Eltern-Ich (ELn) — unterstützend, beratend
  - Kritisches Eltern-Ich (ELK) — streng, kritisch, belehrend
- **Erwachsenen-Ich (ER)** — 1 Ausprägung: konstruktiv, fragend, objektiv, lösungsorientiert
- **Kind-Ich (K)** — 3 Ausprägungen:
  - Freies Kind-Ich (Kf) — freudig, kreativ, spontan
  - Angepasstes Kind-Ich (Ka) — gehemmt, gehorsam
  - Rebellisches Kind-Ich (Kr) — trotzig, aggressiv, fordernd

**Egogramm** = Auswertung, wie stark einzelne Ich-Zustände bei einer Person vertreten sind.`,
    keyPoints: [
      '3 Ich-Zustände: Eltern, Erwachsener, Kind',
      '6 Ausprägungen: ELn/ELK · ER · Kf/Ka/Kr',
      'EL = 2, ER = 1, K = 3 Ausprägungen',
      'Egogramm = Verteilung der Ich-Zustände',
    ],
  },
  {
    id: 'lf3-2-6',
    title: '2.5 Berne — Transaktionsarten & Grundhaltungen',
    description: 'Parallele, gekreuzte, verdeckte Transaktion; vier Grundhaltungen.',
    examRelevance: 'high',
    content: `**3 Transaktionsarten:**
- **Parallele Transaktion** — Antwort kommt aus dem **angesprochenen** Ich-Zustand zurück. Kommunikation läuft reibungslos.
- **Gekreuzte Transaktion** — Antwort kommt aus einem **anderen** Ich-Zustand als angesprochen. Führt oft zu Störungen.
- **Verdeckte Transaktion** — auf **2 Ebenen gleichzeitig** (offen verbal + versteckt para-/nonverbal). Gefährlich, wenn nicht erkannt.

**4 Grundhaltungen:**
1. Ich o.k. – Du o.k. = **Gewinner**
2. Ich o.k. – Du nicht o.k.
3. Ich nicht o.k. – Du o.k.
4. Ich nicht o.k. – Du nicht o.k. = **Verlierer**

**Strategie im Beschwerdemanagement:** Verärgerte Kunden sind oft im ELK oder Kr. Zuerst aus dem angesprochenen Zustand reagieren (Spiegeln), dann „sanfter Wechsel" auf das Erwachsenen-Ich.

**Grundsatz:** Negative Zuwendung ist besser als gar keine Zuwendung.`,
    keyPoints: [
      'Parallel = reibungslos, gekreuzt = Störung, verdeckt = 2 Ebenen',
      'Gewinner = Ich o.k./Du o.k.; Verlierer = beide nicht o.k.',
      'Strategie: spiegeln, dann sanfter Wechsel auf ER',
      'Negative Zuwendung > keine Zuwendung',
    ],
  },
  {
    id: 'lf3-2-7',
    title: '2.6 Das Johari-Fenster',
    description: 'Vier Quadranten der Selbst- und Fremdwahrnehmung.',
    examRelevance: 'medium',
    content: `**Joseph Luft + Harry Ingham** — Modell zur Selbst- und Fremdwahrnehmung.

**Die 4 Quadranten:**

| | Mir bekannt | Mir unbekannt |
|---|---|---|
| Anderen bekannt | **A: Öffentliche Person / Arena** | **C: Blinder Fleck** |
| Anderen unbekannt | **B: Privatperson** | **D: Unbekanntes / Unbewusstes** |

**Wege zur Vergrößerung der Arena (A):**
- **Offenheit / Selbstoffenbarung** → verkleinert Quadrant B
- **Rückmeldung / Feedback** → verkleinert Quadrant C (blinder Fleck)

**Praxis:** Im Coaching wird der blinde Fleck durch Feedback verkleinert.`,
    keyPoints: [
      'A = Arena, B = Privat, C = blinder Fleck, D = Unbewusstes',
      'Offenheit verkleinert B',
      'Feedback verkleinert C (blinden Fleck)',
    ],
  },
  {
    id: 'lf3-2-8',
    title: '2.7 Neurolinguistisches Programmieren (NLP)',
    description: 'Pacing, Rapport, Leading — und der Ethik-Hinweis.',
    examRelevance: 'high',
    content: `**Richard Bandler + John Grinder** — NLP ist eine **Sammlung von Kommunikationstechniken**, ausdrücklich **keine wissenschaftliche Theorie**.

**Wortbedeutung:**
- **N (Neurologisch)** — geistig-seelische Vorgänge, innere Repräsentationssysteme
- **L (Linguistisch)** — sprachlicher / körpersprachlicher Ausdruck
- **P (Programmieren)** — Lernen, Verarbeiten, Reorganisieren

**Innere Landkarte** = die subjektive Wahrnehmung der Wirklichkeit. „Die Landkarte ist nicht die Landschaft."

**3 Methoden:**
- **Pacing** — Spiegeln des Gesprächspartners (Stimme, Gestik, Mimik anpassen)
- **Rapport** — positive Gesprächsatmosphäre, entsteht durch Pacing
- **Leading** — nach gelungenem Rapport den Partner sanft zu neuem Verhalten führen

**Ethik:** NLP ist **kein Manipulationswerkzeug** — niemand darf gegen seinen Willen beeinflusst werden.`,
    keyPoints: [
      'NLP = Techniksammlung, KEINE Wissenschaft',
      'Pacing → Rapport → Leading',
      'Innere Landkarte ≠ Realität',
      'Ethik: keine Manipulation gegen den Willen',
    ],
  },
  {
    id: 'lf3-2-9',
    title: '2.8 Maslow — Bedürfnispyramide',
    description: 'Fünf hierarchisch geordnete Bedürfnisstufen.',
    examRelevance: 'high',
    content: `**Abraham Maslow** — fünf hierarchisch geordnete Stufen (von unten nach oben):

1. **Physiologische Grundbedürfnisse** — Essen, Trinken, Schlaf, Atem
2. **Sicherheitsbedürfnisse** — Schutz, Wohnung, Arbeitsplatz
3. **Sozialbedürfnisse** — Freundschaft, Familie, Zugehörigkeit
4. **Wertschätzung und Anerkennung** — Lob, Status, Erfolg
5. **Selbstverwirklichung** — individuelle Entwicklung, persönliche Ziele

**Grundregel:** Höhere Stufen werden erst relevant, wenn die darunterliegenden erfüllt sind.`,
    keyPoints: [
      'Von unten: physiologisch → Sicherheit → sozial → Anerkennung → Selbstverwirklichung',
      'Höhere Stufe erst nach Erfüllung der niedrigeren',
      '5 Stufen, hierarchisch',
    ],
  },
  {
    id: 'lf3-3-1',
    title: '3.1 Klassische Rhetorik — 5 Phasen',
    description: 'Die fünf Phasen der Redevorbereitung.',
    examRelevance: 'medium',
    content: `**5 Phasen der Redevorbereitung:**
1. **Inventio** — Stoffsammlung
2. **Dispositio** — Gliederung
3. **Elocutio** — Formulierung
4. **Memoria** — Memorieren
5. **Actio / Pronuntiatio** — Aussprache, Körpersprache, Vortrag`,
    keyPoints: [
      '5 Phasen: Inventio, Dispositio, Elocutio, Memoria, Actio',
      'Inventio = sammeln, Dispositio = gliedern',
      'Actio = der eigentliche Vortrag',
    ],
  },
  {
    id: 'lf3-3-2',
    title: '3.2.1 Argumentationstechnik',
    description: 'Der Vierschritt einer überzeugenden Argumentation.',
    examRelevance: 'medium',
    content: `**Aufbau einer Argumentation:**

**These → Begründung → Beispiel → Schlussfolgerung**

- **These** — die Behauptung / Aussage
- **Begründung** — warum die These zutrifft
- **Beispiel** — konkrete Veranschaulichung
- **Schlussfolgerung** — Zusammenfassung / Handlungsempfehlung`,
    keyPoints: [
      'These → Begründung → Beispiel → Schlussfolgerung',
      'Beispiel macht das Argument greifbar',
    ],
  },
  {
    id: 'lf3-3-3',
    title: '3.2.2 Fragetechnik',
    description: 'Sieben Fragearten und der Fragetrichter.',
    examRelevance: 'high',
    content: `**Fragetechnik** = Einsatz verschiedener Frageformen zur Gesprächssteuerung und Informationsbeschaffung.

**7 Fragearten:**
- **Offene Frage** (W-Frage) — lange Antworten, viel Information. Beginn der Bedarfsermittlung.
- **Geschlossene Frage** (Ja/Nein) — kurze, eindeutige Antworten. Ende der Bedarfsermittlung, Absicherung.
- **Alternativfrage** — 2 Optionen zur Wahl. Terminvereinbarung.
- **Suggestivfrage** — drängt zu einer Antwort. Manipulativ — nicht in der Bedarfsermittlung.
- **Gegenfrage** — dreht die Frage zurück. Bei manipulativen Fragen.
- **Rhetorische Frage** — erwartet keine Antwort. Stilmittel.
- **Intonationsfrage** — Aussage wird durch die Stimme zur Frage.

**Fragetrichter** = vom Allgemeinen zum Speziellen, von offen zu geschlossen.`,
    keyPoints: [
      '7 Fragearten: offen, geschlossen, alternativ, suggestiv, Gegen-, rhetorisch, Intonation',
      'Offen am Anfang, geschlossen am Ende',
      'Fragetrichter: allgemein → speziell, offen → geschlossen',
      'Suggestivfrage ist manipulativ',
    ],
  },
  {
    id: 'lf3-3-4',
    title: '3.2.3 Aktives Zuhören',
    description: 'Carl Rogers und das Zurückmelden von Inhalt und Emotion.',
    examRelevance: 'high',
    content: `**Carl Rogers** — Psychologe, Begründer der klientenzentrierten Gesprächsführung.

**Aktives Zuhören** = dem Gesprächspartner **Inhalt UND Emotion** zurückmelden.

Es geht nicht nur darum, das Gesagte zu wiederholen — auch das Gefühl dahinter wird gespiegelt.

**Pseudo-Zuhören** = vorgetäuschtes Hören. Es wird vom Partner schnell entlarvt und wirkt als Gesprächsstörer.`,
    keyPoints: [
      'Carl Rogers = Begründer',
      'Aktives Zuhören = Inhalt + Emotion zurückmelden',
      'Pseudo-Zuhören wird schnell entlarvt',
    ],
  },
  {
    id: 'lf3-3-5',
    title: '3.2.4 Gesprächsstörer & Gesprächsförderer',
    description: 'Was Gespräche blockiert und was sie öffnet.',
    examRelevance: 'high',
    content: `**Gesprächsstörer:**
- Vorwürfe / Anklagen
- Befehlen, drohen
- Belehren, moralisieren
- vorschnelle Lösungen
- Ironie / Sarkasmus
- Bagatellisieren
- Pseudo-Zuhören
- Ablenkung
- Generalisierungen („immer", „nie")
- Diagnosen stellen

**Gesprächsförderer:**
- Pausen einbauen
- aktives Zuhören
- Paraphrasieren
- nicht unterbrechen
- nachfragen
- positive Wertschätzung`,
    keyPoints: [
      'Störer: Vorwurf, Befehl, Belehrung, vorschnelle Lösung, Ironie',
      'Förderer: Pausen, aktives Zuhören, Paraphrasieren, nachfragen',
      'Generalisierungen („immer/nie") sind Störer',
    ],
  },
  {
    id: 'lf3-3-6',
    title: '3.2.5 Sprechausdruck',
    description: 'Lautstärke, Intonation, Tempo, Aussprache, Pausen.',
    examRelevance: 'medium',
    content: `**Aspekte des Sprechausdrucks:**
- **Lautstärke** — hörbar ohne Anstrengung. Zu laut = aggressiv/hektisch, zu leise = unsicher/inkompetent.
- **Intonation / Stimmlage** — Tonlagen, Tonhöhen, Klangfarben variieren.
- **Sprechtempo** — nicht zu schnell, nicht zu langsam; Pausen einbauen.
- **Aussprache / Artikulation** — deutlich, dialektfrei.
- **Pausen** — nicht länger als 3–5 Sekunden, sonst unangenehm.`,
    keyPoints: [
      'Zu laut = aggressiv, zu leise = unsicher',
      'Pausen max. 3–5 Sekunden',
      'Intonation variieren, deutlich artikulieren',
    ],
  },
  {
    id: 'lf3-3-7',
    title: '3.2.6 Körpersprache am Telefon',
    description: 'Warum Haltung und Lächeln auch am Telefon zählen.',
    examRelevance: 'high',
    content: `Obwohl der Kunde den Mitarbeiter im Callcenter **nicht sieht**, beeinflusst dessen Körpersprache das Gesprächsergebnis erheblich.

Die Körpersprache wirkt **direkt auf die Stimme** — der Kunde hört also, welche Haltung der Mitarbeiter einnimmt.

- **Lächeln in der Stimme** wird wahrgenommen.
- **Aufrechte / stehende Haltung** verbessert Volumen und Klang.
- **Liegende Haltung** verschlechtert die Stimme.`,
    keyPoints: [
      'Körpersprache wirkt auf die Stimme — auch am Telefon',
      'Lächeln ist hörbar',
      'Aufrechte Haltung verbessert den Klang',
    ],
  },
  {
    id: 'lf3-4-1',
    title: '4.1 Wahrnehmungstypen — VAK-Modell',
    description: 'Visuell, auditiv, kinästhetisch — und passende Sprache.',
    examRelevance: 'high',
    content: `Das **VAK-Modell** stammt aus dem NLP.

**Drei Wahrnehmungstypen:**
- **Visuell** (sehen) — „Ich sehe…", „bildhaft", „Da sehe ich rot". Strategie: bildhaft formulieren, Prospekte/Internetseiten zeigen.
- **Auditiv** (hören) — „Habe ich richtig gehört", „Das klingt vernünftig". Strategie: ähnliche Formulierungen, klare Wortwahl.
- **Kinästhetisch** (fühlen/tasten/tun) — „Das setzt mich unter Druck", „fühle mich gut aufgehoben". Strategie: Fühl-Sprache, Probeexemplare anbieten.

**Regel:** Meist Mischformen — auf 1–2 dominante Sinne achten.`,
    keyPoints: [
      'VAK: visuell, auditiv, kinästhetisch',
      'Sprache an den dominanten Sinn anpassen',
      'Stammt aus dem NLP, meist Mischformen',
    ],
  },
  {
    id: 'lf3-4-2',
    title: '4.2 Die 7 Kundentypen',
    description: 'Typische Kundentypen und ihre Gesprächsstrategien.',
    examRelevance: 'high',
    content: `**Die 7 Kundentypen mit Strategie:**
- **Der Besserwisser** — weiß alles besser. Strategie: um Hilfe bitten, NIE zurechtweisen.
- **Der Vielredner** — redet viel, schweift ab. Strategie: gezielte Unterbrechungen, Zusammenfassungen.
- **Der Aggressive** — wütend, unhöflich. Strategie: nicht provozieren lassen, ruhig bleiben.
- **Der Ungeduldige** — wenig Zeit. Strategie: ruhig bleiben, mit Fragen im Dialog halten.
- **Der Impulsive** — schnell begeistert, schnell wieder weg. Strategie: verbindlicher Abschluss.
- **Der Entscheidungsschwache** — zögerlich, viele Einwände. Strategie: nicht drängen, Fragetechnik, Zwischenergebnisse zusammenfassen.
- **Der Schweiger** — einsilbig, introvertiert. Strategie: offene Fragen, Zeit lassen.`,
    keyPoints: [
      'Besserwisser: um Hilfe bitten, nie zurechtweisen',
      'Aggressiver: nicht provozieren lassen',
      'Entscheidungsschwacher: nicht drängen',
      'Schweiger: offene Fragen, Zeit lassen',
    ],
  },
  {
    id: 'lf3-4-3',
    title: '4.3 Sprachverhalten & Buchstabiertafel',
    description: 'Verständigungshilfen bei Fremdsprache und Dialekt.',
    examRelevance: 'low',
    content: `**Verständigungsschwierigkeiten:**
- **Fremdsprache** — Spezialisten oder Übersetzer einsetzen
- **Dialekt** — entsprechende Mitarbeiter einsetzen
- **Buchstabiertafel** — zum eindeutigen Buchstabieren:
  - Deutschland: Anton, Bertha, Cäsar, Dora …
  - ITU (international): Alfa, Bravo, Charlie, Delta …`,
    keyPoints: [
      'Buchstabiertafel Deutschland: Anton, Bertha, Cäsar …',
      'ITU international: Alfa, Bravo, Charlie …',
      'Bei Fremdsprache: Übersetzer/Spezialisten',
    ],
  },
  {
    id: 'lf3-5-1',
    title: '5.1 Physiologie des Sprechens',
    description: 'Atmung, Stimmgebung, Artikulation und die Anatomie.',
    examRelevance: 'medium',
    content: `**Der Sprechvorgang besteht aus 3 Teilen:**
1. **Atmung (Respiration)**
2. **Stimmgebung (Phonation)**
3. **Aussprache (Artikulation)**

**Anatomie:**
- Der **Kehlkopf** enthält zwei **Stimmbänder / Stimmlippen**.
- Sie verschließen die Luftröhre bis auf einen Spalt = **Stimmritze (Glottis)**.
- Der lufthaltige Raum oberhalb = **Ansatzrohr (Vokaltrakt)** = Rachen + Mund + Nase.
- Beim Atmen sind die Stimmbänder entspannt, die Stimmritze breit.
- Beim Sprechen werden die Stimmlippen angespannt → die Luft setzt sie in Schwingung → der **Stimmklang** entsteht.
- Gute Nutzung des Ansatzrohrs = volle **Resonanz**.`,
    keyPoints: [
      '3 Teile: Atmung → Phonation → Artikulation',
      'Kehlkopf enthält die Stimmbänder',
      'Stimmritze = Glottis, Ansatzrohr = Rachen+Mund+Nase',
      'Resonanz durch gute Nutzung des Ansatzrohrs',
    ],
  },
  {
    id: 'lf3-5-2',
    title: '5.2 Stimmbelastungen & Stimmpflege',
    description: 'Was die Stimme belastet und wie man sie schützt.',
    examRelevance: 'medium',
    content: `**Stimmbelastungen im Callcenter:**
- unnatürliches Sprechen (zu hohe Stimmlage)
- lauteres Sprechen in lauter Umgebung → mechanische Überbelastung
- trockene Heizungsluft
- fehlende Ergonomie / Fehlhaltung
- Stress / emotionale Belastung

Folge: **Heiserkeit**, schlimmstenfalls **chronische Heiserkeit** → Arbeitsunfähigkeit.

**Stimmpflege / Stimmhygiene:**
- Wetter — Schal tragen, Zugluft und Klimaanlagen meiden
- trockene Luft — viel trinken, lüften
- Stress — kurze Pause, frische Luft, Lockerungsübungen
- Rauchen — unterlassen, mindestens vor/nach stimmlicher Belastung

**Stimmtraining:** ökonomische, entspannte Atmung; Artikulation verbessern; Entspannung üben.`,
    keyPoints: [
      'Belastung: unnatürliche Stimmlage, Lärm, trockene Luft, Stress',
      'Folge: Heiserkeit bis chronische Heiserkeit',
      'Pflege: trinken, lüften, Schal, nicht rauchen',
    ],
  },
  {
    id: 'lf3-6-1',
    title: '6.1 Stress: Eustress, Disstress & Stressoren',
    description: 'Stressarten, Auslöser und die Emotionsarbeit im Callcenter.',
    examRelevance: 'high',
    content: `**Stress** = Zustand körperlicher und geistiger Anspannung, hervorgerufen durch überhöhte Belastungen.

**Körperliche Reaktion:** Adrenalin-Ausschüttung, Pulserhöhung, Blutdruckanstieg, Muskelanspannung.

**Zwei Arten:**
- **Eustress** — positiv empfundener Stress; anregend, leistungssteigernd (Lob, Erfolg).
- **Disstress** — negativ empfundener Stress; angespannt, unkonzentriert (Versagensangst, Überforderung).

**Stressor** = der äußere Reiz, der Stress auslöst — egal ob Eu- oder Disstress.

**Typische Stressoren:** Über-/Unterforderung, Verantwortung, Mobbing, Betriebsklima, Termindruck, Lärm, Raumklima.

**Emotionsarbeit** (callcenter-spezifisch) = die Kluft zwischen gefühlter und vorgeschriebener Stimmung — besonders zehrend. Die Anonymität des Kunden senkt die Hemmschwelle zu pöbeln.`,
    keyPoints: [
      'Eustress = positiv, Disstress = negativ',
      'Stressor = Auslöser (≠ Stress = Zustand)',
      'Emotionsarbeit = Kluft gefühlte ↔ vorgeschriebene Stimmung',
    ],
  },
  {
    id: 'lf3-6-2',
    title: '6.2 Stressprävention & Stressbewältigung',
    description: 'Stress vermeiden vs. aufgebauten Stress abbauen.',
    examRelevance: 'high',
    content: `**Zwei Strategien im Umgang mit Stress:**

**Stressprävention** — Stressoren reduzieren, Stress gar nicht erst entstehen lassen:
- Zeitmanagement
- klare Ziele und Zuständigkeiten
- ergonomischer Arbeitsplatz
- abwechslungsreiche Tätigkeiten
- klare Kommunikation
- Konflikte schnell klären

**Stressbewältigung** — bereits aufgebauten Stress abbauen:
- Sport
- Massage
- Entspannungstechniken, Meditation
- autogenes Training, Yoga`,
    keyPoints: [
      'Prävention = Stress vermeiden (vorher)',
      'Bewältigung = Stress abbauen (nachher)',
      'Prävention: Zeitmanagement, Ergonomie, klare Ziele',
      'Bewältigung: Sport, Entspannung, autogenes Training',
    ],
  },
];

export const lf3Flashcards: Flashcard[] = [
  // Schriftliche Kommunikation
  { id: 'lf3-f1', category: 'Schriftliche Kommunikation', question: 'Was regelt die DIN 5008?', answer: 'Die Schreib- und Gestaltungsregeln für die Textverarbeitung (u. a. den Aufbau des Geschäftsbriefs).' },
  { id: 'lf3-f2', category: 'Schriftliche Kommunikation', question: 'Wie viele Zeilen hat das Anschriftenfeld maximal?', answer: 'Maximal 9 Zeilen.' },
  { id: 'lf3-f3', category: 'Schriftliche Kommunikation', question: 'Welcher Schreibstil ist kundenorientiert?', answer: 'Der Sie-Stil — der Wir-Stil sollte vermieden werden.' },
  { id: 'lf3-f4', category: 'Schriftliche Kommunikation', question: 'Was sind Textbausteine — und ihr Nachteil?', answer: 'Vorgefertigte Textmodule für wiederkehrende Inhalte. Vorteil: schnell + konsistent. Nachteil: unpersönlich + standardisiert.' },
  { id: 'lf3-f5', category: 'Schriftliche Kommunikation', question: 'Wie sollte eine E-Mail-Betreffzeile sein?', answer: 'Aussagekräftig — sie soll den Inhalt klar erkennbar machen.' },

  // Kommunikationsmittel
  { id: 'lf3-f6', category: 'Kommunikationsmittel', question: 'Welche 3 Kommunikationsmittel gibt es?', answer: 'Verbal (Wort), paraverbal (hörbar: Tonfall, Tempo), nonverbal (sichtbar: Körpersprache).' },
  { id: 'lf3-f7', category: 'Kommunikationsmittel', question: 'Was ist paraverbale Kommunikation?', answer: 'Die hörbare Ausdrucksform: Tonfall, Lautstärke, Tempo, Stimmlage, Pausen, Modulation.' },
  { id: 'lf3-f8', category: 'Kommunikationsmittel', question: 'Was ist nonverbale Kommunikation?', answer: 'Die sichtbare Körpersprache: Mimik, Gestik, Haltung, Blick, Distanz.' },
  { id: 'lf3-f9', category: 'Kommunikationsmittel', question: 'Was bedeutet Kongruenz?', answer: 'Die Übereinstimmung aller drei Kommunikationsmittel (verbal, paraverbal, nonverbal).' },
  { id: 'lf3-f10', category: 'Kommunikationsmittel', question: 'Worauf muss man am Telefon besonders achten?', answer: 'Auf die Übereinstimmung von verbalen und paraverbalen Anteilen — die nonverbalen Anteile entfallen.' },
  { id: 'lf3-f11', category: 'Kommunikationsmittel', question: 'Welche 3 Elemente hat das Sender-Empfänger-Modell?', answer: 'Sender (codiert), Nachricht (Inhalt), Empfänger (decodiert + reagiert).' },
  { id: 'lf3-f12', category: 'Kommunikationsmittel', question: 'Unterschied Ein-Weg- und Zwei-Wege-Kommunikation?', answer: 'Ein-Weg: Empfänger bleibt Zuhörer. Zwei-Wege: Empfänger antwortet und wird selbst zum Sender.' },
  { id: 'lf3-f13', category: 'Kommunikationsmittel', question: 'Was braucht eine erfolgreiche Decodierung?', answer: 'Gemeinsame Zeichen — Worte, Gesten, Grammatik, Dialekt. Fachsprache mit Laien ist problematisch.' },

  // Watzlawick
  { id: 'lf3-f14', category: 'Watzlawick', question: 'Wer formulierte die 5 Axiome der Kommunikation?', answer: 'Paul Watzlawick.' },
  { id: 'lf3-f15', category: 'Watzlawick', question: 'Was ist ein „Axiom"?', answer: 'Ein anerkannter Grundsatz, der ohne Beweis gilt.' },
  { id: 'lf3-f16', category: 'Watzlawick', question: 'Wie lautet das 1. Axiom?', answer: '„Man kann nicht nicht kommunizieren." Jedes Verhalten — auch Schweigen — ist Kommunikation.' },
  { id: 'lf3-f17', category: 'Watzlawick', question: 'Wie lautet das 2. Axiom?', answer: 'Jede Kommunikation hat einen Inhalts- und einen Beziehungsaspekt, wobei der Beziehungsaspekt den Inhaltsaspekt bestimmt (Metakommunikation).' },
  { id: 'lf3-f18', category: 'Watzlawick', question: 'Was besagt das 3. Axiom (Interpunktion)?', answer: 'Die Natur einer Beziehung ist durch die Interpunktion der Kommunikationsabläufe bedingt — jeder Partner glaubt, der andere habe begonnen.' },
  { id: 'lf3-f19', category: 'Watzlawick', question: 'Was besagt das 4. Axiom?', answer: 'Kommunikation bedient sich digitaler (Worte/Zeichen) und analoger (Körpersprache, Stimmlage) Modalitäten.' },
  { id: 'lf3-f20', category: 'Watzlawick', question: 'Was besagt das 5. Axiom?', answer: 'Kommunikationsabläufe sind symmetrisch (Beziehung auf Gleichheit) oder komplementär (auf Unterschiedlichkeit).' },

  // Schulz von Thun
  { id: 'lf3-f21', category: 'Schulz von Thun', question: 'Wer entwickelte das Vier-Ohren-Modell?', answer: 'Friedemann Schulz von Thun — es baut auf Watzlawicks 2. Axiom auf.' },
  { id: 'lf3-f22', category: 'Schulz von Thun', question: 'Welche 4 Seiten hat eine Nachricht?', answer: 'Sachinhalt, Selbstoffenbarung, Beziehung, Appell.' },
  { id: 'lf3-f23', category: 'Schulz von Thun', question: 'Was ist die Sachinhalt-Seite?', answer: 'Worüber ich informiere — die reine Sachinformation.' },
  { id: 'lf3-f24', category: 'Schulz von Thun', question: 'Was ist die Selbstoffenbarungs-Seite?', answer: 'Was ich von mir selbst kundgebe (z. B. „ich bin gestresst").' },
  { id: 'lf3-f25', category: 'Schulz von Thun', question: 'Was ist die Appell-Seite?', answer: 'Wozu ich den anderen veranlassen möchte (z. B. „hilf mir").' },
  { id: 'lf3-f26', category: 'Schulz von Thun', question: 'Welche Seite hat das größte Konfliktpotenzial?', answer: 'Die Beziehungsseite.' },
  { id: 'lf3-f27', category: 'Schulz von Thun', question: 'Wie viele Ohren hört der Empfänger gleichzeitig?', answer: 'Alle 4 — oft ist eines dominant; das Ausblenden eines Ohrs erzeugt Missverständnisse.' },

  // Transaktionsanalyse
  { id: 'lf3-f28', category: 'Transaktionsanalyse', question: 'Wer begründete die Transaktionsanalyse?', answer: 'Eric Berne (popularisiert durch „Ich bin okay – du bist okay").' },
  { id: 'lf3-f29', category: 'Transaktionsanalyse', question: 'Welche 3 Ich-Zustände gibt es?', answer: 'Eltern-Ich (EL), Erwachsenen-Ich (ER), Kind-Ich (K).' },
  { id: 'lf3-f30', category: 'Transaktionsanalyse', question: 'Welche Ausprägungen hat das Eltern-Ich?', answer: 'Zwei: nährendes/fürsorgliches Eltern-Ich (ELn) und kritisches Eltern-Ich (ELK).' },
  { id: 'lf3-f31', category: 'Transaktionsanalyse', question: 'Welche Ausprägungen hat das Kind-Ich?', answer: 'Drei: freies Kind-Ich (Kf), angepasstes Kind-Ich (Ka), rebellisches Kind-Ich (Kr).' },
  { id: 'lf3-f32', category: 'Transaktionsanalyse', question: 'Wie viele Ausprägungen haben die 3 Ich-Zustände insgesamt?', answer: 'Sechs: ELn, ELK, ER, Kf, Ka, Kr (EL=2, ER=1, K=3).' },
  { id: 'lf3-f33', category: 'Transaktionsanalyse', question: 'Wie verhält sich das Erwachsenen-Ich?', answer: 'Konstruktiv, fragend, objektiv, lösungs- und zielorientiert.' },
  { id: 'lf3-f34', category: 'Transaktionsanalyse', question: 'Was ist eine parallele Transaktion?', answer: 'Die Antwort kommt aus dem angesprochenen Ich-Zustand zurück — die Kommunikation läuft reibungslos.' },
  { id: 'lf3-f35', category: 'Transaktionsanalyse', question: 'Was ist eine gekreuzte Transaktion?', answer: 'Die Antwort kommt aus einem anderen Ich-Zustand als angesprochen — das führt oft zu Störungen.' },
  { id: 'lf3-f36', category: 'Transaktionsanalyse', question: 'Was ist eine verdeckte Transaktion?', answer: 'Sie läuft auf 2 Ebenen gleichzeitig (offen verbal + versteckt para-/nonverbal) — gefährlich, wenn nicht erkannt.' },
  { id: 'lf3-f37', category: 'Transaktionsanalyse', question: 'Welche 4 Grundhaltungen gibt es?', answer: 'Ich o.k./Du o.k. (Gewinner), Ich o.k./Du nicht o.k., Ich nicht o.k./Du o.k., Ich nicht o.k./Du nicht o.k. (Verlierer).' },
  { id: 'lf3-f38', category: 'Transaktionsanalyse', question: 'Wie reagiert man auf einen verärgerten Kunden (TA-Strategie)?', answer: 'Zuerst aus dem angesprochenen Ich-Zustand reagieren (spiegeln), dann sanfter Wechsel auf das Erwachsenen-Ich.' },
  { id: 'lf3-f39', category: 'Transaktionsanalyse', question: 'Ist negative Zuwendung besser als keine?', answer: 'Ja — laut Buch ist negative Zuwendung besser als gar keine Zuwendung.' },
  { id: 'lf3-f40', category: 'Transaktionsanalyse', question: 'Was ist ein Egogramm?', answer: 'Eine Auswertung, wie stark die einzelnen Ich-Zustände bei einer Person vertreten sind.' },

  // Johari / NLP / Maslow
  { id: 'lf3-f41', category: 'Johari · NLP · Maslow', question: 'Wer entwickelte das Johari-Fenster?', answer: 'Joseph Luft und Harry Ingham.' },
  { id: 'lf3-f42', category: 'Johari · NLP · Maslow', question: 'Welche 4 Quadranten hat das Johari-Fenster?', answer: 'A: Arena (beiden bekannt), B: Privatperson (mir bekannt), C: blinder Fleck (anderen bekannt), D: Unbekanntes.' },
  { id: 'lf3-f43', category: 'Johari · NLP · Maslow', question: 'Was ist der „blinde Fleck" im Johari-Fenster?', answer: 'Quadrant C — was anderen bekannt, mir selbst aber unbekannt ist.' },
  { id: 'lf3-f44', category: 'Johari · NLP · Maslow', question: 'Wie vergrößert man die Arena (A)?', answer: 'Durch Offenheit (verkleinert B) und durch Feedback/Rückmeldung (verkleinert C, den blinden Fleck).' },
  { id: 'lf3-f45', category: 'Johari · NLP · Maslow', question: 'Wofür stehen die Buchstaben in NLP?', answer: 'Neurologisch (geistig-seelische Vorgänge), Linguistisch (sprachlicher Ausdruck), Programmieren (Lernen/Verarbeiten).' },
  { id: 'lf3-f46', category: 'Johari · NLP · Maslow', question: 'Ist NLP eine wissenschaftliche Theorie?', answer: 'Nein — laut Buch ist NLP ausdrücklich eine Sammlung von Kommunikationstechniken, keine wissenschaftliche Theorie.' },
  { id: 'lf3-f47', category: 'Johari · NLP · Maslow', question: 'Was bedeutet „Pacing"?', answer: 'Das Spiegeln des Gesprächspartners — Stimme, Gestik und Mimik anpassen.' },
  { id: 'lf3-f48', category: 'Johari · NLP · Maslow', question: 'Was ist „Rapport"?', answer: 'Eine positive Gesprächsatmosphäre, die durch Pacing entsteht.' },
  { id: 'lf3-f49', category: 'Johari · NLP · Maslow', question: 'Was ist „Leading"?', answer: 'Nach gelungenem Rapport den Gesprächspartner sanft zu neuem Verhalten führen.' },
  { id: 'lf3-f50', category: 'Johari · NLP · Maslow', question: 'Was ist die „innere Landkarte" im NLP?', answer: 'Die subjektive Wahrnehmung der Wirklichkeit jedes Menschen — „die Landkarte ist nicht die Landschaft".' },
  { id: 'lf3-f51', category: 'Johari · NLP · Maslow', question: 'Welche 5 Stufen hat Maslows Bedürfnispyramide?', answer: 'Physiologische Grundbedürfnisse, Sicherheit, Sozialbedürfnisse, Wertschätzung/Anerkennung, Selbstverwirklichung.' },
  { id: 'lf3-f52', category: 'Johari · NLP · Maslow', question: 'Was ist die Grundregel der Maslow-Pyramide?', answer: 'Höhere Stufen werden erst relevant, wenn die darunterliegenden Bedürfnisse erfüllt sind.' },
  { id: 'lf3-f53', category: 'Johari · NLP · Maslow', question: 'Auf welcher Maslow-Stufe steht Wertschätzung?', answer: 'Auf Stufe 4 — zwischen Sozialbedürfnissen (3) und Selbstverwirklichung (5).' },

  // Gesprächsführung
  { id: 'lf3-f54', category: 'Gesprächsführung', question: 'Wie ist eine Argumentation aufgebaut?', answer: 'These → Begründung → Beispiel → Schlussfolgerung.' },
  { id: 'lf3-f55', category: 'Gesprächsführung', question: 'Nenne die 5 Phasen der klassischen Rhetorik.', answer: 'Inventio (Stoffsammlung), Dispositio (Gliederung), Elocutio (Formulierung), Memoria (Memorieren), Actio (Vortrag).' },
  { id: 'lf3-f56', category: 'Gesprächsführung', question: 'Was bewirkt eine offene Frage (W-Frage)?', answer: 'Sie erzeugt lange, informationsreiche Antworten — ideal zu Beginn der Bedarfsermittlung.' },
  { id: 'lf3-f57', category: 'Gesprächsführung', question: 'Wann setzt man geschlossene Fragen ein?', answer: 'Am Ende der Bedarfsermittlung zur Absicherung — sie liefern kurze, eindeutige Antworten.' },
  { id: 'lf3-f58', category: 'Gesprächsführung', question: 'Was ist eine Suggestivfrage und wann ist sie problematisch?', answer: 'Eine Frage, die zu einer bestimmten Antwort drängt — manipulativ, nicht in der Bedarfsermittlung einsetzen.' },
  { id: 'lf3-f59', category: 'Gesprächsführung', question: 'Was ist eine Alternativfrage?', answer: 'Eine Frage, die 2 Optionen zur Wahl gibt — gut für die Terminvereinbarung („Montag oder Mittwoch?").' },
  { id: 'lf3-f60', category: 'Gesprächsführung', question: 'Was ist der Fragetrichter?', answer: 'Eine Gesprächsführung vom Allgemeinen zum Speziellen, von offenen zu geschlossenen Fragen.' },
  { id: 'lf3-f61', category: 'Gesprächsführung', question: 'Wer begründete das aktive Zuhören?', answer: 'Carl Rogers (klientenzentrierte Gesprächsführung).' },
  { id: 'lf3-f62', category: 'Gesprächsführung', question: 'Was bedeutet aktives Zuhören?', answer: 'Dem Gesprächspartner Inhalt UND Emotion zurückmelden — nicht nur das Gesagte wiederholen.' },
  { id: 'lf3-f63', category: 'Gesprächsführung', question: 'Was ist Pseudo-Zuhören?', answer: 'Vorgetäuschtes Hören — es wird vom Partner schnell entlarvt und wirkt als Gesprächsstörer.' },
  { id: 'lf3-f64', category: 'Gesprächsführung', question: 'Nenne vier typische Gesprächsstörer.', answer: 'Vorwürfe/Anklagen, Befehlen/Drohen, Belehren/Moralisieren, vorschnelle Lösungen (auch: Ironie, Bagatellisieren, Generalisierungen).' },
  { id: 'lf3-f65', category: 'Gesprächsführung', question: 'Nenne vier Gesprächsförderer.', answer: 'Pausen einbauen, aktives Zuhören, Paraphrasieren, nicht unterbrechen (auch: nachfragen, positive Wertschätzung).' },
  { id: 'lf3-f66', category: 'Gesprächsführung', question: 'Warum sind Generalisierungen Gesprächsstörer?', answer: 'Worte wie „immer" und „nie" verallgemeinern unzulässig und wirken vorwurfsvoll.' },
  { id: 'lf3-f67', category: 'Gesprächsführung', question: 'Wie wirkt zu laute bzw. zu leise Sprechweise?', answer: 'Zu laut wirkt aggressiv/hektisch, zu leise unsicher/inkompetent.' },
  { id: 'lf3-f68', category: 'Gesprächsführung', question: 'Wie lang dürfen Sprechpausen maximal sein?', answer: 'Nicht länger als 3–5 Sekunden, sonst werden sie unangenehm.' },
  { id: 'lf3-f69', category: 'Gesprächsführung', question: 'Warum zählt Körpersprache auch am Telefon?', answer: 'Die Körpersprache wirkt direkt auf die Stimme — der Kunde hört, welche Haltung der Mitarbeiter einnimmt.' },
  { id: 'lf3-f70', category: 'Gesprächsführung', question: 'Wie wirkt sich die Körperhaltung auf die Stimme aus?', answer: 'Eine aufrechte/stehende Haltung verbessert Volumen und Klang, eine liegende Haltung verschlechtert die Stimme.' },

  // Kundentypen
  { id: 'lf3-f71', category: 'Kundentypen', question: 'Wofür steht das VAK-Modell?', answer: 'Visuell, Auditiv, Kinästhetisch — die drei Wahrnehmungstypen (aus dem NLP).' },
  { id: 'lf3-f72', category: 'Kundentypen', question: 'Wie spricht man einen visuellen Kunden an?', answer: 'Bildhaft formulieren, Internetseiten zeigen, Prospekte schicken — er sagt z. B. „Ich sehe…".' },
  { id: 'lf3-f73', category: 'Kundentypen', question: 'Wie erkennt man einen kinästhetischen Kunden?', answer: 'An Fühl-Sprache: „Das setzt mich unter Druck", „fühle mich gut aufgehoben". Strategie: Probeexemplare anbieten.' },
  { id: 'lf3-f74', category: 'Kundentypen', question: 'Wie geht man mit dem Besserwisser um?', answer: 'Um Hilfe bitten, ihn ernst nehmen — ihn NIE zurechtweisen.' },
  { id: 'lf3-f75', category: 'Kundentypen', question: 'Wie geht man mit dem Vielredner um?', answer: 'Gezielte Unterbrechungen und Zusammenfassungen einsetzen.' },
  { id: 'lf3-f76', category: 'Kundentypen', question: 'Wie geht man mit dem Aggressiven um?', answer: 'Sich nicht provozieren lassen, ruhig bleiben, ggf. ins Beschwerdemanagement überleiten.' },
  { id: 'lf3-f77', category: 'Kundentypen', question: 'Wie geht man mit dem Entscheidungsschwachen um?', answer: 'Nicht drängen, Fragetechnik einsetzen, Zwischenergebnisse zusammenfassen.' },
  { id: 'lf3-f78', category: 'Kundentypen', question: 'Wie geht man mit dem Schweiger um?', answer: 'Offene Fragen stellen, ihm Zeit lassen, Interesse signalisieren.' },
  { id: 'lf3-f79', category: 'Kundentypen', question: 'Wie geht man mit dem Impulsiven um?', answer: 'Schnell zu einem verbindlichen Abschluss kommen und die nächsten Schritte festmachen.' },
  { id: 'lf3-f80', category: 'Kundentypen', question: 'Wofür dient die Buchstabiertafel?', answer: 'Zum eindeutigen Buchstabieren — Deutschland: Anton, Bertha, Cäsar; international (ITU): Alfa, Bravo, Charlie.' },

  // Stimme & Stress
  { id: 'lf3-f81', category: 'Stimme & Stress', question: 'Aus welchen 3 Teilen besteht der Sprechvorgang?', answer: 'Atmung (Respiration), Stimmgebung (Phonation), Aussprache (Artikulation).' },
  { id: 'lf3-f82', category: 'Stimme & Stress', question: 'Was enthält der Kehlkopf?', answer: 'Zwei Stimmbänder / Stimmlippen.' },
  { id: 'lf3-f83', category: 'Stimme & Stress', question: 'Was ist die Glottis?', answer: 'Die Stimmritze — der Spalt zwischen den Stimmlippen, der die Luftröhre teilweise verschließt.' },
  { id: 'lf3-f84', category: 'Stimme & Stress', question: 'Was ist das Ansatzrohr?', answer: 'Der lufthaltige Raum oberhalb des Kehlkopfs (Rachen + Mund + Nase) — sorgt für Resonanz.' },
  { id: 'lf3-f85', category: 'Stimme & Stress', question: 'Wie entsteht der Stimmklang?', answer: 'Beim Sprechen werden die Stimmlippen angespannt, die Luft setzt sie in Schwingung.' },
  { id: 'lf3-f86', category: 'Stimme & Stress', question: 'Nenne drei Stimmbelastungen im Callcenter.', answer: 'Unnatürliches Sprechen, lautes Sprechen in lauter Umgebung, trockene Heizungsluft (auch Fehlhaltung, Stress).' },
  { id: 'lf3-f87', category: 'Stimme & Stress', question: 'Was ist Stress?', answer: 'Ein Zustand körperlicher und geistiger Anspannung, hervorgerufen durch überhöhte Belastungen.' },
  { id: 'lf3-f88', category: 'Stimme & Stress', question: 'Unterschied Eustress und Disstress?', answer: 'Eustress = positiv empfundener, anregender Stress. Disstress = negativ empfundener, belastender Stress.' },
  { id: 'lf3-f89', category: 'Stimme & Stress', question: 'Was ist ein Stressor?', answer: 'Der äußere Reiz, der Stress auslöst — unabhängig davon, ob Eustress oder Disstress entsteht.' },
  { id: 'lf3-f90', category: 'Stimme & Stress', question: 'Was ist Emotionsarbeit?', answer: 'Die zehrende Kluft zwischen gefühlter und vorgeschriebener Stimmung — typisch für die Callcenter-Arbeit.' },
  { id: 'lf3-f91', category: 'Stimme & Stress', question: 'Was ist Stressprävention?', answer: 'Maßnahmen, die Stressoren reduzieren, damit Stress gar nicht erst entsteht (Zeitmanagement, Ergonomie, klare Ziele).' },
  { id: 'lf3-f92', category: 'Stimme & Stress', question: 'Was ist Stressbewältigung?', answer: 'Maßnahmen, die bereits aufgebauten Stress abbauen (Sport, Entspannung, Meditation, autogenes Training, Yoga).' },
  { id: 'lf3-f93', category: 'Stimme & Stress', question: 'Nenne typische Stressoren am Arbeitsplatz.', answer: 'Über-/Unterforderung, Verantwortung, Mobbing, Betriebsklima, Termindruck, Lärm, Raumklima.' },
  { id: 'lf3-f94', category: 'Stimme & Stress', question: 'Welche körperlichen Reaktionen löst Stress aus?', answer: 'Adrenalin-Ausschüttung, Pulserhöhung, Blutdruckanstieg, Muskelanspannung.' },
];

export const lf3QuizQuestions: QuizQuestion[] = [
  {
    id: 'lf3-q1',
    category: 'Kommunikationsmittel',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Was ist der Unterschied zwischen paraverbaler und nonverbaler Kommunikation?',
    options: [
      'Beide sind hörbar',
      'Paraverbal ist hörbar (Tonfall), nonverbal ist sichtbar (Körpersprache)',
      'Paraverbal ist sichtbar, nonverbal ist hörbar',
      'Es gibt keinen Unterschied',
    ],
    correctAnswer: 'Paraverbal ist hörbar (Tonfall), nonverbal ist sichtbar (Körpersprache)',
    explanation: 'Paraverbal = hörbare Ausdrucksform (Tonfall, Tempo, Lautstärke). Nonverbal = sichtbare Körpersprache (Mimik, Gestik, Haltung).',
  },
  {
    id: 'lf3-q2',
    category: 'Kommunikationsmittel',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Welche Kommunikationsmittel entfallen beim Telefonieren?',
    options: ['Die verbalen', 'Die paraverbalen', 'Die nonverbalen', 'Keine'],
    correctAnswer: 'Die nonverbalen',
    explanation: 'Am Telefon entfällt die sichtbare Körpersprache (nonverbal). Verbale und paraverbale Anteile müssen daher besonders übereinstimmen.',
  },
  {
    id: 'lf3-q3',
    category: 'Kommunikationsmittel',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Ein Mitarbeiter sagt „Ich freue mich auf Ihren Anruf" mit gelangweilter, monotoner Stimme. Was liegt vor?',
    options: ['Kongruenz', 'Inkongruenz', 'Zwei-Wege-Kommunikation', 'Metakommunikation'],
    correctAnswer: 'Inkongruenz',
    explanation: 'Inkongruenz = Widerspruch zwischen den Kommunikationsmitteln. Hier widersprechen sich verbale Aussage und paraverbaler Ausdruck.',
  },
  {
    id: 'lf3-q4',
    category: 'Sender-Empfänger',
    type: 'open',
    difficulty: 'medium',
    question: 'Nenne die 3 Quellen für Informationsverlust im Sender-Empfänger-Modell.',
    correctAnswer: '1) Was man meint, ist oft nicht das, was man sagt. 2) Was man sagt, ist nicht das, was der andere hört. 3) Was der andere hört, ist nicht zwangsläufig verstanden.',
    explanation: 'Informationsverlust entsteht auf jeder Stufe: beim Codieren, beim Übertragen (Störungen) und beim Decodieren (Interpretation).',
  },
  {
    id: 'lf3-q5',
    category: 'Watzlawick',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Wie lautet das 1. Axiom von Watzlawick korrekt?',
    options: [
      'Man kann nicht kommunizieren',
      'Man kann nicht nicht kommunizieren',
      'Man muss immer kommunizieren',
      'Man kann nur verbal kommunizieren',
    ],
    correctAnswer: 'Man kann nicht nicht kommunizieren',
    explanation: 'Die doppelte Verneinung ist wesentlich: Jedes Verhalten — auch Schweigen oder Wegsehen — ist Kommunikation.',
  },
  {
    id: 'lf3-q6',
    category: 'Watzlawick',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Welches Axiom besagt, dass jede Kommunikation einen Inhalts- und einen Beziehungsaspekt hat?',
    options: ['1. Axiom', '2. Axiom', '3. Axiom', '5. Axiom'],
    correctAnswer: '2. Axiom',
    explanation: 'Das 2. Axiom: Der Beziehungsaspekt bestimmt den Inhaltsaspekt (Metakommunikation). Schulz von Thun baut darauf auf.',
  },
  {
    id: 'lf3-q7',
    category: 'Watzlawick',
    type: 'matching',
    difficulty: 'hard',
    question: 'Ordne zu: a) symmetrisch · b) komplementär',
    correctAnswer: 'a → Beziehung auf Gleichheit (z. B. Kollegen) · b → Beziehung auf Unterschiedlichkeit (z. B. Ausbilder/Azubi)',
    explanation: 'Das 5. Axiom: symmetrische Kommunikation = gleiche Ebene, komplementäre = unterschiedliche Ebenen.',
  },
  {
    id: 'lf3-q8',
    category: 'Schulz von Thun',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Wie viele Seiten hat eine Nachricht nach Schulz von Thun?',
    options: ['2', '3', '4', '5'],
    correctAnswer: '4',
    explanation: 'Vier Seiten: Sachinhalt, Selbstoffenbarung, Beziehung, Appell — das „Vier-Ohren-Modell".',
  },
  {
    id: 'lf3-q9',
    category: 'Schulz von Thun',
    type: 'open',
    difficulty: 'hard',
    question: 'Analysiere den Satz „Ich kann diese Aufgabe nicht lösen!" nach den 4 Seiten von Schulz von Thun.',
    correctAnswer: 'Sachinhalt: Die Aufgabe ist nicht gelöst. Selbstoffenbarung: „Ich bin überfordert/gestresst." Beziehung: „Du hast Verständnis / wir sind ein Team." Appell: „Hilf mir."',
    explanation: 'Jede Nachricht enthält alle vier Botschaften gleichzeitig — der Empfänger entscheidet, mit welchem Ohr er hört.',
  },
  {
    id: 'lf3-q10',
    category: 'Schulz von Thun',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Welche Seite einer Nachricht hat das größte Konfliktpotenzial?',
    options: ['Sachinhalt', 'Selbstoffenbarung', 'Beziehung', 'Appell'],
    correctAnswer: 'Beziehung',
    explanation: 'Die Beziehungsseite signalisiert, wie wir zueinander stehen — Missverständnisse hier führen am häufigsten zu Konflikten.',
  },
  {
    id: 'lf3-q11',
    category: 'Transaktionsanalyse',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Wie viele Ausprägungen haben die drei Ich-Zustände der Transaktionsanalyse zusammen?',
    options: ['3', '4', '6', '9'],
    correctAnswer: '6',
    explanation: 'Eltern-Ich = 2 (ELn, ELK), Erwachsenen-Ich = 1 (ER), Kind-Ich = 3 (Kf, Ka, Kr) → insgesamt 6 Ausprägungen.',
  },
  {
    id: 'lf3-q12',
    category: 'Transaktionsanalyse',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Welcher Ich-Zustand verhält sich konstruktiv, objektiv und lösungsorientiert?',
    options: ['Eltern-Ich', 'Erwachsenen-Ich', 'Kind-Ich', 'Kritisches Eltern-Ich'],
    correctAnswer: 'Erwachsenen-Ich',
    explanation: 'Das Erwachsenen-Ich (ER) ist konstruktiv, fragend, objektiv, lösungs- und zielorientiert — Zielzustand im Beschwerdegespräch.',
  },
  {
    id: 'lf3-q13',
    category: 'Transaktionsanalyse',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Eine Antwort kommt aus einem anderen Ich-Zustand als angesprochen. Was ist das?',
    options: ['Parallele Transaktion', 'Gekreuzte Transaktion', 'Verdeckte Transaktion', 'Symmetrische Transaktion'],
    correctAnswer: 'Gekreuzte Transaktion',
    explanation: 'Gekreuzte Transaktion = Antwort aus anderem Ich-Zustand → oft Störungen. Verdeckt = 2 Ebenen gleichzeitig.',
  },
  {
    id: 'lf3-q14',
    category: 'Transaktionsanalyse',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Worin unterscheidet sich die verdeckte von der gekreuzten Transaktion?',
    options: [
      'Sie sind dasselbe',
      'Verdeckt läuft auf 2 Ebenen gleichzeitig (offen + versteckt), gekreuzt auf einer anderen Ebene als angesprochen',
      'Verdeckt ist immer reibungslos',
      'Gekreuzt nutzt para-/nonverbale Signale, verdeckt nicht',
    ],
    correctAnswer: 'Verdeckt läuft auf 2 Ebenen gleichzeitig (offen + versteckt), gekreuzt auf einer anderen Ebene als angesprochen',
    explanation: 'Gekreuzt = Antwort aus einem anderen Ich-Zustand. Verdeckt = zwei Botschaften parallel (verbal offen + para-/nonverbal versteckt).',
  },
  {
    id: 'lf3-q15',
    category: 'Transaktionsanalyse',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Welche Grundhaltung entspricht dem „Gewinner"?',
    options: ['Ich o.k. – Du o.k.', 'Ich o.k. – Du nicht o.k.', 'Ich nicht o.k. – Du o.k.', 'Ich nicht o.k. – Du nicht o.k.'],
    correctAnswer: 'Ich o.k. – Du o.k.',
    explanation: '„Ich o.k. – Du o.k." ist die Gewinner-Haltung. „Ich nicht o.k. – Du nicht o.k." ist die Verlierer-Haltung.',
  },
  {
    id: 'lf3-q16',
    category: 'Transaktionsanalyse',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Ein wütender Kunde ruft an (kritisches Eltern-Ich). Wie reagiert der Mitarbeiter laut Buch-Strategie?',
    options: [
      'Sofort sachlich-konstruktiv im Erwachsenen-Ich antworten',
      'Zuerst aus dem angesprochenen Zustand reagieren (spiegeln), dann sanfter Wechsel zum Erwachsenen-Ich',
      'Ebenfalls aus dem kritischen Eltern-Ich kontern',
      'Das Gespräch sofort abgeben',
    ],
    correctAnswer: 'Zuerst aus dem angesprochenen Zustand reagieren (spiegeln), dann sanfter Wechsel zum Erwachsenen-Ich',
    explanation: 'Ein direkter Sprung ins Erwachsenen-Ich wirkt kalt. Erst spiegeln (angepasstes Kind / nährendes Eltern), dann sanft auf ER wechseln.',
  },
  {
    id: 'lf3-q17',
    category: 'Johari',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Welcher Johari-Quadrant ist der „blinde Fleck"?',
    options: [
      'Mir bekannt, anderen bekannt',
      'Mir bekannt, anderen unbekannt',
      'Mir unbekannt, anderen bekannt',
      'Mir unbekannt, anderen unbekannt',
    ],
    correctAnswer: 'Mir unbekannt, anderen bekannt',
    explanation: 'Der blinde Fleck (C) ist, was andere an mir wahrnehmen, ich selbst aber nicht. Er wird durch Feedback verkleinert.',
  },
  {
    id: 'lf3-q18',
    category: 'Johari',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Wodurch verkleinert man den blinden Fleck im Johari-Fenster?',
    options: ['Durch Offenheit', 'Durch Feedback / Rückmeldung', 'Durch Schweigen', 'Durch Selbstoffenbarung'],
    correctAnswer: 'Durch Feedback / Rückmeldung',
    explanation: 'Feedback verkleinert den blinden Fleck (C). Offenheit/Selbstoffenbarung verkleinert die Privatperson (B).',
  },
  {
    id: 'lf3-q19',
    category: 'NLP',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Welche Aussage über NLP ist laut Buch korrekt?',
    options: [
      'NLP ist eine anerkannte wissenschaftliche Theorie',
      'NLP ist eine Sammlung von Kommunikationstechniken, keine wissenschaftliche Theorie',
      'NLP darf zur Manipulation eingesetzt werden',
      'NLP steht für „Neue Lernpsychologie"',
    ],
    correctAnswer: 'NLP ist eine Sammlung von Kommunikationstechniken, keine wissenschaftliche Theorie',
    explanation: 'Das Buch betont ausdrücklich: NLP ist keine wissenschaftliche Theorie und kein Manipulationswerkzeug.',
  },
  {
    id: 'lf3-q20',
    category: 'NLP',
    type: 'matching',
    difficulty: 'medium',
    question: 'Ordne die NLP-Methoden zu: a) Spiegeln des Partners · b) positive Gesprächsatmosphäre · c) sanft zu neuem Verhalten führen',
    correctAnswer: 'a → Pacing · b → Rapport · c → Leading',
    explanation: 'Reihenfolge: Pacing erzeugt Rapport, auf Basis von Rapport ist Leading möglich.',
  },
  {
    id: 'lf3-q21',
    category: 'NLP',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Was meint die „innere Landkarte" im NLP?',
    options: [
      'Die objektive Realität',
      'Die subjektive Wahrnehmung der Wirklichkeit',
      'Ein Organigramm des Unternehmens',
      'Eine geografische Karte des Vertriebsgebiets',
    ],
    correctAnswer: 'Die subjektive Wahrnehmung der Wirklichkeit',
    explanation: '„Die Landkarte ist nicht die Landschaft" — jeder Mensch hat ein subjektives Bild der Wirklichkeit.',
  },
  {
    id: 'lf3-q22',
    category: 'Maslow',
    type: 'open',
    difficulty: 'medium',
    question: 'Nenne die 5 Stufen der Maslow-Pyramide von unten nach oben.',
    correctAnswer: 'Physiologische Grundbedürfnisse · Sicherheitsbedürfnisse · Sozialbedürfnisse · Wertschätzung und Anerkennung · Selbstverwirklichung.',
    explanation: 'Höhere Stufen werden erst relevant, wenn die darunterliegenden erfüllt sind.',
  },
  {
    id: 'lf3-q23',
    category: 'Maslow',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Auf welcher Maslow-Stufe steht das Bedürfnis nach einem sicheren Arbeitsplatz?',
    options: ['Stufe 1', 'Stufe 2', 'Stufe 3', 'Stufe 4'],
    correctAnswer: 'Stufe 2',
    explanation: 'Der Arbeitsplatz gehört zu den Sicherheitsbedürfnissen (Stufe 2) — direkt über den physiologischen Grundbedürfnissen.',
  },
  {
    id: 'lf3-q24',
    category: 'Gesprächsführung',
    type: 'open',
    difficulty: 'medium',
    question: 'Wie ist eine Argumentation aufgebaut?',
    correctAnswer: 'These → Begründung → Beispiel → Schlussfolgerung.',
    explanation: 'Das Beispiel macht das Argument greifbar, die Schlussfolgerung fasst zusammen oder leitet eine Handlung ab.',
  },
  {
    id: 'lf3-q25',
    category: 'Gesprächsführung',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Wann setzt man im Gespräch offene und wann geschlossene Fragen ein?',
    options: [
      'Geschlossen am Anfang, offen am Ende',
      'Offen am Anfang (Bedarfsermittlung), geschlossen am Ende (Absicherung)',
      'Nur offene Fragen verwenden',
      'Die Reihenfolge ist egal',
    ],
    correctAnswer: 'Offen am Anfang (Bedarfsermittlung), geschlossen am Ende (Absicherung)',
    explanation: 'Der Fragetrichter: offene Fragen sammeln Informationen am Anfang, geschlossene Fragen sichern am Ende ab.',
  },
  {
    id: 'lf3-q26',
    category: 'Gesprächsführung',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Welche Frageart sollte in der Bedarfsermittlung NICHT verwendet werden?',
    options: ['Offene Frage', 'Geschlossene Frage', 'Suggestivfrage', 'Alternativfrage'],
    correctAnswer: 'Suggestivfrage',
    explanation: 'Die Suggestivfrage drängt zu einer bestimmten Antwort — sie ist manipulativ und verfälscht die Bedarfsermittlung.',
  },
  {
    id: 'lf3-q27',
    category: 'Gesprächsführung',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Welche Frageart eignet sich gut für eine Terminvereinbarung?',
    options: ['Offene Frage', 'Alternativfrage', 'Rhetorische Frage', 'Gegenfrage'],
    correctAnswer: 'Alternativfrage',
    explanation: 'Die Alternativfrage („Lieber Montag oder Mittwoch?") gibt zwei akzeptable Optionen vor und führt schneller zum Abschluss.',
  },
  {
    id: 'lf3-q28',
    category: 'Gesprächsführung',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Was bedeutet aktives Zuhören nach Carl Rogers?',
    options: [
      'Nur das Gesagte wörtlich wiederholen',
      'Dem Partner Inhalt UND Emotion zurückmelden',
      'Während des Zuhörens die Antwort vorbereiten',
      'Möglichst viele Fragen stellen',
    ],
    correctAnswer: 'Dem Partner Inhalt UND Emotion zurückmelden',
    explanation: 'Aktives Zuhören meldet nicht nur den Sachinhalt, sondern auch das wahrgenommene Gefühl zurück.',
  },
  {
    id: 'lf3-q29',
    category: 'Gesprächsführung',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Welches davon ist KEIN Gesprächsstörer?',
    options: ['Belehren und moralisieren', 'Vorschnelle Lösungen anbieten', 'Paraphrasieren', 'Generalisierungen wie „immer/nie"'],
    correctAnswer: 'Paraphrasieren',
    explanation: 'Paraphrasieren ist ein Gesprächsförderer. Belehren, vorschnelle Lösungen und Generalisierungen sind Störer.',
  },
  {
    id: 'lf3-q30',
    category: 'Gesprächsführung',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Ein Kunde klagt über einen defekten Drucker. Der Agent unterbricht: „Da haben Sie sicher etwas falsch gemacht — schließen Sie es einfach neu an." Welche Gesprächsstörer wurden verwendet?',
    options: [
      'Aktives Zuhören und Paraphrasieren',
      'Vorwurf und vorschnelle Lösung',
      'Pausen und Nachfragen',
      'Gegenfrage und Alternativfrage',
    ],
    correctAnswer: 'Vorwurf und vorschnelle Lösung',
    explanation: 'Der Agent macht dem Kunden einen Vorwurf und springt zur vorschnellen Lösung, ohne das Problem zu erfassen — zwei klassische Gesprächsstörer.',
  },
  {
    id: 'lf3-q31',
    category: 'Gesprächsführung',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Warum ist die Körpersprache des Mitarbeiters auch am Telefon wichtig?',
    options: [
      'Sie ist am Telefon unwichtig',
      'Sie wirkt direkt auf die Stimme — der Kunde hört die Haltung',
      'Der Kunde kann den Mitarbeiter über Video sehen',
      'Nur die Lautstärke zählt',
    ],
    correctAnswer: 'Sie wirkt direkt auf die Stimme — der Kunde hört die Haltung',
    explanation: 'Eine aufrechte Haltung und ein Lächeln verändern den Stimmklang hörbar — der Kunde nimmt das wahr.',
  },
  {
    id: 'lf3-q32',
    category: 'Sprechausdruck',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Wie wirkt eine zu leise Sprechweise auf den Kunden?',
    options: ['Aggressiv und hektisch', 'Unsicher und inkompetent', 'Kompetent und ruhig', 'Freundlich'],
    correctAnswer: 'Unsicher und inkompetent',
    explanation: 'Zu leise wirkt unsicher/inkompetent, zu laut wirkt aggressiv/hektisch — die Lautstärke sollte angenehm hörbar sein.',
  },
  {
    id: 'lf3-q33',
    category: 'Kundentypen',
    type: 'matching',
    difficulty: 'hard',
    question: 'Ordne VAK-Typ zu Aussage: a) „Da sehe ich rot" · b) „Das klingt vernünftig" · c) „Das setzt mich unter Druck"',
    correctAnswer: 'a → visuell · b → auditiv · c → kinästhetisch',
    explanation: 'Visuelle Kunden nutzen Seh-Sprache, auditive Hör-Sprache, kinästhetische Fühl-Sprache.',
  },
  {
    id: 'lf3-q34',
    category: 'Kundentypen',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Wie geht man laut Buch mit einem „Besserwisser" um?',
    options: [
      'Ihn deutlich zurechtweisen',
      'Ihn um Hilfe bitten und nie zurechtweisen',
      'Das Gespräch schnell beenden',
      'Ihn ignorieren',
    ],
    correctAnswer: 'Ihn um Hilfe bitten und nie zurechtweisen',
    explanation: 'Den Besserwisser ernst nehmen, um seine Hilfe/Meinung bitten — eine Zurechtweisung eskaliert das Gespräch.',
  },
  {
    id: 'lf3-q35',
    category: 'Kundentypen',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Ein Kunde ist zögerlich, bringt viele Einwände und vertröstet ständig. Welcher Typ und welche Strategie?',
    options: [
      'Der Aggressive — ruhig bleiben',
      'Der Entscheidungsschwache — nicht drängen, Fragetechnik, Zwischenergebnisse zusammenfassen',
      'Der Vielredner — gezielt unterbrechen',
      'Der Schweiger — offene Fragen',
    ],
    correctAnswer: 'Der Entscheidungsschwache — nicht drängen, Fragetechnik, Zwischenergebnisse zusammenfassen',
    explanation: 'Der Entscheidungsschwache braucht Sicherheit: nicht drängen, mit Fragetechnik führen und Zwischenergebnisse festhalten.',
  },
  {
    id: 'lf3-q36',
    category: 'Kundentypen',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Wie geht man am besten mit dem „Schweiger" um?',
    options: [
      'Geschlossene Fragen stellen',
      'Offene Fragen stellen und ihm Zeit lassen',
      'Das Gespräch schnell durchziehen',
      'Suggestivfragen verwenden',
    ],
    correctAnswer: 'Offene Fragen stellen und ihm Zeit lassen',
    explanation: 'Der introvertierte Schweiger öffnet sich durch offene Fragen, Zeit und signalisiertes Interesse.',
  },
  {
    id: 'lf3-q37',
    category: 'Stimme',
    type: 'open',
    difficulty: 'medium',
    question: 'Aus welchen 3 Teilen besteht der Sprechvorgang?',
    correctAnswer: 'Atmung (Respiration) · Stimmgebung (Phonation) · Aussprache (Artikulation).',
    explanation: 'Die Luft aus der Atmung versetzt im Kehlkopf die Stimmlippen in Schwingung (Phonation), die im Ansatzrohr zu Lauten geformt wird (Artikulation).',
  },
  {
    id: 'lf3-q38',
    category: 'Stimme',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Wie heißt der Spalt zwischen den Stimmlippen?',
    options: ['Ansatzrohr', 'Glottis (Stimmritze)', 'Vokaltrakt', 'Kehldeckel'],
    correctAnswer: 'Glottis (Stimmritze)',
    explanation: 'Die Glottis (Stimmritze) ist der Spalt zwischen den Stimmlippen. Das Ansatzrohr ist der Resonanzraum darüber.',
  },
  {
    id: 'lf3-q39',
    category: 'Stimme',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Welche Maßnahme gehört zur Stimmpflege?',
    options: ['Lauter sprechen', 'Viel trinken und lüften', 'Mehr rauchen', 'Die Stimmlage künstlich erhöhen'],
    correctAnswer: 'Viel trinken und lüften',
    explanation: 'Gegen trockene Luft hilft viel Trinken und Lüften. Lautes Sprechen, Rauchen und unnatürliche Stimmlage belasten die Stimme.',
  },
  {
    id: 'lf3-q40',
    category: 'Stress',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Was ist der Unterschied zwischen einem Stressor und Stress?',
    options: [
      'Es gibt keinen Unterschied',
      'Der Stressor ist der Auslöser, Stress ist der Zustand der Anspannung',
      'Stress ist der Auslöser, der Stressor der Zustand',
      'Beide bezeichnen nur negativen Stress',
    ],
    correctAnswer: 'Der Stressor ist der Auslöser, Stress ist der Zustand der Anspannung',
    explanation: 'Stressor = äußerer Reiz/Auslöser. Stress = der dadurch entstehende Zustand körperlicher und geistiger Anspannung.',
  },
  {
    id: 'lf3-q41',
    category: 'Stress',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Was ist Eustress?',
    options: [
      'Negativ empfundener, belastender Stress',
      'Positiv empfundener, anregender und leistungssteigernder Stress',
      'Ein dauerhafter Erschöpfungszustand',
      'Stress ohne körperliche Reaktion',
    ],
    correctAnswer: 'Positiv empfundener, anregender und leistungssteigernder Stress',
    explanation: 'Eustress wird positiv erlebt (z. B. durch Lob oder Erfolg). Disstress ist der negativ empfundene, belastende Stress.',
  },
  {
    id: 'lf3-q42',
    category: 'Stress',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Was versteht man unter „Emotionsarbeit" im Callcenter?',
    options: [
      'Die Arbeit der Personalabteilung mit emotionalen Mitarbeitern',
      'Die Kluft zwischen gefühlter und vorgeschriebener Stimmung — besonders zehrend',
      'Das Trainieren positiver Gefühle',
      'Die Bezahlung nach emotionaler Belastung',
    ],
    correctAnswer: 'Die Kluft zwischen gefühlter und vorgeschriebener Stimmung — besonders zehrend',
    explanation: 'Emotionsarbeit = freundlich bleiben müssen, obwohl man anders fühlt. Das ist psychisch besonders belastend.',
  },
  {
    id: 'lf3-q43',
    category: 'Stress',
    type: 'matching',
    difficulty: 'medium',
    question: 'Ordne zu: a) Zeitmanagement und ergonomischer Arbeitsplatz · b) Sport, Yoga, autogenes Training',
    correctAnswer: 'a → Stressprävention · b → Stressbewältigung',
    explanation: 'Prävention reduziert Stressoren, bevor Stress entsteht. Bewältigung baut bereits aufgebauten Stress ab.',
  },
  {
    id: 'lf3-q44',
    category: 'Stress',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Welche Maßnahme gehört zur Stressbewältigung (nicht zur Prävention)?',
    options: [
      'Klare Ziele und Zuständigkeiten',
      'Ergonomischer Arbeitsplatz',
      'Autogenes Training und Meditation',
      'Konflikte schnell klären',
    ],
    correctAnswer: 'Autogenes Training und Meditation',
    explanation: 'Autogenes Training baut bestehenden Stress ab (Bewältigung). Klare Ziele, Ergonomie und Konfliktklärung verhindern Stress (Prävention).',
  },
  {
    id: 'lf3-q45',
    category: 'Schriftliche Kommunikation',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Welcher Schreibstil ist im Kundenkontakt zu bevorzugen?',
    options: ['Der Wir-Stil', 'Der Sie-Stil', 'Der Passiv-Stil', 'Der Fachsprachen-Stil'],
    correctAnswer: 'Der Sie-Stil',
    explanation: 'Der Sie-Stil stellt den Kunden in den Mittelpunkt. Zusammen mit positiven, aktiven und kurzen Sätzen wirkt er kundenorientiert.',
  },
];
