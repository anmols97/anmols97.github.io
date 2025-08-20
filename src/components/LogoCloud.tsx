import { Container } from './Container'

export function LogoCloud() {
  const logos = ['React', 'TypeScript', 'Tailwind', 'Vite', 'Azure', 'Oracle']
  return (
    <div className="py-10 border-y logo-cloud-border border-white/10">
      <Container className="flex flex-wrap items-center justify-center gap-6">
        {logos.map((l) => (
          <div
            key={l}
            className="text-sm text-muted px-4 py-2 rounded-lg logo-cloud-item bg-white/5"
          >
            {l}
          </div>
        ))}
      </Container>
    </div>
  )
}
