// IZURE Learning Platform — Tactical Training Data
// Lernfeld 4: Informations- und Kommunikationstechnische Systeme nutzen
// Lernfeld 5: Kundinnen und Kunden im Dialogmarketing betreuen und binden

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

// Topics
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
  },
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
  { id: 'lf4-f100', category: 'Sicherheit/Schutz', question: 'Was ist die Verfügbarkeit von Daten?', answer: 'Sicherstellung, dass Daten bei Bedarf für berechtigte Nutzer zugänglich sind.' },
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
    question: 'Was ist das Ziel der IZURE Full Mastery Vorbereitung?',
    type: 'multiple-choice',
    options: ['Bestehen mit 50%', 'Exzellente Beherrschung aller kritischen Kerninhalte für Full Mastery', 'Nur die Flashcards lernen', 'Schnell fertig werden'],
    correctAnswer: 'Exzellente Beherrschung aller kritischen Kerninhalte für Full Mastery',
    explanation: 'Dieses System ist darauf ausgelegt, Sie zur vollen Systembeherrschung zu führen.',
    difficulty: 'easy',
    category: 'Systemfokus'
  },
  {
  "id": "lf5-t1",
  "title": "5.1 Professionelle Beratungsgespräche",
  "description": "Strukturierte Gesprächsführung von der Bedarfsanalyse bis zum Abschluss.",
  "examRelevance": "high",
  "content": "Ein professionelles Beratungsgespräch im Dialogmarketing folgt einem festen 4-Phasen-Modell: 1. Begrüßung & Kontaktaufbau, 2. Bedarfsermittlung (Fragetrichter), 3. Beratung & Lösung (Nutzenargumentation), 4. Gesprächsabschluss.",
  "keyPoints": [
    "4-Phasen-Modell",
    "Fragetrichter (Offen -> Geschlossen)",
    "Nutzenargumentation (Merkmal-Vorteil-Nutzen)"
  ]
},
  {
  "id": "lf5-t2",
  "title": "5.2 Kundendaten erfassen und pflegen",
  "description": "Grundsätze der Datenerfassung und Vermeidung von Fehlern.",
  "examRelevance": "high",
  "content": "Die 5 Grundsätze der Datenerfassung (R-V-R-Z-K): Richtigkeit, Vollständigkeit, Redundanzvermeidung, Zeitstabilität und Konsistenz. Multitasking während des Gesprächs führt zu neurobiologischen Grenzen und Fehlern.",
  "keyPoints": [
    "R-V-R-Z-K Grundsätze",
    "Vermeidung von Dubletten",
    "Zeitstabilität (Geburtsdatum statt Alter)"
  ]
},
  {
  "id": "lf5-t3",
  "title": "5.3 Instrumente der Kundenbindung (CRM)",
  "description": "Strategische Ausrichtung auf Kundenbeziehungen und Loyalität.",
  "examRelevance": "high",
  "content": "CRM unterteilt sich in operatives, analytisches und kommunikatives CRM. Bindungsarten: Emotional (Vertrauen), Ökonomisch (Rabatte), Strukturell (Verträge), Faktisch (Abhängigkeit). ABC-Analyse zur Kundensegmentierung.",
  "keyPoints": [
    "CRM-Arten",
    "ABC-Analyse",
    "Zufriedenheit vs. Loyalität"
  ]
},
  {
  "id": "lf5-t4",
  "title": "5.4 Beschwerdemanagement",
  "description": "Umgang mit unzufriedenen Kunden und Reklamationen.",
  "examRelevance": "high",
  "content": "Die L-E-S-T Regel: Listen (Zuhören), Empathize (Empathie), Solve (Lösen), Thank (Danken). Unterscheidung zwischen Reklamation (Rechtsanspruch) und Beschwerde (subjektiv).",
  "keyPoints": [
    "L-E-S-T Regel",
    "Reklamation vs. Beschwerde",
    "Chancen der Beschwerde"
  ]
},
  {
  "id": "lf5-t5",
  "title": "5.5 Erfolgskennzahlen (KPIs)",
  "description": "Messung und Steuerung der Leistung im Service Center.",
  "examRelevance": "high",
  "content": "Inbound: AHT (Talk+Hold+ACW), Servicelevel, FCR, Lost Call Rate. Outbound: Ausschöpfungsquote (Netto/Brutto), Erfolgsquote (Conversion), Stornoquote.",
  "keyPoints": [
    "AHT Berechnung",
    "Servicelevel 80/20",
    "Conversion Rate"
  ]
},
  {
  "id": "lf5-t6",
  "title": "5.6 Zahlungsverkehr & Bonität",
  "description": "Sicherung der Zahlungseingänge und Prüfung der Kundenwürdigkeit.",
  "examRelevance": "medium",
  "content": "Bonitätsprüfung via SCHUFA. SEPA-Lastschrift Fristen: 8 Wochen (autorisiert), 13 Monate (unautorisiert). Sichere Zahlungsarten: Vorkasse, Nachnahme. Unsicher: Rechnung.",
  "keyPoints": [
    "Bonitätsprüfung",
    "SEPA-Widerspruchsfristen",
    "Zahlungsrisiken"
  ]
},
];

