import { motion } from 'framer-motion';

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950"
    >
      <div className="flex flex-col items-center gap-5">
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 animate-pulse rounded-full bg-blue-400" />
          <div className="h-3 w-3 animate-pulse rounded-full bg-cyan-400 [animation-delay:150ms]" />
          <div className="h-3 w-3 animate-pulse rounded-full bg-sky-300 [animation-delay:300ms]" />
        </div>
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-300">Loading portfolio</p>
      </div>
    </motion.div>
  );
}
