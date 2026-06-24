import { motion } from 'framer-motion';
import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { skillGroups } from '@/data/skills';

export function Skills() {
  return (
    <section id="skills">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Capabilities presented as clean cards instead of progress bars."
          description="The structure is intentionally simple: focus on the tools and domains that matter most, and make the reading experience feel calm and fast."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="card-surface p-6"
            >
              <p className="section-badge">{group.title}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 light:border-slate-200 light:bg-slate-100 light:text-slate-700">
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
