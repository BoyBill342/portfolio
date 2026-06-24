import { ArrowUp } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 300);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-white shadow-xl shadow-slate-950/30 backdrop-blur-md transition hover:-translate-y-1 hover:bg-slate-800 light:border-slate-200 light:bg-white light:text-slate-800"
          aria-label="Scroll back to top"
          type="button"
        >
          <ArrowUp size={18} />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
