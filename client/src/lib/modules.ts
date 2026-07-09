/* IZURE — Lernfeld Katalog */

import { topics, flashcards, quizQuestions, Topic, Flashcard, QuizQuestion } from './learningData';

export type ModuleColor = 'gold' | 'bordeaux' | 'petrol' | 'olive' | 'rust';

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
  lernfeld: 'LF1' | 'LF2' | 'LF3' | 'LF4' | 'LF5';
}

export const MODULES: ModuleSummary[] = [
  {
    id: 'LF1',
    code: 'LF-01',
    name: 'Ausbildung — Den Betrieb mitgestalten',
    short: 'Den Betrieb',
    intel: 'FUNDAMENT',
    duration: '80h · 1. Lehrjahr',
    color: 'gold',
    summary: 'Unternehmen verstehen, Rechte kennen, Arbeitsplatz gestalten. Das Fundament-Lernfeld.',
    locked: false,
    lernfeld: 'LF1',
  },
  {
    id: 'LF2',
    code: 'LF-02',
    name: 'Dienstleistungen analysieren — Dialogmarketing als Branche',
    short: 'Dienstleistungen',
    intel: 'BRANCHE',
    duration: '80h · 1. Lehrjahr',
    color: 'petrol',
    summary: 'Dialogmarketing als Querschnittsbranche. Märkte, Akteure, Wertschöpfung.',
    locked: false,
    lernfeld: 'LF2',
  },
  {
    id: 'LF3',
    code: 'LF-03',
    name: 'Mit Kunden kommunizieren',
    short: 'Kommunikation',
    intel: 'KOMPETENZ',
    duration: '80h · 1. Lehrjahr',
    color: 'bordeaux',
    summary: 'Kommunikative Kompetenz. Frageformen, Zuhörarten, Kundentypen, Gesprächsphasen.',
    locked: false,
    lernfeld: 'LF3',
  },
  {
    id: 'LF4',
    code: 'LF-04',
    name: 'TK & Datenbanken & Datensicherheit',
    short: 'TK & Daten',
    intel: 'TECHNIK',
    duration: '80h · 2. Lehrjahr',
    color: 'olive',
    summary: 'TK-Anlagen, Datenbanken, Datensicherheit, DSGVO. Die technische Infrastruktur.',
    locked: false,
    lernfeld: 'LF4',
  },
  {
    id: 'LF5',
    code: 'LF-05',
    name: 'Kundenbetreuung & Bindung',
    short: 'Bindung',
    intel: 'OPERATIV',
    duration: '80h · 2. Lehrjahr',
    color: 'rust',
    summary: 'Beratungsgespräche, CRM, Beschwerde, Winback, Kennzahlen, Zahlungsverkehr, Logistik.',
    locked: false,
    lernfeld: 'LF5',
  },
];

export function topicsForLernfeld(lf: ModuleSummary['lernfeld']): Topic[] {
  const prefix = lf.toLowerCase() + '-';
  return topics.filter((t) => t.id.startsWith(prefix));
}

export function flashcardsForLernfeld(lf: ModuleSummary['lernfeld']): Flashcard[] {
  const prefix = lf.toLowerCase() + '-';
  return flashcards.filter((c) => c.id.startsWith(prefix));
}

export function quizForLernfeld(lf: ModuleSummary['lernfeld']): QuizQuestion[] {
  const prefix = lf.toLowerCase() + '-';
  return quizQuestions.filter((q) => q.id.startsWith(prefix));
}

/* --- Simulation prototype (kept for LF5 deep dive) --- */

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

export const MODULE_LF5_BESCHWERDE: ModuleDeep = {
  id: 'LF5',
  code: 'LF-05 · Sim',
  name: 'Beschwerde — Eskalierter Bestandskunde',
  threat: 'KRITISCH',
  lernfeld: 'LF5',

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
  'LF5': MODULE_LF5_BESCHWERDE,
};
