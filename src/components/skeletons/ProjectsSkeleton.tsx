import React from 'react';
import { SkeletonBase } from './SkeletonBase';

export const ProjectsSkeleton: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="space-y-4 text-center max-w-3xl mx-auto mb-16">
        <SkeletonBase className="h-6 w-36 mx-auto rounded-full" />
        <SkeletonBase className="h-10 w-96 mx-auto" />
        <SkeletonBase className="h-4 w-2/3 mx-auto" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="rounded-2xl bg-slate-900/40 border border-slate-800 overflow-hidden space-y-5 p-6">
            <div className="flex items-center justify-between">
              <SkeletonBase className="h-6 w-28 rounded-full" />
              <SkeletonBase className="h-4 w-32" />
            </div>
            <SkeletonBase className="h-7 w-4/5" />
            <SkeletonBase className="h-4 w-full" />
            <SkeletonBase className="h-4 w-3/4" />

            {/* Highlights */}
            <div className="space-y-2.5 p-4 rounded-xl bg-slate-950/40 border border-slate-800/80">
              <SkeletonBase className="h-3.5 w-11/12" />
              <SkeletonBase className="h-3.5 w-4/5" />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              <SkeletonBase className="h-6 w-16 rounded-md" />
              <SkeletonBase className="h-6 w-24 rounded-md" />
              <SkeletonBase className="h-6 w-20 rounded-md" />
              <SkeletonBase className="h-6 w-18 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

