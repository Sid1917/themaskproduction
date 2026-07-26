import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const navLinks = [
  { href: '/',        label: 'Home'    },
  { href: '/drone',   label: 'Drone'   },
  { href: '/wedding', label: 'Wedding' },
  { href: '/events',  label: 'Events'  },
  { href: '/about',   label: 'About'   },
]

const socials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/919999999999',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
      </svg>
    ),
  },
  {
    label: 'Vimeo',
    href: 'https://vimeo.com',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 7s-1 6-5 10c-3 3-7 3-9 1s-2-6 1-9 7-4 9-2c1 1 1 3-1 5"/><path d="M3 21c2-4 3-8 2-12"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06]" style={{ background: '#050301' }}>
      {/* Top warm glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(201,150,58,0.25), transparent)' }} />

      {/* CTA band */}
      <div className="relative border-b border-white/[0.05] py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,150,58,0.05),transparent_65%)]" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10 bg-amber-400/30" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-amber-400/50 font-medium">Let's Create Together</span>
            <div className="h-px w-10 bg-amber-400/30" />
          </div>
          <h2 className="text-3xl font-light tracking-tight text-white/90 sm:text-5xl lg:text-6xl leading-[1.1] mb-3">
            <span className="italic">Every project starts </span><br />
            <span className="font-semibold not-italic">with a conversation</span>
          </h2>
          <p className="text-sm text-white/35 mt-4 mb-8 max-w-sm mx-auto leading-7">
            Tell us about your story — big or small, personal or commercial — and let's discuss how we can bring it to the screen.
          </p>
          <a
            href="mailto:hello@maskproduction.in"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border transition-all duration-300 text-sm tracking-[0.1em]"
            style={{
              borderColor: 'rgba(201,150,58,0.35)',
              color: '#c9963a',
              background: 'rgba(201,150,58,0.05)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(201,150,58,0.12)'
              e.currentTarget.style.borderColor = 'rgba(201,150,58,0.6)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(201,150,58,0.05)'
              e.currentTarget.style.borderColor = 'rgba(201,150,58,0.35)'
            }}
          >
            hello@maskproduction.in
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Main footer columns */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70 mb-3">
              The Mask Production
            </div>
            <p className="text-sm leading-7 text-white/30 mb-7 max-w-[220px]">
              7/A 2nd Floor, Kohinoor Building, Sion Bandra Link Road, Mumbai. Based in Mumbai, shooting across India.
            </p>
            <div className="flex items-center gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl border border-white/[0.07] flex items-center justify-center
                    text-white/30 hover:text-amber-300/70 hover:border-amber-300/20 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-white/20 mb-5">Navigate</div>
            <ul className="flex flex-col gap-3.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-white/40 hover:text-white/80 transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-white/20 mb-5">Services</div>
            <ul className="flex flex-col gap-3.5">
              {['Wedding Films', 'Drone Shoots', 'Event Coverage', 'Brand Films', 'Reels'].map((s) => (
                <li key={s}>
                  <span className="text-sm text-white/40 hover:text-white/80 transition-colors duration-200 cursor-pointer">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-white/20 mb-5">Find Us</div>
            <ul className="flex flex-col gap-5">
              {[
                { label: 'Email', value: 'themaskprodcution@gmail.com', href: 'mailto:hello@maskproduction.in' },
                { label: 'Phone', value: '+91 79773 00040 / +91 98704 66963',         href: 'tel:+919999999999' },
                { label: 'Based in', value: 'Mumbai, Maharashtra',  href: null },
                { label: 'Shoots across', value: 'All of India',    href: null },
              ].map((c) => (
                <li key={c.label}>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-white/20 mb-1">{c.label}</div>
                  {c.href ? (
                    <a href={c.href} className="text-sm text-white/45 hover:text-white/80 transition-colors duration-200">
                      {c.value}
                    </a>
                  ) : (
                    <span className="text-sm text-white/45">{c.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-white/15 tracking-wide">
            © 2026 The Mask Production. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#c9963a', boxShadow: '0 0 5px rgba(201,150,58,0.7)' }}
            />
            <span className="text-[11px] text-white/20 uppercase tracking-[0.2em]">
              Available for bookings
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}