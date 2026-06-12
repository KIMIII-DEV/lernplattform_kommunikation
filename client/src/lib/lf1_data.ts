// IZURE — Lernfeld 1: Die Ausbildung im Dialogmarketing mitgestalten
// Quelle: Westermann „Kaufleute für Dialogmarketing", S. 13–149

import type { Topic, Flashcard, QuizQuestion } from './learningData';

export const lf1Topics: Topic[] = [
  {
    id: 'lf1-1-1',
    title: '1.1.1 Unternehmensziele',
    description: 'Vier Zieltypen und deren Beziehungen zueinander.',
    examRelevance: 'high',
    content: `Das **Zielsystem** bündelt alle Unternehmensziele.

**Vier Zieltypen:**
- **Sachziel** — Zweck/Betätigungsfeld, bei Gründung ins Handelsregister eingetragen.
- **Wirtschaftliche Ziele** — Leistungs- (Marktanteil), Finanz- (Eigenkapital, Rücklagen) und Erfolgsziele (Umsatz, Rentabilität).
- **Soziale Ziele** — Verhältnis Unternehmen ↔ Mitarbeiter + Gesellschaft.
- **Ökologische Ziele** — Nachhaltigkeit, klimafreundliche Produkte, umweltgerechte Entsorgung.

**Beziehungen:**
- **Zielharmonie** — Ziele ergänzen sich (Umsatz sichert Arbeitsplätze).
- **Zielkonflikt** — Ziel A nur ohne Ziel B (teures Öko-Papier ↔ Rentabilität).

Lösung bei Konflikt: **Priorisierung** oder **Kompromiss**.`,
    keyPoints: [
      'Vier Zieltypen: Sach-, wirtschaftlich, sozial, ökologisch',
      'Wirtschaftlich = Leistungs-, Finanz-, Erfolgsziele',
      'Zielharmonie vs. Zielkonflikt',
      'Sachziel kommt ins Handelsregister',
    ],
  },
  {
    id: 'lf1-1-2',
    title: '1.1.2 Entscheidungsfindung',
    description: 'Strategisch vs. operativ, Direktorial- vs. Kollegialsystem.',
    examRelevance: 'medium',
    content: `**Zwei Grundachsen der Entscheidung:**
- **Strategisch** — langfristig, von langer Hand geplant (z. B. E-Mail-Bearbeitung outsourcen).
- **Operativ** — Tagesgeschäft, kurzfristig (z. B. Mitarbeiter aus dem Frei rufen).

**Entscheidungssysteme — wer entscheidet?**
- **Direktorialsystem / Entscheidungszentralisation** — Einzelperson entscheidet (z. B. Komplementär).
- **Kollegialprinzip** — Gruppe entscheidet (einstimmig / Mehrheit / Stichentscheid).`,
    keyPoints: [
      'Strategisch = lang, operativ = kurz',
      'Direktorialsystem = Einzelperson',
      'Kollegialprinzip = Gruppe',
    ],
  },
  {
    id: 'lf1-1-3',
    title: '1.1.2 Methoden der Entscheidungsfindung',
    description: 'Sechs Methoden — von CAF bis intuitiv.',
    examRelevance: 'high',
    content: `**Sechs Methoden (Buch-Reihenfolge):**

- **CAF (Consider All Facts)** — Einflussfaktoren ungewichtet sammeln. Vorstufe, keine Entscheidung.
- **PMI (Plus-Minus-Interesting)** — Aspekte mit + / − / i markieren.
- **Gewichtetes PMI** — + und − mit Punkten 1–6, addiert.
- **Entscheidungsmatrix** — Alternativen gegen Kriterien (1–6), keine Gewichtung.
- **Bewertete Entscheidungsmatrix** — wie Matrix, plus Prozent-Gewichtung der Kriterien (Summe 100 %).
- **Intuitive Entscheidung** — Bauch/Erfahrung. **Nicht für strategische Entscheidungen.**`,
    keyPoints: [
      'CAF nur sammeln, keine Entscheidung',
      'Bewertete Matrix = Gewichtung in %',
      'Intuitiv nicht strategisch',
    ],
  },
  {
    id: 'lf1-1-4',
    title: '1.1.3 Führungsstile',
    description: 'Die vier klassischen Führungsstile — autoritär, kooperativ, laissez-faire, situativ.',
    examRelevance: 'high',
    content: `**Stil ≠ Technik.** Stil ist persönlich (sozial), Technik ist organisatorisch.

**Die 4 Stile:**
- **Autoritär** — Entscheidung ohne MA. Vorteile: schnell, kontrolliert. Nachteile: keine Korrektur, keine Ideen, aggressives Klima.
- **Kooperativ (demokratisch)** — MA einbezogen, Delegation. Vorteile: Kreativität, Motivation. Nachteile: langsam, Ausnutzungsgefahr.
- **Laissez-faire** — kein Eingriff. Vorteile: Freiheit, Kreativität. Nachteile: keine Vorgaben, Disziplinprobleme.
- **Situativ** — Stil je nach Situation. Vorteil: flexibel. Nachteil: hohe Führungskompetenz nötig.`,
    keyPoints: [
      '4 Stile: autoritär / kooperativ / laissez-faire / situativ',
      'Stil = persönlich, Technik = organisatorisch',
      'Autoritär schnell, kooperativ motivierend',
    ],
  },
  {
    id: 'lf1-1-5',
    title: '1.1.3 Führungstechniken & SMART',
    description: 'Vier Management-by-Techniken + SMART-Regel zur Zielformulierung.',
    examRelevance: 'high',
    content: `**Die 4 Management-by-Techniken:**
- **by objectives** (Zielvereinbarung) — gemeinsame Ziele, schriftlich, SMART. → Mitarbeitergespräch.
- **by results** (Ergebnisorientierung) — Chef gibt Kennzahlen vor; autoritärer als by objectives.
- **by exception** (Ausnahmeprinzip) — MA entscheidet Routine; Chef nur bei Ausnahmen.
- **by delegation** — Aufgaben + Entscheidungskompetenz auf untere Ebenen, Führungsverantwortung bleibt.

**SMART-Regel:**
- **S** pezifisch
- **M** essbar
- **A** ktiv beeinflussbar
- **R** ealistisch
- **T** erminiert`,
    keyPoints: [
      '4 Techniken: by objectives / results / exception / delegation',
      'SMART: spezifisch, messbar, aktiv, realistisch, terminiert',
      'by objectives = gemeinsam; by results = Chef vorgibt',
    ],
  },
  {
    id: 'lf1-1-6',
    title: '1.1.4 Unternehmenskultur & Corporate Identity',
    description: 'Werte, Normen, CI mit ihren vier Komponenten.',
    examRelevance: 'medium',
    content: `**Unternehmenskultur** = gemeinsam getragene Grundüberzeugungen, Werte, Einstellungen.

**5 Elemente:** Unternehmensziele, Normen/Werte, Kommunikation, Rituale, Vorbilder.

**Corporate Identity (CI) — 4 Komponenten:**
- **Corporate Design** — sichtbare Identität (Logo, Akustik, Web).
- **Corporate Communication** — Kommunikation intern + extern.
- **Corporate Image** — Wahrnehmung von außen.
- **Corporate Behavior** — Verhalten der MA gegenüber Kunden, Kollegen, Partnern.

**Unternehmensleitbild (Mission Statement)** — explizite Ausformulierung von Kultur + Zielen.`,
    keyPoints: [
      'CI = Design, Communication, Image, Behavior',
      'Leitbild wirkt nach innen (Integration) + außen (Orientierung)',
      '5 Kulturelemente: Ziele, Normen, Kommunikation, Rituale, Vorbilder',
    ],
  },
  {
    id: 'lf1-1-7',
    title: '1.2 Aufbau- & Ablauforganisation, Leitungssysteme',
    description: 'Organigramm, vier Leitungssysteme, Matrix.',
    examRelevance: 'high',
    content: `**Aufbauorganisation** = Strukturierung in Einheiten + Weisungsbefugnisse.
**Ablauforganisation** = Gestaltung der Arbeitsabläufe.
**Organigramm** = grafische Darstellung der Aufbauorganisation.

**Vier Leitungssysteme:**
- **Einlinie** — jede Stelle nur von einer Instanz. Klar, aber langwierig.
- **Stablinie** — Einlinie + Stabsstellen (keine/nur fachliche Weisungsbefugnis). Spezialisten entlasten Führung.
- **Spartenorganisation (Divisional)** — Sparten mit eigener Ergebnisverantwortung. Eigenständigkeit, Risiko Autonomie.
- **Mehrlinie** — MA von mehreren Stellen Anweisungen. Schnell, aber Widersprüche möglich.

**Matrix** = Variation Mehrlinie, kombiniert Funktion + Objekt (häufig Projekte).`,
    keyPoints: [
      'Einlinie = 1 Vorgesetzter, Mehrlinie = mehrere',
      'Stabsstelle hat meist keine Weisungsbefugnis',
      'Spartenorg. = strategisch zentral, operativ Sparte',
    ],
  },
  {
    id: 'lf1-1-8',
    title: '1.3 Handelsregister & Kaufmannstypen',
    description: 'HRA/HRB, Ist-, Kann-, Formkaufmann, deklaratorisch vs. konstitutiv.',
    examRelevance: 'high',
    content: `**Handelsregister (HR)** = öffentliches Verzeichnis beim Amtsgericht, elektronisch.
- **HRA** — Einzelkaufleute, Personengesellschaften
- **HRB** — Kapitalgesellschaften

**§ 1 HGB:** Kaufmann ist, wer ein Handelsgewerbe betreibt.

**Drei Kaufmannsarten:**
- **Istkaufmann** — erfüllt Handelsgewerbe-Merkmale. Eintragung **deklaratorisch** (rechtsbezeugend).
- **Kannkaufmann** — Kleingewerbe; Eintragung **konstitutiv** (rechtsbegründend).
- **Formkaufmann** — juristische Person kraft Rechtsform (GmbH); Eintragung **konstitutiv**.

**Freie Berufe** (Ärzte, Anwälte) = kein Handelsgewerbe.`,
    keyPoints: [
      'Istkaufmann = deklaratorisch (nur bezeugt)',
      'Kannkaufmann + Formkaufmann = konstitutiv (begründet)',
      'HRA = Personen, HRB = Kapitalgesellschaften',
    ],
  },
  {
    id: 'lf1-1-9',
    title: '1.3 Firma — Grundsätze & Arten',
    description: '5 Firmengrundsätze und 4 Firmenarten.',
    examRelevance: 'high',
    content: `**§ 17 HGB:** Die Firma ist der Name, unter dem ein Kaufmann seine Geschäfte betreibt und die Unterschrift abgibt.

**5 Grundsätze der Firmenwahl:**
- **Rechtsformzusatz** — KG, GmbH, AG offenlegen
- **Firmenwahrheit / -klarheit** — keine falschen Angaben
- **Firmenausschließlichkeit** — am selben Ort unterscheidbar
- **Firmenbeständigkeit** — Firma nur mit Geschäft verkäuflich
- **Firmenöffentlichkeit** — HR-Eintrag + Geschäftsbriefe

**4 Firmenarten:**
- **Personenfirma** — Name der Gesellschafter (Schmidt & Meyer KG)
- **Sachfirma** — sachliche Beschreibung (Straßenbau AG)
- **Fantasiefirma** — frei erdacht (Dialogfix GmbH)
- **Mischfirma** — Kombination (Westermann Verlag GmbH & Co. KG)`,
    keyPoints: [
      '5 Grundsätze: Wahrheit, Klarheit, Ausschließlichkeit, Beständigkeit, Öffentlichkeit, Rechtsformzusatz',
      'Firma ≠ Unternehmen — Firma = Name, Unternehmen = Organisation',
      '4 Arten: Personen, Sach, Fantasie, Misch',
    ],
  },
  {
    id: 'lf1-1-10',
    title: '1.3.2 Kommanditgesellschaft (KG)',
    description: 'Komplementär vs. Kommanditist, Haftung, Geschäftsführung.',
    examRelevance: 'high',
    content: `**Rechtsgrundlage:** §§ 161–177a HGB. **Kein Mindestkapital.**

**Gesellschafter:**
- mindestens 1 **Komplementär** — Vollhafter, persönlich
- mindestens 1 **Kommanditist** — Teilhafter, nur Einlagebeschränkung

**Komplementär-Haftung:** unbeschränkt + persönlich (auch mit Privatvermögen) + gesamtschuldnerisch + direkt gegenüber Gläubigern.

**Kommanditist-Haftung:** nur in Höhe der Kapitaleinlage.

**Geschäftsführung & Vertretung:** nur Komplementäre. Außergewöhnliche Handlungen brauchen Zustimmung aller Komplementäre.

**Kommanditist-Rechte:** ausgeschlossen von Geschäftsführung, Widerspruchsrecht, Kontrollrechte (Bilanzeinsicht).

**Gewinnverteilung:** erst 4 % Verzinsung der Kapitalanteile, Rest meist gemäß Gesellschaftsvertrag.`,
    keyPoints: [
      'Komplementär haftet unbeschränkt + persönlich + gesamtschuldnerisch + direkt',
      'Kommanditist haftet nur in Höhe der Einlage',
      'Kein Mindestkapital',
      'Nur Komplementäre führen + vertreten',
    ],
  },
  {
    id: 'lf1-1-11',
    title: '1.3.3 GmbH & GmbH & Co. KG',
    description: 'Kapitalgesellschaft, Mindeststammkapital, Organe.',
    examRelevance: 'high',
    content: `**GmbH** = Kapitalgesellschaft mit eigener Rechtspersönlichkeit (juristische Person).

**Rechtsgrundlage:** GmbHG, MoMiG 2008.

**Stammkapital:** mindestens **25.000 €**. **Stammeinlage** pro Gesellschafter: mindestens **1 €**.

**Sonderformen:**
- **Ein-Mann-GmbH** — Gründung durch 1 Person
- **UG (haftungsbeschränkt) / Mini-GmbH** — ohne Mindeststammkapital, Pflicht zur Gewinnthesaurierung bis 25.000 € erreicht

**Haftung:** nur Gesellschaftsvermögen. **Keine** Privathaftung der Gesellschafter.

**Organe:**
- **Geschäftsführer** — Vertretung nach außen, müssen keine Gesellschafter sein
- **Gesellschafterversammlung** — oberstes Organ; 1 € Einlage = 1 Stimme
- **Aufsichtsrat** — gesetzlich vorgeschrieben **ab 500 AN** (BetrVG)

**GmbH & Co. KG:** rechtlich KG, Komplementär ist eine GmbH → unbeschränkte Haftung wird zu beschränkter.`,
    keyPoints: [
      'Mindeststammkapital 25.000 €',
      'Stammeinlage min. 1 €',
      'Aufsichtsrat ab 500 AN',
      'GmbH & Co. KG kombiniert KG-Struktur mit beschränkter Haftung',
    ],
  },
  {
    id: 'lf1-1-12',
    title: '1.4 Externe Institutionen',
    description: 'IHK, BG, Gewerkschaften, Verbände im Dialogmarketing.',
    examRelevance: 'medium',
    content: `**Wichtige externe Institutionen:**
- **IHK** — „zuständige Stelle" nach BBiG. Zwischen-/Abschlussprüfung, Beratung, Wirtschaftsförderung.
- **Berufsgenossenschaften** — Unfallversicherungsträger, Unfallverhütungsvorschriften.
- **Sozialversicherungsträger** — gesetzliche Krankenkassen führen Beitragseinzug für alle Zweige.
- **Gewerkschaften** — Rechtsschutz, Tarifverträge. Im DM: **ver.di**.
- **Berufsvertretungen** — Vereine (z. B. BDV).
- **Interessenverbände** — im DM: **CCV** (Call Center Verband) und **DDV** (Deutscher Dialogmarketing Verband).
- **Verbraucherzentralen** — Beratung Verbraucherschutz.
- **Politik & Presse** — beeinflussen Rahmenbedingungen und öffentliches Bild.`,
    keyPoints: [
      'IHK = zuständige Stelle nach BBiG',
      'DM-Gewerkschaft = ver.di',
      'DM-Verbände = CCV + DDV',
      'BG = Unfallversicherung',
    ],
  },
  {
    id: 'lf1-2-1',
    title: '2.1 Duale Ausbildung & Dokumentenpyramide',
    description: 'Berufsschule + Betrieb, Rahmenplan vs. Lehrplan.',
    examRelevance: 'medium',
    content: `**Duales Prinzip** = 2 unabhängige Lernorte:
- **Berufsschule** — Theorie, Allgemeinbildung
- **Ausbildungsbetrieb** — Praxis

**Rechtsgrundlage:** Berufsbildungsgesetz (**BBiG**). **IHK** = Verwaltungs- + Prüfungsstelle + Streitschlichtung.

**Dokumentenpyramide:**
- **Ausbildungsordnung** (Gesetzgeber) — Berufsbezeichnung, Dauer, Berufsbild
- **Ausbildungsberufsbild** — Kurzüberblick
- **Ausbildungsrahmenplan** — sachliche + zeitliche Gliederung (Betrieb)
- **Betrieblicher Ausbildungsplan** — konkrete Umsetzung
- **Rahmenlehrplan (KMK)** — bundesweit, Schule

**Wichtig:** „Ausbildender" = das Unternehmen. „Ausbilder" = die unterweisende Person. „Auszubildender" = Lehrling.`,
    keyPoints: [
      'Dual = Schule + Betrieb',
      'BBiG = Rechtsgrundlage',
      'KMK = Rahmenlehrplan Schule',
      'Ausbildender ≠ Ausbilder',
    ],
  },
  {
    id: 'lf1-2-2',
    title: '2.1.2 § 11 BBiG — Ausbildungsvertrag',
    description: 'Die 9 Pflichtinhalte des Ausbildungsvertrags.',
    examRelevance: 'high',
    content: `**§ 11 BBiG — die 9 Pflichtinhalte (vollständig):**

1. Art, sachliche und zeitliche Gliederung sowie Ziel der Berufsausbildung
2. Beginn und Dauer der Berufsausbildung
3. Ausbildungsmaßnahmen außerhalb der Ausbildungsstätte
4. Dauer der regelmäßigen täglichen Ausbildungszeit
5. Dauer der Probezeit
6. Zahlung und Höhe der Vergütung
7. Dauer des Urlaubs
8. Voraussetzungen, unter denen der Berufsausbildungsvertrag gekündigt werden kann
9. Hinweis auf anwendbare Tarifverträge / Betriebsvereinbarungen

**Eselsbrücke:** „Art-Beginn-Außen-Tag-Probe-Geld-Urlaub-Kündigung-Tarif."`,
    keyPoints: [
      '9 Pflichtinhalte komplett auswendig',
      '§ 11 BBiG',
      'Schriftform zwingend',
    ],
  },
  {
    id: 'lf1-2-3',
    title: '2.1.3 Rechte & Pflichten §§ 14–19 BBiG',
    description: 'Was Azubi und Ausbildender einander schulden.',
    examRelevance: 'medium',
    content: `**Pflichten des Auszubildenden** (= Rechte des Ausbildenden):
- Lernen, Bemühen um Ausbildungsziel
- sorgfältige Aufgabenausführung
- Teilnahme an Berufsschule + Prüfungen
- Weisungen befolgen
- Betriebsordnung beachten
- pflegliche Behandlung der Arbeitsmittel
- Schweigepflicht

**Pflichten des Ausbildenden** (= Rechte des Auszubildenden):
- Vermittlung der Handlungsfähigkeit
- Freistellung für Berufsschule + Prüfungen
- kostenlose Arbeitsmittel
- Urlaubsgewährung
- Fürsorgepflicht
- angemessene, jährlich ansteigende Vergütung
- Zeugnis nach Ende (§ 16 BBiG, einfach oder qualifiziert)`,
    keyPoints: [
      'Arbeitsmittel KOSTENLOS vom Ausbildenden',
      'Zeugnis nach § 16 BBiG: einfach oder qualifiziert',
      'Vergütung muss jährlich steigen',
      'Schweigepflicht des Azubis',
    ],
  },
  {
    id: 'lf1-2-4',
    title: '2.1.4 Beendigung & Probezeit',
    description: 'Probezeit § 22 BBiG, Weiterbeschäftigung § 24 BBiG.',
    examRelevance: 'high',
    content: `**Probezeit (§ 22 BBiG):**
- mindestens **1 Monat**, maximal **4 Monate**
- Kündigung **jederzeit ohne Grund** möglich

**Nach Probezeit:**
- Fristlose Kündigung nur bei **wichtigem Grund** (z. B. ständige Unpünktlichkeit, Nichtzahlung der Vergütung)
- Auszubildender kann mit **4 Wochen Frist** kündigen — wenn er Ausbildung aufgibt oder Beruf wechselt
- **Schriftform IMMER zwingend** (auch in Probezeit)

**Regulär:**
- Ablauf der vereinbarten Zeit, ggf. vorher mit **Bestehen der Abschlussprüfung** (am Tag der Bekanntgabe)
- Vorzeitige Zulassung bei guten Leistungen über IHK (Anhörung von Ausbildendem + Berufsschule, § 45 BBiG)

**§ 24 BBiG — Weiterbeschäftigung:**
Nach Ablauf der Ausbildungszeit entsteht **automatisch und ohne ausdrückliche Vereinbarung** ein **unbefristetes Arbeitsverhältnis**, wenn der Auszubildende weiterbeschäftigt wird.`,
    keyPoints: [
      'Probezeit: 1–4 Monate, jederzeit ohne Grund',
      'Nach Probezeit: nur wichtiger Grund (fristlos) oder 4 Wochen für Azubi',
      '§ 24 BBiG: automatisch unbefristetes Arbeitsverhältnis',
      'Schriftform IMMER',
    ],
  },
  {
    id: 'lf1-2-5',
    title: '2.2.1 Jugendarbeitsschutzgesetz (JArbSchG)',
    description: 'Arbeitszeit, Pausen, Berufsschulanrechnung, Urlaubsstaffel.',
    examRelevance: 'high',
    content: `**Jugendlicher** = 15, aber noch nicht 18.

**Arbeitszeit:**
- max. **40 h/Woche**, max. **8 h/Tag** (ausnahmsweise 8,5 h)
- max. Schichtzeit **10 h** (Arbeit + Pausen)
- **5 Tage/Woche**, zwei Ruhetage sollen aufeinanderfolgen
- nur zwischen **6 und 20 Uhr**, nicht Sa/So/Feiertag

**Ruhepausen:**
- **30 min** bei >4,5 bis 6 h
- **60 min** bei >6 h
- nach Arbeit: mindestens **12 h** ununterbrochene Freizeit
- nicht länger als 4,5 h durcharbeiten
- Pause = mind. 15 min am Stück

**Berufsschule (seit 2020 auch für >18-jährige Azubis):**
- Unterricht **vor 9 Uhr** → vorher keine Beschäftigung
- Unterricht **>5 Stunden** → an diesem Tag freistellen, **8 h** auf Wochenarbeitszeit anrechnen
- Blockunterricht ≥25 Std/Woche = **40 h** Anrechnung, keine zusätzliche Arbeit
- Tag **vor schriftlicher Abschlussprüfung**: Freistellung

**Urlaubsstaffel (nach Alter zu Jahresbeginn):**
- noch nicht 16 → **30 Werktage**
- noch nicht 17 → **27 Werktage**
- noch nicht 18 → **25 Werktage**`,
    keyPoints: [
      '40h/Wo, 8h/Tag, 6–20 Uhr, 5 Tage',
      'Pausen: 30 min bei 4,5–6h / 60 min ab 6h',
      'Mindestens 12h Freizeit nach Schicht',
      'Urlaub: 30/27/25 nach Alter',
      'Berufsschulregel seit 2020 auch für >18',
    ],
  },
  {
    id: 'lf1-2-6',
    title: '2.2 ArbZG, BUrlG, EntgFG, MuSchG',
    description: 'Weitere Schutzgesetze im Überblick.',
    examRelevance: 'medium',
    content: `**Arbeitszeitgesetz (ArbZG):**
- Arbeitszeit = Beginn bis Ende der Arbeit ohne Pausen (§ 2)
- **Nachtzeit** = 23–6 Uhr
- **Nachtarbeit** = >2 h in Nachtzeit
- **Nachtarbeitnehmer** = regelmäßige Wechselschicht ODER ≥48 Nachtarbeitstage/Jahr

**Bundesurlaubsgesetz (BUrlG):**
- Mindestens **24 Werktage** bei 6-Tage-Woche

**Entgeltfortzahlungsgesetz (EntgFG):**
- Bei Krankheit: weiter Lohnzahlung **6 Wochen** bei gleichem Krankheitsgrund

**Mutterschutzgesetz (MuSchG):**
- **6 Wochen vor** Geburt, **8 Wochen nach** Geburt geschützt (**12** bei Mehrlings-/Frühgeburt)`,
    keyPoints: [
      'Mindesturlaub 24 Werktage (6-Tage)',
      'Krankheit: 6 Wochen Lohnfortzahlung',
      'Mutterschutz 6 vor / 8 nach (12 bei Mehrling)',
      'Nachtzeit 23–6 Uhr',
    ],
  },
  {
    id: 'lf1-2-7',
    title: '2.3 Betriebsrat — Größe, Wahl, Aufgaben',
    description: '4 Aufgabenbereiche und 3 Beteiligungsrechte.',
    examRelevance: 'high',
    content: `**Wann?** Ab **5 ständigen wahlberechtigten AN**, davon **3 wählbar**.

**Wahlperiode:** alle **4 Jahre**, zwischen **1. März und 31. Mai** (§ 13 BetrVG).

**Größe (§ 9 BetrVG, Auszug):**
- 5–20 AN → 1 BR
- 21–50 → 3
- 51–100 → 5
- 101–200 → 7
- 201–400 → 9

**4 Aufgabenbereiche (§§ 74–113 BetrVG):**
- Allgemeine Aufgaben (Schutzbestimmungen)
- Soziale Angelegenheiten (Arbeitsbedingungen)
- Personelle Angelegenheiten
- Wirtschaftliche Angelegenheiten

**3 Beteiligungsrechte (gestaffelt):**
- **Mitbestimmungsrechte** (echte Mitbestimmung) — soziale Angelegenheiten. Ohne Zustimmung keine Wirksamkeit.
- **Mitwirkungsrechte** (Widerspruchsrechte) — personelle Einzelmaßnahmen ab 20 AN. **§ 102 BetrVG**: Anhörung vor Kündigung; sonst Kündigung unwirksam.
- **Informations-/Beratungsrechte** — wirtschaftliche Angelegenheiten.

**Organe:** Betriebsversammlung (mind. vierteljährlich), Einigungsstelle (§ 76), Wirtschaftsausschuss (§ 106).`,
    keyPoints: [
      'Ab 5 AN, davon 3 wählbar',
      'Wahl alle 4 Jahre, 1. März – 31. Mai',
      '§ 102 BetrVG: Anhörung vor Kündigung',
      '3 Stufen: Mitbestimmung > Mitwirkung > Information',
    ],
  },
  {
    id: 'lf1-2-8',
    title: '2.4 Sozialversicherung — 5 Säulen',
    description: 'Krankenkasse, Unfall, Rente, Arbeitslosen, Pflege.',
    examRelevance: 'high',
    content: `**5 Zweige der gesetzlichen Sozialversicherung:**

| Zweig | Seit | Beitrag | Wer zahlt? |
|---|---|---|---|
| Krankenversicherung | 1883 | 14,6 % + Zusatz | paritätisch |
| Unfallversicherung | 1884 | abh. Gefahrenklasse | **nur Arbeitgeber** |
| Rentenversicherung | 1889 | 18,6 % | paritätisch |
| Arbeitslosenversicherung | 1927 | 2,5 % | paritätisch |
| Pflegeversicherung | 1995 | 3,05 % (Kinderlose +0,25 %) | paritätisch |

**4 Grundprinzipien:**
- **Versicherungspflicht** — automatisch mit Beschäftigung
- **Beitragsfinanzierung** — paritätisch (außer Unfall)
- **Solidaritätsprinzip** — Leistung nach Bedürftigkeit
- **Äquivalenzprinzip** — Leistung nach Beitrag (Rente, teilw. Arbeitslosen)

**Begriffspaar:**
- **Beitragsbemessungsgrenze (BBG)** — Beiträge nur bis Grenze
- **Versicherungspflichtgrenze** — bis wohin Pflichtmitgliedschaft KV/PV`,
    keyPoints: [
      '5 Zweige: KV / UV / RV / AV / PV',
      'Nur Unfallversicherung allein vom Arbeitgeber',
      'Solidarität vs. Äquivalenz',
      'KV 14,6 % / RV 18,6 % / AV 2,5 % / PV 3,05 %',
    ],
  },
  {
    id: 'lf1-4-1',
    title: '4 Arbeitsplatz — Raumformen, Headset, Umwelt',
    description: 'Ergonomie, Raumgröße, Lärm in Sone, Beleuchtung.',
    examRelevance: 'medium',
    content: `**Regelwerk-Kaskade:** ArbSchG → ArbStättV → ASR → BG-Vorschriften → DIN-Normen.

**Drei Raumformen:**
- **Einzelbüro** — Privatsphäre, vertraulich. Isolationsgefahr, teuer.
- **Gruppen-/Teambüro (4–12)** — Austausch, Werkzeug-Sharing. Lärm, Konflikt.
- **Großraumbüro** — wirtschaftlich, kurze Wege. Lärm, fehlende Privatsphäre.

**Raumgröße:** 12–15 m²/Arbeitsplatz, Bewegungsfläche min. 1,5 m².

**Headset:**
- **Sprechröhrchen** — klein, unauffällig, Hygiene durch Austausch
- **Mit Mikrofon** — kaum Umgebungsgeräusche, aber größer
- Pro MA persönlich aus Hygienegründen

**Umweltfaktoren:**
- **Lärm:** Sone = subjektives Empfinden (linear), Dezibel = Schalldruck (logarithmisch). Callcenter-Höchstgrenze **2 sone**.
- **Klima:** 20–23 °C, 50–60 % Luftfeuchtigkeit
- **Licht:** min. **500 Lux** am Büroarbeitsplatz. Rechtshänder Licht von links.`,
    keyPoints: [
      'Sone = subjektiv, Dezibel = physikalisch',
      'Callcenter max. 2 sone',
      'Min. 500 Lux',
      '20–23 °C, 50–60 % Luftfeuchtigkeit',
      'Headset persönlich pro MA',
    ],
  },
  {
    id: 'lf1-5-1',
    title: '5 Informationsmanagement & Kanäle',
    description: '4 Informationsarten, 5 Kanäle, 2 Protokollarten.',
    examRelevance: 'medium',
    content: `**Aufgaben des Informationsmanagements:** beschaffen, aufbereiten, Fluss steuern, weiterleiten, archivieren.

**4 Informationsarten:**
- **Fachlich** — Produkte, Preise → Hotline-MA
- **Organisatorisch** — Personalplanung, Wartung → Führung
- **Sensibel** — Strategie, Personalprobleme → Einzelpersonen
- **Soft Facts** — Betriebsklima, Feiern → alle MA

**5 Informationskanäle:**
- **Intranet** — hat schwarzes Brett ersetzt; alle MA. Pflege nötig.
- **E-Mail** — schnell, dauerhaft, Anlagen. Nicht für Vertrauliches; Informationsflut.
- **Meeting** — komplex, Diskussion, Beschlüsse, unangenehme Themen. Planungsvorlauf.
- **Einzelgespräch** — sensibel, kritisch. Nur einzelne MA.
- **Protokoll** — dauerhaft, auch Nichtanwesende. Verzögerung; Kritisches fehlt oft.

**2 Protokollarten:**
- **Verlaufsprotokoll** — Beiträge, Diskussion, Abstimmung
- **Ergebnisprotokoll** — nur Ergebnisse + Beschlüsse`,
    keyPoints: [
      '4 Infoarten: fachlich, organisatorisch, sensibel, soft',
      '5 Kanäle: Intranet, E-Mail, Meeting, Einzelgespräch, Protokoll',
      'Verlauf- vs. Ergebnisprotokoll',
      'Sensible Info NICHT per E-Mail',
    ],
  },
  {
    id: 'lf1-6-1',
    title: '6 Zeitmanagement & Lerntechniken',
    description: 'ABC, Eisenhower, Pareto, ALPEN, 4 Lerntypen, 10 Lerngrundsätze.',
    examRelevance: 'high',
    content: `**Priorisierungs-Werkzeuge:**

- **To-do-Liste** — Aufgaben + Zeitbedarf + Termin
- **ABC-Analyse** — A (sofort), B (delegieren/effizient), C (prüfen)
- **Eisenhower-Prinzip** — Kreuztabelle dringend × wichtig:
  - A wichtig + dringend → sofort
  - B wichtig, nicht dringend → terminieren
  - C dringend, nicht wichtig → delegieren
  - D weder noch → Papierkorb
- **Pareto (80/20)** — 20 % der Aufgaben = 80 % Erfolg
- **ALPEN** — **A**ufgaben, **L**änge schätzen, **P**uffer (60/40), **E**ntscheiden, **N**achkontrolle

**4 Lerntypen:** visuell, auditiv, kommunikativ, motorisch. In der Regel **Mischformen**.

**10 Lerngrundsätze (Buch-Reihenfolge):**
1. Motivation + klare Ziele
2. Strukturierter Lernstoff
3. Verknüpfung mit Bekanntem
4. Wiederholungen
5. Mehrere Sinneskanäle
6. Positive emotionale Verbindung
7. Lernstörungen beseitigen
8. Nicht zu viel auf einmal
9. Krankheit/Erschöpfung beeinträchtigt
10. Leistungskurve beachten (kurze Pausen)`,
    keyPoints: [
      'Eisenhower: dringend × wichtig',
      'ALPEN: A-L-P-E-N',
      'Pareto 80/20',
      '4 Lerntypen, meist Mischformen',
      '10 Lerngrundsätze',
    ],
  },
  {
    id: 'lf1-t9',
    title: '1.9 VUCA — Die Rahmenbedingungen moderner Unternehmen',
    description: 'Volatility, Uncertainty, Complexity, Ambiguity — warum Unternehmen heute flexibel agieren müssen.',
    examRelevance: 'high',
    content: `## VUCA — Definition\n\nVUCA beschreibt die **Rahmenbedingungen**, unter denen Unternehmen heute agieren. Der Begriff stammt ursprünglich aus dem US-Militär und beschreibt eine Welt, die sich schnell und unvorhersehbar verändert.\n\n## Die 4 Aspekte\n\n| Buchstabe | Englisch | Deutsch | Bedeutung | Beispiel DM |\n|---|---|---|---|---|\n| **V** | Volatility | **Volatilität** | schnelle, starke Veränderungen | Anrufvolumen schwankt unvorhersehbar |\n| **U** | Uncertainty | **Unsicherheit** | Zukunft schwer vorhersehbar | neue Technologien (KI, Chatbots) |\n| **C** | Complexity | **Komplexität** | viele vernetzte Einflussfaktoren | Omnichannel mit vielen Kanälen |\n| **A** | Ambiguity | **Ambiguität** (Mehrdeutigkeit) | Situationen unterschiedlich deutbar | widersprüchliche Kundenfeedbacks |\n\n## Reaktion auf VUCA\n\nUnternehmen reagieren auf die VUCA-Welt mit:\n- **Agilität** (schnelle Anpassungsfähigkeit)\n- **Flexiblen Strukturen** (flache Hierarchien)\n- **Kontinuierlicher Weiterbildung** der Mitarbeiter\n- **Datenbasierten Entscheidungen** (Forecasting, Reporting)\n\n## Gegenmodell: VUCA 2.0\n\nManche Konzepte setzen dem VUCA bewusst Gegenwerte entgegen:\n- **V**ision (statt Volatilität)\n- **U**nderstanding (statt Unsicherheit)\n- **C**larity (statt Komplexität)\n- **A**gility (statt Ambiguität)\n\n⚠️ **Prüfungsrelevant:** Alle 4 Buchstaben einzeln benennen UND erläutern können — nicht nur das Akronym kennen!`,
    keyPoints: [
      'VUCA = Volatility, Uncertainty, Complexity, Ambiguity',
      'Beschreibt die unvorhersehbaren Rahmenbedingungen moderner Unternehmen',
      'Reaktion: Agilität, flexible Strukturen, Weiterbildung',
      'Jeden der 4 Aspekte einzeln erklären können',
    ],
  },
  {
    id: 'lf1-t10',
    title: '1.10 Organigramm & Aufbau-/Ablauforganisation vertieft',
    description: 'Organigramm-Funktionen und grafische Darstellung, plus die scharfe Trennung von Aufbau- und Ablauforganisation.',
    examRelevance: 'high',
    content: `## Das Organigramm\n\n**Definition:** Grafische Darstellung der **Aufbauorganisation** — zeigt Stellen, Abteilungen, Weisungsbefugnisse und Hierarchieebenen.\n\n### Funktionen eines Organigramms\n1. **Überblick** über die Unternehmensstruktur\n2. **Weisungsbefugnisse** sichtbar machen (wer ist wem unterstellt?)\n3. **Verantwortungsbereiche** abgrenzen\n4. **Kommunikationswege** verdeutlichen\n5. **Onboarding** neuer Mitarbeiter erleichtern\n\n### Grafische Darstellungsformen\n| Form | Beschreibung |\n|---|---|\n| **Vertikal (Top-Down)** | Leitung oben, Hierarchie nach unten — Standardform |\n| **Horizontal** | Leitung links, Struktur nach rechts |\n| **Kreisförmig** | Leitung im Zentrum, Abteilungen außen |\n\n### Vor- und Nachteile von Organigrammen\n| Vorteile | Nachteile |\n|---|---|\n| Klare Übersicht | Statisch — schnell veraltet |\n| Weisungswege erkennbar | Informelle Beziehungen fehlen |\n| Verantwortung sichtbar | Keine Prozesse/Abläufe erkennbar |\n| Hilfe bei Einarbeitung | Bei großen Firmen unübersichtlich |\n\n## Aufbau- vs. Ablauforganisation (PRÜFUNG!)\n\n| | **Aufbauorganisation** | **Ablauforganisation** |\n|---|---|---|\n| **Frage** | WER macht WAS? (Struktur) | WIE/WANN wird gearbeitet? (Prozess) |\n| **Inhalt** | Stellen, Abteilungen, Weisungsbefugnisse | Arbeitsabläufe, Reihenfolgen, Zeitplanung |\n| **Darstellung** | Organigramm | Flussdiagramm, Ablaufplan |\n| **Beispiel DM** | „Teamleiter führt 15 Agents" | „Eingehender Anruf → IVR → Agent → Nacharbeit" |\n\n**Merksatz:** Aufbau = **statisches Gerüst** (Wer?). Ablauf = **dynamischer Prozess** (Wie?).\n\n⚠️ **Häufige Prüfungsfalle:** „Organigramm zeigt Abläufe" → FALSCH. Das Organigramm zeigt die **Aufbau**organisation (Struktur), NICHT die Abläufe!`,
    keyPoints: [
      'Organigramm = grafische Darstellung der Aufbauorganisation',
      '5 Funktionen: Überblick, Weisungsbefugnis, Verantwortung, Kommunikation, Onboarding',
      'Aufbau = WER macht WAS (Struktur, Organigramm)',
      'Ablauf = WIE/WANN wird gearbeitet (Prozess, Flussdiagramm)',
    ],
  },
];

