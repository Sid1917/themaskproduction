import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const works = [
  {
    category: 'Engagement Film',
    title: 'Akshay & Tejashree',
    location: 'Mumbai, Maharashtra',
    year: '2024',
    wide: true,
    image: '/images/wedding7.png',
    video: '/videos/video1.mp4',
    duration: '4 min film',
  },
  {
    category: 'Pre Wedding',
    title: 'Dheeraj & Pooja',
    location: 'Goa, India',
    year: '2025',
    wide: false,
    image: '/images/prewedding_2.jpeg',
    video: '/videos/prewedding_video2.mp4',
    duration: '6 min film',
  },
  {
    category: 'Royal Wedding',
    title: 'Prashant & Ashwini',
    location: 'Mumbai, Maharashtra',
    year: '2026',
    wide: false,
     image: '/images/wedding5.jpeg',
    video: '/videos/wedding_video3.mp4',
    duration: '8 min film',
  },
  {
    category: 'Pre Wedding',
    title: 'Roshan & Urvashi',
    location: 'Satara, Maharashtra',
    year: '2026',
    wide: true,
   image: '/images/prewedding_1.jpeg',
    video: '/videos/prewedding_video1.mp4',
    duration: '5 min film',
  },
]

// 3 new carousel sections — each rendered at 1080×1020 aspect ratio
const carouselSections = [
  {
    category: 'Pre-Wedding',
    title: 'Golden Hour Sessions',
    location: 'Satara',
    year: '2025',
    duration: 'Photo + Film',
    images: [
      '/images/caraousel1A.jpeg',
      '/images/caraousel1B.jpeg',
      '/images/caraousel1C.jpeg',
      '/images/caraousel1D.jpeg',
      '/images/caraousel1E.jpeg',
      '/images/caraousel1F.jpeg',
    ],
  },
  {
    category: 'Vidhi Candids',
    title: 'Muhrat & Rituals',
    location: 'Destination Wedding, Attasa',
    year: '2025',
    duration: 'Portrait Series',
    images: [
      '/images/caraousel2A.jpeg',
      '/images/caraousel2B.jpeg',
      '/images/caraousel2C.jpeg',
      '/images/caraousel2D.jpeg',
      '/images/caraousel2E.jpeg',
      '/images/caraousel2F.jpeg',
    ],
  },
  {
    category: 'Couple Portraits',
    title: 'Traditional Look',
    location: 'Mumbai & Pune',
    year: '2025',
    duration: '3 min highlight',
    images: [
      '/images/caraousel3A.jpeg',
      '/images/caraousel3B.jpeg',
      '/images/caraousel3C.jpeg',
      '/images/caraousel3D.jpeg',
      '/images/caraousel3E.jpeg',
      '/images/caraousel3F.jpeg',
    ],
  },
   {
    category: 'Post Wedding',
    title: 'Conceptual Portraits',
    location: 'Cine-City',
    year: '2026',
    duration: '2 min highlight',
    images: [
      '/images/caraousel4A.jpeg',
      '/images/caraousel4B.jpeg',
      '/images/caraousel4C.jpeg',
      '/images/caraousel4D.jpeg',
      '/images/caraousel4E.jpeg',
      '/images/caraousel4F.jpeg',
    ],
  },
]

const GRAIN = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

function WorkCard({ work, index }) {
  const ref = useRef(null)
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 56 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden cursor-pointer ${work.wide ? 'md:col-span-2' : 'md:col-span-1'}`}
      onHoverStart={() => {
        if (videoRef.current) {
          videoRef.current.play().catch(() => {})
          setIsPlaying(true)
        }
      }}
      onHoverEnd={() => {
        if (videoRef.current) {
          videoRef.current.pause()
          videoRef.current.currentTime = 0
          setIsPlaying(false)
        }
      }}
    >
      <div className={`relative overflow-hidden ${work.wide ? 'aspect-[16/9]' : 'aspect-[4/5]'}`}>

        {/* 1. Background gradient — bottom layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-800 via-stone-900 to-black" />

        {/* 2. Image — above gradient */}
        <img
          src={work.image}
          alt={work.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          onError={(e) => { e.target.style.display = 'none' }}
        />

        {/* 3. Video — above image, fades in on hover */}
        {work.video && (
          <video
            ref={videoRef}
            loop
            playsInline
            preload="metadata"
            onEnded={() => setIsPlaying(false)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isPlaying ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source src={work.video} type="video/mp4" />
          </video>
        )}

        {/* 4. Subtle overlays — after video so they sit on top lightly */}
        <div
          className="absolute inset-0 opacity-[0.2] mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: GRAIN, backgroundSize: '180px 180px' }}
        />
        <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply" />
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

        <div
          className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm border text-[9px] uppercase tracking-[0.3em]"
          style={{ borderColor: 'rgba(201,150,58,0.3)', color: '#c9963a' }}
        >
          {work.duration}
        </div>

        {/* Play button — shows when not playing */}
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
          isPlaying ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
        }`}>
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
          <div className="text-[9px] uppercase tracking-[0.4em] mb-2 font-medium" style={{ color: '#c9963a' }}>
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

