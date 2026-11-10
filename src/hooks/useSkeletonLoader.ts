import { useState, useEffect } from 'react';

export const useSkeletonLoader = (initialDurationMs: number = 0) => {
  const [isLoading, setIsLoading] = useState<boolean>(initialDurationMs > 0);

  useEffect(() => {
    if (initialDurationMs <= 0) return;

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, initialDurationMs);

    return () => clearTimeout(timer);
  }, [initialDurationMs]);

  const toggleLoading = () => {
    setIsLoading((prev) => !prev);
  };

  const triggerReload = (durationMs = 1200) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, durationMs);
  };

  return {
    isLoading,
    setIsLoading,
    toggleLoading,
    triggerReload,
  };
};
