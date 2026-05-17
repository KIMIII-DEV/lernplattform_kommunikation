/* IZURE — Dialogmarketing Module Catalog */

export type ModuleColor = 'gold' | 'bordeaux' | 'petrol' | 'olive';

export interface ModuleSummary {
  id: string;
  code: string;
  name: string;
  short: string;
  intel: string;
  duration: string;
  color: ModuleColor;
  summary: string;
  locked: boolean;
  lernfeld: 'LF4' | 'LF5';
}

export const MODULES: ModuleSummary[] = [
  {
    id: 'M-01',
    code: 'DM-101',
    name: 'Erstkontakt — Inbound Cold',
    short: 'Erstkontakt',
    intel: 'BASIS',
    duration: '22 MIN',
    color: 'gold',
    summary: 'Der unvorbereitete Anrufer. Identifikation, Bedarfserfassung, Übergabe in 90 Sekunden.',
    locked: false,
    lernfeld: 'LF4',
  },
  {
    id: 'M-02',
    code: 'DM-104',
    name: 'Einwandbehandlung — Preisresistenz',
    short: 'Einwand',
    intel: 'VERTIEFT',
    duration: '34 MIN',
    color: 'petrol',
    summary: "Wenn der Kunde 'zu teuer' sagt — vier Reaktionsklassen, drei Ankertechniken.",
    locked: false,
    lernfeld: 'LF5',
  },
  {
    id: 'M-03',
    code: 'DM-107',
    name: 'Beschwerde — Eskalierter Bestandskunde',
    short: 'Beschwerde',
    intel: 'KRITISCH',
    duration: '48 MIN',
    color: 'bordeaux',
    summary: 'Live-Simulation. Kunde droht mit Kündigung. Du hast 6 Minuten, eine Lösung und 3 Optionen.',
    locked: false,
    lernfeld: 'LF5',
  },
  {
    id: 'M-04',
    code: 'DM-112',
    name: 'Outbound — Reaktivierung',
    short: 'Outbound',
    intel: 'TAKTISCH',
    duration: '29 MIN',
    color: 'olive',
    summary: 'Kunde inaktiv 18 Monate. Pretext, Permission, Pitch.',
    locked: true,
    lernfeld: 'LF5',
  },
  {
    id: 'M-05',
    code: 'DM-118',
    name: 'Compliance — DSGVO im Dialog',
    short: 'Compliance',
    intel: 'PFLICHT',
    duration: '18 MIN',
    color: 'olive',
    summary: 'Was du sagen MUSST. Was du nicht sagen DARFST. Aufzeichnungspflicht.',
    locked: true,
    lernfeld: 'LF4',
  },
];

export interface DecisionOption {
  id: string;
  text: string;
  score: number;
  tag: string;
  correct: boolean;
  feedback: string;
}

export interface Decision {
  id: string;
  prompt: string;
  bracket: string;
  options: DecisionOption[];
}

export interface ModuleDeep {
  id: string;
  code: string;
  name: string;
  threat: string;
  lernfeld: string;
  briefing: {
    classification: string;
    issued: string;
    objective: string;
    constraints: string[];
    target: {
      name: string;
      account: string;
      arr: string;
      sentiment: string;
      history: string;
    };
    rules: string[];
  };
  scan: {
    title: string;
    phases: { name: string; de: string; body: string }[];
    intel: { label: string; value: string }[];
    fail_patterns: string[];
  };
  simulation: {
    target: string;
    duration_max: number;
    transcript_intro: { who: string; what: string }[];
    decisions: Decision[];
  };
  reflection: {
    bench: { avg_score: number; avg_duration: number; churn_save_rate: number };
    questions: string[];
  };
}

