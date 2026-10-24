import { useState } from 'react'
import type { FC } from 'react'
import { Pill } from './Pill'

interface HeaderProps {
  activeSection: string
  isSolid: boolean
}

export const Header: FC<HeaderProps> = ({ activeSection, isSolid }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Stack', href: '#stack', id: 'stack' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
  ]

  return (
    <header className={`header ${isSolid ? 'is-solid' : ''}`} id="header">
      {/* <a className="header_logo" href="#top">
        DINESH S
      </a> */}

      <nav className="header_nav">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={activeSection === link.id ? 'is-active' : ''}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="header_actions">
        {/* <Pill href="#contact" variant="lime">
          Say hello
        </Pill> */}

        {/* Mobile toggle button */}
        <button
          type="button"
          className="header_burger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav">
          <div className="mobile-nav_links">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={activeSection === link.id ? 'is-active' : ''}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-nav_contact"
            >
              Contact Me →
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
