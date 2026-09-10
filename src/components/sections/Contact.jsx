import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { profile } from '../../data/portfolioData.js'

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-rail px-6 py-24 text-railText sm:px-10 sm:py-32">
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl">
        <span className="font-mono text-sm text-copperSoft">05</span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 max-w-2xl text-display-md font-semibold text-balance"
        >
          Building something? I'd like to hear about it.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-md text-railText/70"
        >
          Currently {profile.status.toLowerCase()}. Reach out directly — I reply fast.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6"
        >
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-2 border border-copperSoft bg-copperSoft/10 px-6 py-3 font-mono text-sm text-copperSoft transition-colors hover:bg-copperSoft/20"
          >
            {profile.email}
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <span className="font-mono text-sm text-railText/60">{profile.phone}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex gap-8 border-t border-railLine pt-8 font-mono text-xs"
        >
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-railText/70 hover:text-copperSoft">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-railText/70 hover:text-copperSoft">
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  )
}
