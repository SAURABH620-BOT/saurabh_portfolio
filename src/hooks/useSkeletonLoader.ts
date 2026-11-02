import { useState, useEffect } from 'react';

export const useSkeletonLoader = (initialDurationMs: number = 800) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
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

