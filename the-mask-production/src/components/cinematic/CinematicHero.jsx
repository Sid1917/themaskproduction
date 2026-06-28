import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useDeviceType } from '../../hooks/useDeviceType'
import CinematicStageTitle from './CinematicStageTitle'

export default function CinematicHero({
  stages,
  images,
  //instruction,
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
  const deviceType = useDeviceType()

  const activeTitle = useMemo(() => stages[currentStage], [currentStage, stages])
  const activeImage = images?.[currentStage] ?? null

  // Device-specific drag constraints
   // const dragConfig = {
    //mobile: { left: -300, right: 300, top: -200, bottom: 200 },
    //tablet: { left: -400, right: 400, top: -250, bottom: 250 },
    //desktop: { left: -500, right: 500, top: -300, bottom: 300 },
  //} 

  //const constraints = dragConfig[deviceType]

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
    <section className="relative min-h-[100svh] overflow-hidden bg-black text-white">
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
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`absolute inset-0 z-[1] ${background}`} />
      <div className="absolute inset-0 z-[1] opacity-[0.03] bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:80px_80px]" />

      <motion.div
        animate={{ x: [0, 24, 0], y: [0, -24, 0], opacity: [0.16, 0.26, 0.16] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] ${glow} sm:h-[40rem] sm:w-[40rem] sm:blur-[140px] lg:h-[44rem] lg:w-[44rem] lg:blur-[160px]`}
      />

      <div className="relative z-20 flex min-h-[100svh] items-center justify-center overflow-visible px-4 pt-24 sm:px-6 lg:px-12">
        <div className="mx-auto w-full max-w-5xl text-center sm:max-w-6xl flex flex-col items-center justify-center min-h-[60vh]">
        {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-6 sm:mb-8"
          >
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.35em] text-white/60 backdrop-blur-xl sm:px-7 sm:py-3 sm:text-sm">
              {instruction}
            </div>
          </motion.div> */}

          <CinematicStageTitle title={activeTitle} gradient="from-white via-white to-white/20" />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mx-auto mt-6 max-w-2xl text-xs leading-relaxed text-white/55 sm:mt-10 sm:text-base md:text-lg"
          >
            {description}
          </motion.p>

          {(panelTitle || panelSubtitle) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.65 }}
              className="mx-auto mt-6 flex max-w-xs flex-col gap-2 rounded-2xl border border-white/10 bg-black/45 p-4 text-left shadow-soft-glow backdrop-blur-xl sm:mt-10 sm:max-w-md sm:gap-3 sm:p-6 sm:rounded-3xl"
            >
              {panelTitle && (
                <div className="text-[10px] uppercase tracking-[0.35em] text-white/60 sm:text-sm">
                  {panelTitle}
                </div>
              )}
              {panelSubtitle && (
                <p className="text-base font-semibold leading-tight text-white sm:text-xl">
                  {panelSubtitle}
                </p>
              )}
            </motion.div>
          )}

       <motion.div
  onClick={triggerEffect}
  whileTap={{ scale: 0.95 }}
  className="relative z-30 mx-auto mt-8 w-fit overflow-visible cursor-pointer sm:mt-10"
>
  {object(isEffectActive)}
</motion.div>
        </div>
      </div>
    </section>
  )
}
