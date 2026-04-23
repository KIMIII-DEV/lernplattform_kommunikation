// Learning Data for Communication Exam Preparation
// IHK 1.0 Level - Strictly based on the textbook

export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  type: 'multiple-choice' | 'open' | 'matching';
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  content: string;
  keyPoints: string[];
}

// Topics for Lernfeld 4
export const topics: Topic[] = [
  {
    id: 'lf4-1-1',
    title: '4.1.1 Telefonkonferenz',
    description: 'Synchrones Kommunikationsmedium für ortsunabhängige Zusammenarbeit.',
    content: `Die Telefonkonferenz ermöglicht Meetings mit Teilnehmern an verschiedenen Orten.
    
**Einwahlverfahren:**
- **Dial-in:** Teilnehmer wählen sich über eine zentrale Nummer ein.
- **Dial-out:** Ein System oder Moderator ruft alle Teilnehmer an.

**Technische Basis:**
- Realisierung über die betriebliche **TK-Anlage** (Drei-Wege-Konferenz) oder externe **Konferenzanbieter** für größere Gruppen.

**Verhaltensregeln (Netiquette):**
- Pünktlichkeit, Namensnennung vor dem Sprechen, Stummschaltung bei Nichtgebrauch.`,
    keyPoints: [
      'Unterscheidung Dial-in vs. Dial-out',
      'Nutzung der TK-Anlage oder externer Anbieter',
      'Wichtigkeit der Netiquette für Effizienz'
    ]
  },
  {
    id: 'lf4-1-2',
    title: '4.1.2 Anrufbeantworter & Voicemail',
    description: 'Systeme zur Entgegennahme von Nachrichten bei Nichterreichbarkeit.',
    content: `Dienen als "elektronischer Briefkasten" für Sprachnachrichten.

**Systemunterschiede:**
- **Hardware-AB:** Physisches Gerät am Telefon, lokale Speicherung.
- **Voicemail:** Softwarebasiert, in TK-Anlage integriert oder vom Netzanbieter, Server-Speicherung.

**Zentrale Funktionen:**
- **Zeitsteuerung:** Unterschiedliche Ansagen nach Tageszeit.
- **Fernabfrage:** Abhören von Nachrichten von anderen Anschlüssen aus.
- **Benachrichtigung:** Info über neue Nachrichten per E-Mail oder SMS.`,
    keyPoints: [
      'Hardware-AB vs. serverbasierte Voicemail',
      'Zeitsteuerung für professionelle Außenwirkung',
      'Fernabfrage für mobile Mitarbeiter'
    ]
  },
  {
    id: 'lf4-1-3',
    title: '4.1.3 Unified Messaging (UMS)',
    description: 'Integration verschiedener Nachrichtentypen in einer Oberfläche.',
    content: `UMS bündelt E-Mail, Fax, Voicemail und SMS in einem zentralen Posteingang (z. B. Outlook).

**Kernfunktionen:**
- **Einheitlicher Posteingang:** Alle Medien an einem Ort.
- **Medienkonvertierung:** 
  - **Text-to-Speech (TTS):** Vorlesen von E-Mails am Telefon.
  - **Fax-to-Mail:** Faxempfang als PDF-Anhang.

**Abgrenzung:**
- **UMS:** Fokus auf asynchrone Nachrichten.
- **Unified Communications (UC):** Erweitert UMS um Echtzeit-Dienste wie Präsenzmanagement und Instant Messaging.`,
    keyPoints: [
      'Zentraler Posteingang für alle Nachrichtentypen',
      'Effizienz durch Medienkonvertierung (TTS, Fax-to-Mail)',
      'Unterscheidung UMS (Nachrichten) vs. UC (Echtzeit)'
    ]
  },
  {
    id: 'lf4-1-4',
    title: '4.1.4 Telefax',
    description: 'Übertragung von Dokumentkopien über das Telefonnetz.',
    content: `Trotz digitaler Alternativen wichtig wegen rechtlicher Anerkennung.

**Technik:**
- **Hardware-Fax:** Eigenständiges Gerät.
- **Fax-Server:** Digitale Lösung im Netzwerk, Versand/Empfang am PC.

**Prüfungsrelevanz:**
- Der **Sendebericht** dient als Nachweis für den fristgerechten Zugang.`,
    keyPoints: [
      'Rechtliche Relevanz des Sendeberichts',
      'Fax-Server zur digitalen Integration',
      'Fax-to-Mail als moderne UMS-Komponente'
    ]
  },
  {
    id: 'lf4-1-5',
    title: '4.1.5 Netzwerke',
    description: 'Verbund von Computern zur gemeinsamen Ressourcennutzung.',
    content: `**Netzwerktypen:**
- **LAN (Local Area Network):** Lokal begrenzt (Gebäude/Grundstück).
- **WAN (Wide Area Network):** Weitverkehrsnetz (Städte/Länder).
- **WLAN:** Drahtloses lokales Netzwerk.

**Architekturen:**
- **Server-Client:** Zentraler Server verwaltet Daten/Rechte für Clients.
- **Peer-to-Peer:** Alle Rechner sind gleichberechtigt.

**Hardware:**
- **Router:** Verbindet unterschiedliche Netzwerke (z. B. LAN mit Internet).
- **Switch:** Verbindet Geräte innerhalb eines LANs.`,
    keyPoints: [
      'LAN (lokal) vs. WAN (weiträumig)',
      'Server-Client als Standard in Unternehmen',
      'Router als Schnittstelle nach außen'
    ]
  },
  {
    id: 'lf4-1-6',
    title: '4.1.6 Internet & Protokolle',
    description: 'Weltweiter Netzwerkverbund auf Basis von TCP/IP.',
    content: `Das Internet ist das größte WAN der Welt.

**Wichtige Protokolle:**
- **TCP/IP:** Basis-Sprache des Internets (Transport & Adressierung).
- **HTTP/HTTPS:** Übertragung von Webseiten (Sicher/Verschlüsselt).
- **SMTP/IMAP/POP3:** E-Mail-Versand und -Empfang.
- **FTP:** Dateiübertragung.

**Dienste:**
- **DNS (Domain Name System):** Übersetzt Domainnamen (www.manus.im) in IP-Adressen.
- **VoIP:** Telefonie über das Internetprotokoll.`,
    keyPoints: [
      'TCP/IP als fundamentales Protokoll',
      'DNS als "Telefonbuch" des Internets',
      'Unterscheidung Internet (Netz) vs. WWW (Dienst)'
    ]
  },
  {
    id: 'lf4-1-7',
    title: '4.1.7 Intranet',
    description: 'Unternehmensinternes, geschlossenes Informationssystem.',
    content: `Nutzt Internet-Technologien (TCP/IP, Browser), ist aber nur für Mitarbeiter zugänglich.

**Vorteile:**
- Schnelle Informationsverteilung (Handbücher, Formulare).
- Papierloses Büro (Kosteneinsparung).
- Plattformunabhängig durch Web-Browser.

**Sicherheit:**
- Zugriffsschutz durch Firewalls und VPN (für externen Zugriff).`,
    keyPoints: [
      'Geschlossener Benutzerkreis',
      'Nutzung von Standard-Webtechnologien',
      'VPN für sicheren Fernzugriff'
    ]
  },
  {
    id: 'lf4-2-1',
    title: '4.2.1 TK-Anlage im Dialogmarketing',
    description: 'Zentrale Vermittlungseinheit für die Kommunikation.',
    content: `Verbindet Endgeräte intern und mit dem öffentlichen Netz.

**Spezielle Leistungsmerkmale:**
- **ANI (Automatic Number Identification):** Rufnummer des Anrufers (Wer ruft an?).
- **DNIS (Dialed Number Identification Service):** Gewählte Nummer (Welches Projekt/Hotline wurde angerufen?).
- **Makeln/Rückfrage:** Wechsel zwischen Gesprächspartnern.`,
    keyPoints: [
      'ANI zur Kundenidentifikation',
      'DNIS zur projektbezogenen Gesprächsannahme',
      'Basis für ACD-Funktionalitäten'
    ]
  },
  {
    id: 'lf4-2-2',
    title: '4.2.2 ACD (Automatic Call Distribution)',
    description: 'Automatisierte Anrufverteilung nach festen Regeln.',
    content: `Herzstück des Call Centers zur Steuerung großer Anrufvolumina.

**Routing-Methoden:**
- **Longest Waiting Agent:** Anruf an den, der am längsten frei ist.
- **Skill-Based Routing:** Anruf an den Experten für das spezifische Thema.

**Begriffe:**
- **Warteschleife (Queuing):** Halten von Anrufern bei Besetzt.
- **Nachbearbeitung (ACW):** Zeit für Dokumentation nach dem Call.
- **Reporting:** Statistische Auswertung (Service Level, Erreichbarkeit).`,
    keyPoints: [
      'Effiziente Verteilung durch Routing-Regeln',
      'Skill-Based Routing für höhere Lösungsqualität',
      'Reporting zur Steuerung des Centers'
    ]
  },
  {
    id: 'lf4-2-3',
    title: '4.2.3 IVR (Interactive Voice Response)',
    description: 'Interaktive Sprach- oder Tastatursteuerung vor dem Agentenkontakt.',
    content: `Ermöglicht Self-Service oder Vorqualifizierung.

**Nutzen:**
- **Automatisierung:** Einfache Anfragen (Zählerstand, Kontostand) ohne Mitarbeiter.
- **Routing-Unterstützung:** Kunde wählt Menüpunkt -> ACD leitet zum passenden Skill.

**Gefahr:**
- Zu komplexe Menüs führen zu Kundenfrustration.`,
    keyPoints: [
      'Vorqualifizierung für Skill-Based Routing',
      'Kostensenkung durch Self-Service-Optionen',
      'DTMF (Töne) oder Spracherkennung als Eingabe'
    ]
  },
  {
    id: 'lf4-2-4',
    title: '4.2.4 CTI (Computer Telephony Integration)',
    description: 'Verknüpfung von Telefonanlage und IT-Systemen.',
    content: `Steuerung des Telefons über den PC und Datenaustausch.

**Zentrale Funktionen:**
- **Screen Pop-up:** Automatisches Öffnen der Kundenmaske bei Anrufeingang.
- **Click-to-Dial:** Wählen direkt aus dem CRM per Mausklick.
- **Journalisierung:** Automatische Protokollierung der Anrufe im CRM.`,
    keyPoints: [
      'Screen Pop-up spart Zeit bei der Identifikation',
      'Click-to-Dial vermeidet Wählfehler',
      'Nahtlose Dokumentation im CRM'
    ]
  },
  {
    id: 'lf4-2-5',
    title: '4.2.5 Outbound Dialer',
    description: 'Automatisierte Anwahl für aktive Kampagnen.',
    content: `Erhöht die Netto-Sprechzeit durch Filterung von Besetzt/AB.

**Modi:**
- **Preview:** Agent prüft Datensatz, startet Anwahl manuell.
- **Power:** System wählt, sobald Agent frei wird.
- **Predictive:** Algorithmus wählt vorausschauend mehr Nummern als Agenten frei sind.

**Risiko:**
- **Silent Calls:** Kunde hebt ab, kein Agent frei (Predictive Mode).`,
    keyPoints: [
      'Preview (Vorschau) vs. Predictive (Vorausschauend)',
      'Steigerung der Effizienz im Outbound',
      'Rechtliche Grenzen bei Silent Calls'
    ]
  },
  {
    id: 'lf4-2-6',
    title: '4.2.6 Omnichannel',
    description: 'Nahtlose Integration aller Kommunikationskanäle.',
    content: `Kunde kann Kanäle wechseln, ohne Informationen mehrfach zu nennen.

**Modelle:**
- **Multi-Channel:** Kanäle existieren isoliert (Datensilos).
- **Omnichannel:** Alle Kanäle sind im CRM verknüpft.

**Vorteil:**
- Ganzheitliche Kundenhistorie für den Agenten.
- Höhere Kundenzufriedenheit durch konsistente Erlebnisse.`,
    keyPoints: [
      'Integration statt Isolation der Kanäle',
      'Zentrale Datenbasis (CRM) als Voraussetzung',
      'Kanalübergreifende Kundenhistorie'
    ]
  },
  {
    id: 'lf4-3',
    title: '4.3 Betriebssysteme & Software',
    description: 'Grundlagen der IT-Infrastruktur im Unternehmen.',
    content: `**Betriebssystem (OS):**
- Verwaltet Hardware (CPU, RAM) und bildet Schnittstelle zum Nutzer.
- Aufgaben: Dateimanagement, Rechteverwaltung, Benutzeroberfläche (GUI).

**Softwarearten:**
- **Standardsoftware:** Für breite Masse (Office, Browser). Kostengünstig, schnell verfügbar.
- **Individualsoftware:** Maßgeschneidert für spezifische Prozesse. Teuer, hoher Wartungsaufwand.

**Branchensoftware:**
- **CRM:** Kundenbeziehungsmanagement.
- **PEP:** Personaleinsatzplanung (Forecasting & Schichtplanung).
- **Wissensdatenbank:** Zentrales Fachwissen für Agenten.`,
    keyPoints: [
      'Betriebssystem als Basis für Anwendungen',
      'Standard- vs. Individualsoftware',
      'CRM und PEP als Kern-Tools im Dialogmarketing'
    ]
  },
  {
    id: 'lf4-4',
    title: '4.4 Datenbanken nutzen',
    description: 'Strukturierte Speicherung und Verwaltung von Massendaten.',
    content: `**Relationale Datenbank:**
- Speicherung in verknüpften **Tabellen**.
- **Datensatz (Zeile):** Ein Objekt (z. B. ein Kunde).
- **Datenfeld (Spalte):** Eine Eigenschaft (z. B. Name).

**Schlüsselkonzepte:**
- **Primärschlüssel:** Eindeutige Kennung eines Datensatzes (z. B. Kundennummer).
- **Fremdschlüssel:** Verweis auf einen Primärschlüssel einer anderen Tabelle (erzeugt Beziehung).

**Vorteil:**
- Vermeidung von **Redundanz** (Mehrfachspeicherung) und Sicherstellung der Datenkonsistenz.`,
    keyPoints: [
      'Tabellen, Datensätze und Datenfelder',
      'Primärschlüssel zur eindeutigen Identifikation',
      'Beziehungen über Fremdschlüssel'
    ]
  },
  {
    id: 'lf4-5',
    title: '4.5 Datensicherheit',
    description: 'Schutz vor Verlust, Zerstörung und unbefugtem Zugriff.',
    content: `**Gefahren:**
- Malware (Viren, Trojaner, Ransomware).
- Phishing & Social Engineering.
- Hardwaredefekte & Elementarschäden.

**Maßnahmen:**
- **Technisch:** Firewall, Antivirus, Backup, Verschlüsselung.
- **Organisatorisch:** Passwortrichtlinien, Zutrittskontrollen, Mitarbeiterschulungen.

**Ziele:**
- Verfügbarkeit, Integrität und Vertraulichkeit der Daten.`,
    keyPoints: [
      'Technischer vs. organisatorischer Schutz',
      'Backup als wichtigste Rettungsmaßnahme',
      'Mensch als Sicherheitsrisiko (Social Engineering)'
    ]
  },
  {
    id: 'lf4-6',
    title: '4.6 Datenschutz (DSGVO & BDSG)',
    description: 'Rechtlicher Schutz personenbezogener Daten.',
    content: `Schützt das Recht auf informationelle Selbstbestimmung.

**Grundsätze der DSGVO:**
- Rechtmäßigkeit, Zweckbindung, Datenminimierung, Speicherbegrenzung, Rechenschaftspflicht.

**Personenbezogene Daten:**
- Alle Infos, die eine Person identifizierbar machen (Name, IP, Tel.).

**Rechte der Betroffenen:**
- Auskunft, Löschung, Berichtigung, Datenübertragbarkeit.

**Betriebliche Pflichten:**
- Verzeichnis von Verarbeitungstätigkeiten (VVT).
- Bestellung eines Datenschutzbeauftragten (i. d. R. ab 20 MA).`,
    keyPoints: [
      'Zweckbindung und Datenminimierung',
      'Rechte der Betroffenen (Auskunft, Löschung)',
      'Pflicht zur Dokumentation (VVT)'
    ]
  }
];

