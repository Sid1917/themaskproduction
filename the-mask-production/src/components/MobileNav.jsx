import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocation, Link } from 'react-router-dom'

const navItems = [
  {
    label: 'Home',
    desc: 'Cinematic storytelling',
    icon: '🏠',
    color: 'cyan',
    href: '/',
    group: 1,
  },
  {
    label: 'Drone',
    desc: 'Aerial perspectives',
    icon: '🚁',
    color: 'purple',
    href: '/drone',
    group: 1,
  },
  {
    label: 'Wedding',
    desc: 'Every moment, forever',
    icon: '💍',
    color: 'amber',
    href: '/wedding',
    group: 2,
  },
  {
    label: 'Commercial',
    desc: 'Live & corporate',
    icon: '🎬',
    color: 'fuchsia',
    href: '/commercial',
    group: 2,
  },
  {
    label: 'About',
    desc: 'Our story & team',
    icon: '🎥',
    color: 'emerald',
    href: '/about',
    group: 3,
  },
]

const colorMap = {
  cyan:    { bg: 'rgba(34,211,238,0.12)',   text: '#22d3ee' },
  purple:  { bg: 'rgba(139,92,246,0.12)',   text: '#a78bfa' },
  amber:   { bg: 'rgba(251,191,36,0.12)',   text: '#fbbf24' },
  fuchsia: { bg: 'rgba(240,171,252,0.12)',  text: '#f0abfc' },
  emerald: { bg: 'rgba(52,211,153,0.12)',   text: '#34d399' },
}

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  // Group items with dividers between groups
  const grouped = navItems.reduce((acc, item, i) => {
    const prev = navItems[i - 1]
    if (prev && prev.group !== item.group) acc.push({ divider: true, key: `div-${i}` })
    acc.push(item)
    return acc
  }, [])

  return (
    <>
      {/* ── Top bar ── */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4
        border-b border-white/[0.06] bg-black/60 backdrop-blur-xl">
        <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/90 leading-tight">
          <span className="block">The Mask</span>
          <span className="block">Production</span>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="w-9 h-9 rounded-[10px] bg-white/[0.06] border border-white/[0.12]
            flex items-center justify-center"
          aria-label="Open menu"
        >
          {/* Hamburger icon */}
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect x="2" y="4.5" width="14" height="1.5" rx="0.75" fill="rgba(255,255,255,0.8)" />
            <rect x="2" y="8.25" width="10" height="1.5" rx="0.75" fill="rgba(255,255,255,0.8)" />
            <rect x="2" y="12" width="14" height="1.5" rx="0.75" fill="rgba(255,255,255,0.8)" />
          </svg>
        </button>
      </div>

      {/* ── Full-screen overlay ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-xl"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-[85vw] max-w-[340px]
                bg-[#0a0a0a] border-l border-white/[0.08]
                flex flex-col px-5 py-5"
            >
              {/* Drawer top */}
              <div className="flex items-center justify-between mb-9">
                <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/90 leading-tight">
                  <span className="block">The Mask</span>
                  <span className="block">Production</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 rounded-[10px] bg-white/[0.06] border border-white/[0.12]
                    flex items-center justify-center"
                  aria-label="Close menu"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 3l10 10M13 3L3 13" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 flex flex-col gap-1">
                {grouped.map((item, i) => {
                  if (item.divider) {
                    return (
                      <div key={item.key} className="h-px bg-white/[0.06] my-2" />
                    )
                  }

                  const isActive = location.pathname === item.href
                  const colors = colorMap[item.color]

                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.3 }}
                    >
                      <Link
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3.5 px-4 py-3.5 rounded-xl
                          border transition-all duration-200 no-underline
                          ${isActive
                            ? 'bg-white/[0.07] border-white/[0.10]'
                            : 'border-transparent hover:bg-white/[0.04] hover:border-white/[0.06]'
                          }`}
                      >
                        {/* Icon pill */}
                        <div
                          className="w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0 text-base"
                          style={{ background: colors.bg }}
                        >
                          <span style={{ color: colors.text }}>{item.icon}</span>
                        </div>

                        {/* Text */}
                        <div className="flex-1 min-w-0">
                          <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/90">
                            {item.label}
                          </div>
                          <div className="text-[11px] text-white/35 mt-0.5 truncate">
                            {item.desc}
                          </div>
                        </div>

                        {/* Arrow */}
                        <svg
                          width="14" height="14" viewBox="0 0 14 14" fill="none"
                          className={isActive ? 'opacity-50' : 'opacity-20'}
                        >
                          <path d="M5 3l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>

              {/* Bottom bar */}
              <div className="flex items-center justify-between pt-5 border-t border-white/[0.06]">
                <span className="text-[10px] uppercase tracking-[0.15em] text-white/20">
                  © 2026 Mask Pro
                </span>
                <div className="flex items-center gap-1.5">
                  <motion.div
                    animate={{ opacity: [1, 0.2, 1] }}
                    transition={{ duration: 1.4, repeat: Infinity }}
                    className="w-1.5 h-1.5 rounded-full bg-red-500"
                    style={{ boxShadow: '0 0 6px rgba(239,68,68,0.8)' }}
                  />
                  <span className="text-[10px] uppercase tracking-[0.1em] text-white/30">
                    Available
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}