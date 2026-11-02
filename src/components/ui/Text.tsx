import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export type TextVariant = 'lead' | 'body' | 'muted' | 'caption' | 'code';

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: TextVariant;
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<TextVariant, string> = {
  lead: 'text-lg sm:text-xl text-slate-300 font-normal leading-relaxed',
  body: 'text-base text-slate-300 leading-relaxed',
  muted: 'text-sm text-slate-400 leading-normal',
  caption: 'text-xs uppercase tracking-wider text-cyan-400 font-semibold',
  code: 'font-mono text-sm text-emerald-400 bg-obsidian-950/80 px-2 py-0.5 rounded border border-slate-800',
};

export const Text: React.FC<TextProps> = ({
  variant = 'body',
  className,
  children,
  ...props
}) => {
  return (
    <p
      className={twMerge(clsx(variantStyles[variant], className))}
      {...props}
    >
      {children}
    </p>
  );
};

