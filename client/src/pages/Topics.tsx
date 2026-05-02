import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Topic } from '@/lib/learningData';
import { useLearningProgress } from '@/hooks/useLearningProgress';
import { CheckCircle, Circle, ChevronDown, ChevronUp } from 'lucide-react';
import { Streamdown } from 'streamdown';

interface TopicsPageProps {
  topics: Topic[];
}

export default function TopicsPage({ topics }: TopicsPageProps) {
  const [expandedTopic, setExpandedTopic] = useState<string | null>(topics[0]?.id);
  const { progress, markTopicComplete } = useLearningProgress();

  if (topics.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-[#888888] uppercase tracking-widest font-bold">
          ▶ KEINE MODULE VERFÜGBAR ◀
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="adhs-section">
        <h2 className="adhs-section-title">▶ MODULE ◀</h2>
        <p className="text-sm text-[#888888] leading-relaxed">
          Kerninhalte sequentiell bearbeiten. Jeden Node erst abschließen wenn Wissen sicher abrufbar.
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
                isExpanded ? 'border-[#cc0000]' : ''
              }`}
            >
              <button
                onClick={() => setExpandedTopic(isExpanded ? null : topic.id)}
                className="w-full p-4 flex items-center justify-between hover:bg-[#2a1010]/50 transition-colors"
              >
                <div className="flex items-center gap-4 text-left flex-1">
                  {isCompleted ? (
                    <CheckCircle className="w-6 h-6 text-[#c8a96a] flex-shrink-0" />
                  ) : (
                    <Circle className="w-6 h-6 text-[#cc0000] flex-shrink-0" />
                  )}
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-lg uppercase tracking-widest text-[#e8e8e8]">
                        {topic.title}
                      </h3>
                      {topic.examRelevance === 'high' && (
                        <span className="bg-[#390007] border border-[#cc0000] text-[10px] px-2 py-0.5 font-black text-[#cc0000] uppercase tracking-widest">
                          KRITISCHER KERNINHALT
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#888888] mt-1">
                      {topic.description}
                    </p>
                  </div>
                </div>
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-[#cc0000] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#888888] flex-shrink-0" />
                )}
              </button>

              {/* Expanded Content */}
              {isExpanded && (
                <div className="border-t-2 border-[#390007] p-6 bg-[#0e0e0e]">
                  <div className="prose prose-invert max-w-none mb-6">
                    <Streamdown>{topic.content}</Streamdown>
                  </div>

                  {/* Key Points */}
                  {topic.keyPoints && topic.keyPoints.length > 0 && (
                    <div className="mb-6 p-4 border-l-4 border-[#c8a96a] bg-[#c8a96a]/5">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-bold text-[#c8a96a] uppercase tracking-widest">
                          ▶ CORE CONTENT ◀
                        </h4>
                        <span className="text-[10px] font-bold text-[#c8a96a]/60 uppercase tracking-widest">
                          KEY NODES
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {topic.keyPoints.map((point, idx) => (
                          <li key={idx} className="text-sm text-[#e8e8e8] flex gap-2">
                            <span className="text-[#c8a96a] font-bold">▸</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Error Trap */}
                  {(topic as any).errorTrap && (
                    <div className="mb-6 p-4 border-l-4 border-[#cc0000] bg-[#cc0000]/5">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-bold text-[#cc0000] uppercase tracking-widest">
                          ⚠ CRITICAL TRAP
                        </h4>
                        <span className="text-[10px] font-bold text-[#cc0000]/60 uppercase tracking-widest">
                          AVOID FAILURE
                        </span>
                      </div>
                      <p className="text-sm text-[#e8e8e8]">{(topic as any).errorTrap}</p>
                    </div>
                  )}

                  {/* Memo */}
                  {(topic as any).memo && (
                    <div className="mb-6 p-4 border-l-4 border-[#c8a96a] bg-[#c8a96a]/5">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-bold text-[#c8a96a] uppercase tracking-widest">
                          ▶ INTEL NOTE
                        </h4>
                        <span className="text-[10px] font-bold text-[#c8a96a]/60 uppercase tracking-widest">
                          RETAIN
                        </span>
                      </div>
                      <p className="text-sm text-[#e8e8e8]">{(topic as any).memo}</p>
                    </div>
                  )}

                  {/* Completion Button */}
                  <div className="flex gap-3">
                    {!isCompleted ? (
                      <Button
                        onClick={() => markTopicComplete(topic.id)}
                        className="flex-1 bg-[#390007] hover:bg-[#cc0000] text-[#e8e8e8] font-bold uppercase tracking-widest border border-[#cc0000]"
                      >
                        ▶ MODULE ABSCHLIESSEN ◀
                      </Button>
                    ) : (
                      <Button
                        disabled
                        className="flex-1 bg-[#1a0a0a] text-[#c8a96a] font-bold uppercase tracking-widest border border-[#c8a96a] opacity-80"
                      >
                        ✓ CLEARED
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Intel Note */}
      <div className="adhs-section mt-8 border-l-4 border-[#c8a96a]">
        <div className="text-[#c8a96a] font-bold uppercase tracking-widest mb-2">▶ PROTOCOL ◀</div>
        <p className="text-sm leading-relaxed text-[#888888]">
          Module sequentiell bearbeiten. Einen Node erst abschließen wenn die Kernpunkte sicher wiedergegeben werden können.
          Dies ist die Basis für die anschließende Simulation.
        </p>
      </div>
    </div>
  );
}
