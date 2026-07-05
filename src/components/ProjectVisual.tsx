import { motion } from 'framer-motion';

type ProjectVisualProps = {
  variant: string;
  images?: string[];
  videoUrl?: string;
  primaryMedia?: 'video' | 'image';
  isWide?: boolean;
};

export function ProjectVisual({ variant, images, videoUrl, primaryMedia = 'video', isWide = false }: ProjectVisualProps) {
  const resolvedVideoUrl = (() => {
    if (!videoUrl) {
      return undefined;
    }

    if (!videoUrl.includes('youtube.com')) {
      return videoUrl;
    }

    const separator = videoUrl.includes('?') ? '&' : '?';
    return `${videoUrl}${separator}rel=0&modestbranding=1&playsinline=1&vq=hd1080`;
  })();

  const isVrRemains = variant === 'vr-remains';
  const resolvedImages = images?.map((image) => {
    if (/^(https?:)?\/\//.test(image)) {
      return image;
    }

    return `${import.meta.env.BASE_URL}${image.replace(/^\//, '')}`;
  });

  if (videoUrl || resolvedImages?.length) {
    const galleryImages = resolvedImages ?? [];
    const showVideoAsPrimary = Boolean(videoUrl) && primaryMedia === 'video';
    const primaryImage = galleryImages[0];
    const secondaryImages = showVideoAsPrimary ? galleryImages : galleryImages.slice(1);
    const hasSidePanel = (!showVideoAsPrimary && Boolean(resolvedVideoUrl)) || secondaryImages.length > 0;

    return (
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950 p-3 light:border-slate-200 light:bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_48%)]" />
        <div className={`relative grid gap-3 ${hasSidePanel ? (isWide ? 'lg:grid-cols-[1.8fr_0.9fr]' : 'lg:grid-cols-[1.45fr_0.95fr]') : ''}`}>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 light:border-slate-200 light:bg-slate-100"
          >
            {showVideoAsPrimary ? (
              <div className={`w-full ${isWide ? 'aspect-video lg:aspect-[16/8.8]' : 'aspect-video'}`}>
                <iframe
                  src={resolvedVideoUrl}
                  title="Project gameplay video"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : (
              <img
                src={primaryImage}
                alt="Project gameplay preview"
                className="h-52 w-full object-cover object-center sm:h-60"
              />
            )}
          </motion.div>

          {hasSidePanel ? (
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
              {!showVideoAsPrimary && resolvedVideoUrl ? (
              <motion.div
                key={resolvedVideoUrl}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 light:border-slate-200 light:bg-slate-100"
              >
                <div className="h-24 sm:h-[116px]">
                  <iframe
                    src={resolvedVideoUrl}
                    title="Project gameplay video"
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </motion.div>
              ) : null}

              {secondaryImages.map((image, index) => (
                <motion.div
                  key={image}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 light:border-slate-200 light:bg-slate-100"
                >
                  <img
                    src={image}
                    alt="Additional gameplay preview"
                    className={isVrRemains ? 'h-24 w-full bg-slate-900 object-contain p-1 sm:h-[116px]' : 'h-24 w-full object-cover object-center sm:h-[116px]'}
                  />
                </motion.div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950 p-4 light:border-slate-200 light:bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_48%)]" />

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
