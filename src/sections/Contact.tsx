import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { site } from '@/data/site';
import { Button } from '@/components/Button';

const links = [
  { label: 'GitHub', href: site.github, icon: Github },
  { label: 'LinkedIn', href: site.linkedin, icon: Linkedin },
  { label: 'Email', href: `mailto:${site.email}`, icon: Mail },
];

export function Contact() {
  return (
    <section id="contact" className="pb-24">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Open to conversations, collaborations, and better tooling."
          description="If you want to talk about VR testing, Android automation, or AI-assisted developer workflows, this is the fastest way to reach me."
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.55 }}
          className="mt-12 card-surface p-6 sm:p-8"
        >
          <div className="grid gap-4 md:grid-cols-3">
            {links.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={label === 'Email' ? undefined : '_blank'}
                rel={label === 'Email' ? undefined : 'noreferrer'}
                className="group rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:bg-white/10 light:border-slate-200 light:bg-slate-50 light:hover:bg-white"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Icon size={22} className="text-blue-400 light:text-blue-600" />
                    <h3 className="mt-4 text-lg font-semibold text-white light:text-slate-900">{label}</h3>
                    <p className="mt-2 text-sm text-slate-300 light:text-slate-600">{href.replace('mailto:', '')}</p>
                  </div>
                  <ArrowUpRight size={18} className="text-slate-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 light:text-slate-500" />
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 px-5 py-4 light:border-slate-200 light:bg-slate-50">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400 light:text-slate-500">Ready when you are</p>
              <p className="mt-2 text-base text-slate-200 light:text-slate-700">Let’s build something clean, fast, and useful.</p>
            </div>
            <Button href="#home" variant="accent">
              Back to top
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
