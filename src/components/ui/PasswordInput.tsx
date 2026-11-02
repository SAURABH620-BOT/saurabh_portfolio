import { forwardRef, useState } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Eye, EyeOff, Lock, AlertCircle, ShieldCheck } from 'lucide-react';
import type { InputProps } from './Input';

export interface PasswordInputProps extends Omit<InputProps, 'type' | 'leftIcon' | 'rightIcon'> {
  strength?: 'weak' | 'medium' | 'strong' | null;
  showStrengthIndicator?: boolean;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(({
  label = 'Security Verification / Password',
  error,
  helperText,
  strength,
  showStrengthIndicator = true,
  fullWidth = true,
  className,
  id,
  required,
  ...props
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputId = id || props.name || 'password-input';

  const strengthColorMap = {
    weak: 'bg-red-500 text-red-400',
    medium: 'bg-amber-500 text-amber-400',
    strong: 'bg-emerald-500 text-emerald-400',
  };

  const strengthWidthMap = {
    weak: 'w-1/3',
    medium: 'w-2/3',
    strong: 'w-full',
  };

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
          {showStrengthIndicator && strength && (
            <span className={clsx('text-[11px] font-medium capitalize flex items-center gap-1', strengthColorMap[strength].split(' ')[1])}>
              <ShieldCheck className="w-3 h-3" />
              {strength} Security
            </span>
          )}
        </label>
      )}

      <div className="relative flex items-center">
        <div className="absolute left-3.5 flex items-center pointer-events-none text-slate-400">
          <Lock className="w-4 h-4" />
        </div>

        <input
          ref={ref}
          id={inputId}
          type={showPassword ? 'text' : 'password'}
          className={twMerge(
            clsx(
              'w-full bg-obsidian-950/60 border rounded-xl py-3 pl-10 pr-11 text-sm text-slate-100 placeholder:text-slate-500 transition-all duration-200 outline-none',
              error
                ? 'border-red-500/80 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                : 'border-slate-800 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 hover:border-slate-700',
              className
            )
          )}
          {...props}
        />

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3.5 p-1 text-slate-400 hover:text-slate-200 focus:outline-none transition-colors"
          title={showPassword ? 'Hide value' : 'Show value'}
        >
          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      </div>

      {showStrengthIndicator && strength && (
        <div className="w-full bg-slate-800/60 rounded-full h-1 mt-1 overflow-hidden">
          <div
            className={clsx(
              'h-full transition-all duration-300 rounded-full',
              strengthColorMap[strength].split(' ')[0],
              strengthWidthMap[strength]
            )}
          />
        </div>
      )}

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

PasswordInput.displayName = 'PasswordInput';
