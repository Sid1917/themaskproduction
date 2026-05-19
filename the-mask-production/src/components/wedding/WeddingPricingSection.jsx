import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const plans = [
  {
    name: 'The Essentials',
    tag: 'Half Day',
    price: '₹45,000',
    duration: 'up to 6 hours',
    desc: 'Perfect for intimate ceremonies, court weddings, or couples who want a beautiful highlight film without the full-day commitment.',
    features: [
      '1 cinematographer',
      'Up to 6 hours coverage',
      '3-minute highlight reel',
      'Colour-graded footage',
      'Private delivery link',
      'RAW footage included',
    ],
    highlight: false,
    cta: 'Enquire Now',
  },
  {
    name: 'The Full Story',
    tag: 'Most Popular',
    price: '₹85,000',
    duration: 'full day coverage',
    desc: 'Our most loved package — two cinematographers, drone coverage, and a feature film that tells your whole story from start to finish.',
    features: [
      '2 cinematographers',
      'Full day coverage (12h)',
      '5-minute highlight reel',
      '20-minute feature film',
      'Drone aerial coverage',
      'Same-day preview clip',
      'Colour grade + music',
      'RAW footage handover',
    ],
    highlight: true,
    cta: 'Book This Package',
  },
  {
    name: 'The Cinematic',
    tag: 'Premium',
    price: '₹1,40,000',
    duration: 'multi-day wedding',
    desc: 'For multi-day weddings, destination shoots, and couples who want every ritual, every laugh, and every tear preserved in cinematic detail.',
    features: [
      '3 cinematographers',
      'Multi-day full coverage',
      'Short film (30+ min)',
      'Highlight + teaser reels',
      'Drone + gimbal package',
      'Pre-wedding shoot',
      'Same day edit',
      'Dedicated coordinator',
    ],
    highlight: false,
    cta: 'Get a Quote',
  },
]

export default function WeddingPricingSection() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-60px' })

  return (
    <section
      className="relative py-24 px-4 sm:py-32 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #000000, #070502, #000000)' }}
    >
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[160px]"
        style={{ background: 'rgba(201,150,58,0.06)' }}
      />

      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 sm:mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10 bg-amber-400/30" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-amber-400/55 font-medium">Pricing</span>
            <div className="h-px w-10 bg-amber-400/30" />
          </div>
          <h2 className="text-4xl font-light tracking-tight text-white/90 sm:text-5xl lg:text-6xl leading-[1.1] mb-4">
            <span className="italic">Honest pricing, </span>
            <br />
            <span className="font-semibold not-italic">nothing hidden</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-8 text-white/40 sm:text-base">
            Every package includes editing, colour grading, and music licensing. What you see is exactly what you pay.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border"
              style={{
                borderColor: plan.highlight ? 'rgba(201,150,58,0.35)' : 'rgba(255,255,255,0.06)',
                background: plan.highlight
                  ? 'linear-gradient(135deg,rgba(201,150,58,0.06),transparent)'
                  : 'transparent',
              }}
            >
              {plan.highlight && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[9px] uppercase tracking-[0.3em] whitespace-nowrap border"
                  style={{
                    background: 'rgba(201,150,58,0.15)',
                    borderColor: 'rgba(201,150,58,0.35)',
                    color: '#c9963a',
                  }}
                >
                  {plan.tag}
                </div>
              )}
              {!plan.highlight && (
                <div className="text-[9px] uppercase tracking-[0.3em] text-white/25">{plan.tag}</div>
              )}

              <div>
                <div className="text-sm font-medium text-white/80 mb-1">{plan.name}</div>
                <div className="flex items-baseline gap-2 mt-2">
                  <span
                    className="text-3xl sm:text-4xl font-light tracking-tight"
                    style={{ color: plan.highlight ? '#c9963a' : 'rgba(255,255,255,0.7)' }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-xs text-white/30">/ {plan.duration}</span>
                </div>
                <p className="mt-3 text-xs leading-6 text-white/40">{plan.desc}</p>
              </div>

              <div className="h-px bg-white/[0.06]" />

              <ul className="flex flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-xs text-white/55">
                    <div
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: plan.highlight ? '#c9963a' : 'rgba(255,255,255,0.25)' }}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              
              <a
                href="mailto:hello@maskproduction.in"
                className="mt-auto text-center text-[11px] uppercase tracking-[0.25em] px-6 py-3.5 rounded-full border transition-all duration-300"
                style={{
                  borderColor: plan.highlight ? 'rgba(201,150,58,0.4)' : 'rgba(255,255,255,0.1)',
                  color: plan.highlight ? '#c9963a' : 'rgba(255,255,255,0.45)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = plan.highlight
                    ? 'rgba(201,150,58,0.1)'
                    : 'rgba(255,255,255,0.04)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-8 text-[11px] text-white/20 tracking-wide">
          All prices exclusive of GST. Outstation travel arranged and billed at actuals. Pre-wedding shoots available as add-ons.
        </p>
      </div>
    </section>
  )
}