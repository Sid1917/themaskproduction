import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '180+', label: 'Wedding Films', sub: 'love stories told' },
  { value: '8', label: 'Years Experience', sub: 'since 2017' },
  { value: '14', label: 'Cities Covered', sub: 'across India' },
  { value: '98%', label: 'Return Clients', sub: 'speak for themselves' },
]

export default function WeddingStatsBar() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="relative bg-black border-t border-white/[0.05]">
      <motion.div
        ref={ref}
        className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.05]"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-black px-6 py-10 sm:px-10 sm:py-12 text-center"
          >
            <div
              className="text-4xl sm:text-5xl font-light tracking-tight mb-1"
              style={{ color: '#c9963a' }}
            >
              {stat.value}
            </div>
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-white/60 mb-1">
              {stat.label}
            </div>
            <div className="text-[10px] text-white/25 tracking-wide">{stat.sub}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}