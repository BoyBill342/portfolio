import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { HeroMockup } from '@/components/HeroMockup';
import { site } from '@/data/site';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-8 sm:pt-12 lg:pt-16">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl light:text-slate-900">
              <span className="gradient-text">{site.name}</span>
            </h1>
            <p className="mt-5 text-2xl font-medium text-slate-200 sm:text-3xl light:text-slate-700">{site.role}</p>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg light:text-slate-600">{site.intro}</p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 light:text-slate-600">{site.summary}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {site.focusAreas.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300 light:border-slate-200 light:bg-slate-100 light:text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="#projects" variant="accent">
                View Projects
                <ArrowRight size={16} />
              </Button>
              <Button href={site.resumeHref} variant="secondary" download>
                Download Resume
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-[11px] uppercase tracking-[0.2em] text-slate-200 light:bg-slate-200 light:text-slate-600">
                  {site.resumeLabel}
                </span>
              </Button>
              <Button href={site.github} variant="secondary" target="_blank" rel="noreferrer">
                <Github size={16} />
                GitHub
              </Button>
              <Button href={site.linkedin} variant="secondary" target="_blank" rel="noreferrer">
                <Linkedin size={16} />
                LinkedIn
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[40px] bg-blue-500/10 blur-3xl" />
            <HeroMockup />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
