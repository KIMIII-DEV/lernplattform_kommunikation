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
    <div className="space-y-6">
      {/* Header */}
      <div className="adhs-section">
        <h2 className="adhs-section-title">▶ LERNTHEMEN ◀</h2>
        <p className="text-sm text-gray-300 leading-relaxed">
          Lerne die Grundlagen Schritt für Schritt. Jedes Thema ist kurz und verständlich aufbereitet.
        </p>
      </div>

      {/* Topics List */}
      <div className="space-y-3">
        {topics.map((topic) => {
          const isCompleted = progress.completedTopics.includes(topic.id);
          const isExpanded = expandedTopic === topic.id;

          return (
            <div
              key={topic.id}
              className={`quiz-card overflow-hidden transition-all ${
                isExpanded ? 'border-cyan-400 bg-cyan-500/10' : ''
              }`}
            >
              <button
                onClick={() =>
                  setExpandedTopic(isExpanded ? null : topic.id)
                }
                className="w-full p-4 flex items-center justify-between hover:bg-gray-800/50 transition-colors"
              >
                <div className="flex items-center gap-4 text-left flex-1">
                  {isCompleted ? (
                    <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  ) : (
                    <Circle className="w-6 h-6 text-pink-500 flex-shrink-0" />
                  )}
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-lg uppercase tracking-widest text-white">
                        {topic.title}
                      </h3>
                      {topic.examRelevance === 'high' && (
                        <span className="bg-pink-600 text-[10px] px-2 py-0.5 rounded-full font-black text-white animate-pulse">
                          PRÜFUNGSRELEVANT
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-400 mt-1">
                      {topic.description}
                    </p>
                  </div>
                </div>
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-pink-500 flex-shrink-0" />
                )}
              </button>

              {/* Expanded Content */}
              {isExpanded && (
                <div className="border-t-2 border-gray-700 p-6 bg-black/50">
                  <div className="prose prose-invert max-w-none mb-6">
                    <Streamdown>{topic.content}</Streamdown>
                  </div>

                  {/* Key Points */}
                  {topic.keyPoints && topic.keyPoints.length > 0 && (
                    <div className="mb-6 p-4 border-l-4 border-yellow-400 bg-yellow-400/5 rounded-sm">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-bold text-yellow-400 uppercase tracking-widest">
                          ▶ WICHTIGE PUNKTE ◀
                        </h4>
                        <span className="text-[10px] font-bold text-yellow-400/60">IHK 1.0 FOKUS</span>
                      </div>
                      <ul className="space-y-2">
                        {topic.keyPoints.map((point, idx) => (
                          <li key={idx} className="text-sm text-gray-200 flex gap-2">
                            <span className="text-yellow-400 font-bold">▸</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}



                  {/* Completion Button */}
                  <div className="flex gap-3">
                    {!isCompleted ? (
                      <Button
                        onClick={() => markTopicComplete(topic.id)}
                        className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-black font-bold uppercase tracking-widest rounded-sm"
                      >
                        ▶ ALS ERLEDIGT MARKIEREN ◀
                      </Button>
                    ) : (
                      <Button
                        disabled
                        className="flex-1 bg-gray-700 text-gray-400 font-bold uppercase tracking-widest rounded-sm"
                      >
                        ✓ ERLEDIGT
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Study Tip */}
      <div className="adhs-section mt-8 border-l-4 border-yellow-400">
        <div className="text-yellow-400 font-bold uppercase tracking-widest mb-2">▶ LERNHINWEIS ◀</div>
        <p className="text-sm leading-relaxed text-gray-300">
          Bearbeiten Sie die Themen sequentiell. Markieren Sie ein Thema erst dann als erledigt, wenn Sie die Kernpunkte sicher wiedergeben können. Dies ist die Basis für die anschließenden Quizfragen.
        </p>
      </div>
    </div>
  );
}
