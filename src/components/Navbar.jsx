import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { createWhatsAppLink } from '../utils/whatsapp'
import { navCollections, navPointe } from '../data/products'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const location = useLocation()
  const dropdownTimeout = useRef(null)

  useEffect(() => {
    setMenuOpen(false)
    setActiveDropdown(null)
    setMobileExpanded(null)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const fittingWaUrl = createWhatsAppLink('Salve, vorrei prenotare una seduta di Pointe Shoe Fitting in negozio.')

  const linkBase = 'text-[11px] tracking-[0.22em] uppercase font-light transition-colors duration-300'
  const linkColor = 'text-stone-900 hover:opacity-60'
  const linkClass = `${linkBase} ${linkColor}`

  const handleMouseEnter = (name) => {
    clearTimeout(dropdownTimeout.current)
    setActiveDropdown(name)
  }
  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 120)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-stone-50 border-b border-stone-200/70 py-4 whitespace-nowrap">
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">

        {/* Nav — Left */}
        <nav className="hidden md:flex items-center gap-10">

          {/* COLLECTIONS dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('collections')}
            onMouseLeave={handleMouseLeave}
          >
            <button className={`${linkClass} flex items-center gap-1`}>
              Collections
              <svg className="w-2.5 h-2.5 mt-px" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === 'collections' && (
              <div
                className="absolute top-full left-0 mt-3 w-[260px] bg-stone-50 border border-stone-200 shadow-lg py-6 px-6"
                onMouseEnter={() => handleMouseEnter('collections')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="mb-5">
                  <p className="text-[9px] tracking-[0.32em] uppercase text-stone-400 font-light mb-3">Women</p>
                  <div className="flex flex-col gap-2 pl-3 border-l border-stone-200">
                    {navCollections.women.items.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="text-[11px] tracking-[0.18em] uppercase text-stone-600 hover:text-[#c3197a] font-light transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2 border-t border-stone-100 pt-5">
                  {navCollections.topLevel.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="text-[11px] tracking-[0.22em] uppercase text-stone-800 hover:text-[#c3197a] font-light transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* POINTE E BALLET SHOES dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('pointe')}
            onMouseLeave={handleMouseLeave}
          >
            <button className={`${linkClass} flex items-center gap-1`}>
              Pointe e Ballet Shoes
              <svg className="w-2.5 h-2.5 mt-px" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === 'pointe' && (
              <div
                className="absolute top-full left-0 mt-3 w-[240px] bg-stone-50 border border-stone-200 shadow-lg py-5 px-6"
                onMouseEnter={() => handleMouseEnter('pointe')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex flex-col gap-2">
                  {navPointe.items.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="text-[11px] tracking-[0.18em] uppercase text-stone-600 hover:text-[#c3197a] font-light transition-colors py-0.5"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Logo — Centre */}
        <Link to="/" className="group shrink-0 inline-flex items-center">
          <img
            src="/Logo-Interno-Danza-fuxia-small.png"
            alt="Interno Danza"
            className="h-10 md:h-12 w-auto"
          />
        </Link>

        {/* Nav — Right */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink
            to="/gallery"
            className={({ isActive }) => `${linkBase} ${linkColor} ${isActive ? 'opacity-60' : ''}`}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `${linkBase} ${linkColor} ${isActive ? 'opacity-60' : ''}`}
          >
            Contact Us
          </NavLink>
          <a
            href={fittingWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-[0.22em] uppercase px-5 py-2.5 border border-[#c3197a] text-[#c3197a] transition-all duration-300 font-light hover:bg-[#c3197a] hover:text-white"
          >
            Book Fitting
          </a>
        </div>

        {/* Hamburger — Mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 text-stone-900"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-px bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-current transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-stone-50 pt-24 px-8 pb-8 overflow-y-auto overflow-x-auto">
          <div className="max-w-3xl mx-auto flex flex-col gap-1">

          {/* Collections accordion */}
          <button
            onClick={() => setMobileExpanded(mobileExpanded === 'collections' ? null : 'collections')}
            className="flex items-center justify-between text-[11px] tracking-[0.22em] uppercase text-stone-800 font-light py-3 border-b border-stone-100"
          >
            Collections
            <svg
              className={`w-3 h-3 transition-transform ${mobileExpanded === 'collections' ? 'rotate-180' : ''}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileExpanded === 'collections' && (
            <div className="pl-4 flex flex-col gap-1 pt-2 pb-3">
              <p className="text-[9px] tracking-[0.32em] uppercase text-stone-400 font-light mb-2">Women</p>
              {navCollections.women.items.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-[11px] tracking-[0.18em] uppercase text-stone-600 font-light py-1.5 pl-3 border-l border-stone-200"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-2">
                {navCollections.topLevel.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-[11px] tracking-[0.22em] uppercase text-stone-700 font-light py-1.5"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Pointe accordion */}
          <button
            onClick={() => setMobileExpanded(mobileExpanded === 'pointe' ? null : 'pointe')}
            className="flex items-center justify-between text-[11px] tracking-[0.22em] uppercase text-stone-800 font-light py-3 border-b border-stone-100"
          >
            Pointe e Ballet Shoes
            <svg
              className={`w-3 h-3 transition-transform ${mobileExpanded === 'pointe' ? 'rotate-180' : ''}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileExpanded === 'pointe' && (
            <div className="pl-4 flex flex-col gap-1 pt-2 pb-3">
              {navPointe.items.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-[11px] tracking-[0.18em] uppercase text-stone-600 font-light py-1.5"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          <NavLink
            to="/gallery"
            className="text-[11px] tracking-[0.22em] uppercase text-stone-700 font-light py-3 border-b border-stone-100"
          >
            Gallery
          </NavLink>
          <NavLink
            to="/contact"
            className="text-[11px] tracking-[0.22em] uppercase text-stone-700 font-light py-3 border-b border-stone-100"
          >
            Contact Us
          </NavLink>
          <a
            href={fittingWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-[11px] tracking-[0.22em] uppercase text-[#c3197a] border border-[#c3197a] px-6 py-3 text-center font-light"
          >
            Book Fitting
          </a>
          </div>
        </div>
      )}
    </header>
  )
}
