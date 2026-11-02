import React, { forwardRef } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { AlertCircle } from 'lucide-react';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  maxCharacters?: number;
  fullWidth?: boolean;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({
  label,
  error,
  helperText,
  maxCharacters = 1000,
  fullWidth = true,
  className,
  id,
  required,
  value,
  ...props
}, ref) => {
  const inputId = id || props.name || Math.random().toString(36).substring(7);
  const currentLength = typeof value === 'string' ? value.length : 0;
  const isNearLimit = maxCharacters && currentLength > maxCharacters * 0.9;

  return (
    <div className={twMerge(clsx('flex flex-col gap-1.5', fullWidth && 'w-full'))}>
      <div className="flex items-center justify-between">
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs font-semibold uppercase tracking-wider text-slate-300"
          >
            {label} {required && <span className="text-cyan-400">*</span>}
          </label>
        )}
        {maxCharacters && (
          <span
            className={clsx(
              'text-[11px] font-mono transition-colors',
              isNearLimit ? 'text-amber-400 font-semibold' : 'text-slate-400'
            )}
          >
            {currentLength}/{maxCharacters}
          </span>
        )}
      </div>

      <div className="relative">
        <textarea
          ref={ref}
          id={inputId}
          rows={4}
          value={value}
          maxLength={maxCharacters}
          className={twMerge(
            clsx(
              'w-full bg-obsidian-950/60 border rounded-xl p-3.5 text-sm text-slate-100 placeholder:text-slate-500 transition-all duration-200 outline-none resize-y min-h-[110px]',
              error
                ? 'border-red-500/80 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                : 'border-slate-800 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 hover:border-slate-700',
              className
            )
          )}
          {...props}
        />
      </div>

      {error ? (
        <p className="text-xs text-red-400 flex items-center gap-1 mt-0.5">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{error}</span>
        </p>
      ) : helperText ? (
        <p className="text-xs text-slate-400 mt-0.5">{helperText}</p>
      ) : null}
    </div>
  );
});

TextArea.displayName = 'TextArea';

