import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const navLinks = [
  { href: '/',        label: 'Home',    sub: 'Cinematic storytelling' },
  { href: '/drone',   label: 'Drone',   sub: 'Aerial perspectives'    },
  { href: '/wedding', label: 'Wedding', sub: 'Every moment, forever'  },
  { href: '/events',  label: 'Events',  sub: 'Live & corporate'       },
  { href: '/about',   label: 'About',   sub: 'Our story & team'       },
]

// Thin rule divider between these indices
const dividerAfter = [1, 3]

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen overflow-hidden bg-black text-white">

      {/* ── Top bar ── */}
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/[0.07] bg-black/50 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 md:px-8">

          {/* Brand */}
          <Link to="/" className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/70 hover:text-white/90 transition-colors duration-300 leading-tight">
            <span className="hidden sm:inline">The Mask Production</span>
            <span className="sm:hidden leading-snug">
              <span className="block">The Mask</span>
              <span className="block">Production</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-[11px] uppercase tracking-[0.28em] transition-colors duration-300 relative group
                  ${location.pathname === link.href ? 'text-white/90' : 'text-white/40 hover:text-white/75'}`}
              >
                {link.label}
                {/* Underline for active */}
                {location.pathname === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-[17px] left-0 right-0 h-px"
                    style={{ background: 'linear-gradient(to right, transparent, rgba(201,150,58,0.6), transparent)' }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="md:hidden flex flex-col gap-[5px] p-2 group"
          >
            <span className="block w-5 h-px bg-white/50 group-hover:bg-white/80 transition-colors duration-300" />
            <span className="block w-3.5 h-px bg-white/50 group-hover:bg-white/80 transition-colors duration-300" />
            <span className="block w-5 h-px bg-white/50 group-hover:bg-white/80 transition-colors duration-300" />
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-[60] md:hidden"
              style={{ background: 'rgba(5,3,1,0.85)', backdropFilter: 'blur(8px)' }}
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 280, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-[80vw] max-w-[300px] flex flex-col md:hidden"
              style={{ background: '#080502', borderLeft: '1px solid rgba(201,150,58,0.1)' }}
            >
              {/* Warm top glow */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(to right, transparent, rgba(201,150,58,0.3), transparent)' }}
              />

              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.05]">
                <div className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/60 leading-snug">
                  <span className="block">The Mask</span>
                  <span className="block">Production</span>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="flex flex-col gap-px p-1.5 group"
                >
                  {/* X made of two lines */}
                  <span className="block w-4 h-px bg-white/40 group-hover:bg-white/70 transition-colors rotate-45 translate-y-[0.5px]" />
                  <span className="block w-4 h-px bg-white/40 group-hover:bg-white/70 transition-colors -rotate-45 -translate-y-[0.5px]" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 flex flex-col px-5 py-6 gap-0 overflow-y-auto">
                {navLinks.map((link, i) => {
                  const isActive = location.pathname === link.href

                  return (
                    <div key={link.href}>
                      <motion.div
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <Link
                          to={link.href}
                          onClick={() => setMenuOpen(false)}
                          className={`group flex items-center justify-between py-4 transition-all duration-200
                            ${isActive ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}
                        >
                          <div>
                            {/* Active gold dot */}
                            <div className="flex items-center gap-2.5 mb-0.5">
                              {isActive && (
                                <div
                                  className="w-1 h-1 rounded-full flex-shrink-0"
                                  style={{ background: '#c9963a' }}
                                />
                              )}
                              <span
                                className={`text-[11px] uppercase tracking-[0.3em] font-medium ${
                                  isActive ? 'text-white' : 'text-white/75'
                                }`}
                              >
                                {link.label}
                              </span>
                            </div>
                            <span className="text-[11px] text-white/30 tracking-wide pl-0 ml-0"
                              style={{ paddingLeft: isActive ? '14px' : '0' }}>
                              {link.sub}
                            </span>
                          </div>

                          {/* Arrow — only shows on hover or active */}
                          <svg
                            width="13" height="13" viewBox="0 0 13 13" fill="none"
                            className={`flex-shrink-0 transition-all duration-300 ${
                              isActive ? 'opacity-40' : 'opacity-0 group-hover:opacity-25 -translate-x-1 group-hover:translate-x-0'
                            }`}
                          >
                            <path d="M4 2.5l4.5 4-4.5 4" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </Link>
                      </motion.div>

                      {/* Thin divider between groups */}
                      {dividerAfter.includes(i) && (
                        <div className="h-px my-1" style={{ background: 'rgba(201,150,58,0.08)' }} />
                      )}
                    </div>
                  )
                })}
              </nav>

              {/* Drawer footer */}
              <div className="px-6 py-5 border-t border-white/[0.05]">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/15">
                    © 2026 Mask Pro
                  </span>
                  <div className="flex items-center gap-1.5">
                    <motion.div
                      animate={{ opacity: [1, 0.2, 1] }}
                      transition={{ duration: 1.8, repeat: Infinity }}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: '#c9963a', boxShadow: '0 0 5px rgba(201,150,58,0.6)' }}
                    />
                    <span className="text-[10px] uppercase tracking-[0.18em] text-white/20">
                      Available
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Page content ── */}
      <main className="pt-[65px]">{children}</main>
    </div>
  )
}