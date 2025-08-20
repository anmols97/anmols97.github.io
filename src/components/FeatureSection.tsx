import { Container } from './Container'
import { Command, Zap, ShieldCheck } from 'lucide-react'
import { FormattedMessage } from 'react-intl'

const features = [
  {
    titleId: 'features.commandFirst.title',
    descId: 'features.commandFirst.description',
    icon: Command,
  },
  {
    titleId: 'features.performance.title',
    descId: 'features.performance.description',
    icon: Zap,
  },
  {
    titleId: 'features.productionSafe.title',
    descId: 'features.productionSafe.description',
    icon: ShieldCheck,
  },
]

export function FeatureSection() {
  return (
    <section className="section">
      <Container className="grid md:grid-cols-3 gap-6">
        {features.map((f) => (
          <div key={f.titleId} className="card p-6">
            <f.icon className="mb-4" />
            <h3 className="text-xl font-semibold"><FormattedMessage id={f.titleId} /></h3>
            <p className="text-muted mt-2"><FormattedMessage id={f.descId} /></p>
          </div>
        ))}
      </Container>
    </section>
  )
}
