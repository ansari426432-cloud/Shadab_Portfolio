import { motion } from 'framer-motion'

export default function SectionHeading({ index, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mb-10 flex items-baseline gap-4 sm:mb-14"
    >
      <span className="font-mono text-sm text-copper">{index}</span>
      <div>
        <h2 className="text-display-md font-semibold text-ink text-balance">{title}</h2>
        {description && (
          <p className="mt-2 max-w-lg text-sm text-inkSoft sm:text-base">{description}</p>
        )}
      </div>
    </motion.div>
  )
}
