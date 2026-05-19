import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'The First Call',
    desc: 'We spend 30 minutes learning about you — your story, your venue, your vision. This isn\'t a sales call. It\'s where we figure out if we\'re the right fit for each other.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Pre-Shoot Planning',
    desc: 'We scout your venue, create a shot list, and build a mood board together. By the morning of your wedding, every frame is already planned.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Your Wedding Day',
    desc: 'We arrive early, stay late, and move like shadows — capturing every whisper, laugh, and tear without ever pulling you away from the moment.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'The Edit',
    desc: 'Your highlight reel is ready within 7 days. The feature film within 30. Every cut is made with the care of a director, not a content factory.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>
      </svg>
    ),
  },
]

export default function WeddingProcessSection() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-60px' })

  return (
    <section
      className="relative py-24 px-4 sm:py-32 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #000000, #0c0804, #000000)' }}
    >
      <div
        className="pointer-events-none absolute bottom-0 left-1/4 w-[500px] h-[300px] rounded-full blur-[140px]"
        style={{ background: 'rgba(201,150,58,0.05)' }}
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
            <div className="h-px w-10 bg-amber-400/40" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-amber-400/60 font-medium">
              How We Work
            </span>
          </div>
          <h2 className="text-4xl font-light tracking-tight text-white/90 sm:text-5xl lg:text-6xl leading-[1.1]">
            <span className="italic">From first call </span>
            <br />
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
              className="group bg-black px-7 py-9 sm:px-10 sm:py-11 hover:bg-[#0c0804] transition-colors duration-500"
            >
              <div className="flex items-start gap-5">
                <div className="mt-0.5 flex-shrink-0" style={{ color: 'rgba(201,150,58,0.5)' }}>
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
                style={{ background: '#c9963a' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}