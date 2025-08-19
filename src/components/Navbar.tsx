import { Link, NavLink } from 'react-router-dom'
import { Container } from './Container'
import { useTheme } from '../hooks/useTheme'
import { site } from '../config/site.config'

import { Github, Linkedin, Mail, Moon, Sun, Code } from 'lucide-react'

const nav = [
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' }
]

export function Navbar() {
  const { dark, setDark } = useTheme()

  return (
    <header className={`sticky top-0 z-50 backdrop-blur border-b transition-colors duration-300 ${
      dark 
        ? 'bg-[rgba(11,15,26,0.5)] border-white/10' 
        : 'bg-white/50 border-gray-200/50'
    }`}>
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
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a className={`p-2 rounded-lg transition-colors ${dark ? 'hover:bg-white/5' : 'hover:bg-gray-100'}`} href={site.social.github} aria-label="GitHub">
            <Github size={18} />
          </a>
          <a className={`p-2 rounded-lg transition-colors ${dark ? 'hover:bg-white/5' : 'hover:bg-gray-100'}`} href={site.social.linkedin} aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a className={`p-2 rounded-lg transition-colors ${dark ? 'hover:bg-white/5' : 'hover:bg-gray-100'}`} href={site.social.email} aria-label="Email">
            <Mail size={18} />
          </a>
          <button
            onClick={() => setDark(!dark)}
            className={`p-2 rounded-lg transition-colors ${dark ? 'hover:bg-white/5' : 'hover:bg-gray-100'}`}
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </Container>
    </header>
  )
}
