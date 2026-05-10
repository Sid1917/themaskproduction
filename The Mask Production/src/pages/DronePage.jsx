import { useState } from 'react'
import { motion } from 'framer-motion'
import { DroneObject } from '../components/SceneObjects'

export default function DronePage() {
  const [scanPosition, setScanPosition] = useState({ x: 0, y: 0 })

  return (
    <section className="relative min-h-screen overflow-visible bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_35%)]" />

      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-20 flex min-h-screen items-center justify-center overflow-visible px-6 pt-24">
        <div className="mx-auto w-full max-w-7xl text-center">
          <div className="mb-8 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-6 py-3 text-xs uppercase tracking-[0.35em] text-cyan-100/70 backdrop-blur-xl">
            Drag Drone To Scan
          </div>

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
            <motion.h1
              animate={{
                letterSpacing: ['-0.08em', '-0.1em', '-0.08em'],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-[16vw] font-black uppercase leading-none tracking-[-0.1em] md:text-[8rem] lg:text-[10rem]"
            >
              <span className="bg-gradient-to-b from-cyan-100 via-white to-cyan-400/20 bg-clip-text text-transparent">
                SEE THE WORLD DIFFERENTLY
              </span>
            </motion.h1>

            <motion.div
              animate={{
                y: ['-100%', '100%'],
                opacity: [0.1, 0.45, 0.1],
              }}
              transition={{
                y: { duration: 3, repeat: Infinity, ease: 'linear' },
                opacity: { duration: 2, repeat: Infinity },
              }}
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan-300/20 via-cyan-300/5 to-transparent blur-3xl"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mx-auto mt-10 max-w-3xl text-base leading-relaxed text-cyan-50/50 md:text-xl"
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
  )
}
