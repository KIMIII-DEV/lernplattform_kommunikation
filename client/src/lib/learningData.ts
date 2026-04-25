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
- **Multi-Channel:** Kanäle existieren parallel, aber isoliert.
- **Omnichannel:** Kanäle sind vernetzt, gemeinsame Historie.

**Vorteile:**
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
  { id: 'lf4-f60', category: 'Software', question: 'Was ist Workforce Management?', answer: 'Der gesamte Prozess der bedarfsgerechten Planung und Steuerung des Personaleinsatzes.' },
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

// 100 Quiz Questions for Lernfeld 4
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
    correctAnswer: 'Ein Switch verbindet Geräte innerhalb eines LANs; ein Router verbindet verschiedene Netzwerke miteinander.',
    explanation: 'Router arbeiten auf einer höheren Netzwerkebene als Switches.',
    difficulty: 'medium',
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
  },
  {
    id: 'lf4-q51',
    question: 'Was ist der Unterschied zwischen einer ANI und einer DNIS?',
    type: 'open',
    correctAnswer: 'ANI identifiziert den Anrufer (Wer ruft an?); DNIS identifiziert die gewählte Nummer (Welches Projekt?).',
    explanation: 'Beide Dienste sind essenziell für die Steuerung in der ACD.',
    difficulty: 'medium',
    category: 'Branchentechnik'
  },
  {
    id: 'lf4-q52',
    question: 'Was versteht man unter "Occupancy" im Call Center?',
    type: 'multiple-choice',
    options: ['Die Anzahl der belegten Parkplätze', 'Der Belegungsgrad der Agenten (Sprechzeit + Nachbearbeitung im Verhältnis zur Arbeitszeit)', 'Die Anzahl der Kunden in der Warteschleife', 'Die Raumtemperatur'],
    correctAnswer: 'Der Belegungsgrad der Agenten (Sprechzeit + Nachbearbeitung im Verhältnis zur Arbeitszeit)',
    explanation: 'Occupancy zeigt, wie effizient die Zeit der Agenten genutzt wird.',
    difficulty: 'hard',
    category: 'Branchentechnik'
  },
  {
    id: 'lf4-q53',
    question: 'Welche Aufgabe hat ein "Domain Name System" (DNS)?',
    type: 'multiple-choice',
    options: ['E-Mails versenden', 'IP-Adressen in Domainnamen übersetzen (und umgekehrt)', 'Webseiten speichern', 'Viren blockieren'],
    correctAnswer: 'IP-Adressen in Domainnamen übersetzen (und umgekehrt)',
    explanation: 'DNS ist das "Telefonbuch" des Internets.',
    difficulty: 'easy',
    category: 'Kommunikationsmedien'
  },
  {
    id: 'lf4-q54',
    question: 'Was ist der Unterschied zwischen SaaS, PaaS und IaaS im Cloud-Computing?',
    type: 'open',
    correctAnswer: 'SaaS: Software als Dienst; PaaS: Plattform für Entwickler; IaaS: Infrastruktur (Server, Speicher) als Dienst.',
    explanation: 'Die Modelle unterscheiden sich im Grad der Verantwortung des Nutzers.',
    difficulty: 'hard',
    category: 'Software'
  },
  {
    id: 'lf4-q55',
    question: 'Was ist eine "1:1-Beziehung" in einer Datenbank?',
    type: 'multiple-choice',
    options: ['Ein Datensatz ist mit genau einem anderen Datensatz verknüpft', 'Alle Daten sind gleich', 'Es gibt nur eine Tabelle', 'Zwei Agenten teilen sich einen PC'],
    correctAnswer: 'Ein Datensatz ist mit genau einem anderen Datensatz verknüpft',
    explanation: 'Beispiel: Ein Mitarbeiter hat genau einen Firmenwagen-Datensatz.',
    difficulty: 'medium',
    category: 'Datenbanken'
  },
  {
    id: 'lf4-q56',
    question: 'Was ist der "Privacy Shield" (bzw. dessen Nachfolger)?',
    type: 'multiple-choice',
    options: ['Ein Bildschirmschutz', 'Ein Abkommen zum Datenaustausch zwischen EU und USA', 'Ein Antivirenprogramm', 'Ein VPN-Anbieter'],
    correctAnswer: 'Ein Abkommen zum Datenaustausch zwischen EU und USA',
    explanation: 'Solche Abkommen regeln das Datenschutzniveau beim Transfer in Drittstaaten.',
    difficulty: 'hard',
    category: 'Sicherheit/Schutz'
  },
  {
    id: 'lf4-q57',
    question: 'Was ist "Biometrie" im Kontext der Datensicherheit?',
    type: 'multiple-choice',
    options: ['Die Messung der Luftfeuchtigkeit', 'Identifikation anhand körperlicher Merkmale (Fingerabdruck, Iris)', 'Ein mathematisches Verfahren', 'Die Analyse von Viren'],
    correctAnswer: 'Identifikation anhand körperlicher Merkmale (Fingerabdruck, Iris)',
    explanation: 'Biometrische Verfahren gelten als sehr sicher für die Zugangskontrolle.',
    difficulty: 'easy',
    category: 'Sicherheit/Schutz'
  },
  {
    id: 'lf4-q58',
    question: 'Was ist eine "Warteschleifenansage" laut Gesetz?',
    type: 'multiple-choice',
    options: ['Sie muss immer Werbung enthalten', 'Sie muss über die voraussichtliche Wartezeit informieren (bei kostenpflichtigen Nummern)', 'Sie darf maximal 10 Sekunden dauern', 'Sie ist verboten'],
    correctAnswer: 'Sie muss über die voraussichtliche Wartezeit informieren (bei kostenpflichtigen Nummern)',
    explanation: 'Der Verbraucherschutz schreibt Transparenz bei der Wartezeit vor.',
    difficulty: 'medium',
    category: 'Netze/Dienste'
  },
  {
    id: 'lf4-q59',
    question: 'Was ist "Unified Desktop"?',
    type: 'multiple-choice',
    options: ['Ein Schreibtisch für alle Mitarbeiter', 'Eine Softwareoberfläche, die alle Kanäle und Tools für den Agenten bündelt', 'Ein Betriebssystem von Microsoft', 'Ein großer Monitor'],
    correctAnswer: 'Eine Softwareoberfläche, die alle Kanäle und Tools für den Agenten bündelt',
    explanation: 'Ein Unified Desktop reduziert die Komplexität für den Agenten im Omnichannel.',
    difficulty: 'medium',
    category: 'Branchentechnik'
  },
  {
    id: 'lf4-q60',
    question: 'Was ist der Unterschied zwischen einer "Voll-Sicherung" und einer "inkrementellen Sicherung"?',
    type: 'open',
    correctAnswer: 'Voll-Sicherung: Alle Daten werden kopiert; Inkrementell: Nur geänderte Daten seit der letzten Sicherung.',
    explanation: 'Inkrementelle Sicherungen sparen Zeit und Speicherplatz.',
    difficulty: 'hard',
    category: 'Sicherheit/Schutz'
  },
  {
    id: 'lf4-q61',
    question: 'Was ist "Malware"?',
    type: 'multiple-choice',
    options: ['Gute Software', 'Sammelbegriff für Schadsoftware (Viren, Würmer, etc.)', 'Software für Maler', 'Ein Hardware-Defekt'],
    correctAnswer: 'Sammelbegriff für Schadsoftware (Viren, Würmer, etc.)',
    explanation: 'Malware steht für "Malicious Software".',
    difficulty: 'easy',
    category: 'Sicherheit/Schutz'
  },
  {
    id: 'lf4-q62',
    question: 'Was ist ein "Datenverarbeitungsverzeichnis" (VVT)?',
    type: 'multiple-choice',
    options: ['Ein Telefonbuch', 'Eine Dokumentation aller Verarbeitungstätigkeiten personenbezogener Daten im Unternehmen', 'Ein Inhaltsverzeichnis des Fachbuchs', 'Eine Liste aller Computer'],
    correctAnswer: 'Eine Dokumentation aller Verarbeitungstätigkeiten personenbezogener Daten im Unternehmen',
    explanation: 'Das VVT ist eine Pflichtdokumentation laut DSGVO.',
    difficulty: 'hard',
    category: 'Sicherheit/Schutz'
  },
  {
    id: 'lf4-q63',
    question: 'Was ist "Click-to-Chat"?',
    type: 'multiple-choice',
    options: ['Ein Spiel', 'Das Starten eines Chats per Klick auf einen Button auf der Webseite', 'Ein Werbebanner', 'Eine Tastaturfunktion'],
    correctAnswer: 'Das Starten eines Chats per Klick auf einen Button auf der Webseite',
    explanation: 'Click-to-Chat ist ein wichtiger Kanal im Omnichannel-Service.',
    difficulty: 'easy',
    category: 'Branchentechnik'
  },
  {
    id: 'lf4-q64',
    question: 'Was ist "Speech Analytics"?',
    type: 'multiple-choice',
    options: ['Sprachunterricht für Agenten', 'Automatisierte Analyse von Gesprächsinhalten zur Qualitätsverbesserung', 'Ein Hörtest', 'Die Messung der Lautstärke'],
    correctAnswer: 'Automatisierte Analyse von Gesprächsinhalten zur Qualitätsverbesserung',
    explanation: 'Speech Analytics hilft, Trends und Kundenbedürfnisse in Gesprächen zu erkennen.',
    difficulty: 'hard',
    category: 'Branchentechnik'
  },
  {
    id: 'lf4-q65',
    question: 'Was ist "BYOD" (Bring Your Own Device)?',
    type: 'multiple-choice',
    options: ['Ein neues Handy', 'Die Nutzung privater Endgeräte für geschäftliche Zwecke', 'Ein Sicherheitsstandard', 'Ein Cloud-Anbieter'],
    correctAnswer: 'Die Nutzung privater Endgeräte für geschäftliche Zwecke',
    explanation: 'BYOD stellt hohe Anforderungen an die IT-Sicherheit und den Datenschutz.',
    difficulty: 'medium',
    category: 'Software'
  },
  {
    id: 'lf4-q66',
    question: 'Was ist eine "m:n-Beziehung" in einer Datenbank?',
    type: 'open',
    correctAnswer: 'Viele Datensätze aus Tabelle A sind mit vielen Datensätzen aus Tabelle B verknüpft (z. B. Studenten und Kurse).',
    explanation: 'm:n-Beziehungen werden meist über eine Zwischentabelle aufgelöst.',
    difficulty: 'hard',
    category: 'Datenbanken'
  },
  {
    id: 'lf4-q67',
    question: 'Was ist "Two-Factor-Authentication" (2FA)?',
    type: 'multiple-choice',
    options: ['Zwei Passwörter', 'Anmeldung mit zwei verschiedenen Faktoren (z. B. Passwort + SMS-Code)', 'Zwei Benutzerkonten', 'Ein doppeltes Backup'],
    correctAnswer: 'Anmeldung mit zwei verschiedenen Faktoren (z. B. Passwort + SMS-Code)',
    explanation: '2FA erhöht die Sicherheit von Benutzerkonten erheblich.',
    difficulty: 'medium',
    category: 'Sicherheit/Schutz'
  },
  {
    id: 'lf4-q68',
    question: 'Was ist "Data Mining"?',
    type: 'multiple-choice',
    options: ['Daten löschen', 'Systematische Analyse großer Datenmengen zur Erkennung von Mustern', 'Daten in einer Mine speichern', 'Daten verschlüsseln'],
    correctAnswer: 'Systematische Analyse großer Datenmengen zur Erkennung von Mustern',
    explanation: 'Data Mining wird oft im Marketing zur Zielgruppenanalyse genutzt.',
    difficulty: 'hard',
    category: 'Datenbanken'
  },
  {
    id: 'lf4-q69',
    question: 'Was ist ein "Proxy-Server"?',
    type: 'multiple-choice',
    options: ['Ein schneller Server', 'Ein Stellvertreter-Server, der Anfragen zwischen Client und Zielserver vermittelt', 'Ein Backup-Server', 'Ein E-Mail-Server'],
    correctAnswer: 'Ein Stellvertreter-Server, der Anfragen zwischen Client und Zielserver vermittelt',
    explanation: 'Proxies können zur Sicherheit, Anonymisierung oder zum Caching genutzt werden.',
    difficulty: 'hard',
    category: 'Kommunikationsmedien'
  },
  {
    id: 'lf4-q70',
    question: 'Was ist "Responsive Design"?',
    type: 'multiple-choice',
    options: ['Ein schnelles Design', 'Anpassung der Webseitendarstellung an die Bildschirmgröße des Endgeräts', 'Ein buntes Design', 'Ein Design für Drucker'],
    correctAnswer: 'Anpassung der Webseitendarstellung an die Bildschirmgröße des Endgeräts',
    explanation: 'Responsive Design ist essenziell für die mobile Nutzung von Webseiten.',
    difficulty: 'easy',
    category: 'Software'
  },
  {
    id: 'lf4-q71',
    question: 'Was ist "VoIP-Jitter"?',
    type: 'multiple-choice',
    options: ['Ein Tanz', 'Schwankungen in der Paketlaufzeit bei der Internet-Telefonie (führt zu Sprachstörungen)', 'Ein lautes Geräusch', 'Ein Verbindungsabbruch'],
    correctAnswer: 'Schwankungen in der Paketlaufzeit bei der Internet-Telefonie (führt zu Sprachstörungen)',
    explanation: 'Jitter beeinträchtigt die Qualität von Echtzeit-Kommunikation.',
    difficulty: 'hard',
    category: 'Kommunikationsmedien'
  },
  {
    id: 'lf4-q72',
    question: 'Was ist "Social Media Monitoring"?',
    type: 'multiple-choice',
    options: ['Das Posten von Bildern', 'Die systematische Beobachtung von Erwähnungen einer Marke in sozialen Medien', 'Das Sperren von Nutzern', 'Das Erstellen von Profilen'],
    correctAnswer: 'Die systematische Beobachtung von Erwähnungen einer Marke in sozialen Medien',
    explanation: 'Monitoring hilft Unternehmen, auf Kundenfeedback im Netz zu reagieren.',
    difficulty: 'medium',
    category: 'Branchentechnik'
  },
  {
    id: 'lf4-q73',
    question: 'Was ist "Hot Desking"?',
    type: 'multiple-choice',
    options: ['Ein kaputter Schreibtisch', 'Mitarbeiter haben keinen festen Arbeitsplatz, sondern wählen täglich einen freien Platz', 'Ein sehr beliebter Arbeitsplatz', 'Arbeiten in der Sonne'],
    correctAnswer: 'Mitarbeiter haben keinen festen Arbeitsplatz, sondern wählen täglich einen freien Platz',
    explanation: 'Hot Desking spart Bürofläche und fördert die Flexibilität.',
    difficulty: 'easy',
    category: 'Software'
  },
  {
    id: 'lf4-q74',
    question: 'Was ist "Big Data"?',
    type: 'open',
    correctAnswer: 'Sehr große, komplexe und schnelllebige Datenmengen, die mit herkömmlichen Methoden schwer auszuwerten sind.',
    explanation: 'Big Data wird durch die 3 Vs charakterisiert: Volume, Velocity, Variety.',
    difficulty: 'medium',
    category: 'Datenbanken'
  },
  {
    id: 'lf4-q75',
    question: 'Was ist "End-to-End-Encryption" (E2EE)?',
    type: 'multiple-choice',
    options: ['Verschlüsselung nur am Anfang', 'Verschlüsselung, bei der nur Sender und Empfänger die Nachricht lesen können', 'Verschlüsselung der Hardware', 'Verschlüsselung des Internets'],
    correctAnswer: 'Verschlüsselung, bei der nur Sender und Empfänger die Nachricht lesen können',
    explanation: 'E2EE bietet ein sehr hohes Maß an Vertraulichkeit.',
    difficulty: 'medium',
    category: 'Sicherheit/Schutz'
  },
  {
    id: 'lf4-q76',
    question: 'Was ist "Dark Data"?',
    type: 'multiple-choice',
    options: ['Böse Daten', 'Daten, die im Unternehmen erhoben, aber nicht genutzt oder analysiert werden', 'Gelöschte Daten', 'Verschlüsselte Daten'],
    correctAnswer: 'Daten, die im Unternehmen erhoben, aber nicht genutzt oder analysiert werden',
    explanation: 'Dark Data birgt oft ungenutzte Potenziale, aber auch Risiken.',
    difficulty: 'hard',
    category: 'Datenbanken'
  },
  {
    id: 'lf4-q77',
    question: 'Was ist "Gamification" im Call Center?',
    type: 'multiple-choice',
    options: ['Spielen während der Arbeitszeit', 'Anwendung von Spielelementen in der Arbeitswelt zur Motivationssteigerung', 'Ein neues Computerspiel', 'Die Überwachung der Agenten'],
    correctAnswer: 'Anwendung von Spielelementen in der Arbeitswelt zur Motivationssteigerung',
    explanation: 'Beispiele sind Ranglisten oder Abzeichen für erreichte Ziele.',
    difficulty: 'medium',
    category: 'Software'
  },
  {
    id: 'lf4-q78',
    question: 'Was ist "Cloud-Native"?',
    type: 'multiple-choice',
    options: ['Ein Cloud-Anbieter', 'Anwendungen, die speziell für den Betrieb in der Cloud entwickelt wurden', 'Ein Cloud-Nutzer', 'Ein Cloud-Server'],
    correctAnswer: 'Anwendungen, die speziell für den Betrieb in der Cloud entwickelt wurden',
    explanation: 'Cloud-Native Apps nutzen die Vorteile der Cloud (Skalierbarkeit) optimal aus.',
    difficulty: 'hard',
    category: 'Software'
  },
  {
    id: 'lf4-q79',
    question: 'Was ist "Data Governance"?',
    type: 'multiple-choice',
    options: ['Die Regierung der Daten', 'Regelwerk zur Sicherstellung der Datenqualität und -sicherheit im Unternehmen', 'Ein Datenbank-Tool', 'Ein Backup-Plan'],
    correctAnswer: 'Regelwerk zur Sicherstellung der Datenqualität und -sicherheit im Unternehmen',
    explanation: 'Governance legt Verantwortlichkeiten und Prozesse für den Datenumgang fest.',
    difficulty: 'hard',
    category: 'Datenbanken'
  },
  {
    id: 'lf4-q80',
    question: 'Was ist "Shadow IT" (Schatten-IT)?',
    type: 'open',
    correctAnswer: 'IT-Systeme oder Software, die von Fachabteilungen ohne Wissen und Genehmigung der zentralen IT genutzt werden.',
    explanation: 'Schatten-IT birgt hohe Sicherheits- und Compliance-Risiken.',
    difficulty: 'hard',
    category: 'Software'
  },
  {
    id: 'lf4-q81',
    question: 'Was ist "Zero Trust"?',
    type: 'multiple-choice',
    options: ['Niemandem vertrauen', 'Sicherheitskonzept, bei dem jeder Zugriff (intern/extern) immer verifiziert werden muss', 'Ein kaputtes System', 'Ein Passwort-Manager'],
    correctAnswer: 'Sicherheitskonzept, bei dem jeder Zugriff (intern/extern) immer verifiziert werden muss',
    explanation: 'Zero Trust geht davon aus, dass kein Netzwerk per se sicher ist.',
    difficulty: 'hard',
    category: 'Sicherheit/Schutz'
  },
  {
    id: 'lf4-q82',
    question: 'Was ist "Edge Computing"?',
    type: 'multiple-choice',
    options: ['Rechnen am Rand', 'Datenverarbeitung direkt am Entstehungsort (nahe am Endgerät) statt in der zentralen Cloud', 'Ein scharfes Design', 'Ein langsamer Server'],
    correctAnswer: 'Datenverarbeitung direkt am Entstehungsort (nahe am Endgerät) statt in der zentralen Cloud',
    explanation: 'Edge Computing reduziert Latenzzeiten und Bandbreitenbedarf.',
    difficulty: 'hard',
    category: 'Kommunikationsmedien'
  },
  {
    id: 'lf4-q83',
    question: 'Was ist "Low-Code"?',
    type: 'multiple-choice',
    options: ['Wenig Code', 'Softwareentwicklung mit minimalem Programmieraufwand durch grafische Oberflächen', 'Schlechter Code', 'Ein Programmierfehler'],
    correctAnswer: 'Softwareentwicklung mit minimalem Programmieraufwand durch grafische Oberflächen',
    explanation: 'Low-Code ermöglicht Fachabteilungen die Erstellung eigener kleiner Anwendungen.',
    difficulty: 'medium',
    category: 'Software'
  },
  {
    id: 'lf4-q84',
    question: 'Was ist "Data Sovereignty" (Datensouveränität)?',
    type: 'multiple-choice',
    options: ['Die Herrschaft über Daten', 'Die volle Kontrolle einer Person oder Organisation über ihre eigenen Daten', 'Ein Datenbank-Standard', 'Ein Cloud-Modell'],
    correctAnswer: 'Die volle Kontrolle einer Person oder Organisation über ihre eigenen Daten',
    explanation: 'Datensouveränität ist ein zentrales Ziel in der digitalen Strategie der EU.',
    difficulty: 'medium',
    category: 'Sicherheit/Schutz'
  },
  {
    id: 'lf4-q85',
    question: 'Was ist "Machine Learning"?',
    type: 'open',
    correctAnswer: 'Ein Teilbereich der KI, bei dem Systeme aus Daten lernen und Muster erkennen, ohne explizit programmiert zu sein.',
    explanation: 'Machine Learning wird z. B. für Chatbots oder Forecasting genutzt.',
    difficulty: 'medium',
    category: 'Software'
  },
  {
    id: 'lf4-q86',
    question: 'Was ist "Blockchain"?',
    type: 'multiple-choice',
    options: ['Eine Kette aus Blöcken', 'Dezentrale, fälschungssichere Datenbanktechnologie', 'Ein neues Internet', 'Ein Hardware-Schutz'],
    correctAnswer: 'Dezentrale, fälschungssichere Datenbanktechnologie',
    explanation: 'Blockchain wird oft für Kryptowährungen oder sichere Verträge genutzt.',
    difficulty: 'hard',
    category: 'Datenbanken'
  },
  {
    id: 'lf4-q87',
    question: 'Was ist "Digital Twin" (Digitaler Zwilling)?',
    type: 'multiple-choice',
    options: ['Ein zweiter Computer', 'Ein digitales Abbild eines physischen Objekts oder Prozesses', 'Ein Backup', 'Ein Avatar'],
    correctAnswer: 'Ein digitales Abbild eines physischen Objekts oder Prozesses',
    explanation: 'Digitale Zwillinge werden zur Simulation und Optimierung genutzt.',
    difficulty: 'hard',
    category: 'Software'
  },
  {
    id: 'lf4-q88',
    question: 'Was ist "DevOps"?',
    type: 'multiple-choice',
    options: ['Ein Programmierer', 'Zusammenarbeit von Softwareentwicklung (Dev) und IT-Betrieb (Ops)', 'Ein Betriebssystem', 'Ein Cloud-Anbieter'],
    correctAnswer: 'Zusammenarbeit von Softwareentwicklung (Dev) und IT-Betrieb (Ops)',
    explanation: 'DevOps zielt auf schnellere und stabilere Software-Releases ab.',
    difficulty: 'hard',
    category: 'Software'
  },
  {
    id: 'lf4-q89',
    question: 'Was ist "Microservices"?',
    type: 'multiple-choice',
    options: ['Kleine Dienste', 'Architekturstil, bei dem eine Anwendung aus vielen kleinen, unabhängigen Diensten besteht', 'Ein langsamer Computer', 'Ein kleiner Server'],
    correctAnswer: 'Architekturstil, bei dem eine Anwendung aus vielen kleinen, unabhängigen Diensten besteht',
    explanation: 'Microservices erhöhen die Skalierbarkeit und Wartbarkeit von Software.',
    difficulty: 'hard',
    category: 'Software'
  },
  {
    id: 'lf4-q90',
    question: 'Was ist "Containerisierung" (z. B. Docker)?',
    type: 'open',
    correctAnswer: 'Verpacken von Software und deren Abhängigkeiten in isolierte Einheiten (Container) für einen konsistenten Betrieb.',
    explanation: 'Container laufen unabhängig von der zugrunde liegenden Infrastruktur.',
    difficulty: 'hard',
    category: 'Software'
  },
  {
    id: 'lf4-q91',
    question: 'Was ist "API" (Application Programming Interface)?',
    type: 'multiple-choice',
    options: ['Ein Programm', 'Eine Schnittstelle zur Kommunikation zwischen verschiedenen Softwareanwendungen', 'Ein Hardware-Teil', 'Ein Passwort'],
    correctAnswer: 'Eine Schnittstelle zur Kommunikation zwischen verschiedenen Softwareanwendungen',
    explanation: 'APIs ermöglichen den Datenaustausch zwischen Systemen (z. B. CRM und Telefonanlage).',
    difficulty: 'medium',
    category: 'Software'
  },
  {
    id: 'lf4-q92',
    question: 'Was ist "Open Source"?',
    type: 'multiple-choice',
    options: ['Offene Tür', 'Software, deren Quellcode frei zugänglich und veränderbar ist', 'Kostenlose Software', 'Ein Sicherheitsrisiko'],
    correctAnswer: 'Software, deren Quellcode frei zugänglich und veränderbar ist',
    explanation: 'Beispiele für Open Source sind Linux oder der Firefox-Browser.',
    difficulty: 'easy',
    category: 'Software'
  },
  {
    id: 'lf4-q93',
    question: 'Was ist "Agile Softwareentwicklung"?',
    type: 'multiple-choice',
    options: ['Schnelles Tippen', 'Iterative Entwicklung in kleinen Schritten mit hoher Flexibilität (z. B. Scrum)', 'Programmieren im Stehen', 'Ein neues Tool'],
    correctAnswer: 'Iterative Entwicklung in kleinen Schritten mit hoher Flexibilität (z. B. Scrum)',
    explanation: 'Agile Methoden reagieren schnell auf Anforderungsänderungen.',
    difficulty: 'medium',
    category: 'Software'
  },
  {
    id: 'lf4-q94',
    question: 'Was ist "Technical Debt" (Technische Schulden)?',
    type: 'multiple-choice',
    options: ['Geldnot der IT', 'Langfristige Kosten durch schnelle, unsaubere Lösungen in der Softwareentwicklung', 'Ein Kredit für Hardware', 'Ein Programmierfehler'],
    correctAnswer: 'Langfristige Kosten durch schnelle, unsaubere Lösungen in der Softwareentwicklung',
    explanation: 'Technische Schulden müssen später mit hohem Aufwand "zurückgezahlt" werden.',
    difficulty: 'hard',
    category: 'Software'
  },
  {
    id: 'lf4-q95',
    question: 'Was ist "User Experience" (UX)?',
    type: 'open',
    correctAnswer: 'Das gesamte Erlebnis eines Nutzers bei der Interaktion mit einem Produkt oder Dienst.',
    explanation: 'Gute UX führt zu höherer Zufriedenheit und Effizienz.',
    difficulty: 'easy',
    category: 'Software'
  },
  {
    id: 'lf4-q96',
    question: 'Was ist "Accessibility" (Barrierefreiheit) in der IT?',
    type: 'multiple-choice',
    options: ['Zugang zum Internet', 'Gestaltung von IT-Systemen, sodass sie auch von Menschen mit Behinderungen genutzt werden können', 'Ein offenes Büro', 'Ein Passwort-Manager'],
    correctAnswer: 'Gestaltung von IT-Systemen, sodass sie auch von Menschen mit Behinderungen genutzt werden können',
    explanation: 'Barrierefreiheit ist oft gesetzlich vorgeschrieben (z. B. BITV).',
    difficulty: 'medium',
    category: 'Software'
  },
  {
    id: 'lf4-q97',
    question: 'Was ist "Compliance" in der IT?',
    type: 'multiple-choice',
    options: ['Zusammenarbeit', 'Einhaltung von gesetzlichen, internen und vertraglichen Regelungen', 'Ein Software-Update', 'Ein Hardware-Standard'],
    correctAnswer: 'Einhaltung von gesetzlichen, internen und vertraglichen Regelungen',
    explanation: 'IT-Compliance umfasst u. a. Datenschutz und Lizenzmanagement.',
    difficulty: 'medium',
    category: 'Sicherheit/Schutz'
  },
  {
    id: 'lf4-q98',
    question: 'Was ist "Disaster Recovery"?',
    type: 'multiple-choice',
    options: ['Ein Unfall', 'Prozesse zur Wiederherstellung der IT-Infrastruktur nach einem schwerwiegenden Ausfall', 'Ein Backup-Tool', 'Ein Virenscan'],
    correctAnswer: 'Prozesse zur Wiederherstellung der IT-Infrastruktur nach einem schwerwiegenden Ausfall',
    explanation: 'Disaster Recovery ist Teil des Business Continuity Managements.',
    difficulty: 'hard',
    category: 'Sicherheit/Schutz'
  },
  {
    id: 'lf4-q99',
    question: 'Was ist "Multi-Factor-Authentication" (MFA)?',
    type: 'multiple-choice',
    options: ['Viele Passwörter', 'Sicherung durch mehr als zwei Faktoren', 'Ein Benutzerkonto für viele Personen', 'Ein Cloud-Modell'],
    correctAnswer: 'Sicherung durch mehr als zwei Faktoren',
    explanation: 'MFA ist die Erweiterung von 2FA für noch höhere Sicherheit.',
    difficulty: 'medium',
    category: 'Sicherheit/Schutz'
  },
  {
    id: 'lf4-q100',
    question: 'Was ist das Ziel der "IHK 1.0" Vorbereitung?',
    type: 'multiple-choice',
    options: ['Bestehen mit 50%', 'Exzellente Beherrschung aller prüfungsrelevanten Inhalte für die Bestnote', 'Nur die Flashcards lernen', 'Schnell fertig werden'],
    correctAnswer: 'Exzellente Beherrschung aller prüfungsrelevanten Inhalte für die Bestnote',
    explanation: 'Dieses System ist darauf ausgelegt, Sie zur Bestnote zu führen.',
    difficulty: 'easy',
    category: 'Prüfungsfokus'
  }
];
    { id: "lf4-f26", question: "Was ist der Hauptvorteil von IVR für das Unternehmen?", answer: "Automatisierung von Standardanfragen (Self-Service) und Vorqualifizierung für effizientes Routing." },
    { id: "lf4-f27", question: "Nenne ein Risiko bei schlecht gestalteten IVR-Menüs.", answer: "Hohe Abbruchquoten durch Frustration der Kunden bei zu vielen Menüebenen." },
    { id: "lf4-f28", question: "Was bedeutet 'Screen Pop-up' im CTI-Kontext?", answer: "Das automatische Öffnen der Kundenmaske am PC bei einem eingehenden Anruf (basierend auf ANI)." },
    { id: "lf4-f29", question: "Was ist 'Click-to-Dial'?", answer: "Das Starten eines Anrufs direkt per Mausklick aus einer Softwareanwendung (z. B. CRM)." },
    { id: "lf4-f30", question: "Welche Schnittstelle wird oft für CTI-Anwendungen genutzt?", answer: "TAPI (Telephony Application Programming Interface)." },
    { id: "lf4-f31", question: "Was ist die Hauptaufgabe eines Outbound-Dialers?", answer: "Automatisierung des Wählvorgangs und Filterung von Nicht-Erreichbarkeiten (Besetzt, AB)." },
    { id: "lf4-f32", question: "Erkläre 'Preview Dialing'.", answer: "Der Agent sieht den Datensatz vorab und startet den Wählvorgang manuell." },
    { id: "lf4-f33", question: "Was ist 'Power Dialing'?", answer: "Das System wählt automatisch die nächste Nummer, sobald ein Agent frei wird (ohne Vorschauzeit)." },
    { id: "lf4-f34", question: "Wie funktioniert 'Predictive Dialing'?", answer: "Ein Algorithmus wählt mehr Nummern als Agenten frei sind, basierend auf statistischer Wahrscheinlichkeit." },
    { id: "lf4-f35", question: "Was ist ein 'Silent Call'?", answer: "Ein Anruf, bei dem der Kunde abhebt, aber kein Agent zur Übernahme frei ist (Problem bei Predictive Dialing)." },
    { id: "lf4-f36", question: "Was ist die 'Overdial-Quote'?", answer: "Der Prozentsatz der Anrufe, die über die Kapazität der freien Agenten hinaus angewählt werden." },
    { id: "lf4-f37", question: "Definiere 'Omnichannel'.", answer: "Nahtlose Verknüpfung aller Kommunikationskanäle mit einheitlicher Historie und Datenbasis." },
    { id: "lf4-f38", question: "Was unterscheidet Multi-Channel von Omnichannel?", answer: "Bei Multi-Channel stehen die Kanäle isoliert nebeneinander (Datensilos); bei Omnichannel sind sie integriert." },
    { id: "lf4-f39", question: "Was ist ein 'Chatbot'?", answer: "Ein textbasiertes Dialogsystem zur automatisierten Beantwortung von Kundenanfragen." },
    { id: "lf4-f40", question: "Was bedeutet 'Customer Centricity'?", answer: "Die konsequente Ausrichtung aller Unternehmensprozesse auf die Bedürfnisse des Kunden." },
    { id: "lf4-f41", question: "Nenne zwei Vorteile von VoIP.", answer: "Kosteneinsparung durch Nutzung der Datenleitung und hohe Flexibilität (ortsungebunden)." },
    { id: "lf4-f42", question: "Was ist die Hauptaufgabe eines Betriebssystems?", answer: "Verwaltung der Hardware und Bereitstellung einer Schnittstelle für Anwendungssoftware." },
    { id: "lf4-f43", question: "Nenne drei Beispiele für Betriebssysteme.", answer: "Windows, macOS, Linux, Android, iOS." },
    { id: "lf4-f44", question: "Was ist 'Standardsoftware'?", answer: "Software für einen breiten Markt mit allgemeinen Funktionen (z. B. MS Office)." },
    { id: "lf4-f45", question: "Was ist 'Individualsoftware'?", answer: "Speziell für die Anforderungen eines einzelnen Kunden entwickelte Software." },
    { id: "lf4-f46", question: "Wofür steht die Abkürzung OCR?", answer: "Optical Character Recognition (Optische Zeichenerkennung)." },
    { id: "lf4-f47", question: "Was ist der Nutzen von OCR im Dialogmarketing?", answer: "Automatisierte Digitalisierung von gedruckten Dokumenten (z. B. Antwortkarten) zur Weiterverarbeitung." },
    { id: "lf4-f48", question: "Was ist ein 'Workforce-Management-System' (PEP)?", answer: "Software zur bedarfsorientierten Planung des Personaleinsatzes basierend auf Forecasts." },
    { id: "lf4-f49", question: "Nenne einen Vorteil von Cloud-Computing.", answer: "Skalierbarkeit, geringe Investitionskosten für Hardware, ortsunabhängiger Zugriff." },
    { id: "lf4-f50", question: "Nenne ein Risiko von Cloud-Computing.", answer: "Abhängigkeit vom Anbieter und potenzielle Datenschutzrisiken bei Speicherung im Ausland." },
    { id: "lf4-f51", question: "Was ist ein 'Mehrwertdienst'?", answer: "Ein Dienst, der über die reine Sprachübertragung hinausgeht und einen zusätzlichen Nutzen bietet." },
    { id: "lf4-f52", question: "Welche Kosten fallen für den Anrufer bei einer 0800-Nummer an?", answer: "Keine, der Anruf ist aus allen deutschen Netzen kostenlos." },
    { id: "lf4-f53", question: "Was ist das Merkmal einer 0180-6 Nummer?", answer: "Festpreis pro Anruf (z. B. 20 Cent aus dem Festnetz)." },
    { id: "lf4-f54", question: "Was ist das Merkmal einer 0180-7 Nummer?", answer: "Die ersten 30 Sekunden sind kostenlos, danach gilt ein Festpreis pro Anruf." },
    { id: "lf4-f55", question: "Wofür werden 0900-Nummern typischerweise genutzt?", answer: "Für kostenpflichtige Beratung, Unterhaltung oder Premium-Support." },
    { id: "lf4-f56", question: "Was ist eine 'Vanity-Rufnummer'?", answer: "Eine Rufnummer, die als Wort merkbar ist (z. B. 0800-HOTLINE)." },
    { id: "lf4-f57", question: "Wie ist die Warteschleife bei kostenpflichtigen Nummern geregelt?", answer: "Die Warteschleife muss für den Anrufer grundsätzlich kostenlos sein." },
    { id: "lf4-f58", question: "Was ist eine 'Inverssuche'?", answer: "Die Suche nach dem Namen und der Anschrift eines Teilnehmers anhand der Rufnummer." },
    { id: "lf4-f59", question: "Nenne zwei Suchoperatoren für die Internetsuche.", answer: "Anführungszeichen für exakte Phrasen, Minuszeichen zum Ausschluss von Begriffen." },
    { id: "lf4-f60", question: "Was ist ein 'Junk-Call'?", answer: "Unerwünschte Werbeanrufe oder Belästigungsanrufe." },
    { id: "lf4-f61", question: "Definiere 'Datenbank'.", answer: "Ein System zur elektronischen Datenverwaltung, das große Datenmengen strukturiert speichert." },
    { id: "lf4-f62", question: "Was ist eine 'Relationale Datenbank'?", answer: "Eine Datenbank, in der Daten in Tabellen gespeichert werden, die über Schlüssel miteinander verknüpft sind." },
    { id: "lf4-f63", question: "Was ist ein 'Primärschlüssel'?", answer: "Ein eindeutiges Identifikationsmerkmal für einen Datensatz in einer Tabelle." },
    { id: "lf4-f64", question: "Was ist ein 'Fremdschlüssel'?", answer: "Ein Feld in einer Tabelle, das auf den Primärschlüssel einer anderen Tabelle verweist." },
    { id: "lf4-f65", question: "Was bedeutet 'Redundanz' in Datenbanken?", answer: "Die mehrfache Speicherung derselben Information (sollte vermieden werden)." },
    { id: "lf4-f66", question: "Was ist 'Datenintegrität'?", answer: "Die Korrektheit, Vollständigkeit und Konsistenz der Daten in einer Datenbank." },
    { id: "lf4-f67", question: "Was ist ein 'Datenbankschema'?", answer: "Der logische Aufbau und die Struktur der Datenbank (Tabellen, Felder, Beziehungen)." },
    { id: "lf4-f68", question: "Was ist 'SQL'?", answer: "Structured Query Language – die Standardsprache zur Abfrage und Verwaltung relationaler Datenbanken." },
    { id: "lf4-f69", question: "Was bewirkt der SQL-Befehl 'SELECT'?", answer: "Er wählt Daten aus einer Datenbank aus." },
    { id: "lf4-f70", question: "Was bewirkt der SQL-Befehl 'INSERT'?", answer: "Er fügt neue Datensätze in eine Tabelle ein." },
    { id: "lf4-f71", question: "Was bewirkt der SQL-Befehl 'UPDATE'?", answer: "Er ändert bestehende Datensätze in einer Tabelle." },
    { id: "lf4-f72", question: "Was bewirkt der SQL-Befehl 'DELETE'?", answer: "Er löscht Datensätze aus einer Tabelle." },
    { id: "lf4-f73", question: "Was ist 'Datensicherheit'?", answer: "Technische und organisatorische Maßnahmen zum Schutz von Daten vor Verlust oder Manipulation." },
    { id: "lf4-f74", question: "Nenne die drei Schutzziele der Informationssicherheit.", answer: "Vertraulichkeit, Integrität, Verfügbarkeit." },
    { id: "lf4-f75", question: "Was ist 'Vertraulichkeit'?", answer: "Daten dürfen nur von autorisierten Personen eingesehen werden." },
    { id: "lf4-f76", question: "Was ist 'Integrität'?", answer: "Daten müssen korrekt und unverändert bleiben." },
    { id: "lf4-f77", question: "Was ist 'Verfügbarkeit'?", answer: "Daten und Systeme müssen bei Bedarf funktionsfähig und zugänglich sein." },
    { id: "lf4-f78", question: "Was ist eine 'Firewall'?", answer: "Ein Sicherheitssystem, das den Datenverkehr zwischen Netzwerken überwacht und filtert." },
    { id: "lf4-f79", question: "Was ist 'Verschlüsselung'?", answer: "Die Umwandlung von lesbaren Daten in einen unlesbaren Geheimtext mittels eines Schlüssels." },
    { id: "lf4-f80", question: "Was ist ein 'Backup'?", answer: "Eine Sicherungskopie von Daten zur Wiederherstellung im Verlustfall." },
    { id: "lf4-f81", question: "Was ist 'Phishing'?", answer: "Der Versuch, über gefälschte Nachrichten an sensible Daten von Nutzern zu gelangen." },
    { id: "lf4-f82", question: "Was ist 'Social Engineering'?", answer: "Die psychologische Manipulation von Menschen, um an vertrauliche Informationen zu kommen." },
    { id: "lf4-f83", question: "Was ist 'Datenschutz'?", answer: "Der Schutz des Einzelnen vor Beeinträchtigungen seines Persönlichkeitsrechts durch den Umgang mit seinen Daten." },
    { id: "lf4-f84", question: "Was sind 'personenbezogene Daten'?", answer: "Alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen." },
    { id: "lf4-f85", question: "Was ist die 'DSGVO'?", answer: "Die Datenschutz-Grundverordnung der Europäischen Union." },
    { id: "lf4-f86", question: "Nenne den Grundsatz der 'Zweckbindung'.", answer: "Daten dürfen nur für den Zweck verarbeitet werden, für den sie erhoben wurden." },
    { id: "lf4-f87", question: "Was bedeutet 'Datenminimierung'?", answer: "Es dürfen nur so viele Daten erhoben werden, wie für den Zweck unbedingt erforderlich sind." },
    { id: "lf4-f88", question: "Was ist das 'Recht auf Auskunft'?", answer: "Betroffene können vom Verantwortlichen Auskunft über die verarbeiteten Daten verlangen." },
    { id: "lf4-f89", question: "Was ist das 'Recht auf Vergessenwerden'?", answer: "Das Recht auf Löschung personenbezogener Daten unter bestimmten Voraussetzungen." },
    { id: "lf4-f90", question: "Wann ist eine Datenverarbeitung rechtmäßig?", answer: "Wenn eine Rechtsgrundlage vorliegt (z. B. Einwilligung, Vertragserfüllung, gesetzliche Pflicht)." },
    { id: "lf4-f91", question: "Was ist ein 'Verzeichnis von Verarbeitungstätigkeiten' (VVT)?", answer: "Eine Dokumentation aller Prozesse im Unternehmen, bei denen personenbezogene Daten verarbeitet werden." },
    { id: "lf4-f92", question: "Was ist eine 'Auftragsverarbeitung'?", answer: "Wenn ein Dienstleister personenbezogene Daten im Auftrag und nach Weisung eines Verantwortlichen verarbeitet." },
    { id: "lf4-f93", question: "Was ist die Aufgabe des Datenschutzbeauftragten?", answer: "Überwachung der Einhaltung von Datenschutzvorschriften und Beratung des Verantwortlichen." },
    { id: "lf4-f94", question: "Was ist eine 'Datenschutz-Folgenabschätzung'?", answer: "Eine Prüfung bei Verfahren mit hohem Risiko für die Rechte der Betroffenen." },
    { id: "lf4-f95", question: "Nenne ein Beispiel für 'besondere Kategorien' personenbezogener Daten.", answer: "Gesundheitsdaten, religiöse Überzeugungen, biometrische Daten." },
    { id: "lf4-f96", question: "Was ist 'Privacy by Design'?", answer: "Datenschutz durch Technikgestaltung (schon bei der Entwicklung von Systemen)." },
    { id: "lf4-f97", question: "Was ist 'Privacy by Default'?", answer: "Datenschutzfreundliche Voreinstellungen in Software und Diensten." },
    { id: "lf4-f98", question: "Wer überwacht die Einhaltung des Datenschutzes in Deutschland?", answer: "Die Landesdatenschutzbeauftragten und der Bundesbeauftragte für den Datenschutz." },
    { id: "lf4-f99", question: "Was ist eine 'Rechenschaftspflicht' (Accountability)?", answer: "Der Verantwortliche muss die Einhaltung der Datenschutzgrundsätze nachweisen können." },
    { id: "lf4-f100", question: "Was ist die maximale Strafe bei DSGVO-Verstößen?", answer: "Bis zu 20 Mio. Euro oder 4 % des weltweiten Jahresumsatzes." }
  ],
  quiz: [
    {
      id: "lf4-q1",
      question: "Ein Unternehmen möchte eine Telefonkonferenz mit 20 externen Teilnehmern durchführen. Welches Verfahren ist am effizientesten?",
      options: ["Drei-Wege-Konferenz der TK-Anlage", "Dial-in-Verfahren über einen Konferenzanbieter", "Nacheinander alle Teilnehmer einzeln anrufen", "Dial-out-Verfahren über ein analoges Telefon"],
      answer: 1,
      explanation: "Das Dial-in-Verfahren ist bei großen Gruppen am effizientesten, da sich alle Teilnehmer selbstständig einwählen."
    },
    {
      id: "lf4-q2",
      question: "Was ist der Hauptvorteil von Unified Messaging (UMS)?",
      options: ["Höhere Sprachqualität beim Telefonieren", "Zusammenfassung verschiedener Nachrichtentypen in einem Posteingang", "Automatische Beantwortung von Kundenanfragen", "Verschlüsselung aller Telefonate"],
      answer: 1,
      explanation: "UMS bündelt E-Mail, Fax, Voicemail und SMS in einer Oberfläche (z. B. E-Mail-Client)."
    },
    {
      id: "lf4-q3",
      question: "Welches Netzwerk verbindet Standorte in verschiedenen Städten?",
      options: ["LAN", "WLAN", "WAN", "PAN"],
      answer: 2,
      explanation: "Ein WAN (Wide Area Network) deckt große geografische Bereiche ab."
    },
    {
      id: "lf4-q4",
      question: "Welches Protokoll wird zum Empfangen von E-Mails verwendet, wenn diese auf dem Server verbleiben sollen?",
      options: ["SMTP", "HTTP", "IMAP", "FTP"],
      answer: 2,
      explanation: "IMAP synchronisiert die E-Mails mit dem Server, während POP3 sie meist herunterlädt und löscht."
    },
    {
      id: "lf4-q5",
      question: "Was ist die primäre Aufgabe einer ACD-Anlage?",
      options: ["Aufzeichnung von Gesprächen", "Automatische Verteilung eingehender Anrufe", "Erstellung von Rechnungen", "Verschlüsselung von Daten"],
      answer: 1,
      explanation: "ACD (Automatic Call Distribution) verteilt Anrufe nach festen Regeln an freie Agenten."
    },
    {
      id: "lf4-q6",
      question: "Welches Routing-Verfahren leitet den Anruf an den Agenten mit der längsten Pause weiter?",
      options: ["Skill-Based Routing", "Longest Waiting Agent", "Circular Routing", "Zufallsrouting"],
      answer: 1,
      explanation: "Longest Waiting Agent optimiert die Auslastung der Mitarbeiter."
    },
    {
      id: "lf4-q7",
      question: "Was bedeutet 'Skill-Based Routing'?",
      options: ["Verteilung nach dem Zufallsprinzip", "Verteilung basierend auf den Fähigkeiten der Agenten", "Verteilung an den Agenten mit der kürzesten Gesprächszeit", "Verteilung an den Agenten, der am nächsten wohnt"],
      answer: 1,
      explanation: "Anrufe werden gezielt an Mitarbeiter mit dem passenden Fachwissen geleitet."
    },
    {
      id: "lf4-q8",
      question: "Welche Kennzahl beschreibt die durchschnittliche Zeit, die ein Kunde in der Warteschleife verbringt?",
      options: ["AHT", "ASA", "ACW", "Servicelevel"],
      answer: 1,
      explanation: "ASA steht für Average Speed of Answer."
    },
    {
      id: "lf4-q9",
      question: "Was umfasst die 'AHT' (Average Handle Time)?",
      options: ["Nur die reine Gesprächszeit", "Gesprächszeit plus Nachbearbeitungszeit", "Wartezeit plus Gesprächszeit", "Nur die Nachbearbeitungszeit"],
      answer: 1,
      explanation: "Die AHT ist die Summe aus Gesprächszeit (Talk Time) und Nachbearbeitungszeit (ACW)."
    },
    {
      id: "lf4-q10",
      question: "Wofür wird eine IVR primär eingesetzt?",
      options: ["Zur Überwachung der Mitarbeiter", "Zur Vorqualifizierung von Anrufern", "Zur Erstellung von Schichtplänen", "Zur Speicherung von Kundendaten"],
      answer: 1,
      explanation: "IVR (Interactive Voice Response) lässt Kunden ihr Anliegen vorab per Tastendruck oder Sprache wählen."
    },
    {
      id: "lf4-q11",
      question: "Welche Funktion ermöglicht das automatische Öffnen der Kundenmaske bei einem Anruf?",
      options: ["ACD", "IVR", "CTI Screen Pop-up", "Dialer"],
      answer: 2,
      explanation: "CTI verknüpft Telefonie und IT, um Kundendaten sofort anzuzeigen."
    },
    {
      id: "lf4-q12",
      question: "Welcher Dialer-Modus ist für komplexe B2B-Gespräche am besten geeignet?",
      options: ["Power Dialing", "Predictive Dialing", "Preview Dialing", "Zufallswählen"],
      answer: 2,
      explanation: "Preview Dialing erlaubt dem Agenten, sich vor dem Anruf in den Datensatz einzulesen."
    },
    {
      id: "lf4-q13",
      question: "Was ist ein wesentliches Merkmal von Omnichannel?",
      options: ["Viele Kanäle ohne Verbindung", "Nahtlose Integration aller Kanäle", "Nur Telefonie und E-Mail", "Ausschließlich Nutzung von Social Media"],
      answer: 1,
      explanation: "Omnichannel bietet eine konsistente Kundenerfahrung über alle Kanäle hinweg."
    },
    {
      id: "lf4-q14",
      question: "Welche Software wird für die bedarfsorientierte Schichtplanung genutzt?",
      options: ["CRM", "ERP", "PEP / Workforce Management", "OCR"],
      answer: 2,
      explanation: "PEP-Systeme berechnen den Personalbedarf basierend auf dem erwarteten Anrufvolumen."
    },
    {
      id: "lf4-q15",
      question: "Was ist ein Vorteil von Cloud-Computing?",
      options: ["Keine Internetverbindung nötig", "Hohe Investitionskosten", "Hohe Skalierbarkeit", "Daten liegen immer lokal im Büro"],
      answer: 2,
      explanation: "Cloud-Ressourcen können flexibel an den aktuellen Bedarf angepasst werden."
    },
    {
      id: "lf4-q16",
      question: "Welche Servicerufnummer ist für den Anrufer immer kostenlos?",
      options: ["0180-5", "0900", "0800", "0137"],
      answer: 2,
      explanation: "0800 ist die klassische Freecall-Nummer."
    },
    {
      id: "lf4-q17",
      question: "Was kostet ein Anruf bei einer 0180-6 Nummer aus dem Festnetz?",
      options: ["20 Cent pro Minute", "20 Cent pro Anruf", "Kostenlos", "14 Cent pro Minute"],
      answer: 1,
      explanation: "0180-6 hat einen Festpreis pro Anruf, unabhängig von der Dauer."
    },
    {
      id: "lf4-q18",
      question: "Wie ist der Verbraucherschutz bei Warteschleifen geregelt?",
      options: ["Warteschleifen dürfen maximal 10 Euro kosten", "Warteschleifen müssen grundsätzlich kostenlos sein", "Warteschleifen sind nur nachts kostenlos", "Es gibt keine Regelung"],
      answer: 1,
      explanation: "Bei kostenpflichtigen Nummern darf die Zeit in der Warteschleife nicht berechnet werden."
    },
    {
      id: "lf4-q19",
      question: "Was ist ein Primärschlüssel in einer Datenbank?",
      options: ["Ein Schlüssel zum Serverraum", "Ein Feld zur eindeutigen Identifizierung eines Datensatzes", "Ein Passwort für den Admin", "Eine Liste aller Tabellen"],
      answer: 1,
      explanation: "Der Primärschlüssel (z. B. Kundennummer) darf in einer Tabelle nur einmal vorkommen."
    },
    {
      id: "lf4-q20",
      question: "Was bedeutet 'Redundanz' in einer Datenbank?",
      options: ["Hohe Datensicherheit", "Mehrfache Speicherung gleicher Daten", "Schnelle Abfragegeschwindigkeit", "Verschlüsselung der Daten"],
      answer: 1,
      explanation: "Redundanz führt zu unnötigem Speicherverbrauch und potenziellen Fehlern bei Änderungen."
    },
    {
      id: "lf4-q21",
      question: "Welcher SQL-Befehl wird zum Ändern bestehender Daten genutzt?",
      options: ["CHANGE", "MODIFY", "UPDATE", "SET"],
      answer: 2,
      explanation: "UPDATE ändert Werte in bestehenden Zeilen einer Tabelle."
    },
    {
      id: "lf4-q22",
      question: "Was ist das Ziel der Datensicherheit?",
      options: ["Schutz vor Konkurrenz", "Schutz der Verfügbarkeit, Integrität und Vertraulichkeit", "Maximierung des Gewinns", "Verhinderung von Kundenbeschwerden"],
      answer: 1,
      explanation: "Dies sind die drei klassischen Schutzziele der IT-Sicherheit."
    },
    {
      id: "lf4-q23",
      question: "Welche Maßnahme schützt vor Datenverlust durch Hardwaredefekt?",
      options: ["Firewall", "Antivirenprogramm", "Regelmäßiges Backup", "Starkes Passwort"],
      answer: 2,
      explanation: "Nur eine Kopie der Daten (Backup) ermöglicht die Wiederherstellung nach einem Defekt."
    },
    {
      id: "lf4-q24",
      question: "Was schützt der Datenschutz primär?",
      options: ["Die Computerhardware", "Das Persönlichkeitsrecht natürlicher Personen", "Die Geschäftsgeheimnisse von Firmen", "Die Urheberrechte von Software"],
      answer: 1,
      explanation: "Datenschutz ist der Schutz von Menschen vor missbräuchlicher Verarbeitung ihrer Daten."
    },
    {
      id: "lf4-q25",
      question: "Wann dürfen personenbezogene Daten verarbeitet werden?",
      options: ["Immer, wenn es der Firma nützt", "Nur mit Rechtsgrundlage (z. B. Einwilligung)", "Nur wenn der Chef es erlaubt", "Wenn die Daten öffentlich im Telefonbuch stehen"],
      answer: 1,
      explanation: "Nach der DSGVO gilt ein Verbot mit Erlaubnisvorbehalt."
    },
    {
      id: "lf4-q26",
      question: "Was besagt der Grundsatz der Datenminimierung?",
      options: ["Daten müssen so klein wie möglich gespeichert werden", "Es dürfen nur notwendige Daten erhoben werden", "Daten müssen nach 2 Tagen gelöscht werden", "Nur kleine Firmen müssen Datenschutz beachten"],
      answer: 1,
      explanation: "Es sollen so wenig personenbezogene Daten wie möglich verarbeitet werden."
    },
    {
      id: "lf4-q27",
      question: "Was ist ein 'Silent Call'?",
      options: ["Ein Anruf ohne Ton", "Ein Anruf, bei dem kein Agent frei ist", "Ein Anruf bei einem schlafenden Kunden", "Ein Anruf mit unterdrückter Nummer"],
      answer: 1,
      explanation: "Silent Calls entstehen bei Predictive Dialern, wenn die Berechnung der freien Agenten fehlschlägt."
    },
    {
      id: "lf4-q28",
      question: "Welches Protokoll wird zum Versenden von E-Mails genutzt?",
      options: ["POP3", "IMAP", "SMTP", "FTP"],
      answer: 2,
      explanation: "SMTP steht für Simple Mail Transfer Protocol."
    },
    {
      id: "lf4-q29",
      question: "Was ist ein 'Extranet'?",
      options: ["Ein sehr großes Internet", "Ein für Partner geöffneter Teil des Intranets", "Ein Netzwerk für ehemalige Mitarbeiter", "Ein Netzwerk im Weltraum"],
      answer: 1,
      explanation: "Das Extranet verbindet das Unternehmen sicher mit Lieferanten oder Partnern."
    },
    {
      id: "lf4-q30",
      question: "Was ist die Aufgabe eines DNS-Servers?",
      options: ["Speicherung von E-Mails", "Übersetzung von Domainnamen in IP-Adressen", "Schutz vor Viren", "Berechnung von Schichtplänen"],
      answer: 1,
      explanation: "DNS (Domain Name System) macht das Internet benutzerfreundlich."
    },
    {
      id: "lf4-q31",
      question: "Was bedeutet 'Phishing'?",
      options: ["Angeln im Firmenurlaub", "Erschleichen von Daten über gefälschte Mails", "Suchen nach Fehlern im Code", "Optimieren der Datenbank"],
      answer: 1,
      explanation: "Phishing-Mails täuschen oft bekannte Absender (Banken, Paketdienste) vor."
    },
    {
      id: "lf4-q32",
      question: "Was ist 'Social Engineering'?",
      options: ["Programmieren von sozialen Netzwerken", "Manipulation von Menschen zur Preisgabe von Daten", "Verbesserung des Betriebsklimas", "Automatisches Posten auf Facebook"],
      answer: 1,
      explanation: "Der Mensch ist hier das Ziel des Angriffs, nicht die Technik."
    },
    {
      id: "lf4-q33",
      question: "Was ist ein 'Trojaner'?",
      options: ["Ein sehr schnelles Netzwerk", "Schadsoftware, die sich als nützliches Programm tarnt", "Ein spezieller Server für Griechenland", "Ein Tool zur Datenkompression"],
      answer: 1,
      explanation: "Trojaner verstecken ihre schädliche Funktion in einer scheinbar harmlosen Datei."
    },
    {
      id: "lf4-q34",
      question: "Welche Strafe droht bei schweren DSGVO-Verstößen?",
      options: ["Maximal 1.000 Euro", "Bis zu 20 Mio. Euro oder 4 % des Jahresumsatzes", "Nur eine Verwarnung", "Gefängnis für alle Mitarbeiter"],
      answer: 1,
      explanation: "Die Bußgelder der DSGVO sollen abschreckend wirken."
    },
    {
      id: "lf4-q35",
      question: "Was ist ein 'Verantwortlicher' im Sinne der DSGVO?",
      options: ["Der IT-Leiter", "Die natürliche oder juristische Person, die über Zwecke entscheidet", "Der Datenschutzbeauftragte", "Jeder Mitarbeiter im Call Center"],
      answer: 1,
      explanation: "Meist ist das Unternehmen als juristische Person der Verantwortliche."
    },
    {
      id: "lf4-q36",
      question: "Was ist 'Privacy by Design'?",
      options: ["Schönes Design der Datenschutzerklärung", "Datenschutz bereits bei der Systementwicklung berücksichtigen", "Datenschutz nur für Designer", "Nachträgliches Hinzufügen von Filtern"],
      answer: 1,
      explanation: "Technik muss von Anfang an datenschutzfreundlich gestaltet sein."
    },
    {
      id: "lf4-q37",
      question: "Was ist ein 'Fremdschlüssel'?",
      options: ["Ein Schlüssel für ein fremdes Büro", "Ein Feld, das auf eine andere Tabelle verweist", "Ein Passwort für Gäste", "Ein verschlüsselter Datensatz"],
      answer: 1,
      explanation: "Fremdschlüssel stellen die Beziehungen zwischen Tabellen her."
    },
    {
      id: "lf4-q38",
      question: "Was bewirkt der SQL-Befehl 'DELETE'?",
      options: ["Löscht die ganze Datenbank", "Löscht Datensätze aus einer Tabelle", "Löscht den Computerinhalt", "Löscht nur doppelte Einträge"],
      answer: 1,
      explanation: "DELETE entfernt Zeilen, die eine bestimmte Bedingung erfüllen."
    },
    {
      id: "lf4-q39",
      question: "Was ist 'OCR'?",
      options: ["Ein neues Betriebssystem", "Optische Zeichenerkennung", "Ein Protokoll für Drucker", "Ein Tool zur Bildbearbeitung"],
      answer: 1,
      explanation: "OCR wandelt Bilder von Text in maschinenlesbaren Text um."
    },
    {
      id: "lf4-q40",
      question: "Was ist 'Call Blending'?",
      options: ["Mischen von Kaffee im Call Center", "Automatischer Wechsel zwischen Inbound und Outbound", "Gleichzeitiges Telefonieren mit zwei Kunden", "Verschleiern der Rufnummer"],
      answer: 1,
      explanation: "Call Blending optimiert die Auslastung der Agenten bei schwankendem Anrufaufkommen."
    },
    {
      id: "lf4-q41",
      question: "Was ist 'ANI'?",
      options: ["Ein Vorname", "Automatic Number Identification (Rufnummer des Anrufers)", "Ein Netzwerkprotokoll", "Ein Tool zur Animation"],
      answer: 1,
      explanation: "ANI zeigt dem Agenten, wer anruft."
    },
    {
      id: "lf4-q42",
      question: "Was ist 'DNIS'?",
      options: ["Ein digitaler Dienst", "Dialed Number Identification Service (gewählte Nummer)", "Ein spezieller Dialer", "Ein Datenschutzgesetz"],
      answer: 1,
      explanation: "DNIS zeigt dem Agenten, welches Projekt/Hotline der Kunde angerufen hat."
    },
    {
      id: "lf4-q43",
      question: "Was ist 'Idle Time'?",
      options: ["Gesprächszeit", "Wartezeit des Agenten auf den nächsten Anruf", "Nachbearbeitungszeit", "Pause"],
      answer: 1,
      explanation: "Idle Time ist die Zeit, in der ein Agent bereit ist, aber kein Anruf eingeht."
    },
    {
      id: "lf4-q44",
      question: "Was ist 'Lost Call'?",
      options: ["Ein verlorenes Handy", "Ein Anrufer, der in der Warteschleife auflegt", "Ein falsch verbundener Anruf", "Ein gelöschter Datensatz"],
      answer: 1,
      explanation: "Lost Calls (Abbrüche) sind ein wichtiger Indikator für die Servicequalität."
    },
    {
      id: "lf4-q45",
      question: "Was ist 'ASA'?",
      options: ["Ein Sportverein", "Average Speed of Answer (durchschnittliche Wartezeit)", "Ein neues Betriebssystem", "Ein Tool zur Analyse"],
      answer: 1,
      explanation: "ASA misst, wie schnell Anrufe im Durchschnitt angenommen werden."
    },
    {
      id: "lf4-q46",
      question: "Was ist 'AHT'?",
      options: ["Average Handle Time (Gesamtbearbeitungszeit)", "Ein hoher Turm", "Ein Tool zur Hardwareprüfung", "Ein spezieller Headset-Typ"],
      answer: 0,
      explanation: "AHT umfasst Gesprächszeit und Nachbearbeitungszeit."
    },
    {
      id: "lf4-q47",
      question: "Was ist 'Servicelevel'?",
      options: ["Die Etage des Call Centers", "Prozentualer Anteil der Anrufe, die innerhalb einer Zeit X angenommen wurden", "Die Anzahl der Mitarbeiter", "Die Qualität der Kaffeemaschine"],
      answer: 1,
      explanation: "Ein typischer Servicelevel ist z. B. 80/20 (80 % der Anrufe in 20 Sekunden)."
    },
    {
      id: "lf4-q48",
      question: "Was ist 'VoIP'?",
      options: ["Telefonieren über das Internetprotokoll", "Ein spezielles Videokabel", "Ein Tool zur Bildersuche", "Ein Datenschutzbegriff"],
      answer: 0,
      explanation: "VoIP ersetzt zunehmend die klassische analoge oder ISDN-Telefonie."
    },
    {
      id: "lf4-q49",
      question: "Was ist 'CRM'?",
      options: ["Customer Relationship Management", "Ein Tool zur Dateiverwaltung", "Ein spezieller Router", "Ein Netzwerktyp"],
      answer: 0,
      explanation: "CRM-Systeme sind die zentrale Wissensbasis über den Kunden."
    },
    {
      id: "lf4-q50",
      question: "Was ist 'DSGVO'?",
      options: ["Ein deutsches Gesetz", "Die EU-Datenschutz-Grundverordnung", "Ein Tool zur Datensicherung", "Ein Netzwerkprotokoll"],
      answer: 1,
      explanation: "Die DSGVO ist seit 2018 der maßgebliche Rechtsrahmen in Europa."
    },
    {
      id: "lf4-q51",
      question: "Welches Gerät verbindet ein lokales Netzwerk (LAN) mit dem Internet?",
      options: ["Switch", "Hub", "Router", "Repeater"],
      answer: 2,
      explanation: "Ein Router leitet Datenpakete zwischen verschiedenen Netzwerken weiter."
    },
    {
      id: "lf4-q52",
      question: "Was ist der Unterschied zwischen LAN und WLAN?",
      options: ["LAN ist schneller", "WLAN ist drahtlos", "LAN ist nur für Drucker", "Es gibt keinen Unterschied"],
      answer: 1,
      explanation: "WLAN nutzt Funkwellen zur Datenübertragung, LAN nutzt Kabel."
    },
    {
      id: "lf4-q53",
      question: "Was ist eine 'IP-Adresse'?",
      options: ["Eine Postanschrift", "Eine eindeutige Adresse für Geräte im Netzwerk", "Ein Passwort", "Ein Name für eine Webseite"],
      answer: 1,
      explanation: "Jedes Gerät im Internet benötigt eine IP-Adresse zur Identifikation."
    },
    {
      id: "lf4-q54",
      question: "Was ist 'HTTP'?",
      options: ["Ein Protokoll zur Übertragung von Webseiten", "Ein Tool zur Bildbearbeitung", "Ein Dateiformat", "Ein Netzwerktyp"],
      answer: 0,
      explanation: "Hypertext Transfer Protocol ist die Basis des World Wide Web."
    },
    {
      id: "lf4-q55",
      question: "Was ist 'HTTPS'?",
      options: ["Ein schnelleres HTTP", "Ein verschlüsseltes HTTP", "Ein HTTP für soziale Medien", "Ein HTTP für Bilder"],
      answer: 1,
      explanation: "Das 'S' steht für Secure (Verschlüsselung via SSL/TLS)."
    },
    {
      id: "lf4-q56",
      question: "Was ist ein 'Browser'?",
      options: ["Ein Programm zum Betrachten von Webseiten", "Ein Betriebssystem", "Ein Hardwarebauteil", "Ein Netzwerkprotokoll"],
      answer: 0,
      explanation: "Beispiele sind Chrome, Firefox, Safari oder Edge."
    },
    {
      id: "lf4-q57",
      question: "Was ist eine 'URL'?",
      options: ["Eine Webadresse", "Ein Dateiformat", "Ein Benutzername", "Ein Passwort"],
      answer: 0,
      explanation: "URL steht für Uniform Resource Locator."
    },
    {
      id: "lf4-q58",
      question: "Was ist 'Cloud-Computing'?",
      options: ["Wettervorhersage per PC", "Nutzung von IT-Diensten über das Internet", "Speichern von Daten auf CDs", "Ein spezielles Netzwerk für Flugzeuge"],
      answer: 1,
      explanation: "Ressourcen wie Speicher oder Software werden flexibel gemietet."
    },
    {
      id: "lf4-q59",
      question: "Was ist 'SaaS'?",
      options: ["Software as a Service", "Ein spezielles Betriebssystem", "Ein Tool zur Datensicherung", "Ein Netzwerkprotokoll"],
      answer: 0,
      explanation: "Software wird als Dienstleistung über das Internet genutzt (z. B. Salesforce)."
    },
    {
      id: "lf4-q60",
      question: "Was ist 'PaaS'?",
      options: ["Platform as a Service", "Ein Tool zur Bildbearbeitung", "Ein Dateiformat", "Ein Netzwerktyp"],
      answer: 0,
      explanation: "Entwicklungsplattformen werden in der Cloud bereitgestellt."
    },
    {
      id: "lf4-q61",
      question: "Was ist 'IaaS'?",
      options: ["Infrastructure as a Service", "Ein spezielles Headset", "Ein Tool zur Hardwareprüfung", "Ein Netzwerkprotokoll"],
      answer: 0,
      explanation: "Grundlegende IT-Ressourcen wie Server oder Speicher werden gemietet."
    },
    {
      id: "lf4-q62",
      question: "Was ist ein 'Backup-Plan'?",
      options: ["Ein Plan für die Mittagspause", "Eine Strategie zur regelmäßigen Datensicherung", "Ein Plan für neue Büromöbel", "Ein Tool zur Mitarbeiterüberwachung"],
      answer: 1,
      explanation: "Er legt fest, was, wann und wie gesichert wird."
    },
    {
      id: "lf4-q63",
      question: "Was ist 'Verschlüsselung'?",
      options: ["Daten unlesbar machen", "Daten löschen", "Daten kopieren", "Daten sortieren"],
      answer: 0,
      explanation: "Nur mit dem passenden Schlüssel können die Daten wieder gelesen werden."
    },
    {
      id: "lf4-q64",
      question: "Was ist 'Zwei-Faktor-Authentisierung'?",
      options: ["Zwei Passwörter", "Kombination aus zwei verschiedenen Nachweisen (z. B. Passwort + SMS-Code)", "Zwei Benutzerkonten", "Zwei Monitore"],
      answer: 1,
      explanation: "Erhöht die Sicherheit beim Login erheblich."
    },
    {
      id: "lf4-q65",
      question: "Was ist 'Malware'?",
      options: ["Ein Malprogramm", "Sammelbegriff für Schadsoftware", "Ein Tool zur Datenkompression", "Ein Netzwerkprotokoll"],
      answer: 1,
      explanation: "Dazu gehören Viren, Würmer, Trojaner etc."
    },
    {
      id: "lf4-q66",
      question: "Was ist 'Ransomware'?",
      options: ["Software zum Musikhören", "Erpressungssoftware, die Daten verschlüsselt", "Ein Tool zur Bildbearbeitung", "Ein Netzwerktyp"],
      answer: 1,
      explanation: "Angreifer fordern Lösegeld für die Entschlüsselung."
    },
    {
      id: "lf4-q67",
      question: "Was ist 'Spyware'?",
      options: ["Software zum Spionieren (Datendiebstahl)", "Ein Tool zur Hardwareprüfung", "Ein spezielles Betriebssystem", "Ein Netzwerkprotokoll"],
      answer: 0,
      explanation: "Spyware sammelt heimlich Informationen über den Nutzer."
    },
    {
      id: "lf4-q68",
      question: "Was ist ein 'Virus'?",
      options: ["Ein biologischer Erreger", "Schadprogramm, das sich in Dateien einnistet und verbreitet", "Ein Tool zur Datenkompression", "Ein Netzwerktyp"],
      answer: 1,
      explanation: "Viren benötigen ein Wirtsprogramm zur Verbreitung."
    },
    {
      id: "lf4-q69",
      question: "Was ist ein 'Wurm'?",
      options: ["Ein Tier", "Schadprogramm, das sich selbstständig über Netzwerke verbreitet", "Ein Tool zur Bildbearbeitung", "Ein Netzwerkprotokoll"],
      answer: 1,
      explanation: "Würmer benötigen kein Wirtsprogramm."
    },
    {
      id: "lf4-q70",
      question: "Was ist eine 'Firewall'?",
      options: ["Eine Wand aus Feuer", "Ein Schutzsystem für Netzwerke", "Ein Tool zur Datenlöschung", "Ein spezielles Kabel"],
      answer: 1,
      explanation: "Sie kontrolliert ein- und ausgehende Datenverbindungen."
    },
    {
      id: "lf4-q71",
      question: "Was ist 'Datenschutz durch Technikgestaltung'?",
      options: ["Schönes Design", "Privacy by Design", "Privacy by Default", "Datenschutz nur für Techniker"],
      answer: 1,
      explanation: "Datenschutzaspekte werden schon bei der Entwicklung berücksichtigt."
    },
    {
      id: "lf4-q72",
      question: "Was ist 'Datenschutz durch datenschutzfreundliche Voreinstellungen'?",
      options: ["Privacy by Design", "Privacy by Default", "Datenschutz nur für Anfänger", "Nachträgliche Filter"],
      answer: 1,
      explanation: "Die strengsten Datenschutzeinstellungen sind standardmäßig aktiv."
    },
    {
      id: "lf4-q73",
      question: "Was ist ein 'Datenschutzbeauftragter'?",
      options: ["Der Chef der Firma", "Eine Person, die die Einhaltung des Datenschutzes überwacht", "Ein Polizist", "Ein Anwalt für Kunden"],
      answer: 1,
      explanation: "Er berät das Unternehmen und ist Ansprechpartner für Behörden."
    },
    {
      id: "lf4-q74",
      question: "Was ist eine 'Auskunftspflicht'?",
      options: ["Pflicht, dem Chef alles zu sagen", "Pflicht, Betroffenen Auskunft über ihre gespeicherten Daten zu geben", "Pflicht, Werbung zu machen", "Pflicht, Steuern zu zahlen"],
      answer: 1,
      explanation: "Betroffene haben ein Recht zu erfahren, was über sie gespeichert ist."
    },
    {
      id: "lf4-q75",
      question: "Was ist 'Rechtmäßigkeit' im Datenschutz?",
      options: ["Alles ist erlaubt", "Verarbeitung nur mit gesetzlicher Erlaubnis oder Einwilligung", "Nur Anwälte dürfen Daten verarbeiten", "Daten müssen immer wahr sein"],
      answer: 1,
      explanation: "Ohne Rechtsgrundlage ist die Verarbeitung verboten."
    },
    {
      id: "lf4-q76",
      question: "Was ist 'Transparenz' im Datenschutz?",
      options: ["Daten müssen durchsichtig sein", "Betroffene müssen klar über die Verarbeitung informiert werden", "Daten müssen öffentlich sein", "Jeder darf alles sehen"],
      answer: 1,
      explanation: "Informationen müssen leicht zugänglich und verständlich sein."
    },
    {
      id: "lf4-q77",
      question: "Was ist 'Zweckbindung'?",
      options: ["Daten müssen fest gebunden werden", "Daten dürfen nur für den ursprünglichen Zweck genutzt werden", "Daten müssen immer den gleichen Namen haben", "Daten dürfen nie gelöscht werden"],
      answer: 1,
      explanation: "Eine Zweckänderung ist nur in engen Grenzen zulässig."
    },
    {
      id: "lf4-q78",
      question: "Was ist 'Datenminimierung'?",
      options: ["Daten so klein wie möglich speichern", "Nur notwendige Daten erheben", "Daten nach 1 Tag löschen", "Keine Daten erheben"],
      answer: 1,
      explanation: "So wenig Daten wie möglich, so viele wie nötig."
    },
    {
      id: "lf4-q79",
      question: "Was ist 'Richtigkeit' im Datenschutz?",
      options: ["Daten müssen immer positiv sein", "Daten müssen sachlich richtig und aktuell sein", "Daten müssen immer lang sein", "Daten müssen immer kurz sein"],
      answer: 1,
      explanation: "Unrichtige Daten müssen unverzüglich gelöscht oder berichtigt werden."
    },
    {
      id: "lf4-q80",
      question: "Was ist 'Speicherbegrenzung'?",
      options: ["Kleine Festplatten kaufen", "Daten nur so lange wie nötig speichern", "Daten nie speichern", "Daten immer speichern"],
      answer: 1,
      explanation: "Daten müssen gelöscht werden, wenn der Zweck entfällt."
    },
    {
      id: "lf4-q81",
      question: "Was ist 'Integrität und Vertraulichkeit'?",
      options: ["Daten müssen geheim und unverändert bleiben", "Daten müssen laut vorgelesen werden", "Daten müssen öffentlich sein", "Daten müssen bunt sein"],
      answer: 0,
      explanation: "Schutz vor unbefugter Verarbeitung und unbeabsichtigtem Verlust."
    },
    {
      id: "lf4-q82",
      question: "Was ist 'Rechenschaftspflicht'?",
      options: ["Pflicht, Rechnungen zu schreiben", "Pflicht, die Einhaltung der Datenschutzregeln nachweisen zu können", "Pflicht, Geld zu zählen", "Pflicht, Steuern zu zahlen"],
      answer: 1,
      explanation: "Der Verantwortliche trägt die Beweislast."
    },
    {
      id: "lf4-q83",
      question: "Was ist eine 'Einwilligung'?",
      options: ["Eine mündliche Zusage", "Eine freiwillige, informierte und eindeutige Willensbekundung", "Ein Vertrag", "Eine gesetzliche Pflicht"],
      answer: 1,
      explanation: "Sie muss jederzeit widerrufbar sein."
    },
    {
      id: "lf4-q84",
      question: "Was ist 'Koppelungsverbot'?",
      options: ["Verbot, Hunde anzuleinen", "Einwilligung darf nicht von einer Leistung abhängig gemacht werden, wenn die Daten dafür nicht nötig sind", "Verbot, zwei Firmen zu gründen", "Verbot, zwei Datenbanken zu nutzen"],
      answer: 1,
      explanation: "Schutz der Freiwilligkeit der Einwilligung."
    },
    {
      id: "lf4-q85",
      question: "Was ist 'Widerrufsrecht'?",
      options: ["Recht, alles zurückzugeben", "Recht, eine Einwilligung jederzeit zu beenden", "Recht, nicht zu arbeiten", "Recht, laut zu sein"],
      answer: 1,
      explanation: "Der Widerruf muss so einfach wie die Erteilung sein."
    },
    {
      id: "lf4-q86",
      question: "Was ist 'Auskunftsrecht'?",
      options: ["Recht, Fragen zu stellen", "Recht zu erfahren, welche Daten über einen gespeichert sind", "Recht, im Internet zu surfen", "Recht, fernzusehen"],
      answer: 1,
      explanation: "Inklusive Zweck, Dauer und Empfänger der Daten."
    },
    {
      id: "lf4-q87",
      question: "Was ist 'Recht auf Berichtigung'?",
      options: ["Recht, alles besser zu wissen", "Recht, falsche Daten korrigieren zu lassen", "Recht, Noten zu ändern", "Recht, die Meinung zu sagen"],
      answer: 1,
      explanation: "Unverzügliche Korrektur unrichtiger Daten."
    },
    {
      id: "lf4-q88",
      question: "Was ist 'Recht auf Löschung'?",
      options: ["Recht, alles kaputt zu machen", "Recht auf Vergessenwerden", "Recht, den Job zu kündigen", "Recht, wegzulaufen"],
      answer: 1,
      explanation: "Löschung bei Zweckfortfall oder Widerruf."
    },
    {
      id: "lf4-q89",
      question: "Was ist 'Recht auf Einschränkung der Verarbeitung'?",
      options: ["Recht, weniger zu arbeiten", "Daten werden markiert, um ihre künftige Verarbeitung einzuschränken", "Recht, nur 1 Stunde zu telefonieren", "Recht, nur 1 E-Mail zu schreiben"],
      answer: 1,
      explanation: "Alternative zur Löschung in bestimmten Fällen."
    },
    {
      id: "lf4-q90",
      question: "Was ist 'Recht auf Datenübertragbarkeit'?",
      options: ["Recht, den PC mitzunehmen", "Recht, Daten in einem gängigen Format zu erhalten und zu einem anderen Anbieter mitzunehmen", "Recht, Daten zu löschen", "Recht, Daten zu kopieren"],
      answer: 1,
      explanation: "Fördert den Wettbewerb zwischen Dienstleistern."
    },
    {
      id: "lf4-q91",
      question: "Was ist 'Widerspruchsrecht'?",
      options: ["Recht, 'Nein' zu sagen", "Recht, der Verarbeitung aus besonderen Gründen zu widersprechen", "Recht, die Polizei zu rufen", "Recht, den Chef zu kritisieren"],
      answer: 1,
      explanation: "Besonders wichtig bei Direktwerbung."
    },
    {
      id: "lf4-q92",
      question: "Was ist 'Automatisierte Entscheidungsfindung'?",
      options: ["Entscheidung durch den Chef", "Entscheidung durch einen Algorithmus ohne menschliches Eingreifen (z. B. Scoring)", "Entscheidung durch Würfeln", "Entscheidung durch Abstimmung"],
      answer: 1,
      explanation: "Betroffene haben das Recht, nicht einer solchen Entscheidung unterworfen zu werden."
    },
    {
      id: "lf4-q93",
      question: "Was ist 'Profiling'?",
      options: ["Erstellen eines Profils in sozialen Medien", "Automatisierte Verarbeitung zur Bewertung persönlicher Aspekte", "Fotografieren von Kunden", "Sammeln von Adressen"],
      answer: 1,
      explanation: "Analyse von Verhalten, Interessen oder Standort."
    },
    {
      id: "lf4-q94",
      question: "Was ist eine 'Aufsichtsbehörde'?",
      options: ["Die Polizei", "Die Datenschutzbehörde des jeweiligen Bundeslandes", "Das Finanzamt", "Das Ordnungsamt"],
      answer: 1,
      explanation: "Sie kontrolliert die Einhaltung der DSGVO."
    },
    {
      id: "lf4-q95",
      question: "Was ist ein 'Beschwerderecht'?",
      options: ["Recht, sich über das Essen zu beschweren", "Recht, sich bei der Aufsichtsbehörde über Datenschutzverstöße zu beschweren", "Recht, den Job zu kündigen", "Recht, laut zu schreien"],
      answer: 1,
      explanation: "Jeder Betroffene kann sich an die Behörde wenden."
    },
    {
      id: "lf4-q96",
      question: "Was ist 'Schadenersatz' im Datenschutz?",
      options: ["Geld für einen kaputten PC", "Ersatz für materiellen oder immateriellen Schaden durch Datenschutzverstöße", "Geld für Überstunden", "Geld für Urlaub"],
      answer: 1,
      explanation: "Auch Schmerzensgeld bei Verletzung der Privatsphäre."
    },
    {
      id: "lf4-q97",
      question: "Was ist 'Gemeinsame Verantwortlichkeit'?",
      options: ["Wenn zwei Firmen zusammenarbeiten", "Wenn zwei oder mehr Verantwortliche gemeinsam über Zwecke und Mittel entscheiden", "Wenn alle Mitarbeiter verantwortlich sind", "Wenn der Chef und der Azubi entscheiden"],
      answer: 1,
      explanation: "Erfordert eine Vereinbarung über die Aufgabenverteilung."
    },
    {
      id: "lf4-q98",
      question: "Was ist 'Drittland'?",
      options: ["Ein Land in der EU", "Ein Land außerhalb der EU / des EWR", "Ein Land mit drei Grenzen", "Ein Land in Afrika"],
      answer: 1,
      explanation: "Datenübermittlung dorthin unterliegt strengen Regeln."
    },
    {
      id: "lf4-q99",
      question: "Was ist 'Angemessenheitsbeschluss'?",
      options: ["Ein Beschluss über das Gehalt", "Feststellung der EU-Kommission, dass ein Drittland ein angemessenes Datenschutzniveau bietet", "Ein Beschluss über den Urlaub", "Ein Beschluss über die Arbeitszeit"],
      answer: 1,
      explanation: "Erleichtert den Datentransfer in dieses Land."
    },
    {
      id: "lf4-q100",
      question: "Was ist 'Standarddatenschutzklauseln'?",
      options: ["Normale Sätze im Vertrag", "Von der EU-Kommission vorgegebene Vertragsklauseln zur Absicherung von Datentransfers", "Sätze in der Hausordnung", "Sätze im Arbeitsvertrag"],
      answer: 1,
      explanation: "Wichtiges Instrument für den globalen Datenaustausch."
    }
  ]
};
