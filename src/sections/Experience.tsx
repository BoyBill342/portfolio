import { motion } from 'framer-motion';
import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { experience } from '@/data/experience';

export function Experience() {
  return (
    <section id="experience">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="A vertical timeline that reads like progress, not paperwork."
          description="The timeline keeps the focus on ownership, growth, and the way the role evolved over time."
        />

        <div className="mt-12 space-y-6">
          {experience.map((item, index) => (
            <motion.article
              key={item.period}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="grid gap-4 md:grid-cols-[220px_1fr]"
            >
              <div className="pt-1 text-sm font-semibold uppercase tracking-[0.24em] text-slate-400 light:text-slate-500">
                {item.period}
              </div>
              <div className="card-surface rounded-[28px] p-6 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white light:text-slate-900">{item.role}</h3>
                    <p className="mt-2 text-sm text-slate-400 light:text-slate-500">{item.company}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.22em] text-slate-300 light:border-slate-200 light:bg-slate-100 light:text-slate-600">
                    Active Impact
                  </span>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-300 light:text-slate-600">{item.summary}</p>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300 light:text-slate-600">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
