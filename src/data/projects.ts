export type Project = {
  title: string
  description: string
  href: string
  repo?: string
  tags: string[]
}

export const projects: Project[] = [
  {
    title: 'Command Palette UI',
    description:
      'A Raycast-inspired command palette built in React with keyboard-first navigation and fuzzy search.',
    href: 'https://your-demo-link.com',
    repo: 'https://github.com/your-username/command-palette',
    tags: ['React', 'TypeScript', 'Accessibility'],
  },
  {
    title: 'Azure Functions + React Query',
    description:
      'Serverless API wired to a React app using react-query, with strongly typed contracts and optimistic UI.',
    href: '#',
    repo: '#',
    tags: ['Azure', 'React Query', 'TypeScript'],
  },
  {
    title: 'Banner Self-Service Extensions',
    description:
      'Custom PageBuilder pages for asset management, focusing on DX, performance, and admin ergonomics.',
    href: '#',
    tags: ['Grails', 'Groovy', 'Oracle', 'PL/SQL'],
  },
]
