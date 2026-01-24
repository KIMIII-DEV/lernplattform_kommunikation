import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { topics } from '@/lib/learningData';
import { useLearningProgress } from '@/hooks/useLearningProgress';
import { CheckCircle, Circle, ChevronDown, ChevronUp } from 'lucide-react';
import { Streamdown } from 'streamdown';

export default function TopicsPage() {
  const [expandedTopic, setExpandedTopic] = useState<string | null>(topics[0]?.id);
  const { progress, markTopicComplete } = useLearningProgress();

  return (
    <div className="space-y-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">📚 Lernthemen</h2>
        <p className="text-muted-foreground">
          Lerne die Grundlagen Schritt für Schritt. Jedes Thema ist kurz und
          verständlich aufbereitet.
        </p>
      </div>

      {topics.map((topic) => {
        const isCompleted = progress.completedTopics.includes(topic.id);
        const isExpanded = expandedTopic === topic.id;

        return (
          <Card
            key={topic.id}
            className={`overflow-hidden transition-all ${
              isExpanded ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <button
              onClick={() =>
                setExpandedTopic(isExpanded ? null : topic.id)
              }
              className="w-full p-4 flex items-center justify-between hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-center gap-3 text-left flex-1">
                {isCompleted ? (
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                ) : (
                  <Circle className="w-6 h-6 text-slate-300 flex-shrink-0" />
                )}
                <div>
                  <h3 className="font-semibold text-lg">{topic.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {topic.description}
                  </p>
                </div>
              </div>
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              )}
            </button>

            {isExpanded && (
              <div className="border-t border-slate-200 dark:border-slate-800 p-6 bg-slate-50 dark:bg-slate-900/50">
                <div className="prose dark:prose-invert max-w-none mb-6">
                  <Streamdown>{topic.content}</Streamdown>
                </div>

                {/* Key Points */}
                <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-sm mb-3 text-blue-900 dark:text-blue-100">
                    🎯 Wichtigste Punkte:
                  </h4>
                  <ul className="space-y-2">
                    {topic.keyPoints.map((point, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-blue-800 dark:text-blue-200 flex gap-2"
                      >
                        <span className="text-blue-600 dark:text-blue-400 font-bold">
                          •
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Complete Button */}
                <Button
                  onClick={() => markTopicComplete(topic.id)}
                  variant={isCompleted ? 'outline' : 'default'}
                  className="w-full"
                >
                  {isCompleted ? '✓ Verstanden' : 'Als verstanden markieren'}
                </Button>
              </div>
            )}
          </Card>
        );
      })}

      {/* Motivation */}
      <Card className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950 border-purple-200 dark:border-purple-800 p-6 text-center">
        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
          💪 Gut gemacht! Du machst Fortschritte. Weiter so!
        </p>
      </Card>
    </div>
  );
}
