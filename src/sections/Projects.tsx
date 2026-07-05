import { motion } from 'framer-motion';
import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { featuredProject, projects } from '@/data/projects';
import { ProjectVisual } from '@/components/ProjectVisual';
import { ArchitectureDiagram } from '@/components/ArchitectureDiagram';
import { Button } from '@/components/Button';

function SectionBlock({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400 light:text-slate-500">{title}</p>
      <p className="mt-3 text-sm leading-7 text-slate-300 light:text-slate-600">{text}</p>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Featured case study and supporting work."
          description="The featured project shows measurable QA automation impact, while the supporting work highlights game development and interactive system design." 
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.55 }}
          className="mt-12 card-surface p-6 sm:p-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="section-badge">{featuredProject.badge}</div>
              <h3 className="mt-4 text-2xl font-semibold text-white light:text-slate-900 sm:text-3xl">{featuredProject.title}</h3>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 light:text-slate-600">{featuredProject.summary}</p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="grid gap-4">
              <SectionBlock title="Overview" text={featuredProject.overview} />
              <SectionBlock title="Problem" text={featuredProject.problem} />
              <SectionBlock title="Solution" text={featuredProject.solution} />
              <SectionBlock title="Architecture" text={featuredProject.architecture} />
            </div>
            <ArchitectureDiagram />
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 light:border-slate-200 light:bg-slate-50">
              <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400 light:text-slate-500">Key Features</h4>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300 light:text-slate-600">
                {featuredProject.features.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 light:border-slate-200 light:bg-slate-50">
              <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400 light:text-slate-500">Technical Challenges</h4>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300 light:text-slate-600">
                {featuredProject.challenges.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 light:border-slate-200 light:bg-slate-50">
              <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400 light:text-slate-500">Lessons Learned</h4>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300 light:text-slate-600">
                {featuredProject.lessons.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 light:border-slate-200 light:bg-slate-50">
              <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400 light:text-slate-500">Roadmap</h4>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300 light:text-slate-600">
                {featuredProject.roadmap.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className={`card-surface overflow-hidden p-4 transition-shadow duration-300 hover:shadow-[0_20px_70px_rgba(14,165,233,0.22)] ${project.isWide ? 'lg:col-span-2 lg:w-full' : ''}`}
            >
              <ProjectVisual
                variant={project.imageVariant}
                images={project.previewImages}
                videoUrl={project.previewVideoUrl}
                primaryMedia={project.previewPrimaryMedia as 'video' | 'image' | undefined}
                isWide={project.isWide}
              />
              <div className="px-2 pb-2 pt-5">
                <h3 className="text-xl font-semibold text-white light:text-slate-900">{project.title}</h3>
                <p className="mt-3 min-h-[8.5rem] text-sm leading-7 text-slate-300 light:text-slate-600">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 light:border-slate-200 light:bg-slate-100 light:text-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.actions.map((action) => (
                    <Button key={action.kind} href={action.href ?? '#'} disabled={!action.href} variant="secondary">
                      {action.label}
                    </Button>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
