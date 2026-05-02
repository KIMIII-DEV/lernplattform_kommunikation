// Learning Data for Communication Exam Preparation
// IHK 1.0 Level - Strictly based on the textbook and Competence Checklist
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
,
  // ============================================================
  // LERNFELD 5 - Kundinnen und Kunden im Dialogmarketing betreuen und binden
  // Quelle: Fachbuch Kaufleute für Dialogmarketing, p.404-508
  // ============================================================
  {
    id: 'lf5-1-1',
    title: '5.1.1 Meldeformel & Gesprächseröffnung',
    description: 'Standardisierter Einstieg im Inbound-Beratungsgespräch.',
    examRelevance: 'high',
    content: `Die Meldeformel ist das standardisierte Gesprächseinstiegsformat im Inbound-Bereich. Sie besteht aus genau 4 Elementen in fester Reihenfolge:

**Reihenfolge (B-F-N-F):**
1. **Begrüßung** ("Guten Tag" / "Guten Morgen")
2. **Firmenname** ("KommunikativAktiv GmbH")
3. **Name des Mitarbeiters** ("Mein Name ist Müller")
4. **Offene Frage** ("Was kann ich für Sie tun?")

**Beispiel:** "Guten Tag, KommunikativAktiv, mein Name ist Müller, was kann ich für Sie tun?"

**Prüfungsfalle:** Reihenfolge ist FIX. Die Frage am Ende muss OFFEN sein – keine Ja/Nein-Frage.`,
    keyPoints: [
      '4 Bestandteile in fester Reihenfolge: B-F-N-F',
      'Letzte Frage muss IMMER offen sein (W-Frage)',
      'Eselsbrücke: Begrüßung-Firma-Name-Frage'
    ]
  },
  {
    id: 'lf5-1-2',
    title: '5.1.2 Legitimationsprüfung',
    description: 'Identitätsprüfung des Anrufers vor Datenweitergabe.',
    examRelevance: 'high',
    content: `Vor der Datenweitergabe oder Kontobearbeitung muss die Identität des Anrufers geprüft werden.

**Typische Prüfelemente:**
- Name + Adresse
- Kundennummer
- Geburtsdatum

**Zweck:**
- Datenschutz (DSGVO)
- Vermeidung von Social Engineering
- Haftungsschutz für das Unternehmen

**Prüfungsfalle:** Legitimation muss VOR Datenweitergabe erfolgen – niemals danach. Auch bei bekannten Stammkunden.`,
    keyPoints: [
      'IMMER vor Datenweitergabe (DSGVO-Pflicht)',
      'Schutz vor Social Engineering',
      'Auch bei bekannten Kunden zwingend'
    ]
  },
  {
    id: 'lf5-1-3',
    title: '5.1.3 Fragetrichter & Bedarfsermittlung',
    description: 'Strukturierte Gesprächstechnik von offen zu geschlossen.',
    examRelevance: 'high',
    content: `Der Fragetrichter strukturiert das Kundengespräch von offen → geschlossen.

**Phasen:**
1. **Offene Fragen (W-Fragen):** Breite Informationssammlung – "Was beschäftigt Sie?"
2. **Vertiefende Fragen:** Konkretisierung – "Seit wann besteht das Problem?"
3. **Geschlossene Fragen:** Absicherung – "Habe ich das richtig verstanden, dass…?"

**Regel:** Erst öffnen, dann schließen. NIEMALS mit geschlossener Frage starten.

**Bild:** Trichter = oben weit (offen), unten eng (geschlossen).`,
    keyPoints: [
      'Reihenfolge: offen → vertiefend → geschlossen',
      'W-Fragen liefern die meiste Information',
      'Geschlossene Fragen nur zur Absicherung am Ende'
    ]
  },
  {
    id: 'lf5-1-4',
    title: '5.1.4 Phasen des Beratungsgesprächs',
    description: '6 Phasen eines professionellen Inbound-Gesprächs.',
    examRelevance: 'high',
    content: `Ein vollständiges Beratungsgespräch durchläuft 6 Phasen:

1. **Kontaktphase:** Meldeformel, Legitimation, Beziehungsaufbau
2. **Bedarfsermittlung:** Fragetrichter, aktives Zuhören
3. **Beratungsphase:** Lösungsvorschläge, Nutzenargumentation
4. **Einwandbehandlung:** Einwände aufnehmen, entkräften, bestätigen
5. **Abschlussphase:** Zusammenfassung, Verabschiedung
6. **Nachbearbeitung (ACW):** Dokumentation im CRM, Follow-up

**Wichtig:** Immer den Kunden zuerst auflegen lassen.`,
    keyPoints: [
      '6 Phasen in fester Reihenfolge',
      'ACW (After-Call-Work) ist Pflichtphase',
      'Kunde legt zuerst auf'
    ]
  },
  {
    id: 'lf5-2-1',
    title: '5.2.1 5 Grundsätze der Datenerfassung',
    description: 'R-V-R-Z-K: Die fünf Pflicht-Grundsätze.',
    examRelevance: 'high',
    content: `Bei der Erfassung von Kundendaten gelten 5 Grundsätze:

1. **Richtigkeit:** Daten sachlich korrekt
2. **Vollständigkeit:** Alle erforderlichen Felder befüllt
3. **Redundanzvermeidung:** Keine doppelten Datensätze (Dubletten)
4. **Zeitstabilität:** Daten so erfassen, dass sie lange gültig bleiben (Geburtsdatum statt Alter, Postfach statt temporärer Adresse)
5. **Konsistenz:** Einheitliche Schreibweisen, Formate, Systematik

**Prüfungsfalle:** "Aktualität" ist KEIN eigener Grundsatz – der vierte heißt ZEITSTABILITÄT.`,
    keyPoints: [
      'Merkformel: R-V-R-Z-K',
      'Zeitstabilität: Geburtsdatum statt Alter',
      '"Aktualität" ist kein offizieller Grundsatz'
    ]
  },
  {
    id: 'lf5-2-2',
    title: '5.2.2 Dubletten & Datenpflege',
    description: 'Doppelte Datensätze erkennen, vermeiden, bereinigen.',
    examRelevance: 'medium',
    content: `**Dublette:** Ein Kunde ist mehrfach in der Datenbank erfasst (z. B. nach Umzug, mit verschiedenen Schreibweisen).

**Folgen:**
- Höhere Portokosten (Mehrfachversand)
- Imageverlust beim Kunden ("Ihr kennt mich nicht")
- Verfälschung von Statistiken
- Erhöhter Pflegeaufwand

**Maßnahmen:**
- Automatische Dublettenprüfung beim Erfassen
- Regelmäßige Bereinigung (Adressabgleich)
- DSGVO: Daten nur so lange wie nötig speichern (Speicherbegrenzung)`,
    keyPoints: [
      'Dubletten = doppelte Datensätze',
      'Folge: Kosten + Imageverlust',
      'DSGVO: Speicherbegrenzung beachten'
    ]
  },
  {
    id: 'lf5-3-1',
    title: '5.3.1 CRM-Definition & Strategiebegriff',
    description: 'CRM ist eine STRATEGIE – keine Software!',
    examRelevance: 'high',
    content: `**CRM (Customer Relationship Management)** ist eine **Unternehmensstrategie** zur Ausrichtung **ALLER Unternehmensbereiche** auf den Aufbau und die Pflege langfristiger, profitabler Kundenbeziehungen.

**Wichtig:** CRM ist KEINE Software – Software ist nur das Werkzeug zur Umsetzung.

**Ziel-Kette:**
Kundenzufriedenheit → Kundenloyalität → Unternehmenserfolg

**Prüfungsfalle:** Der häufigste IHK-Fehler ist die Verwechslung von CRM-Strategie mit CRM-Software.`,
    keyPoints: [
      'CRM = Strategie, NICHT Software',
      'Alle Unternehmensbereiche werden ausgerichtet',
      'Kette: Zufriedenheit → Loyalität → Erfolg'
    ]
  },
  {
    id: 'lf5-3-2',
    title: '5.3.2 3 CRM-Aufgaben',
    description: 'Pflegen, Gewinnen, Zurückgewinnen.',
    examRelevance: 'high',
    content: `Die drei Kernaufgaben des CRM:

1. **Kundenpflege (Retention):** Bestehende Kunden halten, Zufriedenheit sichern, Up-/Cross-Selling
2. **Kundengewinnung (Acquisition):** Neukunden ansprechen, Leads konvertieren
3. **Kundenrückgewinnung (Winback):** Verlorene Kunden reaktivieren – oft günstiger als Neugewinnung

**Strategische Priorität:** Pflege > Rückgewinnung > Neugewinnung (nach Kosten-Effizienz).`,
    keyPoints: [
      '3 Aufgaben: Pflegen, Gewinnen, Zurückgewinnen',
      'Winback günstiger als Neugewinnung (5-7x)',
      'Pflege ist die effizienteste Aufgabe'
    ]
  },
  {
    id: 'lf5-3-3',
    title: '5.3.3 3 CRM-Säulen (T-O-P)',
    description: 'Technik, Organisation, Personal – gleichgewichtig.',
    examRelevance: 'high',
    content: `Die drei Säulen des CRM müssen **gleichgewichtig** wirken:

1. **Technik:** CRM-Software, Datenbanken, Data-Warehouse, Kommunikationsanlagen (ACD, CTI)
2. **Organisation:** Prozesse, Abläufe, Zuständigkeiten, Schnittstellen, Kampagnenmanagement
3. **Personal:** Qualifikation, Kommunikationsfähigkeit, Kundenorientierung als Haltung

**Prüfungsfalle:** Nur Technik ist KEIN echtes CRM. Alle 3 Säulen müssen ausgewogen sein.

**Merkformel:** T-O-P → Technik, Organisation, Personal.`,
    keyPoints: [
      '3 Säulen: T-O-P',
      'Alle gleichgewichtig – sonst kein echtes CRM',
      'Personal-Säule = Haltung, nicht nur Skill'
    ]
  },
  {
    id: 'lf5-3-4',
    title: '5.3.4 Data-Warehouse & Data-Mining',
    description: 'Datenbasis und Analyseverfahren.',
    examRelevance: 'high',
    content: `**Data-Warehouse:**
- Zentrale Datenbank, bündelt Daten aus ALLEN Unternehmensbereichen
- Basis für Analysen und Berichte
- Enthält historische Daten – KEIN Echtzeit-System

**Data-Mining:**
- Analyseverfahren zur **Mustererkennung** in großen Datenmengen
- Identifiziert Trends, Kaufmuster, Risikogruppen
- Basis für gezielte Kampagnen

**Informationsfluss:**
Data-Warehouse → Data-Mining → Kampagnenmanagement

**Bild:** Warehouse = Lager der Daten. Mining = Schürfen nach Wissen.`,
    keyPoints: [
      'Warehouse: zentrale, historische Datenbasis',
      'Mining: Mustererkennung in den Daten',
      'Fluss: Warehouse → Mining → Kampagne'
    ]
  },
  {
    id: 'lf5-4-1',
    title: '5.4.1 Kundenwert – 5 Faktoren',
    description: 'Kundenwert ist NICHT gleich Umsatz.',
    examRelevance: 'high',
    content: `Der Kundenwert beschreibt den wirtschaftlichen Beitrag eines Kunden über 5 Faktoren:

1. **Umsatz:** Aktueller Umsatz
2. **Ertrag:** Gewinn nach Abzug aller Kosten (Betreuung, Rabatte)
3. **Potenzial:** Möglicher zukünftiger Umsatz
4. **Referenzwert:** Weiterempfehlungen, Netzwerkeffekte
5. **Informationswert:** Qualität des Feedbacks für Produktentwicklung

**Prüfungsfalle:** Kundenwert ≠ Umsatz! Ein umsatzstarker Kunde mit hohen Betreuungskosten kann wertlos sein.`,
    keyPoints: [
      '5 Faktoren: Umsatz, Ertrag, Potenzial, Referenz, Information',
      'Kundenwert ≠ Umsatz',
      'Ertrag = Umsatz minus alle Kosten'
    ]
  },
  {
    id: 'lf5-4-2',
    title: '5.4.2 Kundenlebenszyklus – 6 Phasen',
    description: 'Akquisition → Optimierung in fester Reihenfolge.',
    examRelevance: 'high',
    content: `Der Kundenlebenszyklus beschreibt 6 Phasen einer Kundenbeziehung:

1. **Akquisition:** Neukunde ansprechen, gewinnen
2. **Angebot:** Erstkontakt, Beratung, Angebotserstellung
3. **Kauf:** Erstauftrag, Vertrag, Transaktion
4. **After-Sales:** Kurzfristige Nachbetreuung (Lieferung, Einführung)
5. **Betreuung:** Langfristige Kundenbeziehung, Loyalitätsaufbau
6. **Optimierung:** Analyse, Upselling, Verbesserung

**Prüfungsfalle:** After-Sales = kurzfristig. Betreuung = langfristig. Häufige Verwechslung!

**Eselsbrücke:** A-A-K-A-B-O`,
    keyPoints: [
      '6 Phasen, Reihenfolge prüfungsrelevant',
      'After-Sales (kurz) ≠ Betreuung (lang)',
      'Eselsbrücke: A-A-K-A-B-O'
    ]
  },
  {
    id: 'lf5-4-3',
    title: '5.4.3 Zufriedenheit vs. Loyalität',
    description: 'Vergangenheits- vs. zukunftsorientiert.',
    examRelevance: 'high',
    content: `**Kundenzufriedenheit:**
- **Vergangenheitsorientiert** – bewertet bisherige Erfahrungen
- Messung: Umfragen, NPS, Reklamationsquote
- **Notwendige, aber NICHT hinreichende** Bedingung für Loyalität

**Kundenloyalität:**
- **Zukunftsorientiert** – Wiederkaufabsicht, emotionale Bindung
- Messung: Wiederkaufrate, Weiterempfehlungsrate
- Loyalität > Zufriedenheit

**Prüfungsfalle:** Ein zufriedener Kunde ist NICHT automatisch loyal. Loyale Kunden bleiben auch bei Problemen.`,
    keyPoints: [
      'Zufriedenheit: vergangenheitsorientiert',
      'Loyalität: zukunftsorientiert',
      'Zufrieden ≠ Loyal'
    ]
  },
  {
    id: 'lf5-4-4',
    title: '5.4.4 Kundenbindungsinstrumente',
    description: '4 Kategorien: emotional, ökonomisch, strukturell, faktisch.',
    examRelevance: 'medium',
    content: `Vier Arten von Kundenbindung:

**Emotional:** Persönliche Ansprache, Geburtstagsglückwünsche, Community-Building
**Ökonomisch:** Bonusprogramme, Rabattsysteme, Kundenkarten, Treuepunkte
**Strukturell:** Langzeitverträge, Abonnements, technische Integration
**Faktisch:** Standortvorteil, Gewohnheit, fehlende Alternativen

**Wichtig:** Faktische Bindung ist UNGEPLANT – sie entsteht ohne aktive Maßnahme.`,
    keyPoints: [
      '4 Kategorien: emotional, ökonomisch, strukturell, faktisch',
      'Abonnement = strukturell, NICHT ökonomisch',
      'Faktische Bindung = ungeplant'
    ]
  },
  {
    id: 'lf5-5-1',
    title: '5.5.1 Beschwerde vs. Reklamation',
    description: 'Rechtspflichten unterscheiden!',
    examRelevance: 'high',
    content: `**Beschwerde:**
- Ausdruck von Unzufriedenheit
- KEIN rechtlicher Anspruch
- Beispiel: "Ihr Mitarbeiter war unfreundlich"

**Reklamation:**
- Konkreter Mangel an Produkt/Leistung
- Hat **Rechtspflichten** (Gewährleistung)
- 4 Gewährleistungsansprüche: Nachbesserung, Ersatzlieferung, Minderung, Rücktritt
- Beispiel: "Das gelieferte Produkt ist defekt"

**Prüfungsfalle:** Beschwerde ≠ Reklamation. Reklamation hat Rechtspflichten zur Folge!`,
    keyPoints: [
      'Beschwerde: Emotion ohne Rechtsanspruch',
      'Reklamation: Mangel mit Rechtspflicht',
      '4 Gewährleistungsansprüche bei Reklamation'
    ]
  },
  {
    id: 'lf5-5-2',
    title: '5.5.2 ESEL – 5 Schritte im Beschwerdegespräch',
    description: 'Einsteigen, Sachlich, Emotional, Lösung, Abschluss.',
    examRelevance: 'high',
    content: `Die 5 Schritte des Beschwerdegesprächs (ESEL-Modell):

1. **Einsteigen / Annehmen:** Vollständig anhören, nicht unterbrechen, Empathie zeigen
2. **Sachlich klären:** Sachverhalt aufnehmen, Was/Wann/Wo/Wie, dokumentieren
3. **Emotional begleiten:** Verständnis, Entschuldigung (auch ohne Schuldeingeständnis)
4. **Lösung anbieten:** Konkreter Vorschlag, ggf. Kulanz, Termin
5. **Abschluss:** Zusammenfassung, Dank für Feedback, Dokumentation im CRM

**Prüfungsfalle:** Reihenfolge ist PFLICHT. Lösung NIE vor emotionaler Begleitung!`,
    keyPoints: [
      '5 Schritte: ESEL',
      'Reihenfolge ist verbindlich',
      'Emotionale Begleitung VOR Lösung'
    ]
  },
  {
    id: 'lf5-5-3',
    title: '5.5.3 10 Fehler im Beschwerdegespräch',
    description: 'IHK-Pflichtwissen.',
    examRelevance: 'high',
    content: `Die 10 häufigen Fehler im Beschwerdegespräch:

1. Kunden unterbrechen
2. Rechtfertigungen ("Nicht meine Schuld")
3. Schuld auf Kollegen schieben
4. Kunden nicht ernst nehmen
5. Zu schnell Lösung anbieten (ohne emotional gehört zu haben)
6. Vage Versprechen (ohne Termin)
7. Nicht dokumentieren
8. Negatives Formulieren ("Das können wir nicht")
9. Kulanz ohne Genehmigung zusagen
10. Kein Follow-up nach Lösung

**Prüfungsrelevanz:** Diese Liste kommt direkt in der IHK-Prüfung.`,
    keyPoints: [
      '10 Fehler – auswendig lernen',
      'Häufigster Fehler: zu schnell Lösung',
      'Kulanz braucht Genehmigung'
    ]
  },
  {
    id: 'lf5-5-4',
    title: '5.5.4 Kulanz',
    description: 'Freiwilliges Entgegenkommen ohne Rechtspflicht.',
    examRelevance: 'medium',
    content: `**Kulanz** = freiwilliges Entgegenkommen des Unternehmens **OHNE** rechtliche Verpflichtung.

**Zweck:**
- Kundenbeziehung erhalten
- Imagepflege
- Kundenbindung

**Beispiele:** Ersatz außerhalb der Gewährleistung, Gutschein bei langer Wartezeit.

**Wichtig:** Kulanz braucht Genehmigung (Kompetenzrahmen!). Nicht mit Gewährleistung verwechseln.`,
    keyPoints: [
      'Kulanz: freiwillig, OHNE Rechtspflicht',
      'Braucht interne Genehmigung',
      'Nicht mit Gewährleistung verwechseln'
    ]
  },
  {
    id: 'lf5-6-1',
    title: '5.6.1 Haltegespräch (Kündigungsprävention)',
    description: 'Kunden halten BEVOR er kündigt.',
    examRelevance: 'medium',
    content: `**Haltegespräch:** Gespräch mit dem Ziel, einen kündigungswilligen Kunden zu halten – BEVOR er gekündigt hat.

**Phasen:**
1. Kündigungsgrund herausarbeiten (offene Fragen!)
2. Verständnis zeigen
3. Konkrete Gegenargumente / Alternativen
4. Spezialangebot (Sonderkonditionen, Upgrade)
5. Entscheidung dem Kunden überlassen

**Erfolgsregel:** Kein Druck. Entscheidungsraum lassen.`,
    keyPoints: [
      'Prävention vor Kündigung',
      'Kündigungsgrund verstehen',
      'Kein Druck ausüben'
    ]
  },
  {
    id: 'lf5-6-2',
    title: '5.6.2 Winback – Kundenrückgewinnung',
    description: 'Bereits abgewanderte Kunden reaktivieren.',
    examRelevance: 'high',
    content: `**Winback** = Rückgewinnung bereits **verlorener** Kunden (NACH Abwanderung).

**Warum Winback?**
- Neukundengewinnung kostet 5-7x mehr
- Verlorene Kunden kennen das Unternehmen bereits
- Abwanderungsanalyse liefert wertvolles Feedback

**Prozess:**
1. Abwanderungsanalyse (Warum?)
2. Segmentierung (Wer lohnt sich?)
3. Persönliche Ansprache
4. Rückkehranreiz schaffen
5. Re-Integration

**Wichtig:** Nicht jeden Kunden zurückgewinnen – Kundenwert prüfen.`,
    keyPoints: [
      'Winback = nach Abwanderung',
      '5-7x günstiger als Neugewinnung',
      'Nur bei positivem Kundenwert'
    ]
  },
  {
    id: 'lf5-7-1',
    title: '5.7.1 AHT – Average Handling Time',
    description: 'Kernkennzahl Inbound.',
    examRelevance: 'high',
    content: `**AHT (Average Handling Time)** = Durchschnittliche Bearbeitungszeit eines Anrufs.

**Formel:**
AHT = Talk Time + Hold Time + ACW (After-Call-Work)

**Bestandteile:**
- **Talk Time:** Reine Gesprächsdauer
- **Hold Time:** Wartezeit während Recherche
- **ACW:** Dokumentation nach dem Gespräch

**Prüfungsfalle:** AHT enthält IMMER auch die Nachbearbeitung (ACW), nicht nur die Gesprächszeit. Zu niedrige AHT = unvollständige Bearbeitung.`,
    keyPoints: [
      'AHT = Talk + Hold + ACW',
      'ACW ist immer Teil der AHT',
      'Zu niedrig = Qualitätsproblem'
    ]
  },
  {
    id: 'lf5-7-2',
    title: '5.7.2 Servicelevel & FCR',
    description: '80/20-Regel und Erstlösungsquote.',
    examRelevance: 'high',
    content: `**Servicelevel:** Erreichbarkeitsziel im Format X% / Y Sekunden.
- **Branchenstandard:** 80/20 → 80% der Anrufe in 20 Sekunden angenommen
- Formel: (in X Sek. beantwortet / Gesamtanrufe) × 100

**FCR (First Call Resolution):**
- Anteil der Probleme, die beim **ersten** Kontakt gelöst werden
- Zielwert: > 70-80%
- Formel: (Erstkontakt-Lösungen / Gesamtfälle) × 100

**Prüfungsfalle:** Beim zweiten Anruf zum selben Thema zählt FCR NICHT mehr.`,
    keyPoints: [
      'Servicelevel-Standard: 80/20',
      'FCR-Ziel: > 70-80%',
      'Zweiter Anruf zerstört FCR'
    ]
  },
  {
    id: 'lf5-7-3',
    title: '5.7.3 Outbound-Kennzahlen',
    description: 'Ausschöpfungs-, Erfolgs- und Stornoquote.',
    examRelevance: 'high',
    content: `**Ausschöpfungsquote:** (Kontaktiert / Gesamtadressen) × 100

**Erfolgsquote (Conversion):** (Abschlüsse / Kontakte) × 100

**Stornoquote:** (Stornierungen / Abschlüsse) × 100
- Hohe Stornoquote = Qualitätsproblem (Beratungsfehler, Druckverkauf)

**Lost Calls (Inbound):** Anrufe, bei denen der Anrufer auflegt, bevor abgenommen wird. Hohe Quote = Erreichbarkeitsproblem.`,
    keyPoints: [
      'Ausschöpfung: Kontakte/Adressen',
      'Erfolg: Abschlüsse/Kontakte',
      'Storno: Qualitätsindikator'
    ]
  },
  {
    id: 'lf5-8-1',
    title: '5.8.1 SEPA – IBAN, BIC, Mandat',
    description: 'IBAN-Aufbau und Widerspruchsfristen.',
    examRelevance: 'high',
    content: `**SEPA:** Single Euro Payments Area – einheitlicher Euro-Zahlungsverkehrsraum.

**IBAN (Deutschland):**
- Länderkennung (DE) = 2
- Prüfziffer = 2
- BLZ = 8
- Kontonummer = 10
- **Gesamt: IMMER 22 Stellen**

**BIC:** Bank Identifier Code (8 oder 11 Stellen).

**Lastschrift-Widerspruchsfristen:**
- **Basislastschrift (Verbraucher):** 8 Wochen
- **Bei fehlendem Mandat:** 13 Monate
- **Firmenlastschrift (B2B):** KEIN Widerspruchsrecht

**Überweisungsdauer:** max. 1 Bankarbeitstag.`,
    keyPoints: [
      'IBAN DE = 22 Stellen',
      'Basislastschrift: 8 Wochen Widerspruch',
      'Firmenlastschrift: kein Widerspruch'
    ]
  },
  {
    id: 'lf5-8-2',
    title: '5.8.2 Bonität & Schufa',
    description: 'Kreditwürdigkeit und Datenschutzpflicht.',
    examRelevance: 'medium',
    content: `**Bonität:** Kreditwürdigkeit / Zahlungsfähigkeit eines Kunden.

**Schufa (Schutzgemeinschaft für allgemeine Kreditsicherung):**
- Private Auskunftei
- Sammelt: Kredithistorie, Zahlungsausfälle, Verträge
- Score: 0-100 (höher = besser)

**Einsatz im Call Center:**
- Vor Vertragsabschluss auf Kredit
- Vor SEPA-Lastschrift-Genehmigung
- Bei Ratenkäufen

**DSGVO-Pflicht:** Bonitätsprüfung erfordert Einwilligung des Kunden oder berechtigtes Interesse.`,
    keyPoints: [
      'Bonität = Kreditwürdigkeit',
      'Schufa-Score: 0-100',
      'Einwilligung nach DSGVO erforderlich'
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
,
  // ============================================================
  // LERNFELD 5 - Flashcards (105 Karten)
  // ============================================================
  { id: 'lf5-f1', category: 'Gesprächsführung', question: 'Welche 4 Bestandteile hat die Meldeformel?', answer: 'Begrüßung, Firmenname, Name des Mitarbeiters, offene Frage (B-F-N-F).' },
  { id: 'lf5-f2', category: 'Gesprächsführung', question: 'Warum endet die Meldeformel mit einer offenen Frage?', answer: 'Offene Fragen ermöglichen dem Kunden, sein Anliegen frei zu schildern – mehr Information, bessere Bedarfsermittlung.' },
  { id: 'lf5-f3', category: 'Gesprächsführung', question: 'Was ist die Legitimationsprüfung und wann erfolgt sie?', answer: 'Identitätsprüfung des Anrufers (Name, Adresse, Kundennummer). Sie erfolgt VOR jeder Datenweitergabe (DSGVO).' },
  { id: 'lf5-f4', category: 'Gesprächsführung', question: 'Erkläre den Fragetrichter.', answer: 'Gesprächsstruktur von offen → vertiefend → geschlossen. Erst breite Information sammeln, dann konkretisieren, am Ende absichern.' },
  { id: 'lf5-f5', category: 'Gesprächsführung', question: 'Was ist eine offene Frage? Beispiel?', answer: 'W-Frage, die ausführliche Antworten erlaubt. Beispiel: "Was kann ich für Sie tun?"' },
  { id: 'lf5-f6', category: 'Gesprächsführung', question: 'Was ist eine geschlossene Frage und wann setzt man sie ein?', answer: 'Frage mit Ja/Nein-Antwort. Einsatz am Ende zur Absicherung: "Habe ich das richtig verstanden?"' },
  { id: 'lf5-f7', category: 'Gesprächsführung', question: 'Nenne die 6 Phasen des Beratungsgesprächs.', answer: '1. Kontaktphase 2. Bedarfsermittlung 3. Beratung 4. Einwandbehandlung 5. Abschluss 6. Nachbearbeitung.' },
  { id: 'lf5-f8', category: 'Gesprächsführung', question: 'Was ist ACW (After-Call-Work)?', answer: 'Nachbearbeitungszeit: Dokumentation, Weiterleitung, CRM-Eintrag. Teil der AHT.' },
  { id: 'lf5-f9', category: 'Gesprächsführung', question: 'Wer legt zuerst auf – Mitarbeiter oder Kunde?', answer: 'Immer der Kunde. Der Mitarbeiter wartet, bis der Kunde aufgelegt hat.' },
  { id: 'lf5-f10', category: 'Gesprächsführung', question: 'Was bedeutet aktives Zuhören?', answer: 'Bewusstes, konzentriertes Zuhören mit Bestätigen, Zusammenfassen, Nachfragen – ohne Unterbrechungen.' },
  { id: 'lf5-f11', category: 'Datenmanagement', question: 'Nenne die 5 Grundsätze der Datenerfassung.', answer: 'Richtigkeit, Vollständigkeit, Redundanzvermeidung, Zeitstabilität, Konsistenz (R-V-R-Z-K).' },
  { id: 'lf5-f12', category: 'Datenmanagement', question: 'Was bedeutet Zeitstabilität – mit Beispiel?', answer: 'Daten so erfassen, dass sie lange gültig bleiben. Beispiel: Geburtsdatum statt Alter, da Alter sich jährlich ändert.' },
  { id: 'lf5-f13', category: 'Datenmanagement', question: 'Was ist eine Dublette und welche Folgen hat sie?', answer: 'Doppelt vorhandener Datensatz. Folgen: Mehrfachversand, Imageverlust, verfälschte Statistiken.' },
  { id: 'lf5-f14', category: 'Datenmanagement', question: 'Was bedeutet Redundanzvermeidung?', answer: 'Daten nicht mehrfach erfassen – keine Dubletten, einmalige Datenhaltung zur Sicherung der Integrität.' },
  { id: 'lf5-f15', category: 'Datenmanagement', question: 'Was enthält eine Kundenhistorie?', answer: 'Alle Kundenkontakte: Datum, Art, Inhalte, Beschwerden, offene Vorgänge, Kaufhistorie.' },
  { id: 'lf5-f16', category: 'Datenmanagement', question: 'Ist echtes Multitasking neurobiologisch möglich?', answer: 'Nein. Das Gehirn macht Task-Switching – schnelles Wechseln zwischen Aufgaben. Fehlerrate steigt, Tiefe sinkt.' },
  { id: 'lf5-f17', category: 'Datenmanagement', question: 'Was bedeutet Konsistenz bei der Datenerfassung?', answer: 'Einheitliche Schreibweisen, Formate, Systematik. Z. B. immer "Straße" statt "Str.".' },
  { id: 'lf5-f18', category: 'CRM', question: 'Definiere CRM korrekt nach IHK.', answer: 'CRM ist eine Unternehmensstrategie zur Ausrichtung ALLER Bereiche auf langfristige, profitable Kundenbeziehungen. KEINE Software.' },
  { id: 'lf5-f19', category: 'CRM', question: 'Nenne die 3 CRM-Aufgaben.', answer: '1. Kundenpflege (Retention) 2. Kundengewinnung (Acquisition) 3. Kundenrückgewinnung (Winback).' },
  { id: 'lf5-f20', category: 'CRM', question: 'Nenne die 3 CRM-Säulen.', answer: 'Technik, Organisation, Personal (T-O-P) – müssen gleichgewichtig sein.' },
  { id: 'lf5-f21', category: 'CRM', question: 'Was ist ein Data-Warehouse?', answer: 'Zentrale Datenbank, die Daten aus ALLEN Unternehmensbereichen bündelt. Basis für Analysen. Historische Daten – kein Echtzeit-System.' },
  { id: 'lf5-f22', category: 'CRM', question: 'Was ist Data-Mining?', answer: 'Analyseverfahren zur Mustererkennung in großen Datenmengen. Erkennt Trends, Kaufmuster, Risikogruppen.' },
  { id: 'lf5-f23', category: 'CRM', question: 'Wie hängen Data-Warehouse und Data-Mining zusammen?', answer: 'Warehouse liefert Daten → Mining analysiert Muster → Kampagnenmanagement nutzt die Ergebnisse.' },
  { id: 'lf5-f24', category: 'CRM', question: 'Unterschied: CRM-Strategie vs. CRM-Software?', answer: 'Strategie = Unternehmensausrichtung auf Kundenbeziehungen. Software = nur das Werkzeug.' },
  { id: 'lf5-f25', category: 'CRM', question: 'Was ist Social CRM?', answer: 'Erweiterung des CRM auf Social-Media-Kanäle: Monitoring, Direktinteraktion, Community-Management.' },
  { id: 'lf5-f26', category: 'Kundenbindung', question: 'Nenne die 5 Faktoren des Kundenwerts.', answer: '1. Umsatz 2. Ertrag 3. Potenzial 4. Referenzwert 5. Informationswert.' },
  { id: 'lf5-f27', category: 'Kundenbindung', question: 'Warum ist Kundenwert ≠ Umsatz?', answer: 'Hoher Umsatz mit hohen Betreuungskosten kann negativen Ertrag erzeugen → trotz hohem Umsatz geringer Wert.' },
  { id: 'lf5-f28', category: 'Kundenbindung', question: 'Nenne die 6 Phasen des Kundenlebenszyklus.', answer: '1. Akquisition 2. Angebot 3. Kauf 4. After-Sales 5. Betreuung 6. Optimierung.' },
  { id: 'lf5-f29', category: 'Kundenbindung', question: 'Unterschied: After-Sales vs. Betreuung?', answer: 'After-Sales = kurzfristig direkt nach dem Kauf (Lieferung, Einführung). Betreuung = langfristige Beziehungspflege.' },
  { id: 'lf5-f30', category: 'Kundenbindung', question: 'Unterschied: Kundenzufriedenheit vs. Kundenloyalität?', answer: 'Zufriedenheit = vergangenheitsorientiert. Loyalität = zukunftsorientiert (Wiederkaufabsicht, emotionale Bindung).' },
  { id: 'lf5-f31', category: 'Kundenbindung', question: 'Kann ein zufriedener Kunde zur Konkurrenz wechseln?', answer: 'Ja. Zufriedenheit reicht nicht für Loyalität. Loyalität entsteht erst durch emotionale Bindung und Mehrwert.' },
  { id: 'lf5-f32', category: 'Kundenbindung', question: 'Nenne 3 strukturelle Kundenbindungsinstrumente.', answer: '1. Langzeitverträge 2. Abonnements 3. Technische Integration (z. B. Software-Anbindung).' },
  { id: 'lf5-f33', category: 'Kundenbindung', question: 'Was ist Winback und warum lohnt es?', answer: 'Rückgewinnung verlorener Kunden. Lohnt sich: Neukundengewinnung kostet 5-7x mehr.' },
  { id: 'lf5-f34', category: 'Kundenbindung', question: 'Nenne 3 emotionale Kundenbindungsinstrumente.', answer: '1. Persönliche Ansprache 2. Geburtstagsglückwünsche 3. Community-Events.' },
  { id: 'lf5-f35', category: 'Kundenbindung', question: 'Nenne 3 ökonomische Kundenbindungsinstrumente.', answer: '1. Bonusprogramme 2. Kundenkarten/Treuepunkte 3. Sonderkonditionen für Stammkunden.' },
  { id: 'lf5-f36', category: 'Beschwerden', question: 'Unterschied Beschwerde vs. Reklamation?', answer: 'Beschwerde = Unzufriedenheit ohne Rechtsanspruch. Reklamation = konkreter Mangel mit Rechtspflichten (Nachbesserung, Ersatz, Minderung, Rücktritt).' },
  { id: 'lf5-f37', category: 'Beschwerden', question: 'Nenne die 5 Schritte im Beschwerdegespräch.', answer: '1. Einsteigen 2. Sachlich klären 3. Emotional begleiten 4. Lösung anbieten 5. Abschluss (ESEL).' },
  { id: 'lf5-f38', category: 'Beschwerden', question: 'Warum ist die Reihenfolge der 5 Schritte wichtig?', answer: 'Emotionale Begleitung muss VOR der Lösung kommen – sonst wirkt die Lösung kalt und wird abgelehnt.' },
  { id: 'lf5-f39', category: 'Beschwerden', question: 'Was ist Kulanz?', answer: 'Freiwilliges Entgegenkommen OHNE rechtliche Verpflichtung. Dient Kundenbindung und Imagepflege.' },
  { id: 'lf5-f40', category: 'Beschwerden', question: 'Nenne 5 von 10 Fehlern im Beschwerdegespräch.', answer: '1. Unterbrechen 2. Rechtfertigen 3. Schuld auf Kollegen 4. Zu schnell Lösung 5. Keine Dokumentation.' },
  { id: 'lf5-f41', category: 'Beschwerden', question: 'Eselsbrücke für die 5 Schritte des Beschwerdegesprächs?', answer: 'ESEL: Einsteigen, Sachlich, Emotional, Lösung, Abschluss.' },
  { id: 'lf5-f42', category: 'Beschwerden', question: 'Was ist eine Entschuldigung ohne Schuldeingeständnis?', answer: 'Verständnis und Bedauern ausdrücken ("Tut mir leid, dass Sie das erlebt haben"), ohne rechtliche Schuld anzuerkennen.' },
  { id: 'lf5-f43', category: 'Beschwerden', question: 'Warum ist Beschwerdefeedback wertvoll?', answer: 'Nur ca. 4% der Unzufriedenen beschweren sich aktiv. Jede Beschwerde repräsentiert viele stille Unzufriedene.' },
  { id: 'lf5-f44', category: 'Beschwerden', question: 'Welche 4 Gewährleistungsansprüche gibt es?', answer: '1. Nachbesserung 2. Ersatzlieferung 3. Minderung 4. Rücktritt vom Vertrag.' },
  { id: 'lf5-f45', category: 'Beschwerden', question: 'Was ist nach dem Beschwerdegespräch im CRM zu dokumentieren?', answer: 'Datum, Inhalt, Lösung, Kulanzleistung, Follow-up-Termin, Kundenstimmung.' },
  { id: 'lf5-f46', category: 'Kennzahlen', question: 'Was ist AHT und wie berechnet man sie?', answer: 'Average Handling Time = Talk Time + Hold Time + ACW (Nachbearbeitung).' },
  { id: 'lf5-f47', category: 'Kennzahlen', question: 'Was bedeutet Servicelevel 80/20?', answer: '80% aller Anrufe werden innerhalb von 20 Sekunden angenommen. Branchenstandard.' },
  { id: 'lf5-f48', category: 'Kennzahlen', question: 'Was sind Lost Calls?', answer: 'Anrufe, bei denen der Anrufer auflegt, bevor ein Mitarbeiter abnimmt. Hohe Quote = Erreichbarkeitsproblem.' },
  { id: 'lf5-f49', category: 'Kennzahlen', question: 'Was ist FCR und welcher Zielwert gilt?', answer: 'First Call Resolution = Problem beim ersten Kontakt gelöst. Zielwert: > 70-80%.' },
  { id: 'lf5-f50', category: 'Kennzahlen', question: 'Was ist die Ausschöpfungsquote im Outbound?', answer: '(Kontaktierte Adressen / Gesamtadressen) × 100. Zeigt Bearbeitungsgrad der Adressbasis.' },
  { id: 'lf5-f51', category: 'Kennzahlen', question: 'Was ist die Stornoquote und was zeigt sie?', answer: 'Anteil stornierter Abschlüsse. Hoch = Qualitätsproblem (Druckverkauf, Fehlinformation).' },
  { id: 'lf5-f52', category: 'Kennzahlen', question: 'Was ist die Erfolgsquote im Outbound?', answer: '(Abschlüsse / Kontakte) × 100 = Conversion Rate.' },
  { id: 'lf5-f53', category: 'Kennzahlen', question: 'Warum ist eine zu niedrige AHT problematisch?', answer: 'Zu kurze Gespräche = unvollständige Bearbeitung → Folge-Anrufe, niedrige FCR.' },
  { id: 'lf5-f54', category: 'Kennzahlen', question: 'Wie hängen FCR und Kundenzufriedenheit zusammen?', answer: 'Hohe FCR = Problem beim ersten Kontakt gelöst = hohe Kundenzufriedenheit. Starke positive Korrelation.' },
  { id: 'lf5-f55', category: 'Kennzahlen', question: 'Was ist Hold-Time?', answer: 'Zeit, in der der Kunde während des Gesprächs gehalten wird (Warteschleife für Recherche). Teil der AHT.' },
  { id: 'lf5-f56', category: 'Zahlungsverkehr', question: 'Wie ist eine deutsche IBAN aufgebaut?', answer: 'DE (2) + Prüfziffer (2) + BLZ (8) + Kontonummer (10) = 22 Stellen.' },
  { id: 'lf5-f57', category: 'Zahlungsverkehr', question: 'Widerspruchsfrist bei SEPA-Basislastschrift?', answer: '8 Wochen ab Kontobelastungsdatum.' },
  { id: 'lf5-f58', category: 'Zahlungsverkehr', question: 'Wofür steht SEPA?', answer: 'Single Euro Payments Area – einheitlicher Euro-Zahlungsverkehrsraum in Europa.' },
  { id: 'lf5-f59', category: 'Zahlungsverkehr', question: 'Unterschied: SEPA-Lastschrift vs. SEPA-Überweisung?', answer: 'Lastschrift: Unternehmen zieht ein (Mandat nötig). Überweisung: Kunde überweist aktiv.' },
  { id: 'lf5-f60', category: 'Zahlungsverkehr', question: 'Was ist BIC?', answer: 'Bank Identifier Code – internationale Bankkennung mit 8 oder 11 Stellen.' },
  { id: 'lf5-f61', category: 'Zahlungsverkehr', question: 'Widerspruchsfrist bei fehlendem Mandat?', answer: '13 Monate (statt 8 Wochen mit gültigem Mandat).' },
  { id: 'lf5-f62', category: 'Zahlungsverkehr', question: 'Was ist Bonität?', answer: 'Kreditwürdigkeit / Zahlungsfähigkeit. Wird über Schufa-Score (0-100) gemessen.' },
  { id: 'lf5-f63', category: 'Zahlungsverkehr', question: 'Was ist ein SEPA-Lastschriftmandat?', answer: 'Einwilligung des Kunden, dass das Unternehmen Beträge von seinem Konto einziehen darf.' },
  { id: 'lf5-f64', category: 'Zahlungsverkehr', question: 'Wie lange dauert eine SEPA-Überweisung?', answer: 'Maximal 1 Bankarbeitstag.' },
  { id: 'lf5-f65', category: 'Zahlungsverkehr', question: 'Was sammelt die Schufa?', answer: 'Kredithistorie, Zahlungsausfälle, bestehende Verträge, Konten. Liefert Bonitätsscore.' },
  { id: 'lf5-f66', category: 'CRM', question: 'Warum müssen alle 3 CRM-Säulen gleichgewichtig sein?', answer: 'Technik ohne Schulung (Personal) und Prozesse (Organisation) scheitert. Alle drei müssen greifen.' },
  { id: 'lf5-f67', category: 'Kundenbindung', question: 'Was ist der Kundenlebenszyklus und wozu dient er?', answer: 'Modell der Phasen einer Kundenbeziehung. Dient zur gezielten Maßnahmenplanung pro Phase.' },
  { id: 'lf5-f68', category: 'Gesprächsführung', question: 'Was ist Einwandbehandlung?', answer: 'Phase, in der Kundenwiderstände aufgenommen, verstanden und entkräftet werden – ohne Widerspruch.' },
  { id: 'lf5-f69', category: 'Beschwerden', question: 'Unterschied Beschwerde vs. Widerspruch?', answer: 'Beschwerde = emotionale Unzufriedenheit. Widerspruch = formaler Einspruch gegen eine Entscheidung.' },
  { id: 'lf5-f70', category: 'Kennzahlen', question: 'Was bedeutet eine hohe Stornoquote für das Qualitätsmanagement?', answer: 'Hinweis auf Beratungsfehler, Druckverkauf oder Fehlinformation – muss analysiert werden.' },
  { id: 'lf5-f71', category: 'CRM', question: 'Welche CRM-Aufgabe hat höchste Effizienz?', answer: 'Kundenpflege – günstigste Aufgabe, da Bestand erhalten wird. Gewinnung am teuersten.' },
  { id: 'lf5-f72', category: 'Gesprächsführung', question: 'Was ist Bedarfsermittlung?', answer: 'Systematische Erfassung der Kundenbedürfnisse als Basis für passende Lösungsvorschläge.' },
  { id: 'lf5-f73', category: 'Gesprächsführung', question: 'Unterschied Frontoffice vs. Backoffice?', answer: 'Frontoffice = direkter Kundenkontakt (Telefonie). Backoffice = Weiterbearbeitung ohne direkten Kontakt.' },
  { id: 'lf5-f74', category: 'Kundenbindung', question: 'Warum ist Winback günstiger als Neukundengewinnung?', answer: 'Verlorene Kunden kennen Unternehmen, Produkte und Prozesse bereits – weniger Aufklärungsaufwand.' },
  { id: 'lf5-f75', category: 'Zahlungsverkehr', question: 'Unterschied Basislastschrift vs. Firmenlastschrift?', answer: 'Basislastschrift: Verbraucher, 8 Wochen Widerspruch. Firmenlastschrift: B2B, KEIN Widerspruchsrecht.' },
  { id: 'lf5-f76', category: 'Beschwerden', question: 'Was bedeutet positives Formulieren?', answer: 'Negative Aussagen umwandeln: "Das geht nicht" → "Was ich für Sie tun kann ist…"' },
  { id: 'lf5-f77', category: 'Gesprächsführung', question: 'Was ist die Nachbereitungsphase?', answer: 'Dokumentation im CRM, Weiterleitung von Aufgaben, Follow-up-Termine setzen – Qualitätssicherung.' },
  { id: 'lf5-f78', category: 'CRM', question: 'Was ist ein Kundensegment?', answer: 'Gruppe von Kunden mit ähnlichen Merkmalen oder Verhaltensweisen – Basis für zielgruppengerechte Maßnahmen.' },
  { id: 'lf5-f79', category: 'Kundenbindung', question: 'Was ist der Referenzwert eines Kunden?', answer: 'Wert durch Weiterempfehlungen und Netzwerkeffekte – ein Kunde, der neue Kunden bringt.' },
  { id: 'lf5-f80', category: 'Kundenbindung', question: 'Was ist der Informationswert eines Kunden?', answer: 'Qualität seines Feedbacks für Produktentwicklung und Marktforschung.' },
  { id: 'lf5-f81', category: 'Kennzahlen', question: 'Was ist Talk-Time?', answer: 'Reine Gesprächsdauer ohne Nachbearbeitung. Teilkomponente der AHT.' },
  { id: 'lf5-f82', category: 'Kennzahlen', question: 'Wie berechnet man die Lost-Call-Rate?', answer: '(Nicht angenommene Anrufe / Gesamtanrufe) × 100.' },
  { id: 'lf5-f83', category: 'Beschwerden', question: 'Welche 4 Gewährleistungsansprüche kennt das Recht?', answer: 'Nachbesserung, Ersatzlieferung, Minderung, Rücktritt vom Vertrag.' },
  { id: 'lf5-f84', category: 'Gesprächsführung', question: 'Was ist Nutzenargumentation?', answer: 'Argumentation aus Kundenperspektive: nicht Eigenschaften, sondern Vorteile für den Kunden betonen.' },
  { id: 'lf5-f85', category: 'Datenmanagement', question: 'DSGVO-Relevanz bei der Datenspeicherung?', answer: 'Speicherbegrenzung: Daten nur so lange wie nötig. Bei fehlendem Zweck löschen. Einwilligung erforderlich.' },
  { id: 'lf5-f86', category: 'CRM', question: 'Unterschied Kundenpflege vs. Kundenrückgewinnung?', answer: 'Pflege = aktiven Bestand halten und entwickeln. Rückgewinnung = abgewanderte Kunden reaktivieren.' },
  { id: 'lf5-f87', category: 'Kundenbindung', question: 'Welche Phase folgt direkt nach dem Kauf?', answer: 'After-Sales – kurzfristige Nachbetreuung (Lieferung, Einführung).' },
  { id: 'lf5-f88', category: 'Beschwerden', question: 'Unterschied Beschwerdemanagement vs. Qualitätsmanagement?', answer: 'Beschwerdemanagement = reaktiv. Qualitätsmanagement = proaktiv (Fehler vermeiden).' },
  { id: 'lf5-f89', category: 'Gesprächsführung', question: 'Was sind Gesprächsstörer?', answer: 'Verhaltensweisen, die Gespräche behindern: Unterbrechen, Bewerten, Ablenken.' },
  { id: 'lf5-f90', category: 'Gesprächsführung', question: 'Was sind Gesprächsförderer?', answer: 'Verhaltensweisen, die Gespräche unterstützen: Aktives Zuhören, offene Fragen, Bestätigen, Empathie.' },
  { id: 'lf5-f91', category: 'Kennzahlen', question: 'Was bedeutet eine Erfolgsquote von 15% im Outbound?', answer: 'Von 100 Kontakten führen 15 zu einem Abschluss. Werte variieren stark je Kampagne.' },
  { id: 'lf5-f92', category: 'Zahlungsverkehr', question: 'Warum braucht die Schufa-Abfrage Einwilligung?', answer: 'DSGVO: Bonitätsprüfung ist Datenverarbeitung – erfordert Rechtsgrundlage.' },
  { id: 'lf5-f93', category: 'CRM', question: 'Was ist Kundenwert-Scoring?', answer: 'Bewertungssystem zur Einordnung von Kunden nach Gesamtwert – zur Priorisierung der Betreuung.' },
  { id: 'lf5-f94', category: 'Kundenbindung', question: 'Was sind faktische Kundenbindungsgründe?', answer: 'Bindung ohne bewusste Entscheidung: Standortvorteil, fehlende Alternativen, Gewohnheit.' },
  { id: 'lf5-f95', category: 'Beschwerden', question: 'Warum nach der Beschwerde danken?', answer: 'Feedback ist wertvoll. Dank signalisiert Wertschätzung. Nur ~4% der Unzufriedenen beschweren sich aktiv.' },
  { id: 'lf5-f96', category: 'Gesprächsführung', question: 'Was ist die Bumerang-Technik?', answer: 'Einwand des Kunden als Argument umkehren: "Gerade WEIL Sie auf den Preis achten, ist dieses Angebot ideal."' },
  { id: 'lf5-f97', category: 'Kennzahlen', question: 'Was ist die Auslastungsquote?', answer: 'Anteil produktiver Gesprächszeit an der Gesamtarbeitszeit.' },
  { id: 'lf5-f98', category: 'CRM', question: 'Was ist ein CRM-System (Software)?', answer: 'Softwarelösung zur Verwaltung von Kundendaten, Kontakthistorien, Kampagnen – Werkzeug der CRM-Strategie.' },
  { id: 'lf5-f99', category: 'Kundenbindung', question: 'Unterschied Neukunde vs. Stammkunde im Kundenwert?', answer: 'Stammkunden: höherer Wert – geringere Betreuungskosten, höhere Wiederkaufrate, mehr Empfehlungen.' },
  { id: 'lf5-f100', category: 'Beschwerden', question: 'Wann ist Kulanz sinnvoll?', answer: 'Wenn Beziehungspflege und Imageschutz den Aufwand übersteigen. Immer Kompetenzrahmen prüfen.' },
  { id: 'lf5-f101', category: 'CRM', question: 'Was ist ein Kampagnenmanagement-System?', answer: 'Software zur Planung, Durchführung und Auswertung von Marketing-/Vertriebskampagnen. Teil der Technik-Säule.' },
  { id: 'lf5-f102', category: 'Kundenbindung', question: 'Was sind die 3 Grundregeln im Shitstorm-Management?', answer: 'Nie löschen, nie ignorieren, nie aggressiv reagieren.' },
  { id: 'lf5-f103', category: 'Kundenbindung', question: 'Welche 5 Schritte hat die Shitstorm-Strategie?', answer: '1. Monitoring 2. Analyse 3. Reaktion 4. Lösung 5. Nachverfolgung.' },
  { id: 'lf5-f104', category: 'Gesprächsführung', question: 'Was passiert ohne Legitimationsprüfung?', answer: 'DSGVO-Verstoß, Social-Engineering-Risiko, Datenschutzverletzung, Haftungsrisiko.' },
  { id: 'lf5-f105', category: 'Beschwerden', question: 'Warum darf man Lösung nicht vor emotionaler Begleitung anbieten?', answer: 'Wirkt kalt, wird oft abgelehnt. Kunde fühlt sich nicht ernst genommen. ESEL-Reihenfolge ist verbindlich.' }

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
,
  // ============================================================
  // LERNFELD 5 - Quiz Questions (105 Fragen)
  // ============================================================
  {
    id: 'lf5-q1',
    question: 'Welche 4 Elemente hat die Meldeformel in der richtigen Reihenfolge?',
    type: 'multiple-choice',
    options: ['Firma, Name, Begrüßung, Frage', 'Begrüßung, Firma, Name, offene Frage', 'Name, Begrüßung, Frage, Firma', 'Begrüßung, Name, Firma, Frage'],
    correctAnswer: 'Begrüßung, Firma, Name, offene Frage',
    explanation: 'Korrekte Reihenfolge: Begrüßung → Firmenname → Mitarbeitername → offene Frage. Reihenfolge ist fix.',
    difficulty: 'easy',
    category: 'Gesprächsführung'
  },
  {
    id: 'lf5-q2',
    question: 'CRM ist...',
    type: 'multiple-choice',
    options: ['Eine Software für Kundendaten', 'Ein Datenbankformat', 'Eine Unternehmensstrategie zur Ausrichtung auf Kundenbeziehungen', 'Eine gesetzliche Pflicht'],
    correctAnswer: 'Eine Unternehmensstrategie zur Ausrichtung auf Kundenbeziehungen',
    explanation: 'CRM = Strategie. Software ist nur das Werkzeug. Häufigster IHK-Fehler.',
    difficulty: 'easy',
    category: 'CRM'
  },
  {
    id: 'lf5-q3',
    question: 'Wie viele Stellen hat eine deutsche IBAN?',
    type: 'multiple-choice',
    options: ['18 Stellen', '20 Stellen', '22 Stellen', '24 Stellen'],
    correctAnswer: '22 Stellen',
    explanation: 'DE (2) + Prüfziffer (2) + BLZ (8) + Kontonummer (10) = 22 Stellen.',
    difficulty: 'easy',
    category: 'Zahlungsverkehr'
  },
  {
    id: 'lf5-q4',
    question: 'Was ist der Unterschied zwischen Beschwerde und Reklamation?',
    type: 'multiple-choice',
    options: ['Beschwerde hat Rechtspflichten, Reklamation nicht', 'Beide haben Rechtspflichten', 'Reklamation hat Rechtspflichten, Beschwerde nicht', 'Es gibt keinen Unterschied'],
    correctAnswer: 'Reklamation hat Rechtspflichten, Beschwerde nicht',
    explanation: 'Reklamation = konkreter Mangel → Rechtspflichten (Nachbesserung etc.). Beschwerde = Unzufriedenheit ohne Rechtspflicht.',
    difficulty: 'easy',
    category: 'Beschwerden'
  },
  {
    id: 'lf5-q5',
    question: 'Wie lautet der Servicelevel-Branchenstandard?',
    type: 'multiple-choice',
    options: ['70/30', '80/20', '90/10', '60/40'],
    correctAnswer: '80/20',
    explanation: '80/20 = 80% der Anrufe werden innerhalb von 20 Sekunden angenommen. Branchenstandard.',
    difficulty: 'easy',
    category: 'Kennzahlen'
  },
  {
    id: 'lf5-q6',
    question: 'Welche Widerspruchsfrist gilt bei der SEPA-Basislastschrift?',
    type: 'multiple-choice',
    options: ['4 Wochen', '6 Wochen', '8 Wochen', '13 Monate'],
    correctAnswer: '8 Wochen',
    explanation: '8 Wochen ab Kontobelastung. Bei fehlendem Mandat: 13 Monate.',
    difficulty: 'easy',
    category: 'Zahlungsverkehr'
  },
  {
    id: 'lf5-q7',
    question: 'Welche der folgenden ist KEINE offizielle CRM-Aufgabe?',
    type: 'multiple-choice',
    options: ['Kundenpflege', 'Kundengewinnung', 'Kundenrückgewinnung', 'Kundenbesteuerung'],
    correctAnswer: 'Kundenbesteuerung',
    explanation: 'Die 3 CRM-Aufgaben: Kundenpflege, Kundengewinnung, Kundenrückgewinnung.',
    difficulty: 'easy',
    category: 'CRM'
  },
  {
    id: 'lf5-q8',
    question: 'Was ist FCR?',
    type: 'multiple-choice',
    options: ['Full Customer Revenue', 'First Call Resolution', 'Final Contact Rate', 'Fast Customer Response'],
    correctAnswer: 'First Call Resolution',
    explanation: 'FCR = First Call Resolution = Problem beim ersten Kontakt gelöst. Ziel: > 70-80%.',
    difficulty: 'easy',
    category: 'Kennzahlen'
  },
  {
    id: 'lf5-q9',
    question: 'Welcher Grundsatz ist KEIN offizieller der 5 Grundsätze der Datenerfassung?',
    type: 'multiple-choice',
    options: ['Richtigkeit', 'Zeitstabilität', 'Aktualität', 'Konsistenz'],
    correctAnswer: 'Aktualität',
    explanation: 'Die 5 Grundsätze: Richtigkeit, Vollständigkeit, Redundanzvermeidung, Zeitstabilität, Konsistenz. Aktualität ist kein eigener Grundsatz.',
    difficulty: 'medium',
    category: 'Datenmanagement'
  },
  {
    id: 'lf5-q10',
    question: 'Was ist eine Dublette?',
    type: 'multiple-choice',
    options: ['Ein fehlerhafter Datensatz', 'Ein doppelt vorhandener Datensatz', 'Ein veralteter Datensatz', 'Ein Kundenkontakt ohne Notiz'],
    correctAnswer: 'Ein doppelt vorhandener Datensatz',
    explanation: 'Dublette = Datensatz, der mehrfach in der Datenbank vorhanden ist. Folgen: Mehrfachversand, Imageverlust.',
    difficulty: 'easy',
    category: 'Datenmanagement'
  },
  {
    id: 'lf5-q11',
    question: 'In welcher Reihenfolge verlaufen die Phasen des Kundenlebenszyklus?',
    type: 'multiple-choice',
    options: ['Angebot, Akquisition, Kauf, After-Sales, Betreuung, Optimierung', 'Akquisition, Angebot, Kauf, After-Sales, Betreuung, Optimierung', 'Kauf, Angebot, Akquisition, After-Sales, Optimierung, Betreuung', 'Akquisition, Kauf, Angebot, Betreuung, After-Sales, Optimierung'],
    correctAnswer: 'Akquisition, Angebot, Kauf, After-Sales, Betreuung, Optimierung',
    explanation: 'Korrekt: Akquisition → Angebot → Kauf → After-Sales → Betreuung → Optimierung.',
    difficulty: 'medium',
    category: 'Kundenbindung'
  },
  {
    id: 'lf5-q12',
    question: 'Was ist AHT?',
    type: 'multiple-choice',
    options: ['Average Human Time', 'Average Handling Time', 'After-Hours Transfer', 'Automatic Hold Timer'],
    correctAnswer: 'Average Handling Time',
    explanation: 'AHT = Average Handling Time = Talk + Hold + ACW.',
    difficulty: 'easy',
    category: 'Kennzahlen'
  },
  {
    id: 'lf5-q13',
    question: 'Der Fragetrichter funktioniert...',
    type: 'multiple-choice',
    options: ['Von geschlossen zu offen', 'Immer mit alternativen Fragen', 'Von offen zu geschlossen', 'Nur mit Gegenfragen'],
    correctAnswer: 'Von offen zu geschlossen',
    explanation: 'Erst offene Fragen (breite Information), dann vertiefend, dann geschlossen (Absicherung).',
    difficulty: 'easy',
    category: 'Gesprächsführung'
  },
  {
    id: 'lf5-q14',
    question: 'Welche CRM-Säule beinhaltet Data-Warehouse und CRM-Software?',
    type: 'multiple-choice',
    options: ['Organisation', 'Personal', 'Technik', 'Strategie'],
    correctAnswer: 'Technik',
    explanation: 'Technik-Säule: Software, Datenbanken, Data-Warehouse, Kommunikationsanlagen.',
    difficulty: 'easy',
    category: 'CRM'
  },
  {
    id: 'lf5-q15',
    question: 'Was unterscheidet After-Sales von Betreuung im Kundenlebenszyklus?',
    type: 'multiple-choice',
    options: ['After-Sales ist langfristig, Betreuung kurzfristig', 'After-Sales ist kurzfristig direkt nach dem Kauf, Betreuung ist langfristig', 'Kein Unterschied', 'After-Sales nur bei B2B'],
    correctAnswer: 'After-Sales ist kurzfristig direkt nach dem Kauf, Betreuung ist langfristig',
    explanation: 'After-Sales = kurzfristig (Lieferung, Einführung). Betreuung = langfristige Loyalitätspflege.',
    difficulty: 'medium',
    category: 'Kundenbindung'
  },
  {
    id: 'lf5-q16',
    question: 'In welchem Schritt des Beschwerdegesprächs wird emotional begleitet?',
    type: 'multiple-choice',
    options: ['Schritt 1: Einsteigen', 'Schritt 2: Sachlich klären', 'Schritt 3: Emotional begleiten', 'Schritt 4: Lösung anbieten'],
    correctAnswer: 'Schritt 3: Emotional begleiten',
    explanation: 'ESEL: Einsteigen → Sachlich → Emotional → Lösung → Abschluss.',
    difficulty: 'easy',
    category: 'Beschwerden'
  },
  {
    id: 'lf5-q17',
    question: 'Woran ist Kundenzufriedenheit orientiert?',
    type: 'multiple-choice',
    options: ['Zukunft (Wiederkaufabsicht)', 'Vergangenheit (bisherige Erfahrungen)', 'Aktueller Umsatz', 'Marktanteilen'],
    correctAnswer: 'Vergangenheit (bisherige Erfahrungen)',
    explanation: 'Zufriedenheit = vergangenheitsorientiert. Loyalität = zukunftsorientiert.',
    difficulty: 'medium',
    category: 'Kundenbindung'
  },
  {
    id: 'lf5-q18',
    question: 'Was ist ein Data-Warehouse?',
    type: 'multiple-choice',
    options: ['Echtzeit-Datenbank für aktuelle Transaktionen', 'Externe Sicherungskopie', 'Zentrale Datenbank für Analysen mit historischen Daten aus allen Bereichen', 'CRM-Software-Modul'],
    correctAnswer: 'Zentrale Datenbank für Analysen mit historischen Daten aus allen Bereichen',
    explanation: 'Data-Warehouse: zentrale Analysedatenbank, bündelt alle Unternehmensdaten, historische Daten.',
    difficulty: 'medium',
    category: 'CRM'
  },
  {
    id: 'lf5-q19',
    question: 'Welcher Kundenwert-Faktor beschreibt Weiterempfehlungen?',
    type: 'multiple-choice',
    options: ['Umsatz', 'Ertrag', 'Potenzial', 'Referenzwert'],
    correctAnswer: 'Referenzwert',
    explanation: 'Referenzwert = Wert durch Weiterempfehlungen und Netzwerkeffekte.',
    difficulty: 'medium',
    category: 'Kundenbindung'
  },
  {
    id: 'lf5-q20',
    question: 'Was ist ein Fehler bei der Zeitstabilität?',
    type: 'multiple-choice',
    options: ['Geburtsdatum statt Alter erfassen', 'Alter statt Geburtsdatum erfassen', 'Postfach statt temporäre Adresse erfassen', 'Alle Felder pflichtfüllen'],
    correctAnswer: 'Alter statt Geburtsdatum erfassen',
    explanation: 'Alter ändert sich jährlich → nicht zeitstabil. Geburtsdatum ist zeitstabil.',
    difficulty: 'medium',
    category: 'Datenmanagement'
  },
  {
    id: 'lf5-q21',
    question: 'Was ist Winback?',
    type: 'multiple-choice',
    options: ['Kundenkontakt nach Beschwerde', 'Rückgewinnung verlorener Kunden', 'Halten von kündigungswilligen Kunden', 'Bonus für treue Kunden'],
    correctAnswer: 'Rückgewinnung verlorener Kunden',
    explanation: 'Winback = Rückgewinnung bereits abgewanderter Kunden. Haltegespräch = Prävention.',
    difficulty: 'easy',
    category: 'Kundenbindung'
  },
  {
    id: 'lf5-q22',
    question: 'Warum ist Neukundengewinnung teurer als Winback?',
    type: 'multiple-choice',
    options: ['Neukunden brauchen mehr Rabatte', 'Verlorene Kunden kennen Unternehmen, Produkte, Prozesse bereits', 'Neukunden zahlen schlechter', 'Es gibt keine Preisdifferenz'],
    correctAnswer: 'Verlorene Kunden kennen Unternehmen, Produkte, Prozesse bereits',
    explanation: 'Rückkehrer kennen das Unternehmen → weniger Aufklärungsaufwand, schnellere Entscheidung.',
    difficulty: 'medium',
    category: 'Kundenbindung'
  },
  {
    id: 'lf5-q23',
    question: 'Was ist Kulanz?',
    type: 'multiple-choice',
    options: ['Rechtlicher Anspruch des Kunden bei Mängeln', 'Freiwilliges Entgegenkommen ohne Rechtspflicht', 'Pflichtleistung bei Reklamation', 'Entschädigung nach Gerichtsurteil'],
    correctAnswer: 'Freiwilliges Entgegenkommen ohne Rechtspflicht',
    explanation: 'Kulanz = freiwillig, ohne Rechtspflicht. Dient Kundenbindung und Imagepflege.',
    difficulty: 'easy',
    category: 'Beschwerden'
  },
  {
    id: 'lf5-q24',
    question: 'Welche Aussage über FCR ist FALSCH?',
    type: 'multiple-choice',
    options: ['FCR steht für First Call Resolution', 'Zielwert liegt bei über 70-80%', 'FCR und Kundenzufriedenheit korrelieren positiv', 'Ein zweiter Anruf zum selben Thema zählt noch als FCR'],
    correctAnswer: 'Ein zweiter Anruf zum selben Thema zählt noch als FCR',
    explanation: 'FALSCH: Zweiter Anruf bedeutet, dass FCR NICHT erfüllt wurde. FCR = Lösung beim ERSTEN Kontakt.',
    difficulty: 'hard',
    category: 'Kennzahlen'
  },
  {
    id: 'lf5-q25',
    question: 'Die SEPA-Firmenlastschrift gilt für...',
    type: 'multiple-choice',
    options: ['Verbraucher mit 8 Wochen Widerspruchsrecht', 'Nur B2B ohne Widerspruchsrecht', 'Nur öffentliche Auftraggeber', 'Verbraucher ohne Widerspruchsrecht'],
    correctAnswer: 'Nur B2B ohne Widerspruchsrecht',
    explanation: 'Firmenlastschrift: Nur Business-to-Business. Kein Widerspruchsrecht.',
    difficulty: 'hard',
    category: 'Zahlungsverkehr'
  },
  {
    id: 'lf5-q26',
    question: 'Wer legt bei einem Kundengespräch zuerst auf?',
    type: 'multiple-choice',
    options: ['Der Mitarbeiter', 'Der Teamleiter entscheidet', 'Der Kunde', 'Gleichzeitig'],
    correctAnswer: 'Der Kunde',
    explanation: 'Immer der Kunde legt zuerst auf. Grundregel der professionellen Gesprächsführung.',
    difficulty: 'easy',
    category: 'Gesprächsführung'
  },
  {
    id: 'lf5-q27',
    question: 'Welcher Schritt kommt im Beschwerdegespräch ZULETZT?',
    type: 'multiple-choice',
    options: ['Emotional begleiten', 'Sachlich klären', 'Lösung anbieten', 'Abschluss'],
    correctAnswer: 'Abschluss',
    explanation: 'ESEL: Einsteigen → Sachlich → Emotional → Lösung → Abschluss. Abschluss ist Schritt 5.',
    difficulty: 'easy',
    category: 'Beschwerden'
  },
  {
    id: 'lf5-q28',
    question: 'Was beschreibt der Ertrag im Kundenwert?',
    type: 'multiple-choice',
    options: ['Der Brutto-Umsatz des Kunden', 'Umsatz minus alle anfallenden Kosten (Betreuung, Rabatte)', 'Zukünftiges Umsatzpotenzial', 'Weiterempfehlungen'],
    correctAnswer: 'Umsatz minus alle anfallenden Kosten (Betreuung, Rabatte)',
    explanation: 'Ertrag = Umsatz minus alle Kosten. Hoher Umsatz mit hohen Kosten = wenig Ertrag.',
    difficulty: 'medium',
    category: 'Kundenbindung'
  },
  {
    id: 'lf5-q29',
    question: 'Was ist KEIN Teil der AHT?',
    type: 'multiple-choice',
    options: ['Talk Time (Gesprächszeit)', 'Hold Time (Wartezeit während Gespräch)', 'Pausenzeit des Mitarbeiters', 'ACW (Nachbearbeitung)'],
    correctAnswer: 'Pausenzeit des Mitarbeiters',
    explanation: 'AHT = Talk + Hold + ACW. Pausenzeiten außerhalb des Gesprächs sind NICHT Teil der AHT.',
    difficulty: 'medium',
    category: 'Kennzahlen'
  },
  {
    id: 'lf5-q30',
    question: 'Welche Aussage über Data-Mining ist KORREKT?',
    type: 'multiple-choice',
    options: ['Ersetzt das Data-Warehouse', 'Ist ein Echtzeit-Dateneingabesystem', 'Erkennt Muster in großen Datenmengen', 'Ist nur für externe Dienstleister'],
    correctAnswer: 'Erkennt Muster in großen Datenmengen',
    explanation: 'Data-Mining = Mustererkennung. Nutzt das Data-Warehouse als Datenquelle.',
    difficulty: 'medium',
    category: 'CRM'
  },
  {
    id: 'lf5-q31',
    question: 'Was ist Legitimationsprüfung im Call Center?',
    type: 'multiple-choice',
    options: ['Prüfung der fachlichen Kompetenz des Mitarbeiters', 'Prüfung der Identität des Anrufers vor Datenweitergabe', 'Prüfung der DSGVO-Konformität', 'Qualitätskontrolle des Gesprächs'],
    correctAnswer: 'Prüfung der Identität des Anrufers vor Datenweitergabe',
    explanation: 'Legitimation = Identitätsprüfung. Muss VOR jeder Datenweitergabe erfolgen (DSGVO).',
    difficulty: 'easy',
    category: 'Gesprächsführung'
  },
  {
    id: 'lf5-q32',
    question: 'Welche Aussage zu Zufriedenheit vs. Loyalität ist KORREKT?',
    type: 'multiple-choice',
    options: ['Zufriedene Kunden sind immer loyal', 'Loyalität ist vergangenheitsorientiert', 'Zufriedenheit ist notwendig aber nicht hinreichend für Loyalität', 'Loyalität ist billiger als Zufriedenheit zu erzeugen'],
    correctAnswer: 'Zufriedenheit ist notwendig aber nicht hinreichend für Loyalität',
    explanation: 'Zufriedenheit ist Voraussetzung, aber nicht ausreichend. Loyalität braucht emotionale Bindung.',
    difficulty: 'hard',
    category: 'Kundenbindung'
  },
  {
    id: 'lf5-q33',
    question: 'Was sind Lost Calls?',
    type: 'multiple-choice',
    options: ['Anrufe mit falscher Weiterleitung', 'Anrufe die abgebrochen werden bevor ein Mitarbeiter abnimmt', 'Anrufe außerhalb der Betriebszeiten', 'Nicht protokollierte Gespräche'],
    correctAnswer: 'Anrufe die abgebrochen werden bevor ein Mitarbeiter abnimmt',
    explanation: 'Lost Calls = Anrufer legt auf, bevor abgenommen wird. Hohe Quote = Erreichbarkeitsproblem.',
    difficulty: 'easy',
    category: 'Kennzahlen'
  },
  {
    id: 'lf5-q34',
    question: 'Was ist der Informationswert eines Kunden?',
    type: 'multiple-choice',
    options: ['Umsatz durch Online-Informationen', 'Wert seines Feedbacks für Produktentwicklung', 'Datenschutzrechtlicher Wert seiner Daten', 'Wert seiner Suchhistorie'],
    correctAnswer: 'Wert seines Feedbacks für Produktentwicklung',
    explanation: 'Informationswert = Qualität des Kundenfeedbacks für Verbesserungen und Marktforschung.',
    difficulty: 'medium',
    category: 'Kundenbindung'
  },
  {
    id: 'lf5-q35',
    question: 'Welche Aussage zur SEPA-Überweisung ist FALSCH?',
    type: 'multiple-choice',
    options: ['Wird aktiv vom Kunden ausgeführt', 'Ausführung max. 1 Bankarbeitstag', 'Benötigt ein Mandat wie die Lastschrift', 'Erfordert IBAN des Empfängers'],
    correctAnswer: 'Benötigt ein Mandat wie die Lastschrift',
    explanation: 'FALSCH: Überweisung braucht KEIN Mandat. Nur die Lastschrift benötigt ein Lastschriftmandat.',
    difficulty: 'hard',
    category: 'Zahlungsverkehr'
  },
  {
    id: 'lf5-q36',
    question: 'Was sind die 3 Säulen des CRM?',
    type: 'multiple-choice',
    options: ['Kunden, Prozesse, Daten', 'Technik, Organisation, Personal', 'Inbound, Outbound, Digital', 'Marketing, Vertrieb, Service'],
    correctAnswer: 'Technik, Organisation, Personal',
    explanation: 'Die 3 CRM-Säulen: T-O-P → Technik, Organisation, Personal.',
    difficulty: 'easy',
    category: 'CRM'
  },
  {
    id: 'lf5-q37',
    question: 'Welcher Fehler im Beschwerdegespräch ist besonders schwerwiegend?',
    type: 'multiple-choice',
    options: ['Zu langes Zuhören', 'Zu viele Fragen stellen', 'Lösung anbieten BEVOR emotional begleitet wurde', 'Zu freundlich sein'],
    correctAnswer: 'Lösung anbieten BEVOR emotional begleitet wurde',
    explanation: 'Lösung vor emotionaler Begleitung wirkt kalt und wird oft abgelehnt.',
    difficulty: 'medium',
    category: 'Beschwerden'
  },
  {
    id: 'lf5-q38',
    question: 'Was beschreibt Kundenloyalität?',
    type: 'multiple-choice',
    options: ['Vergangenheitsorientierte Bewertung bisheriger Erfahrungen', 'Zukunftsorientierte Wiederkaufabsicht und emotionale Bindung', 'Aktuelle Transaktionshäufigkeit', 'Zahlungsbereitschaft'],
    correctAnswer: 'Zukunftsorientierte Wiederkaufabsicht und emotionale Bindung',
    explanation: 'Loyalität = zukunftsorientiert. Beschreibt Absicht, wiederzukommen und weiterzuempfehlen.',
    difficulty: 'medium',
    category: 'Kundenbindung'
  },
  {
    id: 'lf5-q39',
    question: 'Warum dürfen Social-Media-Kommentare bei einem Shitstorm NICHT gelöscht werden?',
    type: 'multiple-choice',
    options: ['Wegen DSGVO', 'Löschen verschlimmert die Reaktion (Vertuschungsvorwurf)', 'Es ist technisch unmöglich', 'Weil Kommentare Eigentum der Nutzer sind'],
    correctAnswer: 'Löschen verschlimmert die Reaktion (Vertuschungsvorwurf)',
    explanation: 'Löschen → Vertuschungsvorwurf → Eskalation. Grundregel: Nie löschen, nie ignorieren, nie aggressiv.',
    difficulty: 'medium',
    category: 'Kundenbindung'
  },
  {
    id: 'lf5-q40',
    question: 'Was berechnet die Stornoquote?',
    type: 'multiple-choice',
    options: ['Anteil der Rabatte am Umsatz', 'Anteil der stornierten Abschlüsse an Gesamtabschlüssen', 'Anteil verlorener Kunden', 'Fehlerrate bei Dateneingabe'],
    correctAnswer: 'Anteil der stornierten Abschlüsse an Gesamtabschlüssen',
    explanation: 'Stornoquote = (Stornierungen / Abschlüsse) × 100. Hoch = Beratungsfehler oder Druckverkauf.',
    difficulty: 'easy',
    category: 'Kennzahlen'
  },
  {
    id: 'lf5-q41',
    question: 'Wie viele Phasen hat der Kundenlebenszyklus?',
    type: 'multiple-choice',
    options: ['4 Phasen', '5 Phasen', '6 Phasen', '8 Phasen'],
    correctAnswer: '6 Phasen',
    explanation: '6 Phasen: Akquisition, Angebot, Kauf, After-Sales, Betreuung, Optimierung.',
    difficulty: 'easy',
    category: 'Kundenbindung'
  },
  {
    id: 'lf5-q42',
    question: 'Was ist Multitasking neurobiologisch betrachtet?',
    type: 'multiple-choice',
    options: ['Echte parallele Verarbeitung mehrerer Aufgaben', 'Schnelles Wechseln zwischen Aufgaben (Task-Switching)', 'Unbewusste Automatisierung von Routinen', 'Ausschließlich möglich mit Training'],
    correctAnswer: 'Schnelles Wechseln zwischen Aufgaben (Task-Switching)',
    explanation: 'Echtes Multitasking ist neurobiologisch unmöglich. Gehirn macht Task-Switching → Fehler steigen.',
    difficulty: 'medium',
    category: 'Datenmanagement'
  },
  {
    id: 'lf5-q43',
    question: 'Was ist der korrekte Aufbau der deutschen IBAN?',
    type: 'multiple-choice',
    options: ['DE + 3 Prüfziffern + BLZ + Kontonummer = 22 Stellen', 'DE + 2 Prüfziffern + BLZ (8) + Kontonummer (10) = 22 Stellen', 'DE + 2 Prüfziffern + BIC + Kontonummer = 20 Stellen', 'DE + BLZ (8) + Kontonummer (12) = 22 Stellen'],
    correctAnswer: 'DE + 2 Prüfziffern + BLZ (8) + Kontonummer (10) = 22 Stellen',
    explanation: 'DE(2) + Prüfziffer(2) + BLZ(8) + Kontonummer(10) = 22 Stellen.',
    difficulty: 'hard',
    category: 'Zahlungsverkehr'
  },
  {
    id: 'lf5-q44',
    question: 'Welche Aussage zu den 5 Grundsätzen ist FALSCH?',
    type: 'multiple-choice',
    options: ['Richtigkeit: Daten müssen sachlich korrekt sein', 'Vollständigkeit: Alle Felder müssen befüllt sein', 'Redundanzvermeidung: Keine Dubletten', 'Aktualität: Daten täglich prüfen'],
    correctAnswer: 'Aktualität: Daten täglich prüfen',
    explanation: 'FALSCH: Aktualität ist kein Grundsatz. Der vierte Grundsatz heißt ZEITSTABILITÄT.',
    difficulty: 'hard',
    category: 'Datenmanagement'
  },
  {
    id: 'lf5-q45',
    question: 'Was ist der Referenzwert eines Kunden?',
    type: 'multiple-choice',
    options: ['Sein aktueller Umsatz', 'Seine Kreditwürdigkeit', 'Sein Wert durch Weiterempfehlungen/Netzwerkeffekte', 'Sein Kundenwert in Referenzprojekten'],
    correctAnswer: 'Sein Wert durch Weiterempfehlungen/Netzwerkeffekte',
    explanation: 'Referenzwert = Wert durch Weiterempfehlungen.',
    difficulty: 'medium',
    category: 'Kundenbindung'
  },
  {
    id: 'lf5-q46',
    question: 'Welche Schritte beinhaltet ACW (After-Call-Work)?',
    type: 'multiple-choice',
    options: ['Pausenzeit und Schulung', 'Dokumentation, Weiterleitung, CRM-Eintrag, Follow-up', 'Nur Gesprächsprotokoll', 'Qualitätskontrolle durch Teamleiter'],
    correctAnswer: 'Dokumentation, Weiterleitung, CRM-Eintrag, Follow-up',
    explanation: 'ACW = alle Tätigkeiten nach dem Gespräch: Dokumentation, Weiterleitung, CRM-Pflege, Termine.',
    difficulty: 'medium',
    category: 'Kennzahlen'
  },
  {
    id: 'lf5-q47',
    question: 'Was ist der Unterschied Haltegespräch vs. Winback?',
    type: 'multiple-choice',
    options: ['Kein Unterschied', 'Haltegespräch = Kunden halten BEVOR er kündigt; Winback = Kunden zurückgewinnen NACHDEM er gegangen ist', 'Winback = intern, Haltegespräch = extern', 'Haltegespräch nur für B2B'],
    correctAnswer: 'Haltegespräch = Kunden halten BEVOR er kündigt; Winback = Kunden zurückgewinnen NACHDEM er gegangen ist',
    explanation: 'Haltegespräch = Prävention. Winback = Reaktion (bereits abgewanderten Kunden zurückgewinnen).',
    difficulty: 'easy',
    category: 'Kundenbindung'
  },
  {
    id: 'lf5-q48',
    question: 'Welche Aussage zu Kulanz ist KORREKT?',
    type: 'multiple-choice',
    options: ['Kulanz ist eine gesetzliche Pflicht bei Mängeln', 'Kulanz erfordert Kundenzustimmung', 'Kulanz ist freiwillig und braucht interne Genehmigung', 'Kulanz ist immer unbegrenzt gewährbar'],
    correctAnswer: 'Kulanz ist freiwillig und braucht interne Genehmigung',
    explanation: 'Kulanz = freiwillig, ohne Rechtspflicht, braucht Genehmigung (Kompetenzrahmen).',
    difficulty: 'medium',
    category: 'Beschwerden'
  },
  {
    id: 'lf5-q49',
    question: 'Was ist der Informationsfluss im Data-Warehouse/Data-Mining-Prozess?',
    type: 'multiple-choice',
    options: ['Data-Mining → Data-Warehouse → Kampagne', 'Kampagne → Data-Mining → Data-Warehouse', 'Data-Warehouse → Data-Mining → Kampagnenmanagement', 'Data-Warehouse = Data-Mining'],
    correctAnswer: 'Data-Warehouse → Data-Mining → Kampagnenmanagement',
    explanation: 'Warehouse liefert Daten → Mining analysiert → Kampagnenmanagement nutzt Ergebnisse.',
    difficulty: 'medium',
    category: 'CRM'
  },
  {
    id: 'lf5-q50',
    question: 'Was ist die Ausschöpfungsquote im Outbound?',
    type: 'multiple-choice',
    options: ['Anteil erfolgreicher Abschlüsse', 'Anteil kontaktierter an Gesamtadressen', 'Anteil verlorener Adressen', 'Anteil stornierter Aufträge'],
    correctAnswer: 'Anteil kontaktierter an Gesamtadressen',
    explanation: 'Ausschöpfungsquote = (Kontaktiert / Gesamt) × 100.',
    difficulty: 'medium',
    category: 'Kennzahlen'
  },
  {
    id: 'lf5-q51',
    question: 'Welche Aussage zur Legitimationsprüfung ist KORREKT?',
    type: 'multiple-choice',
    options: ['Sie kann nach der Datenweitergabe erfolgen', 'Sie ist optional bei bekannten Kunden', 'Sie muss VOR jeder Datenweitergabe erfolgen', 'Sie gilt nur für Neukunden'],
    correctAnswer: 'Sie muss VOR jeder Datenweitergabe erfolgen',
    explanation: 'Legitimation = Pflicht vor Datenweitergabe. Auch bei bekannten Kunden (DSGVO).',
    difficulty: 'easy',
    category: 'Gesprächsführung'
  },
  {
    id: 'lf5-q52',
    question: 'Was ist beim Shitstorm-Management der erste Schritt?',
    type: 'multiple-choice',
    options: ['Sofort Lösungsangebot posten', 'Monitoring (frühzeitige Erkennung)', 'Rechtliche Prüfung', 'Mitarbeiter informieren'],
    correctAnswer: 'Monitoring (frühzeitige Erkennung)',
    explanation: 'Schritt 1 = Monitoring. Dann Analyse, Reaktion, Lösung, Nachverfolgung.',
    difficulty: 'medium',
    category: 'Kundenbindung'
  },
  {
    id: 'lf5-q53',
    question: 'Was ist KEIN Kundenwert-Faktor?',
    type: 'multiple-choice',
    options: ['Umsatz', 'Ertrag', 'Potenzial', 'Zahlungshistorie'],
    correctAnswer: 'Zahlungshistorie',
    explanation: 'Die 5 Faktoren: Umsatz, Ertrag, Potenzial, Referenzwert, Informationswert.',
    difficulty: 'hard',
    category: 'Kundenbindung'
  },
  {
    id: 'lf5-q54',
    question: 'Was ist die Erfolgsquote im Outbound?',
    type: 'multiple-choice',
    options: ['(Abschlüsse / Kontakte) × 100', '(Kontakte / Adressen) × 100', '(Stornos / Abschlüsse) × 100', '(Anrufe / Stunden) × 100'],
    correctAnswer: '(Abschlüsse / Kontakte) × 100',
    explanation: 'Erfolgsquote = Conversion Rate im Outbound.',
    difficulty: 'medium',
    category: 'Kennzahlen'
  },
  {
    id: 'lf5-q55',
    question: 'Was beschreibt die Personal-Säule im CRM?',
    type: 'multiple-choice',
    options: ['Softwareausstattung des Teams', 'Qualifikation, Kommunikationsfähigkeiten und Kundenorientierung der Mitarbeiter', 'Personalplanung und Schichtpläne', 'Gehaltsstruktur'],
    correctAnswer: 'Qualifikation, Kommunikationsfähigkeiten und Kundenorientierung der Mitarbeiter',
    explanation: 'Personal-Säule: Qualifikation, Kommunikationskompetenz, Kundenorientierung als Haltung.',
    difficulty: 'medium',
    category: 'CRM'
  },
  {
    id: 'lf5-q56',
    question: 'Widerspruchsfrist bei fehlendem SEPA-Mandat?',
    type: 'multiple-choice',
    options: ['4 Wochen', '8 Wochen', '6 Monate', '13 Monate'],
    correctAnswer: '13 Monate',
    explanation: 'Ohne Mandat: 13 Monate (statt 8 Wochen mit Mandat).',
    difficulty: 'hard',
    category: 'Zahlungsverkehr'
  },
  {
    id: 'lf5-q57',
    question: 'Was ist der Fragetrichter und wo beginnt er?',
    type: 'multiple-choice',
    options: ['Beginnt mit geschlossenen Fragen', 'Beginnt mit offenen Fragen und endet bei geschlossenen', 'Besteht nur aus Alternativfragen', 'Wird nach dem Gespräch eingesetzt'],
    correctAnswer: 'Beginnt mit offenen Fragen und endet bei geschlossenen',
    explanation: 'Trichter: oben weit (offen), unten eng (geschlossen zur Absicherung).',
    difficulty: 'easy',
    category: 'Gesprächsführung'
  },
  {
    id: 'lf5-q58',
    question: 'Welche Aussage zu CRM und Software ist FALSCH?',
    type: 'multiple-choice',
    options: ['CRM ist eine Strategie', 'Software ist nur das Werkzeug der CRM-Strategie', 'CRM funktioniert nur mit CRM-Software', 'CRM umfasst Technik, Organisation und Personal'],
    correctAnswer: 'CRM funktioniert nur mit CRM-Software',
    explanation: 'FALSCH: CRM funktioniert als Strategie auch ohne Software. Software ist Werkzeug.',
    difficulty: 'hard',
    category: 'CRM'
  },
  {
    id: 'lf5-q59',
    question: 'Was ist die Bonitätsprüfung?',
    type: 'multiple-choice',
    options: ['Überprüfung der Kundenzufriedenheit', 'Beurteilung der Kreditwürdigkeit und Zahlungsfähigkeit', 'Prüfung der Legitimation', 'Datenschutzprüfung'],
    correctAnswer: 'Beurteilung der Kreditwürdigkeit und Zahlungsfähigkeit',
    explanation: 'Bonität = Kreditwürdigkeit. Über Schufa abgefragt. Erfordert Einwilligung.',
    difficulty: 'easy',
    category: 'Zahlungsverkehr'
  },
  {
    id: 'lf5-q60',
    question: 'Welche Phase folgt direkt nach dem Kauf?',
    type: 'multiple-choice',
    options: ['Optimierung', 'Betreuung', 'After-Sales', 'Angebot'],
    correctAnswer: 'After-Sales',
    explanation: 'Nach Kauf: After-Sales (kurzfristig) → dann Betreuung (langfristig).',
    difficulty: 'medium',
    category: 'Kundenbindung'
  },
  {
    id: 'lf5-q61',
    question: 'Was bedeutet Redundanzvermeidung?',
    type: 'multiple-choice',
    options: ['Datensicherung auf mehreren Servern', 'Vermeidung doppelter Datensätze (Dubletten)', 'Tägliche Datenprüfung', 'Backup-Strategie'],
    correctAnswer: 'Vermeidung doppelter Datensätze (Dubletten)',
    explanation: 'Redundanz = Doppelt vorhanden. Redundanzvermeidung = keine Dubletten.',
    difficulty: 'easy',
    category: 'Datenmanagement'
  },
  {
    id: 'lf5-q62',
    question: 'Wann gilt der Servicelevel als erfüllt (80/20)?',
    type: 'multiple-choice',
    options: ['Wenn 80% der Kunden zufrieden sind', 'Wenn 80% der Anrufe in 20 Sek. angenommen werden', 'Wenn 20% der Anrufe in 80 Sek. bearbeitet werden', 'Wenn der AHT unter 20 Min liegt'],
    correctAnswer: 'Wenn 80% der Anrufe in 20 Sek. angenommen werden',
    explanation: 'Servicelevel 80/20 = 80% aller Anrufe innerhalb von 20 Sekunden angenommen.',
    difficulty: 'easy',
    category: 'Kennzahlen'
  },
  {
    id: 'lf5-q63',
    question: 'Was ist die Organisation-Säule im CRM?',
    type: 'multiple-choice',
    options: ['IT-Infrastruktur', 'Mitarbeiterschulungen', 'Prozesse, Abläufe, Zuständigkeiten und Schnittstellen', 'Kundendatenbanken'],
    correctAnswer: 'Prozesse, Abläufe, Zuständigkeiten und Schnittstellen',
    explanation: 'Organisation-Säule: Prozessgestaltung, Ablauforganisation, Zuständigkeiten.',
    difficulty: 'medium',
    category: 'CRM'
  },
  {
    id: 'lf5-q64',
    question: 'Was ist ein Vorteil von Winback gegenüber Neukundengewinnung?',
    type: 'multiple-choice',
    options: ['Höhere Margen', 'Geringerer Beratungsaufwand (Kunde kennt Unternehmen bereits)', 'Keine Datenschutzanforderungen', 'Kostenfreie Maßnahme'],
    correctAnswer: 'Geringerer Beratungsaufwand (Kunde kennt Unternehmen bereits)',
    explanation: 'Rückkehrer kennen Unternehmen → weniger Aufklärungsaufwand, schnellere Entscheidung.',
    difficulty: 'medium',
    category: 'Kundenbindung'
  },
  {
    id: 'lf5-q65',
    question: 'Was ist KEIN Bestandteil der Meldeformel?',
    type: 'multiple-choice',
    options: ['Begrüßung', 'Abteilungsname', 'Firmenname', 'Offene Frage'],
    correctAnswer: 'Abteilungsname',
    explanation: 'Meldeformel: Begrüßung, Firmenname, Mitarbeitername, offene Frage. Kein Abteilungsname.',
    difficulty: 'medium',
    category: 'Gesprächsführung'
  },
  {
    id: 'lf5-q66',
    question: 'Wie viele Schritte hat das Beschwerdegespräch?',
    type: 'multiple-choice',
    options: ['3 Schritte', '4 Schritte', '5 Schritte', '7 Schritte'],
    correctAnswer: '5 Schritte',
    explanation: '5 Schritte: ESEL → Einsteigen, Sachlich, Emotional, Lösung, Abschluss.',
    difficulty: 'easy',
    category: 'Beschwerden'
  },
  {
    id: 'lf5-q67',
    question: 'Was ist der Unterschied zwischen Frontoffice und Backoffice?',
    type: 'multiple-choice',
    options: ['Frontoffice ohne Kundenkontakt, Backoffice mit', 'Frontoffice mit direktem Kundenkontakt (Telefonie), Backoffice ohne (Sachbearbeitung)', 'Frontoffice nur Outbound, Backoffice nur Inbound', 'Kein relevanter Unterschied'],
    correctAnswer: 'Frontoffice mit direktem Kundenkontakt (Telefonie), Backoffice ohne (Sachbearbeitung)',
    explanation: 'Frontoffice = direkter Kundenkontakt. Backoffice = Weiterverarbeitung.',
    difficulty: 'easy',
    category: 'Gesprächsführung'
  },
  {
    id: 'lf5-q68',
    question: 'Welche Aussage zur Kundenzufriedenheit ist FALSCH?',
    type: 'multiple-choice',
    options: ['Zufriedenheit ist vergangenheitsorientiert', 'Zufriedene Kunden sind garantiert loyal', 'Zufriedenheit wird durch NPS gemessen', 'Zufriedenheit ist notwendig aber nicht hinreichend für Loyalität'],
    correctAnswer: 'Zufriedene Kunden sind garantiert loyal',
    explanation: 'FALSCH: Zufriedenheit garantiert keine Loyalität. Loyalität braucht emotionale Bindung.',
    difficulty: 'medium',
    category: 'Kundenbindung'
  },
  {
    id: 'lf5-q69',
    question: 'Was bedeutet positives Formulieren?',
    type: 'multiple-choice',
    options: ['Immer zustimmen', 'Negative Aussagen in positive umwandeln (Was ich tun kann...)', 'Schnell zur Lösung kommen', 'Alle Versprechen einhalten'],
    correctAnswer: 'Negative Aussagen in positive umwandeln (Was ich tun kann...)',
    explanation: 'Statt Das geht nicht: Was ich für Sie tun kann ist... Fokus auf Möglichkeiten.',
    difficulty: 'easy',
    category: 'Beschwerden'
  },
  {
    id: 'lf5-q70',
    question: 'Was ist KEIN Teil der SEPA-Komponenten?',
    type: 'multiple-choice',
    options: ['IBAN', 'BIC', 'SWIFT', 'Lastschriftmandat'],
    correctAnswer: 'SWIFT',
    explanation: 'SWIFT = internationales Clearing-Netzwerk, kein direkter SEPA-Bestandteil.',
    difficulty: 'hard',
    category: 'Zahlungsverkehr'
  },
  {
    id: 'lf5-q71',
    question: 'Was ist ein Haltegespräch?',
    type: 'multiple-choice',
    options: ['Gespräch zur Neukundengewinnung', 'Gespräch mit kündigungswilligem Kunden zur Kündigungsprävention', 'Beschwerdegespräch', 'Winback-Ansprache'],
    correctAnswer: 'Gespräch mit kündigungswilligem Kunden zur Kündigungsprävention',
    explanation: 'Haltegespräch = Prävention: Kunden halten, BEVOR er kündigt.',
    difficulty: 'easy',
    category: 'Kundenbindung'
  },
  {
    id: 'lf5-q72',
    question: 'Was beinhaltet die Technik-Säule von CRM?',
    type: 'multiple-choice',
    options: ['Mitarbeiterschulungen', 'Aufbauorganisation', 'Software, Datenbanken, Data-Warehouse, Kommunikationsanlagen', 'Kundensegmentierung'],
    correctAnswer: 'Software, Datenbanken, Data-Warehouse, Kommunikationsanlagen',
    explanation: 'Technik-Säule: CRM-Software, Datenbanken, Data-Warehouse, Kommunikationsanlagen.',
    difficulty: 'easy',
    category: 'CRM'
  },
  {
    id: 'lf5-q73',
    question: 'Warum ist ein Beschwerdeführer wertvoll für das Unternehmen?',
    type: 'multiple-choice',
    options: ['Weil er mehr kauft', 'Weil nur ca. 4% der Unzufriedenen sich beschweren - jede Beschwerde repräsentiert viele', 'Weil er kostenlose Werbung macht', 'Weil er Mitarbeiterfehler meldet'],
    correctAnswer: 'Weil nur ca. 4% der Unzufriedenen sich beschweren - jede Beschwerde repräsentiert viele',
    explanation: 'Nur ~4% beschweren sich aktiv. Jede Beschwerde = Signal für viele ungeäußerte Probleme.',
    difficulty: 'medium',
    category: 'Beschwerden'
  },
  {
    id: 'lf5-q74',
    question: 'Was ist der Unterschied zwischen Talk-Time und AHT?',
    type: 'multiple-choice',
    options: ['AHT ist kürzer als Talk-Time', 'Talk-Time ist die reine Gesprächszeit; AHT = Talk + Hold + ACW', 'Beide sind identisch', 'AHT ist nur die Nachbearbeitung'],
    correctAnswer: 'Talk-Time ist die reine Gesprächszeit; AHT = Talk + Hold + ACW',
    explanation: 'Talk-Time = nur Gesprächsdauer. AHT = Talk + Hold + ACW.',
    difficulty: 'medium',
    category: 'Kennzahlen'
  },
  {
    id: 'lf5-q75',
    question: 'Welche 4 Gewährleistungsansprüche hat ein Kunde bei Reklamation?',
    type: 'multiple-choice',
    options: ['Rücktritt, Minderung, Schadensersatz, Neuvertrag', 'Nachbesserung, Ersatzlieferung, Minderung, Rücktritt', 'Kulanz, Entschädigung, Ersatz, Rücktritt', 'Erstattung, Minderung, Neulieferung, Klage'],
    correctAnswer: 'Nachbesserung, Ersatzlieferung, Minderung, Rücktritt',
    explanation: 'Gewährleistungsansprüche: Nachbesserung, Ersatzlieferung, Minderung, Rücktritt.',
    difficulty: 'hard',
    category: 'Beschwerden'
  },
  {
    id: 'lf5-q76',
    question: 'Wie heißt das 5. Element der Datenerfassungs-Grundsätze?',
    type: 'multiple-choice',
    options: ['Aktualität', 'Vollständigkeit', 'Konsistenz', 'Sicherheit'],
    correctAnswer: 'Konsistenz',
    explanation: '5 Grundsätze: Richtigkeit, Vollständigkeit, Redundanzvermeidung, Zeitstabilität, KONSISTENZ.',
    difficulty: 'medium',
    category: 'Datenmanagement'
  },
  {
    id: 'lf5-q77',
    question: 'Was ist ein Abonnement als Kundenbindungsinstrument?',
    type: 'multiple-choice',
    options: ['Emotionales Instrument', 'Ökonomisches Instrument', 'Strukturelles Instrument', 'Faktisches Instrument'],
    correctAnswer: 'Strukturelles Instrument',
    explanation: 'Abonnement = strukturelle Bindung durch Vertragspflicht.',
    difficulty: 'hard',
    category: 'Kundenbindung'
  },
  {
    id: 'lf5-q78',
    question: 'Wann ist es sinnvoll, NICHT alle verlorenen Kunden zurückzugewinnen?',
    type: 'multiple-choice',
    options: ['Niemals - alle Kunden sind gleich wertvoll', 'Wenn der Kundenwert (Ertrag) negativ ist', 'Wenn der Kunde umgezogen ist', 'Nur bei Firmenkunden'],
    correctAnswer: 'Wenn der Kundenwert (Ertrag) negativ ist',
    explanation: 'Winback nur bei lohnenswerten Kunden. Negativer Wert → kein Winback.',
    difficulty: 'hard',
    category: 'Kundenbindung'
  },
  {
    id: 'lf5-q79',
    question: 'Was ist KEIN Ziel von CRM?',
    type: 'multiple-choice',
    options: ['Kundenzufriedenheit steigern', 'Kundenloyalität erhöhen', 'Unternehmenserfolg sichern', 'Konkurrenten vom Markt verdrängen'],
    correctAnswer: 'Konkurrenten vom Markt verdrängen',
    explanation: 'CRM-Ziele: Zufriedenheit → Loyalität → Unternehmenserfolg. Konkurrenz-Verdrängen ist kein CRM-Ziel.',
    difficulty: 'easy',
    category: 'CRM'
  },
  {
    id: 'lf5-q80',
    question: 'Welcher Schritt des ESEL-Modells beinhaltet die Zusammenfassung?',
    type: 'multiple-choice',
    options: ['E - Einsteigen', 'S - Sachlich klären', 'E - Emotional begleiten', 'A - Abschluss'],
    correctAnswer: 'A - Abschluss',
    explanation: 'Abschluss = Zusammenfassung, Dank, Dokumentation. Letzter Schritt.',
    difficulty: 'easy',
    category: 'Beschwerden'
  },
  {
    id: 'lf5-q81',
    question: 'Was beschreibt Kundenpotenzial als Kundenwert-Faktor?',
    type: 'multiple-choice',
    options: ['Aktueller Jahresumsatz', 'Möglicher zukünftiger Umsatz', 'Empfehlungsreichweite', 'Feedbackqualität'],
    correctAnswer: 'Möglicher zukünftiger Umsatz',
    explanation: 'Potenzial = möglicher zukünftiger Umsatz.',
    difficulty: 'medium',
    category: 'Kundenbindung'
  },
  {
    id: 'lf5-q82',
    question: 'Was ist der Unterschied zwischen BIC und IBAN?',
    type: 'multiple-choice',
    options: ['BIC identifiziert das Konto, IBAN die Bank', 'IBAN identifiziert Konto und Bank; BIC identifiziert nur die Bank', 'Beide identifizieren denselben Inhalt', 'BIC gilt nur für Überweisungen, IBAN für Lastschriften'],
    correctAnswer: 'IBAN identifiziert Konto und Bank; BIC identifiziert nur die Bank',
    explanation: 'IBAN = Kontonummer international. BIC = nur Bankkennung.',
    difficulty: 'medium',
    category: 'Zahlungsverkehr'
  },
  {
    id: 'lf5-q83',
    question: 'Was ist der primäre Nutzen der Kundenhistorie im CRM?',
    type: 'multiple-choice',
    options: ['Marketingplanung für Neukunden', 'Nahtlose Gesprächsfortführung und Personalisierung', 'Kostensenkung durch Automatisierung', 'DSGVO-Dokumentation'],
    correctAnswer: 'Nahtlose Gesprächsfortführung und Personalisierung',
    explanation: 'Kundenhistorie ermöglicht nahtloses Anknüpfen und Personalisierung.',
    difficulty: 'easy',
    category: 'CRM'
  },
  {
    id: 'lf5-q84',
    question: 'Was passiert ohne Legitimationsprüfung?',
    type: 'multiple-choice',
    options: ['Kein Problem bei bekannten Stammkunden', 'DSGVO-Verstoß, Social-Engineering-Risiko, Datenschutzverletzung', 'Nur interne Protokollpflicht verletzt', 'Nichts, es ist freiwillig'],
    correctAnswer: 'DSGVO-Verstoß, Social-Engineering-Risiko, Datenschutzverletzung',
    explanation: 'Ohne Legitimation: DSGVO-Verletzung, Social Engineering, Haftungsrisiko.',
    difficulty: 'hard',
    category: 'Gesprächsführung'
  },
  {
    id: 'lf5-q85',
    question: 'Was ist ein ökonomisches Kundenbindungsinstrument?',
    type: 'multiple-choice',
    options: ['Persönliche Ansprache', 'Community-Events', 'Bonusprogramm / Treuepunkte', 'Abonnementvertrag'],
    correctAnswer: 'Bonusprogramm / Treuepunkte',
    explanation: 'Ökonomisch = finanzielle Anreize: Bonusprogramme, Treuepunkte. Abonnement ist strukturell.',
    difficulty: 'medium',
    category: 'Kundenbindung'
  },
  {
    id: 'lf5-q86',
    question: 'Was ist KEIN Bestandteil des ACW?',
    type: 'multiple-choice',
    options: ['Dokumentation im CRM', 'Weiterleitung von Vorgängen', 'Qualitätskontrolle durch Teamleiter', 'Follow-up-Termine setzen'],
    correctAnswer: 'Qualitätskontrolle durch Teamleiter',
    explanation: 'ACW = Mitarbeiter-Aufgaben nach dem Gespräch. Qualitätskontrolle durch Teamleiter ist NICHT Teil des ACW.',
    difficulty: 'hard',
    category: 'Kennzahlen'
  },
  {
    id: 'lf5-q87',
    question: 'Was beschreibt Konsistenz als Datenerfassungsgrundsatz?',
    type: 'multiple-choice',
    options: ['Tägliche Überprüfung der Daten', 'Einheitliche Schreibweisen und Formate in der Datenbank', 'Alle Daten müssen aktuell sein', 'Keine veralteten Einträge'],
    correctAnswer: 'Einheitliche Schreibweisen und Formate in der Datenbank',
    explanation: 'Konsistenz = einheitliche Schreibweisen, Formate.',
    difficulty: 'medium',
    category: 'Datenmanagement'
  },
  {
    id: 'lf5-q88',
    question: 'Welche Phase ist mit Analyse und Upselling verbunden?',
    type: 'multiple-choice',
    options: ['Akquisition', 'After-Sales', 'Betreuung', 'Optimierung'],
    correctAnswer: 'Optimierung',
    explanation: 'Optimierung = letzte Phase: Analyse, Upselling, Verbesserungen.',
    difficulty: 'hard',
    category: 'Kundenbindung'
  },
  {
    id: 'lf5-q89',
    question: 'Was ist ein BIC?',
    type: 'multiple-choice',
    options: ['Bankinterner Code für Kontonummern', 'International Bank Identifier Code (8 oder 11 Stellen)', 'Prüfziffer der IBAN', 'Bankkodierungssystem für SEPA-Überweisungen'],
    correctAnswer: 'International Bank Identifier Code (8 oder 11 Stellen)',
    explanation: 'BIC = Bank Identifier Code. 8 oder 11 Stellen.',
    difficulty: 'easy',
    category: 'Zahlungsverkehr'
  },
  {
    id: 'lf5-q90',
    question: 'Was ist die Kernaussage von CRM bezüglich der Unternehmensbereiche?',
    type: 'multiple-choice',
    options: ['Nur Vertrieb und Marketing sind betroffen', 'ALLE Unternehmensbereiche werden auf Kundenbeziehungen ausgerichtet', 'Nur der Kundendienst ist involviert', 'CRM betrifft nur den Einkauf'],
    correctAnswer: 'ALLE Unternehmensbereiche werden auf Kundenbeziehungen ausgerichtet',
    explanation: 'CRM = ALLE Bereiche (Produktion, Logistik, Marketing, Service, HR) werden ausgerichtet.',
    difficulty: 'medium',
    category: 'CRM'
  },
  {
    id: 'lf5-q91',
    question: 'Was ist der erste Schritt im Beschwerdegespräch?',
    type: 'multiple-choice',
    options: ['Sachlich klären', 'Lösung anbieten', 'Einsteigen / Anhören', 'Emotional begleiten'],
    correctAnswer: 'Einsteigen / Anhören',
    explanation: 'ESEL: Erster Schritt = Einsteigen / vollständig anhören.',
    difficulty: 'easy',
    category: 'Beschwerden'
  },
  {
    id: 'lf5-q92',
    question: 'Welches Szenario beschreibt einen Fehler bei der Zeitstabilität?',
    type: 'multiple-choice',
    options: ['Geburtsdatum: 15.03.1990 erfassen', 'Alter: 34 erfassen (statt Geburtsdatum)', 'Straße: Hauptstraße 5 erfassen', 'PLZ: 10115 erfassen'],
    correctAnswer: 'Alter: 34 erfassen (statt Geburtsdatum)',
    explanation: 'Alter erfassen ist nicht zeitstabil (jährliche Änderung). Geburtsdatum ist zeitstabil.',
    difficulty: 'medium',
    category: 'Datenmanagement'
  },
  {
    id: 'lf5-q93',
    question: 'Wofür steht SEPA?',
    type: 'multiple-choice',
    options: ['Standard Euro Payment Architecture', 'Single European Payment Agreement', 'Single Euro Payments Area', 'Secure Electronic Payment Authorization'],
    correctAnswer: 'Single Euro Payments Area',
    explanation: 'SEPA = Single Euro Payments Area = einheitlicher Euro-Zahlungsverkehrsraum.',
    difficulty: 'easy',
    category: 'Zahlungsverkehr'
  },
  {
    id: 'lf5-q94',
    question: 'Was ist ein Qualitätsmerkmal hoher FCR?',
    type: 'multiple-choice',
    options: ['Niedrige Kundenzufriedenheit', 'Viele Folge-Anrufe zu gleichem Thema', 'Problem beim ersten Kontakt gelöst = hohe Kundenzufriedenheit', 'Kurze AHT'],
    correctAnswer: 'Problem beim ersten Kontakt gelöst = hohe Kundenzufriedenheit',
    explanation: 'Hohe FCR = Erstlösungsquote hoch = Kundenzufriedenheit hoch.',
    difficulty: 'easy',
    category: 'Kennzahlen'
  },
  {
    id: 'lf5-q95',
    question: 'Was sind die Folgen einer hohen Stornoquote?',
    type: 'multiple-choice',
    options: ['Hohe Kundenzufriedenheit, aber niedrige Umsätze', 'Hinweis auf Beratungsfehler oder Druckverkauf - Qualitätsproblem', 'Normales Marktphänomen ohne Handlungsbedarf', 'Zeichen für gute Beratungsqualität'],
    correctAnswer: 'Hinweis auf Beratungsfehler oder Druckverkauf - Qualitätsproblem',
    explanation: 'Hohe Stornoquote = Warnsignal: Fehlinformation, Druck, falsche Beratung.',
    difficulty: 'medium',
    category: 'Kennzahlen'
  },
  {
    id: 'lf5-q96',
    question: 'Was müssen alle 3 CRM-Säulen gemeinsam haben?',
    type: 'multiple-choice',
    options: ['Sie müssen isoliert voneinander arbeiten', 'Gleichgewichtige Ausrichtung auf Kundenbeziehungen', 'Alle unter Führung der IT-Abteilung', 'Nur Technik muss CRM-orientiert sein'],
    correctAnswer: 'Gleichgewichtige Ausrichtung auf Kundenbeziehungen',
    explanation: 'Alle 3 Säulen müssen gleichgewichtig und aufeinander abgestimmt sein.',
    difficulty: 'medium',
    category: 'CRM'
  },
  {
    id: 'lf5-q97',
    question: 'Welche Mindestanzahl an Stellen hat ein BIC?',
    type: 'multiple-choice',
    options: ['6 Stellen', '8 Stellen', '10 Stellen', '11 Stellen'],
    correctAnswer: '8 Stellen',
    explanation: 'BIC: 8 oder 11 Stellen. Mindestlänge: 8 Stellen.',
    difficulty: 'hard',
    category: 'Zahlungsverkehr'
  },
  {
    id: 'lf5-q98',
    question: 'Was ist KEIN Schritt der Shitstorm-Strategie?',
    type: 'multiple-choice',
    options: ['Monitoring', 'Analyse', 'Kommentare löschen', 'Nachverfolgung'],
    correctAnswer: 'Kommentare löschen',
    explanation: 'Kommentare löschen ist VERBOTEN. Die 5 Schritte: Monitoring, Analyse, Reaktion, Lösung, Nachverfolgung.',
    difficulty: 'medium',
    category: 'Kundenbindung'
  },
  {
    id: 'lf5-q99',
    question: 'Was beschreibt die Kundenhistorie NICHT?',
    type: 'multiple-choice',
    options: ['Vergangene Kundenkontakte', 'Kaufhistorie', 'Beschwerden und offene Vorgänge', 'Kreditwürdigkeit des Kunden'],
    correctAnswer: 'Kreditwürdigkeit des Kunden',
    explanation: 'Kundenhistorie = Kontakthistorie. Kreditwürdigkeit (Bonität) ist Schufa-Information.',
    difficulty: 'hard',
    category: 'CRM'
  },
  {
    id: 'lf5-q100',
    question: 'Was ist ein faktisches Kundenbindungsinstrument?',
    type: 'multiple-choice',
    options: ['Bonusprogramm', 'Persönliche Ansprache', 'Keine alternativen Anbieter (Monopol/Gewohnheit)', 'Abonnementvertrag'],
    correctAnswer: 'Keine alternativen Anbieter (Monopol/Gewohnheit)',
    explanation: 'Faktisch = unbeabsichtigte Bindung: fehlende Alternativen, Standortvorteil, Gewohnheit.',
    difficulty: 'hard',
    category: 'Kundenbindung'
  },
  {
    id: 'lf5-q101',
    question: 'Welche Aussage zur SEPA-Firmenlastschrift ist KORREKT?',
    type: 'multiple-choice',
    options: ['Hat 8 Wochen Widerspruchsrecht wie die Basislastschrift', 'Gilt nur für Verbraucher', 'Ist ausschließlich für B2B und hat KEIN Widerspruchsrecht', 'Erfordert kein Mandat'],
    correctAnswer: 'Ist ausschließlich für B2B und hat KEIN Widerspruchsrecht',
    explanation: 'Firmenlastschrift: B2B only, kein Widerspruchsrecht. Basislastschrift: 8 Wochen Widerspruch.',
    difficulty: 'hard',
    category: 'Zahlungsverkehr'
  },
  {
    id: 'lf5-q102',
    question: 'Warum sollte im Haltegespräch kein Druck ausgeübt werden?',
    type: 'multiple-choice',
    options: ['Wegen rechtlicher Einschränkungen', 'Druck erzeugt Gegendruck und beschleunigt Abwanderung', 'Es ist unwirksam bei Neukunden', 'Nur bei B2C verboten'],
    correctAnswer: 'Druck erzeugt Gegendruck und beschleunigt Abwanderung',
    explanation: 'Druck im Haltegespräch ist kontraproduktiv. Entscheidungsraum lassen.',
    difficulty: 'medium',
    category: 'Kundenbindung'
  },
  {
    id: 'lf5-q103',
    question: 'Welche Aussage zur Schufa-Abfrage ist KORREKT?',
    type: 'multiple-choice',
    options: ['Kann ohne Einwilligung abgerufen werden', 'Erfordert Einwilligung des Kunden (DSGVO)', 'Ist kostenlos für alle Unternehmen', 'Gilt nur für Privatkunden'],
    correctAnswer: 'Erfordert Einwilligung des Kunden (DSGVO)',
    explanation: 'DSGVO: Bonitätsprüfung erfordert Einwilligung oder berechtigtes Interesse als Rechtsgrundlage.',
    difficulty: 'medium',
    category: 'Zahlungsverkehr'
  },
  {
    id: 'lf5-q104',
    question: 'Was ist das übergeordnete Ziel von CRM?',
    type: 'multiple-choice',
    options: ['Kurzfristige Umsatzsteigerung', 'Aufbau und Pflege langfristiger, profitabler Kundenbeziehungen', 'Kostensenkung in der Produktion', 'Erhöhung der Mitarbeiterzufriedenheit'],
    correctAnswer: 'Aufbau und Pflege langfristiger, profitabler Kundenbeziehungen',
    explanation: 'CRM-Ziel: Langfristige, profitable Kundenbeziehungen → Zufriedenheit → Loyalität → Erfolg.',
    difficulty: 'easy',
    category: 'CRM'
  },
  {
    id: 'lf5-q105',
    question: 'Welche Eselsbrücke hilft für die 5 Grundsätze der Datenerfassung?',
    type: 'multiple-choice',
    options: ['T-O-P', 'R-V-R-Z-K', 'ESEL', 'A-A-K-A-B-O'],
    correctAnswer: 'R-V-R-Z-K',
    explanation: 'R-V-R-Z-K: Richtigkeit, Vollständigkeit, Redundanzvermeidung, Zeitstabilität, Konsistenz.',
    difficulty: 'medium',
    category: 'Datenmanagement'
  }

];
