import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import CinematicStageTitle from './CinematicStageTitle'

export default function CinematicHero({
  stages,
  images,
  instruction,
  description,
  background,
  glow,
  effect,
  object,
  panelTitle,
  panelSubtitle,
}) {
  const [currentStage, setCurrentStage] = useState(0)
  const [isEffectActive, setIsEffectActive] = useState(false)
  const timeoutRef = useRef(null)

  const activeTitle = useMemo(() => stages[currentStage], [currentStage, stages])
  const activeImage = images?.[currentStage] ?? null

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const triggerEffect = () => {
    setIsEffectActive(true)
    setCurrentStage((prev) => (prev + 1) % stages.length)

    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setIsEffectActive(false), 550)
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <AnimatePresence>
        {isEffectActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className={`pointer-events-none absolute inset-0 z-40 mix-blend-screen ${effect}`}
          />
        )}
      </AnimatePresence>

      {/* Crossfading background image per stage */}
      <AnimatePresence mode="wait">
        {activeImage && (
          <motion.div
            key={activeImage}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${activeImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Dark overlay so text stays readable */}
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`absolute inset-0 z-[1] ${background}`} />

      <div className="absolute inset-0 z-[1] opacity-[0.03] bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:80px_80px]" />

      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -30, 0], opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[180px] ${glow}`}
      />

      <div className="relative z-20 flex min-h-screen items-center justify-center overflow-visible px-6 pt-24">
        <div className="mx-auto w-full max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-6 py-3 text-xs uppercase tracking-[0.35em] text-white/60 backdrop-blur-xl">
              {instruction}
            </div>
          </motion.div>

          <CinematicStageTitle
            title={activeTitle}
            gradient="from-white via-white to-white/20"
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mx-auto mt-10 max-w-3xl text-base leading-relaxed text-white/50 md:text-xl"
          >
            {description}
          </motion.p>

         <motion.div
  drag
  dragConstraints={{ left: -1600, right: 1600, top: -900, bottom: 900 }}
  dragElastic={0.04}
  dragMomentum={false}
  whileDrag={{ scale: 1.04 }}
  onDragEnd={triggerEffect}
  initial={{ x: 0, y: 0 }}
  animate={{ x: 0, y: 0 }}
  transition={{ type: 'spring', stiffness: 120, damping: 18 }}
  className="relative z-30 mx-auto mt-16 cursor-grab active:cursor-grabbing w-fit"
>
  {object(isEffectActive)}
</motion.div>
        </div>
      </div>
    </section>
  )
}
