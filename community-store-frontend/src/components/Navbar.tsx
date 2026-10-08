import { Link, NavLink } from 'react-router-dom'
import './site.css'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/store', label: 'Store', end: false },
  { to: '/about', label: 'About Us', end: false },
]

export default function Navbar() {
  return (
    <header className="site-nav">
      <Link to="/" className="site-logo">
        <span>Commu</span> Store.
      </Link>

      <nav className="site-links" aria-label="Main">
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} end={l.end}>
            {l.label}
          </NavLink>
        ))}
      </nav>

      <div className="site-actions">
        <Link to="/profile" className="site-icon-link" aria-label="Notifications">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 22a2.5 2.5 0 0 0 2.4-2h-4.8A2.5 2.5 0 0 0 12 22Zm7-6V11a7 7 0 0 0-5.5-6.8V3.5a1.5 1.5 0 0 0-3 0v.7A7 7 0 0 0 5 11v5l-2 2v1h18v-1l-2-2Z" />
          </svg>
        </Link>
        <Link to="/cart" className="site-icon-link" aria-label="Cart">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M7 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM1 2v2h2l3.6 7.6-1.4 2.4A2 2 0 0 0 7 17h12v-2H7.4l1.1-2h7.5a2 2 0 0 0 1.7-1l3.6-6.5A1 1 0 0 0 20.4 4H5.2l-.9-2H1Z" />
          </svg>
        </Link>
        <Link to="/profile" className="site-account">
          Account
        </Link>
      </div>
    </header>
  )
}