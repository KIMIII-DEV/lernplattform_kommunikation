// Learning Data for Communication Exam Preparation
// ADHS-optimized: Short, clear, structured content

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

// Topics with explanations
export const topics: Topic[] = [
  {
    id: 'perception-types',
    title: '1. Die 3 Wahrnehmungstypen',
    description: 'Wie Menschen Informationen aufnehmen – und wie du dich anpasst.',
    content: `Jeder Mensch nimmt Informationen anders auf. Für die Kommunikation ist es wichtig, den Typ deines Gegenübers zu erkennen.

**Der Visuelle Typ (Das Auge)**
- Fokus: Was man sieht (Aussehen, Kleidung, Mimik, Gestik)
- Sprache: Benutzt bildhafte Wörter ("Das sieht gut aus", "Stell dir vor...")
- Tipp: Nutze visuelle Hilfsmittel (Prospekte, Diagramme) und achte auf dein äußeres Erscheinungsbild.

**Der Auditive Typ (Das Ohr)**
- Fokus: Was man hört (Stimme, Tonfall, Wortwahl, Argumentation)
- Sprache: Achtet auf den Klang ("Das klingt logisch", "Hör mir zu")
- Tipp: Argumentiere klar und klangvoll. Vermeide doppeldeutige Formulierungen.

**Der Kinästhetische Typ (Das Gefühl)**
- Fokus: Was man fühlt (Emotionen, Bauchgefühl, Haptik)
- Sprache: Spricht über Gefühle ("Das fühlt sich richtig an", "Ich habe ein gutes Gefühl")
- Tipp: Biete etwas zum Anfassen (Muster, Proben) und nutze Formulierungen, die ein Wohlgefühl vermitteln.`,
    keyPoints: [
      'Visueller Typ: Bildhafte Sprache, Prospekte, Äußeres',
      'Auditiver Typ: Klangvolle Argumentation, klare Wortwahl',
      'Kinästhetischer Typ: Gefühle, Anfassen, Wohlgefühl'
    ]
  },
  {
    id: 'active-listening',
    title: '2. Aktives Zuhören',
    description: 'Der Schlüssel zur erfolgreichen Kommunikation.',
    content: `Zuhören ist nicht gleich Zuhören. Aktives Zuhören ist die Königsdisziplin, um Vertrauen aufzubauen und Missverständnisse zu vermeiden.

**Die 3 Bestandteile des Aktiven Zuhörens:**
1. Konzentrieren: Volle Aufmerksamkeit auf den Gesprächspartner
2. Bestätigen: Aufmerksamkeitslaute geben ("Hmm", "Ja", "Ich verstehe")
3. Einladen: Zum Weitererzählen ermutigen ("Erzähl mir mehr...")

**Die 4 Arten des Zuhörens:**
- Pseudo-Zuhören: Man tut nur so, als ob man zuhört
- Aufnehmendes Zuhören: Man hört schweigend zu, ohne Feedback
- Umschreibendes Zuhören: Man wiederholt die Fakten in eigenen Worten
- Aktives Zuhören: Man spiegelt Inhalte UND Gefühle wider

**Gesprächsförderer (Merken!):**
Aktives Zuhören, Zustimmen, Nachfragen, Denkanstöße geben, Pausen

**Gesprächsstörer (Vermeiden!):**
Befehlen, Bewerten, Drohen, Vorwürfe machen, Herunterspielen`,
    keyPoints: [
      'Konzentrieren, Bestätigen, Einladen',
      'Aktives Zuhören spiegelt Inhalte UND Gefühle',
      'Förderer: Nachfragen, Pausen, Zustimmung',
      'Störer: Befehlen, Bewerten, Drohen'
    ]
  },
  {
    id: 'question-types',
    title: '3. Fragetechniken',
    description: 'Die richtigen Fragen zur richtigen Zeit.',
    content: `Fragen sind dein wichtigstes Werkzeug, um Informationen zu bekommen und Gespräche zu lenken.

**Offene Fragen (W-Fragen)**
- Ziel: Informationen sammeln, Gesprächsbeginn
- Beispiel: "Was genau benötigen Sie?"
- Nutzen: Der Gesprächspartner erzählt mehr

**Geschlossene Fragen (Ja/Nein)**
- Ziel: Entscheidung herbeiführen, Informationen bestätigen
- Beispiel: "Sind Sie damit einverstanden?"
- Nutzen: Schnelle Klärung

**Alternativfragen**
- Ziel: Wahl zwischen zwei Optionen geben
- Beispiel: "Möchten Sie Modell A oder B?"
- Nutzen: Lenkt Entscheidung in die gewünschte Richtung

**Gegenfragen**
- Ziel: Zeit gewinnen, Sachverhalt klären
- Beispiel: "Wie meinen Sie das genau?"
- Nutzen: Vermeidung von Missverständnissen

**⚠️ Suggestivfragen (VERMEIDEN!)**
- Problem: Antwort wird in den Mund gelegt
- Beispiel: "Sie wollen doch sicher das beste Produkt, oder?"
- Prüfungsrelevant: Meist negativ bewertet`,
    keyPoints: [
      'Offene Fragen: W-Fragen, Informationssammlung',
      'Geschlossene Fragen: Ja/Nein, Entscheidungen',
      'Alternativfragen: Zwei Optionen vorgeben',
      'Suggestivfragen: VERMEIDEN – manipulativ'
    ]
  },
  {
    id: 'rhetoric-argumentation',
    title: '4. Rhetorik & Argumentation',
    description: 'Überzeugen mit Struktur.',
    content: `Eine gute Argumentation ist wie ein stabiles Haus: Sie braucht ein Fundament und eine klare Struktur.

**Die 3 Säulen der Überzeugung (Aristoteles):**
- Ethos: Glaubwürdigkeit des Sprechers
- Logos: Logische, sachliche Begründung
- Pathos: Emotionale Ansprache

**Die Fünfsatz-Technik (Standard-Bauplan):**
1. Einstiegssatz/These: Die Hauptaussage
2. Argument 1: Das stärkste Argument
3. Argument 2: Ein weiteres wichtiges Argument
4. Argument 3: Ein unterstützendes Argument
5. Zielsatz/Schluss: Zusammenfassung und Aufforderung

**Die Argumentationskette:**
Behauptung (These) → Argument → Beweis → Schlussregel

**Baupläne für Argumentationen:**
- Aufsatzplan: Einleitung, Hauptteil, Schluss
- Kettenbauplan: Ein Argument baut auf dem vorherigen auf
- Dialektischer Aufbau: These → Antithese → Synthese
- Ausklammerung: Vom unwichtigen zum wichtigsten Punkt
- Vergleich: Zwei Sachverhalte gegenüberstellen`,
    keyPoints: [
      'Ethos (Glaubwürdigkeit), Logos (Logik), Pathos (Gefühl)',
      'Fünfsatz-Technik: Einstieg, 3 Argumente, Schluss',
      'Argumentationskette: These → Argument → Beweis → Schluss',
      'Dialektik: These → Antithese → Synthese'
    ]
  },
  {
    id: 'expression-sales',
    title: '5. Ausdruck & Verkaufstechniken',
    description: 'Wie du sprichst und verkaufst – mit System.',
    content: `**Sprechausdruck und Körpersprache:**
- Lautstärke: Angemessen und deutlich
- Sprechtempo: Nicht zu schnell, nicht zu langsam
- Wortmelodie (Intonation): Angenehm und variabel
- Aussprache (Artikulation): Klar und verständlich
- Mimik: Gesichtsausdruck muss zur Aussage passen
- Gestik: Handbewegungen unterstützen die Aussage

**Nutzenargumentation (Wichtig!):**
Verkaufe nicht das Merkmal, sondern den Nutzen für den Kunden:
1. Merkmal: Was das Produkt ist (z.B. "128 GB Speicher")
2. Vorteil: Was das Merkmal kann (z.B. "Viele Fotos speichern")
3. Nutzen: Was der Kunde davon hat (z.B. "Nie wieder Speichersorgen")

**Die Sandwich-Methode (Preis-Argumentation):**
Verpacke den Preis zwischen zwei starken Argumenten:
1. Argument 1 (Nutzen): Starte mit einem starken Vorteil
2. Preis: Nenne den Preis
3. Argument 2 (Nutzen): Beende mit einem weiteren Vorteil

**Kundentypen:**
- Der Besserwisser: Will alles besser wissen
- Strategie: Um Hilfe bitten, Bestätigung geben, nicht widersprechen`,
    keyPoints: [
      'Sprechausdruck: Tempo, Lautstärke, Intonation, Aussprache',
      'Körpersprache: Mimik und Gestik unterstützen Aussage',
      'Nutzenargumentation: Merkmal → Vorteil → Nutzen',
      'Sandwich-Methode: Nutzen → Preis → Nutzen'
    ]
  }
];

