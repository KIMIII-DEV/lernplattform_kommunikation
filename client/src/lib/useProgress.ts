import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'izure.progress.v2';

export interface ModuleProgress {
  started?: boolean;
  completed?: boolean;
  score?: number;
  attempts?: number;
}

export interface Progress {
  modules: Record<string, ModuleProgress>;
  streak: number;
  lastSeen: string | null;
}

const DEFAULT_PROGRESS: Progress = { modules: {}, streak: 7, lastSeen: null };

function load(): Progress {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v ? { ...DEFAULT_PROGRESS, ...JSON.parse(v) } : DEFAULT_PROGRESS;
  } catch {
    return DEFAULT_PROGRESS;
  }
}

function save(p: Progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch {
    /* ignore */
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(load);

  useEffect(() => {
    save(progress);
  }, [progress]);

  const startModule = useCallback((id: string) => {
    setProgress((p) => ({
      ...p,
      modules: { ...p.modules, [id]: { ...(p.modules[id] || {}), started: true } },
    }));
  }, []);

  const completeModule = useCallback((id: string, score: number) => {
    setProgress((p) => ({
      ...p,
      modules: {
        ...p.modules,
        [id]: {
          ...(p.modules[id] || {}),
          completed: true,
          score: Math.max(p.modules[id]?.score || 0, score),
          attempts: (p.modules[id]?.attempts || 0) + 1,
        },
      },
    }));
  }, []);

  const reset = useCallback(() => setProgress(DEFAULT_PROGRESS), []);

  return { progress, startModule, completeModule, reset };
}
