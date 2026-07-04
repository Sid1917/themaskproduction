import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const reels = [
  {
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    caption: 'Golden hour over Udaipur palace — 200m elevation ✨',
    likes: '12.4K',
    views: '89K',
  },
  {
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=600&q=80',
    caption: 'The Ghats at dawn. No words needed. 🔥',
    likes: '18.2K',
    views: '210K',
  },
  {
    image: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=600&q=80',
    caption: 'Venue reveal done right — Leela Palace, Jaipur 🏰',
    likes: '9.1K',
    views: '54K',
  },
  {
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
    caption: 'Mumbai from above. The city never gets old 🌆',
    likes: '22.7K',
    views: '340K',
  },
]

function ReelCard({ reel, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative aspect-[9/16] overflow-hidden rounded-2xl cursor-pointer"
      style={{ background: 'linear-gradient(135deg,#0a0f1a,#111)' }}
    >
      <img
        src={reel.image}
        alt={reel.caption}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        onError={(e) => { e.target.style.display = 'none' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="w-14 h-14 rounded-full border border-white/30 bg-black/40 backdrop-blur-sm flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path d="M7 4.5l10 5.5-10 5.5V4.5z" fill="white" fillOpacity="0.9" />
          </svg>
        </div>
      </div>

      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 border-2 border-white/20" />
          <span className="text-[10px] text-white/80 tracking-wide">maskproduction</span>
        </div>
      </div>

      <div className="absolute top-3 right-3">
        <div className="text-[9px] uppercase tracking-[0.2em] text-white/50 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-md border border-white/10">
          REEL
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-xs text-white/80 leading-5 mb-3 line-clamp-2">{reel.caption}</p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="rgba(255,255,255,0.6)">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span className="text-[10px] text-white/50">{reel.likes}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            <span className="text-[10px] text-white/50">{reel.views}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function DroneSocialSection() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-60px' })

  return (
    <section
      className="relative py-24 px-4 sm:py-32 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #000000, #060d12, #000000)' }}
    >
      <div className="pointer-events-none absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full blur-[160px] -translate-y-1/2 bg-cyan-800/[0.08]" />

      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-10 bg-cyan-400/40" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-cyan-400/60 font-medium">
              Social Reels
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
            <h2 className="text-4xl font-light tracking-tight text-white/90 sm:text-5xl lg:text-6xl leading-[1.1]">
              <span className="italic">Shots that stop </span>
              <br />
              <span className="not-italic font-semibold">the scroll</span>
            </h2>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="self-start sm:self-auto text-[11px] uppercase tracking-[0.3em] text-white/35 border-b border-white/15 pb-0.5 hover:text-cyan-300/70 hover:border-cyan-300/30 transition-all duration-300"
            >
              Follow @maskproduction →
            </a>
          </div>

          <p className="mt-4 text-sm text-white/40 max-w-lg">
            Our aerial reels regularly hit 100K+ views. Here's what we've been flying lately.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {reels.map((reel, i) => (
            <ReelCard key={i} reel={reel} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 py-6 border-t border-white/[0.05]"
        >
          {[
            { platform: 'Instagram', count: '28.4K' },
            { platform: 'YouTube', count: '14.1K' },
            { platform: 'Vimeo', count: '6.2K' },
          ].map((s) => (
            <div key={s.platform} className="flex items-center gap-3">
              <div className="text-xl font-light text-cyan-400">{s.count}</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-white/25">
                {s.platform} followers
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}