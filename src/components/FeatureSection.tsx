import { Container } from './Container'
import { Network, Zap, Code } from 'lucide-react'
import { FormattedMessage } from 'react-intl'

const features = [
  {
    titleId: 'features.systemsIntegration.title',
    descId: 'features.systemsIntegration.description',
    icon: Network,
  },
  {
    titleId: 'features.performanceReliability.title',
    descId: 'features.performanceReliability.description',
    icon: Zap,
  },
  {
    titleId: 'features.fullstackSolver.title',
    descId: 'features.fullstackSolver.description',
    icon: Code,
  },
]

export function FeatureSection() {
  return (
    <section className="section">
      <Container className="grid md:grid-cols-3 gap-6">
        {features.map((f) => (
          <div key={f.titleId} className="card p-6">
            <f.icon className="mb-4" />
            <h3 className="text-xl font-semibold">
              <FormattedMessage id={f.titleId} />
            </h3>
            <p className="text-muted mt-2">
              <FormattedMessage id={f.descId} />
            </p>
          </div>
        ))}
      </Container>
    </section>
  )
}
