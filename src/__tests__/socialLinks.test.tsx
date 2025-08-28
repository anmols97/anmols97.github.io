import { describe, it, expect } from 'vitest'
import { render, screen } from './test-utils'
import { SocialLinks } from '../components/SocialLinks'

describe('SocialLinks', () => {
  it('renders all social media links', () => {
    render(<SocialLinks />)

    // Check for GitHub link
    const githubLink = screen.getByLabelText('GitHub')
    expect(githubLink).toBeInTheDocument()
    expect(githubLink).toHaveAttribute('href', 'https://github.com/anmols97')

    // Check for LinkedIn link
    const linkedinLink = screen.getByLabelText('LinkedIn')
    expect(linkedinLink).toBeInTheDocument()
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/anmol-s-288078172/')

    // Check for Email link
    const emailLink = screen.getByLabelText('Email')
    expect(emailLink).toBeInTheDocument()
    expect(emailLink).toHaveAttribute('href', 'mailto:anmolsingh2282@gmail.com')
  })

  it('applies custom className when provided', () => {
    render(<SocialLinks className="test-class" />)

    const container = document.querySelector('.test-class')
    expect(container).toBeInTheDocument()
  })

  it('renders with correct default structure', () => {
    render(<SocialLinks />)

    const container = document.querySelector('.flex.items-center.gap-3')
    expect(container).toBeInTheDocument()
  })

  it('all links have proper accessibility attributes', () => {
    render(<SocialLinks />)

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(3)

    links.forEach((link) => {
      expect(link).toHaveAttribute('aria-label')
      expect(link).toHaveClass('p-2', 'rounded-lg', 'transition-colors')
    })
  })
})
