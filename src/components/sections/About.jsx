import { motion } from 'framer-motion'
import { education, certifications } from '../../data/portfolioData.js'
import SectionHeading from '../ui/SectionHeading.jsx'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
      <SectionHeading
        index="01"
        title="Background"
        description="A year in, still shipping — from a full-stack training program straight into production systems."
      />

      <div className="grid gap-10 sm:grid-cols-2 sm:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="font-mono text-xs uppercase tracking-wide text-copper">Education</h3>
          <ul className="mt-4 space-y-4">
            {education.map((e) => (
              <li key={e.degree} className="border-l border-line pl-4">
                <p className="text-base font-medium text-ink">{e.degree}</p>
                <p className="text-sm text-inkSoft">{e.org}</p>
                <p className="mt-1 font-mono text-xs text-inkSoft/70">{e.period}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="font-mono text-xs uppercase tracking-wide text-copper">Certifications</h3>
          <ul className="mt-4 space-y-4">
            {certifications.map((c) => (
              <li key={c} className="border-l border-line pl-4 text-sm text-inkSoft">
                {c}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