export const lf1Flashcards: Flashcard[] = [
  // Entscheidungen & Führung
  { id: 'lf1-f1', category: 'Ziele & Entscheidungen', question: 'Welche vier Zieltypen kennt das Buch?', answer: 'Sachziel, wirtschaftliche Ziele, soziale Ziele, ökologische Ziele.' },
  { id: 'lf1-f2', category: 'Ziele & Entscheidungen', question: 'Was ist Zielharmonie?', answer: 'Ziele ergänzen sich (z. B. Umsatzwachstum sichert Arbeitsplätze).' },
  { id: 'lf1-f3', category: 'Ziele & Entscheidungen', question: 'Was ist ein Zielkonflikt?', answer: 'Ziel A ist nur erreichbar, wenn Ziel B aufgegeben wird (Lösung: Priorisierung oder Kompromiss).' },
  { id: 'lf1-f4', category: 'Ziele & Entscheidungen', question: 'Unterschied strategische vs. operative Entscheidung?', answer: 'Strategisch = langfristig, von langer Hand geplant. Operativ = Tagesgeschäft, kurzfristig.' },
  { id: 'lf1-f5', category: 'Ziele & Entscheidungen', question: 'Was bedeutet Direktorialsystem?', answer: 'Entscheidungszentralisation: Eine Einzelperson entscheidet (z. B. Komplementär einer KG).' },
  { id: 'lf1-f6', category: 'Ziele & Entscheidungen', question: 'Was bedeutet Kollegialprinzip?', answer: 'Eine Gruppe entscheidet (einstimmig, mehrheitlich oder mit Stichentscheid).' },
  { id: 'lf1-f7', category: 'Ziele & Entscheidungen', question: 'Was ist eine bewertete Entscheidungsmatrix?', answer: 'Alternativen gegen Kriterien (Punkte 1–6) mit zusätzlicher Prozent-Gewichtung der Kriterien (Summe 100 %).' },
  { id: 'lf1-f8', category: 'Ziele & Entscheidungen', question: 'Welche Entscheidungsmethode eignet sich NICHT für strategische Entscheidungen?', answer: 'Die intuitive Entscheidungsfindung.' },
  { id: 'lf1-f9', category: 'Führung', question: 'Welche vier Führungsstile nennt das Buch?', answer: 'Autoritär, kooperativ (demokratisch), laissez-faire, situativ.' },
  { id: 'lf1-f10', category: 'Führung', question: 'Was unterscheidet Führungsstil von Führungstechnik?', answer: 'Stil = persönlich/sozial. Technik = organisatorisch (Management-by).' },
  { id: 'lf1-f11', category: 'Führung', question: 'Welche vier Management-by-Techniken gibt es?', answer: 'Management by objectives, by results, by exception, by delegation.' },
  { id: 'lf1-f12', category: 'Führung', question: 'Wofür stehen die Buchstaben in SMART?', answer: 'Spezifisch, Messbar, Aktiv beeinflussbar, Realistisch, Terminiert.' },

  // Unternehmenskultur & CI
  { id: 'lf1-f13', category: 'Kultur & CI', question: 'Welche 5 Elemente bilden die Unternehmenskultur?', answer: 'Unternehmensziele, Normen und Werte, Kommunikation, Rituale, Vorbilder.' },
  { id: 'lf1-f14', category: 'Kultur & CI', question: 'Welche vier Komponenten hat Corporate Identity?', answer: 'Corporate Design, Corporate Communication, Corporate Image, Corporate Behavior.' },
  { id: 'lf1-f15', category: 'Kultur & CI', question: 'Was ist ein Unternehmensleitbild?', answer: 'Eine explizite Ausformulierung von Kultur, Identität, Philosophie und Zielen. Wirkt nach innen (Integration) und außen (Orientierung).' },
  { id: 'lf1-f16', category: 'Kultur & CI', question: 'Was ist Corporate Behavior?', answer: 'Das Verhalten der Mitarbeiter gegenüber Kunden, Kollegen, Partnern und Lieferanten.' },

  // Organisation & Rechtsformen
  { id: 'lf1-f17', category: 'Organisation', question: 'Definiere Aufbauorganisation.', answer: 'Strukturierung in organisatorische Einheiten und Regelung der Weisungsbefugnisse.' },
  { id: 'lf1-f18', category: 'Organisation', question: 'Definiere Ablauforganisation.', answer: 'Gestaltung der Arbeitsabläufe und der nötigen Mittel/Informationen.' },
  { id: 'lf1-f19', category: 'Organisation', question: 'Welche vier Leitungssysteme kennt das Buch?', answer: 'Einlinien-, Stablinien-, Sparten-, Mehrlinienorganisation (Variation: Matrix).' },
  { id: 'lf1-f20', category: 'Organisation', question: 'Was kennzeichnet eine Stabsstelle?', answer: 'Querschnittsfunktion ohne (oder nur fachliche) Weisungsbefugnis (z. B. QM, Öffentlichkeitsarbeit).' },
  { id: 'lf1-f21', category: 'Recht', question: 'Was steht im HRA, was im HRB?', answer: 'HRA: Einzelkaufleute und Personengesellschaften. HRB: Kapitalgesellschaften.' },
  { id: 'lf1-f22', category: 'Recht', question: 'Was ist ein Istkaufmann und wie wirkt die Eintragung?', answer: 'Erfüllt die Handelsgewerbe-Merkmale; Eintragung ist deklaratorisch (rechtsbezeugend) — die Kaufmannseigenschaft besteht schon vorher.' },
  { id: 'lf1-f23', category: 'Recht', question: 'Was ist ein Kannkaufmann und wie wirkt die Eintragung?', answer: 'Kleingewerbetreibender ohne kaufmännischen Geschäftsbetrieb; Eintragung ist konstitutiv (rechtsbegründend).' },
  { id: 'lf1-f24', category: 'Recht', question: 'Was ist ein Formkaufmann?', answer: 'Eine juristische Person kraft Rechtsform (insbesondere Kapitalgesellschaft wie GmbH); Eintragung konstitutiv.' },
  { id: 'lf1-f25', category: 'Recht', question: 'Welche 5 Grundsätze gelten für die Firmenwahl?', answer: 'Rechtsformzusatz, Firmenwahrheit/-klarheit, Firmenausschließlichkeit, Firmenbeständigkeit, Firmenöffentlichkeit.' },
  { id: 'lf1-f26', category: 'Recht', question: 'Welche 4 Firmenarten gibt es?', answer: 'Personenfirma, Sachfirma, Fantasiefirma, Mischfirma.' },
  { id: 'lf1-f27', category: 'Recht', question: 'Wer haftet wie in einer KG?', answer: 'Komplementär: unbeschränkt + persönlich + gesamtschuldnerisch + direkt. Kommanditist: nur in Höhe seiner Kapitaleinlage.' },
  { id: 'lf1-f28', category: 'Recht', question: 'Wer führt und vertritt eine KG?', answer: 'Nur die Komplementäre. Außergewöhnliche Handlungen brauchen die Zustimmung aller Komplementäre.' },
  { id: 'lf1-f29', category: 'Recht', question: 'Welche Rechte hat ein Kommanditist?', answer: 'Ausgeschlossen von Geschäftsführung; Widerspruchsrecht bei außergewöhnlichen Handlungen; Kontrollrechte (Bilanzeinsicht).' },
  { id: 'lf1-f30', category: 'Recht', question: 'Wie hoch ist das Mindeststammkapital einer GmbH?', answer: '25.000 €. Die Stammeinlage pro Gesellschafter beträgt mindestens 1 €.' },
  { id: 'lf1-f31', category: 'Recht', question: 'Welche drei Organe hat eine GmbH?', answer: 'Geschäftsführer, Gesellschafterversammlung, Aufsichtsrat (gesetzlich vorgeschrieben ab 500 AN).' },
  { id: 'lf1-f32', category: 'Recht', question: 'Wer haftet bei der GmbH?', answer: 'Nur das Gesellschaftsvermögen. Keine Privathaftung der Gesellschafter.' },
  { id: 'lf1-f33', category: 'Recht', question: 'Was ist die GmbH & Co. KG?', answer: 'Rechtlich eine KG, deren einziger Komplementär eine GmbH ist — wandelt unmittelbare unbeschränkte Haftung in mittelbare beschränkte Haftung um.' },
  { id: 'lf1-f34', category: 'Recht', question: 'Was ist die UG (haftungsbeschränkt)?', answer: '„Mini-GmbH" / „Ein-Euro-GmbH" ohne Mindeststammkapital — mit Pflicht zur Gewinnthesaurierung, bis 25.000 € erreicht sind.' },

  // Externe Institutionen
  { id: 'lf1-f35', category: 'Institutionen', question: 'Was ist die „zuständige Stelle" nach BBiG?', answer: 'Die IHK — sie führt Prüfungen durch, berät und schlichtet bei Streitigkeiten.' },
  { id: 'lf1-f36', category: 'Institutionen', question: 'Welche Gewerkschaft vertritt das Dialogmarketing?', answer: 'ver.di.' },
  { id: 'lf1-f37', category: 'Institutionen', question: 'Welche zwei Interessenverbände gibt es im Dialogmarketing?', answer: 'CCV (Call Center Verband Deutschland) und DDV (Deutscher Dialogmarketing Verband).' },
  { id: 'lf1-f38', category: 'Institutionen', question: 'Was ist die Aufgabe der Berufsgenossenschaften?', answer: 'Träger der gesetzlichen Unfallversicherung; erlassen Unfallverhütungsvorschriften und haben technische Aufsichtsdienste.' },

  // Duale Ausbildung & BBiG
  { id: 'lf1-f39', category: 'Ausbildung', question: 'Was bedeutet das duale Prinzip?', answer: 'Zwei voneinander unabhängige Lernorte: Berufsschule (Theorie) und Ausbildungsbetrieb (Praxis).' },
  { id: 'lf1-f40', category: 'Ausbildung', question: 'Wer erlässt den Rahmenlehrplan?', answer: 'Die KMK (Kultusministerkonferenz). Er gilt bundesweit, ggf. länderspezifisch konkretisiert.' },
  { id: 'lf1-f41', category: 'Ausbildung', question: 'Was steht in der Ausbildungsordnung?', answer: 'Berufsbezeichnung, Dauer, Ausbildungsberufsbild, Rahmenplan, Prüfungsanforderungen.' },
  { id: 'lf1-f42', category: 'Ausbildung', question: 'Was unterscheidet Ausbildender und Ausbilder?', answer: 'Ausbildender = das Unternehmen (Vertragspartner). Ausbilder = die Person, die unterweist.' },
  { id: 'lf1-f43', category: 'BBiG', question: 'Welche 9 Pflichtinhalte muss der Ausbildungsvertrag nach § 11 BBiG enthalten?', answer: 'Art/Gliederung/Ziel · Beginn/Dauer · Maßnahmen außerhalb · tägliche Ausbildungszeit · Probezeit · Vergütung · Urlaub · Kündigungsbedingungen · Hinweis auf Tarifverträge.' },
  { id: 'lf1-f44', category: 'BBiG', question: 'Wie lang darf die Probezeit nach § 22 BBiG sein?', answer: 'Mindestens 1 Monat, maximal 4 Monate.' },
  { id: 'lf1-f45', category: 'BBiG', question: 'Wie kann in der Probezeit gekündigt werden?', answer: 'Jederzeit, ohne Grund — aber zwingend schriftlich.' },
  { id: 'lf1-f46', category: 'BBiG', question: 'Wie kann nach der Probezeit gekündigt werden?', answer: 'Fristlos nur bei wichtigem Grund; der Auszubildende mit 4 Wochen Frist, wenn er die Ausbildung aufgibt oder den Beruf wechseln will. Schriftform zwingend.' },
  { id: 'lf1-f47', category: 'BBiG', question: 'Was regelt § 24 BBiG?', answer: 'Bei Weiterbeschäftigung nach Ablauf der Ausbildungszeit entsteht automatisch und ohne ausdrückliche Vereinbarung ein unbefristetes Arbeitsverhältnis.' },
  { id: 'lf1-f48', category: 'BBiG', question: 'Wann endet die Ausbildung regulär?', answer: 'Mit Ablauf der vereinbarten Zeit oder mit Bestehen der Abschlussprüfung (Tag der Bekanntgabe des Ergebnisses).' },
  { id: 'lf1-f49', category: 'BBiG', question: 'Welches Zeugnis bekommt der Auszubildende?', answer: 'Nach § 16 BBiG ein einfaches (Tätigkeit + Dauer) oder qualifiziertes Zeugnis (zusätzlich Leistung/Verhalten).' },
  { id: 'lf1-f50', category: 'BBiG', question: 'Wer stellt die Arbeitsmittel?', answer: 'Der Ausbildende — kostenlos. Pflegliche Behandlung ist Pflicht des Auszubildenden.' },

  // Schutzgesetze
  { id: 'lf1-f51', category: 'Schutzgesetze', question: 'Wie viele Stunden darf ein Jugendlicher max. pro Woche arbeiten?', answer: '40 Stunden / Woche, max. 8 Stunden / Tag (ausnahmsweise 8,5 h).' },
  { id: 'lf1-f52', category: 'Schutzgesetze', question: 'In welchem Zeitfenster dürfen Jugendliche arbeiten?', answer: 'Zwischen 6 und 20 Uhr, nur an 5 Tagen / Woche, nicht an Sa, So oder Feiertag.' },
  { id: 'lf1-f53', category: 'Schutzgesetze', question: 'Wie lang sind die Pausen nach JArbSchG?', answer: '30 min bei >4,5 bis 6 h Arbeit; 60 min bei >6 h. Mindestens 12 h Freizeit zwischen zwei Schichten.' },
  { id: 'lf1-f54', category: 'Schutzgesetze', question: 'Wie wird Berufsschulunterricht angerechnet (seit 2020)?', answer: 'Unterricht vor 9 Uhr → vorher keine Beschäftigung. Unterricht > 5 Stunden → Tag freistellen, 8 h auf Wochenarbeitszeit anrechnen. Gilt seit 2020 auch für >18-jährige Azubis.' },
  { id: 'lf1-f55', category: 'Schutzgesetze', question: 'Wie viele Urlaubstage stehen Jugendlichen nach JArbSchG zu?', answer: 'Mit noch nicht 16: 30 Werktage. Noch nicht 17: 27. Noch nicht 18: 25.' },
  { id: 'lf1-f56', category: 'Schutzgesetze', question: 'Was ist „Nachtzeit" nach ArbZG?', answer: 'Die Zeit zwischen 23 und 6 Uhr. Nachtarbeit = mehr als 2 h Arbeit in dieser Zeit.' },
  { id: 'lf1-f57', category: 'Schutzgesetze', question: 'Wie lang besteht Mutterschutz?', answer: '6 Wochen vor und 8 Wochen nach Geburt (12 Wochen bei Mehrlings- oder Frühgeburt).' },
  { id: 'lf1-f58', category: 'Schutzgesetze', question: 'Wie lang wird Lohn bei Krankheit weitergezahlt?', answer: '6 Wochen bei gleichem Krankheitsgrund (EntgFG).' },
  { id: 'lf1-f59', category: 'Schutzgesetze', question: 'Wie hoch ist der Mindesturlaub nach BUrlG?', answer: '24 Werktage bei 6-Tage-Woche.' },

  // Mitbestimmung & BR
  { id: 'lf1-f60', category: 'Mitbestimmung', question: 'Ab wann kann ein Betriebsrat gewählt werden?', answer: 'Ab 5 ständigen wahlberechtigten Arbeitnehmern, davon 3 wählbar.' },
  { id: 'lf1-f61', category: 'Mitbestimmung', question: 'Wann findet die regelmäßige BR-Wahl statt?', answer: 'Alle 4 Jahre, zwischen 1. März und 31. Mai (§ 13 BetrVG).' },
  { id: 'lf1-f62', category: 'Mitbestimmung', question: 'Wie groß ist der BR bei 80 Arbeitnehmern?', answer: '5 Mitglieder (§ 9 BetrVG: 51–100 AN → 5).' },
  { id: 'lf1-f63', category: 'Mitbestimmung', question: 'Welche 4 Aufgabenbereiche hat der BR?', answer: 'Allgemeine Aufgaben, soziale Angelegenheiten, personelle Angelegenheiten, wirtschaftliche Angelegenheiten.' },
  { id: 'lf1-f64', category: 'Mitbestimmung', question: 'Welche 3 Beteiligungsrechte hat der BR?', answer: 'Mitbestimmungsrechte (sozial, stärkstes), Mitwirkungsrechte (personell, Widerspruch), Informations-/Beratungsrechte (wirtschaftlich, schwächstes).' },
  { id: 'lf1-f65', category: 'Mitbestimmung', question: 'Was regelt § 102 BetrVG?', answer: 'Der BR muss vor jeder Kündigung angehört werden — sonst ist die Kündigung unwirksam.' },
  { id: 'lf1-f66', category: 'Mitbestimmung', question: 'Was ist eine Einigungsstelle?', answer: 'Ein Schlichtungsorgan zwischen Arbeitgeber und Betriebsrat bei Konflikten (§ 76 BetrVG).' },
  { id: 'lf1-f67', category: 'Mitbestimmung', question: 'Wie oft tagt die Betriebsversammlung?', answer: 'Mindestens vierteljährlich. Der Arbeitgeber wird eingeladen und berichtet einmal jährlich.' },

  // Sozialversicherung
  { id: 'lf1-f68', category: 'Sozialversicherung', question: 'Welche 5 Zweige hat die gesetzliche Sozialversicherung?', answer: 'Krankenversicherung, Unfallversicherung, Rentenversicherung, Arbeitslosenversicherung, Pflegeversicherung.' },
  { id: 'lf1-f69', category: 'Sozialversicherung', question: 'Welcher SV-Zweig wird allein vom Arbeitgeber finanziert?', answer: 'Die Unfallversicherung (alle anderen paritätisch).' },
  { id: 'lf1-f70', category: 'Sozialversicherung', question: 'Wie hoch ist der KV-Beitrag (Stand Buch)?', answer: '14,6 % + kassenindividueller Zusatzbeitrag (0–1,5 %), paritätisch.' },
  { id: 'lf1-f71', category: 'Sozialversicherung', question: 'Wie hoch ist der RV-Beitrag?', answer: '18,6 %, paritätisch.' },
  { id: 'lf1-f72', category: 'Sozialversicherung', question: 'Wie hoch ist der AV-Beitrag?', answer: '2,5 %, paritätisch.' },
  { id: 'lf1-f73', category: 'Sozialversicherung', question: 'Wie hoch ist der PV-Beitrag?', answer: '3,05 %; Kinderlose ab 23 zusätzlich +0,25 %.' },
  { id: 'lf1-f74', category: 'Sozialversicherung', question: 'Was ist das Solidaritätsprinzip?', answer: 'Leistung wird nach Bedürftigkeit gewährt, nicht nach Beitragshöhe.' },
  { id: 'lf1-f75', category: 'Sozialversicherung', question: 'Was ist das Äquivalenzprinzip?', answer: 'Leistung richtet sich nach gezahltem Beitrag — gilt v. a. in der Rentenversicherung.' },
  { id: 'lf1-f76', category: 'Sozialversicherung', question: 'Was ist die Beitragsbemessungsgrenze (BBG)?', answer: 'Der Grenzbetrag, bis zu dem Sozialbeiträge erhoben werden.' },
  { id: 'lf1-f77', category: 'Sozialversicherung', question: 'Was ist die Versicherungspflichtgrenze?', answer: 'Das Einkommen, bis zu dem Pflichtmitgliedschaft in der gesetzlichen KV/PV besteht. Darüber kann man austreten.' },

  // Arbeitsplatz
  { id: 'lf1-f78', category: 'Arbeitsplatz', question: 'Was ist Ergonomie laut Buch?', answer: 'Ergonomie beschäftigt sich mit den Arbeitsbedingungen und der Arbeitsplatzausstattung sowie deren Anpassung an die Bedürfnisse des Menschen.' },
  { id: 'lf1-f79', category: 'Arbeitsplatz', question: 'Welche drei Raumformen kennt das Buch?', answer: 'Einzelbüro, Gruppen-/Teambüro (4–12 Personen), Großraumbüro.' },
  { id: 'lf1-f80', category: 'Arbeitsplatz', question: 'Wie viel Fläche pro Arbeitsplatz?', answer: '12–15 m² pro Arbeitsplatz, Bewegungsfläche mindestens 1,5 m².' },
  { id: 'lf1-f81', category: 'Arbeitsplatz', question: 'Wo liegt die Callcenter-Lärmgrenze in Sone?', answer: '2 sone sollten nicht überschritten werden.' },
  { id: 'lf1-f82', category: 'Arbeitsplatz', question: 'Was ist der Unterschied zwischen Sone und Dezibel?', answer: 'Sone = subjektives Geräuschempfinden (linear: 2 sone = doppelt so laut wie 1 sone). Dezibel = Schalldruck (logarithmisch).' },
  { id: 'lf1-f83', category: 'Arbeitsplatz', question: 'Wie hoch muss die Beleuchtung am Büroarbeitsplatz sein?', answer: 'Mindestens 500 Lux.' },
  { id: 'lf1-f84', category: 'Arbeitsplatz', question: 'Welche Lufttemperatur ist empfohlen?', answer: '20–23 °C bei 50–60 % Luftfeuchtigkeit. Ab 26 °C sinkt die Leistung.' },

  // Information & Zeit/Lerntechniken
  { id: 'lf1-f85', category: 'Information & Lernen', question: 'Welche vier Informationsarten unterscheidet das Buch?', answer: 'Fachlich, organisatorisch, sensibel, Soft Facts.' },
  { id: 'lf1-f86', category: 'Information & Lernen', question: 'Welche 5 Informationskanäle nennt das Buch?', answer: 'Intranet, E-Mail, Meeting, Einzelgespräch, Protokoll.' },
  { id: 'lf1-f87', category: 'Information & Lernen', question: 'Was unterscheidet Verlaufs- und Ergebnisprotokoll?', answer: 'Verlaufsprotokoll dokumentiert den Verlauf (Beiträge, Diskussion, Abstimmung). Ergebnisprotokoll enthält nur Ergebnisse und Beschlüsse.' },
  { id: 'lf1-f88', category: 'Information & Lernen', question: 'Welche 4 Felder hat das Eisenhower-Prinzip?', answer: 'A wichtig + dringend (sofort) · B wichtig, nicht dringend (terminieren) · C dringend, nicht wichtig (delegieren) · D weder noch (Papierkorb).' },
  { id: 'lf1-f89', category: 'Information & Lernen', question: 'Was steht im ALPEN-Akronym?', answer: 'Aufgaben notieren · Länge schätzen · Pufferzeiten (60/40-Regel) · Entscheidungen treffen · Nachkontrolle.' },
  { id: 'lf1-f90', category: 'Information & Lernen', question: 'Was besagt das Pareto-Prinzip?', answer: '20 % der Aufgaben bringen 80 % des Erfolgs.' },
  { id: 'lf1-f91', category: 'Information & Lernen', question: 'Welche 4 Lerntypen unterscheidet das Buch?', answer: 'Visuell, auditiv, kommunikativ, motorisch — meist als Mischformen.' },
  // --- Supplement: VUCA ---
  { id: 'lf1-s-f1', category: 'VUCA', question: 'Wofür steht das Akronym VUCA?', answer: 'Volatility (Volatilität), Uncertainty (Unsicherheit), Complexity (Komplexität), Ambiguity (Ambiguität/Mehrdeutigkeit).' },
  { id: 'lf1-s-f2', category: 'VUCA', question: 'Was bedeutet das V in VUCA und gib ein Beispiel.', answer: 'Volatility = Volatilität: schnelle, starke und unvorhersehbare Veränderungen. Beispiel: schwankendes Anrufvolumen im Callcenter.' },
  { id: 'lf1-s-f3', category: 'VUCA', question: 'Was bedeutet das U in VUCA?', answer: 'Uncertainty = Unsicherheit: die Zukunft ist schwer vorhersehbar. Beispiel: Auswirkungen neuer Technologien wie KI und Chatbots.' },
  { id: 'lf1-s-f4', category: 'VUCA', question: 'Was bedeutet das C in VUCA?', answer: 'Complexity = Komplexität: viele miteinander vernetzte Einflussfaktoren. Beispiel: Omnichannel-Service mit vielen verbundenen Kanälen.' },
  { id: 'lf1-s-f5', category: 'VUCA', question: 'Was bedeutet das A in VUCA?', answer: 'Ambiguity = Ambiguität/Mehrdeutigkeit: Situationen können unterschiedlich interpretiert werden. Beispiel: widersprüchliche Kundenfeedbacks.' },
  { id: 'lf1-s-f6', category: 'VUCA', question: 'Wie reagieren Unternehmen auf eine VUCA-Welt?', answer: 'Mit Agilität (schnelle Anpassung), flexiblen/flachen Strukturen, kontinuierlicher Weiterbildung und datenbasierten Entscheidungen.' },
  { id: 'lf1-s-f7', category: 'VUCA', question: 'Was ist das Gegenmodell VUCA 2.0?', answer: 'Vision (statt Volatilität), Understanding (statt Unsicherheit), Clarity (statt Komplexität), Agility (statt Ambiguität).' },
  // --- Supplement: Entscheidungsarten ---
  { id: 'lf1-s-f8', category: 'Entscheidungsarten', question: 'Welche Entscheidungsarten unterscheidet man nach der Tragweite?', answer: 'Strategische Entscheidungen (langfristig, grundlegend) und operative Entscheidungen (kurzfristig, Tagesgeschäft).' },
  { id: 'lf1-s-f9', category: 'Entscheidungsarten', question: 'Was ist der Unterschied zwischen programmierten und nicht-programmierten Entscheidungen?', answer: 'Programmiert = wiederkehrend, nach festen Regeln lösbar (Routine). Nicht-programmiert = neuartig, individuell zu beurteilen (einmalig).' },
  { id: 'lf1-s-f10', category: 'Entscheidungsarten', question: 'Wie unterscheidet man Entscheidungen nach Sicherheit?', answer: 'Entscheidung unter Sicherheit (alle Faktoren bekannt), unter Risiko (Wahrscheinlichkeiten bekannt), unter Unsicherheit (Wahrscheinlichkeiten unbekannt).' },
  { id: 'lf1-s-f11', category: 'Entscheidungsarten', question: 'Was ist der Unterschied zwischen Einzel- und Gruppenentscheidung?', answer: 'Einzelentscheidung: eine Person entscheidet (schnell, klar). Gruppenentscheidung: mehrere entscheiden gemeinsam (breitere Basis, aber langsamer).' },
  // --- Supplement: Messbare Ziele ---
  { id: 'lf1-s-f12', category: 'Unternehmensziele', question: 'Wie formuliert man ein messbares Ziel? Gib ein Beispiel.', answer: 'Ein messbares Ziel enthält eine konkrete Kennzahl + Zeitrahmen. Beispiel: „Den Marktanteil bis Ende 2025 von 10 % auf 12 % steigern." (nicht: „den Marktanteil erhöhen").' },
  { id: 'lf1-s-f13', category: 'Unternehmensziele', question: 'Warum sind messbare Ziele wichtig?', answer: 'Nur messbare Ziele lassen sich kontrollieren (Soll-Ist-Vergleich). Ohne Messbarkeit kann der Zielerreichungsgrad nicht festgestellt werden.' },
  { id: 'lf1-s-f14', category: 'Unternehmensziele', question: 'Was macht ein Ziel nach der SMART-Regel „messbar"?', answer: 'Es enthält eine quantifizierbare Größe (Zahl, Prozent, Menge), an der die Zielerreichung objektiv überprüft werden kann.' },
  // --- Supplement: Entscheidungsmethoden Vor-/Nachteile ---
  { id: 'lf1-s-f15', category: 'Entscheidungsmethoden', question: 'Was ist der Vorteil und Nachteil der CAF-Methode?', answer: 'Vorteil: vollständige Faktensammlung, nichts wird übersehen. Nachteil: liefert noch keine Entscheidung, kann unübersichtlich werden.' },
  { id: 'lf1-s-f16', category: 'Entscheidungsmethoden', question: 'Was ist der Vorteil und Nachteil der intuitiven Entscheidung?', answer: 'Vorteil: sehr schnell, nutzt Erfahrung. Nachteil: subjektiv, nicht nachvollziehbar, ungeeignet für strategische Entscheidungen.' },
  { id: 'lf1-s-f17', category: 'Entscheidungsmethoden', question: 'Was ist der Vorteil und Nachteil der bewerteten Entscheidungsmatrix?', answer: 'Vorteil: präzisestes Ergebnis durch Gewichtung der Kriterien. Nachteil: zeitaufwendig, Gewichtung selbst kann subjektiv sein.' },
  { id: 'lf1-s-f18', category: 'Entscheidungsmethoden', question: 'Was ist der Vorteil und Nachteil des gewichteten PMI?', answer: 'Vorteil: liefert ein rechnerisches Ergebnis durch Punktevergabe. Nachteil: Punktevergabe bleibt subjektiv, keine Kriteriengewichtung.' },
  // --- Supplement: CI / Kultur / Image Abgrenzung ---
  { id: 'lf1-s-f19', category: 'Unternehmenskultur', question: 'Grenze Corporate Identity, Unternehmenskultur und Unternehmensimage voneinander ab.', answer: 'CI = bewusst gestaltetes Gesamtbild (Design, Kommunikation, Verhalten). Unternehmenskultur = gelebte Werte und Normen INTERN. Image = Wahrnehmung durch Außenstehende EXTERN.' },
  { id: 'lf1-s-f20', category: 'Unternehmenskultur', question: 'Was ist die Aufgabe der Corporate Identity?', answer: 'Ein einheitliches, unverwechselbares Erscheinungsbild zu schaffen, das das Unternehmen nach innen (Identifikation) und außen (Wiedererkennung, Vertrauen) klar positioniert.' },
  { id: 'lf1-s-f21', category: 'Unternehmenskultur', question: 'Was ist der Unterschied zwischen Unternehmenskultur und Unternehmensimage?', answer: 'Unternehmenskultur ist die INTERNE gelebte Realität (Werte, Normen). Image ist das EXTERNE Fremdbild (wie das Unternehmen von außen wahrgenommen wird).' },
  { id: 'lf1-s-f22', category: 'Unternehmenskultur', question: 'Ordne dem Corporate Design eine konkrete Maßnahme zu.', answer: 'Einheitliches Logo auf allen Geschäftspapieren, definierte Hausfarben, einheitliches Webdesign, Akustik-Logo (Jingle).' },
  { id: 'lf1-s-f23', category: 'Unternehmenskultur', question: 'Ordne dem Corporate Behavior eine konkrete Maßnahme zu.', answer: 'Verbindlicher Verhaltenskodex für den Kundenkontakt, Styleguide für die Gesprächsführung, einheitliche Begrüßungsformeln.' },
  // --- Supplement: Organigramm ---
  { id: 'lf1-s-f24', category: 'Organisation', question: 'Was zeigt ein Organigramm?', answer: 'Die grafische Darstellung der Aufbauorganisation: Stellen, Abteilungen, Weisungsbefugnisse und Hierarchieebenen.' },
  { id: 'lf1-s-f25', category: 'Organisation', question: 'Nenne 3 Funktionen eines Organigramms.', answer: 'Überblick über die Struktur, Sichtbarmachung der Weisungsbefugnisse, Abgrenzung von Verantwortungsbereichen, Erleichterung des Onboardings.' },
  { id: 'lf1-s-f26', category: 'Organisation', question: 'Nenne 2 Vorteile und 2 Nachteile eines Organigramms.', answer: 'Vorteile: klare Übersicht, erkennbare Weisungswege. Nachteile: statisch (schnell veraltet), zeigt keine Prozesse/Abläufe und keine informellen Beziehungen.' },
  { id: 'lf1-s-f27', category: 'Organisation', question: 'Welche Darstellungsformen eines Organigramms gibt es?', answer: 'Vertikal (Top-Down, Leitung oben), horizontal (Leitung links) und kreisförmig (Leitung im Zentrum).' },
  // --- Supplement: Aufbau- vs. Ablauforganisation ---
  { id: 'lf1-s-f28', category: 'Organisation', question: 'Was ist der Kernunterschied zwischen Aufbau- und Ablauforganisation?', answer: 'Aufbauorganisation = WER macht WAS (Struktur, im Organigramm). Ablauforganisation = WIE und WANN wird gearbeitet (Prozesse, im Flussdiagramm).' },
  { id: 'lf1-s-f29', category: 'Organisation', question: 'Womit wird die Ablauforganisation grafisch dargestellt?', answer: 'Mit einem Flussdiagramm oder Ablaufplan — nicht mit einem Organigramm (das zeigt die Aufbauorganisation).' },
  { id: 'lf1-s-f30', category: 'Organisation', question: 'Gib je ein DM-Beispiel für Aufbau- und Ablauforganisation.', answer: 'Aufbau: „Teamleiter führt 15 Agents." Ablauf: „Eingehender Anruf → IVR-Vorqualifizierung → Agent → Nacharbeit (ACW)."' },
];