// Flashcards (50+)
export const flashcards: Flashcard[] = [
  // Perception Types
  { id: 'fc1', question: 'Was ist das Hauptmerkmal des Visuellen Typs?', answer: 'Er achtet auf das Äußere und spricht bildhaft.', category: 'Wahrnehmungstypen' },
  { id: 'fc2', question: 'Welche Strategie wendest du beim Auditiven Typ an?', answer: 'Argumentation klangvoll gestalten und auf die Wortwahl achten.', category: 'Wahrnehmungstypen' },
  { id: 'fc3', question: 'Was ist das zentrale Bedürfnis des Kinästhetischen Typs?', answer: 'Er muss etwas fühlen oder ein gutes Gefühl bei der Sache haben.', category: 'Wahrnehmungstypen' },
  { id: 'fc4', question: 'Wie erkennst du einen Visuellen Typ an seiner Sprache?', answer: 'Er benutzt Ausdrücke wie "Das sieht gut aus" oder "Stell dir vor...".', category: 'Wahrnehmungstypen' },
  { id: 'fc5', question: 'Was sollte man beim Auditiven Typ vermeiden?', answer: 'Doppeldeutige Formulierungen.', category: 'Wahrnehmungstypen' },
  
  // Active Listening
  { id: 'fc6', question: 'Nenne die 3 Bestandteile des Aktiven Zuhörens.', answer: 'Konzentrieren, Bestätigen (Aufmerksamkeitslaute), Einladen (zum Weitererzählen).', category: 'Aktives Zuhören' },
  { id: 'fc7', question: 'Was ist der Unterschied zwischen Umschreibendem und Aktivem Zuhören?', answer: 'Umschreibendes Zuhören spiegelt nur die Fakten wider. Aktives Zuhören spiegelt Fakten UND Gefühle wider.', category: 'Aktives Zuhören' },
  { id: 'fc8', question: 'Nenne 3 Beispiele für Gesprächsförderer.', answer: 'Nachfragen, Pausen, Zustimmen.', category: 'Aktives Zuhören' },
  { id: 'fc9', question: 'Nenne 3 Beispiele für Gesprächsstörer.', answer: 'Befehlen, Bewerten, Drohen.', category: 'Aktives Zuhören' },
  { id: 'fc10', question: 'Warum ist Bewerten ein Gesprächsstörer?', answer: 'Es führt zu Abwehrhaltung und blockiert die Kommunikation.', category: 'Aktives Zuhören' },
  
  // Question Types
  { id: 'fc11', question: 'Wann benutzt man eine Offene Frage?', answer: 'Am Anfang des Gesprächs zur Informationssammlung (W-Fragen).', category: 'Fragetechniken' },
  { id: 'fc12', question: 'Wann benutzt man eine Geschlossene Frage?', answer: 'Zur Bestätigung oder um eine Entscheidung herbeizuführen (Ja/Nein-Antworten).', category: 'Fragetechniken' },
  { id: 'fc13', question: 'Was ist eine Alternativfrage?', answer: 'Eine Frage, die zwei oder mehr Antwortmöglichkeiten vorgibt ("A oder B?").', category: 'Fragetechniken' },
  { id: 'fc14', question: 'Was ist das Problem bei Suggestivfragen?', answer: 'Sie legen die Antwort in den Mund und sind manipulativ.', category: 'Fragetechniken' },
  { id: 'fc15', question: 'Was ist eine Gegenfrage?', answer: 'Eine Frage, die man stellt, um Zeit zu gewinnen oder Unklarheiten zu klären.', category: 'Fragetechniken' },
  
  // Rhetoric & Argumentation
  { id: 'fc16', question: 'Nenne die 3 Säulen der Überzeugung (nach Aristoteles).', answer: 'Ethos (Glaubwürdigkeit), Logos (Logik), Pathos (Gefühl).', category: 'Rhetorik' },
  { id: 'fc17', question: 'Was ist das Ziel der Fünfsatz-Technik?', answer: 'Eine Argumentation klar und strukturiert aufzubauen.', category: 'Rhetorik' },
  { id: 'fc18', question: 'Wie lautet der Aufbau der Argumentationskette?', answer: 'Behauptung (These) → Argument → Beweis → Schlussregel.', category: 'Rhetorik' },
  { id: 'fc19', question: 'Was ist der Dialektische Aufbau?', answer: 'These → Antithese → Synthese.', category: 'Rhetorik' },
  { id: 'fc20', question: 'Was ist der Beweis in der Argumentationskette?', answer: 'Fakten, Zahlen oder Beispiele, die das Argument stützen.', category: 'Rhetorik' },
  
  // Expression & Sales
  { id: 'fc21', question: 'Nenne 3 Aspekte des Sprechausdrucks.', answer: 'Lautstärke, Sprechtempo, Wortmelodie (Intonation).', category: 'Ausdruck & Verkauf' },
  { id: 'fc22', question: 'Was ist der Unterschied zwischen Merkmal und Nutzen?', answer: 'Merkmal ist die Eigenschaft des Produkts. Nutzen ist, was der Kunde davon hat.', category: 'Ausdruck & Verkauf' },
  { id: 'fc23', question: 'Wie lautet die Formel der Nutzenargumentation?', answer: 'Merkmal → Vorteil → Nutzen.', category: 'Ausdruck & Verkauf' },
  { id: 'fc24', question: 'Beschreibe die Sandwich-Methode.', answer: 'Argument (Nutzen) → Preis → Argument (Nutzen).', category: 'Ausdruck & Verkauf' },
  { id: 'fc25', question: 'Was ist das Ziel der Sandwich-Methode?', answer: 'Den Preis zwischen zwei starke Nutzenargumente zu verpacken, um ihn weniger dominant erscheinen zu lassen.', category: 'Ausdruck & Verkauf' },
  
  // Additional cards for variety
  { id: 'fc26', question: 'Was ist die wichtigste Aufgabe der Körpersprache?', answer: 'Die gesprochene Aussage zu unterstützen und zu bekräftigen.', category: 'Ausdruck & Verkauf' },
  { id: 'fc27', question: 'Was ist ein Kundentyp namens "Der Besserwisser"?', answer: 'Ein Kunde, der alles besser weiß und nörglerisch auftritt.', category: 'Ausdruck & Verkauf' },
  { id: 'fc28', question: 'Wie reagierst du auf den Besserwisser?', answer: 'Um Hilfe bitten, Bestätigung geben, nicht widersprechen.', category: 'Ausdruck & Verkauf' },
  { id: 'fc29', question: 'Was ist die Mimik?', answer: 'Der Ausdruck des Gesichts.', category: 'Ausdruck & Verkauf' },
  { id: 'fc30', question: 'Was ist die Gestik?', answer: 'Die Bewegung der Hände und Arme.', category: 'Ausdruck & Verkauf' },
  
  { id: 'fc31', question: 'Was ist die Intonation?', answer: 'Die Wortmelodie oder der Tonfall beim Sprechen.', category: 'Ausdruck & Verkauf' },
  { id: 'fc32', question: 'Was ist die Synthese im Dialektischen Aufbau?', answer: 'Die Zusammenführung von These und Antithese zu einer neuen Erkenntnis.', category: 'Rhetorik' },
  { id: 'fc33', question: 'Was ist die Bedarfsermittlung?', answer: 'Die Phase, in der man durch Fragen die Wünsche und Bedürfnisse des Kunden herausfindet.', category: 'Ausdruck & Verkauf' },
  { id: 'fc34', question: 'Was ist ein Argument?', answer: 'Eine Begründung, die eine Behauptung stützt.', category: 'Rhetorik' },
  { id: 'fc35', question: 'Was ist ein Vorteil in der Nutzenargumentation?', answer: 'Was das Merkmal des Produkts dem Kunden ermöglicht.', category: 'Ausdruck & Verkauf' },
  
  { id: 'fc36', question: 'Was ist die Ausklammerung als Bauplan?', answer: 'Man beginnt mit einem unwichtigen Punkt und steigert sich zum wichtigsten.', category: 'Rhetorik' },
  { id: 'fc37', question: 'Was ist der Kettenbauplan?', answer: 'Eine Argumentation, bei der ein Argument auf dem vorherigen aufbaut.', category: 'Rhetorik' },
  { id: 'fc38', question: 'Was ist die Aussprache?', answer: 'Die Art und Weise, wie Laute und Wörter geformt werden (Artikulation).', category: 'Ausdruck & Verkauf' },
  { id: 'fc39', question: 'Was ist der Logos?', answer: 'Die logische, sachliche Begründung einer Argumentation.', category: 'Rhetorik' },
  { id: 'fc40', question: 'Was ist der Ethos?', answer: 'Die Glaubwürdigkeit des Sprechers.', category: 'Rhetorik' },
  
  { id: 'fc41', question: 'Was ist der Pathos?', answer: 'Die emotionale Ansprache des Publikums.', category: 'Rhetorik' },
  { id: 'fc42', question: 'Was ist die Überredung?', answer: 'Ein Gesprächsstörer, bei dem man versucht, den anderen zu einer Entscheidung zu drängen.', category: 'Aktives Zuhören' },
  { id: 'fc43', question: 'Was ist die Nachfrage?', answer: 'Ein Gesprächsförderer, der hilft, Unklarheiten zu beseitigen und Interesse zeigt.', category: 'Aktives Zuhören' },
  { id: 'fc44', question: 'Was ist die Betonung im Sprechausdruck?', answer: 'Die Hervorhebung einzelner Wörter oder Satzteile.', category: 'Ausdruck & Verkauf' },
  { id: 'fc45', question: 'Was ist der Vergleich als Bauplan?', answer: 'Eine Argumentation, bei der man zwei Sachverhalte gegenüberstellt.', category: 'Rhetorik' },
  
  { id: 'fc46', question: 'Was ist die Verallgemeinerung als Argumentationstechnik?', answer: 'Eine Aussage, die auf alle Fälle zutrifft (oft fehlerhaft).', category: 'Rhetorik' },
  { id: 'fc47', question: 'Was ist die Argumentation mit Autoritäten?', answer: 'Man stützt sich auf die Aussage einer anerkannten Person oder Quelle.', category: 'Rhetorik' },
  { id: 'fc48', question: 'Was ist die Argumentation mit Statistiken?', answer: 'Man nutzt Zahlen und Daten, um die Aussage zu belegen.', category: 'Rhetorik' },
  { id: 'fc49', question: 'Was ist die Pausen-Technik?', answer: 'Ein Gesprächsförderer, der dem Gesprächspartner Zeit zum Nachdenken gibt.', category: 'Aktives Zuhören' },
  { id: 'fc50', question: 'Was ist die Zustimmung?', answer: 'Ein Gesprächsförderer, der die Beziehungsebene stärkt.', category: 'Aktives Zuhören' },
];

