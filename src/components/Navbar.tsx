import { Link, NavLink } from 'react-router-dom'
import { Container } from './Container'
import { useTheme } from './ThemeProvider'
import { site } from '../config/site.config'
import { FormattedMessage, useIntl } from 'react-intl'
import { useState } from 'react'

import { Moon, Sun, Code, Menu, X } from 'lucide-react'
import { SocialLinks } from './SocialLinks'

const nav = [
  { to: '/projects', labelId: 'navigation.projects' },
  { to: '/about', labelId: 'navigation.about' },
  { to: '/blog', labelId: 'navigation.blog' },
  { to: '/contact', labelId: 'navigation.contact' },
]

export function Navbar() {
  const { dark, setDark } = useTheme()
  const intl = useIntl()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur border-b transition-colors duration-300 ${
        dark ? 'bg-[rgba(11,15,26,0.5)] border-white/10' : 'bg-white/50 border-gray-200/50'
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Code className="w-6 h-6" />
          <span className="font-semibold tracking-tight">{site.author}</span>
        </Link>

        <nav className="hidden md:flex gap-6 text-sm text-muted">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `transition-colors ${
                  dark
                    ? `hover:text-white ${isActive ? 'text-white' : 'text-muted'}`
                    : `hover:text-gray-900 ${isActive ? 'text-gray-900' : 'text-gray-600'}`
                }`
              }
            >
              <FormattedMessage id={n.labelId} />
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Desktop social icons */}
          <SocialLinks className="hidden sm:flex" />

          {/* Theme toggle */}
          <button
            onClick={() => {
              console.log('Theme button clicked! Current dark:', dark, 'Setting to:', !dark)
              setDark(!dark)
            }}
            className={`p-2 rounded-lg transition-colors ${dark ? 'hover:bg-white/5' : 'hover:bg-gray-100'}`}
            aria-label={intl.formatMessage({ id: 'accessibility.toggleTheme' })}
            title={intl.formatMessage({ id: 'accessibility.toggleTheme' })}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${dark ? 'hover:bg-white/5' : 'hover:bg-gray-100'}`}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-t ${dark ? 'bg-[rgba(11,15,26,0.9)] border-white/10' : 'bg-white/90 border-gray-200'} backdrop-blur`}
        >
          <Container className="py-4">
            <nav className="flex flex-col gap-4">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-base transition-colors ${
                      dark
                        ? `hover:text-white ${isActive ? 'text-white' : 'text-gray-300'}`
                        : `hover:text-gray-900 ${isActive ? 'text-gray-900' : 'text-gray-600'}`
                    }`
                  }
                >
                  <FormattedMessage id={n.labelId} />
                </NavLink>
              ))}

              {/* Mobile social icons */}
              <SocialLinks className="pt-4 border-t border-gray-200/20" />
            </nav>
          </Container>
        </div>
      )}
    </header>
  )
}
