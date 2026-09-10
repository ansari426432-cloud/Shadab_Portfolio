import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { profile, metrics } from '../../data/portfolioData.js'
import MetricCard from '../ui/MetricCard.jsx'
import StatusPill from '../ui/StatusPill.jsx'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-rail text-railText">
      <div className="grain pointer-events-none absolute inset-0" />

      {/* orchestrated single reveal: one horizontal sweep behind the headline */}
      <motion.div
        aria-hidden
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        style={{ transformOrigin: 'left' }}
        className="absolute left-0 top-[5.5rem] h-px w-full bg-railLine sm:top-28"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-6xl px-6 pb-16 pt-28 sm:px-10 sm:pb-20 sm:pt-36"
      >
        <motion.div variants={item}>
          <StatusPill status="live" label={profile.status} />
        </motion.div>

        <motion.h1 variants={item} className="mt-6 text-display-lg font-semibold text-balance">
          {profile.name}
        </motion.h1>

        <motion.p variants={item} className="mt-4 font-mono text-sm text-copperSoft sm:text-base">
          {profile.role} — {profile.location}
        </motion.p>

        <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-railText/75 sm:text-lg">
          {profile.summary}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="border border-railText px-5 py-2.5 font-mono text-xs text-railText transition-colors hover:border-copperSoft hover:text-copperSoft"
          >
            View projects
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="border border-copperSoft bg-copperSoft/10 px-5 py-2.5 font-mono text-xs text-copperSoft transition-colors hover:bg-copperSoft/20"
          >
            Get in touch
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 grid grid-cols-2 gap-y-6 border-t border-railLine pt-8 sm:mt-20 sm:flex sm:flex-wrap sm:gap-x-2"
        >
          {metrics.map((m, i) => (
            <MetricCard key={m.label} {...m} delay={0.6 + i * 0.08} />
          ))}
        </motion.div>
      </motion.div>

      <motion.button
        aria-label="Scroll to experience"
        onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="relative mx-auto mb-8 flex items-center gap-2 font-mono text-[0.65rem] text-railText/50 sm:mb-10"
      >
        <ArrowDown size={14} className="animate-bounce" />
      </motion.button>
    </section>
  )
}
