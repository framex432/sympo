import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Rocket } from 'lucide-react'
import { symposiumInfo } from '../data/symposium'

const links = [
  { to: '/', label: 'Home' },
  { to: '/events', label: 'Events' },
  { to: '/team', label: 'Team' },
  { to: '/faq', label: 'FAQ' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="container-xn">
        <nav
          className={`flex items-center justify-between rounded-full border transition-all duration-300 px-4 sm:px-6 ${
            scrolled
              ? 'bg-hull/90 backdrop-blur-md border-hairline shadow-card py-2'
              : 'bg-hull/60 backdrop-blur-sm border-white/10 py-3'
          }`}
        >
          <Link
            to="/"
            className="flex items-center gap-2.5"
            onClick={() => setOpen(false)}
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-nebula-gradient text-void">
              <Rocket size={16} strokeWidth={2.25} />
            </span>

            <span className="font-display font-semibold text-lg tracking-tight text-starlight">
              {symposiumInfo.fullTitle}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium tracking-wide text-mist hover:text-starlight transition-colors ${
                    isActive
                      ? 'text-starlight after:absolute after:left-4 after:right-4 after:-bottom-0.5 after:h-[2px] after:bg-nebula-gradient'
                      : ''
                  }`
                }
              >
                {l.label.toUpperCase()}
              </NavLink>
            ))}
          </div>

          {/* Desktop Register */}
          <div className="hidden md:block">
            <a
              href="https://forms.gle/RpJVv6rKi8npie4t5"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold !py-2.5 !px-5 !text-xs"
            >
              REGISTER
            </a>
          </div>

          <button
            className="md:hidden text-starlight p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl bg-hull/95 backdrop-blur-md border border-hairline shadow-card p-4 flex flex-col gap-1 animate-fadeUp">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-lg text-sm font-medium ${
                    isActive
                      ? 'bg-hull2 text-starlight'
                      : 'text-mist'
                  }`
                }
              >
                {l.label.toUpperCase()}
              </NavLink>
            ))}

            {/* Mobile Register */}
            <a
              href="https://forms.gle/RpJVv6rKi8npie4t5"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-gold mt-1 !py-2.5"
            >
              REGISTER
            </a>
          </div>
        )}
      </div>
    </header>
  )
}