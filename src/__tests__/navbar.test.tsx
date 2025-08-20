import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { ThemeProvider } from '../components/ThemeProvider'

describe('Navbar', () => {
  it('renders the author name', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </ThemeProvider>
    )
    expect(screen.getByText(/Anmol Singh/i)).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </ThemeProvider>
    )
    expect(screen.getByText(/Projects/i)).toBeInTheDocument()
    expect(screen.getByText(/About/i)).toBeInTheDocument()
    expect(screen.getByText(/Blog/i)).toBeInTheDocument()
    expect(screen.getByText(/Contact/i)).toBeInTheDocument()
  })

  it('renders theme toggle button', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </ThemeProvider>
    )
    // Check for either sun or moon icon
    const themeButton = screen.getByRole('button')
    expect(themeButton).toBeInTheDocument()
  })
})
