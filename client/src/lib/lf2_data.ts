// IZURE — Lernfeld 2: Dienstleistungen im Dialogmarketing analysieren und vergleichen
// Quelle: Westermann „Kaufleute für Dialogmarketing", S. 150–208

import type { Topic, Flashcard, QuizQuestion } from './learningData';

export const lf2Topics: Topic[] = [
  {
    id: 'lf2-1-1',
    title: '1.1 Historische Entwicklung der DM-Branche',
    description: 'Von der Telefonvermittlung 1900 über die ACD 1973 zu Social Media.',
    examRelevance: 'medium',
    content: `**Meilensteine:**
- **Anfang 20. Jhd.** — Telefon-Vermittlung: Operatoren stellen Verbindungen manuell her → erste „Callcenter".
- **ab 1950er** — Telefon im Privathaushalt → Anstieg telefonischer Kundenkontakte (zuerst Fluggesellschaften, Versandhandel).
- **1973** — **ACD (Automatic Call Distribution)** von **Rockwell** erfunden → Durchbruch für Massen-Callcenter.
- parallel: Computer am Arbeitsplatz → vielfältige Aufgaben direkt vom MA → Kostensenkung + Produktivität.
- **ab 2010er** — Social Media + mobile Endgeräte → grundlegender Wandel im Kundendialog.

Wachstumshindernis: Mangel an qualifizierten Mitarbeitern → Begründung der Ausbildungsberufe **ab 2006**.`,
    keyPoints: [
      'ACD 1973 von Rockwell — der Durchbruch',
      'Ausbildungsberufe seit 2006',
      'ab 2010er: Social Media verändert Kundendialog',
    ],
  },
  {
    id: 'lf2-1-2',
    title: '1.2.1 Sektorenmodell & Strukturwandel',
    description: 'Primär-, Sekundär-, Tertiärsektor und der Wandel zur Dienstleistungsgesellschaft.',
    examRelevance: 'high',
    content: `**Drei Sektoren der Volkswirtschaft:**
- **Primärsektor** — Urproduktion: Land-/Forstwirtschaft, Fischerei, Bergbau.
- **Sekundärsektor** — Industrielle Produktion: Energie, produzierendes Gewerbe, Bau.
- **Tertiärsektor** — Dienstleistungen: Handel, Banken, Versicherungen, Transport, Telekommunikation.

**Tertiärsektor-Anteil der Erwerbstätigen:** 45 % (1970) → 61 % (1991) → **74 % (2018)**.

**Strukturwandel-Phasen:**
- bis ~1880 — Agrargesellschaft
- bis ~1980 — Industriegesellschaft
- ab ~1980 — Dienstleistungsgesellschaft
- ab ~2000 — Wissensgesellschaft

**Gründe:** Automatisierung, Globalisierung, höherer Beratungsbedarf, günstige DL durch IT, gesellschaftlicher Wandel.`,
    keyPoints: [
      'Primär = Urproduktion, Sekundär = Industrie, Tertiär = DL',
      'Tertiärsektor 1970→2018: 45 % → 74 %',
      'Phasen: Agrar → Industrie → Dienstleistung → Wissen',
    ],
  },
  {
    id: 'lf2-1-3',
    title: '1.2.1 DM als Querschnittsbranche',
    description: 'Warum das Dialogmarketing in der amtlichen Statistik fehlt.',
    examRelevance: 'high',
    content: `Das Dialogmarketing ist **keine „Branche" im üblichen Sinne**. In der amtlichen Gliederung des Statistischen Bundesamtes wird es **gar nicht aufgeführt**.

Man spricht von einer **Querschnittsbranche** — DM-Leistungen werden in vielen anderen Branchen erbracht.

**Einsatzfelder:**
- Handel — Bestellannahme im Versandhandel
- Transport — Paketstatus
- Telekommunikation — Tarifberatung
- Banken — Baufinanzierung
- Versicherungen — Antrag im Onlinechat
- Freie Berufe — zentrale Terminvergabe
- Öffentlicher Dienst — Beschwerdemanagement`,
    keyPoints: [
      'DM = Querschnittsbranche, keine eigene Branche',
      'Nicht in der amtlichen Statistik geführt',
      'Leistungen branchenübergreifend',
    ],
  },
  {
    id: 'lf2-1-4',
    title: '1.2.2 Sach- vs. Dienstleistung',
    description: 'Sechs Unterscheidungsmerkmale, Vertrauensgut, Uno-actu-Prinzip.',
    examRelevance: 'high',
    content: `**Dienstleistung** = Tätigkeit, die nicht der Produktion eines materiellen Gutes dient, sondern einen eigenständigen Wert hat.

**6 Unterscheidungsmerkmale:**

| Merkmal | Sachleistung | Dienstleistung |
|---|---|---|
| Physisch | materiell | immateriell |
| Lagerfähig | ja | nein |
| Übertragbar | ja | nein |
| Kundenbeteiligung | unabhängig | Kunde notwendig |
| Erstellung/Nutzung | nicht zeitgleich | gleichzeitig (Uno-actu) |
| Vorführmöglichkeit | ja | nein |

→ Dienstleistungen sind **Vertrauensgüter** — hohe Unsicherheit vor Inanspruchnahme.

**Zwei Dienstleistungsarten:**
- **Originäre DL** — eigenständige Leistung (KommunikativAktiv als Outsourcer)
- **Produktbegleitende DL** — abhängig von Sachleistung (Dialogfix-Bestellhotline)`,
    keyPoints: [
      'DL: immateriell, nicht lagerfähig, nicht übertragbar',
      'Uno-actu-Prinzip: Erstellung = Nutzung zeitgleich',
      'DL = Vertrauensgut',
      'originär vs. produktbegleitend',
    ],
  },
  {
    id: 'lf2-1-5',
    title: '1.3.1 Marketingmix — 4P → 7P',
    description: 'Die vier klassischen Ps plus drei Dienstleistungs-Ps.',
    examRelevance: 'high',
    content: `**Die 4 klassischen Ps:**
- **Product** (Produktpolitik) — Eigenschaften, Verpackung, Marke, Qualität, Garantie, Kundendienst
- **Price** (Preispolitik) — Preise, Rabatte, Differenzierung, Finanzierung
- **Promotion** (Kommunikationspolitik) — Kundenansprache, Werbung, PR, Verkaufsförderung
- **Place** (Vertriebspolitik) — Absatzwege, Logistik, Standort

→ Dialogmarketing gehört **schwerpunktmäßig zur Promotion (Kommunikationspolitik)**.

**Erweiterung auf 7P für Dienstleistungen:**
- **People** (Personalpolitik) — Auswahl, Aus-/Weiterbildung, Verhalten, Führung der MA
- **Processes** (Prozesspolitik) — Organisation interner Abläufe
- **Physical facilities** (Ausstattungspolitik) — Geschäftsräume, sichtbares Umfeld`,
    keyPoints: [
      '4P: Product, Price, Promotion, Place',
      '7P zusätzlich: People, Processes, Physical facilities',
      'DM = Teil der Promotion',
      'Werbung gehört zu Promotion, nicht Product',
    ],
  },
  {
    id: 'lf2-1-6',
    title: '1.3.2 Klassisches Marketing vs. Dialogmarketing',
    description: 'One-to-One statt Massenansprache.',
    examRelevance: 'high',
    content: `**Vergleich:**

| Klassisches Marketing | Dialogmarketing |
|---|---|
| einseitige Kommunikation | zweiseitig, dialogorientiert |
| Massenmarkt-Ansprache | individuell, zielgenau |
| hohe Streuverluste | geringe Streuverluste |
| keine direkte Response | direkte Responsemöglichkeit |
| Ziel: Bekanntheitsgrad | Ziel: direkte Reaktion |
| anonyme Beziehung | personalisierte Beziehung |
| langfristige Planung nötig | flexibel + kurzfristig |
| Erfolgskontrolle schwierig | rasche Erfolgskontrolle |

Dialogmarketing = **One-to-One-Marketing**.`,
    keyPoints: [
      'DM = One-to-One-Marketing',
      'DM: zweiseitig, geringe Streuverluste, direkte Response',
      'Klassisch: Bekanntheitsgrad / DM: direkte Reaktion',
    ],
  },
  {
    id: 'lf2-2-1',
    title: '2.1.1 9-Felder-Typologie',
    description: 'Inbound/Outbound × intern/extern/Mischform.',
    examRelevance: 'high',
    content: `**Erste Achse — Richtung:**
- **Inbound** — eingehende Anrufe. Initiative beim **Kunden**, Unternehmen reagiert.
- **Outbound** — abgehende Anrufe. Initiative beim **Unternehmen**, Kunde reagiert.

**Zweite Achse — Einbindung:** intern (Inhouse) / extern (Dienstleister) / Mischform.

**Die 9-Felder-Matrix:**

| | Intern | Extern | Mischform |
|---|---|---|---|
| Inbound | Typ 1 | Typ 4 | Typ 7 |
| Outbound | Typ 2 | Typ 5 | Typ 8 |
| Mischform | **Typ 3** | **Typ 6** | Typ 9 |

**Lehrfirmen:** Dialogfix = **Typ 3** (intern + Misch). KommunikativAktiv = **Typ 6** (extern + Misch).

Outbound = nur **ca. 1/3** aller Gespräche; Inbound dominiert.`,
    keyPoints: [
      'Inbound = Kunde initiiert, Outbound = Unternehmen initiiert',
      'Dialogfix = Typ 3, KommunikativAktiv = Typ 6',
      'Outbound nur ca. 1/3 aller Gespräche',
    ],
  },
  {
    id: 'lf2-2-2',
    title: '2.1.1 Inhouse vs. Extern',
    description: 'Vor- und Nachteile von Eigenbetrieb und Outsourcing.',
    examRelevance: 'high',
    content: `**Inhouse-Callcenter** — eigene Abteilung mit eigener Infrastruktur.
- **Vorteile:** bessere Bearbeitung komplexer Sachverhalte, höhere Identifikation, unmittelbare Qualitätskontrolle, Feedback kommt direkt an.
- **Nachteile:** Know-how-Aufbau teuer, schwankendes Volumen schwer abfangbar, höhere Personal-/Verwaltungskosten, unflexibel im Personaleinsatz.

**Externes Callcenter (Dienstleister)** — organisatorisch unabhängig, Leistungen werden eingekauft.
- **Vorteile:** flexible Reaktion auf Volumen, häufig kostengünstiger, Erfahrung aus vielen Projekten, Zusatzservices.
- **Nachteile:** Produkt-Schulung nötig (nicht für sehr komplexe Sachverhalte), geringere Motivation, längere Abstimmungswege, eingeschränkte Qualitätskontrolle.

**Trend:** Wachstum externer Dienstleister; weniger komplexe Tätigkeiten werden ausgelagert.`,
    keyPoints: [
      'Inhouse: tiefe Produktkenntnis, aber teuer + unflexibel',
      'Extern: flexibel + günstig, aber Motivation + Komplexität problematisch',
      'Trend zu Outsourcing',
    ],
  },
  {
    id: 'lf2-2-3',
    title: '2.1.2 Contact Center, Front-/Backoffice & FCR',
    description: 'Vom Telefon-Callcenter zum Multichannel-Contact-Center.',
    examRelevance: 'high',
    content: `**Begriffsentwicklung:**
- **Callcenter** = nur **Telefonie**
- **Contact Center** = **Multichannel**: Telefon + E-Mail + Chat + Social Media + Messenger

**Frontoffice** = direkter Kundenkontakt. Bearbeitung von Anrufen/Anfragen + Datenpflege. Ziel: **First Call Resolution (FCR)** — Problem beim ersten Kontakt gelöst, ohne weitere MA. Nutzt CRM-Systeme.

**Backoffice** = weiterführende Sachbearbeitung **ohne** direkten Kundenkontakt.`,
    keyPoints: [
      'Callcenter = nur Telefon, Contact Center = Multichannel',
      'FCR = First Call Resolution (Problem beim 1. Kontakt gelöst)',
      'Frontoffice = Kontakt, Backoffice = ohne Kontakt',
    ],
  },
  {
    id: 'lf2-2-4',
    title: '2.2 Zielgruppen B2C / B2B / B2G',
    description: 'Die drei Kundenkategorien im Dialogmarketing.',
    examRelevance: 'medium',
    content: `**Drei Zielgruppen:**
- **B2C** (Business-to-Consumer) — Privatkunden
- **B2B** (Business-to-Business) — Geschäftskunden
- **B2G** (Business-to-Government) — Behörden / öffentlicher Dienst

Hinweis: Im B2B-Kontext kann der „Kunde" selbst ein Unternehmen sein — „Kunde" ≠ „Konsument".`,
    keyPoints: [
      'B2C = Privatkunden',
      'B2B = Geschäftskunden',
      'B2G = Behörden',
    ],
  },
  {
    id: 'lf2-2-5',
    title: '2.2.1 Inbound-Leistungen',
    description: 'Bestellannahme, technische Hotline, Kundenservice, Informationshotline.',
    examRelevance: 'high',
    content: `**Vier Inbound-Leistungen:**

- **Bestell- und Auftragsannahme** — Bestellung am Telefon, Beratung, Lieferterminauskunft.
  - **Cross-Selling** = zusätzliches, anderes Produkt verkaufen
  - **Up-Selling** = höherwertige Variante verkaufen
  - **Direct Response** = Bestellung unmittelbar nach TV-/Radio-Spot, oft mit **Overflow-Callcenter** für Spitzen.
- **Technische Hotline / Support** — anspruchsvolle Anfragen, Experten-Antworten. Unternehmensintern als **Help Desk**.
- **Kundenservice** — Beschwerden, Reklamationen, Daten-/Zahlungsänderungen, Bedienungsfragen.
- **Informationshotline** — reine Informationsvermittlung, oft mit Aktionen (Produkteinführung, Rückrufaktion).`,
    keyPoints: [
      'Cross-Selling = anderes Produkt, Up-Selling = höherwertig',
      'Direct Response = nach Werbespot, Overflow fängt Spitzen',
      'Help Desk = interne technische Hotline',
    ],
  },
  {
    id: 'lf2-2-6',
    title: '2.2.2 Outbound-Leistungen',
    description: 'Telesales, Adressqualifizierung, Kundenbindung, Rückgewinnung, Inkasso, Marktforschung.',
    examRelevance: 'high',
    content: `**Sechs Outbound-Leistungen:**

- **Telefonverkauf (Telesales)** — aktiv Produkte anbieten, sofortiger Abschluss. Auch Außendienst-Unterstützung (Terminvereinbarung).
- **Adress- und Datenqualifizierung** — Datenbestand aktuell halten, Rückläuferbearbeitung nach Mailing.
- **Kundenbindung** — Welcome-Call, Thank-You-Call, Customer-Care-Call („Kuschelcall"), Nachfass nach Mailing, Kontakt nach A/B/C-Kundenklassifikation.
- **Kundenrückgewinnung** — Kündigungsgründe erfragen, neues Angebot.
- **Mahn- und Inkassowesen** — telefonische Zahlungserinnerung, Zahlungsplan. Vermeidet gerichtliches Mahnverfahren.
- **Markt- und Meinungsforschung** — Telefonbefragung zu Bedarf, Zufriedenheit, auch politisch.`,
    keyPoints: [
      'Telesales = aktiver Verkauf mit Abschlussziel',
      'Customer-Care-Call = „Kuschelcall"',
      'Inkasso vermeidet gerichtliches Mahnverfahren',
    ],
  },
  {
    id: 'lf2-2-7',
    title: '2.3.1 IHK-Hierarchiestufen',
    description: 'Agent, Teamleiter, Manager, Trainer.',
    examRelevance: 'medium',
    content: `**Vier IHK-zertifizierte Stufen:**

- **Callcenter-Agent** — Basisqualifikation, Frontoffice, In-/Outbound, **keine Führungsverantwortung**.
- **Callcenter-Teamleiter (Supervisor)** — führt 10–20 MA; Personal-/Urlaubsplanung, Coaching, Schulungen.
- **Callcenter-Manager** — obere Führung, leitet das Callcenter; verantwortet Personal, Technik, Qualität, Ergebnis. Mehrjährige Erfahrung + Studium/Weiterbildung.
- **Callcenter-Trainer** — Schulungen, Coaching, Personalentwicklung.

Weitere Qualifikationen: **Callcenter-Controller** (KLR, Steuerung), **Callcenter-Projektleiter**.`,
    keyPoints: [
      'Agent = keine Führungsverantwortung',
      'Teamleiter führt 10–20 MA',
      'Manager = obere Führung, ganzes Callcenter',
    ],
  },
  {
    id: 'lf2-2-8',
    title: '2.3.2 Hard Skills vs. Soft Skills',
    description: 'Differenzierung der Soft Skills nach Inbound und Outbound.',
    examRelevance: 'high',
    content: `**Hard Skills** = überprüfbare Kenntnisse und formale Qualifikationen (kaufm. Ausbildung, IHK-Zertifikat, Englisch, MS-Office, Produktkenntnisse).

**Soft Skills** = soziale Kompetenzen / Schlüsselqualifikationen — menschliche Eigenschaften und Fähigkeiten.

**Differenzierung nach Einsatzgebiet:**

| Soft Skills Inbound (reaktiv/empathisch) | Soft Skills Outbound (aktiv/durchsetzend) |
|---|---|
| Geduld | Überzeugungskraft |
| Einfühlungsvermögen | Ehrgeiz |
| Zuhören können | Zielstrebigkeit |
| Denken in Zusammenhängen | Frustrationstoleranz |
| Freundlichkeit | Selbstvertrauen |
| Hilfsbereitschaft | Positives Denken |`,
    keyPoints: [
      'Hard Skills = überprüfbar/formal, Soft Skills = soziale Kompetenzen',
      'Inbound-Skills: empathisch, reaktiv (Geduld, Zuhören)',
      'Outbound-Skills: durchsetzend, aktiv (Überzeugungskraft, Ehrgeiz)',
    ],
  },
  {
    id: 'lf2-2-9',
    title: '2.3.3 Ausbildungsberufe im Dialogmarketing',
    description: 'Servicefachkraft (2 Jahre) und Kaufleute (3 Jahre).',
    examRelevance: 'high',
    content: `**Zwei Ausbildungsberufe seit 2006:**

| | Servicefachkraft für DM | Kaufleute für DM |
|---|---|---|
| Dauer | **2 Jahre** | **3 Jahre** |
| Schwerpunkt | Kundenbetreuung, Service, Verkauf | zusätzlich Personal, KLR/Controlling, Qualitätssicherung, Vertrieb/Marketing |

Die **Servicefachkraft-Ausbildung wird auf die Kaufmann-Ausbildung angerechnet**.

**Zusätzliche Kaufleute-Inhalte:** Personal · Kaufmännische Steuerung und Kontrolle (KLR, Controlling) · Qualitätssicherung der Auftragsdurchführung · Vertrieb und Marketing.`,
    keyPoints: [
      'Servicefachkraft = 2 Jahre, Kaufleute = 3 Jahre',
      'Servicefachkraft wird auf Kaufmann angerechnet',
      'Kaufleute zusätzlich: Personal, KLR, Qualität, Vertrieb',
    ],
  },
  {
    id: 'lf2-3-1',
    title: '3.1 Präsentation vorbereiten',
    description: 'Vorbereitungsschritte und die drei Präsentationsphasen.',
    examRelevance: 'medium',
    content: `**Vorbereitungsschritte:**
1. **Zielgruppe analysieren** — Sprachniveau, Größe, Homogenität
2. **Inhalte bestimmen** — sammeln, auswählen, komprimieren
3. **Inhalte gliedern** in 3 Phasen
4. **Organisatorischer Rahmen** — Tag/Uhrzeit, Pausen, Raum, Sitzordnung

**Drei Phasen:**
- **Eröffnung** — Begrüßung, Aufmacher, Überblick
- **Hauptteil** — Daten, Argumente, Stilmittel, Visualisierung, Fragen
- **Abschluss** — Zusammenfassung, Ausblick, nächste Schritte, Handout

→ **Regel:** Eröffnung + Abschluss zusammen max. **20 %** der Zeit.`,
    keyPoints: [
      '3 Phasen: Eröffnung, Hauptteil, Abschluss',
      'Eröffnung + Abschluss max. 20 % der Zeit',
      'Erst Zielgruppe analysieren, dann Inhalte',
    ],
  },
  {
    id: 'lf2-3-2',
    title: '3.2 Visualisierung & Verständlichmacher',
    description: '4 Verständlichmacher nach Schulz von Thun, 4 Diagrammtypen.',
    examRelevance: 'high',
    content: `Visuelles wird vom Gehirn **schneller und nachhaltiger** aufgenommen als Text.

**4 Verständlichmacher (Schulz von Thun):**
- **Einfachheit** — kurze Sätze, Wortschatz der Zielgruppe, keine Fremdwörter
- **Gliederung** — Überschriften, Absätze, logische Struktur
- **Prägnanz** — Wesentliches, mit wenigen Worten viel sagen
- **Stimulanz** — Anreize: Farben, Grafiken, Beispiele

**4 Diagrammtypen:**
- **Tabelle** — Zahlen, Vergleiche, Rangordnungen
- **Säulen-/Balkendiagramm** — Größenvergleiche, Entwicklungen
- **Kurvendiagramm** — Entwicklungen über Zeit (Zeit auf x-Achse)
- **Kreis-/Tortendiagramm** — Anteile an einem Gesamtwert (Prozente)`,
    keyPoints: [
      '4 Verständlichmacher: Einfachheit, Gliederung, Prägnanz, Stimulanz',
      'Kurvendiagramm = Zeitverlauf, Kreisdiagramm = Anteile',
      'Visuelle Aufnahme schneller + nachhaltiger als Text',
    ],
  },
];