// Flashcards for Lernfeld 4 (25+)
export const flashcards: Flashcard[] = [
  { id: 'lf4-fc1', question: 'Was ist der Unterschied zwischen Dial-in und Dial-out bei Telefonkonferenzen?', answer: 'Dial-in: Teilnehmer wählen sich ein. Dial-out: Teilnehmer werden vom System angerufen.', category: 'Kommunikationsmedien' },
  { id: 'lf4-fc2', question: 'Was ist das Hauptmerkmal von Unified Messaging (UMS)?', answer: 'Die Zusammenführung verschiedener Nachrichtentypen (E-Mail, Fax, Voicemail) in einem einheitlichen Posteingang.', category: 'Kommunikationsmedien' },
  { id: 'lf4-fc3', question: 'Welche rechtliche Bedeutung hat der Sendebericht beim Telefax?', answer: 'Er dient als Nachweis für den fristgerechten Zugang eines Dokuments.', category: 'Kommunikationsmedien' },
  { id: 'lf4-fc4', question: 'Definiere den Begriff LAN.', answer: 'Local Area Network – ein räumlich begrenztes Netzwerk (z. B. innerhalb eines Gebäudes).', category: 'Netzwerke' },
  { id: 'lf4-fc5', question: 'Was ist die Aufgabe eines DNS-Servers?', answer: 'Er übersetzt Domainnamen (z. B. www.google.de) in die zugehörigen IP-Adressen.', category: 'Internet' },
  { id: 'lf4-fc6', question: 'Was unterscheidet ein Intranet von einem Extranet?', answer: 'Intranet ist nur für interne Mitarbeiter; Extranet öffnet Teile des Netzes für autorisierte externe Partner.', category: 'Netzwerke' },
  { id: 'lf4-fc7', question: 'Wofür steht die Abkürzung DNIS und was zeigt sie an?', answer: 'Dialed Number Identification Service – zeigt an, welche Zielrufnummer der Anrufer gewählt hat (wichtig für Projektidentifikation).', category: 'TK-Anlage' },
  { id: 'lf4-fc8', question: 'Was ist Skill-Based Routing in einer ACD?', answer: 'Die automatische Verteilung von Anrufen an Agenten basierend auf deren spezifischen Fachkenntnissen.', category: 'ACD' },
  { id: 'lf4-fc9', question: 'Nenne zwei Hauptvorteile einer IVR.', answer: 'Vorqualifizierung von Anrufern und Automatisierung von Standardanfragen (Self-Service).', category: 'IVR' },
  { id: 'lf4-fc10', question: 'Was bewirkt ein Screen Pop-up bei CTI?', answer: 'Das automatische Öffnen der Kundenmaske im CRM-System bei Anrufeingang.', category: 'CTI' },
  { id: 'lf4-fc11', question: 'Was ist das Risiko beim Predictive Dialing?', answer: 'Silent Calls – Kunden heben ab, aber es ist kein Agent für das Gespräch frei.', category: 'Dialer' },
  { id: 'lf4-fc12', question: 'Definiere Omnichannel im Kundenservice.', answer: 'Die nahtlose Verknüpfung aller Kommunikationskanäle mit einer einheitlichen Kundenhistorie.', category: 'Omnichannel' },
  { id: 'lf4-fc13', question: 'Nenne drei Kernaufgaben eines Betriebssystems.', answer: 'Hardwareverwaltung, Dateimanagement und Bereitstellung der Benutzeroberfläche.', category: 'Software' },
  { id: 'lf4-fc14', question: 'Was ist der Unterschied zwischen Standard- und Individualsoftware?', answer: 'Standardsoftware ist für viele Nutzer (Office); Individualsoftware ist maßgeschneidert für ein Unternehmen.', category: 'Software' },
  { id: 'lf4-fc15', question: 'Wofür wird PEP-Software im Call Center eingesetzt?', answer: 'Zur Personaleinsatzplanung basierend auf dem erwarteten Anrufvolumen (Forecasting).', category: 'Software' },
  { id: 'lf4-fc16', question: 'Was ist ein Primärschlüssel in einer Datenbank?', answer: 'Ein Datenfeld, das jeden Datensatz einer Tabelle eindeutig identifiziert.', category: 'Datenbanken' },
  { id: 'lf4-fc17', question: 'Warum vermeidet man Redundanz in Datenbanken?', answer: 'Um Speicherplatz zu sparen und Datenkonsistenz sicherzustellen (keine widersprüchlichen Daten).', category: 'Datenbanken' },
  { id: 'lf4-fc18', question: 'Nenne drei technische Maßnahmen der Datensicherheit.', answer: 'Firewall, Antivirenprogramm, Backup.', category: 'Datensicherheit' },
  { id: 'lf4-fc19', question: 'Was ist Phishing?', answer: 'Der Versuch, über gefälschte E-Mails oder Webseiten an sensible Daten von Nutzern zu gelangen.', category: 'Datensicherheit' },
  { id: 'lf4-fc20', question: 'Was schützt der Datenschutz primär?', answer: 'Das Recht auf informationelle Selbstbestimmung des Einzelnen.', category: 'Datenschutz' },
  { id: 'lf4-fc21', question: 'Nenne drei Grundsätze der DSGVO.', answer: 'Zweckbindung, Datenminimierung, Speicherbegrenzung.', category: 'Datenschutz' },
  { id: 'lf4-fc22', question: 'Was sind personenbezogene Daten?', answer: 'Alle Informationen, die sich auf eine identifizierbare natürliche Person beziehen.', category: 'Datenschutz' },
  { id: 'lf4-fc23', question: 'Welches Recht hat ein Betroffener laut DSGVO bezüglich seiner Daten?', answer: 'Z. B. Auskunftsrecht, Recht auf Löschung, Recht auf Berichtigung.', category: 'Datenschutz' },
  { id: 'lf4-fc24', question: 'Was ist ein Verzeichnis von Verarbeitungstätigkeiten (VVT)?', answer: 'Eine Dokumentation aller Prozesse im Unternehmen, bei denen personenbezogene Daten verarbeitet werden.', category: 'Datenschutz' },
  { id: 'lf4-fc25', question: 'Wofür steht die Abkürzung VoIP?', answer: 'Voice over Internet Protocol – Sprachübertragung über das Internet.', category: 'Internet' }
];

