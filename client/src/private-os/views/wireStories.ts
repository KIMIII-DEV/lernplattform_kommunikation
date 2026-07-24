/* Aus der bisherigen pages/Wire.tsx übernommene STORIES — echte, bereits
   redaktionell abgenommene Inhalte, hier weiterverwendet statt dupliziert. */
export interface WireStory {
  tag: string;
  mins: number;
  time: string;
  title: string;
  body: string;
  take: string;
}

export const WIRE_STORIES: WireStory[] = [
  {
    tag: 'CULTURE',
    mins: 4,
    time: '11:08 PM',
    title: 'Vinyl outsells CDs for the fourth year running.',
    body:
      'The record industry continues a quiet reversal — analog format sales overtook compact discs again this quarter, with independent pressing plants reporting backlogs into the autumn. The barkeeper notes: "people want to hold the thing again."',
    take: 'MARCO\'S TAKE — "You can\'t cheat a needle. That\'s why."',
  },
  {
    tag: 'POLITICS',
    mins: 6,
    time: '10:42 PM',
    title: 'European leaders quietly walk back AI regulation in late-night session.',
    body:
      'Behind closed doors in Brussels, the most contentious provisions of the AI Act enforcement framework were softened ahead of a Q3 implementation deadline, according to three sources familiar with the talks.',
    take: 'MARCO\'S TAKE — "The deal is always written in the room with no windows."',
  },
  {
    tag: 'ECONOMY',
    mins: 5,
    time: '9:15 PM',
    title: 'Italian espresso bars formally request UNESCO protection.',
    body:
      'A consortium of Italian café owners filed for UNESCO Intangible Cultural Heritage status this week, citing the disappearance of "the bar standing ritual" under chain-coffee pressure.',
    take: 'MARCO\'S TAKE — "If you have to ask UNESCO, you already lost."',
  },
  {
    tag: 'OBITS',
    mins: 3,
    time: '8:22 PM',
    title: 'Last surviving member of a forgotten 70s Italian library music label dies at 82.',
    body:
      'Giovanni Castellani, the keyboardist and de facto producer behind a tiny Bologna imprint whose untitled records now sell for four figures, passed away at home on Tuesday. He never gave an interview.',
    take: 'MARCO\'S TAKE — "Side B will outlive most of us. He knew."',
  },
  {
    tag: 'SPORT',
    mins: 4,
    time: '7:58 PM',
    title: 'Lazio fans light flares to mourn a draw, not a loss.',
    body:
      'In a scene that has split commentators for the third night running, the Stadio Olimpico erupted in pyrotechnic mourning after a 1-1 draw against a mid-table opponent.',
    take: 'MARCO\'S TAKE — "Italians mourn correctly. The rest of the world should take notes."',
  },
];
