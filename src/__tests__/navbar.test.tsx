import { describe, it, expect } from 'vitest'
import { render, screen } from './test-utils'
import { Navbar } from '../components/Navbar'
import { ThemeProvider } from '../components/ThemeProvider'

describe('Navbar', () => {
  it('renders the author name', () => {
    render(
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>
    )
    expect(screen.getByText(/Anmol Singh/i)).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(
      <ThemeProvider>
        <Navbar />
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
        <Navbar />
      </ThemeProvider>
    )
    // Check for either sun or moon icon
    const themeButton = screen.getByRole('button')
    expect(themeButton).toBeInTheDocument()
  })
})
