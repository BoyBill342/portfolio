import { motion } from 'framer-motion';

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.55 }}
      className="max-w-3xl"
    >
      <div className="section-badge">{eyebrow}</div>
      <h2 className="section-title mt-5">{title}</h2>
      <p className="section-subtitle">{description}</p>
    </motion.div>
  );
}