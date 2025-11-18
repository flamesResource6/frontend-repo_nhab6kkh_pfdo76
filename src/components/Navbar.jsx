import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, Sparkles, Music2, Mail, BookOpen, Users, Globe2, Layers, User, Home } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Navbar({ onToggleAudio, isPlaying, onToggleTheme, theme }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const navItems = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/universe', label: 'The Universe', icon: Globe2 },
    { to: '/characters', label: 'Characters', icon: Users },
    { to: '/themes', label: 'Themes', icon: Layers },
    { to: '/excerpt', label: 'Excerpt', icon: BookOpen },
    { to: '/author', label: 'Author', icon: User },
    { to: '/contact', label: 'Contact', icon: Mail },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl shadow-[0_0_60px_rgba(139,92,246,0.15)]">
          <div className="flex items-center justify-between px-4 py-3">
            <Link to="/" className="group inline-flex items-center gap-3">
              <div className="relative">
                <motion.div
                  className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 via-cyan-400 to-amber-300"
                  initial={{ scale: 0.8, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 140, damping: 18 }}
                />
                <Sparkles className="absolute -right-1 -top-1 h-4 w-4 text-amber-200 drop-shadow-[0_0_8px_rgba(251,191,36,0.7)]" />
              </div>
              <div>
                <div className="text-sm tracking-widest text-cyan-200/80">LE PÉRIL</div>
                <div className="-mt-0.5 text-lg font-semibold text-white">A Dystopian Experience</div>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map(({ to, label, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) => `relative mx-1 inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition-all duration-300 ${isActive ? 'text-white' : 'text-cyan-200/80 hover:text-white'}`}
                >
                  {({ isActive }) => (
                    <>
                      <Icon className={`h-4 w-4 ${isActive ? 'text-violet-300' : 'text-cyan-300/80'}`} />
                      <span>{label}</span>
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-violet-600/30 via-cyan-500/20 to-amber-400/20"
                          transition={{ type: 'spring', stiffness: 200, damping: 24 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button onClick={onToggleAudio} aria-label="Toggle music" className={`group relative inline-flex items-center justify-center rounded-xl border border-white/10 p-2 text-cyan-200/80 transition hover:text-white ${isPlaying ? 'bg-cyan-500/10' : 'bg-slate-800/50'}`}>
                <Music2 className={`h-5 w-5 ${isPlaying ? 'text-cyan-300' : ''}`} />
                <span className="pointer-events-none absolute -bottom-7 hidden rounded bg-slate-800/90 px-2 py-1 text-[10px] text-white group-hover:block">{isPlaying ? 'Pause' : 'Play'} ambience</span>
              </button>
              <button onClick={onToggleTheme} aria-label="Toggle theme" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-slate-800/50 p-2 text-cyan-200/80 transition hover:text-white">
                <div className="relative h-5 w-5">
                  <div className={`absolute inset-0 rounded-full transition ${theme === 'dark' ? 'bg-violet-300/90 shadow-[0_0_12px_rgba(167,139,250,0.8)]' : 'bg-amber-300/90 shadow-[0_0_12px_rgba(252,211,77,0.8)]'}`}></div>
                </div>
              </button>
              <button className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-slate-800/50 p-2 text-white" onClick={() => setOpen(!open)}>
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
          {open && (
            <div className="md:hidden border-t border-white/10 px-3 py-2">
              {navItems.map(({ to, label }) => (
                <NavLink key={to} to={to} className={({ isActive }) => `block rounded-lg px-3 py-2 text-sm ${isActive ? 'bg-white/5 text-white' : 'text-cyan-200/80 hover:text-white'}`}>{label}</NavLink>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
