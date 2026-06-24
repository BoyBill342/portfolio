import { AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { ScrollProgressBar } from '@/components/ScrollProgressBar';
import { ScrollToTop } from '@/components/ScrollToTop';
import { LoadingScreen } from '@/components/LoadingScreen';
import { Navbar } from '@/components/Navbar';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { useTheme } from '@/hooks/useTheme';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Skills } from '@/sections/Skills';
import { Projects } from '@/sections/Projects';
import { Experience } from '@/sections/Experience';
import { Contact } from '@/sections/Contact';
import { NotFound } from '@/pages/NotFound';

const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

function PortfolioPage() {
  const { theme, setTheme } = useTheme();
  const progress = useScrollProgress();
  const activeSection = useActiveSection(sectionIds);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1100);
    return () => window.clearTimeout(timer);
  }, []);

  const pageClass = useMemo(() => (theme === 'light' ? 'light' : 'dark'), [theme]);

  return (
    <div className={pageClass}>
      <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white transition-colors duration-300 light:bg-slate-50 light:text-slate-900">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_34%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.6),transparent)] light:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.85),transparent)]" />

        <ScrollProgressBar progress={progress} />
        <Navbar activeSection={activeSection} theme={theme} setTheme={setTheme} />

        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>

      <ScrollToTop />

      <AnimatePresence>{loading ? <LoadingScreen /> : null}</AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}