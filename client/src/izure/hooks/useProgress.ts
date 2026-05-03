import { useCallback, useEffect, useState } from 'react';
import type { AppProgress, LernfeldId, LernfeldProgress } from '../types/learning';
import { emptyAppProgress, emptyLfProgress } from '../lib/dataAdapter';

const STORAGE_KEY = 'izure.progress.v1';

function load(): AppProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyAppProgress();
    const parsed = JSON.parse(raw) as AppProgress;
    // Defensiv: garantieren, dass alle LFs existieren
    const base = emptyAppProgress();
    for (const k of Object.keys(base.modules) as LernfeldId[]) {
      if (!parsed.modules?.[k]) parsed.modules = { ...base.modules, ...(parsed.modules ?? {}) };
    }
    return parsed;
  } catch {
    return emptyAppProgress();
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<AppProgress>(load);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); } catch { /* noop */ }
  }, [progress]);

  const patchLF = useCallback((id: LernfeldId, patch: (p: LernfeldProgress) => LernfeldProgress) => {
    setProgress((prev) => {
      const cur = prev.modules[id] ?? emptyLfProgress();
      return {
        ...prev,
        lastSeen: Date.now(),
        modules: { ...prev.modules, [id]: patch(cur) },
      };
    });
  }, []);

  const reset = useCallback(() => setProgress(emptyAppProgress()), []);

  return { progress, setProgress, patchLF, reset };
}
