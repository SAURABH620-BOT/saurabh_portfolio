import React from 'react';
import { SkeletonBase } from './SkeletonBase';

export const ServicesSkeleton: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="space-y-4 text-center max-w-3xl mx-auto mb-16">
        <SkeletonBase className="h-6 w-32 mx-auto rounded-full" />
        <SkeletonBase className="h-10 w-96 mx-auto" />
        <SkeletonBase className="h-4 w-3/4 mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-6">
            <div className="flex items-start justify-between">
              <SkeletonBase circle className="w-14 h-14" />
              <SkeletonBase className="h-6 w-24 rounded-full" />
            </div>
            <SkeletonBase className="h-7 w-2/3" />
            <SkeletonBase className="h-4 w-full" />
            <SkeletonBase className="h-4 w-5/6" />

            <div className="space-y-2 pt-2 border-t border-slate-800">
              <SkeletonBase className="h-3.5 w-4/5" />
              <SkeletonBase className="h-3.5 w-3/4" />
              <SkeletonBase className="h-3.5 w-5/6" />
            </div>

            <div className="pt-2 flex justify-between items-center">
              <SkeletonBase className="h-4 w-28" />
              <SkeletonBase className="h-9 w-32 rounded-xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

