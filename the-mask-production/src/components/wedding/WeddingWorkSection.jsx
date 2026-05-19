import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const works = [
  {
    category: 'Wedding Film',
    title: 'Aryan & Priya',
    location: 'Udaipur, Rajasthan',
    year: '2024',
    wide: true,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80',
    duration: '4 min film',
  },
  {
    category: 'Destination Wedding',
    title: 'Rohan & Sneha',
    location: 'Goa',
    year: '2025',
    wide: false,
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1600&q=80',
    duration: '6 min film',
  },
  {
    category: 'Royal Wedding',
    title: 'Vikram & Ananya',
    location: 'Jaipur, Rajasthan',
    year: '2024',
    wide: false,
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1600&q=80',
    duration: '8 min film',
  },
  {
    category: 'Intimate Wedding',
    title: 'Kabir & Meera',
    location: 'Mussoorie, Uttarakhand',
    year: '2025',
    wide: true,
    image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1600&q=80',
    duration: '5 min film',
  },
]

const GRAIN = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

function WorkCard({ work, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 56 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden cursor-pointer ${work.wide ? 'md:col-span-2' : 'md:col-span-1'}`}
    >
      <div className={`relative overflow-hidden ${work.wide ? 'aspect-[16/9]' : 'aspect-[4/5]'}`}>
        <img
          src={work.image}
          alt={work.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          onError={(e) => { e.target.style.display = 'none' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-stone-800 via-stone-900 to-black" />
        <div
          className="absolute inset-0 opacity-[0.3] mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: GRAIN, backgroundSize: '180px 180px' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.65)_100%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply" />

        {/* Duration badge */}
        <div
          className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm border text-[9px] uppercase tracking-[0.3em]"
          style={{ borderColor: 'rgba(201,150,58,0.3)', color: '#c9963a' }}
        >
          {work.duration}
        </div>

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div
            className="w-16 h-16 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center border"
            style={{ borderColor: 'rgba(201,150,58,0.4)' }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 4.5l10 5.5-10 5.5V4.5z" fill="#c9963a" fillOpacity="0.9" />
            </svg>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
          <div
            className="text-[9px] uppercase tracking-[0.4em] mb-2 font-medium"
            style={{ color: '#c9963a' }}
          >
            {work.category}
          </div>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h3 className="text-lg font-light text-white/95 leading-snug sm:text-xl">{work.title}</h3>
              <p className="text-xs text-white/40 mt-0.5 tracking-wide">{work.location}</p>
            </div>
            <span className="text-xs text-white/25 font-mono flex-shrink-0 mb-0.5">{work.year}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function WeddingWorkSection() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-60px' })

  return (
    <section className="relative py-24 px-4 sm:py-32 sm:px-6 lg:px-8 bg-black overflow-hidden">
      <div
        className="pointer-events-none absolute top-0 left-1/3 w-[500px] h-[300px] rounded-full blur-[140px]"
        style={{ background: 'rgba(201,150,58,0.07)' }}
      />

      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-10 bg-amber-400/40" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-amber-400/60 font-medium">
              Wedding Portfolio
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
            <h2 className="text-4xl font-light tracking-tight text-white/90 sm:text-5xl lg:text-6xl leading-[1.1]">
              <span className="italic">Love stories we've had </span>
              <br />
              <span className="not-italic font-semibold">the honour to tell</span>
            </h2>
            <button
              className="self-start sm:self-auto text-[11px] uppercase tracking-[0.3em] text-white/35 border-b border-white/15 pb-0.5 transition-all duration-300"
              style={{}}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'rgba(201,150,58,0.7)'
                e.currentTarget.style.borderColor = 'rgba(201,150,58,0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.35)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
              }}
            >
              View All Wedding Films →
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          {works.map((work, i) => (
            <WorkCard key={work.title} work={work} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}