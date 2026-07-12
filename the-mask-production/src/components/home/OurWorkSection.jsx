import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const works = [
  {
    category: 'Wedding Film',
    title: 'Sushant & Tejasvi',
    location: 'Destination Wedding, Attasa',
    year: '2025',
    wide: true,
    image: '/images/home1.webp',
    video: '/videos/wedding_video1.mp4',
  },
  {
    category: 'Pre-Wedding Film',
    title: 'Golden Hour Over Ghats',
    location: 'Urmudi Dam, Maharashtra',
    year: '2025',
    wide: false,
    image: '/images/home2.webp',
  },
  {
    category: 'Drone Shot ',
    title: 'GOVT Work',
    location: 'Gateway of India, Mumbai',
    year: '2025',
    wide: false,
    image: '/images/gateway.webp',
  },
  {
    category: 'Maharashtra Govt Event',
    title: 'Shivaji Maharaj Jayanti Celebration',
    location: 'Mumbai, Maharashtra',
    year: '2025',
    wide: true,
    image: '/images/govt1.webp',
  },
]

function WorkCard({ work, index }) {
  const ref = useRef(null)
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const handlePlayClick = (e) => {
    e.stopPropagation()
    if (!videoRef.current) return
    videoRef.current.play().catch(() => {})
    setIsPlaying(true)
  }

  const handlePauseClick = (e) => {
    e.stopPropagation()
    if (!videoRef.current) return
    videoRef.current.pause()
    videoRef.current.currentTime = 0
    setIsPlaying(false)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 56 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden cursor-pointer ${work.wide ? 'md:col-span-2' : 'md:col-span-1'}`}
    >
      <div className={`relative overflow-hidden ${work.wide ? 'aspect-[16/9]' : 'aspect-[4/5]'}`}>

        {/* 1. Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-800 via-stone-900 to-black" />

        {/* 2. Image */}
        <img
          src={work.image}
          alt={work.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          onError={(e) => { e.target.style.display = 'none' }}
        />

        {/* 3. Video — plays on click, not hover */}
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

        {/* 4. Overlays */}
        <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply" />
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

        {/* 5. Play / Pause button — always visible, swaps icon based on state */}
        {work.video && (
          <button
            onClick={isPlaying ? handlePauseClick : handlePlayClick}
            aria-label={isPlaying ? `Pause video for ${work.title}` : `Play video for ${work.title}`}
            className="absolute inset-0 flex items-center justify-center z-10"
          >
            <div
              className="w-16 h-16 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center border transition-transform duration-300 hover:scale-110"
              style={{ borderColor: 'rgba(201,150,58,0.4)' }}
            >
              {isPlaying ? (
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <rect x="4" y="3" width="4" height="14" rx="1" fill="#c9963a" fillOpacity="0.9" />
                  <rect x="12" y="3" width="4" height="14" rx="1" fill="#c9963a" fillOpacity="0.9" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7 4.5l10 5.5-10 5.5V4.5z" fill="#c9963a" fillOpacity="0.9" />
                </svg>
              )}
            </div>
          </button>
        )}

        {/* 6. Text */}
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10">
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

export default function OurWorkSection() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-60px' })

  return (
    <section className="relative py-24 px-4 sm:py-32 sm:px-6 lg:px-8 bg-black overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-1/3 w-[500px] h-[300px] rounded-full blur-[140px] bg-amber-700/[0.07]" />

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
            <span className="text-[10px] uppercase tracking-[0.5em] text-amber-400/60 font-medium">Our Work</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
            <h2 className="text-4xl font-light tracking-tight text-white/90 sm:text-5xl lg:text-6xl leading-[1.1]">
              <span className="italic">Stories we've had </span><br />
              <span className="not-italic font-semibold">the honour to tell</span>
            </h2>
            <button className="self-start sm:self-auto text-[11px] uppercase tracking-[0.3em] text-white/35 border-b border-white/15 pb-0.5 hover:text-amber-300/70 hover:border-amber-300/30 transition-all duration-300">
              View All Films →
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