import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Site Scout & Permits',
    desc: 'We visit the venue before shoot day, identify ideal flight paths, and manage all DGCA/local authority permissions ourselves.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35M11 8v6M8 11h6"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Flight Day',
    desc: 'Our licensed pilot flies with full equipment. You focus on your event — we handle every flight decision, safety check, and shot list.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Cinematic Edit',
    desc: 'Our editors colour-grade every frame to match your visual identity — warm for weddings, punchy for events, clean for corporate.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Deliver & Archive',
    desc: 'Final edits delivered via private link within 7 days. RAW 4K files archived for 90 days — always available if you need them.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
      </svg>
    ),
  },
]

export default function DroneProcessSection() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-60px' })

  return (
    <section className="relative py-24 px-4 sm:py-32 sm:px-6 lg:px-8 overflow-hidden bg-black">
      <div className="pointer-events-none absolute bottom-0 left-1/4 w-[500px] h-[300px] rounded-full blur-[140px] bg-cyan-700/[0.05]" />

      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 sm:mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-10 bg-cyan-400/40" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-cyan-400/60 font-medium">How It Works</span>
          </div>
          <h2 className="text-4xl font-light tracking-tight text-white/90 sm:text-5xl lg:text-6xl leading-[1.1]">
            <span className="italic">From permit </span><br />
            <span className="font-semibold not-italic">to final frame</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-black px-7 py-9 sm:px-10 sm:py-11 hover:bg-[#040a0d] transition-colors duration-500"
            >
              <div className="flex items-start gap-5">
                <div className="text-cyan-400/50 mt-0.5 flex-shrink-0">{step.icon}</div>
                <div>
                  <div className="text-[10px] font-mono tracking-widest text-white/20 mb-2">{step.num}</div>
                  <h3 className="text-base font-medium text-white/85 mb-3 leading-snug sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-7 text-white/40">{step.desc}</p>
                </div>
              </div>
              <div className="mt-6 h-px w-0 group-hover:w-10 transition-all duration-500 bg-cyan-400/40" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}