export const lf2Flashcards: Flashcard[] = [
  // Branche & Historie
  { id: 'lf2-f1', category: 'Branche & Historie', question: 'Was wurde 1973 erfunden und von wem?', answer: 'Die ACD (Automatic Call Distribution) von Rockwell — der Durchbruch für Massen-Callcenter.' },
  { id: 'lf2-f2', category: 'Branche & Historie', question: 'Seit wann gibt es die Ausbildungsberufe im Dialogmarketing?', answer: 'Seit 2006 — als Reaktion auf den Mangel an qualifizierten Mitarbeitern.' },
  { id: 'lf2-f3', category: 'Branche & Historie', question: 'Wie sah Telefonie am Anfang des 20. Jahrhunderts aus?', answer: 'Telefon-Vermittlung: Operatoren stellten Verbindungen manuell her — die ersten „Callcenter".' },
  { id: 'lf2-f4', category: 'Branche & Historie', question: 'Was veränderte den Kundendialog ab den 2010er Jahren?', answer: 'Social Media und mobile Endgeräte.' },

  // Sektoren & Dienstleistung
  { id: 'lf2-f5', category: 'Sektoren & DL', question: 'Welche drei Wirtschaftssektoren gibt es?', answer: 'Primärsektor (Urproduktion), Sekundärsektor (Industrie), Tertiärsektor (Dienstleistungen).' },
  { id: 'lf2-f6', category: 'Sektoren & DL', question: 'Wie hat sich der Tertiärsektor-Anteil von 1970 bis 2018 entwickelt?', answer: 'Von 45 % (1970) über 61 % (1991) auf 74 % (2018) der Erwerbstätigen.' },
  { id: 'lf2-f7', category: 'Sektoren & DL', question: 'Welche vier Gesellschaftsphasen nennt der Strukturwandel?', answer: 'Agrargesellschaft (bis ~1880), Industriegesellschaft (bis ~1980), Dienstleistungsgesellschaft (ab ~1980), Wissensgesellschaft (ab ~2000).' },
  { id: 'lf2-f8', category: 'Sektoren & DL', question: 'Warum ist Dialogmarketing eine „Querschnittsbranche"?', answer: 'Weil DM-Leistungen in vielen anderen Branchen erbracht werden — DM wird in der amtlichen Statistik gar nicht als eigene Branche geführt.' },
  { id: 'lf2-f9', category: 'Sektoren & DL', question: 'Was ist eine Dienstleistung?', answer: 'Eine Tätigkeit, die nicht der Produktion eines materiellen Gutes dient, sondern einen eigenständigen Wert hat.' },
  { id: 'lf2-f10', category: 'Sektoren & DL', question: 'Nenne die 6 Unterscheidungsmerkmale Sach-/Dienstleistung.', answer: 'Physisch, lagerfähig, übertragbar, Kundenbeteiligung, Erstellung/Nutzung zeitgleich, Vorführmöglichkeit.' },
  { id: 'lf2-f11', category: 'Sektoren & DL', question: 'Was besagt das Uno-actu-Prinzip?', answer: 'Bei Dienstleistungen erfolgen Erstellung und Nutzung gleichzeitig — sie sind daher nie lagerfähig.' },
  { id: 'lf2-f12', category: 'Sektoren & DL', question: 'Warum sind Dienstleistungen „Vertrauensgüter"?', answer: 'Weil vor der Inanspruchnahme hohe Unsicherheit besteht — die Qualität ist nicht vorab prüfbar.' },
  { id: 'lf2-f13', category: 'Sektoren & DL', question: 'Unterschied originäre vs. produktbegleitende Dienstleistung?', answer: 'Originäre DL = eigenständige Leistung (z. B. Outsourcing-Callcenter). Produktbegleitende DL = abhängig von einer Sachleistung (z. B. Bestellhotline).' },

  // Marketing
  { id: 'lf2-f14', category: 'Marketing', question: 'Welche 4 klassischen Ps gibt es im Marketingmix?', answer: 'Product, Price, Promotion, Place.' },
  { id: 'lf2-f15', category: 'Marketing', question: 'Welche 3 Ps kommen bei Dienstleistungen hinzu (7P)?', answer: 'People (Personalpolitik), Processes (Prozesspolitik), Physical facilities (Ausstattungspolitik).' },
  { id: 'lf2-f16', category: 'Marketing', question: 'Zu welchem P gehört das Dialogmarketing schwerpunktmäßig?', answer: 'Zur Promotion (Kommunikationspolitik).' },
  { id: 'lf2-f17', category: 'Marketing', question: 'Zu welchem P gehört Werbung?', answer: 'Zur Promotion (Kommunikationspolitik) — nicht zur Produktpolitik.' },
  { id: 'lf2-f18', category: 'Marketing', question: 'Was umfasst das P „People"?', answer: 'Auswahl, Aus- und Weiterbildung, Verhalten und Führung der Mitarbeiter.' },
  { id: 'lf2-f19', category: 'Marketing', question: 'Wie wird Dialogmarketing auch genannt?', answer: 'One-to-One-Marketing.' },
  { id: 'lf2-f20', category: 'Marketing', question: 'Welches Ziel verfolgt klassisches Marketing, welches Dialogmarketing?', answer: 'Klassisches Marketing: Bekanntheitsgrad. Dialogmarketing: direkte Reaktion / Response.' },
  { id: 'lf2-f21', category: 'Marketing', question: 'Wie unterscheiden sich die Streuverluste?', answer: 'Klassisches Marketing hat hohe Streuverluste, Dialogmarketing geringe.' },

  // Typologie
  { id: 'lf2-f22', category: 'Typologie', question: 'Was ist Inbound, was Outbound?', answer: 'Inbound = eingehende Anrufe, Kunde initiiert. Outbound = abgehende Anrufe, Unternehmen initiiert.' },
  { id: 'lf2-f23', category: 'Typologie', question: 'Welchen Anteil aller Gespräche macht Outbound aus?', answer: 'Ca. ein Drittel — Inbound dominiert.' },
  { id: 'lf2-f24', category: 'Typologie', question: 'Welche zwei Achsen bilden die 9-Felder-Typologie?', answer: 'Richtung (Inbound/Outbound/Misch) und organisatorische Einbindung (intern/extern/Misch).' },
  { id: 'lf2-f25', category: 'Typologie', question: 'Welchem Typ entspricht Dialogfix?', answer: 'Typ 3 — intern (Inhouse) + Mischform.' },
  { id: 'lf2-f26', category: 'Typologie', question: 'Welchem Typ entspricht KommunikativAktiv?', answer: 'Typ 6 — extern (Dienstleister) + Mischform.' },
  { id: 'lf2-f27', category: 'Typologie', question: 'Was ist ein Inhouse-Callcenter?', answer: 'Das Unternehmen baut das Callcenter mit eigener technischer und personeller Infrastruktur als Abteilung im Unternehmen selbst auf.' },
  { id: 'lf2-f28', category: 'Typologie', question: 'Nenne zwei Vorteile des Inhouse-Callcenters.', answer: 'Bessere Bearbeitung komplexer Sachverhalte (eigene Produktkenntnis) und unmittelbare Qualitätskontrolle.' },
  { id: 'lf2-f29', category: 'Typologie', question: 'Nenne zwei Vorteile des externen Callcenters.', answer: 'Flexible Reaktion auf schwankendes Anrufvolumen und häufig kostengünstiger als Inhouse.' },
  { id: 'lf2-f30', category: 'Typologie', question: 'Nenne zwei Nachteile des externen Callcenters.', answer: 'Geringere Mitarbeitermotivation und eingeschränkte/zeitverzögerte Qualitätskontrolle.' },
  { id: 'lf2-f31', category: 'Typologie', question: 'Unterschied Callcenter und Contact Center?', answer: 'Callcenter = nur Telefonie. Contact Center = Multichannel (Telefon, E-Mail, Chat, Social Media, Messenger).' },
  { id: 'lf2-f32', category: 'Typologie', question: 'Was ist Frontoffice, was Backoffice?', answer: 'Frontoffice = direkter Kundenkontakt. Backoffice = weiterführende Sachbearbeitung ohne direkten Kundenkontakt.' },
  { id: 'lf2-f33', category: 'Typologie', question: 'Wofür steht FCR?', answer: 'First Call Resolution — das Anliegen des Kunden wird beim ersten Kontakt vollständig gelöst, ohne weitere Mitarbeiter.' },

  // Leistungen
  { id: 'lf2-f34', category: 'Leistungen', question: 'Welche drei Zielgruppen unterscheidet man?', answer: 'B2C (Privatkunden), B2B (Geschäftskunden), B2G (Behörden).' },
  { id: 'lf2-f35', category: 'Leistungen', question: 'Was ist Cross-Selling?', answer: 'Der Verkauf eines zusätzlichen, anderen Produkts neben dem ursprünglichen Kauf.' },
  { id: 'lf2-f36', category: 'Leistungen', question: 'Was ist Up-Selling?', answer: 'Der Verkauf einer höherwertigen (teureren) Variante des gleichen Produkts.' },
  { id: 'lf2-f37', category: 'Leistungen', question: 'Was ist Direct Response?', answer: 'Eine Bestellung unmittelbar nach einem TV-/Radio-Spot — Spitzen werden oft durch ein Overflow-Callcenter abgefangen.' },
  { id: 'lf2-f38', category: 'Leistungen', question: 'Was ist ein Help Desk?', answer: 'Eine unternehmensintern genutzte technische Hotline / Support-Funktion.' },
  { id: 'lf2-f39', category: 'Leistungen', question: 'Nenne die 4 Inbound-Leistungen.', answer: 'Bestell-/Auftragsannahme, technische Hotline/Support, Kundenservice, Informationshotline.' },
  { id: 'lf2-f40', category: 'Leistungen', question: 'Nenne die 6 Outbound-Leistungen.', answer: 'Telefonverkauf (Telesales), Adress-/Datenqualifizierung, Kundenbindung, Kundenrückgewinnung, Mahn-/Inkassowesen, Markt-/Meinungsforschung.' },
  { id: 'lf2-f41', category: 'Leistungen', question: 'Was ist ein Customer-Care-Call?', answer: 'Ein Kundenbindungsanruf ohne konkreten Verkaufsanlass — im Buch auch „Kuschelcall" genannt.' },
  { id: 'lf2-f42', category: 'Leistungen', question: 'Welchen Zweck hat das Mahn- und Inkassowesen im Outbound?', answer: 'Telefonische Zahlungserinnerung und Zahlungsplan — vermeidet ein gerichtliches Mahnverfahren.' },
  { id: 'lf2-f43', category: 'Leistungen', question: 'Was ist Adress- und Datenqualifizierung?', answer: 'Eine Outbound-Leistung zum Aktuell-Halten des Datenbestands, oft mit Rückläuferbearbeitung nach Mailings.' },

  // Mitarbeiter
  { id: 'lf2-f44', category: 'Mitarbeiter', question: 'Welche 4 IHK-Hierarchiestufen gibt es im Callcenter?', answer: 'Callcenter-Agent, Callcenter-Teamleiter (Supervisor), Callcenter-Manager, Callcenter-Trainer.' },
  { id: 'lf2-f45', category: 'Mitarbeiter', question: 'Hat ein Callcenter-Agent Führungsverantwortung?', answer: 'Nein — der Agent ist die Basisqualifikation ohne Führungsverantwortung.' },
  { id: 'lf2-f46', category: 'Mitarbeiter', question: 'Wie viele Mitarbeiter führt ein Callcenter-Teamleiter?', answer: 'In der Regel 10–20 Mitarbeiter.' },
  { id: 'lf2-f47', category: 'Mitarbeiter', question: 'Was sind Hard Skills?', answer: 'Überprüfbare Kenntnisse und formale Qualifikationen (z. B. Ausbildung, Zertifikate, Sprachen, MS-Office).' },
  { id: 'lf2-f48', category: 'Mitarbeiter', question: 'Was sind Soft Skills?', answer: 'Soziale Kompetenzen / Schlüsselqualifikationen — menschliche Eigenschaften und Fähigkeiten für die Tätigkeit.' },
  { id: 'lf2-f49', category: 'Mitarbeiter', question: 'Welche Soft Skills sind typisch für den Inbound?', answer: 'Geduld, Einfühlungsvermögen, Zuhören können, Denken in Zusammenhängen, Freundlichkeit, Hilfsbereitschaft.' },
  { id: 'lf2-f50', category: 'Mitarbeiter', question: 'Welche Soft Skills sind typisch für den Outbound?', answer: 'Überzeugungskraft, Ehrgeiz, Zielstrebigkeit, Frustrationstoleranz, Selbstvertrauen, positives Denken.' },

  // Ausbildung
  { id: 'lf2-f51', category: 'Ausbildung', question: 'Wie lange dauert die Ausbildung zur Servicefachkraft für DM?', answer: '2 Jahre.' },
  { id: 'lf2-f52', category: 'Ausbildung', question: 'Wie lange dauert die Ausbildung zu Kaufleuten für DM?', answer: '3 Jahre.' },
  { id: 'lf2-f53', category: 'Ausbildung', question: 'Wie hängen die beiden DM-Ausbildungsberufe zusammen?', answer: 'Die Servicefachkraft-Ausbildung (2 Jahre) wird auf die dreijährige Kaufmann-Ausbildung angerechnet.' },
  { id: 'lf2-f54', category: 'Ausbildung', question: 'Welche Inhalte haben Kaufleute zusätzlich zur Servicefachkraft?', answer: 'Personal, kaufmännische Steuerung/Kontrolle (KLR, Controlling), Qualitätssicherung der Auftragsdurchführung, Vertrieb und Marketing.' },

  // Präsentation
  { id: 'lf2-f55', category: 'Präsentation', question: 'Aus welchen 3 Phasen besteht eine Präsentation?', answer: 'Eröffnung, Hauptteil, Abschluss.' },
  { id: 'lf2-f56', category: 'Präsentation', question: 'Wie viel Zeit dürfen Eröffnung und Abschluss zusammen einnehmen?', answer: 'Maximal 20 % der Gesamtzeit.' },
  { id: 'lf2-f57', category: 'Präsentation', question: 'Was ist der erste Vorbereitungsschritt einer Präsentation?', answer: 'Die Zielgruppe analysieren (Sprachniveau, Größe, Homogenität).' },
  { id: 'lf2-f58', category: 'Präsentation', question: 'Nenne die 4 Verständlichmacher nach Schulz von Thun.', answer: 'Einfachheit, Gliederung, Prägnanz, Stimulanz.' },
  { id: 'lf2-f59', category: 'Präsentation', question: 'Was bedeutet der Verständlichmacher „Prägnanz"?', answer: 'Sich auf das Wesentliche beschränken — mit wenigen Worten viel sagen.' },
  { id: 'lf2-f60', category: 'Präsentation', question: 'Welche 4 Diagrammtypen nennt das Buch?', answer: 'Tabelle, Säulen-/Balkendiagramm, Kurvendiagramm, Kreis-/Tortendiagramm.' },
  { id: 'lf2-f61', category: 'Präsentation', question: 'Welches Diagramm eignet sich für Entwicklungen über die Zeit?', answer: 'Das Kurvendiagramm — Zeit auf der x-Achse, Menge auf der y-Achse.' },
  { id: 'lf2-f62', category: 'Präsentation', question: 'Welches Diagramm eignet sich für Anteile an einem Gesamtwert?', answer: 'Das Kreis-/Tortendiagramm (Prozentanteile).' },
  { id: 'lf2-f63', category: 'Präsentation', question: 'Warum sind Visualisierungen wirksam?', answer: 'Visuelle Inhalte werden vom Gehirn schneller und nachhaltiger aufgenommen als reiner Text.' },
  { id: 'lf2-f64', category: 'Präsentation', question: 'Wie sollten Symbole / Piktogramme eingesetzt werden?', answer: 'Sparsam — bei zu häufigem Einsatz nutzen sie sich ab und verlieren ihre Wirkung.' },
];

