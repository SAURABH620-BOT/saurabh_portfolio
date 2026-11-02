import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  glowEffect?: 'cyan' | 'emerald' | 'indigo' | 'none';
  variant?: 'glass' | 'solid' | 'bordered';
  hoverEffect?: boolean;
  className?: string;
  children: React.ReactNode;
}

const glowClasses = {
  cyan: 'hover:border-cyan-500/40 hover:shadow-glow-cyan',
  emerald: 'hover:border-emerald-500/40 hover:shadow-glow-emerald',
  indigo: 'hover:border-indigo-500/40 hover:shadow-glow-indigo',
  none: '',
};

export const Card: React.FC<CardProps> = ({
  glowEffect = 'cyan',
  variant = 'glass',
  hoverEffect = true,
  className,
  children,
  ...props
}) => {
  const variantStyles = {
    glass: 'bg-slate-900/40 backdrop-blur-xl border border-slate-800/80',
    solid: 'bg-obsidian-850 border border-slate-800',
    bordered: 'bg-transparent border border-slate-800 hover:border-slate-700',
  };

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.25, ease: 'easeOut' } } : undefined}
      className={twMerge(
        clsx(
          'rounded-2xl p-6 transition-all duration-300 relative overflow-hidden',
          variantStyles[variant],
          hoverEffect && glowClasses[glowEffect],
          className
        )
      )}
      {...props}
    >
      {/* Top subtle highlight line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      {children}
    </motion.div>
  );
};
