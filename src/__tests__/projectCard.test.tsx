import { describe, it, expect } from 'vitest'
import { render, screen } from './test-utils'
import { ProjectCard } from '../components/ProjectCard'
import type { Project } from '../data/projects'

const mockProject: Project = {
  title: 'Test Project',
  description: 'This is a test project description',
  href: 'https://example.com',
  repo: 'https://github.com/test/repo',
  tags: ['React', 'TypeScript', 'Testing'],
}

const mockProjectWithoutRepo: Project = {
  title: 'Project Without Repo',
  description: 'A project without repository link',
  href: 'https://project.com',
  tags: ['Vue', 'JavaScript'],
}

describe('ProjectCard', () => {
  it('renders project title and description', () => {
    render(<ProjectCard p={mockProject} />)

    expect(screen.getByText('Test Project')).toBeInTheDocument()
    expect(screen.getByText('This is a test project description')).toBeInTheDocument()
  })

  it('renders project link with correct href', () => {
    render(<ProjectCard p={mockProject} />)

    const projectLink = screen.getByLabelText('Open project')
    expect(projectLink).toBeInTheDocument()
    expect(projectLink).toHaveAttribute('href', 'https://example.com')
  })

  it('renders all project tags', () => {
    render(<ProjectCard p={mockProject} />)

    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Testing')).toBeInTheDocument()
  })

  it('renders repository link when repo is provided', () => {
    render(<ProjectCard p={mockProject} />)

    const repoLink = screen.getByText('View repo →')
    expect(repoLink).toBeInTheDocument()
    expect(repoLink).toHaveAttribute('href', 'https://github.com/test/repo')
  })

  it('does not render repository link when repo is not provided', () => {
    render(<ProjectCard p={mockProjectWithoutRepo} />)

    expect(screen.queryByText('View repo →')).not.toBeInTheDocument()
  })

  it('applies correct semantic HTML structure', () => {
    render(<ProjectCard p={mockProject} />)

    const article = screen.getByRole('article')
    expect(article).toBeInTheDocument()
    expect(article).toHaveClass('card')
  })
})