/* ── New carousel card — 1080×1020 aspect ratio ── */
function CarouselCard({ section, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [current, setCurrent] = useState(0)
  const dragStartX = useRef(0)
  const total = section.images.length

  const prev = (e) => { e.stopPropagation(); setCurrent((c) => (c - 1 + total) % total) }
  const next = (e) => { e.stopPropagation(); setCurrent((c) => (c + 1) % total) }

  const onPointerDown = (e) => { dragStartX.current = e.clientX }
  const onPointerUp = (e) => {
    const delta = dragStartX.current - e.clientX
    if (Math.abs(delta) > 40) delta > 0 ? setCurrent((c) => (c + 1) % total) : setCurrent((c) => (c - 1 + total) % total)
  }
  const onTouchStart = (e) => { dragStartX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    const delta = dragStartX.current - e.changedTouches[0].clientX
    if (Math.abs(delta) > 40) delta > 0 ? setCurrent((c) => (c + 1) % total) : setCurrent((c) => (c - 1 + total) % total)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 56 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden cursor-pointer md:col-span-1"
    >
      {/* Exact 1080×1020 aspect ratio */}
      <div
        className="relative overflow-hidden"
        className="relative overflow-hidden aspect-[9/16]"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Slides */}
        {section.images.map((src, i) => (
          <motion.img
            key={src}
            src={src}
            alt={`${section.title} ${i + 1}`}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
            draggable={false}
            initial={false}
            animate={{ opacity: i === current ? 1 : 0, scale: i === current ? 1 : 1.04 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            onError={(e) => { e.target.style.display = 'none' }}
          />
        ))}

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-800/60 via-stone-900/40 to-black/70 pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.25] mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: GRAIN, backgroundSize: '180px 180px' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

        {/* Duration badge */}
        <div
          className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm border text-[9px] uppercase tracking-[0.3em] z-10"
          style={{ borderColor: 'rgba(201,150,58,0.3)', color: '#c9963a' }}
        >
          {section.duration}
        </div>

        {/* Dot / pill indicators */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
          {section.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="rounded-full transition-all duration-300 focus:outline-none"
              style={{
                width: i === current ? '18px' : '5px',
                height: '5px',
                background: i === current ? '#c9963a' : 'rgba(255,255,255,0.28)',
              }}
            />
          ))}
        </div>

        {/* Prev arrow */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:border-amber-500/40"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M7.5 2L3.5 6l4 4" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Next arrow */}
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:border-amber-500/40"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M4.5 2l4 4-4 4" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Swipe hint — first image only */}
        {current === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="absolute bottom-[72px] right-5 z-10 flex items-center gap-1.5 pointer-events-none"
          >
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/20">Swipe</span>
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M1 5h12M8 1l4 4-4 4" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        )}

        {/* Text overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10">
          <div className="text-[9px] uppercase tracking-[0.4em] mb-2 font-medium" style={{ color: '#c9963a' }}>
            {section.category}
          </div>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h3 className="text-lg font-light text-white/95 leading-snug sm:text-xl">{section.title}</h3>
              <p className="text-xs text-white/40 mt-0.5 tracking-wide">{section.location}</p>
            </div>
            <div className="flex flex-col items-end gap-1 flex-shrink-0 mb-0.5">
              <span className="text-xs text-white/25 font-mono">{section.year}</span>
              <span className="text-[9px] text-white/20 tabular-nums">{current + 1} / {total}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ── Main section ── */
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

        {/* Heading */}
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

        {/* Row 1 — original 4 static cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          {works.map((work, i) => (
            <WorkCard key={work.title} work={work} index={i} />
          ))}
        </div>

        {/* Thin gold divider between rows */}
        <div className="my-3 sm:my-4 h-px w-full" style={{ background: 'rgba(201,150,58,0.06)' }} />

        {/* Row 2 — 3 carousel cards at 1080×1020 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 sm:gap-4">
          {carouselSections.map((section, i) => (
            <CarouselCard key={section.title} section={section} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}