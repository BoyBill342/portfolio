import { MoonStar, SunMedium } from 'lucide-react';
import { motion } from 'framer-motion';

export function ThemeToggle({
  theme,
  onToggle,
}: {
  theme: 'dark' | 'light';
  onToggle: () => void;
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      onClick={onToggle}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10 light:border-slate-200 light:bg-slate-100 light:text-slate-700 light:hover:bg-slate-200"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      type="button"
    >
      {theme === 'dark' ? <SunMedium size={18} /> : <MoonStar size={18} />}
    </motion.button>
  );
}
