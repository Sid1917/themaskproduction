
// import { useMemo, useRef, useState } from 'react'
// import { AnimatePresence, motion } from 'framer-motion'

// export default function CinematicStageTitle({ title, gradient }) {
//   const containerRef = useRef(null)
//   const [pointer, setPointer] = useState({ x: 0, y: 0 })

//   // Group glyphs by word so a word never splits across a line break.
//   // Each word becomes its own inline-flex unit (no internal wrapping);
//   // only whole words are allowed to wrap to the next line.
//   const wordLayout = useMemo(() => {
//     const lines = title.split('\n')
//     let globalIndex = 0

//     return lines.map((line, lineIndex) => {
//       const words = line.split(' ').filter((w) => w.length > 0)
//       return {
//         lineIndex,
//         words: words.map((word, wordIndex) => {
//           const glyphs = word.split('').map((glyph) => {
//             const g = {
//               glyph,
//               glyphIndex: globalIndex,
//               x: globalIndex * 45,
//               y: lineIndex * 120,
//             }
//             globalIndex += 1
//             return g
//           })
//           globalIndex += 1 // account for the space after this word
//           return { wordIndex, glyphs }
//         }),
//       }
//     })
//   }, [title])

//   return (
//     <div
//       ref={containerRef}
//       onMouseMove={(event) => {
//         const rect = containerRef.current?.getBoundingClientRect()
//         if (!rect) return
//         setPointer({ x: event.clientX - rect.left, y: event.clientY - rect.top })
//       }}
//       className="relative z-30 w-full"
//     >
//       <AnimatePresence>
//         <motion.div
//   key={title}
//   initial={{ opacity: 0, y: 30 }}
//   animate={{ opacity: 1, y: 0 }}
//   exit={{ opacity: 0, y: -20 }}
//   transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
//   className="relative mx-auto flex w-full max-w-[90vw] flex-col items-center justify-center sm:max-w-[1000px]"
//   style={{ perspective: 4000 }}
// >
//           {wordLayout.map((line) => (
//             <motion.div
//               key={`${title}-${line.lineIndex}`}
//               initial={{ opacity: 0, y: 80 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.8,
//                 delay: line.lineIndex * 0.08,
//               }}
//               className="relative flex flex-wrap items-center justify-center gap-x-[0.28em] gap-y-1"
//               style={{
//                 fontSize: 'clamp(1.75rem, 6.5vw, 4rem)',
//                 fontWeight: 900,
//                 lineHeight: 1.15,
//                 letterSpacing: '0.02em',
//                 textTransform: 'uppercase',
//               }}
//             >
//               {line.words.map((word) => (
//                 <span
//                   key={`word-${word.wordIndex}`}
//                   className="inline-flex whitespace-nowrap"
//                   style={{ transformStyle: 'preserve-3d' }}
//                 >
//                   {word.glyphs.map((glyphData) => {
//                     const distanceX = pointer.x - glyphData.x - 420
//                     const distanceY = pointer.y - glyphData.y - 120
//                     const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
//                     const intensity = Math.max(0, 1 - distance / 320)

//                     return (
//                       <motion.span
//                         key={`${glyphData.glyph}-${glyphData.glyphIndex}`}
//                        initial={{
//   opacity: 0,
//   y: 40,
//   filter: 'blur(10px)',
// }}
// animate={{
//   opacity: 1,
//   y: intensity * distanceY * -0.06,
//   rotateY: intensity * distanceX * 0.03,
//   x: intensity * distanceX * -0.06,
//   scale: 1 + intensity * 0.06,
//   filter: `blur(${Math.max(0, intensity * 0.25)}px)`,
// }}
                         
//                         transition={{
//                           duration: 1,
//                           delay: glyphData.glyphIndex * 0.025,
//                           ease: [0.22, 1, 0.36, 1],
//                         }}
//                         whileHover={{
//                           y: -12,
//                           scale: 1.08,
//                           color: '#67e8f9',
//                           textShadow: '0px 0px 20px rgba(103,232,249,0.6)',
//                         }}
//                         style={{
//                           display: 'inline-block',
//                           transformStyle: 'preserve-3d',
//                         }}
//                         className={`bg-gradient-to-b bg-clip-text text-transparent ${gradient} drop-shadow-[0_0_40px_rgba(255,255,255,0.25)]`}
//                       >
//                         {glyphData.glyph}
//                       </motion.span>
//                     )
//                   })}
//                 </span>
//               ))}
//             </motion.div>
//           ))}
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   )
// }

import { AnimatePresence, motion } from 'framer-motion'

export default function CinematicStageTitle({ title, gradient }) {
  const lines = title.split('\n')

  return (
    <div className="relative z-30 w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex w-full max-w-[90vw] flex-col items-center justify-center sm:max-w-[1000px]"
        >
          {lines.map((line, i) => (
            <div
              key={i}
              className={`bg-gradient-to-b bg-clip-text text-transparent ${gradient}`}
              style={{
                fontSize: 'clamp(1.75rem, 6.5vw, 4rem)',
                fontWeight: 900,
                lineHeight: 1.15,
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                textAlign: 'center',
              }}
            >
              {line}
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}