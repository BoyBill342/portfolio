import { Menu, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BrandMark } from './BrandMark';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';
import { site } from '@/data/site';

const links = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export function Navbar({
  activeSection,
  theme,
  setTheme,
}: {
  activeSection: string;
  theme: 'dark' | 'light';
  setTheme: (value: 'dark' | 'light') => void;
}) {
  const [open, setOpen] = useState(false);
  const items = useMemo(() => links, []);

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl light:border-slate-200 light:bg-slate-50/80">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <a href="#home" className="flex items-center gap-3">
          <BrandMark />
          <div>
            <div className="text-sm font-semibold text-white light:text-slate-900">{site.name}</div>
            <div className="text-xs text-slate-400 light:text-slate-500">{site.role}</div>
          </div>
        </a>

        <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-2 backdrop-blur-md lg:flex light:border-slate-200 light:bg-white/70">
          {items.map((item) => {
            const active = activeSection === item.id;
            return (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  'rounded-full px-4 py-2 text-sm transition-colors',
                  active
                    ? 'bg-white text-slate-900 shadow-sm light:bg-slate-900 light:text-white'
                    : 'text-slate-300 hover:text-white light:text-slate-600 light:hover:text-slate-900',
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 lg:hidden light:border-slate-200 light:bg-slate-100 light:text-slate-700"
            onClick={() => setOpen((value) => !value)}
            type="button"
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="border-t border-white/5 bg-slate-950/95 px-6 py-4 backdrop-blur-xl lg:hidden light:border-slate-200 light:bg-slate-50/95"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {items.map((item) => {
                const active = activeSection === item.id;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'rounded-2xl px-4 py-3 text-sm transition-colors',
                      active
                        ? 'bg-white text-slate-900 light:bg-slate-900 light:text-white'
                        : 'text-slate-300 hover:bg-white/5 light:text-slate-700 light:hover:bg-slate-100',
                    )}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
