import { useState } from 'react'
import { motion } from 'framer-motion'
import { DroneObject } from '../components/cinematic/SceneObjects'
import DroneStatsBar from '../components/drone/DroneStatsBar'
import DroneWorkSection from '../components/drone/DroneWorkSection'
import DroneSocialSection from '../components/drone/DroneSocialSection'
import DronePricingSection from '../components/drone/DronePricingSection'
import DroneProcessSection from '../components/drone/DroneProcessSection'
import Footer from '../components/home/Footer'

const DRONE_STAGES = [
  'See The World Differently',
  'Above Every Moment',
  'Cinematic From Above',
  'Licensed. Precise. Stunning.',
]

export default function DronePage() {
  const [scanPosition, setScanPosition] = useState({ x: 0, y: 0 })

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen overflow-visible bg-black text-white">
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/drone/hero-poster.jpg"
            className="h-full w-full object-cover opacity-60"
          >
            <source src="/videos/drone_showreel.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_35%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="relative z-20 flex min-h-[100svh] items-center justify-center overflow-visible px-4 pt-24 sm:px-6 lg:px-10">
          <div className="mx-auto w-full max-w-6xl text-center">
            {/* <div className="mx-auto mb-8 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-[11px] uppercase tracking-[0.35em] text-cyan-100/70 backdrop-blur-xl sm:px-5 sm:py-3 sm:text-xs">
              Drag Drone To Scan
            </div> */}

            <motion.div
              style={{
                rotateX: scanPosition.y * -0.02,
                rotateY: scanPosition.x * 0.02,
                scale: 1 + Math.abs(scanPosition.x) * 0.00008,
                transformPerspective: 1400,
              }}
              transition={{ type: 'spring', stiffness: 100, damping: 18 }}
              className="relative"
            >
              <h1
  className="mx-auto max-w-[18ch] text-[clamp(1.75rem,6.5vw,4rem)] font-black uppercase leading-[1.15] tracking-[0.02em] sm:max-w-[20ch]"
>
  <span className="bg-gradient-to-b from-white via-white to-white/20 bg-clip-text text-transparent">
    SEE THE WORLD DIFFERENTLY
  </span>
</h1>

              <motion.div
                animate={{ y: ['-100%', '100%'], opacity: [0.1, 0.45, 0.1] }}
                transition={{
                  y: { duration: 3, repeat: Infinity, ease: 'linear' },
                  opacity: { duration: 2, repeat: Infinity },
                }}
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan-300/20 via-cyan-300/5 to-transparent blur-3xl"
              />
            </motion.div>

            <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, delay: 0.35 }}
  className="mx-auto mt-4 max-w-[22rem] text-[13px] leading-relaxed text-white/55 sm:mt-10 sm:max-w-2xl sm:text-base md:text-lg"
>
  Cinematic aerial visuals designed to elevate perspective through immersive motion, dynamic storytelling, and futuristic visual exploration.
</motion.p>

            <motion.div
              drag
              dragConstraints={{ left: -1800, right: 1800, top: -1000, bottom: 1000 }}
              dragElastic={0.03}
              dragMomentum={false}
              whileDrag={{ scale: 1.04 }}
              onDrag={(_, info) => setScanPosition({ x: info.offset.x, y: info.offset.y })}
              onDragEnd={() => setScanPosition({ x: 0, y: 0 })}
              className="relative z-40 mx-auto mt-16 w-fit cursor-grab active:cursor-grabbing"
            >
              {DroneObject(true)}
            </motion.div>
          </div>
        </div>
      </section>

      <DroneStatsBar />
      <DroneWorkSection />
      <DroneProcessSection />
      <DroneSocialSection />
      <DronePricingSection />
      <Footer />
    </>
  )
}