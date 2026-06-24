import { motion } from 'framer-motion';

const labels: Record<string, string[]> = {
  'vr-shooter': ['Unity Scene', 'Combat Loop', 'Haptics'],
  'command-center': ['ADB', 'Fastboot', 'Logs'],
  'ai-notes': ['Summary', 'Draft', 'Review'],
};

export function ProjectVisual({ variant }: { variant: string }) {
  const topLabels = labels[variant] ?? ['Project', 'Preview', 'Mockup'];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950 p-4 light:border-slate-200 light:bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_48%)]" />
      <div className="relative flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-2 light:border-slate-200 light:bg-slate-50">
        {topLabels.map((label) => (
          <span key={label} className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-300 light:text-slate-500">
            {label}
          </span>
        ))}
      </div>

      <div className="relative mt-4 grid grid-cols-2 gap-3">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="aspect-[4/3] rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/30 to-cyan-400/10 p-4 light:border-slate-200"
        >
          <div className="h-full rounded-xl border border-white/10 bg-slate-900/80 p-3 light:border-slate-200 light:bg-white">
            <div className="flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
            <div className="mt-4 space-y-2">
              <div className="h-3 w-24 rounded-full bg-white/20" />
              <div className="h-3 w-32 rounded-full bg-white/10" />
              <div className="h-3 w-20 rounded-full bg-white/20" />
            </div>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <div className="h-16 rounded-xl bg-white/10" />
              <div className="h-16 rounded-xl bg-white/5" />
            </div>
          </div>
        </motion.div>

        <div className="grid gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 light:border-slate-200 light:bg-slate-50">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Status</p>
            <p className="mt-2 text-lg font-semibold text-white light:text-slate-900">Preview ready</p>
            <p className="mt-2 text-sm text-slate-300 light:text-slate-600">Responsive mockup card for project previews</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 light:border-slate-200 light:bg-slate-50">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Metrics</p>
            <div className="mt-3 flex items-center gap-2">
              <div className="h-2 flex-1 rounded-full bg-white/10">
                <div className="h-full w-[76%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
              </div>
              <span className="text-xs text-slate-300 light:text-slate-600">76%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
