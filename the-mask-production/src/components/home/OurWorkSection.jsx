import { useRef , useState } from 'react'
import { motion, useInView } from 'framer-motion'

const works = [
  {
    category: 'Wedding Film',
    title: 'Aryan & Priya',
    location: 'Udaipur, Rajasthan',
    year: '2024',
    wide: true,
    image: '/images/home1.jpeg',
    video: '/videos/video1.mp4',
  },
  {
    category: 'Aerial',
    title: 'Golden Hour Over Ghats',
    location: 'Varanasi, UP',
    year: '2024',
    wide: false,
    image: '/images/home2.jpeg',
  },
  {
    category: 'Corporate Event',
    title: 'TEDx Mumbai',
    location: 'NSCI Dome, Mumbai',
    year: '2025',
    wide: false,
    image: '/images/home3.jpeg',
  },
  {
    category: 'Wedding Film',
    title: 'Rohan & Sneha',
    location: 'Goa',
    year: '2025',
    wide: true,
    image: '/images/home4.jpeg',
  },
]

function WorkCard({ work, index }) {
  const ref = useRef(null)
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const handlePlayToggle = (e) => {
    e.stopPropagation()
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play().catch(() => {})
      setIsPlaying(true)
    }
  }

  return (
    <motion.div
      ref={ref}
      onHoverStart={() => {
        if (videoRef.current) {
          videoRef.current.play().catch(() => {})
        }
      }}
      onHoverEnd={() => {
        if (videoRef.current) {
          videoRef.current.pause()
          videoRef.current.currentTime = 0
        }
      }}
      initial={{ opacity: 0, y: 56 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden cursor-pointer ${work.wide ? 'md:col-span-2' : 'md:col-span-1'}`}
    >
     <div className={`relative overflow-hidden ${work.wide ? 'aspect-[16/9]' : 'aspect-[4/5]'}`}>
        {/* Warm fallback */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-800 via-stone-900 to-black" />
        <img
          src={work.image}
          alt={work.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          onError={(e) => { e.target.style.display = 'none' }}
        />
        {work.video && (
          <video
            ref={videoRef}
            loop
            playsInline
            preload="metadata"
            onEnded={() => setIsPlaying(false)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
          >
            <source src={work.video} type="video/mp4" />
          </video>
        )}
        {/* Film grain */}
        <div
          className="absolute inset-0 opacity-[0.3] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '180px 180px',
          }}
        />
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.65)_100%)]" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

        {/* Play button on hover */}
        {/* Play / pause button */}
        {work.video && (
          <div
            onClick={handlePlayToggle}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
          >
            <div className="w-16 h-16 rounded-full border border-amber-300/40 bg-black/30 backdrop-blur-sm flex items-center justify-center">
              {isPlaying ? (
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <rect x="4" y="3" width="4" height="14" fill="#fbbf24" fillOpacity="0.9" />
                  <rect x="12" y="3" width="4" height="14" fill="#fbbf24" fillOpacity="0.9" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7 4.5l10 5.5-10 5.5V4.5z" fill="#fbbf24" fillOpacity="0.9" />
                </svg>
              )}
            </div>
          </div>
        )}

        {/* Info */}
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
