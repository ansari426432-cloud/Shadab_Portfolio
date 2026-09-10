import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Plus } from 'lucide-react'
import StatusPill from './StatusPill.jsx'

export default function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group border border-line bg-panel"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full flex-col gap-4 p-6 text-left sm:flex-row sm:items-start sm:justify-between sm:p-8"
      >
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs text-inkSoft">
              {String(index + 1).padStart(2, '0')}
            </span>
            <StatusPill status={project.status} />
          </div>
          <h3 className="mt-3 text-2xl font-semibold text-ink sm:text-3xl">{project.name}</h3>
          <p className="mt-2 max-w-md text-sm text-inkSoft sm:text-base">{project.tagline}</p>
          <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[0.7rem] text-inkSoft">
            {project.stack.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-3 self-start">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 border border-line px-3 py-1.5 text-xs text-ink transition-colors hover:border-copper hover:text-copper"
            >
              Visit <ArrowUpRight size={14} />
            </a>
          )}
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex h-8 w-8 items-center justify-center border border-line text-ink"
          >
            <Plus size={16} />
          </motion.span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line"
          >
            <ul className="space-y-3 p-6 sm:p-8">
              {project.points.map((point, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-inkSoft sm:text-base">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-copper" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}
