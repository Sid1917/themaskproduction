import { motion } from 'framer-motion'
import { useDeviceType } from '../../hooks/useDeviceType'

export function CameraObject({ isEffectActive }) {
  const deviceType = useDeviceType()

  // Dynamic sizing: compact on mobile, balanced on tablet, prominent on desktop
  const sizeConfig = {
    mobile: {
      width: 'w-[130px]',
      height: 'h-[100px]',
      lensBox: 'w-14 h-14',
      lensHousing: 56,       // px — used for absolute sizing inside lens
      lensGlass: 'w-7 h-7',
      lensCore: 'w-4 h-4',
      lensDot: 'w-1.5 h-1.5',
      outerRing: 'w-[50px] h-[50px]',
      innerRing: 'w-10 h-10',
      topBump: 'w-7 h-3 left-3',
      flash: 'right-5',
      hotshoe: 'left-6 right-9',
      gripWidth: 'w-4',
      shutterSize: 'w-3 h-3',
      shutterInner: 'w-1.5 h-1.5',
      dialSize: 'w-3 h-3',
      dialLine: 'w-px h-2',
      recordDot: 'w-1.5 h-1.5',
      brandSize: '5px',
      groundGlow: 'w-10 h-1.5',
    },
    tablet: {
      width: 'w-[200px]',
      height: 'h-[155px]',
      lensBox: 'w-[72px] h-[72px]',
      lensHousing: 72,
      lensGlass: 'w-9 h-9',
      lensCore: 'w-5 h-5',
      lensDot: 'w-2 h-2',
      outerRing: 'w-[64px] h-[64px]',
      innerRing: 'w-12 h-12',
      topBump: 'w-9 h-3.5 left-3',
      flash: 'right-6',
      hotshoe: 'left-7 right-11',
      gripWidth: 'w-4',
      shutterSize: 'w-3.5 h-3.5',
      shutterInner: 'w-2 h-2',
      dialSize: 'w-3.5 h-3.5',
      dialLine: 'w-px h-2.5',
      recordDot: 'w-2 h-2',
      brandSize: '6px',
      groundGlow: 'w-14 h-2',
    },
   desktop: {
  width: 'w-[260px]',
  height: 'h-[200px]',
  lensBox: 'w-[80px] h-[80px]',
  lensHousing: 80,
  lensGlass: 'w-10 h-10',
  lensCore: 'w-5 h-5',
  lensDot: 'w-2 h-2',
  outerRing: 'w-[70px] h-[70px]',
  innerRing: 'w-[52px] h-[52px]',
  topBump: 'w-10 h-4 left-4',
  flash: 'right-7',
  hotshoe: 'left-8 right-12',
  gripWidth: 'w-5',
  shutterSize: 'w-4 h-4',
  shutterInner: 'w-2 h-2',
  dialSize: 'w-4 h-4',
  dialLine: 'w-px h-2.5',
  recordDot: 'w-2 h-2',
  brandSize: '6px',
  groundGlow: 'w-16 h-2',
},
  }

  const s = sizeConfig[deviceType]

  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      className={`relative flex items-center justify-center ${s.width} ${s.height}`}
    >
      {/* Camera body */}
      <div
        className="absolute inset-0 rounded-xl border border-white/10"
        style={{
          background: 'linear-gradient(160deg,#4a4a4a 0%,#2a2a2a 40%,#1a1a1a 100%)',
          boxShadow: '0 16px 48px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)',
        }}
      />

      {/* Grip texture */}
      <div
        className={`absolute right-0 top-1.5 bottom-1.5 ${s.gripWidth} rounded-r-xl border-l border-white/5`}
        style={{ background: 'linear-gradient(180deg,#333 0%,#1c1c1c 100%)' }}
      >
        {[...Array(5)].map((_, i) => (
          <div key={i} className="mx-0.5 mt-1.5 h-px rounded-full bg-white/5" />
        ))}
      </div>

      {/* Top bump */}
      <div className={`absolute -top-3 ${s.topBump} rounded-t-md bg-zinc-800 border border-white/10 border-b-0`} />

      {/* Flash */}
      <div className={`absolute -top-2 ${s.flash} w-3 h-3 rounded-t-sm bg-zinc-700 border border-white/[0.08] border-b-0`} />

      {/* Hotshoe rail */}
      <div className={`absolute -top-1.5 ${s.hotshoe} h-0.5 bg-zinc-700 rounded-sm`} />

      {/* Strap lug left */}
      <div className="absolute top-2 left-2 w-1 h-2 bg-zinc-700 rounded-sm border border-white/[0.06]" />

      {/* Strap lug right */}
      <div className={`absolute top-2 ${s.flash} w-1 h-2 bg-zinc-700 rounded-sm border border-white/[0.06]`} />

      {/* Lens glow */}
      <motion.div
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
        className={`absolute left-3 top-1/2 -translate-y-1/2 ${s.lensBox} rounded-full blur-lg`}
        style={{ background: 'rgba(34,211,238,0.15)' }}
      />

      {/* Lens housing */}
      <div
        className={`absolute left-3 top-1/2 -translate-y-1/2 ${s.lensBox} rounded-full flex items-center justify-center`}
        style={{
          background: 'radial-gradient(circle at 35% 35%,#3a3a3a,#111)',
          border: '2px solid #333',
          boxShadow: '0 0 0 1px rgba(255,255,255,0.04), 0 6px 24px rgba(0,0,0,0.8)',
        }}
      >
        {/* Outer dashed rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className={`absolute ${s.outerRing} rounded-full border border-dashed border-cyan-400/25`}
        />

        {/* Inner counter-rotating ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          className={`absolute ${s.innerRing} rounded-full border border-white/[0.06]`}
        />

        {/* Lens glass */}
        <div
          className={`${s.lensGlass} rounded-full flex items-center justify-center relative`}
          style={{
            background: 'radial-gradient(circle at 30% 30%, #1a3a5c 0%, #0a0f1a 50%, #0d1a2e 100%)',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: 'inset 0 0 14px rgba(34,211,238,0.2)',
          }}
        >
          {/* Inner lens core */}
          <div
            className={`${s.lensCore} rounded-full flex items-center justify-center`}
            style={{
              background: 'radial-gradient(circle at 35% 35%, rgba(34,211,238,0.5), rgba(20,80,180,0.4))',
              border: '1px solid rgba(34,211,238,0.3)',
            }}
          >
            <motion.div
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`${s.lensDot} rounded-full bg-cyan-400`}
              style={{ boxShadow: '0 0 6px rgba(34,211,238,0.9)' }}
            />
          </div>

          {/* Lens shine */}
          <div className="absolute top-1 left-2 w-2 h-1 rounded-full bg-white/20 -rotate-[35deg]" />
        </div>
      </div>

      {/* Brand label */}
      <div
        className="absolute bottom-2 right-8"
        style={{
          fontFamily: 'monospace',
          fontSize: s.brandSize,
          color: 'rgba(255,255,255,0.15)',
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
        }}
      >
        MASK PRO
      </div>

      {/* Right side controls */}
      <div className={`absolute ${s.flash} top-1/2 -translate-y-1/2 flex flex-col gap-1.5 items-center`}>
        {/* Shutter */}
        <motion.div
          animate={{ scale: isEffectActive ? [1, 0.85, 1] : 1 }}
          transition={{ duration: 0.2 }}
          className={`${s.shutterSize} rounded-full flex items-center justify-center border border-white/10`}
          style={{
            background: 'linear-gradient(180deg,#666,#333)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.6)',
          }}
        >
          <div className={`${s.shutterInner} rounded-full bg-zinc-400`} />
        </motion.div>

        {/* Dial */}
        <div className={`${s.dialSize} rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center`}>
          <div className={`${s.dialLine} rounded-full bg-zinc-500`} />
        </div>

        {/* Record dot */}
        <motion.div
          animate={{ opacity: [1, 0.15, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          className={`${s.recordDot} rounded-full bg-red-500`}
          style={{ boxShadow: '0 0 6px rgba(239,68,68,0.9)' }}
        />
      </div>

      {/* Ground glow */}
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2], scaleX: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
        className={`absolute -bottom-4 left-1/2 -translate-x-1/2 ${s.groundGlow} rounded-full blur-md`}
        style={{ background: 'rgba(34,211,238,0.2)' }}
      />

      {/* Flash burst */}
      <motion.div
        animate={{
          opacity: isEffectActive ? [0, 0.9, 0] : 0,
          scale: isEffectActive ? [0.5, 2, 3] : 0.5,
        }}
        transition={{ duration: 0.4 }}
        className="pointer-events-none absolute inset-0 rounded-xl bg-white blur-2xl"
      />
    </motion.div>
  )
}