// Flashcards
export const flashcards: Flashcard[] = [
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
  },
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
  { id: 'lf4-f100', category: 'Sicherheit/Schutz', question: 'Was ist die Verfügbarkeit von Daten?', answer: 'Sicherstellung, dass Daten bei Bedarf für berechtigte Nutzer zugänglich sind.' },
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
    question: 'Was ist das Ziel der IZURE Full Mastery Vorbereitung?',
    type: 'multiple-choice',
    options: ['Bestehen mit 50%', 'Exzellente Beherrschung aller kritischen Kerninhalte für Full Mastery', 'Nur die Flashcards lernen', 'Schnell fertig werden'],
    correctAnswer: 'Exzellente Beherrschung aller kritischen Kerninhalte für Full Mastery',
    explanation: 'Dieses System ist darauf ausgelegt, Sie zur vollen Systembeherrschung zu führen.',
    difficulty: 'easy',
    category: 'Systemfokus'
  },
  {
  "id": "lf5-f1",
  "category": "Beratungsgespräche",
  "question": "Nenne die 4 Schritte eines professionellen Beratungsgesprächs.",
  "answer": "1. Begrüßung & Kontaktaufbau, 2. Bedarfsermittlung, 3. Beratung & Lösung, 4. Gesprächsabschluss."
},
  {
  "id": "lf5-f2",
  "category": "Beratungsgespräche",
  "question": "Was ist das Ziel der Phase 'Begrüßung & Kontaktaufbau'?",
  "answer": "Professionelle Meldung, Identifikation des Anrufers, Beziehungsmanagement."
},
  {
  "id": "lf5-f3",
  "category": "Beratungsgespräche",
  "question": "Welche Fragetypen gehören zum 'Fragetrichter' in der Bedarfsermittlung?",
  "answer": "Offene Fragen (W-Fragen) -> Vertiefende Fragen -> Geschlossene Fragen (Bestätigung)."
},
  {
  "id": "lf5-f4",
  "category": "Beratungsgespräche",
  "question": "Erläutere 'Aktives Zuhören' anhand von drei Techniken.",
  "answer": "Paraphrasieren (Inhalt wiederholen), Verbalisieren (Gefühle ansprechen), Signale (mhm, ja)."
},
  {
  "id": "lf5-f5",
  "category": "Beratungsgespräche",
  "question": "Was ist die 'Merkmal-Nutzen-Brücke' in der Nutzenargumentation?",
  "answer": "Merkmal (Was ist es?) -> Vorteil (Was bewirkt es?) -> Nutzen (Was hat der Kunde davon?)."
},
  {
  "id": "lf5-f6",
  "category": "Beratungsgespräche",
  "question": "Nenne zwei Methoden der Einwandbehandlung.",
  "answer": "Bumerang-Methode, Ja-Aber-Methode, Referenzmethode, Umwandlungsmethode."
},
  {
  "id": "lf5-f7",
  "category": "Beratungsgespräche",
  "question": "Welche Funktion hat ein Gesprächsleitfaden?",
  "answer": "Strukturvorgabe und Checkliste für das Gespräch, kann flexibel oder standardisiert sein."
},
  {
  "id": "lf5-f8",
  "category": "Kundendaten",
  "question": "Nenne die 5 Grundsätze der Datenerfassung (R-V-R-Z-K).",
  "answer": "Richtigkeit, Vollständigkeit, Redundanzvermeidung, Zeitstabilität, Konsistenz."
},
  {
  "id": "lf5-f9",
  "category": "Kundendaten",
  "question": "Warum ist 'Redundanzvermeidung' bei der Datenerfassung wichtig?",
  "answer": "Vermeidung von Dubletten, die zu Fehlern und ineffizienten Prozessen führen."
},
  {
  "id": "lf5-f10",
  "category": "Kundendaten",
  "question": "Was bedeutet 'Zeitstabilität' bei der Datenerfassung?",
  "answer": "Daten so erfassen, dass sie lange gültig bleiben (z. B. Geburtsdatum statt Alter)."
},
  {
  "id": "lf5-f11",
  "category": "Kundendaten",
  "question": "Welche Probleme können durch Multitasking bei der Datenerfassung entstehen?",
  "answer": "Neurobiologische Grenzen, erhöhte Fehlerquellen bei gleichzeitiger Datenerfassung und Gesprächsführung."
},
  {
  "id": "lf5-f12",
  "category": "Kundenbindung",
  "question": "Was ist CRM und welches Ziel verfolgt es?",
  "answer": "Customer Relationship Management; strategische Ausrichtung auf Kundenbeziehungen zur Kundenbindung."
},
  {
  "id": "lf5-f13",
  "category": "Kundenbindung",
  "question": "Nenne die drei Arten von CRM.",
  "answer": "Operatives CRM, Analytisches CRM, Kommunikatives CRM."
},
  {
  "id": "lf5-f14",
  "category": "Kundenbindung",
  "question": "Erläutere den Unterschied zwischen 'Zufriedenheit' und 'Loyalität'.",
  "answer": "Zufriedenheit ist vergangenheitsbezogen, Loyalität ist zukunftsorientiert (Wiederkaufabsicht)."
},
  {
  "id": "lf5-f15",
  "category": "Kundenbindung",
  "question": "Was ist eine 'ABC-Analyse' im Kundenmanagement?",
  "answer": "Einteilung der Kunden nach Umsatz/Ertrag (A=wichtig, B=mittel, C=weniger wichtig) zur Ressourcensteuerung."
},
  {
  "id": "lf5-f16",
  "category": "Kundenbindung",
  "question": "Nenne eine Form der 'Emotionalen Kundenbindung'.",
  "answer": "Vertrauen, Zufriedenheit, persönliche Identifikation (z.B. Exklusive Events, Community-Building)."
},
  {
  "id": "lf5-f17",
  "category": "Kundenbindung",
  "question": "Nenne eine Form der 'Ökonomischen Kundenbindung'.",
  "answer": "Finanzielle Vorteile oder Wechselkosten (z.B. Bonusprogramme, Rabatte, Treuepunkte)."
},
  {
  "id": "lf5-f18",
  "category": "Kundenbindung",
  "question": "Nenne eine Form der 'Strukturellen Kundenbindung'.",
  "answer": "Vertragliche oder technische Verflechtungen (z.B. Abonnements, Langzeitverträge, Systemkompatibilität)."
},
  {
  "id": "lf5-f19",
  "category": "Kundenbindung",
  "question": "Nenne eine Form der 'Faktischen Kundenbindung'.",
  "answer": "Mangelnde Alternativen oder räumliche Nähe (z.B. Monopolstellung, Standortvorteil)."
},
  {
  "id": "lf5-f20",
  "category": "Beschwerdemanagement",
  "question": "Nenne die 4 Schritte der L-E-S-T Regel im Beschwerdemanagement.",
  "answer": "Listen (Zuhören), Empathize (Empathie), Solve (Lösen), Thank (Danken)."
},
  {
  "id": "lf5-f21",
  "category": "Beschwerdemanagement",
  "question": "Was ist der Unterschied zwischen einer 'Beschwerde' und einer 'Reklamation'?",
  "answer": "Beschwerde: Subjektive Unzufriedenheit ohne Rechtsanspruch. Reklamation: Rechtsanspruch wegen Mangel."
},
  {
  "id": "lf5-f22",
  "category": "Beschwerdemanagement",
  "question": "Nenne drei Chancen, die Beschwerden für ein Unternehmen bieten.",
  "answer": "Kundenbindung, Imageverbesserung, Prozessoptimierung."
},
  {
  "id": "lf5-f23",
  "category": "Beschwerdemanagement",
  "question": "Nenne drei Gründe, warum sich Kunden nicht beschweren.",
  "answer": "Zeitaufwand, Angst vor Konfrontation, mangelnde Erfolgsaussicht."
},
  {
  "id": "lf5-f24",
  "category": "Beschwerdemanagement",
  "question": "Nenne zwei der '10 Fehler im Beschwerdegespräch'.",
  "answer": "Kunden unterbrechen, Rechtfertigen, Schuldzuweisung, Kunden nicht ernst nehmen, zu schnell Lösung anbieten, vage Versprechen, nicht dokumentieren, negatives Formulieren, Kulanz ohne Genehmigung zusagen, kein Follow-up."
},
  {
  "id": "lf5-f25",
  "category": "Beschwerdemanagement",
  "question": "Was ist ein 'Haltegespräch' und welches Ziel hat es?",
  "answer": "Kündigungsprävention; Ziel ist es, Kunden vom Verbleib zu überzeugen."
},
  {
  "id": "lf5-f26",
  "category": "Beschwerdemanagement",
  "question": "Nenne die Phasen eines Haltegesprächs.",
  "answer": "Ursachenforschung, Verständnis, Alternativen, Angebot."
},
  {
  "id": "lf5-f27",
  "category": "Beschwerdemanagement",
  "question": "Was bedeutet 'Kulanz' im Kontext des Beschwerdemanagements?",
  "answer": "Freiwillige Leistung ohne Rechtspflicht, Abwägung von Wirtschaftlichkeit vs. Kundenbindung."
},
  {
  "id": "lf5-f28",
  "category": "Kennzahlen Inbound",
  "question": "Definiere AHT (Average Handling Time).",
  "answer": "Durchschnittliche Bearbeitungszeit pro Anruf (Gesprächszeit + Haltezeit + Nachbearbeitungszeit)."
},
  {
  "id": "lf5-f29",
  "category": "Kennzahlen Inbound",
  "question": "Wie berechnet man den Servicelevel (z.B. 80/20)?",
  "answer": "(Anzahl der Anrufe, die innerhalb von X Sekunden angenommen wurden / Gesamtzahl der Anrufe) * 100."
},
  {
  "id": "lf5-f30",
  "category": "Kennzahlen Inbound",
  "question": "Was ist die FCR (First Call Resolution)?",
  "answer": "Der Anteil der Kundenanfragen, die beim ersten Kontakt abschließend gelöst werden konnten."
},
  {
  "id": "lf5-f31",
  "category": "Kennzahlen Inbound",
  "question": "Was misst die Lost-Call-Quote?",
  "answer": "Den Anteil der Anrufer, die auflegen, bevor sie mit einem Agenten verbunden wurden."
},
  {
  "id": "lf5-f32",
  "category": "Kennzahlen Inbound",
  "question": "Wie wird die Produktivität/Auslastung im Inbound gemessen?",
  "answer": "Zahl der bearbeiteten Anrufe pro Zeiteinheit im Verhältnis zur Nettoarbeitszeit."
},
  {
  "id": "lf5-f33",
  "category": "Kennzahlen Outbound",
  "question": "Was ist der Unterschied zwischen Bruttokontakten und Nettokontakten?",
  "answer": "Bruttokontakte: Alle Anwahlversuche (inkl. Fehlversuche). Nettokontakte: Erreichte Zielpersonen."
},
  {
  "id": "lf5-f34",
  "category": "Kennzahlen Outbound",
  "question": "Wie berechnet man die Ausschöpfungsquote?",
  "answer": "Nettokontakte / Bruttokontakte."
},
  {
  "id": "lf5-f35",
  "category": "Kennzahlen Outbound",
  "question": "Wie berechnet man die Erfolgsquote (Conversion Rate)?",
  "answer": "(Abschlüsse / Nettokontakte) * 100."
},
  {
  "id": "lf5-f36",
  "category": "Kennzahlen Outbound",
  "question": "Was ist die Stornoquote?",
  "answer": "Der Anteil der Bestellungen, die im Nachhinein storniert werden."
},
  {
  "id": "lf5-f37",
  "category": "Kennzahlen Outbound",
  "question": "Was ist die Feststellquote?",
  "answer": "Anzahl tatsächlicher Bestellungen in Relation zu den Nettokontakten."
},
  {
  "id": "lf5-f38",
  "category": "Zahlungsverkehr",
  "question": "Nenne zwei Methoden der Bonitätsprüfung.",
  "answer": "SCHUFA, interne Daten, Auskunfteien."
},
  {
  "id": "lf5-f39",
  "category": "Zahlungsverkehr",
  "question": "Wie lange ist die Widerspruchsfrist bei einer SEPA-Lastschrift mit gültigem Mandat?",
  "answer": "8 Wochen."
},
  {
  "id": "lf5-f40",
  "category": "Zahlungsverkehr",
  "question": "Wie lange ist die Widerspruchsfrist bei einer SEPA-Lastschrift ohne gültiges Mandat (unautorisiert)?",
  "answer": "13 Monate."
},
  {
  "id": "lf5-f41",
  "category": "Zahlungsverkehr",
  "question": "Nenne eine sichere Zahlungsart für das Unternehmen.",
  "answer": "Vorkasse, Nachnahme."
},
  {
  "id": "lf5-f42",
  "category": "Zahlungsverkehr",
  "question": "Nenne eine unsichere Zahlungsart für das Unternehmen.",
  "answer": "Rechnung (wegen Vorleistung)."
},
  {
  "id": "lf5-f43",
  "category": "Zahlungsverkehr",
  "question": "Was ist ein 'Lieferverzug'?",
  "answer": "Die Ware wird nicht zum vereinbarten Zeitpunkt geliefert."
},
  {
  "id": "lf5-f44",
  "category": "Zahlungsverkehr",
  "question": "Was ist eine 'Mängelrüge'?",
  "answer": "Die schriftliche Mitteilung des Käufers an den Verkäufer über einen Mangel der Ware."
},
  {
  "id": "lf5-f45",
  "category": "Kundendaten",
  "question": "Was bedeutet 'Konsistenz' bei der Datenerfassung?",
  "answer": "Einheitliche Schreibweisen und Formate (z. B. Straße statt Str.)."
},
  {
  "id": "lf5-f46",
  "category": "Kundenbindung",
  "question": "Was ist der Hauptunterschied zwischen operativem und analytischem CRM?",
  "answer": "Operatives CRM fokussiert auf direkte Kundeninteraktion (z.B. Call Center), analytisches CRM auf Datenauswertung zur Strategieentwicklung."
},
  {
  "id": "lf5-f47",
  "category": "Beratungsgespräche",
  "question": "Welche Rolle spielt 'Small Talk' im Kontaktaufbau?",
  "answer": "Dient dem Beziehungsmanagement und dem Aufbau einer positiven Gesprächsatmosphäre."
},
  {
  "id": "lf5-f48",
  "category": "Beschwerdemanagement",
  "question": "Warum ist 'positives Formulieren' im Beschwerdegespräch wichtig?",
  "answer": "Vermeidet Negativwörter und fördert eine lösungsorientierte, deeskalierende Gesprächsführung."
},
  {
  "id": "lf5-f49",
  "category": "Kennzahlen Inbound",
  "question": "Was ist ASA (Average Speed of Answer)?",
  "answer": "Die durchschnittliche Zeit vom Ende der Begrüßung/IVR bis zur Annahme durch den Agenten."
},
  {
  "id": "lf5-f50",
  "category": "Kundenbindung",
  "question": "Nenne ein Beispiel für einen 'A-Kunden' in der ABC-Analyse.",
  "answer": "Ein Kunde mit dem höchsten Umsatz- oder Deckungsbeitragsanteil für das Unternehmen."
},
  {
  "id": "lf5-f51",
  "category": "Beratungsgespräche",
  "question": "Was ist der Zweck von 'vertiefenden Fragen' im Fragetrichter?",
  "answer": "Spezifische Details und Hintergründe zum Kundenbedarf zu erfahren."
},
  {
  "id": "lf5-f52",
  "category": "Kundendaten",
  "question": "Was sind die Folgen von 'Multitasking' bei der Datenerfassung während eines Gesprächs?",
  "answer": "Erhöhte Fehlerquote, reduzierte Gesprächsqualität und längere Bearbeitungszeiten."
},
  {
  "id": "lf5-f53",
  "category": "Kundenbindung",
  "question": "Wie kann 'Kundenrückgewinnung' definiert werden?",
  "answer": "Die Reaktivierung von verlorenen Kunden (Win-Back-Strategien)."
},
  {
  "id": "lf5-f54",
  "category": "Beschwerdemanagement",
  "question": "Warum sollte man im Beschwerdegespräch keine 'vagen Versprechen' machen?",
  "answer": "Führt zu weiterer Unzufriedenheit und Glaubwürdigkeitsverlust, wenn diese nicht eingehalten werden können."
},
  {
  "id": "lf5-f55",
  "category": "Kennzahlen Outbound",
  "question": "Welche Kennzahl gibt Aufschluss über die Effizienz der Adressnutzung im Outbound?",
  "answer": "Die Ausschöpfungsquote."
},
  {
  "id": "lf5-f56",
  "category": "Zahlungsverkehr",
  "question": "Was ist der Unterschied zwischen Vorkasse und Rechnung aus Unternehmenssicht?",
  "answer": "Vorkasse ist sicher (Zahlung vor Leistung), Rechnung ist unsicher (Leistung vor Zahlung)."
},
  {
  "id": "lf5-f57",
  "category": "Beratungsgespräche",
  "question": "Nenne ein Beispiel für eine 'geschlossene Frage' im Beratungsgespräch.",
  "answer": "'Sind Sie mit dem Angebot einverstanden?' (Antwort: Ja/Nein)."
},
  {
  "id": "lf5-f58",
  "category": "Kundendaten",
  "question": "Warum ist 'Richtigkeit' ein wichtiger Grundsatz der Datenerfassung?",
  "answer": "Fehlerhafte Daten führen zu falschen Entscheidungen und Kundenunzufriedenheit."
},
  {
  "id": "lf5-f59",
  "category": "Kundenbindung",
  "question": "Was ist der Hauptzweck von 'Bonusprogrammen' im Rahmen der Kundenbindung?",
  "answer": "Die ökonomische Bindung durch finanzielle Anreize zur Wiederholung von Käufen."
},
  {
  "id": "lf5-f60",
  "category": "Beschwerdemanagement",
  "question": "Was ist der erste Schritt der L-E-S-T Regel?",
  "answer": "Listen (Zuhören)."
},
  {
  "id": "lf5-f61",
  "category": "Kennzahlen Inbound",
  "question": "Ein Call Center hat eine AHT von 200 Sekunden. Was bedeutet das?",
  "answer": "Jeder Anruf benötigt durchschnittlich 200 Sekunden Bearbeitungszeit (Gespräch, Halten, Nachbearbeitung)."
},
  {
  "id": "lf5-f62",
  "category": "Kennzahlen Outbound",
  "question": "Ein Outbound-Projekt hat 1000 Bruttokontakte und 400 Nettokontakte. Wie hoch ist die Ausschöpfungsquote?",
  "answer": "40% (400/1000 * 100)."
},
  {
  "id": "lf5-f63",
  "category": "Zahlungsverkehr",
  "question": "Welche Funktion hat die SCHUFA bei der Bonitätsprüfung?",
  "answer": "Sie sammelt und stellt Informationen zur Kreditwürdigkeit von Personen bereit."
},
  {
  "id": "lf5-f64",
  "category": "Beratungsgespräche",
  "question": "Nenne ein Element der 'Nutzenargumentation'.",
  "answer": "Merkmal, Vorteil oder Nutzen."
},
  {
  "id": "lf5-f65",
  "category": "Kundendaten",
  "question": "Warum ist 'Vollständigkeit' bei der Datenerfassung wichtig?",
  "answer": "Um alle für den Geschäftsprozess relevanten Informationen für eine effiziente Bearbeitung zu haben."
},
  {
  "id": "lf5-f66",
  "category": "Kundenbindung",
  "question": "Was ist der Unterschied zwischen 'Kundenbindung' und 'Kundenloyalität'?",
  "answer": "Kundenbindung ist das Ergebnis von Maßnahmen, Loyalität ist die freiwillige, emotionale Verbundenheit des Kunden."
},
  {
  "id": "lf5-f67",
  "category": "Beschwerdemanagement",
  "question": "Was ist der 'zweite' Schritt der L-E-S-T Regel?",
  "answer": "Empathize (Empathie zeigen)."
},
  {
  "id": "lf5-f68",
  "category": "Kennzahlen Inbound",
  "question": "Was ist ein 'guter' FCR-Wert und warum?",
  "answer": "Ein hoher FCR-Wert (z.B. >70%) ist gut, da er hohe Kundenzufriedenheit und niedrige Kosten durch weniger Folgeanrufe bedeutet."
},
  {
  "id": "lf5-f69",
  "category": "Kennzahlen Outbound",
  "question": "Ein Outbound-Agent hat 100 Nettokontakte und 20 Abschlüsse. Wie hoch ist die Erfolgsquote?",
  "answer": "20% (20/100 * 100)."
},
  {
  "id": "lf5-f70",
  "category": "Zahlungsverkehr",
  "question": "Welche Konsequenz hat ein 'Lieferverzug' für den Kunden?",
  "answer": "Der Kunde kann unter Umständen vom Vertrag zurücktreten oder Schadensersatz fordern."
},
  {
  "id": "lf5-f71",
  "category": "Beratungsgespräche",
  "question": "Was ist das Ziel des 'Gesprächsabschlusses'?",
  "answer": "Zusammenfassung der Ergebnisse, Vereinbarung nächster Schritte und eine positive Verabschiedung."
},
  {
  "id": "lf5-f72",
  "category": "Kundendaten",
  "question": "Warum ist 'Multitasking' bei der Datenerfassung während eines Gesprächs problematisch?",
  "answer": "Es kann zu Konzentrationsverlust, Fehlern bei der Dateneingabe und einer verminderten Gesprächsqualität führen."
},
  {
  "id": "lf5-f73",
  "category": "Kundenbindung",
  "question": "Nenne ein Beispiel für 'strukturelle Kundenbindung'.",
  "answer": "Ein Software-Abonnement oder ein Wartungsvertrag."
},
  {
  "id": "lf5-f74",
  "category": "Beschwerdemanagement",
  "question": "Was ist der 'dritte' Schritt der L-E-S-T Regel?",
  "answer": "Solve (Lösen)."
},
  {
  "id": "lf5-f75",
  "category": "Kennzahlen Inbound",
  "question": "Was ist der Unterschied zwischen 'Gesprächszeit' und 'Nachbearbeitungszeit' in der AHT?",
  "answer": "Gesprächszeit ist die reine Sprechzeit mit dem Kunden, Nachbearbeitungszeit ist die Zeit nach dem Gespräch für administrative Aufgaben."
},
  {
  "id": "lf5-f76",
  "category": "Kennzahlen Outbound",
  "question": "Ein Unternehmen hat eine Stornoquote von 10%. Was bedeutet das?",
  "answer": "10% der generierten Abschlüsse werden später vom Kunden widerrufen."
},
  {
  "id": "lf5-f77",
  "category": "Zahlungsverkehr",
  "question": "Was ist der Vorteil einer 'Vorkasse' für das Unternehmen?",
  "answer": "Minimierung des Zahlungsausfallrisikos, da die Ware erst nach Zahlungseingang versendet wird."
},
  {
  "id": "lf5-f78",
  "category": "Beratungsgespräche",
  "question": "Was ist der 'Fragetrichter'?",
  "answer": "Eine Gesprächstechnik, die von offenen zu geschlossenen Fragen überleitet, um Informationen zu sammeln und das Gespräch zu lenken."
},
  {
  "id": "lf5-f79",
  "category": "Kundendaten",
  "question": "Warum ist 'Konsistenz' bei der Datenerfassung wichtig?",
  "answer": "Sorgt für Datenqualität, erleichtert die Analyse und vermeidet Fehler bei der Datenverarbeitung."
},
  {
  "id": "lf5-f80",
  "category": "Kundenbindung",
  "question": "Nenne ein Beispiel für 'faktische Kundenbindung'.",
  "answer": "Ein Kunde bleibt bei einem Anbieter, weil es keine Alternativen gibt oder der Wechsel zu aufwendig wäre."
},
  {
  "id": "lf5-f81",
  "category": "Beschwerdemanagement",
  "question": "Was ist der 'vierte' Schritt der L-E-S-T Regel?",
  "answer": "Thank (Danken)."
},
  {
  "id": "lf5-f82",
  "category": "Kennzahlen Inbound",
  "question": "Was bedeutet ein Servicelevel von 90/10?",
  "answer": "90% der Anrufe werden innerhalb von 10 Sekunden angenommen."
},
  {
  "id": "lf5-f83",
  "category": "Kennzahlen Outbound",
  "question": "Was ist der 'Sprechzeitanteil' im Outbound?",
  "answer": "Die reine Gesprächszeit im Verhältnis zur gesamten Arbeitszeit des Agenten."
},
  {
  "id": "lf5-f84",
  "category": "Zahlungsverkehr",
  "question": "Was ist eine 'Mängelrüge' und welche Form muss sie haben?",
  "answer": "Die Mitteilung des Käufers über einen Mangel der Ware; sie muss schriftlich erfolgen."
},
  {
  "id": "lf5-f85",
  "category": "Beratungsgespräche",
  "question": "Was ist das Ziel der 'Bedarfsermittlung'?",
  "answer": "Die genauen Wünsche und Bedürfnisse des Kunden zu verstehen und die aktuelle Situation zu analysieren."
},
  {
  "id": "lf5-f86",
  "category": "Kundendaten",
  "question": "Was versteht man unter 'Datenpflege' bei Bestandskunden?",
  "answer": "Die Aktualisierung, Korrektur und Ergänzung bestehender Kundendaten, um deren Qualität zu sichern."
},
  {
  "id": "lf5-f87",
  "category": "Kundenbindung",
  "question": "Nenne ein Beispiel für 'ökonomische Kundenbindung'.",
  "answer": "Ein Vielfliegerprogramm oder ein Kundenkartenrabatt."
},
  {
  "id": "lf5-f88",
  "category": "Beschwerdemanagement",
  "question": "Warum ist 'Empathie' im Beschwerdegespräch wichtig?",
  "answer": "Zeigt dem Kunden Verständnis, deeskaliert die Situation und baut Vertrauen auf."
},
  {
  "id": "lf5-f89",
  "category": "Kennzahlen Inbound",
  "question": "Welche Kennzahl ist entscheidend für die Kundenzufriedenheit bei der Erstlösung?",
  "answer": "FCR (First Call Resolution)."
},
  {
  "id": "lf5-f90",
  "category": "Kennzahlen Outbound",
  "question": "Was ist der Unterschied zwischen 'Erfolgsquote' und 'Stornoquote'?",
  "answer": "Erfolgsquote misst den Anteil der Abschlüsse an Nettokontakten, Stornoquote den Anteil der widerrufenen Abschlüsse."
},
  {
  "id": "lf5-f91",
  "category": "Zahlungsverkehr",
  "question": "Was ist der Vorteil einer 'SEPA-Lastschrift' für den Kunden?",
  "answer": "Bequemlichkeit, da er sich nicht um manuelle Überweisungen kümmern muss."
},
  {
  "id": "lf5-f92",
  "category": "Beratungsgespräche",
  "question": "Nenne eine Technik zum 'Gesprächsabschluss'.",
  "answer": "Zusammenfassungs-Technik, Alternativ-Technik, Dank."
},
  {
  "id": "lf5-f93",
  "category": "Kundendaten",
  "question": "Was ist der Unterschied zwischen 'Daten von neuen Kunden erfassen' und 'Daten von Bestandskunden pflegen'?",
  "answer": "Erfassen ist die erstmalige Aufnahme, Pflegen ist die kontinuierliche Aktualisierung und Korrektur."
},
  {
  "id": "lf5-f94",
  "category": "Kundenbindung",
  "question": "Was ist der Hauptzweck der 'ABC-Analyse'?",
  "answer": "Effiziente Allokation von Ressourcen durch Priorisierung der Kunden nach ihrem Wert."
},
  {
  "id": "lf5-f95",
  "category": "Beschwerdemanagement",
  "question": "Warum ist 'Dokumentation' im Beschwerdemanagement wichtig?",
  "answer": "Sichert Nachvollziehbarkeit, dient der Prozessoptimierung und als rechtlicher Nachweis."
},
  {
  "id": "lf5-f96",
  "category": "Kennzahlen Inbound",
  "question": "Welche Faktoren beeinflussen die AHT?",
  "answer": "Komplexität des Anliegens, Agenten-Skill, Systemgeschwindigkeit, Nachbearbeitungsaufwand."
},
  {
  "id": "lf5-f97",
  "category": "Kennzahlen Outbound",
  "question": "Was ist ein 'Entscheiderkontakt' im Outbound?",
  "answer": "Ein Nettokontakt, bei dem die tatsächlich entscheidungsbefugte Person erreicht wird."
},
  {
  "id": "lf5-f98",
  "category": "Zahlungsverkehr",
  "question": "Was ist der Nachteil einer 'Rechnung' für das Unternehmen?",
  "answer": "Hohes Zahlungsausfallrisiko und Liquiditätsbindung durch Vorleistung."
},
  {
  "id": "lf5-f99",
  "category": "Beratungsgespräche",
  "question": "Was ist der 'Bumerang-Methode' bei der Einwandbehandlung?",
  "answer": "Der Einwand des Kunden wird aufgegriffen und in ein Argument für das eigene Angebot umgewandelt."
},
  {
  "id": "lf5-f100",
  "category": "Kundendaten",
  "question": "Was ist eine 'Dublette' in einer Kundendatenbank?",
  "answer": "Ein Datensatz, der einen bereits vorhandenen Kunden mehrfach abbildet."
},
  {
  "id": "lf5-f101",
  "category": "Kundenbindung",
  "question": "Was ist der Unterschied zwischen 'CRM-Datenbanken' und 'CRM-Software'?",
  "answer": "CRM-Datenbanken speichern die Daten, CRM-Software bietet die Funktionen zur Verwaltung und Analyse der Kundenbeziehungen."
},
  {
  "id": "lf5-f102",
  "category": "Beschwerdemanagement",
  "question": "Warum ist es wichtig, im Beschwerdegespräch keine 'Schuldzuweisungen' zu machen?",
  "answer": "Verschärft die Situation, demotiviert den Kunden und verhindert eine konstruktive Lösung."
},
  {
  "id": "lf5-f103",
  "category": "Kennzahlen Inbound",
  "question": "Welche Maßnahmen können die Lost-Call-Quote reduzieren?",
  "answer": "Erhöhung der Agentenanzahl, Optimierung der Routing-Strategie, Verbesserung der IVR-Systeme."
},
  {
  "id": "lf5-f104",
  "category": "Kennzahlen Outbound",
  "question": "Wie kann die Stornoquote im Outbound reduziert werden?",
  "answer": "Verbesserung der Beratungsqualität, präzise Bedarfsanalyse, transparente Kommunikation der Vertragsbedingungen."
},
  {
  "id": "lf5-f105",
  "category": "Zahlungsverkehr",
  "question": "Was ist der Zweck einer 'Bonitätsprüfung'?",
  "answer": "Absicherung des Unternehmens vor Zahlungsausfällen und Risikominimierung."
},
];

