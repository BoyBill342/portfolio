import { motion } from 'framer-motion';
import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';

const storyParagraphs = [
  "My QA journey did not start in a classroom or with a testing textbook— it started with my first VR headset.",
  "I bought the HP Reverb G2 soon after launch, excited to jump into next-generation VR. Instead, I kept running into software bugs, firmware issues, driver conflicts, SteamVR and Windows Mixed Reality compatibility problems, USB connectivity failures, and tracking instability.",
  "At first, I just wanted the headset to work. But every issue made me more curious about why it happened. I spent hours troubleshooting, reading technical docs, learning from community threads, testing different fixes, and narrowing problems down to root causes.",
  "Looking back, that was where my QA mindset started to form: structured debugging, attention to detail, and a real interest in how software and hardware behave together.",
  "That curiosity took me into VR-related university projects, where I worked with Unity and immersive interaction development. Later, I joined HTC as a QA Engineering Intern and turned that personal debugging habit into professional validation work for VR products.",
  "Today, I continue as a QA Engineer focused on end-to-end testing, issue investigation, and automation scripting. My goal is to grow into a role that is not only testing but also building ild scalable, reliable quality systems for the next wave of interactive technology.",
];

export function About() {
  return (
    <section id="about">
      <Container>
        <SectionHeading
          eyebrow="About Me"
          title="From VR Gamer to QA Engineer"
          description="A personal story of how curiosity, troubleshooting, and user frustration turned into a career in product quality."
        />

        <motion.article
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.55 }}
          className="card-surface mt-12 p-6 sm:p-8 md:p-10"
        >
          <div className="mx-auto max-w-4xl space-y-6 text-base leading-8 text-slate-300 light:text-slate-600">
            {storyParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </motion.article>
      </Container>
    </section>
  );
}
