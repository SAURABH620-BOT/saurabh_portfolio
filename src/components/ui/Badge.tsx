import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export type BadgeVariant = 'cyan' | 'emerald' | 'indigo' | 'amber' | 'slate' | 'outline';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
  emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
  indigo: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30',
  amber: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
  slate: 'bg-slate-800 text-slate-300 border-slate-700',
  outline: 'bg-transparent text-slate-300 border-slate-700 hover:border-slate-500',
};

const dotColors: Record<BadgeVariant, string> = {
  cyan: 'bg-cyan-400 shadow-[0_0_8px_#22d3ee]',
  emerald: 'bg-emerald-400 shadow-[0_0_8px_#34d399]',
  indigo: 'bg-indigo-400 shadow-[0_0_8px_#818cf8]',
  amber: 'bg-amber-400 shadow-[0_0_8px_#fbbf24]',
  slate: 'bg-slate-400',
  outline: 'bg-cyan-400',
};

export const Badge: React.FC<BadgeProps> = ({
  variant = 'cyan',
  size = 'md',
  dot = false,
  className,
  children,
  ...props
}) => {
  return (
    <span
      className={twMerge(
        clsx(
          'inline-flex items-center gap-1.5 font-medium rounded-full border transition-colors',
          size === 'sm' ? 'px-2.5 py-0.5 text-[11px]' : 'px-3 py-1 text-xs',
          variantStyles[variant],
          className
        )
      )}
      {...props}
    >
      {dot && (
        <span
          className={clsx('w-1.5 h-1.5 rounded-full shrink-0', dotColors[variant])}
        />
      )}
      <span>{children}</span>
    </span>
  );
};

