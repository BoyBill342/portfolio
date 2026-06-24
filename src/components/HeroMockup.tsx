import { motion } from 'framer-motion';

export function HeroMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/80 p-4 shadow-soft backdrop-blur-xl light:border-slate-200 light:bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.2),transparent_42%)]" />
      <div className="relative flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 light:border-slate-200 light:bg-slate-50">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Dashboard</p>
          <p className="mt-1 text-sm font-medium text-white light:text-slate-900">QA Session Overview</p>
        </div>
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-blue-400" />
          <span className="h-3 w-3 rounded-full bg-cyan-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>
      </div>

      <div className="relative mt-4 grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="rounded-3xl border border-white/10 bg-slate-900/80 p-5 light:border-slate-200 light:bg-white"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Automation</p>
              <h3 className="mt-2 text-lg font-semibold text-white light:text-slate-900">Device Health</h3>
            </div>
            <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-medium text-emerald-300 light:text-emerald-700">
              Stable
            </span>
          </div>
          <div className="mt-6 space-y-4">
            {[78, 62, 91].map((value, index) => (
              <div key={index}>
                <div className="mb-2 flex justify-between text-xs text-slate-400 light:text-slate-500">
                  <span>Workflow {index + 1}</span>
                  <span>{value}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10 light:bg-slate-100">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${value}%` }}
                    transition={{ duration: 0.8, delay: 0.1 * index }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-5 light:border-slate-200 light:bg-slate-50"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Connected</p>
            <p className="mt-2 text-2xl font-semibold text-white light:text-slate-900">12 devices</p>
            <p className="mt-3 text-sm text-slate-300 light:text-slate-600">Android + VR test targets online</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-5 light:border-slate-200 light:bg-slate-50"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Checks</p>
            <div className="mt-4 flex items-end gap-3">
              {[44, 68, 54, 82, 74].map((height, index) => (
                <motion.div
                  key={index}
                  initial={{ height: 0 }}
                  animate={{ height }}
                  transition={{ duration: 0.75, delay: 0.08 * index }}
                  className="flex-1 rounded-t-2xl bg-gradient-to-t from-blue-500 to-cyan-400"
                  style={{ minHeight: 14 }}
                />
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-300 light:text-slate-600">Automation coverage trending upward</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
