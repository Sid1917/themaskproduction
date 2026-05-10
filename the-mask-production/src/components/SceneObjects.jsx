import { motion } from 'framer-motion'

// HOME — Cinematic Camera with lens, shutter ring, record dot
export function CameraObject(isEffectActive) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      className="relative"
      style={{ width: 180, height: 130 }}   // ← smaller overall
    >
      {/* Camera body */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-zinc-700 to-zinc-900 shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/10" />

      {/* Top bump / viewfinder */}
      <div className="absolute -top-4 left-5 w-14 h-5 rounded-t-lg bg-zinc-800 border border-white/10" />

      {/* Flash */}
      <div className="absolute -top-4 right-7 w-4 h-4 rounded-t-md bg-zinc-700 border border-white/10" />

      {/* Lens housing — smaller */}
      <div className="absolute left-5 top-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-zinc-950 border-4 border-zinc-700 shadow-[0_0_0_4px_rgba(255,255,255,0.04)] flex items-center justify-center">
        {/* Outer rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[72px] h-[72px] rounded-full border border-dashed border-cyan-400/30"
        />
        {/* Lens glass */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-zinc-800 via-blue-950 to-zinc-900 border border-white/10 flex items-center justify-center shadow-[inset_0_0_14px_rgba(34,211,238,0.2)]">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-400/40 to-blue-600/40 border border-cyan-300/20" />
          <div className="absolute top-2 left-3 w-2 h-1.5 rounded-full bg-white/25 rotate-[-30deg]" />
        </div>
      </div>

      {/* Cyan glow behind lens — new attractive effect */}
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute left-5 top-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-cyan-500/20 blur-xl"
      />

      {/* Right side controls — scaled down */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
        {/* Shutter button */}
        <motion.div
          animate={{ scale: isEffectActive ? [1, 0.85, 1] : 1 }}
          transition={{ duration: 0.2 }}
          className="w-6 h-6 rounded-full bg-gradient-to-b from-zinc-500 to-zinc-700 border border-white/10 shadow-[0_2px_6px_rgba(0,0,0,0.5)] flex items-center justify-center"
        >
          <div className="w-3 h-3 rounded-full bg-zinc-400" />
        </motion.div>
        {/* Dial */}
        <div className="w-6 h-6 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center">
          <div className="w-0.5 h-3 rounded-full bg-zinc-500" />
        </div>
        {/* Record dot */}
        <motion.div
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.9)] self-center"
        />
      </div>

      {/* Flash burst */}
      <motion.div
        animate={{ opacity: isEffectActive ? [0, 0.9, 0] : 0, scale: isEffectActive ? [0.5, 2, 3] : 0.5 }}
        transition={{ duration: 0.4 }}
        className="pointer-events-none absolute inset-0 rounded-xl bg-white blur-2xl"
      />
    </motion.div>
  )
}

// DRONE — Realistic X-frame drone with 4 spinning props
export function DroneObject(isEffectActive) {
  const arms = [
    { rotate: 45,  x: -52, y: -52 },
    { rotate: -45, x:  52, y: -52 },
    { rotate: -45, x: -52, y:  52 },
    { rotate: 45,  x:  52, y:  52 },
  ]
  return (
    <motion.div
      animate={{ y: [0, -18, 0], rotate: [0, 1, 0, -1, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      className="relative flex items-center justify-center"
      style={{ width: 220, height: 220 }}
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
  return (
    <motion.div
      animate={{ y: [0, -10, 0], rotate: [0, 2, 0, -2, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="relative flex items-center justify-center"
      style={{ width: 200, height: 160 }}
    >
      {/* Left ring */}
      <motion.div
        animate={{ x: [0, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute"
        style={{ left: 20 }}
      >
        <div
          className="rounded-full border-[14px] border-amber-400 shadow-[0_0_30px_rgba(251,191,36,0.5),inset_0_2px_4px_rgba(255,255,255,0.3)]"
          style={{ width: 110, height: 110 }}
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
        style={{ right: 20 }}
      >
        <div
          className="rounded-full border-[14px] border-yellow-300 shadow-[0_0_30px_rgba(253,224,71,0.5),inset_0_2px_4px_rgba(255,255,255,0.3)]"
          style={{ width: 110, height: 110 }}
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
  return (
    <motion.div
      animate={{ rotate: [-8, 8, -8] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      className="relative flex items-end justify-center"
      style={{ width: 160, height: 260 }}
    >
      {/* Light housing */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-10 rounded-b-xl bg-gradient-to-b from-zinc-600 to-zinc-800 border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.6)] z-10 flex items-center justify-center">
        <motion.div
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="w-6 h-6 rounded-full bg-fuchsia-300 shadow-[0_0_20px_rgba(240,171,252,1)]"
        />
      </div>

      {/* Mount arm */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-2 h-6 bg-zinc-600 z-10" />

      {/* Light cone beam */}
      <motion.div
        animate={{ opacity: isEffectActive ? [0.5, 1, 0.5] : [0.25, 0.45, 0.25] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute top-14 left-1/2 -translate-x-1/2"
        style={{
          width: 0,
          height: 0,
          borderLeft: '55px solid transparent',
          borderRight: '55px solid transparent',
          borderTop: '180px solid rgba(232,121,249,0.18)',
          filter: 'blur(8px)',
        }}
      />
      {/* Inner brighter cone */}
      <motion.div
        animate={{ opacity: isEffectActive ? [0.6, 1, 0.6] : [0.3, 0.5, 0.3] }}
        transition={{ duration: 1.2, repeat: Infinity }}
        className="absolute top-14 left-1/2 -translate-x-1/2"
        style={{
          width: 0,
          height: 0,
          borderLeft: '22px solid transparent',
          borderRight: '22px solid transparent',
          borderTop: '170px solid rgba(240,171,252,0.35)',
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
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      className="relative"
      style={{ width: 220, height: 180 }}
    >
      {/* Board body */}
      <div className="absolute bottom-0 left-0 right-0 h-[140px] rounded-b-2xl rounded-t-sm bg-gradient-to-b from-zinc-800 to-zinc-900 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
        {/* Lines on board */}
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="mx-4 mt-3 h-[1px] bg-white/10" style={{ marginTop: i === 0 ? 12 : 10 }} />
        ))}
        {/* Text labels */}
        <div className="absolute bottom-5 left-5 right-5 flex justify-between">
          <div>
            <div className="text-[9px] text-white/40 uppercase tracking-widest">Scene</div>
            <div className="text-sm font-black text-white/80">01</div>
          </div>
          <div>
            <div className="text-[9px] text-white/40 uppercase tracking-widest">Take</div>
            <div className="text-sm font-black text-white/80">A</div>
          </div>
          <div>
            <div className="text-[9px] text-white/40 uppercase tracking-widest">Roll</div>
            <div className="text-sm font-black text-emerald-400">REC</div>
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
        className="absolute top-0 left-0 right-0 h-[48px] origin-bottom"
        style={{ perspective: 600 }}
      >
        <div className="h-full rounded-t-2xl bg-zinc-900 border border-white/10 overflow-hidden flex">
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