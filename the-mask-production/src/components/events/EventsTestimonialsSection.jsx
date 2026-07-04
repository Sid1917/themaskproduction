import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const testimonials = [
  {
    quote: 'They understood our brand energy instantly. The launch film they delivered got more engagement than our entire ad campaign that quarter.',
    name: 'Karan Malhotra',
    role: 'Marketing Head · Nova Tech, 2025',
    initials: 'KM',
  },
  {
    quote: 'We\'ve worked with a dozen event videographers. Nobody else moves through a crowd the way this team does — invisible, but they never miss the moment.',
    name: 'Anisha Rao',
    role: 'Event Producer · Indie Nights, 2025',
    initials: 'AR',
  },
  {
    quote: 'The same-day recap they cut for our closing ceremony had the entire hall on its feet. Our CEO still references it in every town hall.',
    name: 'Rajeev Sethi',
    role: 'CXO · Horizon Summit, 2026',
    initials: 'RS',
  },
  {
    quote: 'Professional, fast, and genuinely creative. They pitched shot ideas we hadn\'t even considered and it elevated the whole show.',
    name: 'Farah Khan Irani',
    role: 'Producer · The Craft Awards, 2026',
    initials: 'FI',
  },
  {
    quote: 'Multi-day activation across three cities and they kept the visual language consistent throughout. That kind of coordination is rare.',
    name: 'Vivaan Bhatia',
    role: 'Brand Manager, 2025',
    initials: 'VB',
  },
  {
    quote: 'Our stakeholders don\'t usually watch recap videos in full. They watched this one twice. That tells you everything.',
    name: 'Ishita Desai',
    role: 'Communications Lead, 2025',
    initials: 'ID',
  },
]

export default function EventsTestimonialsSection() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-60px' })

  return (
    <section className="relative py-24 px-4 sm:py-32 sm:px-6 lg:px-8 bg-black overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 w-[600px] h-[400px] rounded-full blur-[160px]"
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
              What Clients Say
            </span>
          </div>
          <h2 className="text-4xl font-light tracking-tight text-white/90 sm:text-5xl lg:text-6xl leading-[1.1]">
            <span className="italic">Brands and producers </span>
            <br />
            <span className="font-semibold not-italic">who trust us on stage</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-5 p-6 sm:p-8 rounded-2xl border border-white/[0.06]"
              style={{ background: 'linear-gradient(135deg, rgba(217,70,239,0.04), transparent)' }}
            >
              <div
                className="text-6xl font-serif leading-none"
                style={{ color: 'rgba(217,70,239,0.25)' }}
              >
                "
              </div>
              <p className="text-sm leading-8 text-white/55 flex-1 -mt-4 italic">
                {t.quote}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0"
                  style={{ background: 'rgba(217,70,239,0.15)', color: '#d946ef' }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-medium text-white/75">{t.name}</div>
                  <div className="text-[11px] text-white/30 mt-0.5">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}