import { screen, test, describe, expect } from '@testing-library/react'
import { IntlProvider } from 'react-intl'
import { render } from './test-utils'
import { Navbar } from '@/components/Navbar'
import { HeroSimple } from '@/components/HeroSimple'
import { FeatureSection } from '@/components/FeatureSection'
import { CTASection } from '@/components/CTASection'
import { messages } from '@/i18n'

describe('Internationalization', () => {
  test('renders English navigation labels', () => {
    render(<Navbar />)
    
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  test('renders hero section in English', () => {
    render(<HeroSimple />)
    
    expect(screen.getByText('Your shortcut to')).toBeInTheDocument()
    expect(screen.getByText('everything.')).toBeInTheDocument()
    expect(screen.getByText(/Welcome to my digital workspace/)).toBeInTheDocument()
    expect(screen.getByText('View Projects')).toBeInTheDocument()
    expect(screen.getByText('GitHub')).toBeInTheDocument()
  })

  test('renders feature section with translated content', () => {
    render(<FeatureSection />)
    
    expect(screen.getByText('Command-first UX')).toBeInTheDocument()
    expect(screen.getByText('Performance built-in')).toBeInTheDocument()
    expect(screen.getByText('Production-safe')).toBeInTheDocument()
    expect(screen.getByText(/keyboard-centric design/)).toBeInTheDocument()
  })

  test('renders CTA section with translated content', () => {
    render(<CTASection />)
    
    expect(screen.getByText('Have an opportunity in mind?')).toBeInTheDocument()
    expect(screen.getByText(/I love shipping usable software/)).toBeInTheDocument()
    expect(screen.getByText('Get in touch')).toBeInTheDocument()
  })

  test('all message keys exist in en.json', () => {
    const requiredKeys = [
      'navigation.projects',
      'navigation.about', 
      'navigation.blog',
      'navigation.contact',
      'hero.title',
      'hero.titleHighlight',
      'hero.description',
      'hero.viewProjects',
      'hero.github',
      'features.commandFirst.title',
      'features.commandFirst.description',
      'features.performance.title',
      'features.performance.description',
      'features.productionSafe.title',
      'features.productionSafe.description',
      'cta.title',
      'cta.description',
      'cta.getInTouch',
      'accessibility.toggleTheme',
      'accessibility.github',
      'accessibility.linkedin',
      'accessibility.email'
    ]

    requiredKeys.forEach(key => {
      expect(messages.en).toHaveProperty(key)
      expect(typeof messages.en[key as keyof typeof messages.en]).toBe('string')
    })
  })

  test('IntlProvider works without provider wrapper', () => {
    render(
      <IntlProvider locale="en" messages={messages.en}>
        <div data-testid="test-content">Test</div>
      </IntlProvider>
    )
    
    expect(screen.getByTestId('test-content')).toBeInTheDocument()
  })
})