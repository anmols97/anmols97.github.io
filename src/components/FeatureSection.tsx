import { Container } from './Container'
import { Command, Zap, ShieldCheck } from 'lucide-react'

const features = [
  {
    title: 'Command-first UX',
    desc: 'A keyboard-centric design inspired by Raycast’s command palette. Fast, predictable, delightful.',
    icon: Command
  },
  {
    title: 'Performance built-in',
    desc: 'Vite + React 18 + code-splitting + Tailwind. Optimized for CLS, LCP, and TTI out of the box.',
    icon: Zap
  },
  {
    title: 'Production-safe',
    desc: 'Strict TypeScript, ESLint, Prettier, and tests. CI-ready project structure and environment separation.',
    icon: ShieldCheck
  }
]

export function FeatureSection() {
  return (
    <section className="section">
      <Container className="grid md:grid-cols-3 gap-6">
        {features.map((f) => (
          <div key={f.title} className="card p-6">
            <f.icon className="mb-4" />
            <h3 className="text-xl font-semibold">{f.title}</h3>
            <p className="text-muted mt-2">{f.desc}</p>
          </div>
        ))}
      </Container>
    </section>
  )
}