export const MODULE_M03: ModuleDeep = {
  id: 'M-03',
  code: 'DM-107',
  name: 'Beschwerde — Eskalierter Bestandskunde',
  threat: 'KRITISCH',
  lernfeld: 'Kundengespräche im Servicecenter',

  briefing: {
    classification: 'INTERN // STUFE-3',
    issued: '06:14 ZULU',
    objective: 'Kundenbeziehung stabilisieren. Kündigung verhindern. Kein Preisnachlass über 12 %.',
    constraints: [
      'Maximale Anrufdauer: 06:00',
      'Eskalation an Teamlead nur bei Stufe-4',
      'Keine Zugeständnisse außerhalb des Standardkatalogs',
      'Aufzeichnungspflicht nach §15 DSGVO aktiv',
    ],
    target: {
      name: 'Anrufer 4471 // M. KELLER',
      account: 'B2B / 14 Jahre Bestand',
      arr: '€ 18.400 / Jahr',
      sentiment: '−0.78 (sehr negativ)',
      history: '3 ungelöste Tickets // letzter Kontakt 09 TAGE',
    },
    rules: [
      'Aktives Zuhören vor Lösung',
      'Validieren, nicht entschuldigen',
      'Optionen anbieten — nicht entscheiden',
    ],
  },

  scan: {
    title: '5-Phasen-Modell',
    phases: [
      { name: 'ACKNOWLEDGE', de: 'Wahrnehmen', body: "Emotion vor Inhalt. Spiegeln. Niemals 'Beruhigen Sie sich.'" },
      { name: 'ASSESS', de: 'Erfassen', body: 'Fakten von Affekt trennen. W-Fragen. Rekonstruktion ohne Wertung.' },
      { name: 'ALIGN', de: 'Ausrichten', body: "Gemeinsames Ziel formulieren. 'Ich verstehe — Sie wollen X.'" },
      { name: 'ACT', de: 'Handeln', body: 'Optionen anbieten. Konkret, terminiert, dokumentiert.' },
      { name: 'ANCHOR', de: 'Verankern', body: 'Commitment einholen. Folgetermin. Zusammenfassung.' },
    ],
    intel: [
      { label: 'TYP', value: 'Defekt-Eskalation, 3. Stufe' },
      { label: 'TRIGGER', value: 'Lieferverzug 11 TAGE' },
      { label: 'RISK', value: 'Churn-Wahrscheinlichkeit 73 %' },
      { label: 'LEVERAGE', value: 'Servicekredit, Express, Account-Manager' },
    ],
    fail_patterns: [
      'Defensiv werden',
      'Schuldzuweisung an andere Abteilungen',
      'Sofortrabatt ohne Bedarfsanalyse',
      'Versprechen ohne Backing',
    ],
  },

  simulation: {
    target: 'M. KELLER',
    duration_max: 360,
    transcript_intro: [
      { who: 'SYS', what: 'Verbindung hergestellt. Anruf 4471. Aufzeichnung aktiv.' },
      { who: 'M.K.', what: 'Ja hallo, hören Sie — ich rede zum DRITTEN MAL mit Ihnen Leuten. Mir reicht\'s. Wir sind seit 14 Jahren Kunde und so behandelt man uns?' },
    ],
    decisions: [
      {
        id: 'D1',
        prompt: 'Erste Reaktion. Kunde ist auf Stufe 3 (laut, persönlich, droht).',
        bracket: 'PHASE 01 // ACKNOWLEDGE',
        options: [
          { id: 'A', text: '„Herr Keller, ich verstehe Ihren Ärger — und 14 Jahre Bestand verdienen mehr als das. Erzählen Sie mir, was passiert ist."', score: 3, tag: 'AKTIV ZUHÖREN', correct: true, feedback: 'Korrekt. Validierung des Status (14J), Einladung zur Rekonstruktion. Emotion gespiegelt, nicht negiert.' },
          { id: 'B', text: '„Bitte beruhigen Sie sich, Herr Keller. Ich kann Ihnen nur helfen wenn wir sachlich bleiben."', score: 0, tag: 'DEFENSIV', correct: false, feedback: "Eskaliert. 'Beruhigen Sie sich' ist eine Top-3-Trigger-Phrase. Du hast den Kunden gerade auf Stufe 4 gehoben." },
          { id: 'C', text: '„Das tut mir wirklich leid, das hätte nicht passieren dürfen. Ich gebe Ihnen 15 % Rabatt auf die nächste Rechnung."', score: 1, tag: 'ZU FRÜH', correct: false, feedback: 'Vorzeitige Konzession. Du hast (a) das Limit von 12 % überschritten und (b) gelöst bevor du das Problem kennst.' },
          { id: 'D', text: '„Ich verbinde Sie sofort mit dem Teamleiter, das ist nichts für meine Ebene."', score: 0, tag: 'ABGEBEN', correct: false, feedback: 'Eskalationsregel verletzt: Stufe-4 nur bei Drohung mit Anwalt/Behörde. Kunde fühlt sich abgeschoben.' },
        ],
      },
      {
        id: 'D2',
        prompt: 'Kunde berichtet: Lieferverzug 11 Tage, Hotline 3× nicht erreichbar, kein Rückruf. Was jetzt?',
        bracket: 'PHASE 02 // ASSESS',
        options: [
          { id: 'A', text: 'Drei W-Fragen stellen: Wann genau? Welche Tickets? Wer hat was zugesagt?', score: 3, tag: 'STRUKTURIERT', correct: true, feedback: 'Korrekt. Du trennst Fakten von Affekt und schaffst eine dokumentierbare Basis.' },
          { id: 'B', text: 'Sofort eine Lösung anbieten: Express-Versand für morgen.', score: 1, tag: 'PREMATURE FIX', correct: false, feedback: 'Du löst ein Symptom. Der Kunde ist nicht sauer wegen der Lieferung — er ist sauer weil niemand geantwortet hat.' },
          { id: 'C', text: 'Sich für die Kollegen entschuldigen die nicht zurückgerufen haben.', score: 1, tag: 'BLAME', correct: false, feedback: 'Schuldzuweisung an Kollegen. Untergräbt das Unternehmen. Kunde merkt es.' },
        ],
      },
      {
        id: 'D3',
        prompt: "Fakten erfasst. Kunde drängt: 'Was machen Sie jetzt?'",
        bracket: 'PHASE 04 // ACT',
        options: [
          { id: 'A', text: 'Drei Optionen anbieten: (1) Express + Servicekredit 8 %, (2) Vollersatz + Account-Manager, (3) Vertragspause 30 Tage.', score: 3, tag: 'OPTIONEN', correct: true, feedback: 'Korrekt. Du gibst dem Kunden Kontrolle zurück. Alle 3 Optionen liegen im Standardkatalog.' },
          { id: 'B', text: '12 % Dauerrabatt für 12 Monate anbieten.', score: 2, tag: 'AM LIMIT', correct: false, feedback: 'Im Limit, aber single-option. Du hast die Verhandlung kaputtgemacht — kein Spielraum mehr.' },
          { id: 'C', text: "Versprechen, dass es 'nie wieder vorkommt'.", score: 0, tag: 'EMPTY PROMISE', correct: false, feedback: 'Versprechen ohne Backing. In der Aufzeichnung dokumentiert. Compliance-Problem.' },
        ],
      },
      {
        id: 'D4',
        prompt: 'Kunde wählt Option 1. Wie schließt du den Anruf?',
        bracket: 'PHASE 05 // ANCHOR',
        options: [
          { id: 'A', text: "Zusammenfassung + konkreter Termin: 'Ich rufe Sie Donnerstag 10:00 an, bestätige den Versand. Mail mit allem geht bis 17:00 raus.'", score: 3, tag: 'ANCHORED', correct: true, feedback: 'Korrekt. Verbindlich, terminiert, dokumentiert. Kunde hat Kontrolle.' },
          { id: 'B', text: '„Vielen Dank für Ihr Vertrauen, einen schönen Tag noch."', score: 1, tag: 'WEAK CLOSE', correct: false, feedback: 'Floskel. Kein Anker. Kunde wird das Gefühl haben, alles war nur Gerede.' },
          { id: 'C', text: 'Sofort Mail schicken und beim nächsten Bedarf melden.', score: 1, tag: 'VAGUE', correct: false, feedback: "'Beim nächsten Bedarf' = nie. Kein verbindlicher Folgetermin." },
        ],
      },
    ],
  },

  reflection: {
    bench: { avg_score: 8.4, avg_duration: 312, churn_save_rate: 0.61 },
    questions: [
      'Welche Phase fiel dir am schwersten?',
      'Welche Trigger-Phrase hast du am ehesten gespürt?',
      'Wo hättest du mehr Zeit für ASSESS gebraucht?',
    ],
  },
};

export const MODULE_DEEP: Record<string, ModuleDeep> = {
  'M-03': MODULE_M03,
};