// Quiz Questions (60+)
export const quizQuestions: QuizQuestion[] = [
  // Easy - Perception Types
  {
    id: 'q1',
    question: 'Welcher Wahrnehmungstyp reagiert am stärksten auf bildhafte Sprache und Prospekte?',
    type: 'multiple-choice',
    options: ['Auditiver Typ', 'Kinästhetischer Typ', 'Visueller Typ', 'Taktiler Typ'],
    correctAnswer: 'Visueller Typ',
    explanation: 'Der Visuelle Typ achtet auf das Äußere und spricht bildhaft. Prospekte und visuelle Hilfsmittel sind daher sehr wirksam.',
    difficulty: 'easy',
    category: 'Wahrnehmungstypen'
  },
  {
    id: 'q2',
    question: 'Was ist ein typisches sprachliches Merkmal des Kinästhetischen Typs?',
    type: 'multiple-choice',
    options: ['Das sieht gut aus.', 'Das klingt logisch.', 'Ich habe ein gutes Gefühl dabei.', 'Die Fakten sprechen für sich.'],
    correctAnswer: 'Ich habe ein gutes Gefühl dabei.',
    explanation: 'Der Kinästhetische Typ spricht über Gefühle und Empfindungen. "Ich habe ein gutes Gefühl dabei" ist typisch für diesen Typ.',
    difficulty: 'easy',
    category: 'Wahrnehmungstypen'
  },
  {
    id: 'q3',
    question: 'Was ist die empfohlene Strategie im Umgang mit einem "Besserwisser"-Kunden?',
    type: 'multiple-choice',
    options: ['Ihn korrigieren und Fakten präsentieren.', 'Ihm widersprechen und die eigene Kompetenz betonen.', 'Ihm zustimmen und um Hilfe bitten.', 'Das Gespräch sofort beenden.'],
    correctAnswer: 'Ihm zustimmen und um Hilfe bitten.',
    explanation: 'Bei einem Besserwisser solltest du um Hilfe bitten und ihm Bestätigung geben. So fühlst er sich wertvoll und kooperiert besser.',
    difficulty: 'easy',
    category: 'Wahrnehmungstypen'
  },
  
  // Easy - Active Listening
  {
    id: 'q4',
    question: 'Welche Art des Zuhörens beinhaltet das Widerspiegeln von Inhalten UND Gefühlen?',
    type: 'multiple-choice',
    options: ['Aufnehmendes Zuhören', 'Umschreibendes Zuhören', 'Aktives Zuhören', 'Pseudo-Zuhören'],
    correctAnswer: 'Aktives Zuhören',
    explanation: 'Aktives Zuhören ist die höchste Form des Zuhörens. Es spiegelt sowohl die Inhalte als auch die Gefühle des Gesprächspartners wider.',
    difficulty: 'easy',
    category: 'Aktives Zuhören'
  },
  {
    id: 'q5',
    question: 'Welche der folgenden Handlungen ist ein Gesprächsförderer?',
    type: 'multiple-choice',
    options: ['Bewerten', 'Pausen machen', 'Drohen', 'Herunterspielen'],
    correctAnswer: 'Pausen machen',
    explanation: 'Pausen sind ein Gesprächsförderer, da sie dem Gesprächspartner Zeit zum Nachdenken geben. Die anderen Optionen sind Gesprächsstörer.',
    difficulty: 'easy',
    category: 'Aktives Zuhören'
  },
  
  // Easy - Question Types
  {
    id: 'q6',
    question: 'Was ist das Hauptziel einer Offenen Frage?',
    type: 'multiple-choice',
    options: ['Eine schnelle Entscheidung herbeiführen.', 'Informationen sammeln und den Gesprächspartner zum Erzählen bringen.', 'Die Antwort in den Mund legen.', 'Das Gespräch beenden.'],
    correctAnswer: 'Informationen sammeln und den Gesprächspartner zum Erzählen bringen.',
    explanation: 'Offene Fragen (W-Fragen) laden zum Erzählen ein und helfen, umfassende Informationen zu sammeln.',
    difficulty: 'easy',
    category: 'Fragetechniken'
  },
  {
    id: 'q7',
    question: 'Eine Frage, die nur mit "Ja" oder "Nein" beantwortet werden kann, ist eine:',
    type: 'multiple-choice',
    options: ['Alternativfrage', 'Rhetorische Frage', 'Geschlossene Frage', 'Gegenfrage'],
    correctAnswer: 'Geschlossene Frage',
    explanation: 'Geschlossene Fragen führen zu Ja/Nein-Antworten und dienen der schnellen Entscheidungsfindung.',
    difficulty: 'easy',
    category: 'Fragetechniken'
  },
  
  // Medium - Active Listening
  {
    id: 'q8',
    question: 'Nenne die drei Bestandteile des Aktiven Zuhörens.',
    type: 'open',
    correctAnswer: 'Konzentrieren, Bestätigen (Aufmerksamkeitslaute), Einladen (zum Weitererzählen)',
    explanation: 'Diese drei Bestandteile sind essentiell für aktives Zuhören und bauen aufeinander auf.',
    difficulty: 'medium',
    category: 'Aktives Zuhören'
  },
  {
    id: 'q9',
    question: 'Warum sollte man Suggestivfragen in der professionellen Kommunikation vermeiden?',
    type: 'multiple-choice',
    options: ['Sie sind zu kompliziert.', 'Sie legen die Antwort in den Mund und sind manipulativ.', 'Sie führen zu zu langen Antworten.', 'Sie sind nur für den Verkauf geeignet.'],
    correctAnswer: 'Sie legen die Antwort in den Mund und sind manipulativ.',
    explanation: 'Suggestivfragen sind manipulativ und führen zu Misstrauen. Sie sollten in professionellen Gesprächen vermieden werden.',
    difficulty: 'medium',
    category: 'Fragetechniken'
  },
  
  // Medium - Rhetoric
  {
    id: 'q10',
    question: 'Welche der drei Säulen der Überzeugung bezieht sich auf die Glaubwürdigkeit des Sprechers?',
    type: 'multiple-choice',
    options: ['Logos', 'Pathos', 'Ethos', 'Kairos'],
    correctAnswer: 'Ethos',
    explanation: 'Ethos bezieht sich auf die Glaubwürdigkeit und Autorität des Sprechers. Logos ist Logik, Pathos ist Emotion.',
    difficulty: 'medium',
    category: 'Rhetorik'
  },
  {
    id: 'q11',
    question: 'Wie lautet die korrekte Abfolge der Argumentationskette?',
    type: 'open',
    correctAnswer: 'Behauptung (These) → Argument → Beweis → Schlussregel',
    explanation: 'Diese Struktur stellt sicher, dass jedes Argument logisch aufgebaut und belegt ist.',
    difficulty: 'medium',
    category: 'Rhetorik'
  },
  
  // Medium - Sales
  {
    id: 'q12',
    question: 'Was ist der Nutzen in der Nutzenargumentation?',
    type: 'multiple-choice',
    options: ['Die Eigenschaft des Produkts (Merkmal).', 'Was das Produkt kann (Vorteil).', 'Was der Kunde persönlich davon hat.', 'Der Preis des Produkts.'],
    correctAnswer: 'Was der Kunde persönlich davon hat.',
    explanation: 'Der Nutzen ist das, was der Kunde persönlich von dem Produkt hat – nicht die technische Eigenschaft oder der Vorteil.',
    difficulty: 'medium',
    category: 'Ausdruck & Verkauf'
  },
  {
    id: 'q13',
    question: 'Erkläre die Sandwich-Methode zur Preisnennung.',
    type: 'open',
    correctAnswer: 'Der Preis wird zwischen zwei starke Nutzenargumente verpackt (Nutzen → Preis → Nutzen).',
    explanation: 'Diese Methode macht den Preis weniger dominant und hebt die Vorteile hervor.',
    difficulty: 'medium',
    category: 'Ausdruck & Verkauf'
  },
  
  // Hard - Rhetoric
  {
    id: 'q14',
    question: 'Was ist das Ziel der Synthese im Dialektischen Aufbau?',
    type: 'multiple-choice',
    options: ['Die These zu widerlegen.', 'Die Antithese zu ignorieren.', 'Die These und Antithese zu einer neuen Erkenntnis zusammenzuführen.', 'Nur die Fakten zu präsentieren.'],
    correctAnswer: 'Die These und Antithese zu einer neuen Erkenntnis zusammenzuführen.',
    explanation: 'Die Synthese vereint These und Antithese zu einer neuen, umfassenderen Erkenntnis.',
    difficulty: 'hard',
    category: 'Rhetorik'
  },
  {
    id: 'q15',
    question: 'Die Fünfsatz-Technik besteht aus wie vielen Hauptteilen?',
    type: 'multiple-choice',
    options: ['Drei', 'Vier', 'Fünf', 'Sechs'],
    correctAnswer: 'Fünf',
    explanation: 'Die Fünfsatz-Technik hat fünf Teile: Einstieg, 3 Argumente und Schluss.',
    difficulty: 'hard',
    category: 'Rhetorik'
  },
  
  // Hard - Application
  {
    id: 'q16',
    question: 'Formuliere eine Nutzenargumentation für ein Smartphone mit "langer Akkulaufzeit" (Merkmal).',
    type: 'open',
    correctAnswer: 'Merkmal: Lange Akkulaufzeit. Vorteil: Sie können das Handy den ganzen Tag nutzen. Nutzen: Sie bleiben immer erreichbar und verpassen keine wichtigen Anrufe oder Nachrichten.',
    explanation: 'Eine gute Nutzenargumentation verbindet das Merkmal mit dem persönlichen Vorteil für den Kunden.',
    difficulty: 'hard',
    category: 'Ausdruck & Verkauf'
  },
  {
    id: 'q17',
    question: 'Wenn deine Mimik Freude ausdrückt, aber deine Gestik Abwehr signalisiert, spricht man von:',
    type: 'multiple-choice',
    options: ['Aktivem Zuhören', 'Inkongruenter Kommunikation', 'Rhetorischer Argumentation', 'Pseudo-Zuhören'],
    correctAnswer: 'Inkongruenter Kommunikation',
    explanation: 'Wenn verbale und nonverbale Signale nicht übereinstimmen, spricht man von inkongruenter Kommunikation. Das wirkt unglaubwürdig.',
    difficulty: 'hard',
    category: 'Ausdruck & Verkauf'
  },
];

// Progress tracking
export interface UserProgress {
  completedTopics: string[];
  completedFlashcards: string[];
  quizResults: {
    questionId: string;
    answered: boolean;
    correct: boolean;
  }[];
  totalScore: number;
}
