import { Link } from 'react-router-dom'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen overflow-hidden bg-black text-white">
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-8">
          <div className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
            The Mask Production
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.25em] text-white/60 md:gap-8 md:text-sm">
            <Link to="/">Home</Link>
            <Link to="/drone">Drone</Link>
            <Link to="/wedding">Wedding</Link>
            <Link to="/events">Events</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
      </nav>

      {children}
    </div>
  )
}
