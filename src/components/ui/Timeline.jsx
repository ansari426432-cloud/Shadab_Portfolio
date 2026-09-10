import { motion } from 'framer-motion'
import StatusPill from './StatusPill.jsx'

export default function Timeline({ entries }) {
  return (
    <div className="relative">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line sm:left-[9px]" />
      <div className="space-y-10">
        {entries.map((entry, i) => (
          <motion.div
            key={entry.role + entry.org}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative pl-8 sm:pl-10"
          >
            <span className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-paper bg-copper sm:h-[19px] sm:w-[19px]" />

            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs text-inkSoft">{entry.period}</span>
              <StatusPill status={entry.status} label={entry.status === 'live' ? 'Current' : 'Completed'} />
            </div>
            <h3 className="mt-2 text-xl font-semibold text-ink sm:text-2xl">{entry.role}</h3>
            {entry.link ? (
              <a
                href={entry.link}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-copper underline decoration-copper/40 underline-offset-4 hover:decoration-copper"
              >
                {entry.org}
              </a>
            ) : (
              <p className="text-sm text-inkSoft">{entry.org}</p>
            )}

            <ul className="mt-4 max-w-2xl space-y-2.5">
              {entry.points.map((point, idx) => (
                <li key={idx} className="flex gap-3 text-sm leading-relaxed text-inkSoft sm:text-base">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-inkSoft/50" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