// Quiz Questions for Lernfeld 4 (60+)
export const quizQuestions: QuizQuestion[] = [
  {
    id: 'lf4-q1',
    question: 'Welches Einwahlverfahren bei Telefonkonferenzen ist für die Teilnehmer am bequemsten, da sie nicht selbst wählen müssen?',
    type: 'multiple-choice',
    options: ['Dial-in', 'Dial-out', 'Drei-Wege-Konferenz', 'VoIP'],
    correctAnswer: 'Dial-out',
    explanation: 'Beim Dial-out-Verfahren werden die Teilnehmer vom System angerufen und müssen nur abheben.',
    difficulty: 'easy',
    category: 'Kommunikationsmedien'
  },
  {
    id: 'lf4-q2',
    question: 'Was ist ein zentrales Merkmal von Unified Messaging (UMS)?',
    type: 'multiple-choice',
    options: ['Nur Telefonie', 'Einheitlicher Posteingang für verschiedene Medien', 'Ausschließlich Faxversand', 'Echtzeit-Videochat'],
    correctAnswer: 'Einheitlicher Posteingang für verschiedene Medien',
    explanation: 'UMS bündelt verschiedene Nachrichtentypen wie E-Mail, Fax und Voicemail an einem Ort.',
    difficulty: 'easy',
    category: 'Kommunikationsmedien'
  },
  {
    id: 'lf4-q3',
    question: 'Welche Technik ermöglicht es, E-Mails am Telefon vorlesen zu lassen?',
    type: 'multiple-choice',
    options: ['Speech-to-Text', 'Text-to-Speech (TTS)', 'OCR', 'IVR'],
    correctAnswer: 'Text-to-Speech (TTS)',
    explanation: 'TTS wandelt geschriebenen Text in künstliche Sprache um.',
    difficulty: 'medium',
    category: 'Kommunikationsmedien'
  },
  {
    id: 'lf4-q4',
    question: 'Warum ist der Sendebericht beim Faxversand in Unternehmen so wichtig?',
    type: 'open',
    correctAnswer: 'Er dient als rechtlicher Nachweis für den fristgerechten Zugang des Dokuments.',
    explanation: 'Der Sendebericht belegt, dass die Übertragung erfolgreich war und wann sie stattfand.',
    difficulty: 'medium',
    category: 'Kommunikationsmedien'
  },
  {
    id: 'lf4-q5',
    question: 'Welcher Netzwerktyp ist räumlich am weitesten ausgedehnt?',
    type: 'multiple-choice',
    options: ['LAN', 'WLAN', 'WAN', 'Intranet'],
    correctAnswer: 'WAN',
    explanation: 'Ein Wide Area Network (WAN) verbindet Standorte über große geografische Distanzen.',
    difficulty: 'easy',
    category: 'Netzwerke'
  },
  {
    id: 'lf4-q6',
    question: 'Welches Gerät verbindet ein lokales Netzwerk (LAN) mit dem Internet?',
    type: 'multiple-choice',
    options: ['Switch', 'Hub', 'Router', 'Server'],
    correctAnswer: 'Router',
    explanation: 'Ein Router leitet Datenpakete zwischen verschiedenen Netzwerken weiter.',
    difficulty: 'easy',
    category: 'Netzwerke'
  },
  {
    id: 'lf4-q7',
    question: 'Was ist die Hauptaufgabe des Domain Name Systems (DNS)?',
    type: 'multiple-choice',
    options: ['Verschlüsselung von Daten', 'Übersetzung von Domainnamen in IP-Adressen', 'Speicherung von Webseiten', 'Versand von E-Mails'],
    correctAnswer: 'Übersetzung von Domainnamen in IP-Adressen',
    explanation: 'DNS fungiert als "Telefonbuch" des Internets.',
    difficulty: 'medium',
    category: 'Internet'
  },
  {
    id: 'lf4-q8',
    question: 'Welches Protokoll wird standardmäßig für den Empfang von E-Mails verwendet, wenn diese auf dem Server verbleiben sollen?',
    type: 'multiple-choice',
    options: ['SMTP', 'IMAP', 'POP3', 'FTP'],
    correctAnswer: 'IMAP',
    explanation: 'IMAP synchronisiert das Postfach mit dem Server, POP3 lädt sie meist herunter und löscht sie dort.',
    difficulty: 'medium',
    category: 'Internet'
  },
  {
    id: 'lf4-q9',
    question: 'Ein geschlossenes Netzwerk, das nur für Mitarbeiter eines Unternehmens zugänglich ist, nennt man...',
    type: 'multiple-choice',
    options: ['Internet', 'Extranet', 'Intranet', 'Ethernet'],
    correctAnswer: 'Intranet',
    explanation: 'Das Intranet nutzt Internet-Technik für einen geschlossenen Benutzerkreis.',
    difficulty: 'easy',
    category: 'Netzwerke'
  },
  {
    id: 'lf4-q10',
    question: 'Welches Leistungsmerkmal einer TK-Anlage zeigt dem Agenten, welche Hotline der Kunde angerufen hat?',
    type: 'multiple-choice',
    options: ['ANI', 'DNIS', 'CLIP', 'CLIR'],
    correctAnswer: 'DNIS',
    explanation: 'DNIS (Dialed Number Identification Service) identifiziert die gewählte Zielnummer.',
    difficulty: 'medium',
    category: 'TK-Anlage'
  },
  {
    id: 'lf4-q11',
    question: 'Wie nennt man das Routing-Verfahren, bei dem Anrufe nach den Fachkenntnissen der Mitarbeiter verteilt werden?',
    type: 'multiple-choice',
    options: ['Longest Waiting Agent', 'Skill-Based Routing', 'Circular Routing', 'Random Routing'],
    correctAnswer: 'Skill-Based Routing',
    explanation: 'Anrufe werden gezielt an Agenten mit den passenden "Skills" geleitet.',
    difficulty: 'easy',
    category: 'ACD'
  },
  {
    id: 'lf4-q12',
    question: 'Was versteht man unter "After Call Work" (ACW) in der ACD-Statistik?',
    type: 'open',
    correctAnswer: 'Die Nachbearbeitungszeit, die ein Agent nach dem Gespräch für Dokumentation etc. benötigt.',
    explanation: 'In dieser Zeit ist der Agent für neue Anrufe gesperrt.',
    difficulty: 'medium',
    category: 'ACD'
  },
  {
    id: 'lf4-q13',
    question: 'Welches System ermöglicht es Kunden, einfache Anliegen wie Zählerstandsmeldungen ohne Mitarbeiterkontakt zu erledigen?',
    type: 'multiple-choice',
    options: ['ACD', 'CTI', 'IVR', 'Dialer'],
    correctAnswer: 'IVR',
    explanation: 'Interactive Voice Response ermöglicht Self-Service-Prozesse.',
    difficulty: 'easy',
    category: 'IVR'
  },
  {
    id: 'lf4-q14',
    question: 'Was ist der Hauptvorteil von CTI für einen Call Center Agenten?',
    type: 'multiple-choice',
    options: ['Bessere Sprachqualität', 'Automatisches Öffnen der Kundenmaske (Screen Pop-up)', 'Kostenloses Telefonieren', 'Schnelleres Internet'],
    correctAnswer: 'Automatisches Öffnen der Kundenmaske (Screen Pop-up)',
    explanation: 'CTI verknüpft Telefonie und IT, was Zeit bei der Kundensuche spart.',
    difficulty: 'easy',
    category: 'CTI'
  },
  {
    id: 'lf4-q15',
    question: 'In welchem Dialer-Modus besteht die Gefahr von "Silent Calls"?',
    type: 'multiple-choice',
    options: ['Preview Dialing', 'Power Dialing', 'Predictive Dialing', 'Manual Dialing'],
    correctAnswer: 'Predictive Dialing',
    explanation: 'Da das System vorausschauend wählt, kann es vorkommen, dass kein Agent frei ist, wenn der Kunde abhebt.',
    difficulty: 'medium',
    category: 'Dialer'
  },
  {
    id: 'lf4-q16',
    question: 'Was unterscheidet Omnichannel von Multi-Channel?',
    type: 'open',
    correctAnswer: 'Bei Omnichannel sind alle Kanäle nahtlos verknüpft, bei Multi-Channel existieren sie oft isoliert nebeneinander.',
    explanation: 'Omnichannel bietet eine durchgängige Kundenhistorie über alle Kanäle.',
    difficulty: 'hard',
    category: 'Omnichannel'
  },
  {
    id: 'lf4-q17',
    question: 'Welche Software wird primär zur Berechnung des Personalbedarfs im Call Center eingesetzt?',
    type: 'multiple-choice',
    options: ['CRM', 'ERP', 'PEP / Workforce Management', 'DMS'],
    correctAnswer: 'PEP / Workforce Management',
    explanation: 'PEP-Software nutzt Forecasting-Methoden zur Schichtplanung.',
    difficulty: 'medium',
    category: 'Software'
  },
  {
    id: 'lf4-q18',
    question: 'Was ist ein Primärschlüssel in einer relationalen Datenbank?',
    type: 'multiple-choice',
    options: ['Ein Passwort', 'Ein Feld zur eindeutigen Identifikation eines Datensatzes', 'Ein Verweis auf eine andere Tabelle', 'Ein Suchbegriff'],
    correctAnswer: 'Ein Feld zur eindeutigen Identifikation eines Datensatzes',
    explanation: 'Beispiel: Die Kundennummer ist der Primärschlüssel in der Kundentabelle.',
    difficulty: 'easy',
    category: 'Datenbanken'
  },
  {
    id: 'lf4-q19',
    question: 'Wie nennt man die mehrfache Speicherung gleicher Daten in einer Datenbank, die vermieden werden sollte?',
    type: 'multiple-choice',
    options: ['Konsistenz', 'Redundanz', 'Integrität', 'Normalisierung'],
    correctAnswer: 'Redundanz',
    explanation: 'Redundanz führt zu unnötigem Speicherverbrauch und Fehlerrisiken.',
    difficulty: 'medium',
    category: 'Datenbanken'
  },
  {
    id: 'lf4-q20',
    question: 'Welche Maßnahme schützt am besten vor Datenverlust durch Ransomware?',
    type: 'multiple-choice',
    options: ['Firewall', 'Regelmäßiges, offline gelagertes Backup', 'Starkes Passwort', 'Antivirenprogramm'],
    correctAnswer: 'Regelmäßiges, offline gelagertes Backup',
    explanation: 'Nur ein vom Netz getrenntes Backup ist vor Verschlüsselung sicher.',
    difficulty: 'medium',
    category: 'Datensicherheit'
  },
  {
    id: 'lf4-q21',
    question: 'Was ist "Social Engineering"?',
    type: 'open',
    correctAnswer: 'Die Manipulation von Menschen, um an vertrauliche Informationen zu gelangen.',
    explanation: 'Hier wird die "Schwachstelle Mensch" statt technischer Lücken ausgenutzt.',
    difficulty: 'hard',
    category: 'Datensicherheit'
  },
  {
    id: 'lf4-q22',
    question: 'Welcher Grundsatz der DSGVO besagt, dass Daten nur für den ursprünglich festgelegten Zweck genutzt werden dürfen?',
    type: 'multiple-choice',
    options: ['Datenminimierung', 'Zweckbindung', 'Richtigkeit', 'Speicherbegrenzung'],
    correctAnswer: 'Zweckbindung',
    explanation: 'Daten dürfen nicht einfach für andere Zwecke "zweckentfremdet" werden.',
    difficulty: 'easy',
    category: 'Datenschutz'
  },
  {
    id: 'lf4-q23',
    question: 'Ab welcher Anzahl von Personen, die ständig mit automatisierter Datenverarbeitung beschäftigt sind, muss i. d. R. ein Datenschutzbeauftragter bestellt werden?',
    type: 'multiple-choice',
    options: ['5', '10', '20', '50'],
    correctAnswer: '20',
    explanation: 'Dies ist eine zentrale Vorgabe des BDSG.',
    difficulty: 'medium',
    category: 'Datenschutz'
  },
  {
    id: 'lf4-q24',
    question: 'Welches Recht erlaubt es einem Kunden zu erfahren, welche Daten ein Unternehmen über ihn gespeichert hat?',
    type: 'multiple-choice',
    options: ['Recht auf Löschung', 'Auskunftsrecht', 'Recht auf Berichtigung', 'Widerspruchsrecht'],
    correctAnswer: 'Auskunftsrecht',
    explanation: 'Unternehmen müssen auf Anfrage eine Kopie der gespeicherten Daten bereitstellen.',
    difficulty: 'easy',
    category: 'Datenschutz'
  },
  {
    id: 'lf4-q25',
    question: 'Was ist ein "Silent Call" im Kontext von Dialern?',
    type: 'open',
    correctAnswer: 'Ein Anruf, bei dem der Kunde abhebt, aber kein Agent zur Übernahme des Gesprächs frei ist.',
    explanation: 'Dies passiert vor allem bei zu aggressiv eingestelltem Predictive Dialing.',
    difficulty: 'medium',
    category: 'Dialer'
  },
  {
    id: 'lf4-q26',
    question: 'Welche Rufnummerngasse ist für den Anrufer aus allen deutschen Netzen immer kostenlos?',
    type: 'multiple-choice',
    options: ['0180', '0900', '0800', '0137'],
    correctAnswer: '0800',
    explanation: '0800 ist die klassische Freecall-Nummer.',
    difficulty: 'easy',
    category: 'Internet'
  },
  {
    id: 'lf4-q27',
    question: 'Was ist der Unterschied zwischen einem Switch und einem Router?',
    type: 'open',
    correctAnswer: 'Ein Switch verbindet Geräte innerhalb eines Netzwerks, ein Router verbindet verschiedene Netzwerke miteinander.',
    explanation: 'Der Router arbeitet auf einer höheren Netzwerkschicht.',
    difficulty: 'hard',
    category: 'Netzwerke'
  },
  {
    id: 'lf4-q28',
    question: 'Nenne drei personenbezogene Daten laut DSGVO.',
    type: 'open',
    correctAnswer: 'Name, Anschrift, E-Mail-Adresse (auch IP-Adresse, Kontodaten etc.).',
    explanation: 'Alle Daten, die eine Person identifizierbar machen.',
    difficulty: 'easy',
    category: 'Datenschutz'
  },
  {
    id: 'lf4-q29',
    question: 'Was versteht man unter "Datenminimierung"?',
    type: 'multiple-choice',
    options: ['Daten so klein wie möglich speichern', 'Nur so viele Daten erheben, wie für den Zweck unbedingt nötig sind', 'Daten nach einem Jahr löschen', 'Daten verschlüsseln'],
    correctAnswer: 'Nur so viele Daten erheben, wie für den Zweck unbedingt nötig sind',
    explanation: 'Es gilt der Grundsatz: So wenig wie möglich, so viel wie nötig.',
    difficulty: 'medium',
    category: 'Datenschutz'
  },
  {
    id: 'lf4-q30',
    question: 'Welches Protokoll wird für die sichere, verschlüsselte Übertragung von Webseiten genutzt?',
    type: 'multiple-choice',
    options: ['HTTP', 'HTTPS', 'FTP', 'SMTP'],
    correctAnswer: 'HTTPS',
    explanation: 'Das "S" steht für Secure.',
    difficulty: 'easy',
    category: 'Internet'
  }
  // ... (Weitere 30 Fragen werden in der finalen Implementierung ergänzt)
];
