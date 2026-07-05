import { cn } from '@/lib/utils';

export function Button(props: any) {
  const { variant = 'primary', className, children, disabled, href, ...rest } = props;
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300';

  const styles: Record<string, string> = {
    primary:
      'bg-white text-slate-900 shadow-lg shadow-slate-950/20 hover:-translate-y-0.5 hover:bg-slate-100',
    secondary:
      'border border-white/10 bg-white/5 text-white hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 light:border-slate-300 light:bg-white light:text-slate-800 light:hover:border-slate-400 light:hover:bg-slate-100',
    ghost: 'text-slate-300 hover:bg-white/5 hover:text-white light:text-slate-700 light:hover:bg-slate-100 light:hover:text-slate-900',
    accent:
      'bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/25 hover:-translate-y-0.5 light:border light:border-sky-300 light:from-sky-200 light:to-cyan-200 light:text-slate-900 light:shadow-[0_12px_32px_rgba(14,116,144,0.2)]',
  };

  const buttonClassName = cn(base, styles[variant] ?? styles.primary, disabled && 'cursor-not-allowed opacity-60 hover:translate-y-0', className);

  if (href !== undefined) {
    return (
      <a href={disabled ? undefined : href} aria-disabled={disabled || undefined} tabIndex={disabled ? -1 : undefined} className={buttonClassName} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={props.type ?? 'button'} className={buttonClassName} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
