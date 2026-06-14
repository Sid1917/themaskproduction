import { useMemo, useRef, useState } from 'react'
import { layout, prepare } from '@chenglou/pretext'
import { AnimatePresence, motion } from 'framer-motion'

export default function CinematicStageTitle({ title, gradient }) {
  const containerRef = useRef(null)
  const [pointer, setPointer] = useState({ x: 0, y: 0 })

  const preparedText = useMemo(() => {
    try {
      return prepare(title.replace(/\n/g, ' '), '900 96px Inter')
    } catch {
      return null
    }
  }, [title])

  const textLayout = useMemo(() => {
    if (!preparedText) return null
    try {
      return layout(preparedText, 1000, { lineHeight: 0.9, align: 'center' })
    } catch {
      return null
    }
  }, [preparedText])

 const glyphLayout = useMemo(() => {
  const lines = title.split('\n')

  return lines.map((line, lineIndex) => ({
    lineIndex,
    glyphs: line.split('').map((glyph, glyphIndex) => ({
      glyph,
      glyphIndex,
      x: glyphIndex * 45,
      y: lineIndex * 120,
    })),
  }))
}, [title])

  return (
    <div
      ref={containerRef}
      onMouseMove={(event) => {
        const rect = containerRef.current?.getBoundingClientRect()
        if (!rect) return
        setPointer({ x: event.clientX - rect.left, y: event.clientY - rect.top })
      }}
      className="relative z-30 w-full"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 120, filter: 'blur(20px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -80, filter: 'blur(20px)' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex w-full max-w-[90vw] flex-col items-center justify-center sm:max-w-[1000px]"
          style={{ perspective: 1600 }}
        >
          {(glyphLayout.length > 0 ? glyphLayout : [{
            lineIndex: 0,
            glyphs: title.split('').map((glyph, glyphIndex) => ({
              glyph,
              glyphIndex,
              x: glyphIndex * 60,
              y: 0,
            })),
          }]).map((line) => (
            <motion.div
              key={`${title}-${line.lineIndex}`}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: line.lineIndex * 0.08,
              }}
              className="relative flex flex-wrap items-center justify-center"
              style={{
                fontSize: 'clamp(2.0rem, 7vw, 4rem)',
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
              }}
            >
              {line.glyphs.map((glyphData) => {
                const distanceX = pointer.x - glyphData.x - 420
                const distanceY = pointer.y - glyphData.y - 120
                const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
                const intensity = Math.max(0, 1 - distance / 320)

                return (
                  <motion.span
                    key={`${glyphData.glyph}-${glyphData.glyphIndex}`}
                    initial={{
                      opacity: 0,
                      y: 120,
                      rotateX: -90,
                      filter: 'blur(20px)',
                    }}
                    animate={{
                      opacity: 1,
                      y: intensity * distanceY * -0.06,
                      rotateX: intensity * distanceY * -0.03,
                      rotateY: intensity * distanceX * 0.03,
                      x: intensity * distanceX * -0.06,
                      y: intensity * distanceY * -0.06,
                      scale: 1 + intensity * 0.12,
                      filter: `blur(${Math.max(0, intensity * 0.25)}px)`,
                    }}
                    transition={{
                      duration: 1,
                      delay: glyphData.glyphIndex * 0.025,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{
                      y: -12,
                      scale: 1.08,
                      color: '#67e8f9',
                      textShadow: '0px 0px 20px rgba(103,232,249,0.6)',
                    }}
                    style={{
                      display: 'inline-block',
                      transformStyle: 'preserve-3d',
                    }}
                    className={`bg-gradient-to-b bg-clip-text text-transparent ${gradient} drop-shadow-[0_0_40px_rgba(255,255,255,0.25)]`}
                  >
                    {glyphData.glyph === ' ' ? '\u00a0' : glyphData.glyph}
                  </motion.span>
                )
              })}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
