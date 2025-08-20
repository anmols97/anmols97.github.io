import { Container } from './Container'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

export function CTASection() {
  return (
    <section className="section">
      <Container className="card p-8 text-center">
        <h3 className="text-2xl font-semibold">
          <FormattedMessage id="cta.title" />
        </h3>
        <p className="text-muted mt-2">
          <FormattedMessage id="cta.description" />
        </p>
        <div className="mt-6">
          <Link
            to="/contact"
            className="px-5 py-3 rounded-xl bg-brand-500 text-white hover:bg-brand-600 transition-colors font-medium"
          >
            <FormattedMessage id="cta.getInTouch" />
          </Link>
        </div>
      </Container>
    </section>
  )
}
