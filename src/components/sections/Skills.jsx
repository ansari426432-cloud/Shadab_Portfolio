import { motion } from 'framer-motion'
import { skills } from '../../data/portfolioData.js'
import SectionHeading from '../ui/SectionHeading.jsx'

export default function Skills() {
  return (
    <section id="stack" className="border-t border-line bg-panel px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="04"
          title="Stack"
          description="The tools that show up across Doctora, AcademyGo, and TaskFlow."
        />

        <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-panel p-6"
            >
              <h3 className="font-mono text-xs uppercase tracking-wide text-copper">
                {group.group}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-inkSoft">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
