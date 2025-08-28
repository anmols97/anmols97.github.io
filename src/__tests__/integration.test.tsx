import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'

describe('App Integration Tests', () => {
  it('renders homepage by default', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )

    // Check for homepage content
    expect(screen.getByText(/Your shortcut to/i)).toBeInTheDocument()
    expect(screen.getByText(/everything/i)).toBeInTheDocument()
    expect(screen.getByText(/Welcome to my digital workspace/i)).toBeInTheDocument()
  })

  it('shows 404 page for unknown routes', () => {
    render(
      <MemoryRouter initialEntries={['/unknown-route']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByText(/404 - Page not found/i)).toBeInTheDocument()
  })

  it('renders all main components on homepage', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )

    // Check for each section
    expect(screen.getByText(/Your shortcut to/i)).toBeInTheDocument() // Hero
    expect(screen.getByText(/Oracle/i)).toBeInTheDocument() // LogoCloud - Oracle only appears in logo cloud
    expect(screen.getByText(/Command-first UX/i)).toBeInTheDocument() // FeatureSection
    expect(screen.getByText(/Have an opportunity in mind/i)).toBeInTheDocument() // CTASection
  })

  it('includes navigation and footer', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )

    // Navigation
    expect(screen.getByText(/Anmol Singh/i)).toBeInTheDocument()
    expect(screen.getAllByText(/Projects/i)).toHaveLength(2) // Navbar and hero button
    expect(screen.getByText(/About/i)).toBeInTheDocument()
  })

  it('has working theme toggle in navigation', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )

    // Find theme toggle button
    const themeButton = screen.getByRole('button', { name: /toggle theme/i })
    expect(themeButton).toBeInTheDocument()

    // Click should not throw error (theme switching is tested in useTheme tests)
    fireEvent.click(themeButton)
    expect(themeButton).toBeInTheDocument()
  })

  it('renders without crashing and has proper structure', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )

    // Verify the app renders with proper layout structure
    expect(document.querySelector('.min-h-screen')).toBeInTheDocument()
    expect(screen.getByRole('banner')).toBeInTheDocument() // header
    expect(screen.getByRole('main')).toBeInTheDocument() // main content
  })
})
