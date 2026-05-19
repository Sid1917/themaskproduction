import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '320+', label: 'Films Delivered', sub: 'and counting' },
  { value: '8',    label: 'Years of Stories', sub: 'since 2017' },
  { value: '14',   label: 'Cities', sub: 'across India' },
  { value: '98%',  label: 'Return Clients', sub: 'speak for themselves' },
]

const testimonials = [
  {
    quote: 'We cried watching our film for the first time — they captured emotions we didn\'t even know were on camera. It felt like a movie about our life.',
    name: 'Priya & Aryan Mehta',
    role: 'Wedding · Udaipur, 2024',
    initials: 'PA',
  },
  {
    quote: 'Our TEDx highlight reel got more views than the actual live stream. The editing, the colour, the music — everything was perfect. Truly professional.',
    name: 'Aditya Sharma',
    role: 'TEDx Mumbai · Organiser',
    initials: 'AS',
  },
  {
    quote: 'I was nervous about corporate video feeling stiff. The Mask Production made our brand film feel genuinely human. Our team watches it at every onboarding.',
    name: 'Rhea Kapoor',
    role: 'Marketing Director · Zudio',
    initials: 'RK',
  },
]

const clientNames = [
  'Taj Hotels', 'TEDx Mumbai', 'Zudio', 'Oberoi Group',
  'Weddingsutra', 'SonyLIV', 'Reliance Brands', 'ITC Hotels',
]

export default function ClientsSection() {
  const headRef = useRef(null)
  const statsRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-60px' })
  const statsInView = useInView(statsRef, { once: true, margin: '-60px' })

  return (
    <section className="relative py-24 px-4 sm:py-32 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Warm radial glow */}
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-[600px] h-[400px] rounded-full blur-[160px] bg-amber-800/[0.07]" />

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
            <span className="text-[10px] uppercase tracking-[0.5em] text-amber-400/60 font-medium">Our Clients</span>
          </div>
          <h2 className="text-4xl font-light tracking-tight text-white/90 sm:text-5xl lg:text-6xl leading-[1.1]">
            <span className="italic">Trusted by families </span><br />
            <span className="font-semibold not-italic">& leading brands</span>
          </h2>
        </motion.div>

        {/* Stats — clean, understated */}
        <motion.div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.05] rounded-2xl overflow-hidden mb-20 sm:mb-24"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              animate={statsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-black px-6 py-8 sm:px-8 sm:py-10 text-center"
            >
              <div
                className="text-4xl sm:text-5xl font-light tracking-tight mb-1"
                style={{ color: '#c9963a' }}
              >
                {stat.value}
              </div>
              <div className="text-xs font-medium uppercase tracking-[0.2em] text-white/60 mb-1">{stat.label}</div>
              <div className="text-[10px] text-white/25 tracking-wide">{stat.sub}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client names — elegant text list */}
        <div className="mb-20 sm:mb-24">
          <p className="text-center text-[10px] uppercase tracking-[0.4em] text-white/20 mb-8">
            Brands & families we've worked with
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 sm:gap-x-12">
            {clientNames.map((name, i) => (
              <motion.span
                key={name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="text-sm sm:text-base text-white/20 hover:text-white/50 transition-colors duration-300 cursor-default tracking-wide"
              >
                {name}
              </motion.span>
            ))}
          </div>

          {/* Thin gold separator */}
          <div className="flex items-center gap-4 mt-10">
            <div className="flex-1 h-px bg-white/[0.05]" />
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400/30" />
            <div className="flex-1 h-px bg-white/[0.05]" />
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border border-white/[0.06]"
              style={{ background: 'linear-gradient(135deg, rgba(201,150,58,0.04), transparent)' }}
            >
              {/* Large italic quote mark */}
              <div
                className="text-6xl font-serif leading-none"
                style={{ color: 'rgba(201,150,58,0.25)' }}
              >
                "
              </div>
              <p className="text-sm leading-8 text-white/55 flex-1 -mt-4 italic">
                {t.quote}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                {/* Initial avatar */}
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0"
                  style={{ background: 'rgba(201,150,58,0.15)', color: '#c9963a' }}
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