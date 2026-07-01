import { motion } from 'framer-motion';

export function ArchitectureDiagram() {
  const node = 'rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm text-slate-100 light:border-slate-200 light:bg-white light:text-slate-900';

  return (
    <div className="card-surface overflow-hidden p-5">
      <div className="grid gap-4">
        <div className="grid grid-cols-3 gap-3">
          <div className={node}>QA Workflow</div>
          <div className={node}>Python Scripts</div>
          <div className={node}>Reports</div>
        </div>
        <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.24em] text-slate-400">
          <span className="h-px w-16 bg-white/10 light:bg-slate-200" />
          flow
          <span className="h-px w-16 bg-white/10 light:bg-slate-200" />
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          <motion.div whileHover={{ y: -3 }} className={node}>
            ADB Commands
          </motion.div>
          <motion.div whileHover={{ y: -3 }} className={node}>
            Log Capture
          </motion.div>
          <motion.div whileHover={{ y: -3 }} className={node}>
            Data Parsing
          </motion.div>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <div className={node}>VR Device Validation</div>
          <div className={node}>Stress-test Reporting</div>
        </div>
      </div>
    </div>
  );
}
