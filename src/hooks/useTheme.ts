import { useEffect, useState } from 'react';

export type ThemeMode = 'dark' | 'light';

const storageKey = 'bill-gao-portfolio-theme';

function getInitialTheme(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'dark';
  }

  const stored = window.localStorage.getItem(storageKey);
  if (stored === 'dark' || stored === 'light') {
    return stored;
  }

  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    root.classList.toggle('dark', theme === 'dark');
    root.classList.toggle('light', theme === 'light');
    body.classList.toggle('light', theme === 'light');
    window.localStorage.setItem(storageKey, theme);
  }, [theme]);

  return {
    theme,
    setTheme,
    toggleTheme: () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
  };
}
