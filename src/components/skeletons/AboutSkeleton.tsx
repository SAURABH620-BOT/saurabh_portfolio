import React from 'react';
import { SkeletonBase } from './SkeletonBase';

export const AboutSkeleton: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="space-y-4 text-center max-w-3xl mx-auto mb-16">
        <SkeletonBase className="h-6 w-36 mx-auto rounded-full" />
        <SkeletonBase className="h-10 w-96 mx-auto" />
        <SkeletonBase className="h-4 w-3/4 mx-auto" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4">
            <SkeletonBase circle className="w-12 h-12" />
            <SkeletonBase className="h-6 w-3/4" />
            <div className="space-y-2">
              <SkeletonBase className="h-4 w-full" />
              <SkeletonBase className="h-4 w-5/6" />
              <SkeletonBase className="h-4 w-4/6" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