export const lf1QuizQuestions: QuizQuestion[] = [
  // Hotspot 1: § 11 BBiG
  {
    id: 'lf1-q1',
    category: 'BBiG',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Welcher Inhalt gehört NICHT zu den Pflichtinhalten des Ausbildungsvertrags nach § 11 BBiG?',
    options: [
      'Beginn und Dauer der Berufsausbildung',
      'Dauer der Probezeit',
      'Vergütungshöhe',
      'Lieblingsfach in der Berufsschule',
    ],
    correctAnswer: 'Lieblingsfach in der Berufsschule',
    explanation: '§ 11 BBiG listet 9 Pflichtinhalte (Art, Beginn/Dauer, externe Maßnahmen, tägliche Zeit, Probezeit, Vergütung, Urlaub, Kündigungsbedingungen, Tarifhinweis). Lieblingsfach gehört nicht dazu.',
  },
  {
    id: 'lf1-q2',
    category: 'BBiG',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Wie lang darf eine Probezeit nach § 22 BBiG sein?',
    options: ['1–3 Monate', '1–4 Monate', '2–6 Monate', '6 Monate fix'],
    correctAnswer: '1–4 Monate',
    explanation: '§ 22 BBiG: Probezeit mind. 1 Monat, max. 4 Monate. In dieser Zeit Kündigung jederzeit ohne Grund.',
  },
  {
    id: 'lf1-q3',
    category: 'BBiG',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Der Ausbildungsbetrieb beschäftigt den Azubi nach bestandener Prüfung einfach weiter, ohne neuen Vertrag. Was passiert rechtlich?',
    options: [
      'Es entsteht automatisch ein unbefristetes Arbeitsverhältnis',
      'Es entsteht ein befristeter Vertrag von 1 Jahr',
      'Die Beschäftigung ist unwirksam ohne neuen Vertrag',
      'Es muss ein neuer Vertrag rückwirkend geschlossen werden',
    ],
    correctAnswer: 'Es entsteht automatisch ein unbefristetes Arbeitsverhältnis',
    explanation: '§ 24 BBiG: Bei Weiterbeschäftigung nach Ende der Ausbildung entsteht automatisch und OHNE ausdrückliche Vereinbarung ein unbefristetes Arbeitsverhältnis.',
  },
  {
    id: 'lf1-q4',
    category: 'BBiG',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Welche Frist gilt für die Kündigung des Auszubildenden NACH der Probezeit, wenn er den Beruf wechseln will?',
    options: ['Sofort', '2 Wochen', '4 Wochen', '3 Monate'],
    correctAnswer: '4 Wochen',
    explanation: 'Nach Probezeit kann der Azubi mit 4 Wochen Frist kündigen, wenn er die Ausbildung aufgibt oder einen anderen Beruf einschlagen will. Schriftform zwingend.',
  },
  {
    id: 'lf1-q5',
    category: 'BBiG',
    type: 'open',
    difficulty: 'hard',
    question: 'Nenne alle 9 Pflichtinhalte des Ausbildungsvertrags nach § 11 BBiG in richtiger Reihenfolge.',
    correctAnswer: '1) Art, sachliche und zeitliche Gliederung sowie Ziel der Berufsausbildung · 2) Beginn und Dauer · 3) Maßnahmen außerhalb der Ausbildungsstätte · 4) Dauer der regelmäßigen täglichen Ausbildungszeit · 5) Dauer der Probezeit · 6) Zahlung und Höhe der Vergütung · 7) Dauer des Urlaubs · 8) Kündigungsbedingungen · 9) Hinweis auf anwendbare Tarifverträge / Betriebsvereinbarungen.',
    explanation: 'Eselsbrücke: „Art-Beginn-Außen-Tag-Probe-Geld-Urlaub-Kündigung-Tarif."',
  },

  // Kaufmannstypen
  {
    id: 'lf1-q6',
    category: 'Recht',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Bei welcher Kaufmannsart ist die Eintragung ins Handelsregister deklaratorisch?',
    options: ['Istkaufmann', 'Kannkaufmann', 'Formkaufmann', 'Bei allen drei'],
    correctAnswer: 'Istkaufmann',
    explanation: 'Beim Istkaufmann bezeugt die Eintragung nur eine bestehende Eigenschaft (deklaratorisch). Bei Kann- und Formkaufmann ist sie konstitutiv.',
  },
  {
    id: 'lf1-q7',
    category: 'Recht',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Welche Aussage zum Mindeststammkapital einer GmbH ist korrekt?',
    options: ['10.000 €', '25.000 €', '50.000 €', '100.000 €'],
    correctAnswer: '25.000 €',
    explanation: 'GmbH-Gesetz: Mindeststammkapital 25.000 €, Stammeinlage je Gesellschafter min. 1 €.',
  },
  {
    id: 'lf1-q8',
    category: 'Recht',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Wie haftet der Komplementär einer KG?',
    options: [
      'Nur mit seiner Einlage',
      'Unbeschränkt, persönlich, gesamtschuldnerisch und direkt',
      'Nur mittelbar über die Gesellschaft',
      'Garnicht — Geschäftsführung übernimmt Haftung',
    ],
    correctAnswer: 'Unbeschränkt, persönlich, gesamtschuldnerisch und direkt',
    explanation: 'Der Komplementär haftet voll: unbeschränkt (auch mit Privatvermögen), persönlich, gesamtschuldnerisch (jeder für alle), direkt gegenüber jedem Gläubiger.',
  },
  {
    id: 'lf1-q9',
    category: 'Recht',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Welche der folgenden Firmenarten beschreibt einen sachlichen Bezug?',
    options: ['Personenfirma', 'Sachfirma', 'Fantasiefirma', 'Mischfirma'],
    correctAnswer: 'Sachfirma',
    explanation: 'Sachfirma beschreibt das Tätigkeitsfeld (z. B. Straßenbau AG). Personenfirma = Gesellschafternamen, Fantasiefirma = erdacht, Mischfirma = Kombination.',
  },
  {
    id: 'lf1-q10',
    category: 'Recht',
    type: 'matching',
    difficulty: 'hard',
    question: 'Ordne den Firmennamen den 4 Firmenarten zu: a) Dialogfix GmbH · b) Schmidt & Meyer KG · c) Westermann Verlag GmbH & Co. KG · d) Straßenbau AG',
    correctAnswer: 'a → Fantasiefirma · b → Personenfirma · c → Mischfirma · d → Sachfirma',
    explanation: 'Fantasiefirma erdacht, Personenfirma nutzt Namen, Sachfirma beschreibt Tätigkeit, Mischfirma kombiniert mehrere.',
  },

  // Führung
  {
    id: 'lf1-q11',
    category: 'Führung',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Welcher Führungsstil setzt auf bedingungslosen Gehorsam und Strafe bei Fehlern?',
    options: ['Autoritär', 'Kooperativ', 'Laissez-faire', 'Situativ'],
    correctAnswer: 'Autoritär',
    explanation: 'Autoritär: Entscheidung ohne MA, klare Anweisungen, Fehler → Strafe. Schnell, aber demotivierend.',
  },
  {
    id: 'lf1-q12',
    category: 'Führung',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Im Outbound-Projekt müssen alle MA täglich 90 % Erreichbarkeit und 20 % Abschluss schaffen. Die Zahlen werden im Intranet veröffentlicht. Welche Technik liegt vor?',
    options: ['Management by objectives', 'Management by results', 'Management by exception', 'Management by delegation'],
    correctAnswer: 'Management by results',
    explanation: 'Vorgegebene Kennzahlen + Soll-Ist-Vergleich = by results (autoritärer als by objectives, weil die Ziele nicht gemeinsam vereinbart, sondern vorgegeben werden).',
  },
  {
    id: 'lf1-q13',
    category: 'Führung',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Ein MA darf Gutschriften bis 20 € selbst entscheiden; alles darüber muss der Teamleiter freigeben. Welche Technik?',
    options: ['by objectives', 'by results', 'by exception', 'by delegation'],
    correctAnswer: 'by exception',
    explanation: 'Routine selbst, Chef nur bei Ausnahme = Ausnahmeprinzip.',
  },
  {
    id: 'lf1-q14',
    category: 'Führung',
    type: 'open',
    difficulty: 'medium',
    question: 'Wofür stehen die fünf Buchstaben der SMART-Regel?',
    correctAnswer: 'Spezifisch · Messbar · Aktiv beeinflussbar · Realistisch · Terminiert.',
    explanation: 'Anwendung v. a. bei Management by objectives. Die Reihenfolge ist die Buch-Reihenfolge.',
  },

  // Organisation
  {
    id: 'lf1-q15',
    category: 'Organisation',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Welches Leitungssystem hat als Prinzip „Einheitlichkeit der Auftragserteilung"?',
    options: ['Einlinie', 'Stablinie', 'Sparten', 'Mehrlinie'],
    correctAnswer: 'Einlinie',
    explanation: 'In der Einlinienorganisation erhält jede Stelle Anweisungen nur von einer übergeordneten Instanz.',
  },
  {
    id: 'lf1-q16',
    category: 'Organisation',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Welche Aussage zur Stabsstelle stimmt?',
    options: [
      'Stabsstellen sind die obersten Entscheidungsträger',
      'Stabsstellen haben meist keine oder nur fachliche Weisungsbefugnis',
      'Stabsstellen ersetzen die Linieninstanzen',
      'Stabsstellen sind nur in kleinen Betrieben sinnvoll',
    ],
    correctAnswer: 'Stabsstellen haben meist keine oder nur fachliche Weisungsbefugnis',
    explanation: 'Stabsstellen sind Querschnittsfunktionen (QM, Öffentlichkeit), die Linieninstanzen mit Spezialwissen unterstützen — meist ohne disziplinarische Weisung.',
  },

  // JArbSchG
  {
    id: 'lf1-q17',
    category: 'Schutzgesetze',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Wie viele Werktage Urlaub stehen einem Auszubildenden zu, der zu Jahresbeginn noch nicht 17 Jahre alt ist?',
    options: ['25', '27', '30', '24'],
    correctAnswer: '27',
    explanation: 'JArbSchG-Urlaubsstaffel: noch nicht 16 → 30 / noch nicht 17 → 27 / noch nicht 18 → 25.',
  },
  {
    id: 'lf1-q18',
    category: 'Schutzgesetze',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'In welchem Zeitfenster dürfen Jugendliche nach JArbSchG arbeiten?',
    options: ['7–19 Uhr', '6–20 Uhr', '8–18 Uhr', 'Wie Erwachsene'],
    correctAnswer: '6–20 Uhr',
    explanation: 'JArbSchG: Arbeit nur zwischen 6 und 20 Uhr, an 5 Tagen/Woche, nicht Sa/So/Feiertag.',
  },
  {
    id: 'lf1-q19',
    category: 'Schutzgesetze',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Wie ist ein Berufsschultag mit 6 Unterrichtsstunden bei einem 19-jährigen Azubi anzurechnen?',
    options: [
      'Nur mit der tatsächlichen Schulzeit',
      'Mit 8 Stunden auf die Wochenarbeitszeit, Tag wird freigestellt',
      'Garnicht — > 18 ist ausgenommen',
      'Mit 4 Stunden plus Vorbereitungszeit',
    ],
    correctAnswer: 'Mit 8 Stunden auf die Wochenarbeitszeit, Tag wird freigestellt',
    explanation: 'Seit 2020 gilt JArbSchG-Regel auch für >18-jährige Azubis: > 5 Stunden Schule = Freistellung + 8 h Anrechnung.',
  },
  {
    id: 'lf1-q20',
    category: 'Schutzgesetze',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Wie lang muss eine Pause sein, damit sie nach JArbSchG als „echte" Pause zählt?',
    options: ['Mindestens 5 min', 'Mindestens 10 min', 'Mindestens 15 min', 'Mindestens 30 min'],
    correctAnswer: 'Mindestens 15 min',
    explanation: 'Eine Pause zählt nur dann als Unterbrechung, wenn sie mindestens 15 min am Stück dauert.',
  },

  // Mitbestimmung
  {
    id: 'lf1-q21',
    category: 'Mitbestimmung',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Welche Anzahl an wahlberechtigten AN reicht für einen Betriebsrat?',
    options: ['Ab 3', 'Ab 5 (davon 3 wählbar)', 'Ab 10', 'Ab 20'],
    correctAnswer: 'Ab 5 (davon 3 wählbar)',
    explanation: 'BetrVG: BR ab 5 ständigen wahlberechtigten AN, davon 3 wählbar.',
  },
  {
    id: 'lf1-q22',
    category: 'Mitbestimmung',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Der Arbeitgeber kündigt einem Mitarbeiter, ohne den Betriebsrat anzuhören. Was passiert?',
    options: [
      'Die Kündigung ist gültig, der BR kann nur protestieren',
      'Die Kündigung ist unwirksam',
      'Der BR muss innerhalb von 2 Wochen widersprechen',
      'Es passiert nichts, solange kein wichtiger Grund vorlag',
    ],
    correctAnswer: 'Die Kündigung ist unwirksam',
    explanation: '§ 102 BetrVG: Eine Kündigung ohne vorherige Anhörung des BR ist unwirksam.',
  },
  {
    id: 'lf1-q23',
    category: 'Mitbestimmung',
    type: 'matching',
    difficulty: 'hard',
    question: 'Ordne den Bereichen die richtige Beteiligungsstärke zu: a) Arbeitszeit / Pausen / Monitoring · b) Einstellungen / Versetzungen · c) Investitionen / Personalplanung',
    correctAnswer: 'a → Mitbestimmungsrechte (sozial) · b → Mitwirkungsrechte (personell) · c → Informations-/Beratungsrechte (wirtschaftlich)',
    explanation: 'Drei Stufen: Mitbestimmung (stärkstes, ohne Zustimmung keine Wirksamkeit) → Mitwirkung (Anhörung, ggf. Widerspruch) → Information (schwächstes).',
  },

  // Sozialversicherung
  {
    id: 'lf1-q24',
    category: 'Sozialversicherung',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Welcher Zweig der Sozialversicherung wird allein vom Arbeitgeber finanziert?',
    options: ['Krankenversicherung', 'Rentenversicherung', 'Unfallversicherung', 'Pflegeversicherung'],
    correctAnswer: 'Unfallversicherung',
    explanation: 'Die Unfallversicherung wird allein vom Arbeitgeber finanziert; alle anderen vier Zweige paritätisch.',
  },
  {
    id: 'lf1-q25',
    category: 'Sozialversicherung',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Was bedeutet das Solidaritätsprinzip?',
    options: [
      'Jeder erhält Leistung nach seiner Beitragshöhe',
      'Leistung wird nach Bedürftigkeit gewährt, nicht nach Beitrag',
      'Nur Mitglieder mit Gegenleistung erhalten Leistung',
      'Nur Bedürftige zahlen Beiträge',
    ],
    correctAnswer: 'Leistung wird nach Bedürftigkeit gewährt, nicht nach Beitrag',
    explanation: 'Solidaritätsprinzip = Beitrag nach Einkommen, Leistung nach Bedarf. Im Gegensatz: Äquivalenzprinzip (Leistung nach Beitrag).',
  },
  {
    id: 'lf1-q26',
    category: 'Sozialversicherung',
    type: 'open',
    difficulty: 'medium',
    question: 'Nenne die 5 Zweige der gesetzlichen Sozialversicherung in der historischen Reihenfolge ihrer Einführung.',
    correctAnswer: 'Krankenversicherung (1883) · Unfallversicherung (1884) · Rentenversicherung (1889) · Arbeitslosenversicherung (1927) · Pflegeversicherung (1995).',
    explanation: 'KV vor UV vor RV vor AV vor PV — Bismarck-Sozialgesetze + AV in der Weimarer Republik + PV unter Kohl.',
  },

  // Arbeitsplatz
  {
    id: 'lf1-q27',
    category: 'Arbeitsplatz',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Wo liegt die empfohlene Lärmgrenze für einen Callcenter-Arbeitsplatz?',
    options: ['1 sone', '2 sone', '4 sone', '8 sone'],
    correctAnswer: '2 sone',
    explanation: 'Im Callcenter sollten 2 sone (entspricht etwa normaler Unterhaltung) nicht überschritten werden.',
  },
  {
    id: 'lf1-q28',
    category: 'Arbeitsplatz',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Ist Sone dasselbe wie Dezibel?',
    options: [
      'Ja, beide messen Lautstärke',
      'Nein — Sone subjektiv (linear), Dezibel physikalisch (logarithmisch)',
      'Sone ist die alte, Dezibel die neue Einheit',
      'Sone gibt Frequenz an, Dezibel die Lautstärke',
    ],
    correctAnswer: 'Nein — Sone subjektiv (linear), Dezibel physikalisch (logarithmisch)',
    explanation: 'Sone = subjektives Empfinden (2 sone fühlt sich doppelt so laut an wie 1 sone). Dezibel = Schalldruck, logarithmisch.',
  },
  {
    id: 'lf1-q29',
    category: 'Arbeitsplatz',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Welche Mindestbeleuchtung gilt am Büroarbeitsplatz?',
    options: ['200 Lux', '300 Lux', '500 Lux', '1000 Lux'],
    correctAnswer: '500 Lux',
    explanation: '500 Lux am Büroarbeitsplatz; Rechtshänder Licht von links.',
  },

  // Zeit & Lernen
  {
    id: 'lf1-q30',
    category: 'Lerntechniken',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Was steht im A des ALPEN-Akronyms?',
    options: ['Aufgaben notieren', 'Auswertung', 'Aktivität', 'Ablauf'],
    correctAnswer: 'Aufgaben notieren',
    explanation: 'ALPEN = Aufgaben · Länge · Puffer (60/40) · Entscheidungen · Nachkontrolle.',
  },
  {
    id: 'lf1-q31',
    category: 'Lerntechniken',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Eine Aufgabe ist „dringend, aber nicht wichtig". Wie behandelt sie das Eisenhower-Prinzip?',
    options: ['Sofort erledigen', 'Terminieren', 'Delegieren', 'In den Papierkorb'],
    correctAnswer: 'Delegieren',
    explanation: 'Eisenhower C-Feld = dringend, nicht wichtig → delegieren. A = beides → sofort. B = nicht dringend → terminieren. D = weder → Papierkorb.',
  },
  {
    id: 'lf1-q32',
    category: 'Lerntechniken',
    type: 'open',
    difficulty: 'easy',
    question: 'Welche vier Lerntypen unterscheidet das Buch?',
    correctAnswer: 'Visuell · auditiv · kommunikativ · motorisch.',
    explanation: 'In der Regel Mischformen; mehrere Sinneskanäle ansprechen für maximalen Lernerfolg.',
  },

  // Mehr Verwechslungsfallen
  {
    id: 'lf1-q33',
    category: 'Begriffe',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Wie unterscheiden sich „Firma" und „Unternehmen"?',
    options: [
      'Synonyme — beides bezeichnet die Geschäftstätigkeit',
      'Firma = Name, Unternehmen = Organisation',
      'Firma = Kapitalgesellschaft, Unternehmen = Personengesellschaft',
      'Firma = eingetragen, Unternehmen = nicht eingetragen',
    ],
    correctAnswer: 'Firma = Name, Unternehmen = Organisation',
    explanation: '„Firma" ist nach § 17 HGB der Name, unter dem ein Kaufmann Geschäfte betreibt. „Unternehmen" ist die wirtschaftliche Organisation.',
  },
  {
    id: 'lf1-q34',
    category: 'Begriffe',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Wer ist der „Ausbildende"?',
    options: [
      'Die Person, die unterweist',
      'Das Unternehmen (Vertragspartner)',
      'Der Auszubildende selbst',
      'Der IHK-Prüfer',
    ],
    correctAnswer: 'Das Unternehmen (Vertragspartner)',
    explanation: 'Ausbildender = Unternehmen. Ausbilder = die Person, die unterweist. Auszubildender = Lehrling.',
  },

  // Kultur / CI
  {
    id: 'lf1-q35',
    category: 'Kultur & CI',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Zu welchem CI-Bereich gehört das Logo?',
    options: ['Corporate Design', 'Corporate Communication', 'Corporate Image', 'Corporate Behavior'],
    correctAnswer: 'Corporate Design',
    explanation: 'Corporate Design = sichtbare Identität (Logo, Geschäftspapier, Web, Akustik).',
  },
  {
    id: 'lf1-q36',
    category: 'Kultur & CI',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Wie nennt man die explizite Ausformulierung von Unternehmenskultur, Identität und Zielen?',
    options: ['Corporate Image', 'Unternehmensleitbild (Mission Statement)', 'Organigramm', 'Corporate Design'],
    correctAnswer: 'Unternehmensleitbild (Mission Statement)',
    explanation: 'Das Unternehmensleitbild wirkt nach innen (Integration) und nach außen (Orientierung).',
  },

  // Externe
  {
    id: 'lf1-q37',
    category: 'Institutionen',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Welche Institution ist die „zuständige Stelle" nach BBiG?',
    options: ['Arbeitsamt', 'IHK', 'Berufsgenossenschaft', 'ver.di'],
    correctAnswer: 'IHK',
    explanation: 'Die IHK führt Prüfungen durch, berät und schlichtet bei Streit. „Zuständige Stelle" im Sinne des BBiG.',
  },
  {
    id: 'lf1-q38',
    category: 'Institutionen',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Welche Gewerkschaft vertritt das Dialogmarketing?',
    options: ['IG Metall', 'ver.di', 'GdP', 'NGG'],
    correctAnswer: 'ver.di',
    explanation: 'ver.di ist die DM-Gewerkschaft. CCV und DDV sind die Interessenverbände.',
  },

  // Information & Kanäle
  {
    id: 'lf1-q39',
    category: 'Information',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Welcher Informationskanal eignet sich AM WENIGSTEN für sehr vertrauliche personelle Mitteilungen?',
    options: ['Einzelgespräch', 'E-Mail', 'Verschlossener Brief', 'Telefonat'],
    correctAnswer: 'E-Mail',
    explanation: 'E-Mail eignet sich nicht für sehr Vertrauliches (Weiterleitung, Archivierung). Sensible Inhalte → Einzelgespräch.',
  },
  {
    id: 'lf1-q40',
    category: 'Information',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'In einer Sitzung soll dokumentiert werden, WIE eine Entscheidung zustande kam — inklusive Diskussionsbeiträge. Welches Protokoll passt?',
    options: ['Ergebnisprotokoll', 'Verlaufsprotokoll', 'Telefonnotiz', 'Aktenvermerk'],
    correctAnswer: 'Verlaufsprotokoll',
    explanation: 'Verlaufsprotokoll dokumentiert Beiträge, Diskussion, Abstimmung. Ergebnisprotokoll enthält nur die Ergebnisse.',
  },
  // --- Supplement: VUCA ---
  { id: 'lf1-s-q1', question: 'Wofür steht das Akronym VUCA?', type: 'multiple-choice', options: ['Vision, Unity, Control, Action', 'Volatility, Uncertainty, Complexity, Ambiguity', 'Value, Utility, Cost, Analysis', 'Velocity, Update, Change, Adapt'], correctAnswer: 'Volatility, Uncertainty, Complexity, Ambiguity', explanation: 'VUCA = Volatility (Volatilität), Uncertainty (Unsicherheit), Complexity (Komplexität), Ambiguity (Mehrdeutigkeit). Beschreibt die unvorhersehbare moderne Geschäftswelt.', difficulty: 'easy', category: 'VUCA' },
  { id: 'lf1-s-q2', question: 'Was beschreibt das "C" in VUCA?', type: 'multiple-choice', options: ['Control (Kontrolle)', 'Change (Wandel)', 'Complexity (Komplexität — viele vernetzte Einflussfaktoren)', 'Communication (Kommunikation)'], correctAnswer: 'Complexity (Komplexität — viele vernetzte Einflussfaktoren)', explanation: 'Complexity beschreibt die vielen miteinander vernetzten Einflussfaktoren, z. B. im Omnichannel-Service.', difficulty: 'easy', category: 'VUCA' },
  { id: 'lf1-s-q3', question: 'Erkläre alle 4 Aspekte von VUCA mit je einem Beispiel aus dem Dialogmarketing.', type: 'open', correctAnswer: 'Volatility (Volatilität): schwankendes Anrufvolumen. Uncertainty (Unsicherheit): Auswirkungen von KI/Chatbots auf die Branche. Complexity (Komplexität): Omnichannel mit vielen vernetzten Kanälen. Ambiguity (Mehrdeutigkeit): widersprüchliche Kundenfeedbacks unterschiedlich deutbar.', explanation: 'Alle 4 Aspekte einzeln erklären und mit Praxisbeispiel belegen können — typische IHK-Anforderung.', difficulty: 'hard', category: 'VUCA' },
  { id: 'lf1-s-q4', question: 'Wie reagieren Unternehmen sinnvoll auf eine VUCA-Welt?', type: 'multiple-choice', options: ['Mit starren Hierarchien und festen Regeln', 'Mit Agilität, flexiblen Strukturen und Weiterbildung', 'Mit Personalabbau', 'Mit Verzicht auf Technologie'], correctAnswer: 'Mit Agilität, flexiblen Strukturen und Weiterbildung', explanation: 'Eine sich schnell verändernde Welt erfordert Anpassungsfähigkeit (Agilität), flache Hierarchien und ständige Qualifizierung.', difficulty: 'medium', category: 'VUCA' },
  // --- Supplement: Entscheidungsarten ---
  { id: 'lf1-s-q5', question: 'Welche Entscheidungsart liegt vor, wenn ein Teamleiter über eine spontane Krankheitsvertretung entscheidet?', type: 'multiple-choice', options: ['Strategische Entscheidung', 'Operative Entscheidung', 'Programmierte Grundsatzentscheidung', 'Investitionsentscheidung'], correctAnswer: 'Operative Entscheidung', explanation: 'Operative Entscheidungen betreffen das kurzfristige Tagesgeschäft. Strategische Entscheidungen sind langfristig und grundlegend.', difficulty: 'medium', category: 'Entscheidungsarten' },
  { id: 'lf1-s-q6', question: 'Was ist der Unterschied zwischen einer Entscheidung unter Risiko und unter Unsicherheit?', type: 'open', correctAnswer: 'Unter Risiko: die Eintrittswahrscheinlichkeiten der möglichen Ergebnisse sind bekannt. Unter Unsicherheit: die Wahrscheinlichkeiten sind NICHT bekannt. Unter Sicherheit wären alle Faktoren vollständig bekannt.', explanation: 'Die Unterscheidung nach Informationsstand: Sicherheit > Risiko > Unsicherheit.', difficulty: 'hard', category: 'Entscheidungsarten' },
  { id: 'lf1-s-q7', question: 'Welche Entscheidungsart beschreibt eine wiederkehrende, nach festen Regeln lösbare Entscheidung?', type: 'multiple-choice', options: ['Nicht-programmierte Entscheidung', 'Programmierte Entscheidung', 'Strategische Entscheidung', 'Intuitive Entscheidung'], correctAnswer: 'Programmierte Entscheidung', explanation: 'Programmierte (Routine-)Entscheidungen folgen festen Regeln. Nicht-programmierte Entscheidungen sind neuartig und einmalig.', difficulty: 'medium', category: 'Entscheidungsarten' },
  // --- Supplement: Messbare Ziele ---
  { id: 'lf1-s-q8', question: 'Welche der folgenden Zielformulierungen ist messbar?', type: 'multiple-choice', options: ['"Wir wollen die Kundenzufriedenheit verbessern."', '"Wir wollen erfolgreicher werden."', '"Wir steigern die Erstlösungsquote (FCR) bis Q4 von 75 % auf 85 %."', '"Wir wollen mehr verkaufen."'], correctAnswer: '"Wir steigern die Erstlösungsquote (FCR) bis Q4 von 75 % auf 85 %."', explanation: 'Nur diese Formulierung enthält eine konkrete Kennzahl (75→85 %) und einen Zeitrahmen (Q4) — sie ist messbar und überprüfbar.', difficulty: 'medium', category: 'Unternehmensziele' },
  { id: 'lf1-s-q9', question: 'Formuliere aus dem vagen Ziel "den Umsatz erhöhen" ein messbares Ziel.', type: 'open', correctAnswer: 'Beispiel: "Den Jahresumsatz bis zum 31.12.2025 um 8 % gegenüber dem Vorjahr steigern." — mit konkreter Kennzahl (8 %), Bezugsgröße (Vorjahr) und Zeitrahmen (31.12.2025).', explanation: 'Ein messbares Ziel braucht: quantifizierbare Größe + Bezugspunkt + Termin. Das ermöglicht einen Soll-Ist-Vergleich.', difficulty: 'medium', category: 'Unternehmensziele' },
  // --- Supplement: Methoden Vor-/Nachteile ---
  { id: 'lf1-s-q10', question: 'Was ist der zentrale Nachteil der intuitiven Entscheidungsfindung?', type: 'multiple-choice', options: ['Sie ist zu langsam', 'Sie ist subjektiv und nicht nachvollziehbar', 'Sie braucht zu viele Daten', 'Sie ist zu teuer'], correctAnswer: 'Sie ist subjektiv und nicht nachvollziehbar', explanation: 'Die intuitive Entscheidung ist zwar schnell, aber subjektiv und schwer begründbar — daher ungeeignet für strategische Entscheidungen.', difficulty: 'medium', category: 'Entscheidungsmethoden' },
  { id: 'lf1-s-q11', question: 'Nenne je einen Vorteil und Nachteil der bewerteten Entscheidungsmatrix.', type: 'open', correctAnswer: 'Vorteil: liefert das präziseste Ergebnis, weil sie Kriterien gewichtet (in Prozent) UND Alternativen bewertet. Nachteil: zeitaufwendig in der Erstellung, und die Gewichtung der Kriterien bleibt eine subjektive Festlegung.', explanation: 'Die bewertete Matrix ist die genaueste Methode, kostet aber Zeit. Die Gewichtung selbst ist subjektiv.', difficulty: 'hard', category: 'Entscheidungsmethoden' },
  // --- Supplement: CI / Kultur / Image ---
  { id: 'lf1-s-q12', question: 'Grenze Unternehmenskultur und Unternehmensimage voneinander ab.', type: 'open', correctAnswer: 'Unternehmenskultur = die INTERN gelebten Werte, Normen und Verhaltensweisen (Innensicht). Unternehmensimage = die EXTERNE Wahrnehmung durch Außenstehende, also das Fremdbild (Außensicht). Die Corporate Identity ist das bewusst gestaltete Bindeglied zwischen beiden.', explanation: 'Kultur = innen gelebt. Image = außen wahrgenommen. CI = bewusst gestaltetes Gesamtkonzept.', difficulty: 'hard', category: 'Unternehmenskultur' },
  { id: 'lf1-s-q13', question: 'Was ist die Hauptaufgabe der Corporate Identity?', type: 'multiple-choice', options: ['Den Umsatz zu maximieren', 'Ein einheitliches, unverwechselbares Erscheinungsbild nach innen und außen zu schaffen', 'Die Mitarbeiterzahl zu erhöhen', 'Die Produktionskosten zu senken'], correctAnswer: 'Ein einheitliches, unverwechselbares Erscheinungsbild nach innen und außen zu schaffen', explanation: 'CI schafft Wiedererkennung und Vertrauen nach außen sowie Identifikation der Mitarbeiter nach innen.', difficulty: 'medium', category: 'Unternehmenskultur' },
  { id: 'lf1-s-q14', question: 'Ordne zu: Ein einheitliches Logo auf allen Geschäftspapieren gehört zu welcher CI-Komponente?', type: 'multiple-choice', options: ['Corporate Communication', 'Corporate Behavior', 'Corporate Design', 'Corporate Image'], correctAnswer: 'Corporate Design', explanation: 'Logo, Hausfarben und Geschäftspapiere gehören zum Corporate Design (sichtbare Identität).', difficulty: 'easy', category: 'Unternehmenskultur' },
  { id: 'lf1-s-q15', question: 'Welche CI-Komponente ist betroffen, wenn alle Mitarbeiter eine einheitliche Begrüßungsformel im Kundengespräch verwenden?', type: 'multiple-choice', options: ['Corporate Design', 'Corporate Behavior', 'Corporate Image', 'Corporate Communication'], correctAnswer: 'Corporate Behavior', explanation: 'Das tatsächliche Verhalten der Mitarbeiter gegenüber Kunden ist Corporate Behavior.', difficulty: 'medium', category: 'Unternehmenskultur' },
  // --- Supplement: Organigramm ---
  { id: 'lf1-s-q16', question: 'Was stellt ein Organigramm dar?', type: 'multiple-choice', options: ['Die Arbeitsabläufe im Unternehmen', 'Die Aufbauorganisation: Stellen, Abteilungen und Weisungsbefugnisse', 'Die Finanzlage', 'Den Produktionsprozess'], correctAnswer: 'Die Aufbauorganisation: Stellen, Abteilungen und Weisungsbefugnisse', explanation: 'Das Organigramm zeigt die STRUKTUR (Aufbauorganisation) — nicht die Abläufe (das wäre Ablauforganisation).', difficulty: 'easy', category: 'Organisation' },
  { id: 'lf1-s-q17', question: 'Nenne 2 Vorteile und 2 Nachteile eines Organigramms.', type: 'open', correctAnswer: 'Vorteile: klare Übersicht über die Struktur, erkennbare Weisungswege und Verantwortungsbereiche, Hilfe beim Onboarding. Nachteile: statisch (veraltet schnell), zeigt keine Prozesse/Abläufe, bildet keine informellen Beziehungen ab, bei großen Unternehmen unübersichtlich.', explanation: 'Organigramme sind gut für Struktur-Überblick, aber blind für Prozesse und informelle Netzwerke.', difficulty: 'medium', category: 'Organisation' },
  { id: 'lf1-s-q18', question: 'Welche Aussage über Organigramme ist FALSCH?', type: 'multiple-choice', options: ['Sie zeigen Weisungsbefugnisse', 'Sie stellen die Aufbauorganisation dar', 'Sie zeigen die zeitliche Reihenfolge der Arbeitsabläufe', 'Sie helfen bei der Einarbeitung neuer Mitarbeiter'], correctAnswer: 'Sie zeigen die zeitliche Reihenfolge der Arbeitsabläufe', explanation: 'Arbeitsabläufe gehören zur ABLAUForganisation (Flussdiagramm). Das Organigramm zeigt nur die Struktur.', difficulty: 'medium', category: 'Organisation' },
  // --- Supplement: Aufbau vs. Ablauf ---
  { id: 'lf1-s-q19', question: 'Was ist der Unterschied zwischen Aufbau- und Ablauforganisation?', type: 'open', correctAnswer: 'Aufbauorganisation: WER macht WAS — Strukturierung in Stellen/Abteilungen mit Weisungsbefugnissen, dargestellt im Organigramm. Ablauforganisation: WIE und WANN wird gearbeitet — Gestaltung der Arbeitsabläufe und ihrer zeitlich-räumlichen Reihenfolge, dargestellt im Flussdiagramm.', explanation: 'Aufbau = statisches Gerüst (Wer?). Ablauf = dynamischer Prozess (Wie?).', difficulty: 'hard', category: 'Organisation' },
  { id: 'lf1-s-q20', question: 'Die Festlegung "Eingehender Anruf → IVR → Agent → Nacharbeit" ist ein Beispiel für...', type: 'multiple-choice', options: ['Aufbauorganisation', 'Ablauforganisation', 'Ein Organigramm', 'Eine Leitungsspanne'], correctAnswer: 'Ablauforganisation', explanation: 'Eine zeitliche Reihenfolge von Arbeitsschritten beschreibt die Ablauforganisation (Prozess), nicht die Struktur.', difficulty: 'medium', category: 'Organisation' },
  { id: 'lf1-s-q21', question: 'Welche Organisationsform wird durch ein Flussdiagramm dargestellt?', type: 'multiple-choice', options: ['Aufbauorganisation', 'Ablauforganisation', 'Spartenorganisation', 'Matrixorganisation'], correctAnswer: 'Ablauforganisation', explanation: 'Die Ablauforganisation (Prozesse) wird im Flussdiagramm dargestellt. Die Aufbauorganisation im Organigramm.', difficulty: 'easy', category: 'Organisation' },
];
