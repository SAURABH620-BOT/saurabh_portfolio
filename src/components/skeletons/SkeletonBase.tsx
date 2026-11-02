import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  circle?: boolean;
}

export const SkeletonBase: React.FC<SkeletonProps> = ({
  className,
  circle = false,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        clsx(
          'relative overflow-hidden bg-slate-800/50 before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent',
          circle ? 'rounded-full' : 'rounded-xl',
          className
        )
      )}
      {...props}
    />
  );
};

