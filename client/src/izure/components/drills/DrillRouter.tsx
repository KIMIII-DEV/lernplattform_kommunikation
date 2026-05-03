import type { QuizQuestion } from '../../types/learning';
import type { DrillResult } from './types';
import { MultipleChoiceDrill } from './MultipleChoiceDrill';
import { MultiSelectDrill } from './MultiSelectDrill';
import { ShortAnswerDrill } from './ShortAnswerDrill';
import { ClozeDrill } from './ClozeDrill';
import { MatchingDrill } from './MatchingDrill';
import { OrderingDrill } from './OrderingDrill';
import { ErrorSpotDrill } from './ErrorSpotDrill';
import { CaseDrill } from './CaseDrill';
import { TranslateDrill } from './TranslateDrill';

/**
 * Picks the right drill based on `question.type`.
 * Falls back to multiple-choice if `options` exist, else short-answer.
 *
 * Recognized type strings (case-insensitive, dashes/underscores normalized):
 *   multiple-choice, mc, single
 *   multi-select, multiselect, multi
 *   open, short-answer, kurzantwort
 *   cloze, lueckentext, lückentext, gap
 *   matching, zuordnung
 *   ordering, reihenfolge, sort
 *   error-spot, fehler-markieren, errspot
 *   case, praxisfall, scenario
 *   translate, fachsprache, übersetzung
 */
export function DrillRouter({
  question, onAnswer, active = true,
}: {
  question: QuizQuestion;
  onAnswer: (r: DrillResult) => void;
  active?: boolean;
}) {
  const t = String(question.type ?? '').toLowerCase().replace(/[\s_]/g, '-');

  if (/^(multi-select|multiselect|multi)$/.test(t)) {
    return <MultiSelectDrill question={question} onAnswer={onAnswer} active={active} />;
  }
  if (/^(open|short-answer|kurzantwort)$/.test(t)) {
    return <ShortAnswerDrill question={question} onAnswer={onAnswer} active={active} />;
  }
  if (/^(cloze|lueckentext|lückentext|gap)$/.test(t)) {
    return <ClozeDrill question={question} onAnswer={onAnswer} active={active} />;
  }
  if (/^(matching|zuordnung)$/.test(t)) {
    return <MatchingDrill question={question} onAnswer={onAnswer} active={active} />;
  }
  if (/^(ordering|reihenfolge|sort)$/.test(t)) {
    return <OrderingDrill question={question} onAnswer={onAnswer} active={active} />;
  }
  if (/^(error-spot|fehler-markieren|errspot)$/.test(t)) {
    return <ErrorSpotDrill question={question} onAnswer={onAnswer} active={active} />;
  }
  if (/^(case|praxisfall|scenario)$/.test(t)) {
    return <CaseDrill question={question} onAnswer={onAnswer} active={active} />;
  }
  if (/^(translate|fachsprache|übersetzung|uebersetzung)$/.test(t)) {
    return <TranslateDrill question={question} onAnswer={onAnswer} active={active} />;
  }
  // default
  if (Array.isArray(question.options) && question.options.length > 0) {
    return <MultipleChoiceDrill question={question} onAnswer={onAnswer} active={active} />;
  }
  return <ShortAnswerDrill question={question} onAnswer={onAnswer} active={active} />;
}