// Quiz Questions
export const quizQuestions: QuizQuestion[] = [
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
  },
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
  { id: 'lf4-f100', category: 'Sicherheit/Schutz', question: 'Was ist die Verfügbarkeit von Daten?', answer: 'Sicherstellung, dass Daten bei Bedarf für berechtigte Nutzer zugänglich sind.' },
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
    question: 'Was ist das Ziel der IZURE Full Mastery Vorbereitung?',
    type: 'multiple-choice',
    options: ['Bestehen mit 50%', 'Exzellente Beherrschung aller kritischen Kerninhalte für Full Mastery', 'Nur die Flashcards lernen', 'Schnell fertig werden'],
    correctAnswer: 'Exzellente Beherrschung aller kritischen Kerninhalte für Full Mastery',
    explanation: 'Dieses System ist darauf ausgelegt, Sie zur vollen Systembeherrschung zu führen.',
    difficulty: 'easy',
    category: 'Systemfokus'
  },
  {
  "id": "lf5-q1",
  "category": "Beratungsgespräche",
  "type": "multiple-choice",
  "question": "Ein Kunde ruft an und ist verärgert, weil er eine falsche Rechnung erhalten hat. Welcher Schritt im Beratungsgespräch ist hier primär zu beachten, bevor eine Lösung angeboten wird?",
  "options": [
    "Direkt eine Korrektur der Rechnung anbieten.",
    "Den Kunden unterbrechen und nach der Rechnungsnummer fragen.",
    "Aktives Zuhören und Empathie zeigen, um den Bedarf zu ermitteln.",
    "Das Gespräch schnell beenden und an die Fachabteilung weiterleiten."
  ],
  "correctAnswer": "Aktives Zuhören und Empathie zeigen, um den Bedarf zu ermitteln.",
  "explanation": "In dieser Situation ist es entscheidend, zuerst den Kunden zu beruhigen und seinen Ärger zu verstehen (Bedarfsermittlung durch aktives Zuhören), bevor eine Lösung angeboten wird. Dies entspricht der Phase der Bedarfsermittlung und dem Prinzip des aktiven Zuhörens.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q2",
  "category": "Beratungsgespräche",
  "type": "multiple-choice",
  "question": "Sie möchten von einem Kunden herausfinden, welche spezifischen Anforderungen er an ein neues Produkt hat. Welchen Fragetyp sollten Sie zuerst verwenden?",
  "options": [
    "Geschlossene Fragen",
    "Suggestivfragen",
    "Offene Fragen (W-Fragen)",
    "Alternativfragen"
  ],
  "correctAnswer": "Offene Fragen (W-Fragen)",
  "explanation": "Offene Fragen (W-Fragen wie 'Was', 'Wie', 'Warum') sind ideal, um umfassende Informationen zu sammeln und den Kunden zum Sprechen zu animieren. Sie bilden den Beginn des Fragetrichters.",
  "difficulty": "easy"
},
  {
  "id": "lf5-q3",
  "category": "Beratungsgespräche",
  "type": "multiple-choice",
  "question": "Ein Kunde sagt: 'Ich bin mir nicht sicher, ob dieses teure Produkt wirklich das Richtige für mich ist.' Wie könnten Sie die 'Bumerang-Methode' der Einwandbehandlung anwenden?",
  "options": [
    "'Ich verstehe Ihre Bedenken. Gerade weil es teuer ist, ist es eine Investition in Qualität, die sich langfristig auszahlt.'",
    "'Viele Kunden waren anfangs skeptisch, sind aber jetzt begeistert.'",
    "'Wenn Sie es nicht kaufen, verpassen Sie eine große Chance.'",
    "'Das Produkt ist nicht teuer, es ist seinen Preis wert.'"
  ],
  "correctAnswer": "'Ich verstehe Ihre Bedenken. Gerade weil es teuer ist, ist es eine Investition in Qualität, die sich langfristig auszahlt.'",
  "explanation": "Die Bumerang-Methode greift den Einwand des Kunden auf und wandelt ihn in ein Argument für das eigene Angebot um. Hier wird der Einwand 'teuer' in den Nutzen 'Investition in Qualität' umgewandelt.",
  "difficulty": "hard"
},
  {
  "id": "lf5-q4",
  "category": "Beratungsgespräche",
  "type": "multiple-choice",
  "question": "Welche Aussage beschreibt am besten die 'Merkmal-Nutzen-Brücke'?",
  "options": [
    "Ein Produktmerkmal wird direkt als Vorteil präsentiert.",
    "Ein Produktmerkmal wird mit einem Vorteil und einem konkreten Kundennutzen verknüpft.",
    "Der Kundennutzen wird ohne Bezug zum Produktmerkmal hervorgehoben.",
    "Es werden nur die technischen Spezifikationen des Produkts genannt."
  ],
  "correctAnswer": "Ein Produktmerkmal wird mit einem Vorteil und einem konkreten Kundennutzen verknüpft.",
  "explanation": "Die Merkmal-Nutzen-Brücke übersetzt ein Merkmal (Was ist es?) über einen Vorteil (Was bewirkt es?) in einen konkreten Nutzen für den Kunden (Was hat der Kunde davon?).",
  "difficulty": "medium"
},
  {
  "id": "lf5-q5",
  "category": "Beratungsgespräche",
  "type": "multiple-choice",
  "question": "Was ist ein primäres Ziel des 'Gesprächsabschlusses' in einem Beratungsgespräch?",
  "options": [
    "Den Kunden zu einem schnellen Kauf drängen.",
    "Die eigenen Verkaufsziele um jeden Preis erreichen.",
    "Die Ergebnisse zusammenfassen und nächste Schritte klar definieren.",
    "Ein weiteres Produkt anbieten, um den Umsatz zu steigern."
  ],
  "correctAnswer": "Die Ergebnisse zusammenfassen und nächste Schritte klar definieren.",
  "explanation": "Der Gesprächsabschluss dient dazu, die besprochenen Punkte zu rekapitulieren, offene Fragen zu klären und klare Vereinbarungen für das weitere Vorgehen zu treffen, um eine positive Kundenbeziehung zu sichern.",
  "difficulty": "easy"
},
  {
  "id": "lf5-q6",
  "category": "Kundendaten",
  "type": "multiple-choice",
  "question": "Ein Unternehmen erfasst das Alter seiner Kunden anstatt des Geburtsdatums. Gegen welchen Grundsatz der Datenerfassung wird hier verstoßen?",
  "options": [
    "Richtigkeit",
    "Vollständigkeit",
    "Redundanzvermeidung",
    "Zeitstabilität"
  ],
  "correctAnswer": "Zeitstabilität",
  "explanation": "Das Alter ist nicht zeitstabil, da es sich ständig ändert. Das Geburtsdatum hingegen bleibt konstant und ermöglicht eine präzise und dauerhafte Datennutzung.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q7",
  "category": "Kundendaten",
  "type": "multiple-choice",
  "question": "Welche der folgenden Maßnahmen trägt am ehesten zur 'Redundanzvermeidung' bei?",
  "options": [
    "Regelmäßige manuelle Überprüfung aller Datensätze.",
    "Einsatz von Deduplizierungssoftware beim Import neuer Daten.",
    "Jeden Kunden bei jedem Kontakt neu erfassen.",
    "Daten in verschiedenen Systemen unabhängig voneinander speichern."
  ],
  "correctAnswer": "Einsatz von Deduplizierungssoftware beim Import neuer Daten.",
  "explanation": "Deduplizierungssoftware identifiziert und konsolidiert doppelte Datensätze automatisch, was die effizienteste Methode zur Redundanzvermeidung ist.",
  "difficulty": "hard"
},
  {
  "id": "lf5-q8",
  "category": "Kundendaten",
  "type": "multiple-choice",
  "question": "Ein Call Center Agent erfasst während eines komplexen Kundengesprächs gleichzeitig Daten im CRM-System. Welche negative Auswirkung ist hier am wahrscheinlichsten?",
  "options": [
    "Das Gespräch wird kürzer als erwartet.",
    "Die Kundenzufriedenheit steigt aufgrund der schnellen Erfassung.",
    "Erhöhte Fehlerquote bei der Dateneingabe und/oder verminderte Gesprächsqualität.",
    "Der Agent kann sich besser auf den Kunden konzentrieren."
  ],
  "correctAnswer": "Erhöhte Fehlerquote bei der Dateneingabe und/oder verminderte Gesprächsqualität.",
  "explanation": "Multitasking, insbesondere bei kognitiv anspruchsvollen Aufgaben wie einem komplexen Gespräch und Dateneingabe, führt oft zu einer verminderten Leistung in beiden Bereichen und erhöht die Fehleranfälligkeit.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q9",
  "category": "Kundenbindung",
  "type": "multiple-choice",
  "question": "Ein Unternehmen bietet seinen Stammkunden exklusive Vorabzugänge zu neuen Produkten und persönliche Ansprechpartner. Welche Art der Kundenbindung wird hier primär gefördert?",
  "options": [
    "Ökonomische Kundenbindung",
    "Faktische Kundenbindung",
    "Strukturelle Kundenbindung",
    "Emotionale Kundenbindung"
  ],
  "correctAnswer": "Emotionale Kundenbindung",
  "explanation": "Exklusive Vorzüge und persönliche Betreuung stärken das Vertrauen und die Identifikation des Kunden mit dem Unternehmen, was typisch für emotionale Kundenbindung ist.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q10",
  "category": "Kundenbindung",
  "type": "multiple-choice",
  "question": "Was ist der Hauptunterschied zwischen 'Kundenbindung' und 'Kundenloyalität'?",
  "options": [
    "Kundenbindung ist freiwillig, Loyalität ist erzwungen.",
    "Kundenbindung ist das Ergebnis von Maßnahmen, Loyalität ist die freiwillige, emotionale Verbundenheit.",
    "Kundenbindung ist kurzfristig, Loyalität ist langfristig.",
    "Kundenbindung bezieht sich auf Neukunden, Loyalität auf Bestandskunden."
  ],
  "correctAnswer": "Kundenbindung ist das Ergebnis von Maßnahmen, Loyalität ist die freiwillige, emotionale Verbundenheit.",
  "explanation": "Kundenbindung beschreibt die Maßnahmen, die ein Unternehmen ergreift, um Kunden zu halten. Kundenloyalität hingegen ist eine tiefere, oft emotionale Verbundenheit, die zu wiederholten Käufen und positiver Mundpropaganda führt.",
  "difficulty": "hard"
},
  {
  "id": "lf5-q11",
  "category": "Kundenbindung",
  "type": "multiple-choice",
  "question": "Ein Unternehmen klassifiziert seine Kunden nach ihrem Umsatzanteil in A-, B- und C-Kunden. Welches Instrument wird hier angewendet und was ist das Ziel?",
  "options": [
    "SWOT-Analyse; Stärken und Schwächen identifizieren.",
    "ABC-Analyse; Ressourcen effizient auf die wichtigsten Kunden konzentrieren.",
    "Portfolio-Analyse; Produktlebenszyklen bestimmen.",
    "Benchmarking; Vergleich mit Wettbewerbern."
  ],
  "correctAnswer": "ABC-Analyse; Ressourcen effizient auf die wichtigsten Kunden konzentrieren.",
  "explanation": "Die ABC-Analyse ist ein bewährtes Instrument zur Kundenklassifizierung, um Marketing- und Vertriebsressourcen optimal einzusetzen und sich auf die profitabelsten Kunden (A-Kunden) zu konzentrieren.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q12",
  "category": "Beschwerdemanagement",
  "type": "multiple-choice",
  "question": "Ein Kunde beschwert sich über ein defektes Produkt. Der Agent sagt: 'Das ist aber das erste Mal, dass wir so etwas hören.' Welchen der '10 Fehler im Beschwerdegespräch' begeht der Agent hier?",
  "options": [
    "Kunden unterbrechen.",
    "Schuld auf Kollegen schieben.",
    "Kunden nicht ernst nehmen / Rechtfertigen.",
    "Vage Versprechen machen."
  ],
  "correctAnswer": "Kunden nicht ernst nehmen / Rechtfertigen.",
  "explanation": "Diese Aussage relativiert das Problem des Kunden und signalisiert mangelndes Verständnis oder sogar eine Rechtfertigung, anstatt sich auf die Lösung zu konzentrieren.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q13",
  "category": "Beschwerdemanagement",
  "type": "multiple-choice",
  "question": "Nachdem ein Kunde seine Beschwerde geäußert hat, fasst der Agent die Situation zusammen und fragt: 'Habe ich das richtig verstanden, dass...?' Welchem Schritt der L-E-S-T Regel entspricht dies?",
  "options": [
    "Listen",
    "Empathize",
    "Solve",
    "Thank"
  ],
  "correctAnswer": "Listen",
  "explanation": "Das Zusammenfassen und Rückfragen ist ein zentraler Bestandteil des aktiven Zuhörens (Listen), um sicherzustellen, dass die Beschwerde vollständig und korrekt verstanden wurde.",
  "difficulty": "easy"
},
  {
  "id": "lf5-q14",
  "category": "Beschwerdemanagement",
  "type": "multiple-choice",
  "question": "Ein Kunde droht mit Kündigung seines Vertrags. Der Agent soll ein 'Haltegespräch' führen. Was ist das primäre Ziel dieses Gesprächs?",
  "options": [
    "Den Kunden sofort kündigen lassen.",
    "Die Gründe für die Kündigungsabsicht herausfinden und den Kunden vom Verbleib überzeugen.",
    "Dem Kunden ein teureres Produkt verkaufen.",
    "Das Gespräch schnell beenden, um Zeit zu sparen."
  ],
  "correctAnswer": "Die Gründe für die Kündigungsabsicht herausfinden und den Kunden vom Verbleib überzeugen.",
  "explanation": "Ein Haltegespräch ist ein präventives Instrument zur Kundenbindung, das darauf abzielt, die Ursachen für die Kündigungsabsicht zu identifizieren und durch gezielte Maßnahmen den Kunden zum Bleiben zu bewegen.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q15",
  "category": "Beschwerdemanagement",
  "type": "multiple-choice",
  "question": "Was ist der wesentliche Unterschied zwischen 'Kulanz' und einem 'Rechtsanspruch' im Beschwerdemanagement?",
  "options": [
    "Kulanz ist immer teurer als ein Rechtsanspruch.",
    "Kulanz ist eine freiwillige Leistung, ein Rechtsanspruch ist einklagbar.",
    "Kulanz wird nur bei A-Kunden gewährt, ein Rechtsanspruch bei allen.",
    "Kulanz ist gesetzlich vorgeschrieben, ein Rechtsanspruch nicht."
  ],
  "correctAnswer": "Kulanz ist eine freiwillige Leistung, ein Rechtsanspruch ist einklagbar.",
  "explanation": "Kulanz ist eine freiwillige Geste des Unternehmens, um Kunden zufriedenzustellen, auch wenn kein rechtlicher Anspruch besteht. Ein Rechtsanspruch hingegen ist gesetzlich oder vertraglich festgelegt und kann gerichtlich durchgesetzt werden.",
  "difficulty": "hard"
},
  {
  "id": "lf5-q16",
  "category": "Kennzahlen Inbound",
  "type": "multiple-choice",
  "question": "Ein Call Center hat folgende Daten: Gesprächszeit 150s, Haltezeit 10s, Nachbearbeitungszeit 30s. Wie hoch ist die AHT?",
  "options": [
    "150 Sekunden",
    "160 Sekunden",
    "190 Sekunden",
    "200 Sekunden"
  ],
  "correctAnswer": "190 Sekunden",
  "explanation": "Die AHT (Average Handling Time) berechnet sich aus der Summe von Gesprächszeit, Haltezeit und Nachbearbeitungszeit: 150s + 10s + 30s = 190s.",
  "difficulty": "easy"
},
  {
  "id": "lf5-q17",
  "category": "Kennzahlen Inbound",
  "type": "multiple-choice",
  "question": "Ein Servicelevel von 80/20 bedeutet, dass...",
  "options": [
    "80% der Anrufe in 20 Minuten angenommen werden.",
    "20% der Anrufe in 80 Sekunden angenommen werden.",
    "80% der Anrufe innerhalb von 20 Sekunden angenommen werden.",
    "20% der Anrufe verloren gehen."
  ],
  "correctAnswer": "80% der Anrufe innerhalb von 20 Sekunden angenommen werden.",
  "explanation": "Der Servicelevel wird als X/Y angegeben, wobei X der Prozentsatz der Anrufe ist, die innerhalb von Y Sekunden angenommen werden sollen.",
  "difficulty": "easy"
},
  {
  "id": "lf5-q18",
  "category": "Kennzahlen Inbound",
  "type": "multiple-choice",
  "question": "Welche Maßnahme ist am effektivsten, um die FCR (First Call Resolution) Quote zu verbessern?",
  "options": [
    "Verkürzung der durchschnittlichen Gesprächszeit.",
    "Erhöhung der Anzahl der Agenten.",
    "Intensives Training der Agenten in Problemlösung und Produktkenntnis.",
    "Einführung eines neuen CRM-Systems ohne Schulung."
  ],
  "correctAnswer": "Intensives Training der Agenten in Problemlösung und Produktkenntnis.",
  "explanation": "Eine hohe FCR-Quote erfordert, dass Agenten in der Lage sind, Probleme beim ersten Kontakt umfassend zu lösen. Dies gelingt nur mit exzellenten Problemlösungsfähigkeiten und tiefem Produktwissen.",
  "difficulty": "hard"
},
  {
  "id": "lf5-q19",
  "category": "Kennzahlen Outbound",
  "type": "multiple-choice",
  "question": "Ein Outbound-Projekt hat 500 Bruttokontakte und 200 Nettokontakte. Wie hoch ist die Ausschöpfungsquote?",
  "options": [
    "20%",
    "40%",
    "50%",
    "250%"
  ],
  "correctAnswer": "40%",
  "explanation": "Ausschöpfungsquote = (Nettokontakte / Bruttokontakte) * 100 = (200 / 500) * 100 = 40%.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q20",
  "category": "Kennzahlen Outbound",
  "type": "multiple-choice",
  "question": "Ein Outbound-Agent hat aus 150 Nettokontakten 30 Abschlüsse erzielt. Wie hoch ist die Erfolgsquote (Conversion Rate)?",
  "options": [
    "15%",
    "20%",
    "30%",
    "50%"
  ],
  "correctAnswer": "20%",
  "explanation": "Erfolgsquote (Conversion Rate) = (Abschlüsse / Nettokontakte) * 100 = (30 / 150) * 100 = 20%.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q21",
  "category": "Kennzahlen Outbound",
  "type": "multiple-choice",
  "question": "Was ist die 'Stornoquote' und welche Rückschlüsse lassen sich daraus ziehen?",
  "options": [
    "Anteil der Anrufe, die nicht zustande kommen; Rückschluss auf die Qualität der Adressen.",
    "Anteil der Bestellungen, die widerrufen werden; Rückschluss auf die Beratungsqualität oder Produktzufriedenheit.",
    "Anteil der Kunden, die nicht erreichbar sind; Rückschluss auf die Erreichbarkeit.",
    "Anteil der erfolgreich abgeschlossenen Gespräche; Rückschluss auf die Vertriebsleistung."
  ],
  "correctAnswer": "Anteil der Bestellungen, die widerrufen werden; Rückschluss auf die Beratungsqualität oder Produktzufriedenheit.",
  "explanation": "Eine hohe Stornoquote deutet oft auf Mängel in der Beratung (z.B. falsche Erwartungen geweckt) oder auf Probleme mit dem Produkt selbst hin.",
  "difficulty": "hard"
},
  {
  "id": "lf5-q22",
  "category": "Zahlungsverkehr",
  "type": "multiple-choice",
  "question": "Ein Kunde hat eine SEPA-Lastschrift ohne gültiges Mandat erhalten. Wie lange hat er Zeit, dieser Abbuchung zu widersprechen?",
  "options": [
    "8 Wochen",
    "6 Monate",
    "13 Monate",
    "Unbegrenzt"
  ],
  "correctAnswer": "13 Monate",
  "explanation": "Bei einer unautorisierten Lastschrift (ohne gültiges Mandat) beträgt die Widerspruchsfrist 13 Monate ab dem Belastungsdatum. Bei einer autorisierten Lastschrift sind es 8 Wochen.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q23",
  "category": "Zahlungsverkehr",
  "type": "multiple-choice",
  "question": "Welche Zahlungsart bietet dem Unternehmen die höchste Sicherheit vor Zahlungsausfällen?",
  "options": [
    "Rechnungskauf",
    "SEPA-Lastschrift",
    "Vorkasse",
    "Kreditkarte"
  ],
  "correctAnswer": "Vorkasse",
  "explanation": "Bei Vorkasse erhält das Unternehmen die Zahlung, bevor die Ware oder Dienstleistung erbracht wird, wodurch das Zahlungsausfallrisiko minimiert wird.",
  "difficulty": "easy"
},
  {
  "id": "lf5-q24",
  "category": "Zahlungsverkehr",
  "type": "multiple-choice",
  "question": "Was ist der Hauptzweck einer 'Bonitätsprüfung' aus Unternehmenssicht?",
  "options": [
    "Die Adresse des Kunden zu verifizieren.",
    "Die Kaufkraft des Kunden zu ermitteln.",
    "Das Risiko eines Zahlungsausfalls zu minimieren.",
    "Die bevorzugte Zahlungsart des Kunden herauszufinden."
  ],
  "correctAnswer": "Das Risiko eines Zahlungsausfalls zu minimieren.",
  "explanation": "Die Bonitätsprüfung dient dazu, die Kreditwürdigkeit eines Kunden zu beurteilen und das Unternehmen vor finanziellen Verlusten durch Nichtzahlung zu schützen.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q25",
  "category": "Zahlungsverkehr",
  "type": "multiple-choice",
  "question": "Ein Kunde hat eine Ware bestellt, die nicht zum vereinbarten Liefertermin ankommt. Was ist die korrekte Bezeichnung für diese Situation?",
  "options": [
    "Mängelrüge",
    "Stornierung",
    "Lieferverzug",
    "Falschlieferung"
  ],
  "correctAnswer": "Lieferverzug",
  "explanation": "Lieferverzug tritt ein, wenn die Lieferung einer Ware oder Dienstleistung nicht zum vertraglich vereinbarten Zeitpunkt erfolgt.",
  "difficulty": "easy"
},
  {
  "id": "lf5-q26",
  "category": "Kundendaten",
  "type": "multiple-choice",
  "question": "Welcher der folgenden Punkte ist KEIN Grundsatz der Datenerfassung (R-V-R-Z-K)?",
  "options": [
    "Richtigkeit",
    "Vollständigkeit",
    "Relevanz",
    "Konsistenz"
  ],
  "correctAnswer": "Relevanz",
  "explanation": "Die 5 Grundsätze sind Richtigkeit, Vollständigkeit, Redundanzvermeidung, Zeitstabilität und Konsistenz. Relevanz ist zwar wichtig, aber kein expliziter Grundsatz im R-V-R-Z-K-Modell.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q27",
  "category": "Kundenbindung",
  "type": "multiple-choice",
  "question": "Ein Kunde nutzt seit Jahren ein bestimmtes Software-Abonnement, obwohl es günstigere Alternativen gibt. Er begründet dies mit dem hohen Aufwand, alle seine Daten zu migrieren. Welche Art der Kundenbindung liegt hier vor?",
  "options": [
    "Emotionale Kundenbindung",
    "Ökonomische Kundenbindung",
    "Strukturelle Kundenbindung",
    "Faktische Kundenbindung"
  ],
  "correctAnswer": "Strukturelle Kundenbindung",
  "explanation": "Die Bindung entsteht hier durch die hohen Wechselkosten und den Aufwand, der mit einem Anbieterwechsel verbunden wäre, was typisch für strukturelle Kundenbindung ist.",
  "difficulty": "hard"
},
  {
  "id": "lf5-q28",
  "category": "Beschwerdemanagement",
  "type": "multiple-choice",
  "question": "Ein Kunde beschwert sich, und der Agent antwortet: 'Ich kann Ihren Ärger gut verstehen. Lassen Sie uns gemeinsam eine Lösung finden.' Welchem Schritt der L-E-S-T Regel entspricht die erste Aussage?",
  "options": [
    "Listen",
    "Empathize",
    "Solve",
    "Thank"
  ],
  "correctAnswer": "Empathize",
  "explanation": "Die Aussage 'Ich kann Ihren Ärger gut verstehen' zeigt Empathie und Verständnis für die Gefühlslage des Kunden, was der zweite Schritt der L-E-S-T Regel ist.",
  "difficulty": "easy"
},
  {
  "id": "lf5-q29",
  "category": "Kennzahlen Inbound",
  "type": "multiple-choice",
  "question": "Welche Kennzahl gibt Aufschluss darüber, wie viele Anrufer auflegen, bevor sie mit einem Agenten verbunden werden?",
  "options": [
    "AHT",
    "Servicelevel",
    "Lost-Call-Quote",
    "FCR"
  ],
  "correctAnswer": "Lost-Call-Quote",
  "explanation": "Die Lost-Call-Quote misst den Prozentsatz der Anrufe, die abgebrochen werden, bevor ein Agent den Anruf entgegennehmen konnte.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q30",
  "category": "Kennzahlen Outbound",
  "type": "multiple-choice",
  "question": "Ein Outbound-Team hat 1000 Anwahlversuche (Bruttokontakte) und erreicht 300 Zielpersonen (Nettokontakte). Wie hoch ist die Ausschöpfungsquote?",
  "options": [
    "10%",
    "20%",
    "30%",
    "40%"
  ],
  "correctAnswer": "30%",
  "explanation": "Ausschöpfungsquote = (Nettokontakte / Bruttokontakte) * 100 = (300 / 1000) * 100 = 30%.",
  "difficulty": "easy"
},
  {
  "id": "lf5-q31",
  "category": "Zahlungsverkehr",
  "type": "multiple-choice",
  "question": "Was ist der Hauptnachteil des 'Rechnungskaufs' aus Unternehmenssicht?",
  "options": [
    "Hohe Transaktionskosten.",
    "Geringe Kundenakzeptanz.",
    "Hohes Zahlungsausfallrisiko und Liquiditätsbindung.",
    "Lange Bearbeitungszeiten."
  ],
  "correctAnswer": "Hohes Zahlungsausfallrisiko und Liquiditätsbindung.",
  "explanation": "Beim Rechnungskauf geht das Unternehmen in Vorleistung, was das Risiko birgt, dass der Kunde nicht zahlt, und Kapital bindet, bis die Zahlung eingeht.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q32",
  "category": "Beratungsgespräche",
  "type": "multiple-choice",
  "question": "Welche der folgenden Aussagen ist ein Beispiel für 'Paraphrasieren' im aktiven Zuhören?",
  "options": [
    "'Ich verstehe, wie Sie sich fühlen.'",
    "'Sie meinen also, dass das Produkt zu spät geliefert wurde?'",
    "'Erzählen Sie mir mehr darüber.'",
    "'Das ist ein häufiges Problem.'"
  ],
  "correctAnswer": "'Sie meinen also, dass das Produkt zu spät geliefert wurde?'",
  "explanation": "Paraphrasieren bedeutet, den Inhalt der Aussage des Kunden mit eigenen Worten wiederzugeben, um das Verständnis zu überprüfen und dem Kunden zu signalisieren, dass man zuhört.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q33",
  "category": "Kundendaten",
  "type": "multiple-choice",
  "question": "Warum ist die 'Vollständigkeit' von Kundendaten so wichtig?",
  "options": [
    "Um die Datenbankgröße zu maximieren.",
    "Um alle für den Geschäftsprozess relevanten Informationen für eine effiziente Bearbeitung zu haben.",
    "Um den Datenschutz zu gewährleisten.",
    "Um unnötige Daten zu sammeln."
  ],
  "correctAnswer": "Um alle für den Geschäftsprozess relevanten Informationen für eine effiziente Bearbeitung zu haben.",
  "explanation": "Unvollständige Daten können zu Fehlern, Verzögerungen und einer ineffizienten Bearbeitung von Kundenanliegen führen.",
  "difficulty": "easy"
},
  {
  "id": "lf5-q34",
  "category": "Kundenbindung",
  "type": "multiple-choice",
  "question": "Welche Art von CRM konzentriert sich auf die Analyse von Kundendaten zur Entwicklung von Marketingstrategien?",
  "options": [
    "Operatives CRM",
    "Analytisches CRM",
    "Kommunikatives CRM",
    "Strategisches CRM"
  ],
  "correctAnswer": "Analytisches CRM",
  "explanation": "Analytisches CRM nutzt Data Mining und andere Analysetools, um Kundenverhalten zu verstehen und zukünftige Trends vorherzusagen, was die Grundlage für strategische Entscheidungen bildet.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q35",
  "category": "Beschwerdemanagement",
  "type": "multiple-choice",
  "question": "Was ist der Hauptunterschied zwischen einer 'Beschwerde' und einer 'Reklamation'?",
  "options": [
    "Eine Beschwerde ist immer schriftlich, eine Reklamation mündlich.",
    "Eine Beschwerde hat keinen Rechtsanspruch, eine Reklamation basiert auf einem Mangel mit Rechtsanspruch.",
    "Eine Beschwerde kommt von Neukunden, eine Reklamation von Bestandskunden.",
    "Eine Beschwerde ist immer positiv, eine Reklamation negativ."
  ],
  "correctAnswer": "Eine Beschwerde hat keinen Rechtsanspruch, eine Reklamation basiert auf einem Mangel mit Rechtsanspruch.",
  "explanation": "Eine Beschwerde ist Ausdruck subjektiver Unzufriedenheit, während eine Reklamation sich auf einen objektiven Mangel bezieht, der einen rechtlichen Anspruch begründet.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q36",
  "category": "Kennzahlen Inbound",
  "type": "multiple-choice",
  "question": "Welche Kennzahl wird direkt durch die Einführung von Skill-Based-Routing verbessert?",
  "options": [
    "AHT",
    "Lost-Call-Quote",
    "FCR",
    "Produktivität"
  ],
  "correctAnswer": "FCR",
  "explanation": "Skill-Based-Routing leitet Anrufe direkt an den am besten geeigneten Agenten weiter, was die Wahrscheinlichkeit erhöht, dass das Problem beim ersten Kontakt gelöst wird (FCR).",
  "difficulty": "hard"
},
  {
  "id": "lf5-q37",
  "category": "Kennzahlen Outbound",
  "type": "multiple-choice",
  "question": "Ein Outbound-Projekt hat 500 Bruttokontakte, 250 Nettokontakte und 50 Abschlüsse. Wie hoch ist die Erfolgsquote?",
  "options": [
    "5%",
    "10%",
    "20%",
    "25%"
  ],
  "correctAnswer": "20%",
  "explanation": "Erfolgsquote = (Abschlüsse / Nettokontakte) * 100 = (50 / 250) * 100 = 20%.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q38",
  "category": "Zahlungsverkehr",
  "type": "multiple-choice",
  "question": "Welche der folgenden Aussagen zur SEPA-Lastschrift ist korrekt?",
  "options": [
    "Ein Mandat ist nicht erforderlich.",
    "Die Widerspruchsfrist beträgt immer 13 Monate.",
    "Bei einem gültigen Mandat beträgt die Widerspruchsfrist 8 Wochen.",
    "Der Kunde kann einer Lastschrift niemals widersprechen."
  ],
  "correctAnswer": "Bei einem gültigen Mandat beträgt die Widerspruchsfrist 8 Wochen.",
  "explanation": "Ein gültiges SEPA-Mandat ist für die Ausführung einer Lastschrift erforderlich. Die Widerspruchsfrist beträgt dann 8 Wochen. Ohne Mandat sind es 13 Monate.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q39",
  "category": "Beratungsgespräche",
  "type": "multiple-choice",
  "question": "Welche Technik des aktiven Zuhörens beinhaltet das Ansprechen der Gefühle des Kunden?",
  "options": [
    "Paraphrasieren",
    "Verbalisieren",
    "Zusammenfassen",
    "Signale geben"
  ],
  "correctAnswer": "Verbalisieren",
  "explanation": "Verbalisieren bedeutet, die vom Kunden geäußerten oder implizierten Gefühle zu benennen, um Empathie zu zeigen und das Verständnis zu vertiefen.",
  "difficulty": "easy"
},
  {
  "id": "lf5-q40",
  "category": "Kundendaten",
  "type": "multiple-choice",
  "question": "Warum ist 'Konsistenz' bei der Datenerfassung wichtig?",
  "options": [
    "Um die Datenbankgröße zu reduzieren.",
    "Um die Datenanalyse zu erschweren.",
    "Um Datenqualität zu gewährleisten und Fehler bei der Verarbeitung zu vermeiden.",
    "Um die Datenerfassung zu verlangsamen."
  ],
  "correctAnswer": "Um Datenqualität zu gewährleisten und Fehler bei der Verarbeitung zu vermeiden.",
  "explanation": "Konsistente Daten (einheitliche Formate, Schreibweisen) sind entscheidend für die Datenqualität, ermöglichen eine korrekte Analyse und verhindern Fehler bei der Nutzung der Daten.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q41",
  "category": "Kundenbindung",
  "type": "multiple-choice",
  "question": "Welche der folgenden Maßnahmen fördert primär die 'faktische Kundenbindung'?",
  "options": [
    "Ein persönlicher Geburtstagsgruß.",
    "Ein exklusives Bonusprogramm.",
    "Die Nutzung eines proprietären Systems, das schwer zu wechseln ist.",
    "Regelmäßige Zufriedenheitsumfragen."
  ],
  "correctAnswer": "Die Nutzung eines proprietären Systems, das schwer zu wechseln ist.",
  "explanation": "Faktische Kundenbindung entsteht durch mangelnde Alternativen oder hohe Wechselbarrieren, die den Kunden praktisch an das Unternehmen binden.",
  "difficulty": "hard"
},
  {
  "id": "lf5-q42",
  "category": "Beschwerdemanagement",
  "type": "multiple-choice",
  "question": "Ein Agent sagt zu einem beschwerdeführenden Kunden: 'Das ist nicht meine Schuld, das muss die Logistik verbockt haben.' Welchen Fehler begeht er hier?",
  "options": [
    "Kunden unterbrechen.",
    "Schuld auf Kollegen schieben.",
    "Kunden nicht ernst nehmen.",
    "Vage Versprechen machen."
  ],
  "correctAnswer": "Schuld auf Kollegen schieben.",
  "explanation": "Das Abwälzen der Verantwortung auf andere Abteilungen ist ein klassischer Fehler, der die Situation eskaliert und die Problemlösung erschwert.",
  "difficulty": "easy"
},
  {
  "id": "lf5-q43",
  "category": "Kennzahlen Inbound",
  "type": "multiple-choice",
  "question": "Ein Call Center hat eine durchschnittliche Wartezeit (ASA) von 45 Sekunden. Was bedeutet das?",
  "options": [
    "Jeder Anruf wird innerhalb von 45 Sekunden angenommen.",
    "Die Kunden warten durchschnittlich 45 Sekunden, bevor ein Agent den Anruf entgegennimmt.",
    "45% der Anrufe werden verloren.",
    "Die Gesprächszeit beträgt 45 Sekunden."
  ],
  "correctAnswer": "Die Kunden warten durchschnittlich 45 Sekunden, bevor ein Agent den Anruf entgegennimmt.",
  "explanation": "Die ASA (Average Speed of Answer) misst die durchschnittliche Zeit, die ein Anrufer in der Warteschleife verbringt, bevor er mit einem Agenten verbunden wird.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q44",
  "category": "Kennzahlen Outbound",
  "type": "multiple-choice",
  "question": "Welche Kennzahl ist am besten geeignet, um die Qualität der generierten Leads im Outbound zu beurteilen?",
  "options": [
    "Bruttokontakte",
    "Nettokontakte",
    "Ausschöpfungsquote",
    "Feststellquote"
  ],
  "correctAnswer": "Feststellquote",
  "explanation": "Die Feststellquote misst den Anteil der tatsächlichen Bestellungen im Verhältnis zu den Nettokontakten und gibt somit Aufschluss über die tatsächliche Qualität der generierten Leads, die zu einem Abschluss führen.",
  "difficulty": "hard"
},
  {
  "id": "lf5-q45",
  "category": "Zahlungsverkehr",
  "type": "multiple-choice",
  "question": "Ein Kunde möchte eine Mängelrüge einreichen. Welche Form muss diese haben, um rechtlich wirksam zu sein?",
  "options": [
    "Mündlich am Telefon.",
    "Per E-Mail ohne Anhang.",
    "Schriftlich (z.B. Brief, Fax, E-Mail mit qualifizierter Signatur).",
    "Per SMS."
  ],
  "correctAnswer": "Schriftlich (z.B. Brief, Fax, E-Mail mit qualifizierter Signatur).",
  "explanation": "Eine Mängelrüge muss aus Beweisgründen schriftlich erfolgen, um im Streitfall die Geltendmachung von Rechten zu ermöglichen.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q46",
  "category": "Beratungsgespräche",
  "type": "multiple-choice",
  "question": "Sie möchten sicherstellen, dass Sie den Kunden richtig verstanden haben. Welche Technik des aktiven Zuhörens wenden Sie an, indem Sie die Aussage des Kunden in eigenen Worten wiederholen?",
  "options": [
    "Verbalisieren",
    "Signale geben",
    "Paraphrasieren",
    "Zusammenfassen"
  ],
  "correctAnswer": "Paraphrasieren",
  "explanation": "Paraphrasieren dient der Überprüfung des Verständnisses und signalisiert dem Kunden Aufmerksamkeit und Wertschätzung.",
  "difficulty": "easy"
},
  {
  "id": "lf5-q47",
  "category": "Kundendaten",
  "type": "multiple-choice",
  "question": "Welcher der folgenden Punkte ist ein Beispiel für einen Verstoß gegen den Grundsatz der 'Konsistenz' bei der Datenerfassung?",
  "options": [
    "Das Geburtsdatum des Kunden ist falsch.",
    "Die E-Mail-Adresse des Kunden fehlt.",
    "Die Straße wird einmal als 'Str.' und einmal als 'Strasse' erfasst.",
    "Der Kunde ist zweimal in der Datenbank vorhanden."
  ],
  "correctAnswer": "Die Straße wird einmal als 'Str.' und einmal als 'Strasse' erfasst.",
  "explanation": "Konsistenz bedeutet einheitliche Schreibweisen und Formate. Unterschiedliche Schreibweisen für denselben Datentyp sind ein Verstoß gegen diesen Grundsatz.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q48",
  "category": "Kundenbindung",
  "type": "multiple-choice",
  "question": "Ein Unternehmen führt ein Bonusprogramm ein, bei dem Kunden für jeden Einkauf Punkte sammeln und diese gegen Prämien eintauschen können. Welche Art der Kundenbindung wird hier primär gefördert?",
  "options": [
    "Emotionale Kundenbindung",
    "Ökonomische Kundenbindung",
    "Strukturelle Kundenbindung",
    "Faktische Kundenbindung"
  ],
  "correctAnswer": "Ökonomische Kundenbindung",
  "explanation": "Bonusprogramme schaffen finanzielle Anreize und Vorteile, die den Kunden an das Unternehmen binden, was typisch für ökonomische Kundenbindung ist.",
  "difficulty": "easy"
},
  {
  "id": "lf5-q49",
  "category": "Beschwerdemanagement",
  "type": "multiple-choice",
  "question": "Was ist der Hauptgrund, warum sich Kunden oft NICHT beschweren, obwohl sie unzufrieden sind?",
  "options": [
    "Sie sind zu loyal zum Unternehmen.",
    "Sie haben keine Zeit oder sehen keine Erfolgsaussicht.",
    "Sie wissen nicht, wie man sich beschwert.",
    "Sie warten auf eine Entschädigung."
  ],
  "correctAnswer": "Sie haben keine Zeit oder sehen keine Erfolgsaussicht.",
  "explanation": "Häufige Gründe für Nicht-Beschwerden sind der empfundene Aufwand, die Annahme, dass sich ohnehin nichts ändert, oder die Angst vor Konfrontation.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q50",
  "category": "Kennzahlen Inbound",
  "type": "multiple-choice",
  "question": "Ein Call Center hat eine FCR-Quote von 60%. Was bedeutet das für die Kundenzufriedenheit und die Kosten?",
  "options": [
    "Hohe Kundenzufriedenheit und niedrige Kosten.",
    "Niedrige Kundenzufriedenheit und hohe Kosten durch Folgekontakte.",
    "Die Agenten sind sehr produktiv.",
    "Die Wartezeiten sind kurz."
  ],
  "correctAnswer": "Niedrige Kundenzufriedenheit und hohe Kosten durch Folgekontakte.",
  "explanation": "Eine niedrige FCR-Quote bedeutet, dass viele Kunden mehrmals anrufen müssen, was zu Frustration führt und zusätzliche Kosten durch wiederholte Bearbeitung verursacht.",
  "difficulty": "hard"
},
  {
  "id": "lf5-q51",
  "category": "Kennzahlen Outbound",
  "type": "multiple-choice",
  "question": "Ein Outbound-Team hat eine Stornoquote von 5%. Was bedeutet das?",
  "options": [
    "5% der Anrufe werden abgebrochen.",
    "5% der Nettokontakte führen nicht zum Abschluss.",
    "5% der generierten Abschlüsse werden später widerrufen.",
    "5% der Kunden sind unzufrieden."
  ],
  "correctAnswer": "5% der generierten Abschlüsse werden später widerrufen.",
  "explanation": "Die Stornoquote gibt den Prozentsatz der Verkäufe an, die nach dem Abschluss vom Kunden storniert oder widerrufen werden.",
  "difficulty": "easy"
},
  {
  "id": "lf5-q52",
  "category": "Zahlungsverkehr",
  "type": "multiple-choice",
  "question": "Welche der folgenden Informationen ist typischerweise NICHT Bestandteil einer Bonitätsprüfung durch eine Auskunftei wie die SCHUFA?",
  "options": [
    "Bisheriges Zahlungsverhalten.",
    "Aktuelle Einkommenshöhe.",
    "Bestehende Kreditverträge.",
    "Anzahl der Girokonten."
  ],
  "correctAnswer": "Aktuelle Einkommenshöhe.",
  "explanation": "Auskunfteien wie die SCHUFA speichern keine Informationen über das aktuelle Einkommen einer Person, sondern primär über deren Zahlungsverhalten und Kreditengagements.",
  "difficulty": "hard"
},
  {
  "id": "lf5-q53",
  "category": "Beratungsgespräche",
  "type": "multiple-choice",
  "question": "Welche der folgenden Aussagen ist ein Beispiel für eine 'offene Frage' im Beratungsgespräch?",
  "options": [
    "'Sind Sie mit unserem Service zufrieden?'",
    "'Welche Erwartungen haben Sie an das neue Produkt?'",
    "'Möchten Sie das Produkt kaufen?'",
    "'Haben Sie noch weitere Fragen?'"
  ],
  "correctAnswer": "'Welche Erwartungen haben Sie an das neue Produkt?'",
  "explanation": "Offene Fragen beginnen oft mit W-Wörtern und können nicht einfach mit Ja oder Nein beantwortet werden, sondern erfordern eine ausführlichere Antwort.",
  "difficulty": "easy"
},
  {
  "id": "lf5-q54",
  "category": "Kundendaten",
  "type": "multiple-choice",
  "question": "Warum ist 'Multitasking' bei der Datenerfassung während eines Gesprächs aus neurobiologischer Sicht problematisch?",
  "options": [
    "Das Gehirn kann sich nicht auf mehrere komplexe Aufgaben gleichzeitig konzentrieren, ohne an Effizienz zu verlieren.",
    "Es ist eine veraltete Arbeitsweise.",
    "Es ist gesetzlich verboten.",
    "Es macht den Agenten schneller."
  ],
  "correctAnswer": "Das Gehirn kann sich nicht auf mehrere komplexe Aufgaben gleichzeitig konzentrieren, ohne an Effizienz zu verlieren.",
  "explanation": "Neurobiologische Studien zeigen, dass das menschliche Gehirn bei echtem Multitasking (gleichzeitiger Bearbeitung von zwei oder mehr komplexen Aufgaben) an Leistung verliert und fehleranfälliger wird.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q55",
  "category": "Kundenbindung",
  "type": "multiple-choice",
  "question": "Welche Art von Kundenbindung wird durch langfristige Verträge und Systemkompatibilität gefördert?",
  "options": [
    "Emotionale Kundenbindung",
    "Ökonomische Kundenbindung",
    "Strukturelle Kundenbindung",
    "Faktische Kundenbindung"
  ],
  "correctAnswer": "Strukturelle Kundenbindung",
  "explanation": "Strukturelle Kundenbindung entsteht durch vertragliche oder technische Verflechtungen, die einen Wechsel erschweren und den Kunden an das Unternehmen binden.",
  "difficulty": "easy"
},
  {
  "id": "lf5-q56",
  "category": "Beschwerdemanagement",
  "type": "multiple-choice",
  "question": "Ein Kunde beschwert sich über eine fehlerhafte Lieferung. Der Agent entschuldigt sich aufrichtig und verspricht, die Angelegenheit sofort zu prüfen. Welchem Schritt der L-E-S-T Regel entspricht das Versprechen, die Angelegenheit zu prüfen?",
  "options": [
    "Listen",
    "Empathize",
    "Solve",
    "Thank"
  ],
  "correctAnswer": "Solve",
  "explanation": "Das Versprechen, die Angelegenheit zu prüfen und eine Lösung herbeizuführen, ist der Beginn des 'Solve'-Schritts, bei dem aktive Maßnahmen zur Problembehebung ergriffen werden.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q57",
  "category": "Kennzahlen Inbound",
  "type": "multiple-choice",
  "question": "Ein Call Center hat eine Lost-Call-Quote von 15%. Was bedeutet das?",
  "options": [
    "15% der Anrufe werden erfolgreich bearbeitet.",
    "15% der Anrufer legen auf, bevor sie mit einem Agenten verbunden werden.",
    "15% der Anrufe sind falsch verbunden.",
    "15% der Kunden sind unzufrieden."
  ],
  "correctAnswer": "15% der Anrufer legen auf, bevor sie mit einem Agenten verbunden werden.",
  "explanation": "Die Lost-Call-Quote ist ein Indikator für die Erreichbarkeit und Kundenzufriedenheit. Eine hohe Quote deutet auf lange Wartezeiten oder unzureichende Kapazitäten hin.",
  "difficulty": "easy"
},
  {
  "id": "lf5-q58",
  "category": "Kennzahlen Outbound",
  "type": "multiple-choice",
  "question": "Was ist der Unterschied zwischen 'Bruttokontakten' und 'Nettokontakten' im Outbound?",
  "options": [
    "Bruttokontakte sind alle Anrufe, Nettokontakte sind nur erfolgreiche Verkäufe.",
    "Bruttokontakte sind alle Anwahlversuche, Nettokontakte sind erreichte Zielpersonen.",
    "Bruttokontakte sind nur Neukunden, Nettokontakte sind Bestandskunden.",
    "Bruttokontakte sind nationale Anrufe, Nettokontakte sind internationale Anrufe."
  ],
  "correctAnswer": "Bruttokontakte sind alle Anwahlversuche, Nettokontakte sind erreichte Zielpersonen.",
  "explanation": "Bruttokontakte umfassen alle Anrufversuche, einschließlich Besetztzeichen oder Anrufbeantworter. Nettokontakte sind die tatsächlich erreichten Zielpersonen, mit denen ein Gespräch geführt werden konnte.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q59",
  "category": "Zahlungsverkehr",
  "type": "multiple-choice",
  "question": "Ein Kunde hat eine Ware erhalten, die einen offensichtlichen Mangel aufweist. Was sollte der Kunde tun, um seine Rechte zu wahren?",
  "options": [
    "Die Ware sofort entsorgen.",
    "Den Verkäufer mündlich am Telefon informieren.",
    "Eine schriftliche Mängelrüge einreichen.",
    "Einfach die Rechnung nicht bezahlen."
  ],
  "correctAnswer": "Eine schriftliche Mängelrüge einreichen.",
  "explanation": "Eine schriftliche Mängelrüge ist essenziell, um den Mangel fristgerecht anzuzeigen und Beweise für die Reklamation zu haben.",
  "difficulty": "easy"
},
  {
  "id": "lf5-q60",
  "category": "Beratungsgespräche",
  "type": "multiple-choice",
  "question": "Welche der folgenden Aussagen ist ein Beispiel für 'Verbalisieren' im aktiven Zuhören?",
  "options": [
    "'Sie wünschen also eine schnellere Lieferung?'",
    "'Ich sehe, das Thema macht Sie wütend.'",
    "'Ja, genau.'",
    "'Was kann ich sonst noch für Sie tun?'"
  ],
  "correctAnswer": "'Ich sehe, das Thema macht Sie wütend.'",
  "explanation": "Verbalisieren bedeutet, die Emotionen des Gesprächspartners zu benennen, um Empathie zu zeigen und eine tiefere Ebene des Verständnisses zu erreichen.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q61",
  "category": "Kundendaten",
  "type": "multiple-choice",
  "question": "Was ist der Vorteil der 'Zeitstabilität' bei der Datenerfassung?",
  "options": [
    "Daten müssen häufiger aktualisiert werden.",
    "Daten bleiben über lange Zeiträume gültig und nutzbar.",
    "Es werden mehr Daten gesammelt.",
    "Die Datenerfassung wird komplexer."
  ],
  "correctAnswer": "Daten bleiben über lange Zeiträume gültig und nutzbar.",
  "explanation": "Zeitstabile Daten wie das Geburtsdatum müssen nicht ständig angepasst werden, was die Datenpflege vereinfacht und die Datenqualität erhöht.",
  "difficulty": "easy"
},
  {
  "id": "lf5-q62",
  "category": "Kundenbindung",
  "type": "multiple-choice",
  "question": "Ein Unternehmen bietet seinen Kunden ein Treueprogramm mit gestaffelten Rabatten an. Welche Art der Kundenbindung wird hier primär gefördert?",
  "options": [
    "Emotionale Kundenbindung",
    "Ökonomische Kundenbindung",
    "Strukturelle Kundenbindung",
    "Faktische Kundenbindung"
  ],
  "correctAnswer": "Ökonomische Kundenbindung",
  "explanation": "Rabatte und Treueprogramme sind finanzielle Anreize, die den Kunden an das Unternehmen binden und zur Wiederholung von Käufen motivieren.",
  "difficulty": "easy"
},
  {
  "id": "lf5-q63",
  "category": "Beschwerdemanagement",
  "type": "multiple-choice",
  "question": "Welche der folgenden Aussagen ist ein Beispiel für 'positives Formulieren' im Beschwerdegespräch?",
  "options": [
    "'Das ist leider nicht möglich.'",
    "'Wir können das Problem nicht lösen.'",
    "'Ich kann Ihnen dabei helfen, eine alternative Lösung zu finden.'",
    "'Sie haben das falsch verstanden.'"
  ],
  "correctAnswer": "'Ich kann Ihnen dabei helfen, eine alternative Lösung zu finden.'",
  "explanation": "Positives Formulieren vermeidet Negationen und konzentriert sich auf Lösungen und Möglichkeiten, was deeskalierend wirkt und die Kooperationsbereitschaft des Kunden fördert.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q64",
  "category": "Kennzahlen Inbound",
  "type": "multiple-choice",
  "question": "Ein Call Center hat einen Servicelevel von 70/30. Was bedeutet das?",
  "options": [
    "70% der Anrufe werden in 30 Sekunden angenommen.",
    "30% der Anrufe werden in 70 Sekunden angenommen.",
    "70% der Anrufe werden innerhalb von 30 Sekunden angenommen.",
    "30% der Anrufe gehen verloren."
  ],
  "correctAnswer": "70% der Anrufe werden innerhalb von 30 Sekunden angenommen.",
  "explanation": "Der Servicelevel gibt an, welcher Prozentsatz der Anrufe innerhalb einer bestimmten Zeitspanne angenommen werden soll.",
  "difficulty": "easy"
},
  {
  "id": "lf5-q65",
  "category": "Kennzahlen Outbound",
  "type": "multiple-choice",
  "question": "Was ist der 'Sprechzeitanteil' im Outbound und welche Bedeutung hat er?",
  "options": [
    "Der Anteil der Anrufe, die zum Abschluss führen; Bedeutung für den Umsatz.",
    "Die reine Gesprächszeit im Verhältnis zur gesamten Arbeitszeit des Agenten; Bedeutung für die Effizienz.",
    "Der Anteil der Kunden, die erreichbar sind; Bedeutung für die Adressqualität.",
    "Der Anteil der Stornierungen; Bedeutung für die Beratungsqualität."
  ],
  "correctAnswer": "Die reine Gesprächszeit im Verhältnis zur gesamten Arbeitszeit des Agenten; Bedeutung für die Effizienz.",
  "explanation": "Ein hoher Sprechzeitanteil deutet auf eine effiziente Nutzung der Arbeitszeit hin, während ein niedriger Anteil auf zu viel Leerlauf oder administrative Aufgaben hindeuten kann.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q66",
  "category": "Zahlungsverkehr",
  "type": "multiple-choice",
  "question": "Welche der folgenden Zahlungsarten ist aus Kundensicht am bequemsten, birgt aber für das Unternehmen ein höheres Risiko?",
  "options": [
    "Vorkasse",
    "Nachnahme",
    "Rechnungskauf",
    "Sofortüberweisung"
  ],
  "correctAnswer": "Rechnungskauf",
  "explanation": "Der Rechnungskauf ist für Kunden sehr bequem, da sie die Ware zuerst erhalten und später bezahlen können. Für das Unternehmen bedeutet dies jedoch ein höheres Zahlungsausfallrisiko.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q67",
  "category": "Beratungsgespräche",
  "type": "multiple-choice",
  "question": "Was ist der Hauptzweck eines 'Gesprächsleitfadens'?",
  "options": [
    "Die Kreativität des Agenten einzuschränken.",
    "Eine strukturierte Gesprächsführung zu gewährleisten und wichtige Punkte nicht zu vergessen.",
    "Das Gespräch zu verlängern.",
    "Den Kunden zu manipulieren."
  ],
  "correctAnswer": "Eine strukturierte Gesprächsführung zu gewährleisten und wichtige Punkte nicht zu vergessen.",
  "explanation": "Ein Gesprächsleitfaden dient als Orientierungshilfe, um eine konsistente Qualität der Gespräche sicherzustellen und alle relevanten Informationen abzufragen oder zu vermitteln.",
  "difficulty": "easy"
},
  {
  "id": "lf5-q68",
  "category": "Kundendaten",
  "type": "multiple-choice",
  "question": "Ein Unternehmen hat mehrere Datensätze für denselben Kunden, die sich in Details unterscheiden. Welcher Grundsatz der Datenerfassung ist hier verletzt?",
  "options": [
    "Richtigkeit",
    "Vollständigkeit",
    "Redundanzvermeidung",
    "Zeitstabilität"
  ],
  "correctAnswer": "Redundanzvermeidung",
  "explanation": "Mehrere Datensätze für denselben Kunden sind Dubletten und verstoßen gegen das Prinzip der Redundanzvermeidung, was zu Inkonsistenzen und Fehlern führen kann.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q69",
  "category": "Kundenbindung",
  "type": "multiple-choice",
  "question": "Welche Art von Kundenbindung wird durch eine starke Marke und positive Kundenerfahrungen gefördert?",
  "options": [
    "Ökonomische Kundenbindung",
    "Faktische Kundenbindung",
    "Strukturelle Kundenbindung",
    "Emotionale Kundenbindung"
  ],
  "correctAnswer": "Emotionale Kundenbindung",
  "explanation": "Eine starke Marke und positive Erlebnisse schaffen eine emotionale Bindung, die über rationale Gründe hinausgeht und zu Loyalität führt.",
  "difficulty": "easy"
},
  {
  "id": "lf5-q70",
  "category": "Beschwerdemanagement",
  "type": "multiple-choice",
  "question": "Was ist der 'vierte' Schritt der L-E-S-T Regel und warum ist er wichtig?",
  "options": [
    "Listen; um den Kunden zu verstehen.",
    "Empathize; um Verständnis zu zeigen.",
    "Solve; um eine Lösung anzubieten.",
    "Thank; um Wertschätzung zu zeigen und die Beziehung zu stärken."
  ],
  "correctAnswer": "Thank; um Wertschätzung zu zeigen und die Beziehung zu stärken.",
  "explanation": "Der 'Thank'-Schritt ist entscheidend, um dem Kunden für sein Feedback zu danken und ihm zu zeigen, dass seine Meinung geschätzt wird, was die Kundenbindung nach einer Beschwerde stärken kann.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q71",
  "category": "Kennzahlen Inbound",
  "type": "multiple-choice",
  "question": "Ein Call Center hat eine AHT von 250 Sekunden. Welche der folgenden Maßnahmen würde die AHT am ehesten reduzieren?",
  "options": [
    "Erhöhung der Gesprächszeit.",
    "Verbesserung der Systemgeschwindigkeit und Prozessoptimierung.",
    "Reduzierung der Anzahl der Agenten.",
    "Ignorieren der Nachbearbeitungszeit."
  ],
  "correctAnswer": "Verbesserung der Systemgeschwindigkeit und Prozessoptimierung.",
  "explanation": "Die AHT setzt sich aus Gesprächszeit, Haltezeit und Nachbearbeitungszeit zusammen. Eine Optimierung der Prozesse und der Systemunterstützung kann alle diese Komponenten reduzieren und somit die AHT senken.",
  "difficulty": "hard"
},
  {
  "id": "lf5-q72",
  "category": "Kennzahlen Outbound",
  "type": "multiple-choice",
  "question": "Ein Outbound-Team hat eine Ausschöpfungsquote von 60% und eine Erfolgsquote von 20%. Was bedeutet das?",
  "options": [
    "60% der Anrufe führen zum Abschluss, und 20% der Abschlüsse werden storniert.",
    "60% der Anwahlversuche erreichen eine Zielperson, und 20% dieser Zielpersonen schließen ab.",
    "60% der Kunden sind zufrieden, und 20% sind loyal.",
    "60% der Leads sind qualifiziert, und 20% davon kaufen."
  ],
  "correctAnswer": "60% der Anwahlversuche erreichen eine Zielperson, und 20% dieser Zielpersonen schließen ab.",
  "explanation": "Die Ausschöpfungsquote bezieht sich auf das Verhältnis von Nettokontakten zu Bruttokontakten, während die Erfolgsquote das Verhältnis von Abschlüssen zu Nettokontakten darstellt.",
  "difficulty": "hard"
},
  {
  "id": "lf5-q73",
  "category": "Zahlungsverkehr",
  "type": "multiple-choice",
  "question": "Welche Konsequenz hat ein 'Lieferverzug' für den Verkäufer, wenn der Kunde eine Nachfrist gesetzt hat und diese fruchtlos verstrichen ist?",
  "options": [
    "Der Verkäufer muss die Ware sofort liefern.",
    "Der Verkäufer kann vom Vertrag zurücktreten.",
    "Der Kunde kann vom Vertrag zurücktreten und Schadensersatz fordern.",
    "Der Kunde muss die Ware trotzdem abnehmen."
  ],
  "correctAnswer": "Der Kunde kann vom Vertrag zurücktreten und Schadensersatz fordern.",
  "explanation": "Nach fruchtlosem Ablauf einer angemessenen Nachfrist bei Lieferverzug hat der Kunde das Recht, vom Vertrag zurückzutreten und gegebenenfalls Schadensersatz wegen Nichterfüllung zu verlangen.",
  "difficulty": "hard"
},
  {
  "id": "lf5-q74",
  "category": "Beratungsgespräche",
  "type": "multiple-choice",
  "question": "Ein Kunde äußert: 'Ich brauche ein neues Smartphone, das schnell ist und gute Fotos macht.' Welche Phase des Beratungsgesprächs ist hier noch nicht abgeschlossen?",
  "options": [
    "Begrüßung und Kontaktaufbau",
    "Bedarfsermittlung",
    "Beratung und Lösung",
    "Gesprächsabschluss"
  ],
  "correctAnswer": "Bedarfsermittlung",
  "explanation": "Der Kunde hat zwar erste Wünsche geäußert, aber es sind noch keine spezifischen Anforderungen (z.B. Budget, bevorzugte Marke, Nutzungsverhalten) ermittelt, die für eine passgenaue Lösung notwendig sind. Die Bedarfsermittlung ist noch im Gange.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q75",
  "category": "Kundendaten",
  "type": "multiple-choice",
  "question": "Welcher der folgenden Punkte ist ein Beispiel für einen Verstoß gegen den Grundsatz der 'Richtigkeit' bei der Datenerfassung?",
  "options": [
    "Die Telefonnummer des Kunden fehlt.",
    "Der Kunde ist zweimal in der Datenbank.",
    "Das Geburtsdatum des Kunden ist falsch eingetragen.",
    "Die Anrede ist einmal 'Herr' und einmal 'Hr.'."
  ],
  "correctAnswer": "Das Geburtsdatum des Kunden ist falsch eingetragen.",
  "explanation": "Richtigkeit bedeutet, dass die erfassten Daten sachlich korrekt sein müssen. Ein falsches Geburtsdatum ist ein direkter Verstoß dagegen.",
  "difficulty": "easy"
},
  {
  "id": "lf5-q76",
  "category": "Kundenbindung",
  "type": "multiple-choice",
  "question": "Was ist der Hauptvorteil eines gut implementierten CRM-Systems für ein Unternehmen?",
  "options": [
    "Reduzierung der Mitarbeiterzahl.",
    "Automatisierung aller Marketingaktivitäten.",
    "Verbesserung der Kundenbeziehungen und Steigerung der Kundenzufriedenheit und -loyalität.",
    "Ausschließlich zur Speicherung von Kontaktdaten."
  ],
  "correctAnswer": "Verbesserung der Kundenbeziehungen und Steigerung der Kundenzufriedenheit und -loyalität.",
  "explanation": "Ein CRM-System ermöglicht eine zentrale Verwaltung von Kundendaten, eine personalisierte Kommunikation und eine effizientere Bearbeitung von Anliegen, was direkt zu besseren Kundenbeziehungen und höherer Loyalität führt.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q77",
  "category": "Beschwerdemanagement",
  "type": "multiple-choice",
  "question": "Ein Kunde beschwert sich über eine lange Wartezeit. Der Agent sagt: 'Ich kann verstehen, dass Sie verärgert sind. Ich werde sofort prüfen, wie wir das Problem lösen können.' Welchem Fehler im Beschwerdegespräch wird hier entgegengewirkt?",
  "options": [
    "Kunden unterbrechen.",
    "Kunden nicht ernst nehmen.",
    "Vage Versprechen machen.",
    "Schuld auf Kollegen schieben."
  ],
  "correctAnswer": "Kunden nicht ernst nehmen.",
  "explanation": "Durch das Zeigen von Empathie ('Ich kann verstehen, dass Sie verärgert sind') und das sofortige Angebot einer Lösung wird dem Kunden signalisiert, dass seine Beschwerde ernst genommen wird, was dem Fehler 'Kunden nicht ernst nehmen' entgegenwirkt.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q78",
  "category": "Kennzahlen Inbound",
  "type": "multiple-choice",
  "question": "Welche der folgenden Kennzahlen ist am besten geeignet, um die Effizienz der Agenten im Inbound zu beurteilen?",
  "options": [
    "Lost-Call-Quote",
    "Servicelevel",
    "AHT",
    "FCR"
  ],
  "correctAnswer": "AHT",
  "explanation": "Die AHT (Average Handling Time) misst die durchschnittliche Zeit, die ein Agent für die Bearbeitung eines Anrufs benötigt, und ist somit ein direkter Indikator für die individuelle Effizienz.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q79",
  "category": "Kennzahlen Outbound",
  "type": "multiple-choice",
  "question": "Ein Outbound-Team hat eine Erfolgsquote von 10% und eine Stornoquote von 20%. Was bedeutet das für den tatsächlichen Erfolg?",
  "options": [
    "Jeder zehnte Nettokontakt führt zu einem Abschluss, aber jeder fünfte Abschluss wird storniert.",
    "Jeder zehnte Bruttokontakt führt zu einem Abschluss, und 20% der Anrufe gehen verloren.",
    "Die Qualität der Leads ist sehr hoch.",
    "Das Team ist sehr effizient."
  ],
  "correctAnswer": "Jeder zehnte Nettokontakt führt zu einem Abschluss, aber jeder fünfte Abschluss wird storniert.",
  "explanation": "Eine Erfolgsquote von 10% bedeutet, dass 10% der Nettokontakte zu einem Abschluss führen. Eine Stornoquote von 20% bedeutet, dass 20% dieser Abschlüsse später wiederrufen werden, was den Nettoerfolg mindert.",
  "difficulty": "hard"
},
  {
  "id": "lf5-q80",
  "category": "Zahlungsverkehr",
  "type": "multiple-choice",
  "question": "Was ist der Hauptunterschied zwischen 'Vorkasse' und 'Nachnahme' aus Sicht des Kunden?",
  "options": [
    "Bei Vorkasse zahlt der Kunde vor Erhalt der Ware, bei Nachnahme bei Erhalt.",
    "Bei Vorkasse zahlt der Kunde bar, bei Nachnahme per Überweisung.",
    "Vorkasse ist nur für Neukunden, Nachnahme für Bestandskunden.",
    "Vorkasse ist teurer als Nachnahme."
  ],
  "correctAnswer": "Bei Vorkasse zahlt der Kunde vor Erhalt der Ware, bei Nachnahme bei Erhalt.",
  "explanation": "Bei Vorkasse muss der Kunde den Betrag im Voraus überweisen. Bei Nachnahme zahlt der Kunde direkt an den Zusteller bei Lieferung der Ware.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q81",
  "category": "Beratungsgespräche",
  "type": "multiple-choice",
  "question": "Welche der folgenden Techniken ist KEINE Methode der Einwandbehandlung?",
  "options": [
    "Bumerang-Methode",
    "Ja-Aber-Methode",
    "Konfrontations-Methode",
    "Referenzmethode"
  ],
  "correctAnswer": "Konfrontations-Methode",
  "explanation": "Die Konfrontations-Methode ist keine anerkannte Technik der Einwandbehandlung, da sie die Situation eskalieren und den Kunden verärgern kann. Ziel ist es, Einwände konstruktiv zu entkräften.",
  "difficulty": "hard"
},
  {
  "id": "lf5-q82",
  "category": "Kundendaten",
  "type": "multiple-choice",
  "question": "Ein Unternehmen erfasst die Anrede des Kunden einmal als 'Herr' und einmal als 'Hr.'. Welcher Grundsatz der Datenerfassung ist hier verletzt?",
  "options": [
    "Richtigkeit",
    "Vollständigkeit",
    "Redundanzvermeidung",
    "Konsistenz"
  ],
  "correctAnswer": "Konsistenz",
  "explanation": "Konsistenz erfordert einheitliche Schreibweisen und Formate für dieselben Datenfelder, um Datenqualität und -vergleichbarkeit zu gewährleisten.",
  "difficulty": "easy"
},
  {
  "id": "lf5-q83",
  "category": "Kundenbindung",
  "type": "multiple-choice",
  "question": "Was ist der Hauptzweck der 'ABC-Analyse' im Kundenmanagement?",
  "options": [
    "Alle Kunden gleich behandeln.",
    "Kunden nach Alphabet sortieren.",
    "Ressourcen effizient auf die wichtigsten Kunden konzentrieren.",
    "Die Anzahl der Kunden erhöhen."
  ],
  "correctAnswer": "Ressourcen effizient auf die wichtigsten Kunden konzentrieren.",
  "explanation": "Die ABC-Analyse hilft, Kunden nach ihrem Wert zu segmentieren, um Marketing- und Vertriebsaktivitäten gezielt auf die profitabelsten Segmente auszurichten.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q84",
  "category": "Beschwerdemanagement",
  "type": "multiple-choice",
  "question": "Welche der folgenden Aussagen ist ein Beispiel für einen Fehler im Beschwerdegespräch?",
  "options": [
    "'Ich verstehe Ihre Situation und werde mich darum kümmern.'",
    "'Das ist nicht unser Problem, da müssen Sie sich an den Hersteller wenden.'",
    "'Vielen Dank für Ihr Feedback, wir werden das prüfen.'",
    "'Ich fasse zusammen: Sie sind unzufrieden mit...'"
  ],
  "correctAnswer": "'Das ist nicht unser Problem, da müssen Sie sich an den Hersteller wenden.'",
  "explanation": "Das Abwälzen der Verantwortung auf Dritte ist ein klassischer Fehler, der die Kundenbeziehung schädigt und keine Lösung bietet.",
  "difficulty": "easy"
},
  {
  "id": "lf5-q85",
  "category": "Kennzahlen Inbound",
  "type": "multiple-choice",
  "question": "Ein Call Center hat eine Produktivität von 10 Anrufen pro Stunde. Was bedeutet das?",
  "options": [
    "Jeder Agent bearbeitet 10 Anrufe pro Stunde.",
    "Das Call Center erhält 10 Anrufe pro Stunde.",
    "10% der Anrufe werden pro Stunde bearbeitet.",
    "Die durchschnittliche Gesprächszeit beträgt 10 Minuten."
  ],
  "correctAnswer": "Jeder Agent bearbeitet 10 Anrufe pro Stunde.",
  "explanation": "Produktivität im Call Center bezieht sich auf die Anzahl der bearbeiteten Anrufe pro Agent und Zeiteinheit und ist ein Maß für die Effizienz der Agenten.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q86",
  "category": "Kennzahlen Outbound",
  "type": "multiple-choice",
  "question": "Welche Kennzahl ist am besten geeignet, um die Qualität der Beratung im Outbound zu beurteilen?",
  "options": [
    "Bruttokontakte",
    "Nettokontakte",
    "Ausschöpfungsquote",
    "Stornoquote"
  ],
  "correctAnswer": "Stornoquote",
  "explanation": "Eine niedrige Stornoquote deutet auf eine hohe Beratungsqualität hin, da die Kunden mit den getroffenen Vereinbarungen zufrieden sind und diese nicht widerrufen.",
  "difficulty": "hard"
},
  {
  "id": "lf5-q87",
  "category": "Zahlungsverkehr",
  "type": "multiple-choice",
  "question": "Was ist der Hauptvorteil der 'Nachnahme' für den Kunden?",
  "options": [
    "Der Kunde muss nicht sofort bezahlen.",
    "Der Kunde kann die Ware vor der Zahlung prüfen.",
    "Der Kunde muss keine Bankdaten angeben.",
    "Der Kunde erhält einen Rabatt."
  ],
  "correctAnswer": "Der Kunde kann die Ware vor der Zahlung prüfen.",
  "explanation": "Bei der Nachnahme zahlt der Kunde erst bei Erhalt der Ware an den Zusteller, was ihm die Möglichkeit gibt, die Ware vor der Zahlung zu prüfen.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q88",
  "category": "Beratungsgespräche",
  "type": "multiple-choice",
  "question": "Welche der folgenden Aussagen ist ein Beispiel für 'Signale geben' im aktiven Zuhören?",
  "options": [
    "'Ich verstehe.'",
    "'Das ist ein interessanter Punkt.'",
    "'Mhm, ja.'",
    "'Was meinen Sie genau?'"
  ],
  "correctAnswer": "'Mhm, ja.'",
  "explanation": "Signale geben (wie 'mhm', 'ja', Nicken) sind nonverbale oder kurze verbale Bestätigungen, die dem Sprecher signalisieren, dass man aufmerksam zuhört.",
  "difficulty": "easy"
},
  {
  "id": "lf5-q89",
  "category": "Kundendaten",
  "type": "multiple-choice",
  "question": "Warum ist die 'Redundanzvermeidung' bei der Datenerfassung so wichtig?",
  "options": [
    "Um die Datenbankgröße zu erhöhen.",
    "Um die Datenqualität zu verbessern und Inkonsistenzen zu vermeiden.",
    "Um die Datenerfassung zu beschleunigen.",
    "Um mehr Speicherplatz zu verbrauchen."
  ],
  "correctAnswer": "Um die Datenqualität zu verbessern und Inkonsistenzen zu vermeiden.",
  "explanation": "Redundante Daten (Dubletten) führen zu Inkonsistenzen, erschweren die Datenpflege und können zu Fehlern bei der Kundenansprache oder -verwaltung führen.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q90",
  "category": "Kundenbindung",
  "type": "multiple-choice",
  "question": "Was ist der Hauptunterschied zwischen 'Zufriedenheit' und 'Loyalität' eines Kunden?",
  "options": [
    "Zufriedenheit ist zukunftsorientiert, Loyalität vergangenheitsbezogen.",
    "Zufriedenheit ist emotional, Loyalität ist rational.",
    "Zufriedenheit ist vergangenheitsbezogen, Loyalität ist zukunftsorientiert (Wiederkaufabsicht).",
    "Zufriedenheit ist messbar, Loyalität nicht."
  ],
  "correctAnswer": "Zufriedenheit ist vergangenheitsbezogen, Loyalität ist zukunftsorientiert (Wiederkaufabsicht).",
  "explanation": "Ein zufriedener Kunde muss nicht unbedingt loyal sein. Loyalität geht über die reine Zufriedenheit hinaus und beinhaltet eine langfristige Bindung und die Absicht, wiederzukaufen.",
  "difficulty": "hard"
},
  {
  "id": "lf5-q91",
  "category": "Beschwerdemanagement",
  "type": "multiple-choice",
  "question": "Welche der folgenden Aussagen ist ein Beispiel für 'positives Formulieren'?",
  "options": [
    "'Ich kann Ihnen nicht helfen.'",
    "'Das Problem ist unlösbar.'",
    "'Ich werde prüfen, welche Möglichkeiten wir haben, um eine Lösung zu finden.'",
    "'Das ist Ihre Schuld.'"
  ],
  "correctAnswer": "'Ich werde prüfen, welche Möglichkeiten wir haben, um eine Lösung zu finden.'",
  "explanation": "Positives Formulieren konzentriert sich auf das Machbare und die Lösung, anstatt Probleme oder Unmöglichkeiten zu betonen.",
  "difficulty": "easy"
},
  {
  "id": "lf5-q92",
  "category": "Kennzahlen Inbound",
  "type": "multiple-choice",
  "question": "Ein Call Center hat einen Servicelevel von 90/15. Was bedeutet das?",
  "options": [
    "90% der Anrufe werden in 15 Minuten angenommen.",
    "15% der Anrufe werden in 90 Sekunden angenommen.",
    "90% der Anrufe innerhalb von 15 Sekunden angenommen.",
    "15% der Anrufe gehen verloren."
  ],
  "correctAnswer": "90% der Anrufe innerhalb von 15 Sekunden angenommen werden.",
  "explanation": "Der Servicelevel wird als X/Y angegeben, wobei X der Prozentsatz der Anrufe ist, die innerhalb von Y Sekunden angenommen werden sollen.",
  "difficulty": "easy"
},
  {
  "id": "lf5-q93",
  "category": "Kennzahlen Outbound",
  "type": "multiple-choice",
  "question": "Ein Outbound-Team hat 1000 Bruttokontakte, 400 Nettokontakte und 80 Abschlüsse. Wie hoch ist die Ausschöpfungsquote und die Erfolgsquote?",
  "options": [
    "Ausschöpfungsquote: 40%, Erfolgsquote: 8%",
    "Ausschöpfungsquote: 40%, Erfolgsquote: 20%",
    "Ausschöpfungsquote: 8%, Erfolgsquote: 20%",
    "Ausschöpfungsquote: 20%, Erfolgsquote: 40%"
  ],
  "correctAnswer": "Ausschöpfungsquote: 40%, Erfolgsquote: 20%",
  "explanation": "Ausschöpfungsquote = (400 / 1000) * 100 = 40%. Erfolgsquote = (80 / 400) * 100 = 20%.",
  "difficulty": "hard"
},
  {
  "id": "lf5-q94",
  "category": "Zahlungsverkehr",
  "type": "multiple-choice",
  "question": "Welche der folgenden Zahlungsarten ist für den Kunden am wenigsten bequem, bietet aber dem Unternehmen die höchste Sicherheit?",
  "options": [
    "Rechnungskauf",
    "SEPA-Lastschrift",
    "Vorkasse",
    "Kreditkarte"
  ],
  "correctAnswer": "Vorkasse",
  "explanation": "Vorkasse erfordert, dass der Kunde die Zahlung leistet, bevor er die Ware erhält, was für den Kunden weniger bequem ist, aber das Unternehmen vor Zahlungsausfällen schützt.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q95",
  "category": "Beratungsgespräche",
  "type": "multiple-choice",
  "question": "Was ist der Hauptzweck der 'Begrüßung und des Kontaktaufbaus' in einem Beratungsgespräch?",
  "options": [
    "Direkt zum Verkaufsabschluss zu kommen.",
    "Eine positive Gesprächsatmosphäre zu schaffen und den Kunden zu identifizieren.",
    "Den Kunden über alle Produkte zu informieren.",
    "Das Gespräch so kurz wie möglich zu halten."
  ],
  "correctAnswer": "Eine positive Gesprächsatmosphäre zu schaffen und den Kunden zu identifizieren.",
  "explanation": "Die Begrüßungsphase ist entscheidend für den ersten Eindruck und legt den Grundstein für eine erfolgreiche Kommunikation und Beziehung zum Kunden.",
  "difficulty": "easy"
},
  {
  "id": "lf5-q96",
  "category": "Kundendaten",
  "type": "multiple-choice",
  "question": "Ein Unternehmen erfasst die E-Mail-Adresse des Kunden in verschiedenen Formaten (z.B. 'max.mustermann@example.com' und 'Max Mustermann <max.mustermann@example.com>'). Welcher Grundsatz der Datenerfassung ist hier verletzt?",
  "options": [
    "Richtigkeit",
    "Vollständigkeit",
    "Redundanzvermeidung",
    "Konsistenz"
  ],
  "correctAnswer": "Konsistenz",
  "explanation": "Konsistenz erfordert einheitliche Formate für Datenfelder, um eine saubere Datenverarbeitung und -analyse zu gewährleisten.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q97",
  "category": "Kundenbindung",
  "type": "multiple-choice",
  "question": "Welche Art von CRM konzentriert sich auf die direkte Interaktion mit dem Kunden über verschiedene Kanäle (z.B. Call Center, E-Mail, Social Media)?",
  "options": [
    "Operatives CRM",
    "Analytisches CRM",
    "Kommunikatives CRM",
    "Strategisches CRM"
  ],
  "correctAnswer": "Operatives CRM",
  "explanation": "Operatives CRM umfasst alle kundenorientierten Prozesse, die den direkten Kontakt mit dem Kunden betreffen, wie z.B. Vertrieb, Service und Marketing.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q98",
  "category": "Beschwerdemanagement",
  "type": "multiple-choice",
  "question": "Was ist der Hauptzweck eines 'Haltegesprächs'?",
  "options": [
    "Den Kunden zum sofortigen Kauf eines neuen Produkts zu bewegen.",
    "Die Kündigungsabsicht des Kunden zu ignorieren.",
    "Die Gründe für die Kündigungsabsicht zu ermitteln und den Kunden vom Verbleib zu überzeugen.",
    "Dem Kunden zusätzliche Gebühren für die Kündigung zu erklären."
  ],
  "correctAnswer": "Die Gründe für die Kündigungsabsicht zu ermitteln und den Kunden vom Verbleib zu überzeugen.",
  "explanation": "Haltegespräche sind darauf ausgelegt, Kunden, die mit Kündigung drohen, zu identifizieren, ihre Beweggründe zu verstehen und durch gezielte Angebote oder Lösungen zum Bleiben zu motivieren.",
  "difficulty": "medium"
},
  {
  "id": "lf5-q99",
  "category": "Kennzahlen Inbound",
  "type": "multiple-choice",
  "question": "Welche der folgenden Kennzahlen ist ein Indikator für die Kundenzufriedenheit und die Effizienz der Problemlösung?",
  "options": [
    "AHT",
    "Servicelevel",
    "Lost-Call-Quote",
    "FCR"
  ],
  "correctAnswer": "FCR",
  "explanation": "Eine hohe FCR (First Call Resolution) bedeutet, dass Kundenanliegen schnell und abschließend gelöst werden, was direkt die Kundenzufriedenheit erhöht und Folgekontakte reduziert.",
  "difficulty": "easy"
},
  {
  "id": "lf5-q100",
  "category": "Kennzahlen Outbound",
  "type": "multiple-choice",
  "question": "Ein Outbound-Team hat 2000 Bruttokontakte und 800 Nettokontakte. Wie hoch ist die Ausschöpfungsquote?",
  "options": [
    "20%",
    "30%",
    "40%",
    "50%"
  ],
  "correctAnswer": "40%",
  "explanation": "Ausschöpfungsquote = (Nettokontakte / Bruttokontakte) * 100 = (800 / 2000) * 100 = 40%.",
  "difficulty": "easy"
},
  {
  "id": "lf5-q101",
  "category": "Zahlungsverkehr",
  "type": "multiple-choice",
  "question": "Was ist der Hauptnachteil der 'SEPA-Lastschrift' für den Zahlungsempfänger (Unternehmen)?",
  "options": [
    "Hohe Gebühren.",
    "Lange Bearbeitungszeiten.",
    "Risiko von Rückbuchungen durch den Kunden.",
    "Geringe Kundenakzeptanz."
  ],
  "correctAnswer": "Risiko von Rückbuchungen durch den Kunden.",
  "explanation": "Obwohl die SEPA-Lastschrift bequem ist, birgt sie für das Unternehmen das Risiko, dass der Kunde die Lastschrift innerhalb der Widerspruchsfristen zurückbuchen lässt, was zu Zahlungsausfällen führen kann.",
  "difficulty": "medium"
},
];