// DRONE — Realistic X-frame drone with 4 spinning props
export function DroneObject(isEffectActive) {
  const deviceType = useDeviceType()

  // Device-specific sizing
  const sizeConfig = {
    mobile: { width: 'w-[180px]', height: 'h-[180px]', armScale: 0.8 },
    tablet: { width: 'w-[240px]', height: 'h-[240px]', armScale: 1 },
    desktop: { width: 'w-[300px]', height: 'h-[300px]', armScale: 1.1 },
  }

  const config = sizeConfig[deviceType]
  const scale = config.armScale

  const arms = [
    { rotate: 45,  x: -52 * scale, y: -52 * scale },
    { rotate: -45, x:  52 * scale, y: -52 * scale },
    { rotate: -45, x: -52 * scale, y:  52 * scale },
    { rotate: 45,  x:  52 * scale, y:  52 * scale },
  ]
  return (
    <motion.div
      animate={{ y: [0, -18, 0], rotate: [0, 1, 0, -1, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      className={`relative flex items-center justify-center ${config.width} ${config.height}`}
    >
      {/* Arms */}
      {arms.map((arm, i) => (
        <div
          key={i}
          className="absolute"
          style={{ transform: `translate(${arm.x / 2}px, ${arm.y / 2}px) rotate(${arm.rotate}deg)`, width: 80, height: 10 }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-r from-zinc-600 to-zinc-800 border border-white/10" />
        </div>
      ))}

      {/* Center body */}
      <div className="relative z-10 w-16 h-10 rounded-xl bg-gradient-to-b from-zinc-600 to-zinc-900 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex items-center justify-center">
        <motion.div
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]"
        />
      </div>

      {/* 4 Propellers */}
      {arms.map((arm, i) => (
        <div
          key={`prop-${i}`}
          className="absolute"
          style={{ transform: `translate(${arm.x}px, ${arm.y}px)` }}
        >
          {/* Motor hub */}
          <div className="absolute -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-zinc-700 border border-white/20 z-10" />
          {/* Spinning blades */}
          <motion.div
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 0.4, repeat: Infinity, ease: 'linear' }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ width: 44, height: 44 }}
          >
            <div className="absolute top-1/2 left-0 w-full h-[6px] -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            <div className="absolute left-1/2 top-0 h-full w-[6px] -translate-x-1/2 rounded-full bg-gradient-to-b from-transparent via-white/60 to-transparent" />
          </motion.div>
        </div>
      ))}

      {/* Ground shadow / glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scaleX: [1, 1.15, 1] }}
        transition={{ duration: 3.5, repeat: Infinity }}
        className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 w-32 h-4 rounded-full bg-cyan-400/20 blur-xl"
      />
    </motion.div>
  )
}

// WEDDING — Two gold rings interlinked
export function WeddingObject(isEffectActive) {
  const deviceType = useDeviceType()

  // Device-specific sizing
  const sizeConfig = {
    mobile: { 
      width: 'w-[160px]', 
      height: 'h-[140px]',
      ringSize: 80,
      ringBorder: 10,
      ringSpacing: 10,
    },
    tablet: { 
      width: 'w-[220px]', 
      height: 'h-[185px]',
      ringSize: 100,
      ringBorder: 12,
      ringSpacing: 15,
    },
    desktop: { 
      width: 'w-[280px]', 
      height: 'h-[230px]',
      ringSize: 130,
      ringBorder: 14,
      ringSpacing: 20,
    },
  }

  const config = sizeConfig[deviceType]

  return (
    <motion.div
      animate={{ y: [0, -10, 0], rotate: [0, 2, 0, -2, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className={`relative flex items-center justify-center ${config.width} ${config.height}`}
    >
      {/* Left ring */}
      <motion.div
        animate={{ x: [0, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute"
        style={{ left: config.ringSpacing }}
      >
        <div
          className={`rounded-full border-amber-400 shadow-[0_0_30px_rgba(251,191,36,0.5),inset_0_2px_4px_rgba(255,255,255,0.3)]`}
          style={{ width: config.ringSize, height: config.ringSize, borderWidth: config.ringBorder }}
        >
          {/* Ring shine */}
          <div className="absolute top-3 left-4 w-8 h-3 rounded-full bg-white/30 rotate-[-30deg]" />
        </div>
      </motion.div>

      {/* Right ring */}
      <motion.div
        animate={{ x: [0, 4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute"
        style={{ right: config.ringSpacing }}
      >
        <div
          className={`rounded-full border-yellow-300 shadow-[0_0_30px_rgba(253,224,71,0.5),inset_0_2px_4px_rgba(255,255,255,0.3)]`}
          style={{ width: config.ringSize, height: config.ringSize, borderWidth: config.ringBorder }}
        >
          <div className="absolute top-3 left-4 w-8 h-3 rounded-full bg-white/30 rotate-[-30deg]" />
        </div>
      </motion.div>

      {/* Sparkles */}
      {[
        { top: '10%', left: '50%', delay: 0 },
        { top: '70%', left: '20%', delay: 0.4 },
        { top: '20%', left: '80%', delay: 0.8 },
        { top: '80%', left: '70%', delay: 1.2 },
      ].map((s, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
          transition={{ duration: 1.6, repeat: Infinity, delay: s.delay }}
          className="absolute w-2 h-2 rounded-full bg-amber-200 shadow-[0_0_8px_rgba(251,191,36,0.9)]"
          style={{ top: s.top, left: s.left }}
        />
      ))}

      {/* Glow burst on effect */}
      <motion.div
        animate={{ opacity: isEffectActive ? [0, 0.5, 0] : 0 }}
        transition={{ duration: 0.5 }}
        className="pointer-events-none absolute inset-0 rounded-full bg-amber-300/30 blur-3xl"
      />
    </motion.div>
  )
}

// EVENTS — Stage spotlight / concert light beam
export function EventsObject(isEffectActive) {
  const deviceType = useDeviceType()

  // Device-specific sizing
  const sizeConfig = {
    mobile: { 
      width: 'w-[140px]', 
      height: 'h-[220px]',
      outerConeLeft: '40px',
      outerConeRight: '40px',
      outerConeTop: '140px',
      innerConeLeft: '16px',
      innerConeRight: '16px',
      innerConeTop: '130px',
    },
    tablet: { 
      width: 'w-[190px]', 
      height: 'h-[290px]',
      outerConeLeft: '48px',
      outerConeRight: '48px',
      outerConeTop: '160px',
      innerConeLeft: '19px',
      innerConeRight: '19px',
      innerConeTop: '150px',
    },
    desktop: { 
      width: 'w-[240px]', 
      height: 'h-[340px]',
      outerConeLeft: '55px',
      outerConeRight: '55px',
      outerConeTop: '180px',
      innerConeLeft: '22px',
      innerConeRight: '22px',
      innerConeTop: '170px',
    },
  }

  const config = sizeConfig[deviceType]

  return (
    <motion.div
      animate={{ rotate: [-8, 8, -8] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      className={`relative flex items-end justify-center ${config.width} ${config.height}`}
    >
      {/* Light housing */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-8 rounded-b-xl bg-gradient-to-b from-zinc-600 to-zinc-800 border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.6)] z-10 flex items-center justify-center md:w-14 md:h-10">
        <motion.div
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="w-4 h-4 rounded-full bg-fuchsia-300 shadow-[0_0_20px_rgba(240,171,252,1)] md:w-6 md:h-6"
        />
      </div>

      {/* Mount arm */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-1.5 h-5 bg-zinc-600 z-10 md:top-8 md:h-6 md:w-2" />

      {/* Light cone beam */}
      <motion.div
        animate={{ opacity: isEffectActive ? [0.5, 1, 0.5] : [0.25, 0.45, 0.25] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          top: 'clamp(10px, 5%, 14px)',
          width: 0,
          height: 0,
          borderLeft: `${config.outerConeLeft} solid transparent`,
          borderRight: `${config.outerConeRight} solid transparent`,
          borderTop: `${config.outerConeTop} solid rgba(232,121,249,0.18)`,
          filter: 'blur(8px)',
        }}
      />
      {/* Inner brighter cone */}
      <motion.div
        animate={{ opacity: isEffectActive ? [0.6, 1, 0.6] : [0.3, 0.5, 0.3] }}
        transition={{ duration: 1.2, repeat: Infinity }}
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          top: 'clamp(10px, 5%, 14px)',
          width: 0,
          height: 0,
          borderLeft: `${config.innerConeLeft} solid transparent`,
          borderRight: `${config.innerConeRight} solid transparent`,
          borderTop: `${config.innerConeTop} solid rgba(240,171,252,0.35)`,
          filter: 'blur(3px)',
        }}
      />

      {/* Floor glow pool */}
      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4], scaleX: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-6 rounded-full bg-fuchsia-400/40 blur-xl"
      />
    </motion.div>
  )
}

// ABOUT — Film clapperboard
export function AboutObject(isEffectActive) {
  const deviceType = useDeviceType()

  // Device-specific sizing
  const sizeConfig = {
    mobile: { 
      width: 'w-[170px]', 
      height: 'h-[135px]',
      boardHeight: 'h-[105px]',
      boardRadius: 'rounded-b-lg rounded-t-sm',
      clapperHeight: 'h-[32px]',
      clapperRadius: 'rounded-t-lg',
      textSize: 'text-[7px]',
      numberSize: 'text-xs',
    },
    tablet: { 
      width: 'w-[220px]', 
      height: 'h-[175px]',
      boardHeight: 'h-[135px]',
      boardRadius: 'rounded-b-xl rounded-t-sm',
      clapperHeight: 'h-[40px]',
      clapperRadius: 'rounded-t-xl',
      textSize: 'text-[8px]',
      numberSize: 'text-sm',
    },
    desktop: { 
      width: 'w-[280px]', 
      height: 'h-[225px]',
      boardHeight: 'h-[175px]',
      boardRadius: 'rounded-b-2xl rounded-t-sm',
      clapperHeight: 'h-[48px]',
      clapperRadius: 'rounded-t-2xl',
      textSize: 'text-[9px]',
      numberSize: 'text-sm',
    },
  }

  const config = sizeConfig[deviceType]

  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      className={`relative ${config.width} ${config.height}`}
    >
      {/* Board body */}
      <div className={`absolute bottom-0 left-0 right-0 ${config.boardHeight} ${config.boardRadius} bg-gradient-to-b from-zinc-800 to-zinc-900 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]`}>
        {/* Lines on board */}
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="mx-3 mt-2 h-[0.5px] bg-white/10 md:mx-4 md:mt-3" />
        ))}
        {/* Text labels */}
        <div className="absolute bottom-3 left-3 right-3 flex justify-between md:bottom-5 md:left-5 md:right-5">
          <div>
            <div className={`${config.textSize} text-white/40 uppercase tracking-widest`}>Scene</div>
            <div className={`${config.numberSize} font-black text-white/80`}>01</div>
          </div>
          <div>
            <div className={`${config.textSize} text-white/40 uppercase tracking-widest`}>Take</div>
            <div className={`${config.numberSize} font-black text-white/80`}>A</div>
          </div>
          <div>
            <div className={`${config.textSize} text-white/40 uppercase tracking-widest`}>Roll</div>
            <div className={`${config.numberSize} font-black text-emerald-400`}>REC</div>
          </div>
        </div>
      </div>

      {/* Clapper top — hinged, slaps on effect */}
      <motion.div
        animate={isEffectActive
          ? { rotateX: [0, -40, 0], originY: 1 }
          : { rotateX: 0 }
        }
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={`absolute top-0 left-0 right-0 ${config.clapperHeight} origin-bottom`}
        style={{ perspective: 600 }}
      >
        <div className={`h-full ${config.clapperRadius} bg-zinc-900 border border-white/10 overflow-hidden flex`}>
          {/* Black & white diagonal stripes */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-full ${i % 2 === 0 ? 'bg-white' : 'bg-zinc-900'}`}
              style={{ transform: 'skewX(-20deg)', transformOrigin: 'bottom' }}
            />
          ))}
        </div>
      </motion.div>

      {/* Emerald glow */}
      <motion.div
        animate={{ opacity: isEffectActive ? [0, 0.6, 0] : 0 }}
        transition={{ duration: 0.4 }}
        className="pointer-events-none absolute inset-0 rounded-2xl bg-emerald-400/20 blur-2xl"
      />
    </motion.div>
  )
}