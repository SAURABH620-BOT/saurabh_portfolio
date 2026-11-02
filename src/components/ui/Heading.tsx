import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps {
  level?: HeadingLevel;
  gradient?: boolean;
  animate?: boolean;
  accentText?: string;
  className?: string;
  children: React.ReactNode;
  id?: string;
}

const levelStyles: Record<HeadingLevel, string> = {
  h1: 'text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight',
  h2: 'text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight',
  h3: 'text-2xl sm:text-3xl font-bold tracking-tight',
  h4: 'text-xl sm:text-2xl font-semibold',
  h5: 'text-lg sm:text-xl font-semibold',
  h6: 'text-base sm:text-lg font-medium tracking-wide uppercase',
};

export const Heading: React.FC<HeadingProps> = ({
  level = 'h2',
  gradient = false,
  animate = false,
  accentText,
  className,
  children,
  id,
}) => {
  const Component = level;
  
  const baseClasses = twMerge(
    clsx(
      levelStyles[level],
      gradient && 'bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent',
      !gradient && 'text-slate-100',
      className
    )
  );

  const content = (
    <>
      {children}
      {accentText && (
        <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent ml-2">
          {accentText}
        </span>
      )}
    </>
  );

  if (animate) {
    const MotionComponent = motion[level];
    return (
      <MotionComponent
        id={id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={baseClasses}
      >
        {content}
      </MotionComponent>
    );
  }

  return (
    <Component id={id} className={baseClasses}>
      {content}
    </Component>
  );
};
