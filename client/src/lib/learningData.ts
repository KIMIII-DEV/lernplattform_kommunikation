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

**Kundentypen (Wichtig für die Klausur!):**

1. Der Besserwisser: Will alles besser wissen. Strategie: Um Hilfe bitten, Bestätigung geben.
2. Der Entscheidungsschwache: Unsicher, braucht lange für Entscheidungen. Strategie: Geduld, Sicherheit, Schritt für Schritt.
3. Der Ungeduldig-Impulsive: Schnell, ungeduldig. Strategie: Kurz und prägnant, schnelle Ergebnisse.
4. Der Emotionale: Gefühlsorientiert. Strategie: Emotionale Geschichten, Vertrauen aufbauen.
5. Der Sachliche/Analytiker: Logisch, datenorientiert. Strategie: Fakten, Statistiken, Beweise.
6. Der Freundliche/Kooperative: Hilfsbereit, leicht zu überzeugen. Strategie: Einfach, klar, Bestätigung.`,
    keyPoints: [
      'Sprechausdruck: Tempo, Lautstärke, Intonation, Aussprache',
      'Körpersprache: Mimik und Gestik unterstützen Aussage',
      'Nutzenargumentation: Merkmal → Vorteil → Nutzen',
      'Sandwich-Methode: Nutzen → Preis → Nutzen',
      'Kundentypen: Besserwisser, Zauderer, Impulsiv, Emotional, Analytiker, Kooperativ'
    ]
  }
];

// Flashcards (60+)
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
  
  // Kundentypen (NEW)
  { id: 'fc51', question: 'Wie reagierst du auf den Zauderer?', answer: 'Mit Geduld, Sicherheit und Schritt-für-Schritt Erklärungen.', category: 'Kundentypen' },
  { id: 'fc52', question: 'Was ist die beste Strategie für den Ungeduldig-Impulsiven?', answer: 'Kurz und prägnant argumentieren, schnelle Ergebnisse zeigen.', category: 'Kundentypen' },
  { id: 'fc53', question: 'Welcher Kundentyp reagiert am besten auf emotionale Geschichten?', answer: 'Der Emotionale Typ.', category: 'Kundentypen' },
  { id: 'fc54', question: 'Was braucht der Sachliche/Analytiker?', answer: 'Fakten, Statistiken und Beweise.', category: 'Kundentypen' },
  { id: 'fc55', question: 'Wie behandelst du den Freundlichen/Kooperativen?', answer: 'Einfach, klar und mit Bestätigung.', category: 'Kundentypen' },
  { id: 'fc56', question: 'Warum ist es wichtig, Kundentypen zu erkennen?', answer: 'Um die Kommunikationsstrategie anzupassen und erfolgreicher zu verkaufen.', category: 'Kundentypen' },
  { id: 'fc57', question: 'Was ist das Hauptmerkmal des Zauderers?', answer: 'Unsicherheit und lange Entscheidungsfindung.', category: 'Kundentypen' },
  { id: 'fc58', question: 'Welcher Kundentyp möchte schnelle Ergebnisse?', answer: 'Der Ungeduldig-Impulsive.', category: 'Kundentypen' },
  { id: 'fc59', question: 'Wie erkennst du den Emotionalen Typ?', answer: 'Er spricht über Gefühle und reagiert auf persönliche Geschichten.', category: 'Kundentypen' },
  { id: 'fc60', question: 'Was ist die Gefahr bei zu viel Argumentation beim Freundlichen Typ?', answer: 'Er stimmt schnell zu, um Konflikte zu vermeiden, auch wenn er nicht überzeugt ist.', category: 'Kundentypen' },
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
    explanation: 'Bei einem Besserwisser solltest du um Hilfe bitten und ihm Bestätigung geben. So fühlt er sich wertvoll und kooperiert besser.',
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

  // NEW QUESTIONS - Customer Types (18-35)
  {
    id: 'q18',
    question: 'Der Entscheidungsschwache braucht in der Kommunikation vor allem:',
    type: 'multiple-choice',
    options: ['Schnelle Entscheidungen', 'Geduld und Sicherheit', 'Emotionale Geschichten', 'Statistiken und Daten'],
    correctAnswer: 'Geduld und Sicherheit',
    explanation: 'Der Entscheidungsschwache ist unsicher und braucht Zeit. Geduld und Sicherheit sind daher die wichtigsten Faktoren.',
    difficulty: 'easy',
    category: 'Kundentypen'
  },
  {
    id: 'q19',
    question: 'Wie erkennst du den Ungeduldig-Impulsiven?',
    type: 'multiple-choice',
    options: ['Er stellt viele Fragen', 'Er will schnell auf den Punkt kommen', 'Er erzählt lange Geschichten', 'Er möchte alle Daten sehen'],
    correctAnswer: 'Er will schnell auf den Punkt kommen',
    explanation: 'Der Ungeduldig-Impulsive wirkt gehetzt und möchte schnelle Ergebnisse. Er unterbricht oft und will nicht lange zuhören.',
    difficulty: 'easy',
    category: 'Kundentypen'
  },
  {
    id: 'q20',
    question: 'Der Emotionale Kundentyp reagiert am besten auf:',
    type: 'multiple-choice',
    options: ['Technische Daten', 'Persönliche Geschichten und Gefühle', 'Schnelle Entscheidungen', 'Logische Argumente'],
    correctAnswer: 'Persönliche Geschichten und Gefühle',
    explanation: 'Der Emotionale Typ ist gefühlsorientiert und lässt sich von Emotionen leiten. Persönliche Geschichten wirken daher am besten.',
    difficulty: 'easy',
    category: 'Kundentypen'
  },
  {
    id: 'q21',
    question: 'Was ist das Hauptmerkmal des Sachlichen/Analytikers?',
    type: 'multiple-choice',
    options: ['Er ist gefühlsorientiert', 'Er braucht Fakten und Zahlen', 'Er möchte schnelle Entscheidungen', 'Er ist leicht zu überzeugen'],
    correctAnswer: 'Er braucht Fakten und Zahlen',
    explanation: 'Der Analytiker ist logisch und datenorientiert. Er fragt nach Beweisen und möchte Statistiken sehen.',
    difficulty: 'easy',
    category: 'Kundentypen'
  },
  {
    id: 'q22',
    question: 'Der Freundliche/Kooperative Kundentyp hat welche Schwäche?',
    type: 'multiple-choice',
    options: ['Er ist zu kritisch', 'Er stimmt schnell zu, um Konflikte zu vermeiden', 'Er braucht zu lange für Entscheidungen', 'Er ist zu emotional'],
    correctAnswer: 'Er stimmt schnell zu, um Konflikte zu vermeiden',
    explanation: 'Der Freundliche Typ möchte allen gefallen und vermeidet Konflikte. Er kann daher zu schnell zustimmen, ohne wirklich überzeugt zu sein.',
    difficulty: 'medium',
    category: 'Kundentypen'
  },
  {
    id: 'q23',
    question: 'Welche Strategie ist FALSCH für den Zauderer?',
    type: 'multiple-choice',
    options: ['Geduld zeigen', 'Schritt für Schritt erklären', 'Schnelle Entscheidungen erzwingen', 'Sicherheit geben'],
    correctAnswer: 'Schnelle Entscheidungen erzwingen',
    explanation: 'Der Entscheidungsschwache braucht Zeit. Schnelle Entscheidungen zu erzwingen, führt zu Frustration und Ablehnung.',
    difficulty: 'medium',
    category: 'Kundentypen'
  },
  {
    id: 'q24',
    question: 'Wie solltest du mit dem Ungeduldig-Impulsiven kommunizieren?',
    type: 'open',
    correctAnswer: 'Kurz und prägnant, schnelle Ergebnisse zeigen, auf den Punkt kommen',
    explanation: 'Der Ungeduldig-Impulsive hat keine Geduld für lange Erklärungen. Kurze, prägnante Argumente mit schnellen Ergebnissen wirken am besten.',
    difficulty: 'medium',
    category: 'Kundentypen'
  },
  {
    id: 'q25',
    question: 'Was ist der Unterschied zwischen dem Emotionalen und dem Analytiker?',
    type: 'open',
    correctAnswer: 'Der Emotionale braucht Gefühle und Geschichten, der Analytiker braucht Fakten und Daten',
    explanation: 'Der Emotionale Typ wird von Gefühlen geleitet, der Analytiker von Logik und Daten. Sie brauchen völlig unterschiedliche Strategien.',
    difficulty: 'hard',
    category: 'Kundentypen'
  },
  {
    id: 'q26',
    question: 'Welcher Kundentyp ist am leichtesten zu überzeugen?',
    type: 'multiple-choice',
    options: ['Der Besserwisser', 'Der Entscheidungsschwache', 'Der Freundliche/Kooperative', 'Der Analytiker'],
    correctAnswer: 'Der Freundliche/Kooperative',
    explanation: 'Der Freundliche Typ ist hilfsbereit und leicht zu überzeugen. Er möchte Konflikte vermeiden und stimmt schnell zu.',
    difficulty: 'easy',
    category: 'Kundentypen'
  },
  {
    id: 'q27',
    question: 'Wie reagiert der Besserwisser auf direkte Kritik?',
    type: 'multiple-choice',
    options: ['Er akzeptiert sie sofort', 'Er wird defensiv und widerspricht', 'Er ignoriert sie', 'Er fragt nach Beweisen'],
    correctAnswer: 'Er wird defensiv und widerspricht',
    explanation: 'Der Besserwisser will alles besser wissen. Direkte Kritik führt zu Defensivität. Besser: um Hilfe bitten und Bestätigung geben.',
    difficulty: 'medium',
    category: 'Kundentypen'
  },
  {
    id: 'q28',
    question: 'Der Entscheidungsschwache stellt typischerweise:',
    type: 'multiple-choice',
    options: ['Wenige Fragen', 'Viele Fragen', 'Keine Fragen', 'Nur kritische Fragen'],
    correctAnswer: 'Viele Fragen',
    explanation: 'Der Entscheidungsschwache ist unsicher und möchte alles genau wissen. Er stellt daher viele Fragen, bevor er eine Entscheidung trifft.',
    difficulty: 'easy',
    category: 'Kundentypen'
  },
  {
    id: 'q29',
    question: 'Welcher Kundentyp braucht die meiste Zeit für eine Entscheidung?',
    type: 'multiple-choice',
    options: ['Der Emotionale', 'Der Ungeduldig-Impulsive', 'Der Entscheidungsschwache', 'Der Analytiker'],
    correctAnswer: 'Der Entscheidungsschwache',
    explanation: 'Der Entscheidungsschwache ist unsicher und vorsichtig. Er braucht die meiste Zeit, um eine Entscheidung zu treffen.',
    difficulty: 'easy',
    category: 'Kundentypen'
  },
  {
    id: 'q30',
    question: 'Der Analytiker möchte vor einer Entscheidung:',
    type: 'multiple-choice',
    options: ['Eine emotionale Geschichte hören', 'Alle Daten und Statistiken sehen', 'Schnell zum Punkt kommen', 'Mit anderen Kunden sprechen'],
    correctAnswer: 'Alle Daten und Statistiken sehen',
    explanation: 'Der Analytiker ist logisch und datenorientiert. Er möchte alle Fakten und Zahlen sehen, bevor er eine Entscheidung trifft.',
    difficulty: 'easy',
    category: 'Kundentypen'
  },
  {
    id: 'q31',
    question: 'Wie solltest du mit dem Freundlichen/Kooperativen umgehen?',
    type: 'open',
    correctAnswer: 'Einfach und klar kommunizieren, Bestätigung geben, keine zu langen Diskussionen',
    explanation: 'Der Freundliche Typ möchte einfache, klare Informationen und Bestätigung. Lange, komplizierte Diskussionen verwirren ihn.',
    difficulty: 'medium',
    category: 'Kundentypen'
  },
  {
    id: 'q32',
    question: 'Welcher Kundentyp ist am ehesten bereit, deine Meinung zu akzeptieren?',
    type: 'multiple-choice',
    options: ['Der Besserwisser', 'Der Entscheidungsschwache', 'Der Freundliche/Kooperative', 'Der Analytiker'],
    correctAnswer: 'Der Freundliche/Kooperative',
    explanation: 'Der Freundliche Typ möchte Konflikte vermeiden und ist daher am ehesten bereit, deine Meinung zu akzeptieren.',
    difficulty: 'medium',
    category: 'Kundentypen'
  },
  {
    id: 'q33',
    question: 'Der Emotionale Kundentyp entscheidet hauptsächlich basierend auf:',
    type: 'multiple-choice',
    options: ['Logischen Argumenten', 'Gefühlen und Bauchgefühl', 'Statistiken', 'Schnelligkeit'],
    correctAnswer: 'Gefühlen und Bauchgefühl',
    explanation: 'Der Emotionale Typ ist gefühlsorientiert und lässt sich von Emotionen leiten. Er entscheidet basierend auf seinem Bauchgefühl.',
    difficulty: 'easy',
    category: 'Kundentypen'
  },
  {
    id: 'q34',
    question: 'Welche Fehler machst du beim Ungeduldig-Impulsiven?',
    type: 'multiple-choice',
    options: ['Du sprichst zu schnell', 'Du erklärst zu viel und zu lange', 'Du fragst zu viele Fragen', 'Du zeigst zu viele Daten'],
    correctAnswer: 'Du erklärst zu viel und zu lange',
    explanation: 'Der Ungeduldig-Impulsive hat keine Geduld für lange Erklärungen. Zu viel Text führt zu Ungeduld und Ablehnung.',
    difficulty: 'medium',
    category: 'Kundentypen'
  },
  {
    id: 'q35',
    question: 'Der Besserwisser fühlt sich am wohlsten, wenn:',
    type: 'multiple-choice',
    options: ['Er schnell eine Entscheidung treffen kann', 'Er seine Kompetenz zeigen kann', 'Er lange Zeit zum Nachdenken hat', 'Er emotionale Geschichten hört'],
    correctAnswer: 'Er seine Kompetenz zeigen kann',
    explanation: 'Der Besserwisser will alles besser wissen. Er fühlt sich am wohlsten, wenn er seine Kompetenz zeigen kann. Strategie: um Hilfe bitten.',
    difficulty: 'medium',
    category: 'Kundentypen'
  },

  // MORE QUESTIONS - Extended Quiz (36-60+)
  {
    id: 'q36',
    question: 'Welche Wahrnehmungstyp-Strategie ist am wirksamsten für den Visuellen Typ?',
    type: 'multiple-choice',
    options: ['Lange mündliche Erklärungen', 'Visuelle Prospekte und Diagramme', 'Anfassen und Probieren', 'Schnelle Entscheidungen'],
    correctAnswer: 'Visuelle Prospekte und Diagramme',
    explanation: 'Der Visuelle Typ achtet auf das Äußere. Prospekte, Diagramme und visuelles Material sind daher sehr wirksam.',
    difficulty: 'easy',
    category: 'Wahrnehmungstypen'
  },
  {
    id: 'q37',
    question: 'Was ist das Risiko bei der Sandwich-Methode?',
    type: 'open',
    correctAnswer: 'Der Preis könnte trotzdem zu dominant wirken oder der Kunde könnte die Nutzenargumente nicht ernst nehmen',
    explanation: 'Die Sandwich-Methode ist effektiv, aber wenn die Nutzenargumente nicht stark genug sind, wirkt der Preis trotzdem zu dominant.',
    difficulty: 'hard',
    category: 'Ausdruck & Verkauf'
  },
  {
    id: 'q38',
    question: 'Welcher Bauplan ist am besten für eine Klausur-Argumentation?',
    type: 'multiple-choice',
    options: ['Kettenbauplan', 'Fünfsatz-Technik', 'Dialektischer Aufbau', 'Vergleich'],
    correctAnswer: 'Fünfsatz-Technik',
    explanation: 'Die Fünfsatz-Technik ist der Standard-Bauplan und am besten für klausurrelevante Argumentationen geeignet.',
    difficulty: 'medium',
    category: 'Rhetorik'
  },
  {
    id: 'q39',
    question: 'Wie unterscheiden sich Gesprächsförderer und Gesprächsstörer?',
    type: 'open',
    correctAnswer: 'Förderer öffnen die Kommunikation und bauen Vertrauen auf, Störer blockieren die Kommunikation und führen zu Abwehrhaltung',
    explanation: 'Gesprächsförderer ermutigen den Gesprächspartner weiterzusprechen, während Störer die Kommunikation blockieren.',
    difficulty: 'hard',
    category: 'Aktives Zuhören'
  },
  {
    id: 'q40',
    question: 'Welche Frage-Technik solltest du am Anfang eines Gesprächs nutzen?',
    type: 'multiple-choice',
    options: ['Geschlossene Fragen', 'Offene Fragen', 'Alternativfragen', 'Suggestivfragen'],
    correctAnswer: 'Offene Fragen',
    explanation: 'Am Anfang solltest du offene Fragen stellen, um Informationen zu sammeln und den Gesprächspartner zum Erzählen zu bringen.',
    difficulty: 'easy',
    category: 'Fragetechniken'
  },
  {
    id: 'q41',
    question: 'Was ist der Unterschied zwischen Merkmal und Vorteil?',
    type: 'open',
    correctAnswer: 'Merkmal ist die Eigenschaft des Produkts, Vorteil ist was das Merkmal dem Kunden ermöglicht',
    explanation: 'Merkmal: "128 GB Speicher". Vorteil: "Sie können viele Fotos speichern". Der Vorteil zeigt, was das Merkmal kann.',
    difficulty: 'medium',
    category: 'Ausdruck & Verkauf'
  },
  {
    id: 'q42',
    question: 'Wann solltest du eine Gegenfrage stellen?',
    type: 'multiple-choice',
    options: ['Am Anfang des Gesprächs', 'Wenn du Zeit gewinnen oder Unklarheiten klären möchtest', 'Am Ende des Gesprächs', 'Nie'],
    correctAnswer: 'Wenn du Zeit gewinnen oder Unklarheiten klären möchtest',
    explanation: 'Gegenfragen sind nützlich, um Zeit zu gewinnen oder Missverständnisse zu vermeiden. Sie sollten aber nicht zu oft verwendet werden.',
    difficulty: 'medium',
    category: 'Fragetechniken'
  },
  {
    id: 'q43',
    question: 'Welche Rolle spielt die Körpersprache in der Kommunikation?',
    type: 'open',
    correctAnswer: 'Sie unterstützt und bekräftigt die gesprochene Aussage. Wenn Körpersprache und Worte nicht übereinstimmen, wirkt es unglaubwürdig',
    explanation: 'Körpersprache ist ein wichtiger Teil der Kommunikation. Sie sollte die Worte unterstützen, nicht widersprechen.',
    difficulty: 'hard',
    category: 'Ausdruck & Verkauf'
  },
  {
    id: 'q44',
    question: 'Was ist das Hauptziel des Aktiven Zuhörens?',
    type: 'multiple-choice',
    options: ['Schnell eine Antwort zu geben', 'Vertrauen aufzubauen und Missverständnisse zu vermeiden', 'Den anderen zu unterbrechen', 'Die eigene Meinung zu zeigen'],
    correctAnswer: 'Vertrauen aufzubauen und Missverständnisse zu vermeiden',
    explanation: 'Aktives Zuhören ist die Königsdisziplin, um Vertrauen aufzubauen und Missverständnisse zu vermeiden.',
    difficulty: 'easy',
    category: 'Aktives Zuhören'
  },
  {
    id: 'q45',
    question: 'Wie viele Argumente sollte die Fünfsatz-Technik haben?',
    type: 'multiple-choice',
    options: ['Zwei', 'Drei', 'Vier', 'Fünf'],
    correctAnswer: 'Drei',
    explanation: 'Die Fünfsatz-Technik hat fünf Teile: Einstieg, 3 Argumente und Schluss. Also 3 Argumente insgesamt.',
    difficulty: 'easy',
    category: 'Rhetorik'
  },
  {
    id: 'q46',
    question: 'Was ist der Unterschied zwischen These und Antithese?',
    type: 'open',
    correctAnswer: 'These ist die Hauptaussage, Antithese ist der Gegenargument oder die gegenteilige Aussage',
    explanation: 'These: "Produkt A ist besser". Antithese: "Produkt B ist besser". Die Synthese vereint beide zu einer neuen Erkenntnis.',
    difficulty: 'hard',
    category: 'Rhetorik'
  },
  {
    id: 'q47',
    question: 'Welche Strategie ist am besten für den Auditiven Typ?',
    type: 'multiple-choice',
    options: ['Prospekte zeigen', 'Klangvolle, klare Argumentation', 'Etwas zum Anfassen geben', 'Schnelle Entscheidungen'],
    correctAnswer: 'Klangvolle, klare Argumentation',
    explanation: 'Der Auditive Typ achtet auf den Klang und die Wortwahl. Klangvolle, klare Argumentation ist daher am wirksamsten.',
    difficulty: 'easy',
    category: 'Wahrnehmungstypen'
  },
  {
    id: 'q48',
    question: 'Was ist das Ziel einer Alternativfrage?',
    type: 'multiple-choice',
    options: ['Informationen sammeln', 'Die Entscheidung in eine bestimmte Richtung lenken', 'Zeit gewinnen', 'Den anderen zu verwirren'],
    correctAnswer: 'Die Entscheidung in eine bestimmte Richtung lenken',
    explanation: 'Alternativfragen geben zwei Optionen vor und lenken die Entscheidung in eine bestimmte Richtung. Beispiel: "Modell A oder B?"',
    difficulty: 'medium',
    category: 'Fragetechniken'
  },
  {
    id: 'q49',
    question: 'Wie erkennst du den Kinästhetischen Typ?',
    type: 'multiple-choice',
    options: ['Er spricht über Zahlen', 'Er spricht über Gefühle und Bauchgefühl', 'Er spricht über Farben', 'Er spricht über Logik'],
    correctAnswer: 'Er spricht über Gefühle und Bauchgefühl',
    explanation: 'Der Kinästhetische Typ spricht über Gefühle. Ausdrücke wie "Das fühlt sich richtig an" sind typisch für diesen Typ.',
    difficulty: 'easy',
    category: 'Wahrnehmungstypen'
  },
  {
    id: 'q50',
    question: 'Was ist der Unterschied zwischen Logos und Pathos?',
    type: 'open',
    correctAnswer: 'Logos ist die logische, sachliche Begründung. Pathos ist die emotionale Ansprache',
    explanation: 'Logos: Fakten und Logik. Pathos: Gefühle und Emotionen. Beide sind wichtig für eine gute Argumentation.',
    difficulty: 'hard',
    category: 'Rhetorik'
  },
  {
    id: 'q51',
    question: 'Welche Fehler machst du beim Zauderer?',
    type: 'multiple-choice',
    options: ['Du erklärst zu viel', 'Du erzwingst schnelle Entscheidungen', 'Du gibst ihm nicht genug Zeit', 'Alle oben genannten'],
    correctAnswer: 'Alle oben genannten',
    explanation: 'Der Entscheidungsschwache braucht Zeit und Geduld. Alle diese Fehler führen zu Frustration und Ablehnung.',
    difficulty: 'hard',
    category: 'Kundentypen'
  },
  {
    id: 'q52',
    question: 'Wie solltest du den Analytiker überzeugen?',
    type: 'open',
    correctAnswer: 'Mit Fakten, Statistiken, Daten und wissenschaftlichen Beweisen',
    explanation: 'Der Analytiker ist logisch und datenorientiert. Nur Fakten und Beweise überzeugen ihn.',
    difficulty: 'medium',
    category: 'Kundentypen'
  },
  {
    id: 'q53',
    question: 'Was ist das Risiko bei zu viel Zustimmung beim Freundlichen Typ?',
    type: 'multiple-choice',
    options: ['Er wird ungeduldig', 'Er stimmt zu schnell zu, ohne wirklich überzeugt zu sein', 'Er wird kritisch', 'Er fragt zu viele Fragen'],
    correctAnswer: 'Er stimmt zu schnell zu, ohne wirklich überzeugt zu sein',
    explanation: 'Der Freundliche Typ möchte Konflikte vermeiden. Zu viel Zustimmung kann dazu führen, dass er zu schnell zustimmt.',
    difficulty: 'hard',
    category: 'Kundentypen'
  },
  {
    id: 'q54',
    question: 'Welche Frage-Technik solltest du am Ende eines Gesprächs nutzen?',
    type: 'multiple-choice',
    options: ['Offene Fragen', 'Geschlossene Fragen', 'Gegenfragen', 'Suggestivfragen'],
    correctAnswer: 'Geschlossene Fragen',
    explanation: 'Am Ende solltest du geschlossene Fragen stellen, um eine Entscheidung herbeizuführen. Beispiel: "Sind Sie damit einverstanden?"',
    difficulty: 'medium',
    category: 'Fragetechniken'
  },
  {
    id: 'q55',
    question: 'Was ist die wichtigste Regel beim Umgang mit dem Besserwisser?',
    type: 'open',
    correctAnswer: 'Nicht widersprechen, um Hilfe bitten, Bestätigung geben',
    explanation: 'Der Besserwisser will alles besser wissen. Wenn du ihn nicht widersprichst und um Hilfe bittest, fühlt er sich wertvoll.',
    difficulty: 'medium',
    category: 'Kundentypen'
  },
  {
    id: 'q56',
    question: 'Wie unterscheiden sich die 3 Wahrnehmungstypen in ihrer Entscheidungsfindung?',
    type: 'open',
    correctAnswer: 'Visueller: nach Aussehen und Diagrammen. Auditiver: nach Klang und Argumentation. Kinästhetischer: nach Gefühl und Bauchgefühl',
    explanation: 'Jeder Typ entscheidet basierend auf seiner bevorzugten Wahrnehmung. Das ist wichtig für die richtige Kommunikationsstrategie.',
    difficulty: 'hard',
    category: 'Wahrnehmungstypen'
  },
  {
    id: 'q57',
    question: 'Was ist das Hauptproblem bei Suggestivfragen?',
    type: 'open',
    correctAnswer: 'Sie sind manipulativ und führen zu Misstrauen. Der Gesprächspartner fühlt sich unter Druck gesetzt',
    explanation: 'Suggestivfragen legen die Antwort in den Mund. Das wirkt manipulativ und führt zu Misstrauen.',
    difficulty: 'hard',
    category: 'Fragetechniken'
  },
  {
    id: 'q58',
    question: 'Welcher Kundentyp ist am schwierigsten zu handhaben?',
    type: 'multiple-choice',
    options: ['Der Emotionale', 'Der Besserwisser', 'Der Entscheidungsschwache', 'Der Analytiker'],
    correctAnswer: 'Der Besserwisser',
    explanation: 'Der Besserwisser ist am schwierigsten, weil er alles besser weiß und ständig widerspricht. Man muss sehr vorsichtig mit ihm umgehen.',
    difficulty: 'hard',
    category: 'Kundentypen'
  },
  {
    id: 'q59',
    question: 'Was ist die Synthese im Dialektischen Aufbau?',
    type: 'multiple-choice',
    options: ['Die These', 'Die Antithese', 'Die Zusammenführung von These und Antithese zu einer neuen Erkenntnis', 'Der Beweis'],
    correctAnswer: 'Die Zusammenführung von These und Antithese zu einer neuen Erkenntnis',
    explanation: 'Die Synthese vereint These und Antithese zu einer neuen, umfassenderen Erkenntnis. Das ist der Höhepunkt der Argumentation.',
    difficulty: 'hard',
    category: 'Rhetorik'
  },
  {
    id: 'q60',
    question: 'Wie kombinierst du die Wahrnehmungstypen und Kundentypen in der Praxis?',
    type: 'open',
    correctAnswer: 'Du erkennst zuerst den Wahrnehmungstyp (visuell, auditiv, kinästhetisch) und dann den Kundentyp (Besserwisser, Zauderer, etc.) und passt deine Strategie an beide an',
    explanation: 'In der Praxis musst du beide Systeme kombinieren. Ein Kunde kann z.B. ein visueller Besserwisser sein. Dann brauchst du eine Strategie, die beide Aspekte berücksichtigt.',
    difficulty: 'hard',
    category: 'Allgemein'
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