export const lf2QuizQuestions: QuizQuestion[] = [
  {
    id: 'lf2-q1',
    category: 'Branche & Historie',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Welche Erfindung von 1973 gilt als Durchbruch für Massen-Callcenter?',
    options: ['Das Internet', 'Die ACD (Automatic Call Distribution)', 'Die E-Mail', 'Das Smartphone'],
    correctAnswer: 'Die ACD (Automatic Call Distribution)',
    explanation: 'Die ACD wurde 1973 von Rockwell erfunden und ermöglichte die automatische Verteilung großer Anrufmengen.',
  },
  {
    id: 'lf2-q2',
    category: 'Sektoren',
    type: 'matching',
    difficulty: 'easy',
    question: 'Ordne zu: a) Landwirtschaft · b) Baugewerbe · c) Versicherungen',
    correctAnswer: 'a → Primärsektor · b → Sekundärsektor · c → Tertiärsektor',
    explanation: 'Primär = Urproduktion, Sekundär = industrielle Produktion, Tertiär = Dienstleistungen.',
  },
  {
    id: 'lf2-q3',
    category: 'Sektoren',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Auf welchen Anteil der Erwerbstätigen ist der Tertiärsektor bis 2018 gewachsen?',
    options: ['45 %', '61 %', '74 %', '90 %'],
    correctAnswer: '74 %',
    explanation: 'Entwicklung: 45 % (1970) → 61 % (1991) → 74 % (2018).',
  },
  {
    id: 'lf2-q4',
    category: 'Branche',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Warum wird Dialogmarketing als „Querschnittsbranche" bezeichnet?',
    options: [
      'Weil es nur Telefonie umfasst',
      'Weil seine Leistungen in vielen anderen Branchen erbracht werden und es nicht als eigene Branche in der Statistik geführt wird',
      'Weil es quer durch alle Bundesländer verteilt ist',
      'Weil es eine Mischung aus Industrie und Handwerk ist',
    ],
    correctAnswer: 'Weil seine Leistungen in vielen anderen Branchen erbracht werden und es nicht als eigene Branche in der Statistik geführt wird',
    explanation: 'DM-Leistungen finden sich in Handel, Banken, Transport, öffentlichem Dienst usw. — das Statistische Bundesamt führt DM nicht als eigene Branche.',
  },
  {
    id: 'lf2-q5',
    category: 'Dienstleistung',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Welche Aussage über Dienstleistungen ist FALSCH?',
    options: [
      'Sie sind immateriell',
      'Sie sind digital lagerfähig',
      'Erstellung und Nutzung erfolgen gleichzeitig (Uno-actu)',
      'Sie sind Vertrauensgüter',
    ],
    correctAnswer: 'Sie sind digital lagerfähig',
    explanation: 'Dienstleistungen sind nie lagerfähig — auch nicht digital. Erstellung und Nutzung erfolgen zeitgleich (Uno-actu-Prinzip).',
  },
  {
    id: 'lf2-q6',
    category: 'Dienstleistung',
    type: 'open',
    difficulty: 'medium',
    question: 'Nenne die 6 Merkmale, mit denen sich Sach- und Dienstleistung unterscheiden lassen.',
    correctAnswer: 'Physische Vorhandenheit · Lagerfähigkeit · Übertragbarkeit · Kundenbeteiligung bei der Erstellung · zeitgleiche Erstellung und Nutzung (Uno-actu) · Vorführmöglichkeit.',
    explanation: 'Bei der Dienstleistung sind alle sechs Merkmale „negativ" ausgeprägt: immateriell, nicht lagerfähig, nicht übertragbar, Kunde notwendig, zeitgleich, nicht vorführbar.',
  },
  {
    id: 'lf2-q7',
    category: 'Dienstleistung',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Eine Bestellhotline für die Produkte des eigenen Unternehmens ist eine …',
    options: ['originäre Dienstleistung', 'produktbegleitende Dienstleistung', 'Sachleistung', 'Sekundärleistung'],
    correctAnswer: 'produktbegleitende Dienstleistung',
    explanation: 'Sie ist von einer Sachleistung abhängig. Originäre DL wäre z. B. ein eigenständiger Outsourcing-Dienstleister.',
  },
  {
    id: 'lf2-q8',
    category: 'Marketing',
    type: 'matching',
    difficulty: 'medium',
    question: 'Ordne zu: a) Rabattaktion · b) Werbebanner · c) Direktversand · d) Garantie',
    correctAnswer: 'a → Price · b → Promotion · c → Place · d → Product',
    explanation: 'Price = Preispolitik, Promotion = Kommunikation, Place = Vertrieb, Product = Produktpolitik.',
  },
  {
    id: 'lf2-q9',
    category: 'Marketing',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Welches P kommt im 7P-Modell für Dienstleistungen NICHT hinzu?',
    options: ['People', 'Processes', 'Physical facilities', 'Positioning'],
    correctAnswer: 'Positioning',
    explanation: 'Die drei zusätzlichen Ps sind People, Processes, Physical facilities. „Positioning" gehört nicht dazu.',
  },
  {
    id: 'lf2-q10',
    category: 'Marketing',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Zu welchem Marketinginstrument gehört das Dialogmarketing schwerpunktmäßig?',
    options: ['Produktpolitik', 'Preispolitik', 'Kommunikationspolitik (Promotion)', 'Vertriebspolitik'],
    correctAnswer: 'Kommunikationspolitik (Promotion)',
    explanation: 'DM dient der Kundenansprache und Response — das ist Kommunikationspolitik.',
  },
  {
    id: 'lf2-q11',
    category: 'Marketing',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Welches Merkmal beschreibt das Dialogmarketing — nicht das klassische Marketing?',
    options: ['Hohe Streuverluste', 'Einseitige Kommunikation', 'Geringe Streuverluste und direkte Response', 'Ziel ist der Bekanntheitsgrad'],
    correctAnswer: 'Geringe Streuverluste und direkte Response',
    explanation: 'DM = One-to-One: zielgenau, geringe Streuverluste, direkte Responsemöglichkeit, rasche Erfolgskontrolle.',
  },
  {
    id: 'lf2-q12',
    category: 'Typologie',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Ein Kunde ruft von sich aus bei der Hotline an. Um welche Gesprächsrichtung handelt es sich?',
    options: ['Outbound — Unternehmen initiiert', 'Inbound — Kunde initiiert', 'Outbound — Kunde initiiert', 'Backoffice'],
    correctAnswer: 'Inbound — Kunde initiiert',
    explanation: 'Inbound = eingehender Anruf, die Initiative liegt beim Kunden. Bei Outbound geht das Unternehmen aktiv auf den Kunden zu.',
  },
  {
    id: 'lf2-q13',
    category: 'Typologie',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Welchem Typ der 9-Felder-Matrix entspricht KommunikativAktiv?',
    options: ['Typ 3 — intern + Misch', 'Typ 5 — extern + Outbound', 'Typ 6 — extern + Misch', 'Typ 1 — intern + Inbound'],
    correctAnswer: 'Typ 6 — extern + Misch',
    explanation: 'KommunikativAktiv ist ein externer Dienstleister, der sowohl In- als auch Outbound erbringt → extern + Mischform = Typ 6.',
  },
  {
    id: 'lf2-q14',
    category: 'Typologie',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Welchem Typ entspricht Dialogfix?',
    options: ['Typ 1 — intern + Inbound', 'Typ 3 — intern + Misch', 'Typ 6 — extern + Misch', 'Typ 9 — Misch + Misch'],
    correctAnswer: 'Typ 3 — intern + Misch',
    explanation: 'Dialogfix ist ein Inhouse-Callcenter, das sowohl In- als auch Outbound erbringt → intern + Mischform = Typ 3.',
  },
  {
    id: 'lf2-q15',
    category: 'Typologie',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Was ist ein Vorteil eines externen Callcenters gegenüber Inhouse?',
    options: [
      'Tiefere eigene Produktkenntnis',
      'Flexible Reaktion auf schwankendes Anrufvolumen',
      'Unmittelbare Qualitätskontrolle',
      'Höhere Mitarbeiteridentifikation',
    ],
    correctAnswer: 'Flexible Reaktion auf schwankendes Anrufvolumen',
    explanation: 'Externe Dienstleister können Volumenschwankungen flexibel abfangen. Produktkenntnis, Qualitätskontrolle und Identifikation sind Inhouse-Vorteile.',
  },
  {
    id: 'lf2-q16',
    category: 'Typologie',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Was unterscheidet ein Contact Center von einem Callcenter?',
    options: [
      'Nichts — die Begriffe sind synonym',
      'Das Contact Center ist Multichannel (Telefon, E-Mail, Chat, Social Media)',
      'Das Contact Center ist immer extern',
      'Das Callcenter ist größer',
    ],
    correctAnswer: 'Das Contact Center ist Multichannel (Telefon, E-Mail, Chat, Social Media)',
    explanation: 'Callcenter = nur Telefonie. Contact Center bedient mehrere Kanäle.',
  },
  {
    id: 'lf2-q17',
    category: 'Typologie',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Wofür steht FCR?',
    options: ['First Customer Reaction', 'First Call Resolution', 'Full Channel Response', 'Fast Call Routing'],
    correctAnswer: 'First Call Resolution',
    explanation: 'FCR = First Call Resolution: Das Anliegen wird beim ersten Kontakt vollständig gelöst, ohne weitere Mitarbeiter.',
  },
  {
    id: 'lf2-q18',
    category: 'Typologie',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Was kennzeichnet das Backoffice?',
    options: [
      'Direkten Kundenkontakt',
      'Weiterführende Sachbearbeitung ohne direkten Kundenkontakt',
      'Ausschließlich Outbound-Telefonie',
      'Die Geschäftsführung',
    ],
    correctAnswer: 'Weiterführende Sachbearbeitung ohne direkten Kundenkontakt',
    explanation: 'Frontoffice = direkter Kontakt, Backoffice = Sachbearbeitung im Hintergrund.',
  },
  {
    id: 'lf2-q19',
    category: 'Leistungen',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Ein Kunde bestellt einen Drucker. Der Agent bietet zusätzlich passendes Druckerpapier an. Was ist das?',
    options: ['Up-Selling', 'Cross-Selling', 'Direct Response', 'Overflow'],
    correctAnswer: 'Cross-Selling',
    explanation: 'Cross-Selling = zusätzliches, anderes Produkt. Up-Selling wäre der Verkauf eines höherwertigen Druckers.',
  },
  {
    id: 'lf2-q20',
    category: 'Leistungen',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Ein Kunde will das Basismodell. Der Agent empfiehlt das teurere Profimodell. Was ist das?',
    options: ['Cross-Selling', 'Up-Selling', 'Direct Response', 'Telesales'],
    correctAnswer: 'Up-Selling',
    explanation: 'Up-Selling = höherwertige (teurere) Variante des gleichen Produkts. Cross-Selling wäre ein zusätzliches anderes Produkt.',
  },
  {
    id: 'lf2-q21',
    category: 'Leistungen',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Nach einem TV-Spot bestellen viele Kunden gleichzeitig. Welcher Begriff beschreibt das, und wie fängt man Spitzen ab?',
    options: [
      'Telesales — über ein Backoffice',
      'Direct Response — über ein Overflow-Callcenter',
      'Cross-Selling — über ein Help Desk',
      'Help Desk — über ein Contact Center',
    ],
    correctAnswer: 'Direct Response — über ein Overflow-Callcenter',
    explanation: 'Direct Response = unmittelbare Bestellung nach einem Werbespot. Lastspitzen werden über ein Overflow-Callcenter abgefangen.',
  },
  {
    id: 'lf2-q22',
    category: 'Leistungen',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Welche dieser Leistungen ist KEINE Outbound-Leistung?',
    options: ['Telefonverkauf', 'Kundenrückgewinnung', 'Technische Hotline', 'Markt- und Meinungsforschung'],
    correctAnswer: 'Technische Hotline',
    explanation: 'Die technische Hotline ist eine Inbound-Leistung (Kunde ruft an). Telesales, Rückgewinnung und Marktforschung sind Outbound.',
  },
  {
    id: 'lf2-q23',
    category: 'Leistungen',
    type: 'open',
    difficulty: 'medium',
    question: 'Nenne die vier Inbound-Leistungen des Dialogmarketings.',
    correctAnswer: 'Bestell- und Auftragsannahme · Technische Hotline / Support · Kundenservice · Informationshotline.',
    explanation: 'Alle vier sind durch eingehende Kundenkontakte gekennzeichnet — der Kunde initiiert.',
  },
  {
    id: 'lf2-q24',
    category: 'Leistungen',
    type: 'multiple-choice',
    difficulty: 'easy',
    question: 'Welche Zielgruppe ist mit B2G gemeint?',
    options: ['Privatkunden', 'Geschäftskunden', 'Behörden / öffentlicher Dienst', 'Großhändler'],
    correctAnswer: 'Behörden / öffentlicher Dienst',
    explanation: 'B2G = Business-to-Government. B2C = Privatkunden, B2B = Geschäftskunden.',
  },
  {
    id: 'lf2-q25',
    category: 'Mitarbeiter',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Welche IHK-Stufe hat KEINE Führungsverantwortung?',
    options: ['Callcenter-Agent', 'Callcenter-Teamleiter', 'Callcenter-Manager', 'Callcenter-Trainer'],
    correctAnswer: 'Callcenter-Agent',
    explanation: 'Der Agent ist die Basisqualifikation ohne Führungsverantwortung. Der Teamleiter führt bereits 10–20 MA.',
  },
  {
    id: 'lf2-q26',
    category: 'Mitarbeiter',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Welche dieser Eigenschaften ist ein typischer Outbound-Soft-Skill?',
    options: ['Geduld', 'Einfühlungsvermögen', 'Überzeugungskraft', 'Zuhören können'],
    correctAnswer: 'Überzeugungskraft',
    explanation: 'Outbound-Skills sind aktiv/durchsetzend: Überzeugungskraft, Ehrgeiz, Zielstrebigkeit. Geduld, Einfühlung und Zuhören sind Inbound-Skills.',
  },
  {
    id: 'lf2-q27',
    category: 'Mitarbeiter',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Was ist ein Hard Skill?',
    options: [
      'Teamfähigkeit',
      'Verhandlungssicheres Englisch',
      'Selbstmotivation',
      'Positives Menschenbild',
    ],
    correctAnswer: 'Verhandlungssicheres Englisch',
    explanation: 'Hard Skills sind überprüfbare, formale Qualifikationen. Teamfähigkeit, Selbstmotivation und Menschenbild sind Soft Skills.',
  },
  {
    id: 'lf2-q28',
    category: 'Ausbildung',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Wie lange dauert die Ausbildung zur Servicefachkraft für Dialogmarketing?',
    options: ['1 Jahr', '2 Jahre', '3 Jahre', '3,5 Jahre'],
    correctAnswer: '2 Jahre',
    explanation: 'Servicefachkraft = 2 Jahre, Kaufleute für DM = 3 Jahre. Die Servicefachkraft-Ausbildung wird auf die Kaufmann-Ausbildung angerechnet.',
  },
  {
    id: 'lf2-q29',
    category: 'Ausbildung',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Welche Inhalte haben Kaufleute für DM zusätzlich zur Servicefachkraft?',
    options: [
      'Dienstleistungsangebot und Teamarbeit',
      'Personal, KLR/Controlling, Qualitätssicherung, Vertrieb/Marketing',
      'Datenschutz und Datensicherheit',
      'Dialogprozesse und Kundenbetreuung',
    ],
    correctAnswer: 'Personal, KLR/Controlling, Qualitätssicherung, Vertrieb/Marketing',
    explanation: 'Die ersten sieben Ausbildungsinhalte teilen sich beide Berufe; Kaufleute haben zusätzlich Personal, kaufmännische Steuerung, Qualitätssicherung und Vertrieb/Marketing.',
  },
  {
    id: 'lf2-q30',
    category: 'Präsentation',
    type: 'multiple-choice',
    difficulty: 'medium',
    question: 'Wie viel Zeit sollten Eröffnung und Abschluss einer Präsentation zusammen maximal einnehmen?',
    options: ['10 %', '20 %', '40 %', '50 %'],
    correctAnswer: '20 %',
    explanation: 'Regel: Eröffnung + Abschluss zusammen max. 20 % der Zeit — der Hauptteil dominiert.',
  },
  {
    id: 'lf2-q31',
    category: 'Präsentation',
    type: 'open',
    difficulty: 'medium',
    question: 'Nenne die 4 Verständlichmacher nach Schulz von Thun.',
    correctAnswer: 'Einfachheit · Gliederung · Prägnanz · Stimulanz.',
    explanation: 'Einfachheit = kurze Sätze; Gliederung = Struktur; Prägnanz = aufs Wesentliche; Stimulanz = Anreize wie Farben und Beispiele.',
  },
  {
    id: 'lf2-q32',
    category: 'Präsentation',
    type: 'multiple-choice',
    difficulty: 'hard',
    question: 'Du willst die Umsatzentwicklung der letzten 10 Jahre zeigen. Welches Diagramm ist am besten geeignet?',
    options: ['Kreisdiagramm', 'Kurvendiagramm', 'Tabelle', 'Organigramm'],
    correctAnswer: 'Kurvendiagramm',
    explanation: 'Das Kurvendiagramm zeigt Entwicklungen über die Zeit (Zeit auf x-Achse). Kreisdiagramme zeigen Anteile an einem Gesamtwert.',
  },
];
