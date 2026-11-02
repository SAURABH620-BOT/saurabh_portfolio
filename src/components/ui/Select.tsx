import React, { forwardRef } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ChevronDown, AlertCircle } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
  description?: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({
  label,
  options,
  error,
  helperText,
  fullWidth = true,
  className,
  id,
  required,
  children,
  ...props
}, ref) => {
  const selectId = id || props.name || Math.random().toString(36).substring(7);

  return (
    <div className={twMerge(clsx('flex flex-col gap-1.5', fullWidth && 'w-full'))}>
      {label && (
        <label
          htmlFor={selectId}
          className="text-xs font-semibold uppercase tracking-wider text-slate-300"
        >
          {label} {required && <span className="text-cyan-400">*</span>}
        </label>
      )}

      <div className="relative">
        <select
          ref={ref}
          id={selectId}
          className={twMerge(
            clsx(
              'w-full bg-obsidian-950/80 border rounded-xl py-3 pl-4 pr-10 text-sm text-slate-100 appearance-none cursor-pointer transition-all duration-200 outline-none',
              error
                ? 'border-red-500/80 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                : 'border-slate-800 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 hover:border-slate-700',
              className
            )
          )}
          {...props}
        >
          {options.map((opt) => (
            <option
              key={opt.value}
              value={opt.value}
              className="bg-obsidian-900 text-slate-100 py-2"
            >
              {opt.label}
            </option>
          ))}
          {children}
        </select>

        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
          <ChevronDown className="w-4 h-4" />
        </div>
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

Select.displayName = 'Select';

