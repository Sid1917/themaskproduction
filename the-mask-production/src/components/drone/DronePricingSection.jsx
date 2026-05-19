import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const plans = [
  {
    name: 'Aerial Starter',
    tag: 'Half Day',
    price: '₹18,000',
    duration: 'up to 4 hours',
    desc: 'Perfect for intimate weddings, small venue reveals, or social content shoots.',
    features: [
      '4K 60fps footage',
      'Licensed DGCA pilot',
      'Up to 4 flight hours',
      '1 edited highlight clip',
      'RAW footage handover',
      'Mumbai / Pune base',
    ],
    highlight: false,
    cta: 'Enquire Now',
  },
  {
    name: 'Cinematic Full Day',
    tag: 'Most Popular',
    price: '₹32,000',
    duration: 'full day shoot',
    desc: 'Our most booked package — everything you need for weddings, events, and corporate shoots.',
    features: [
      '4K 60fps + slow-motion',
      'Licensed DGCA pilot',
      'Full-day coverage (8h)',
      '3 edited aerial cuts',
      'All India travel included',
      'Same-day preview clip',
      'RAW + edited handover',
    ],
    highlight: true,
    cta: 'Book This Package',
  },
  {
    name: 'Brand & Commercial',
    tag: 'Custom',
    price: 'Custom',
    duration: 'multi-day projects',
    desc: 'For advertising campaigns, large events, and commercial brand films needing full aerial production.',
    features: [
      'Multi-day aerial shoots',
      'Gimbal + drone combo',
      'Director on set',
      'Full colour grade',
      'Licensed for broadcast',
      'Dedicated project manager',
      'Delivery to spec',
    ],
    highlight: false,
    cta: 'Get a Quote',
  },
]

export default function DronePricingSection() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-60px' })

  return (
    <section className="relative py-24 px-4 sm:py-32 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #000000, #040a0d, #000000)' }}>

      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[160px] bg-cyan-700/[0.06]" />

      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 sm:mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10 bg-cyan-400/30" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-cyan-400/55 font-medium">Pricing</span>
            <div className="h-px w-10 bg-cyan-400/30" />
          </div>
          <h2 className="text-4xl font-light tracking-tight text-white/90 sm:text-5xl lg:text-6xl leading-[1.1] mb-4">
            <span className="italic">Transparent pricing, </span><br />
            <span className="font-semibold not-italic">no surprises</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-8 text-white/40 sm:text-base">
            Every package includes a DGCA-licensed pilot, full permits management, and edited footage. You just show up.
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
              className={`relative flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border ${
                plan.highlight
                  ? 'border-cyan-400/30 bg-[linear-gradient(135deg,rgba(34,211,238,0.06),transparent)]'
                  : 'border-white/[0.06] bg-transparent'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-cyan-400/15 border border-cyan-400/30 text-[9px] uppercase tracking-[0.3em] text-cyan-400 whitespace-nowrap">
                  {plan.tag}
                </div>
              )}
              {!plan.highlight && (
                <div className="text-[9px] uppercase tracking-[0.3em] text-white/25">{plan.tag}</div>
              )}

              <div>
                <div className="text-sm font-medium text-white/80 mb-1">{plan.name}</div>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className={`text-3xl sm:text-4xl font-light tracking-tight ${plan.highlight ? 'text-cyan-400' : 'text-white/70'}`}>
                    {plan.price}
                  </span>
                  {plan.price !== 'Custom' && (
                    <span className="text-xs text-white/30">/ {plan.duration}</span>
                  )}
                </div>
                <p className="mt-3 text-xs leading-6 text-white/40">{plan.desc}</p>
              </div>

              <div className="h-px bg-white/[0.06]" />

              <ul className="flex flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-xs text-white/55">
                    <div className={`w-1 h-1 rounded-full flex-shrink-0 ${plan.highlight ? 'bg-cyan-400' : 'bg-white/25'}`} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="mailto:hello@maskproduction.in"
                className={`mt-auto text-center text-[11px] uppercase tracking-[0.25em] px-6 py-3.5 rounded-full border transition-all duration-300 ${
                  plan.highlight
                    ? 'border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10'
                    : 'border-white/10 text-white/45 hover:border-white/20 hover:text-white/70'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Fine print */}
        <p className="text-center mt-8 text-[11px] text-white/20 tracking-wide">
          All prices exclusive of GST. Travel beyond 50km from Mumbai billed at actuals. Outstation stays arranged by client.
        </p>
      </div>
    </section>
  )
}