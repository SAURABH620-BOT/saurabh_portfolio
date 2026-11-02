import React from 'react';
import { SkeletonBase } from './SkeletonBase';

export const InquirySkeleton: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto rounded-3xl bg-slate-900/40 border border-slate-800 p-8 sm:p-12 space-y-8">
        <div className="space-y-3 text-center max-w-xl mx-auto">
          <SkeletonBase className="h-6 w-32 mx-auto rounded-full" />
          <SkeletonBase className="h-9 w-3/4 mx-auto" />
          <SkeletonBase className="h-4 w-5/6 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <SkeletonBase className="h-4 w-24" />
            <SkeletonBase className="h-12 w-full rounded-xl" />
          </div>
          <div className="space-y-2">
            <SkeletonBase className="h-4 w-28" />
            <SkeletonBase className="h-12 w-full rounded-xl" />
          </div>
          <div className="space-y-2">
            <SkeletonBase className="h-4 w-32" />
            <SkeletonBase className="h-12 w-full rounded-xl" />
          </div>
          <div className="space-y-2">
            <SkeletonBase className="h-4 w-36" />
            <SkeletonBase className="h-12 w-full rounded-xl" />
          </div>
        </div>

        <div className="space-y-2">
          <SkeletonBase className="h-4 w-32" />
          <SkeletonBase className="h-28 w-full rounded-xl" />
        </div>

        <div className="flex justify-end pt-4">
          <SkeletonBase className="h-12 w-48 rounded-xl" />
        </div>
      </div>
    </div>
  );
};

