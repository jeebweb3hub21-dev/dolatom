import { NavLink } from 'react-router-dom'
import { navLinks } from '../data/company'
import Button from './Button'

interface NavProps {
  id: string
  open: boolean
  /** Called when a navigation link is activated (used to close the mobile menu). */
  onNavigate?: () => void
}

export default function Nav({ id, open, onNavigate }: NavProps) {
  return (
    <nav id={id} className={`site-nav${open ? ' is-open' : ''}`} aria-label="Primary">
      <ul className="site-nav__list">
        {navLinks.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `site-nav__link${isActive ? ' is-active' : ''}`}
              onClick={onNavigate}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <Button to="/register" variant="accent" size="sm" onClick={onNavigate}>
        Register as a student
      </Button>
    </nav>
  )
}
