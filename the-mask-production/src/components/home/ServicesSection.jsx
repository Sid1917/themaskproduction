import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  {
    title: 'Wedding Films',
    subtitle: 'Your love story, told beautifully',
    desc: 'From the quiet morning rituals to the last dance under the stars — we capture every whisper, laugh, and tear with the patience of a storyteller and the eye of a cinematographer.',
    offerings: ['Full-Day Coverage', 'Highlight Reel', 'Feature Film', 'Same Day Edit'],
    image: '/images/home1.webp',
    accent: '#c9963a',
  },
  {
    title: 'Drone Cinematography',
    subtitle: 'Your world from above',
    desc: 'Licensed aerial coverage that transforms ordinary venues into cinematic landscapes. Sweeping reveals, golden hour aerials, and crowd shots that give your story a scale nothing else can.',
    offerings: ['4K Aerial', 'Licensed Pilot', 'Venue Reveals', 'Crowd Aerials'],
    image: '/images/drone_cover.webp',
    video: '/videos/drone_home.mp4',
    accent: '#a87d3a',
  },
  {
    title: 'Event Coverage',
    subtitle: 'Every moment, preserved',
    desc: 'Corporate galas, product launches, TEDx talks, and concerts — captured with multi-camera precision and the same cinematic care we bring to every personal story.',
    offerings: ['Multi-Camera', 'Corporate Events', 'Conferences', 'Live Concerts'],
    image: '/images/home2_g20.webp',
    video: '/videos/corporate_g20.mp4',
    accent: '#b8874a',
  },
  {
    title: 'Brand Films',
    subtitle: 'Stories that move people',
    desc: 'Motion graphics and animated storytelling for brands with a message worth explaining. From concept to final render — built to simplify, engage, and convert.',
    offerings: ['Brand Stories', 'Social Reels', 'Product Films', 'Ad Films'],
    image: '/images/brand_image2.webp',
    video: '/videos/BRAND99_AV_video2.mp4',
    accent: '#c9963a',
  },
]

function ServiceItem({ service, index }) {
  const ref = useRef(null)
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const isEven = index % 2 === 0

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
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col gap-8 sm:gap-0 ${
        isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
      } items-center border-b border-white/[0.06] pb-16 sm:pb-20 mb-16 sm:mb-20 last:border-0 last:mb-0 last:pb-0`}
    >
      {/* Image / Video */}
      <div className="w-full sm:w-1/2 relative overflow-hidden rounded-xl aspect-[4/3] flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-800 via-stone-900 to-black" />

        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => { e.target.style.display = 'none' }}
        />

        {service.video && (
          <video
            ref={videoRef}
            loop
            playsInline
            preload="metadata"
            onEnded={() => setIsPlaying(false)}
            onClick={isPlaying ? handlePauseClick : undefined}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
          >
            <source src={service.video} type="video/mp4" />
          </video>
        )}

      {/* Play / Pause button — always visible, swaps icon based on state */}
        {service.video && (
          <button
            onClick={isPlaying ? handlePauseClick : handlePlayClick}
            aria-label={isPlaying ? `Pause video for ${service.title}` : `Play video for ${service.title}`}
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

        {/* Film grain */}
        <div
          className="absolute inset-0 opacity-[0.25] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '180px 180px',
          }}
        />
        {/* Warm tone overlay */}
        <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply" />
        {/* Corner label */}
        <div className="absolute top-4 left-4 text-[9px] uppercase tracking-[0.4em] px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/10"
          style={{ color: service.accent }}>
          {service.title}
        </div>
      </div>

      {/* Text */}
      <div className={`w-full sm:w-1/2 ${isEven ? 'sm:pl-12 lg:pl-16' : 'sm:pr-12 lg:pr-16'}`}>
        <p className="text-[10px] uppercase tracking-[0.45em] mb-3 font-medium" style={{ color: service.accent }}>
          {service.subtitle}
        </p>
        <h3 className="text-2xl font-light text-white/90 mb-4 leading-snug sm:text-3xl lg:text-4xl">
          {service.title}
        </h3>
        <p className="text-sm leading-8 text-white/45 sm:text-base mb-7">
          {service.desc}
        </p>

        {/* Offerings as simple pill list */}
        <div className="flex flex-wrap gap-2">
          {service.offerings.map((o) => (
            <span
              key={o}
              className="text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border border-white/[0.08] text-white/35 hover:border-amber-400/20 hover:text-amber-300/50 transition-all duration-300"
            >
              {o}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function ServicesSection() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-60px' })

  return (
    <section className="relative py-24 px-4 sm:py-32 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #0a0804, #000000, #0a0804)' }}>

      {/* Warm glow */}
      <div className="pointer-events-none absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full blur-[160px] -translate-y-1/2 bg-amber-700/[0.06]" />

      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 sm:mb-24 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10 bg-amber-400/30" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-amber-400/55 font-medium">What We Do</span>
            <div className="h-px w-10 bg-amber-400/30" />
          </div>
          <h2 className="text-4xl font-light tracking-tight text-white/90 sm:text-5xl lg:text-6xl leading-[1.1] mb-4">
            <span className="italic">One vision</span><br />
            <span className="font-semibold not-italic">every kind of story</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-white/40 sm:text-base">
           Weddings, commercial campaigns, corporate events, and drone cinematography — unified by the same commitment to craft, detail, and impact.
          </p>
        </motion.div>

        {/* Alternating service rows */}
        <div>
          {services.map((service, i) => (
            <ServiceItem key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}