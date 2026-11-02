import React from 'react';
import { SkeletonBase } from './SkeletonBase';

export const HeroSkeleton: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content Skeleton */}
        <div className="lg:col-span-7 space-y-6">
          {/* Badge */}
          <div className="flex items-center gap-3">
            <SkeletonBase className="h-7 w-48 rounded-full" />
            <SkeletonBase className="h-7 w-32 rounded-full" />
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <SkeletonBase className="h-12 sm:h-14 w-3/4" />
            <SkeletonBase className="h-12 sm:h-14 w-full" />
          </div>

          {/* Bio text */}
          <div className="space-y-2.5 pt-2">
            <SkeletonBase className="h-4 w-full" />
            <SkeletonBase className="h-4 w-5/6" />
            <SkeletonBase className="h-4 w-4/6" />
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <SkeletonBase className="h-12 w-44 rounded-xl" />
            <SkeletonBase className="h-12 w-40 rounded-xl" />
          </div>

          {/* Metric counters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-2">
                <SkeletonBase className="h-8 w-16" />
                <SkeletonBase className="h-3 w-24" />
              </div>
            ))}
          </div>
        </div>

        {/* Right Avatar Skeleton */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative p-3 rounded-3xl bg-slate-800/30 border border-slate-700/50">
            <SkeletonBase className="w-72 h-80 sm:w-80 sm:h-96 rounded-2xl" />
            <div className="absolute -bottom-4 -left-4 p-3 bg-slate-900 border border-slate-700 rounded-xl flex items-center gap-3">
              <SkeletonBase circle className="w-10 h-10" />
              <div className="space-y-1.5">
                <SkeletonBase className="h-3 w-24" />
                <SkeletonBase className="h-2.5 w-16" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

