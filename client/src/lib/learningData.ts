// Learning Data for Communication Exam Preparation
// IHK 1.0 Level - Strictly based on the textbook and Competence Checklist
// Lernfeld 4: Informations- und Kommunikationstechnische Systeme nutzen

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
  examRelevance: 'high' | 'medium' | 'low';
}

// Topics for Lernfeld 4
export const topics: Topic[] = [
  {
    id: 'lf4-1-1',
    title: '4.1.1 Telefonkonferenz',
    description: 'Synchrones Kommunikationsmedium für ortsunabhängige Zusammenarbeit.',
    examRelevance: 'medium',
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
    examRelevance: 'low',
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
    examRelevance: 'high',
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
    examRelevance: 'medium',
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
    examRelevance: 'high',
    content: `**Netzwerktypen:**
- **LAN (Local Area Network):** Lokal begrenzt (Gebäude/Grundstück).
- **WAN (Wide Area Network):** Weitverkehrsnetz (Städte/Länder).
- **WLAN:** Drahtloses lokales Netzwerk.
- **VPN (Virtual Private Network):** Sicherer Tunnel über öffentliche Netze.

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
    examRelevance: 'high',
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
    examRelevance: 'medium',
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
    examRelevance: 'high',
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
    examRelevance: 'high',
    content: `Herzstück des Call Centers zur Steuerung großer Anrufvolumina.

**Routing-Methoden:**
- **Longest Waiting Agent:** Anruf an den, der am längsten frei ist.
- **Skill-Based Routing:** Anruf an den Experten für das spezifische Thema.

**Kennzahlen (KPIs):**
- **ASA (Average Speed of Answer):** Durchschn. Zeit bis zur Annahme.
- **AHT (Average Handling Time):** Gespräch + Nachbearbeitung.
- **Servicelevel:** % der Anrufe in X Sekunden (z. B. 80/20).
- **ACW (After Call Work):** Nachbearbeitungszeit.`,
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
    examRelevance: 'medium',
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
    examRelevance: 'high',
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
    examRelevance: 'high',
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
    examRelevance: 'medium',
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
    examRelevance: 'medium',
    content: `**Betriebssystem (OS):**
- Verwaltet Hardware (CPU, RAM) und bildet Schnittstelle zum Nutzer.

**Softwarearten:**
- **Standardsoftware:** Für viele Anwender (Office).
- **Individualsoftware:** Maßgeschneidert für ein Unternehmen.
- **OCR:** Texterkennung in Scans.
- **Cloud-Computing:** IT-Dienste über das Internet (SaaS, PaaS, IaaS).`,
    keyPoints: [
      'OS als Basis für Anwendungen',
      'Standard- vs. Individualsoftware',
      'Cloud-Computing für Flexibilität'
    ]
  },
  {
    id: 'lf4-4',
    title: '4.4 Datenbanken nutzen',
    description: 'Strukturierte Speicherung und Verwaltung von Daten.',
    examRelevance: 'high',
    content: `**Relationale Datenbank:**
- Daten in Tabellen mit Beziehungen.

**Begriffe:**
- **Primärschlüssel:** Eindeutige ID eines Datensatzes.
- **Fremdschlüssel:** Verweis auf Primärschlüssel anderer Tabellen.
- **Redundanz:** Mehrfache Speicherung (zu vermeiden).
- **Normalisierung:** Prozess zur Redundanzvermeidung.`,
    keyPoints: [
      'Primär- vs. Fremdschlüssel',
      'Vermeidung von Redundanzen',
      'SQL als Abfragesprache'
    ]
  },
  {
    id: 'lf4-5',
    title: '4.5 Datensicherheit & Datenschutz',
    description: 'Schutz von Daten und Persönlichkeitsrechten.',
    examRelevance: 'high',
    content: `**Datensicherheit (Technik):**
- Schutz vor Verlust/Missbrauch (Firewall, Backup, Antivirus).

**Datenschutz (Recht - DSGVO):**
- Schutz personenbezogener Daten.
- **Grundsätze:** Zweckbindung, Datenminimierung, Transparenz.
- **Rechte:** Auskunft, Löschung, Berichtigung.`,
    keyPoints: [
      'Sicherheit (technisch) vs. Schutz (rechtlich)',
      'DSGVO-Grundsätze als Prüfungsfokus',
      'Personenbezogene Daten als Kern'
    ]
  }
];

// 100 Flashcards for Lernfeld 4
export const flashcards: Flashcard[] = [
  { id: 'lf4-f1', category: 'Kommunikationsmedien', question: 'Was ist eine Dial-in-Konferenz?', answer: 'Teilnehmer wählen sich aktiv über eine zentrale Einwahlnummer in eine Konferenzplattform ein.' },
  { id: 'lf4-f2', category: 'Kommunikationsmedien', question: 'Was ist eine Dial-out-Konferenz?', answer: 'Ein Moderator oder ein automatisches System ruft alle Teilnehmer nacheinander an und schaltet sie zusammen.' },
  { id: 'lf4-f3', category: 'Kommunikationsmedien', question: 'Was ist der Vorteil einer Dial-out-Konferenz?', answer: 'Höhere Sicherheit (nur geladene Teilnehmer) und Komfort für die Teilnehmer.' },
  { id: 'lf4-f4', category: 'Kommunikationsmedien', question: 'Was versteht man unter Unified Messaging (UMS)?', answer: 'Die Integration verschiedener Nachrichtentypen (E-Mail, Fax, Voicemail, SMS) in einer einheitlichen Benutzeroberfläche.' },
  { id: 'lf4-f5', category: 'Kommunikationsmedien', question: 'Was ist Text-to-Speech (TTS)?', answer: 'Die automatisierte Umwandlung von Text (z. B. E-Mail) in künstliche Sprache zum Abhören am Telefon.' },
  { id: 'lf4-f6', category: 'Kommunikationsmedien', question: 'Was ist Speech-to-Text?', answer: 'Die Umwandlung von gesprochener Sprache (z. B. Voicemail) in Textform.' },
  { id: 'lf4-f7', category: 'Kommunikationsmedien', question: 'Was ist Fax-to-Mail?', answer: 'Eingehende Faxe werden vom System in ein digitales Format (z. B. PDF) umgewandelt und als E-Mail-Anhang zugestellt.' },
  { id: 'lf4-f8', category: 'Kommunikationsmedien', question: 'Was unterscheidet UMS von Unified Communications (UC)?', answer: 'UMS bündelt asynchrone Nachrichten; UC integriert zusätzlich Echtzeit-Dienste wie Präsenzmanagement und Instant Messaging.' },
  { id: 'lf4-f9', category: 'Kommunikationsmedien', question: 'Welche rechtliche Bedeutung hat der Sendebericht beim Telefax?', answer: 'Er dient als Nachweis für den fristgerechten Zugang eines Dokuments beim Empfänger.' },
  { id: 'lf4-f10', category: 'Kommunikationsmedien', question: 'Was ist ein LAN?', answer: 'Local Area Network: Ein räumlich begrenztes Netzwerk (z. B. innerhalb eines Gebäudes).' },
  { id: 'lf4-f11', category: 'Kommunikationsmedien', question: 'Was ist ein WAN?', answer: 'Wide Area Network: Ein Weitverkehrsnetz, das große geografische Distanzen überbrückt.' },
  { id: 'lf4-f12', category: 'Kommunikationsmedien', question: 'Was ist ein VPN?', answer: 'Virtual Private Network: Ein verschlüsselter "Tunnel" über ein öffentliches Netz für sicheren Zugriff auf interne Ressourcen.' },
  { id: 'lf4-f13', category: 'Kommunikationsmedien', question: 'Was ist das Client-Server-Modell?', answer: 'Ein zentraler Rechner (Server) stellt Dienste und Daten bereit, die von Arbeitsplatzrechnern (Clients) genutzt werden.' },
  { id: 'lf4-f14', category: 'Kommunikationsmedien', question: 'Was ist ein Peer-to-Peer-Netzwerk?', answer: 'Ein Netzwerk gleichberechtigter Rechner ohne zentralen Server.' },
  { id: 'lf4-f15', category: 'Kommunikationsmedien', question: 'Was ist die Aufgabe eines Routers?', answer: 'Er verbindet unterschiedliche Netzwerke (z. B. LAN und Internet) und leitet Datenpakete weiter.' },
  { id: 'lf4-f16', category: 'Kommunikationsmedien', question: 'Was ist die Aufgabe eines Switches?', answer: 'Er verbindet Geräte innerhalb eines lokalen Netzwerks (LAN) und leitet Daten gezielt an den Empfänger-Port.' },
  { id: 'lf4-f17', category: 'Kommunikationsmedien', question: 'Wofür steht TCP/IP?', answer: 'Transmission Control Protocol / Internet Protocol: Die Basis-Protokollfamilie des Internets.' },
  { id: 'lf4-f18', category: 'Kommunikationsmedien', question: 'Was macht das DNS?', answer: 'Domain Name System: Es übersetzt Domainnamen (z. B. google.de) in IP-Adressen.' },
  { id: 'lf4-f19', category: 'Kommunikationsmedien', question: 'Was ist der Unterschied zwischen HTTP und HTTPS?', answer: 'HTTPS ist die verschlüsselte und damit sichere Version des Web-Übertragungsprotokolls HTTP.' },
  { id: 'lf4-f20', category: 'Kommunikationsmedien', question: 'Was ist ein Intranet?', answer: 'Ein unternehmensinternes, geschlossenes Netzwerk auf Basis von Internet-Technologien.' },
  { id: 'lf4-f21', category: 'Kommunikationsmedien', question: 'Was ist ein Extranet?', answer: 'Ein Teil des Intranets, der für autorisierte externe Partner (z. B. Lieferanten) zugänglich gemacht wird.' },
  { id: 'lf4-f22', category: 'Kommunikationsmedien', question: 'Was ist VoIP?', answer: 'Voice over IP: Telefonieren über das Internetprotokoll statt über klassische Telefonleitungen.' },
  { id: 'lf4-f23', category: 'Kommunikationsmedien', question: 'Was ist eine IP-Adresse?', answer: 'Eine eindeutige numerische Adresse für jedes Gerät in einem IP-Netzwerk.' },
  { id: 'lf4-f24', category: 'Kommunikationsmedien', question: 'Was ist ein Browser?', answer: 'Eine Software zum Anzeigen von Webseiten im World Wide Web.' },
  { id: 'lf4-f25', category: 'Kommunikationsmedien', question: 'Was ist eine URL?', answer: 'Uniform Resource Locator: Die eindeutige Adresse einer Ressource im Internet.' },
  { id: 'lf4-f26', category: 'Branchentechnik', question: 'Was ist eine ACD?', answer: 'Automatic Call Distribution: Ein System zur automatischen Verteilung eingehender Anrufe.' },
  { id: 'lf4-f27', category: 'Branchentechnik', question: 'Was ist ANI?', answer: 'Automatic Number Identification: Die automatische Identifikation der Rufnummer des Anrufers.' },
  { id: 'lf4-f28', category: 'Branchentechnik', question: 'Was ist DNIS?', answer: 'Dialed Number Identification Service: Identifikation der vom Anrufer gewählten Zielnummer (Projektidentifikation).' },
  { id: 'lf4-f29', category: 'Branchentechnik', question: 'Was ist Skill-Based Routing?', answer: 'Die Verteilung von Anrufen basierend auf den spezifischen Fachkenntnissen (Skills) der Agenten.' },
  { id: 'lf4-f30', category: 'Branchentechnik', question: 'Was ist das "Longest Waiting Agent"-Prinzip?', answer: 'Der Anruf wird dem Agenten zugewiesen, der am längsten im Status "Bereit" auf einen Anruf wartet.' },
  { id: 'lf4-f31', category: 'Branchentechnik', question: 'Was ist IVR?', answer: 'Interactive Voice Response: Ein Sprachdialogsystem zur Vorqualifizierung oder für Self-Services.' },
  { id: 'lf4-f32', category: 'Branchentechnik', question: 'Was ist CTI?', answer: 'Computer Telephony Integration: Die Verknüpfung von Telefonanlage und Computer.' },
  { id: 'lf4-f33', category: 'Branchentechnik', question: 'Was ist ein Screen Pop-up?', answer: 'Das automatische Öffnen der Kundenmaske am PC bei Anrufeingang durch CTI.' },
  { id: 'lf4-f34', category: 'Branchentechnik', question: 'Was ist Click-to-Dial?', answer: 'Das Starten eines Anrufs per Mausklick direkt aus einer Computeranwendung (z. B. CRM).' },
  { id: 'lf4-f35', category: 'Branchentechnik', question: 'Was ist ein Dialer?', answer: 'Ein System zur automatisierten Anwahl von Telefonnummern im Outbound.' },
  { id: 'lf4-f36', category: 'Branchentechnik', question: 'Was ist Preview Dialing?', answer: 'Der Agent sieht den Datensatz vorab und startet die Anwahl manuell.' },
  { id: 'lf4-f37', category: 'Branchentechnik', question: 'Was ist Power Dialing?', answer: 'Das System wählt automatisch die nächste Nummer, sobald ein Agent frei wird.' },
  { id: 'lf4-f38', category: 'Branchentechnik', question: 'Was ist Predictive Dialing?', answer: 'Ein Algorithmus wählt vorausschauend mehr Nummern an, als Agenten frei sind, um Leerlauf zu minimieren.' },
  { id: 'lf4-f39', category: 'Branchentechnik', question: 'Was ist ein Silent Call?', answer: 'Ein Anruf, bei dem der Kunde abhebt, aber kein Agent zur Übernahme frei ist (Problem bei Predictive Dialing).' },
  { id: 'lf4-f40', category: 'Branchentechnik', question: 'Was ist Omnichannel?', answer: 'Die nahtlose Integration aller Kommunikationskanäle für ein konsistentes Kundenerlebnis.' },
  { id: 'lf4-f41', category: 'Branchentechnik', question: 'Was ist Call Blending?', answer: 'Der automatische Wechsel von Agenten zwischen Inbound und Outbound je nach Anrufaufkommen.' },
  { id: 'lf4-f42', category: 'Branchentechnik', question: 'Was ist ASA?', answer: 'Average Speed of Answer: Die durchschnittliche Zeit, bis ein Anruf entgegengenommen wird.' },
  { id: 'lf4-f43', category: 'Branchentechnik', question: 'Was ist AHT?', answer: 'Average Handling Time: Die durchschnittliche Bearbeitungszeit eines Anrufs (Gespräch + Nachbearbeitung).' },
  { id: 'lf4-f44', category: 'Branchentechnik', question: 'Was ist der Servicelevel?', answer: 'Der Prozentsatz der Anrufe, die innerhalb einer definierten Zeit (z. B. 20 Sek.) angenommen wurden.' },
  { id: 'lf4-f45', category: 'Branchentechnik', question: 'Was ist ACW?', answer: 'After Call Work: Die Zeit für die Nachbearbeitung eines Gesprächs.' },
  { id: 'lf4-f46', category: 'Branchentechnik', question: 'Was ist Lost Call / Abandoned Call?', answer: 'Ein Anruf, bei dem der Anrufer in der Warteschleife auflegt, bevor er mit einem Agenten verbunden wurde.' },
  { id: 'lf4-f47', category: 'Branchentechnik', question: 'Was ist Echtzeitmanagement?', answer: 'Die kurzfristige Steuerung des Call Centers basierend auf aktuellen Kennzahlen (z. B. Warteschleife).' },
  { id: 'lf4-f48', category: 'Branchentechnik', question: 'Was ist ein Chatbot?', answer: 'Ein textbasiertes Dialogsystem zur automatisierten Beantwortung von Kundenanfragen.' },
  { id: 'lf4-f49', category: 'Branchentechnik', question: 'Was ist Customer Centricity?', answer: 'Die konsequente Ausrichtung aller Unternehmensprozesse auf die Bedürfnisse des Kunden.' },
  { id: 'lf4-f50', category: 'Branchentechnik', question: 'Was ist Overdial?', answer: 'Das Anwählen von mehr Leitungen als Agenten verfügbar sind beim Predictive Dialing.' },
  { id: 'lf4-f51', category: 'Software', question: 'Was ist die Hauptaufgabe eines Betriebssystems?', answer: 'Die Verwaltung der Hardware und die Bereitstellung einer Schnittstelle für Anwendungsprogramme.' },
  { id: 'lf4-f52', category: 'Software', question: 'Nenne drei Beispiele für Betriebssysteme.', answer: 'Windows, macOS, Linux, Android, iOS.' },
  { id: 'lf4-f53', category: 'Software', question: 'Was ist Standardsoftware?', answer: 'Software, die für eine Vielzahl von Anwendern mit ähnlichen Anforderungen entwickelt wurde (z. B. MS Office).' },
  { id: 'lf4-f54', category: 'Software', question: 'Was ist Individualsoftware?', answer: 'Speziell für die individuellen Bedürfnisse eines einzelnen Kunden entwickelte Software.' },
  { id: 'lf4-f55', category: 'Software', question: 'Was ist OCR?', answer: 'Optical Character Recognition: Texterkennung in gescannten Dokumenten oder Bildern.' },
  { id: 'lf4-f56', category: 'Software', question: 'Was ist Cloud-Computing?', answer: 'Die Bereitstellung von IT-Infrastruktur (Speicher, Software) über das Internet als Dienstleistung.' },
  { id: 'lf4-f57', category: 'Software', question: 'Was ist ein Vorteil von Cloud-Computing?', answer: 'Hohe Flexibilität, Skalierbarkeit und keine hohen Investitionskosten für eigene Server.' },
  { id: 'lf4-f58', category: 'Software', question: 'Was ist ein Nachteil von Cloud-Computing?', answer: 'Abhängigkeit vom Internetanbieter und potenzielle Datenschutzrisiken.' },
  { id: 'lf4-f59', category: 'Software', question: 'Was ist PEP-Software?', answer: 'Personaleinsatzplanung: Software zur Schichtplanung basierend auf dem erwarteten Arbeitsaufkommen.' },
  { id: 'lf4-f60', category: 'Software', question: 'Was ist Workforce Management?', answer: 'Ein ganzheitlicher Ansatz zur Optimierung des Personaleinsatzes (Forecasting, Planung, Steuerung).' },
  { id: 'lf4-f61', category: 'Software', question: 'Was ist Forecasting?', answer: 'Die Vorhersage des künftigen Arbeitsaufkommens basierend auf historischen Daten.' },
  { id: 'lf4-f62', category: 'Software', question: 'Was ist ein CRM-System?', answer: 'Customer Relationship Management: Software zur zentralen Verwaltung aller Kundenbeziehungen und -daten.' },
  { id: 'lf4-f63', category: 'Software', question: 'Was ist eine Wissensdatenbank?', answer: 'Ein zentrales System zur Speicherung und Bereitstellung von Fachwissen für die Agenten.' },
  { id: 'lf4-f64', category: 'Software', question: 'Was ist ERP-Software?', answer: 'Enterprise Resource Planning: Software zur Steuerung aller Geschäftsprozesse (Finanzen, Personal, Logistik).' },
  { id: 'lf4-f65', category: 'Software', question: 'Was ist ein GUI?', answer: 'Graphical User Interface: Die grafische Benutzeroberfläche einer Software.' },
  { id: 'lf4-f66', category: 'Netze/Dienste', question: 'Was ist ein Mehrwertdienst?', answer: 'Ein Dienst, der über die reine Sprachübertragung hinausgeht und einen zusätzlichen Nutzen bietet.' },
  { id: 'lf4-f67', category: 'Netze/Dienste', question: 'Was ist eine 0800-Nummer?', answer: 'Freecall: Der Anruf ist für den Anrufer kostenlos; das Unternehmen trägt die Kosten.' },
  { id: 'lf4-f68', category: 'Netze/Dienste', question: 'Was ist eine 0180-Nummer?', answer: 'Service-Rufnummer mit geteilten Kosten zwischen Anrufer und Unternehmen.' },
  { id: 'lf4-f69', category: 'Netze/Dienste', question: 'Was ist eine 0900-Nummer?', answer: 'Premium-Dienst: Hohe Kosten für den Anrufer zur Abrechnung von Inhalten oder Beratung.' },
  { id: 'lf4-f70', category: 'Netze/Dienste', question: 'Was ist eine Vanity-Rufnummer?', answer: 'Eine Rufnummer, die als Wort merkbar ist (z. B. 0800-MANUS).' },
  { id: 'lf4-f71', category: 'Netze/Dienste', question: 'Was ist die Inverssuche?', answer: 'Die Suche nach dem Namen und der Anschrift eines Teilnehmers anhand seiner Rufnummer.' },
  { id: 'lf4-f72', category: 'Netze/Dienste', question: 'Was ist ein Junk-Call?', answer: 'Ein unerwünschter Werbeanruf oder Belästigungsanruf.' },
  { id: 'lf4-f73', category: 'Netze/Dienste', question: 'Nenne zwei Suchoperatoren für die Websuche.', answer: 'Anführungszeichen für exakte Phrasen ("...") und das Minuszeichen zum Ausschluss von Begriffen (-).' },
  { id: 'lf4-f74', category: 'Netze/Dienste', question: 'Was regelt der Verbraucherschutz bei Servicerufnummern?', answer: 'U. a. die Pflicht zur Preisansage und die kostenlose Warteschleife bei bestimmten Gassen.' },
  { id: 'lf4-f75', category: 'Netze/Dienste', question: 'Was ist eine Flatrate?', answer: 'Ein Pauschaltarif für die unbegrenzte Nutzung eines Dienstes (z. B. Telefonie oder Internet).' },
  { id: 'lf4-f76', category: 'Datenbanken', question: 'Was ist eine relationale Datenbank?', answer: 'Eine Datenbank, in der Daten in Tabellen gespeichert sind, die über Schlüssel miteinander verknüpft werden.' },
  { id: 'lf4-f77', category: 'Datenbanken', question: 'Was ist ein Primärschlüssel?', answer: 'Ein Feld, das jeden Datensatz in einer Tabelle eindeutig identifiziert.' },
  { id: 'lf4-f78', category: 'Datenbanken', question: 'Was ist ein Fremdschlüssel?', answer: 'Ein Feld, das auf den Primärschlüssel einer anderen Tabelle verweist, um eine Beziehung herzustellen.' },
  { id: 'lf4-f79', category: 'Datenbanken', question: 'Was ist eine Redundanz?', answer: 'Die mehrfache Speicherung derselben Information in einer Datenbank.' },
  { id: 'lf4-f80', category: 'Datenbanken', question: 'Was ist Datenkonsistenz?', answer: 'Die Widerspruchsfreiheit der Daten in einer Datenbank.' },
  { id: 'lf4-f81', category: 'Datenbanken', question: 'Was ist Normalisierung?', answer: 'Der Prozess der Strukturierung einer Datenbank, um Redundanzen zu minimieren und Konsistenz zu wahren.' },
  { id: 'lf4-f82', category: 'Datenbanken', question: 'Was ist ein Datensatz?', answer: 'Die Zusammenfassung aller Datenfelder zu einem Objekt (eine Zeile in der Tabelle).' },
  { id: 'lf4-f83', category: 'Datenbanken', question: 'Was ist ein Datenfeld?', answer: 'Die kleinste Einheit einer Datenbank (eine Spalte in der Tabelle).' },
  { id: 'lf4-f84', category: 'Datenbanken', question: 'Wofür steht SQL?', answer: 'Structured Query Language: Die Standardsprache zur Abfrage und Verwaltung relationaler Datenbanken.' },
  { id: 'lf4-f85', category: 'Datenbanken', question: 'Was ist eine 1:n-Beziehung?', answer: 'Ein Datensatz aus Tabelle A ist mit beliebig vielen Datensätzen aus Tabelle B verknüpft (z. B. ein Kunde - viele Bestellungen).' },
  { id: 'lf4-f86', category: 'Sicherheit/Schutz', question: 'Was ist Datensicherheit?', answer: 'Technische und organisatorische Maßnahmen zum Schutz von Daten vor Verlust oder Missbrauch.' },
  { id: 'lf4-f87', category: 'Sicherheit/Schutz', question: 'Was ist Datenschutz?', answer: 'Der Schutz des Einzelnen vor Beeinträchtigungen seines Persönlichkeitsrechts durch den Umgang mit seinen Daten.' },
  { id: 'lf4-f88', category: 'Sicherheit/Schutz', question: 'Was sind personenbezogene Daten?', answer: 'Alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen.' },
  { id: 'lf4-f89', category: 'Sicherheit/Schutz', question: 'Was ist die DSGVO?', answer: 'Datenschutz-Grundverordnung: Die EU-weite Regelung zum Schutz personenbezogener Daten.' },
  { id: 'lf4-f90', category: 'Sicherheit/Schutz', question: 'Was besagt der Grundsatz der Zweckbindung?', answer: 'Daten dürfen nur für den Zweck verarbeitet werden, für den sie erhoben wurden.' },
  { id: 'lf4-f91', category: 'Sicherheit/Schutz', question: 'Was ist Datenminimierung?', answer: 'Es dürfen nur so viele Daten erhoben werden, wie für den Zweck unbedingt erforderlich sind.' },
  { id: 'lf4-f92', category: 'Sicherheit/Schutz', question: 'Was ist eine Firewall?', answer: 'Ein Sicherheitssystem, das den Datenverkehr zwischen Netzwerken überwacht und filtert.' },
  { id: 'lf4-f93', category: 'Sicherheit/Schutz', question: 'Was ist Phishing?', answer: 'Der Versuch, über gefälschte E-Mails oder Webseiten an sensible Daten zu gelangen.' },
  { id: 'lf4-f94', category: 'Sicherheit/Schutz', question: 'Was ist Ransomware?', answer: 'Schadsoftware, die Daten verschlüsselt und Lösegeld für die Entschlüsselung fordert.' },
  { id: 'lf4-f95', category: 'Sicherheit/Schutz', question: 'Was ist ein Backup?', answer: 'Eine Sicherungskopie von Daten zur Wiederherstellung im Falle eines Verlusts.' },
  { id: 'lf4-f96', category: 'Sicherheit/Schutz', question: 'Was ist das Recht auf Vergessenwerden?', answer: 'Das Recht des Betroffenen auf Löschung seiner personenbezogenen Daten unter bestimmten Bedingungen.' },
  { id: 'lf4-f97', category: 'Sicherheit/Schutz', question: 'Was ist ein Datenschutzbeauftragter?', answer: 'Eine Person, die im Unternehmen die Einhaltung der Datenschutzvorschriften überwacht.' },
  { id: 'lf4-f98', category: 'Sicherheit/Schutz', question: 'Was ist eine Auftragsverarbeitung?', answer: 'Wenn ein Dienstleister personenbezogene Daten im Auftrag und nach Weisung eines Verantwortlichen verarbeitet.' },
  { id: 'lf4-f99', category: 'Sicherheit/Schutz', question: 'Was ist die Integrität von Daten?', answer: 'Die Unversehrtheit und Korrektheit der Daten (Schutz vor unbefugter Änderung).' },
  { id: 'lf4-f100', category: 'Sicherheit/Schutz', question: 'Was ist die Verfügbarkeit von Daten?', answer: 'Sicherstellung, dass Daten bei Bedarf für berechtigte Nutzer zugänglich sind.' }
];

// 50 Quiz Questions for Lernfeld 4
export const quizQuestions: QuizQuestion[] = [
  {
    id: 'lf4-q1',
    question: 'Ein Unternehmen möchte eine Telefonkonferenz mit 20 externen Teilnehmern durchführen. Welches Verfahren ist am effizientesten?',
    type: 'multiple-choice',
    options: ['Interne Drei-Wege-Konferenz der TK-Anlage', 'Dial-in-Verfahren über einen Konferenzanbieter', 'Nacheinander alle Teilnehmer einzeln anrufen', 'Nutzung eines Anrufbeantworters'],
    correctAnswer: 'Dial-in-Verfahren über einen Konferenzanbieter',
    explanation: 'Für große Gruppen mit externen Teilnehmern bieten Konferenzanbieter die nötige Kapazität und Stabilität.',
    difficulty: 'easy',
    category: 'Kommunikationsmedien'
  },
  {
    id: 'lf4-q2',
    question: 'Welche Funktion eines UMS-Systems ermöglicht es, ein Fax direkt als PDF im E-Mail-Posteingang zu erhalten?',
    type: 'multiple-choice',
    options: ['Text-to-Speech', 'Speech-to-Text', 'Fax-to-Mail', 'Mail-to-Fax'],
    correctAnswer: 'Fax-to-Mail',
    explanation: 'Fax-to-Mail konvertiert eingehende Faxsignale in ein digitales Dokument (PDF) und versendet dieses per E-Mail.',
    difficulty: 'easy',
    category: 'Kommunikationsmedien'
  },
  {
    id: 'lf4-q3',
    question: 'Was ist der entscheidende Vorteil eines WAN gegenüber einem LAN?',
    type: 'multiple-choice',
    options: ['Höhere Übertragungsgeschwindigkeit', 'Geringere Kosten', 'Größere räumliche Ausdehnung', 'Einfachere Verkabelung'],
    correctAnswer: 'Größere räumliche Ausdehnung',
    explanation: 'Ein WAN (Wide Area Network) verbindet Standorte über große Distanzen (Städte, Länder), während ein LAN lokal begrenzt ist.',
    difficulty: 'easy',
    category: 'Kommunikationsmedien'
  },
  {
    id: 'lf4-q4',
    question: 'Welches Protokoll wird primär für den Empfang von E-Mails verwendet, wenn diese auf dem Server verbleiben und synchronisiert werden sollen?',
    type: 'multiple-choice',
    options: ['SMTP', 'POP3', 'IMAP', 'FTP'],
    correctAnswer: 'IMAP',
    explanation: 'IMAP synchronisiert den Posteingang zwischen Server und Client, während POP3 die Mails meist herunterlädt und lokal speichert.',
    difficulty: 'medium',
    category: 'Kommunikationsmedien'
  },
  {
    id: 'lf4-q5',
    question: 'Ein Mitarbeiter möchte von zu Hause aus sicher auf das interne Firmennetzwerk zugreifen. Welche Technik muss er nutzen?',
    type: 'multiple-choice',
    options: ['Öffentliches WLAN', 'VPN-Tunnel', 'Einfache HTTP-Verbindung', 'Bluetooth'],
    correctAnswer: 'VPN-Tunnel',
    explanation: 'Ein VPN (Virtual Private Network) stellt eine verschlüsselte und sichere Verbindung über das öffentliche Internet her.',
    difficulty: 'medium',
    category: 'Kommunikationsmedien'
  },
  {
    id: 'lf4-q6',
    question: 'Welches System im Call Center erkennt anhand der gewählten Nummer (DNIS), für welches Projekt ein Anruf eingeht?',
    type: 'multiple-choice',
    options: ['IVR', 'CTI', 'ACD', 'Dialer'],
    correctAnswer: 'ACD',
    explanation: 'Die ACD nutzt den DNIS-Dienst der TK-Anlage, um den Anruf dem richtigen Projekt-Team zuzuordnen.',
    difficulty: 'medium',
    category: 'Branchentechnik'
  },
  {
    id: 'lf4-q7',
    question: 'Was ist das Hauptziel von Skill-Based Routing?',
    type: 'multiple-choice',
    options: ['Gleichmäßige Auslastung aller Agenten', 'Kürzestmögliche Wartezeit für alle Kunden', 'Verbindung des Kunden mit dem am besten qualifizierten Agenten', 'Vermeidung von Telefonkosten'],
    correctAnswer: 'Verbindung des Kunden mit dem am besten qualifizierten Agenten',
    explanation: 'Skill-Based Routing priorisiert die fachliche Eignung des Agenten für das spezifische Kundenanliegen.',
    difficulty: 'medium',
    category: 'Branchentechnik'
  },
  {
    id: 'lf4-q8',
    question: 'Welche Kennzahl beschreibt die durchschnittliche Zeit, die ein Agent für ein Gespräch inklusive der Nachbearbeitung benötigt?',
    type: 'multiple-choice',
    options: ['ASA', 'AHT', 'Servicelevel', 'Occupancy'],
    correctAnswer: 'AHT',
    explanation: 'AHT steht für Average Handling Time (Gesprächszeit + Nachbearbeitungszeit).',
    difficulty: 'medium',
    category: 'Branchentechnik'
  },
  {
    id: 'lf4-q9',
    question: 'Ein Kunde wird in einer IVR aufgefordert, seine Kundennummer einzugeben. Welches Ziel verfolgt das Unternehmen damit primär?',
    type: 'multiple-choice',
    options: ['Unterhaltung des Kunden', 'Identifikation und Vorqualifizierung zur Zeitersparnis beim Agenten', 'Erhöhung der Telefongebühren', 'Vermeidung von Datenschutzprüfungen'],
    correctAnswer: 'Identifikation und Vorqualifizierung zur Zeitersparnis beim Agenten',
    explanation: 'Durch die Vorab-Eingabe kann CTI die Kundenmaske bereits beim Agenten öffnen (Screen Pop-up).',
    difficulty: 'easy',
    category: 'Branchentechnik'
  },
  {
    id: 'lf4-q10',
    question: 'In welchem Dialer-Modus wird dem Agenten der Datensatz angezeigt, bevor die Anwahl gestartet wird?',
    type: 'multiple-choice',
    options: ['Power Dialing', 'Predictive Dialing', 'Preview Dialing', 'Automatic Dialing'],
    correctAnswer: 'Preview Dialing',
    explanation: 'Preview Dialing ermöglicht dem Agenten eine Vorbereitung auf das Gespräch.',
    difficulty: 'easy',
    category: 'Branchentechnik'
  },
  {
    id: 'lf4-q11',
    question: 'Was ist ein "Silent Call" und warum ist er problematisch?',
    type: 'open',
    correctAnswer: 'Ein Anruf, bei dem der Kunde abhebt, aber kein Agent frei ist. Es führt zu Kundenfrustration und ist rechtlich kritisch.',
    explanation: 'Silent Calls entstehen meist durch eine zu hohe Overdial-Quote im Predictive Dialing.',
    difficulty: 'hard',
    category: 'Branchentechnik'
  },
  {
    id: 'lf4-q12',
    question: 'Welcher Vorteil ergibt sich aus der Nutzung eines Omnichannel-Ansatzes gegenüber Multi-Channel?',
    type: 'multiple-choice',
    options: ['Weniger Mitarbeiter werden benötigt', 'Die Kanäle sind nahtlos verknüpft und bieten eine gemeinsame Historie', 'Es gibt nur noch einen Kommunikationskanal', 'Die Technik ist billiger'],
    correctAnswer: 'Die Kanäle sind nahtlos verknüpft und bieten eine gemeinsame Historie',
    explanation: 'Omnichannel vermeidet Datensilos und ermöglicht einen konsistenten Kundenservice über alle Kanäle hinweg.',
    difficulty: 'medium',
    category: 'Branchentechnik'
  },
  {
    id: 'lf4-q13',
    question: 'Was versteht man unter "Call Blending"?',
    type: 'multiple-choice',
    options: ['Das Mischen von Musik in der Warteschleife', 'Der automatische Wechsel von Agenten zwischen Inbound und Outbound', 'Das gleichzeitige Telefonieren mit zwei Kunden', 'Die Verschlüsselung von Gesprächen'],
    correctAnswer: 'Der automatische Wechsel von Agenten zwischen Inbound und Outbound',
    explanation: 'Call Blending optimiert die Auslastung, indem Outbound-Agenten bei hohem Inbound-Aufkommen unterstützen und umgekehrt.',
    difficulty: 'hard',
    category: 'Branchentechnik'
  },
  {
    id: 'lf4-q14',
    question: 'Welche Kennzahl gibt an, wie viel Prozent der Anrufe innerhalb einer definierten Zeitvorgabe angenommen wurden?',
    type: 'multiple-choice',
    options: ['Erreichbarkeit', 'Servicelevel', 'Abbruchquote', 'AHT'],
    correctAnswer: 'Servicelevel',
    explanation: 'Der Servicelevel ist eine zentrale Qualitätskennzahl (z. B. 80/20 Regel: 80% der Anrufe in 20 Sek.).',
    difficulty: 'medium',
    category: 'Branchentechnik'
  },
  {
    id: 'lf4-q15',
    question: 'Was ist die Hauptaufgabe einer Firewall?',
    type: 'multiple-choice',
    options: ['Viren löschen', 'Datenverkehr filtern und unberechtigte Zugriffe blockieren', 'Internet beschleunigen', 'Backups erstellen'],
    correctAnswer: 'Datenverkehr filtern und unberechtigte Zugriffe blockieren',
    explanation: 'Die Firewall fungiert als Schutzwall zwischen einem sicheren internen und einem unsicheren externen Netzwerk.',
    difficulty: 'easy',
    category: 'Sicherheit/Schutz'
  },
  {
    id: 'lf4-q16',
    question: 'Warum ist die "Zweckbindung" im Datenschutz so wichtig?',
    type: 'multiple-choice',
    options: ['Damit Daten nicht verloren gehen', 'Damit Daten nur für den Grund genutzt werden, für den sie erhoben wurden', 'Damit Daten immer aktuell sind', 'Damit Daten verschlüsselt werden'],
    correctAnswer: 'Damit Daten nur für den Grund genutzt werden, für den sie erhoben wurden',
    explanation: 'Die Zweckbindung verhindert, dass Kundendaten ohne neue Einwilligung für andere Zwecke (z. B. Werbung) missbraucht werden.',
    difficulty: 'medium',
    category: 'Sicherheit/Schutz'
  },
  {
    id: 'lf4-q17',
    question: 'Was ist ein Primärschlüssel in einer Datenbank?',
    type: 'multiple-choice',
    options: ['Ein besonders sicheres Passwort', 'Ein Feld zur eindeutigen Identifikation eines Datensatzes', 'Ein Verweis auf eine andere Tabelle', 'Der Name der Datenbank'],
    correctAnswer: 'Ein Feld zur eindeutigen Identifikation eines Datensatzes',
    explanation: 'Jeder Datensatz muss über einen Primärschlüssel (z. B. ID oder Kundennummer) eindeutig unterscheidbar sein.',
    difficulty: 'easy',
    category: 'Datenbanken'
  },
  {
    id: 'lf4-q18',
    question: 'Was versteht man unter "Redundanz" in einer Datenbank und warum sollte sie vermieden werden?',
    type: 'open',
    correctAnswer: 'Mehrfache Speicherung gleicher Daten. Führt zu unnötigem Speicherverbrauch und Inkonsistenzen bei Änderungen.',
    explanation: 'Normalisierung ist der Prozess zur Vermeidung von Redundanzen.',
    difficulty: 'hard',
    category: 'Datenbanken'
  },
  {
    id: 'lf4-q19',
    question: 'Welche Rufnummerngasse ist für den Anrufer aus allen deutschen Netzen immer kostenfrei?',
    type: 'multiple-choice',
    options: ['0180-5', '0900', '0800', '0137'],
    correctAnswer: '0800',
    explanation: '0800-Nummern sind Freecall-Nummern, bei denen der Angerufene die Kosten trägt.',
    difficulty: 'easy',
    category: 'Netze/Dienste'
  },
  {
    id: 'lf4-q20',
    question: 'Was regelt der Verbraucherschutz bei Warteschleifen in kostenpflichtigen Servicerufnummern?',
    type: 'multiple-choice',
    options: ['Warteschleifen dürfen maximal 10 Minuten dauern', 'Die Warteschleife muss für den Anrufer kostenfrei sein', 'Es muss immer Musik gespielt werden', 'Warteschleifen sind verboten'],
    correctAnswer: 'Die Warteschleife muss für den Anrufer kostenfrei sein',
    explanation: 'Seit 2013 müssen Warteschleifen bei vielen Sonderrufnummern für den Anrufer kostenfrei sein.',
    difficulty: 'medium',
    category: 'Netze/Dienste'
  },
  {
    id: 'lf4-q21',
    question: 'Was ist "Social Engineering"?',
    type: 'multiple-choice',
    options: ['Ein technischer Hack einer Firewall', 'Die Manipulation von Menschen, um an Passwörter oder Daten zu gelangen', 'Die Erstellung von sozialen Netzwerken', 'Ein Update für das Betriebssystem'],
    correctAnswer: 'Die Manipulation von Menschen, um an Passwörter oder Daten zu gelangen',
    explanation: 'Social Engineering nutzt menschliche Eigenschaften wie Hilfsbereitschaft oder Autoritätshörigkeit aus.',
    difficulty: 'medium',
    category: 'Sicherheit/Schutz'
  },
  {
    id: 'lf4-q22',
    question: 'Welches Recht hat ein Betroffener laut DSGVO, wenn seine Daten fehlerhaft gespeichert sind?',
    type: 'multiple-choice',
    options: ['Recht auf Löschung', 'Recht auf Berichtigung', 'Recht auf Datenübertragbarkeit', 'Widerspruchsrecht'],
    correctAnswer: 'Recht auf Berichtigung',
    explanation: 'Der Betroffene kann verlangen, dass unrichtige personenbezogene Daten unverzüglich berichtigt werden.',
    difficulty: 'easy',
    category: 'Sicherheit/Schutz'
  },
  {
    id: 'lf4-q23',
    question: 'Was ist ein "Forecasting" im Workforce Management?',
    type: 'multiple-choice',
    options: ['Die Wettervorhersage für das Call Center', 'Die Vorhersage des künftigen Anrufvolumens basierend auf historischen Daten', 'Die Berechnung der Gehälter', 'Die Überwachung der Agenten in Echtzeit'],
    correctAnswer: 'Die Vorhersage des künftigen Anrufvolumens basierend auf historischen Daten',
    explanation: 'Forecasting ist die Basis für eine bedarfsgerechte Personaleinsatzplanung.',
    difficulty: 'medium',
    category: 'Software'
  },
  {
    id: 'lf4-q24',
    question: 'Welche Software wandelt gescannten Text in bearbeitbare digitale Daten um?',
    type: 'multiple-choice',
    options: ['CRM', 'ERP', 'OCR', 'DMS'],
    correctAnswer: 'OCR',
    explanation: 'OCR steht für Optical Character Recognition (Optische Zeichenerkennung).',
    difficulty: 'easy',
    category: 'Software'
  },
  {
    id: 'lf4-q25',
    question: 'Was ist ein wesentlicher Nachteil von Cloud-Computing?',
    type: 'multiple-choice',
    options: ['Hohe Anschaffungskosten', 'Abhängigkeit von einer stabilen Internetverbindung', 'Geringe Speicherkapazität', 'Schwierige Bedienung'],
    correctAnswer: 'Abhängigkeit von einer stabilen Internetverbindung',
    explanation: 'Ohne Internetzugriff kann auf Cloud-Dienste und -Daten nicht zugegriffen werden.',
    difficulty: 'easy',
    category: 'Software'
  },
  {
    id: 'lf4-q26',
    question: 'Was ist der Unterschied zwischen einem Switch und einem Router?',
    type: 'open',
    correctAnswer: 'Ein Switch verbindet Geräte innerhalb eines LANs; ein Router verbindet verschiedene Netzwerke (z. B. LAN mit WAN).',
    explanation: 'Der Router entscheidet über den Weg der Datenpakete zwischen Netzwerken.',
    difficulty: 'hard',
    category: 'Kommunikationsmedien'
  },
  {
    id: 'lf4-q27',
    question: 'Welches Protokoll wird für die Übertragung von Dateien zwischen Computern im Netzwerk genutzt?',
    type: 'multiple-choice',
    options: ['HTTP', 'SMTP', 'FTP', 'DNS'],
    correctAnswer: 'FTP',
    explanation: 'FTP steht für File Transfer Protocol.',
    difficulty: 'easy',
    category: 'Kommunikationsmedien'
  },
  {
    id: 'lf4-q28',
    question: 'Was versteht man unter "Datenminimierung" laut DSGVO?',
    type: 'multiple-choice',
    options: ['Daten so klein wie möglich komprimieren', 'Nur so viele Daten erheben, wie für den Zweck unbedingt erforderlich sind', 'Daten nach 30 Tagen löschen', 'Nur anonyme Daten speichern'],
    correctAnswer: 'Nur so viele Daten erheben, wie für den Zweck unbedingt erforderlich sind',
    explanation: 'Es dürfen keine Daten "auf Vorrat" erhoben werden, die für den Prozess nicht nötig sind.',
    difficulty: 'medium',
    category: 'Sicherheit/Schutz'
  },
  {
    id: 'lf4-q29',
    question: 'Welche Kennzahl in der ACD gibt an, wie viele Anrufer aufgelegt haben, bevor sie einen Agenten erreicht haben?',
    type: 'multiple-choice',
    options: ['Servicelevel', 'Abbruchquote (Lost Calls)', 'Belegungsgrad', 'AHT'],
    correctAnswer: 'Abbruchquote (Lost Calls)',
    explanation: 'Eine hohe Abbruchquote deutet auf zu lange Wartezeiten oder zu wenig Personal hin.',
    difficulty: 'medium',
    category: 'Branchentechnik'
  },
  {
    id: 'lf4-q30',
    question: 'Was ist ein "Fremdschlüssel" in einer relationalen Datenbank?',
    type: 'multiple-choice',
    options: ['Ein Schlüssel für externe Mitarbeiter', 'Ein Feld, das auf den Primärschlüssel einer anderen Tabelle verweist', 'Ein verlorener Schlüssel', 'Ein Feld zur Verschlüsselung'],
    correctAnswer: 'Ein Feld, das auf den Primärschlüssel einer anderen Tabelle verweist',
    explanation: 'Fremdschlüssel stellen die Beziehungen zwischen den Tabellen her.',
    difficulty: 'medium',
    category: 'Datenbanken'
  },
  {
    id: 'lf4-q31',
    question: 'Was ist der Unterschied zwischen einem Betriebssystem und Anwendungssoftware?',
    type: 'open',
    correctAnswer: 'Das Betriebssystem verwaltet die Hardware; Anwendungssoftware dient der Lösung spezifischer Benutzeraufgaben (z. B. Briefe schreiben).',
    explanation: 'Ohne Betriebssystem kann keine Anwendungssoftware laufen.',
    difficulty: 'medium',
    category: 'Software'
  },
  {
    id: 'lf4-q32',
    question: 'Welche Gefahr besteht bei der Nutzung von "Public Clouds" für sensible Kundendaten?',
    type: 'multiple-choice',
    options: ['Die Daten werden gelöscht', 'Der Speicherort der Daten ist oft unklar (außerhalb der EU)', 'Die Cloud ist zu langsam', 'Es gibt keine Backups'],
    correctAnswer: 'Der Speicherort der Daten ist oft unklar (außerhalb der EU)',
    explanation: 'Für DSGVO-Konformität ist der Speicherort (idealerweise EU) entscheidend.',
    difficulty: 'hard',
    category: 'Software'
  },
  {
    id: 'lf4-q33',
    question: 'Was ist eine "Inverssuche" bei Telefonnummern?',
    type: 'multiple-choice',
    options: ['Suche nach einer Nummer im Ausland', 'Suche nach Name/Anschrift anhand einer bekannten Nummer', 'Suche nach einer Nummer anhand des Namens', 'Sperren einer Nummer'],
    correctAnswer: 'Suche nach Name/Anschrift anhand einer bekannten Nummer',
    explanation: 'Die Inverssuche ist das Gegenteil der klassischen Suche im Telefonbuch.',
    difficulty: 'easy',
    category: 'Netze/Dienste'
  },
  {
    id: 'lf4-q34',
    question: 'Welche Rufnummerngasse wird für Massenverkehrsdienste (z. B. TV-Votings) genutzt?',
    type: 'multiple-choice',
    options: ['0800', '0180', '0137', '0900'],
    correctAnswer: '0137',
    explanation: '0137-Nummern sind für sehr viele gleichzeitige Anrufe in kurzer Zeit ausgelegt.',
    difficulty: 'medium',
    category: 'Netze/Dienste'
  },
  {
    id: 'lf4-q35',
    question: 'Was ist "Phishing"?',
    type: 'open',
    correctAnswer: 'Der Versuch, über gefälschte E-Mails oder Webseiten an sensible Daten (Passwörter, PINs) zu gelangen.',
    explanation: 'Oft werden täuschend echte Kopien von Bank-Webseiten genutzt.',
    difficulty: 'medium',
    category: 'Sicherheit/Schutz'
  },
  {
    id: 'lf4-q36',
    question: 'Welcher Grundsatz der DSGVO besagt, dass Datenverarbeitung für den Betroffenen nachvollziehbar sein muss?',
    type: 'multiple-choice',
    options: ['Transparenz', 'Richtigkeit', 'Integrität', 'Datenminimierung'],
    correctAnswer: 'Transparenz',
    explanation: 'Der Betroffene muss wissen, wer was warum mit seinen Daten macht.',
    difficulty: 'easy',
    category: 'Sicherheit/Schutz'
  },
  {
    id: 'lf4-q37',
    question: 'Was ist ein "Cookie" im Webbrowser?',
    type: 'multiple-choice',
    options: ['Ein Virus', 'Eine kleine Textdatei zur Speicherung von Nutzerinformationen', 'Ein Bildschirmschoner', 'Ein Hardware-Teil'],
    correctAnswer: 'Eine kleine Textdatei zur Speicherung von Nutzerinformationen',
    explanation: 'Cookies werden genutzt, um Nutzer wiederzuerkennen oder Warenkörbe zu speichern.',
    difficulty: 'easy',
    category: 'Kommunikationsmedien'
  },
  {
    id: 'lf4-q38',
    question: 'Was ist der Unterschied zwischen einem Intranet und einem Extranet?',
    type: 'open',
    correctAnswer: 'Intranet ist nur für interne Mitarbeiter; Extranet öffnet Teile des Intranets für externe Partner.',
    explanation: 'Beide nutzen Internet-Technologien, unterscheiden sich aber im Benutzerkreis.',
    difficulty: 'medium',
    category: 'Kommunikationsmedien'
  },
  {
    id: 'lf4-q39',
    question: 'Was ist "Predictive Dialing"?',
    type: 'multiple-choice',
    options: ['Manuelles Wählen', 'Vorausschauendes Wählen durch einen Algorithmus', 'Wählen nach dem Zufallsprinzip', 'Wählen nur bei Vollmond'],
    correctAnswer: 'Vorausschauendes Wählen durch einen Algorithmus',
    explanation: 'Das System berechnet die Wahrscheinlichkeit, dass ein Agent frei wird und ein Kunde abhebt.',
    difficulty: 'medium',
    category: 'Branchentechnik'
  },
  {
    id: 'lf4-q40',
    question: 'Welche Hardwarekomponente ist für die dauerhafte Speicherung von Daten im Computer zuständig?',
    type: 'multiple-choice',
    options: ['Arbeitsspeicher (RAM)', 'Prozessor (CPU)', 'Festplatte / SSD', 'Grafikkarte'],
    correctAnswer: 'Festplatte / SSD',
    explanation: 'RAM ist flüchtig; Festplatten/SSDs speichern Daten permanent.',
    difficulty: 'easy',
    category: 'Software'
  },
  {
    id: 'lf4-q41',
    question: 'Was ist eine "Normalisierung" in der Datenbankentwicklung?',
    type: 'multiple-choice',
    options: ['Daten löschen', 'Strukturierung zur Vermeidung von Redundanzen', 'Daten verschlüsseln', 'Daten sortieren'],
    correctAnswer: 'Strukturierung zur Vermeidung von Redundanzen',
    explanation: 'Normalisierung führt zu einer sauberen, effizienten Tabellenstruktur.',
    difficulty: 'hard',
    category: 'Datenbanken'
  },
  {
    id: 'lf4-q42',
    question: 'Welche Strafe droht Unternehmen bei schweren Verstößen gegen die DSGVO?',
    type: 'multiple-choice',
    options: ['Maximal 1.000 Euro', 'Bis zu 20 Mio. Euro oder 4% des weltweiten Jahresumsatzes', 'Nur eine Verwarnung', 'Gefängnis für alle Mitarbeiter'],
    correctAnswer: 'Bis zu 20 Mio. Euro oder 4% des weltweiten Jahresumsatzes',
    explanation: 'Die DSGVO sieht sehr hohe Bußgelder zur Abschreckung vor.',
    difficulty: 'medium',
    category: 'Sicherheit/Schutz'
  },
  {
    id: 'lf4-q43',
    question: 'Was ist ein "Trojaner"?',
    type: 'multiple-choice',
    options: ['Ein nützliches Programm', 'Schadsoftware, die sich als nützliche Anwendung tarnt', 'Ein Hardware-Schutz', 'Ein schneller Computer'],
    correctAnswer: 'Schadsoftware, die sich als nützliche Anwendung tarnt',
    explanation: 'Trojaner verstecken ihre schädliche Funktion hinter einer harmlosen Fassade.',
    difficulty: 'easy',
    category: 'Sicherheit/Schutz'
  },
  {
    id: 'lf4-q44',
    question: 'Was ist der "Servicelevel" 80/20?',
    type: 'open',
    correctAnswer: '80% der Anrufe werden innerhalb von 20 Sekunden angenommen.',
    explanation: 'Dies ist ein gängiger Zielwert im Call Center Management.',
    difficulty: 'medium',
    category: 'Branchentechnik'
  },
  {
    id: 'lf4-q45',
    question: 'Was ist "Unified Communications" (UC)?',
    type: 'multiple-choice',
    options: ['Nur E-Mail', 'Integration von Nachrichten und Echtzeit-Kommunikation (Präsenz, Chat)', 'Ein neues Telefonmodell', 'Ein Funkstandard'],
    correctAnswer: 'Integration von Nachrichten und Echtzeit-Kommunikation (Präsenz, Chat)',
    explanation: 'UC geht über UMS hinaus und vernetzt alle Kommunikationswege in Echtzeit.',
    difficulty: 'medium',
    category: 'Kommunikationsmedien'
  },
  {
    id: 'lf4-q46',
    question: 'Welches Gerät verbindet Computer innerhalb eines LANs und lernt, an welchen Port Daten gesendet werden müssen?',
    type: 'multiple-choice',
    options: ['Hub', 'Switch', 'Router', 'Modem'],
    correctAnswer: 'Switch',
    explanation: 'Ein Switch arbeitet effizienter als ein Hub, da er Daten gezielt weiterleitet.',
    difficulty: 'medium',
    category: 'Kommunikationsmedien'
  },
  {
    id: 'lf4-q47',
    question: 'Was ist "Datenintegrität"?',
    type: 'multiple-choice',
    options: ['Daten sind immer verfügbar', 'Daten sind korrekt und wurden nicht unbefugt verändert', 'Daten sind verschlüsselt', 'Daten sind anonym'],
    correctAnswer: 'Daten sind korrekt und wurden nicht unbefugt verändert',
    explanation: 'Integrität stellt sicher, dass man sich auf die Richtigkeit der Daten verlassen kann.',
    difficulty: 'hard',
    category: 'Sicherheit/Schutz'
  },
  {
    id: 'lf4-q48',
    question: 'Was ist eine "SQL-Injection"?',
    type: 'multiple-choice',
    options: ['Ein Datenbank-Update', 'Ein Angriff, bei dem schädlicher Code in Datenbankabfragen eingeschleust wird', 'Eine neue Datenbank-Sprache', 'Ein Backup-Verfahren'],
    correctAnswer: 'Ein Angriff, bei dem schädlicher Code in Datenbankabfragen eingeschleust wird',
    explanation: 'Angreifer versuchen so, Daten auszuspähen oder zu manipulieren.',
    difficulty: 'hard',
    category: 'Datenbanken'
  },
  {
    id: 'lf4-q49',
    question: 'Was ist der Unterschied zwischen einer 0180-6 und einer 0180-7 Nummer?',
    type: 'open',
    correctAnswer: '0180-6 hat einen Festpreis pro Anruf; 0180-7 hat die ersten 30 Sekunden kostenlos, danach Festpreis.',
    explanation: 'Die Kostenstrukturen sind in der Telekommunikations-Nummerierungsverordnung festgelegt.',
    difficulty: 'hard',
    category: 'Netze/Dienste'
  },
  {
    id: 'lf4-q50',
    question: 'Welches Ziel hat die "Datensparsamkeit"?',
    type: 'multiple-choice',
    options: ['Speicherplatz sparen', 'So wenig personenbezogene Daten wie möglich zu erheben', 'Geld sparen', 'Schnelleres Arbeiten'],
    correctAnswer: 'So wenig personenbezogene Daten wie möglich zu erheben',
    explanation: 'Datensparsamkeit (heute Datenminimierung) ist ein zentraler Pfeiler des Datenschutzes.',
    difficulty: 'easy',
    category: 'Sicherheit/Schutz'
  }
];
