import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { company } from '../data/company'
import Nav from './Nav'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="brand" aria-label={`${company.name} — home`} onClick={closeMenu}>
          <span className="brand__mark" aria-hidden="true">
            {company.shortName}
          </span>
          <span className="brand__name">
            <span className="brand__name-main">{company.name}</span>
            <span className="brand__name-sub">Training · NIN · Laptops</span>
          </span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="nav-toggle__bars" aria-hidden="true" />
        </button>

        <Nav id="site-nav" open={menuOpen} onNavigate={closeMenu} />
      </div>
    </header>
  )
}
