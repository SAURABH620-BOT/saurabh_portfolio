import React from 'react';
import { SkeletonBase } from './SkeletonBase';

export const TechStackSkeleton: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="space-y-4 text-center max-w-3xl mx-auto mb-12">
        <SkeletonBase className="h-6 w-32 mx-auto rounded-full" />
        <SkeletonBase className="h-10 w-80 mx-auto" />
        <SkeletonBase className="h-4 w-2/3 mx-auto" />
      </div>

      {/* Category Filter Pills Skeleton */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {[1, 2, 3, 4, 5].map((i) => (
          <SkeletonBase key={i} className="h-10 w-32 rounded-xl" />
        ))}
      </div>

      {/* Grid skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <SkeletonBase circle className="w-9 h-9" />
                <SkeletonBase className="h-5 w-32" />
              </div>
              <SkeletonBase className="h-5 w-12 rounded-full" />
            </div>
            {/* Progress bar */}
            <SkeletonBase className="h-2 w-full rounded-full" />
            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              <SkeletonBase className="h-5 w-16 rounded-md" />
              <SkeletonBase className="h-5 w-20 rounded-md" />
              <SkeletonBase className="h-5 w-14 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

