import { describe, it, expect } from 'vitest'
import { render, screen } from './test-utils'
import { ThemeProvider } from '../components/ThemeProvider'
import { HeroSimple } from '../components/HeroSimple'
import { FeatureSection } from '../components/FeatureSection'
import { LogoCloud } from '../components/LogoCloud'
import { CTASection } from '../components/CTASection'
import { Layout } from '../components/Layout'

const renderWithProviders = (component: React.ReactElement) => {
  return render(<ThemeProvider>{component}</ThemeProvider>)
}

describe('HeroSimple Component', () => {
  it('renders hero title and description', () => {
    renderWithProviders(<HeroSimple />)

    expect(screen.getByText(/Your shortcut to/i)).toBeInTheDocument()
    expect(screen.getByText(/everything/i)).toBeInTheDocument()
    expect(screen.getByText(/Welcome to my digital workspace/i)).toBeInTheDocument()
  })

  it('renders action buttons', () => {
    renderWithProviders(<HeroSimple />)

    expect(screen.getByText(/View Projects/i)).toBeInTheDocument()
    expect(screen.getByText(/GitHub/i)).toBeInTheDocument()
  })

  it('has correct links', () => {
    renderWithProviders(<HeroSimple />)

    const projectsLink = screen.getByText(/View Projects/i).closest('a')
    const githubLink = screen.getByText(/GitHub/i).closest('a')

    expect(projectsLink).toHaveAttribute('href', '/projects')
    expect(githubLink).toHaveAttribute('href', 'https://github.com/anmols97')
  })
})

describe('FeatureSection Component', () => {
  it('renders all feature cards', () => {
    renderWithProviders(<FeatureSection />)

    expect(screen.getByText(/Command-first UX/i)).toBeInTheDocument()
    expect(screen.getByText(/Performance built-in/i)).toBeInTheDocument()
    expect(screen.getByText(/Production-safe/i)).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    renderWithProviders(<FeatureSection />)

    expect(screen.getByText(/keyboard-centric design/i)).toBeInTheDocument()
    expect(screen.getByText(/Vite \+ React 18/i)).toBeInTheDocument()
    expect(screen.getByText(/Strict TypeScript/i)).toBeInTheDocument()
  })
})

describe('LogoCloud Component', () => {
  it('renders technology logos', () => {
    renderWithProviders(<LogoCloud />)

    expect(screen.getByText(/React/i)).toBeInTheDocument()
    expect(screen.getByText(/TypeScript/i)).toBeInTheDocument()
    expect(screen.getByText(/Tailwind/i)).toBeInTheDocument()
    expect(screen.getByText(/Vite/i)).toBeInTheDocument()
  })
})

describe('CTASection Component', () => {
  it('renders call to action content', () => {
    renderWithProviders(<CTASection />)

    expect(screen.getByText(/Have an opportunity in mind/i)).toBeInTheDocument()
    expect(screen.getByText(/Get in touch/i)).toBeInTheDocument()
  })
})

describe('Layout Component', () => {
  it('renders children content within layout structure', () => {
    renderWithProviders(
      <Layout>
        <div data-testid="test-content">Test Content</div>
      </Layout>
    )

    expect(screen.getByTestId('test-content')).toBeInTheDocument()
    expect(screen.getByText(/Anmol Singh/i)).toBeInTheDocument() // From navbar
  })

  it('includes navbar and footer', () => {
    renderWithProviders(
      <Layout>
        <div>Content</div>
      </Layout>
    )

    // Check for navbar elements
    expect(screen.getByText(/Anmol Singh/i)).toBeInTheDocument()

    // Check for footer elements
    expect(screen.getByText(/Built with/i)).toBeInTheDocument()
  })
})
