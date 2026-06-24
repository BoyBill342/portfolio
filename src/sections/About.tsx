import { motion } from 'framer-motion';
import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';

const timeline = [
  {
    period: 'Jul 2024 — Present',
    title: 'VR Product QA Engineer',
    description: 'Driving product quality, regression coverage, and automation opportunities for VR and Android flows.',
  },
  {
    period: 'Jul 2023 — Jun 2024',
    title: 'VR Product QA Intern',
    description: 'Built confidence in release validation, issue reproduction, and tool-assisted QA workflows.',
  },
];

const interests = ['VR', 'XR', 'Software Engineering', 'Test Automation', 'AI Assisted Development'];

export function About() {
  return (
    <section id="about">
      <Container>
        <SectionHeading
          eyebrow="About Me"
          title="Professional background with a systems-first mindset."
          description="I focus on practical quality engineering, repeatable workflows, and automation that makes product teams faster without making the process harder to use."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.55 }}
            className="card-surface p-6 sm:p-8"
          >
            <p className="text-base leading-8 text-slate-300 light:text-slate-600">
              I build quality processes that are easy to trust and easy to repeat. My work sits at the intersection of
              VR product validation, Android device handling, and automation tooling. I am especially interested in
              using AI to reduce repetitive QA work and help engineers move from signal to action faster.
            </p>

            <div className="mt-8 space-y-5">
              {timeline.map((item, index) => (
                <div key={item.period} className="flex gap-4">
                  <div className="relative flex flex-col items-center">
                    <span className="mt-1 h-3 w-3 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400" />
                    {index < timeline.length - 1 ? <span className="mt-2 h-full w-px bg-white/10 light:bg-slate-200" /> : null}
                  </div>
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-400 light:text-slate-500">{item.period}</p>
                    <h3 className="mt-2 text-lg font-semibold text-white light:text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300 light:text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="grid gap-4"
          >
            {interests.map((interest, index) => (
              <div key={interest} className="card-surface px-6 py-5">
                <div className="flex items-center justify-between">
                  <p className="text-base font-medium text-white light:text-slate-900">{interest}</p>
                  <span className="text-xs uppercase tracking-[0.24em] text-slate-400 light:text-slate-500">0{index + 1}</span>
                </div>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10 light:bg-slate-200">
                  <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
