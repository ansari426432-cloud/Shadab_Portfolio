import { motion } from 'framer-motion'

export default function MetricCard({ label, value, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="border-l border-railLine px-4 py-2 first:border-l-0 first:pl-0 sm:px-5"
    >
      <div className="font-mono text-2xl font-medium text-railText sm:text-3xl">{value}</div>
      <div className="mt-1 max-w-[9rem] text-xs leading-snug text-railText/60">{label}</div>
    </motion.div>
  )
}
