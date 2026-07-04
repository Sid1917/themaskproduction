import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'The Brief',
    desc: 'We sit with your team to understand the event\'s purpose — brand launch, conference, concert — and map out coverage priorities and key moments.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Venue Recce',
    desc: 'We walk the venue ahead of time — stage layout, lighting rigs, camera positions, and crowd flow — so nothing is improvised on the day.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s-7-6.5-7-11a7 7 0 0114 0c0 4.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Live Coverage',
    desc: 'A multi-camera crew captures the stage, the crowd, and the in-between moments — the energy that makes a live event worth remembering.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="15" height="12" rx="2"/><path d="M17 10l5-3v10l-5-3"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Rapid Edit',
    desc: 'Same-day highlight clips for social, with the full event film delivered within days — cut with pace, not padded with filler.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>
      </svg>
    ),
  },
]

export default function EventsProcessSection() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-60px' })

  return (
    <section
      className="relative py-24 px-4 sm:py-32 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #000000, #0a0410, #000000)' }}
    >
      <div
        className="pointer-events-none absolute bottom-0 left-1/4 w-[500px] h-[300px] rounded-full blur-[140px]"
        style={{ background: 'rgba(217,70,239,0.06)' }}
      />

      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 sm:mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-10 bg-fuchsia-400/40" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-fuchsia-400/60 font-medium">
              How We Work
            </span>
          </div>
          <h2 className="text-4xl font-light tracking-tight text-white/90 sm:text-5xl lg:text-6xl leading-[1.1]">
            <span className="italic">From the brief </span>
            <br />
            <span className="font-semibold not-italic">to the final cut</span>
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
              className="group bg-black px-7 py-9 sm:px-10 sm:py-11 hover:bg-[#0a0410] transition-colors duration-500"
            >
              <div className="flex items-start gap-5">
                <div className="mt-0.5 flex-shrink-0" style={{ color: 'rgba(217,70,239,0.55)' }}>
                  {step.icon}
                </div>
                <div>
                  <div className="text-[10px] font-mono tracking-widest text-white/20 mb-2">{step.num}</div>
                  <h3 className="text-base font-medium text-white/85 mb-3 leading-snug sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-7 text-white/40">{step.desc}</p>
                </div>
              </div>
              <div
                className="mt-6 h-px w-0 group-hover:w-10 transition-all duration-500"
                style={{ background: '#d946ef' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}