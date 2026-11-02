import React, { forwardRef } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { AlertCircle } from 'lucide-react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  fullWidth = true,
  className,
  id,
  required,
  ...props
}, ref) => {
  const inputId = id || props.name || Math.random().toString(36).substring(7);

  return (
    <div className={twMerge(clsx('flex flex-col gap-1.5', fullWidth && 'w-full'))}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center justify-between"
        >
          <span>
            {label} {required && <span className="text-cyan-400">*</span>}
          </span>
        </label>
      )}

      <div className="relative flex items-center">
        {leftIcon && (
          <div className="absolute left-3.5 flex items-center pointer-events-none text-slate-400">
            {leftIcon}
          </div>
        )}

        <input
          ref={ref}
          id={inputId}
          className={twMerge(
            clsx(
              'w-full bg-obsidian-950/60 border rounded-xl py-3 text-sm text-slate-100 placeholder:text-slate-500 transition-all duration-200 outline-none',
              leftIcon ? 'pl-10' : 'pl-4',
              rightIcon || error ? 'pr-10' : 'pr-4',
              error
                ? 'border-red-500/80 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                : 'border-slate-800 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 hover:border-slate-700',
              className
            )
          )}
          {...props}
        />

        {rightIcon && !error && (
          <div className="absolute right-3.5 flex items-center text-slate-400">
            {rightIcon}
          </div>
        )}

        {error && (
          <div className="absolute right-3.5 flex items-center text-red-400 pointer-events-none">
            <AlertCircle className="w-4 h-4" />
          </div>
        )}
      </div>

      {error ? (
        <p className="text-xs text-red-400 flex items-center gap-1 mt-0.5 animate-fadeIn">
          <span>{error}</span>
        </p>
      ) : helperText ? (
        <p className="text-xs text-slate-400 mt-0.5">{helperText}</p>
      ) : null}
    </div>
  );
});

Input.displayName = 'Input';

