import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const reasons = [
  {
    title: 'We treat every project like a film',
    desc: 'Not a job. Not a booking. Every shoot is approached with the care of a feature film — from the pre-shoot mood board to the final colour grade.',
    accent: '#c9963a',
  },
  {
    title: 'The same team, start to finish',
    desc: 'Your director, cinematographer, and editor stay with you from the first call to final delivery. No handoffs. No strangers on your wedding day.',
    accent: '#b8874a',
  },
  {
    title: 'Light is our obsession',
    desc: 'We scout every venue in advance. We know where the golden hour falls. We know which corner holds the warmest light. It shows in every frame.',
    accent: '#c9963a',
  },
  {
    title: 'Delivery you can count on',
    desc: 'Highlight reels within 7 days. Feature films within 30. We keep you updated at every stage — no radio silence, no chasing.',
    accent: '#b8874a',
  },
  {
    title: 'Licensed for the skies',
    desc: 'Fully DGCA-licensed drone operations across India. We manage all permits. You just enjoy the view.',
    accent: '#c9963a',
  },
  {
    title: 'No hidden costs, ever',
    desc: 'Every quote is clear and complete. What you see is what you pay. We believe the trust that starts before the shoot should carry through to the invoice.',
    accent: '#b8874a',
  },
]

export default function WhyUsSection() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-60px' })

  return (
    <section
      className="relative py-24 px-4 sm:py-32 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #000000, #0c0804, #000000)' }}
    >
      {/* Warm glow */}
      <div className="pointer-events-none absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full blur-[160px] -translate-y-1/2 bg-amber-800/[0.07]" />

      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 sm:mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-10 bg-amber-400/40" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-amber-400/60 font-medium">Why Choose Us</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end gap-5 sm:gap-12">
            <h2 className="text-4xl font-light tracking-tight text-white/90 sm:text-5xl lg:text-6xl leading-[1.1]">
              <span className="italic">The difference is </span><br />
              <span className="font-semibold not-italic">in every frame</span>
            </h2>
            <p className="max-w-sm text-sm leading-8 text-white/40 sm:text-base sm:mb-1">
              Six things our clients say they noticed — before they even saw the final film.
            </p>
          </div>
        </motion.div>

        {/* Reasons — two columns, divided by a thin line */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-black px-7 py-8 sm:px-9 sm:py-10 hover:bg-[#0c0804] transition-colors duration-500"
            >
              {/* Roman numeral */}
              <div
                className="text-[11px] font-mono mb-4 tracking-widest"
                style={{ color: 'rgba(201,150,58,0.45)' }}
              >
                {['I', 'II', 'III', 'IV', 'V', 'VI'][i]}
              </div>

              <h3 className="text-base font-medium text-white/85 mb-3 leading-snug sm:text-lg">
                {reason.title}
              </h3>
              <p className="text-sm leading-7 text-white/40">
                {reason.desc}
              </p>

              {/* Hover underline */}
              <div
                className="mt-5 h-px w-0 group-hover:w-10 transition-all duration-500"
                style={{ background: reason.accent }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}