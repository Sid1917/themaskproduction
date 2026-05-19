import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const testimonials = [
  {
    quote: 'We cried watching our film for the first time — they captured emotions we didn\'t even know were on camera. It felt like a movie about our life.',
    name: 'Priya & Aryan Mehta',
    role: 'Wedding · Udaipur Palace, 2024',
    initials: 'PA',
  },
  {
    quote: 'I was worried they\'d be intrusive. They were completely invisible. But somehow they caught every single thing that mattered. I still don\'t know how.',
    name: 'Sneha & Rohan Kapoor',
    role: 'Wedding · Goa, 2025',
    initials: 'SR',
  },
  {
    quote: 'Our families watch the highlight reel every anniversary. Three years later, it still makes my mother-in-law cry. That\'s the only review that matters.',
    name: 'Ananya & Vikram Singh',
    role: 'Wedding · Jaipur, 2023',
    initials: 'AV',
  },
  {
    quote: 'Worth every rupee and more. We paid for a highlight film and got a piece of art. Book them before they\'re fully booked — they fill up fast.',
    name: 'Meera & Kabir Nair',
    role: 'Wedding · Mussoorie, 2025',
    initials: 'MK',
  },
  {
    quote: 'What set them apart was the pre-shoot call. They genuinely listened. By the wedding day they knew our story better than most of our guests.',
    name: 'Divya & Arjun Sharma',
    role: 'Wedding · Mumbai, 2024',
    initials: 'DA',
  },
  {
    quote: 'The same-day edit they screened at our reception had the entire room in tears. Our guests still talk about it. Absolutely extraordinary work.',
    name: 'Riya & Siddharth Joshi',
    role: 'Wedding · Lonavala, 2024',
    initials: 'RS',
  },
]

export default function WeddingTestimonialsSection() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-60px' })

  return (
    <section className="relative py-24 px-4 sm:py-32 sm:px-6 lg:px-8 bg-black overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 w-[600px] h-[400px] rounded-full blur-[160px]"
        style={{ background: 'rgba(201,150,58,0.06)' }}
      />

      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 sm:mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-10 bg-amber-400/40" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-amber-400/60 font-medium">
              What Couples Say
            </span>
          </div>
          <h2 className="text-4xl font-light tracking-tight text-white/90 sm:text-5xl lg:text-6xl leading-[1.1]">
            <span className="italic">Reviews that mean </span>
            <br />
            <span className="font-semibold not-italic">more than five stars</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-5 p-6 sm:p-8 rounded-2xl border border-white/[0.06]"
              style={{ background: 'linear-gradient(135deg, rgba(201,150,58,0.04), transparent)' }}
            >
              <div
                className="text-6xl font-serif leading-none"
                style={{ color: 'rgba(201,150,58,0.25)' }}
              >
                "
              </div>
              <p className="text-sm leading-8 text-white/55 flex-1 -mt-4 italic">
                {t.quote}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0"
                  style={{ background: 'rgba(201,150,58,0.15)', color: '#c9963a' }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-medium text-white/75">{t.name}</div>
                  <div className="text-[11px] text-white/30 mt-0.5">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}