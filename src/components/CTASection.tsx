import { Container } from './Container'
import { Link } from 'react-router-dom'

export function CTASection() {
  return (
    <section className="section">
      <Container className="card p-8 text-center">
        <h3 className="text-2xl font-semibold">Have an opportunity in mind?</h3>
        <p className="text-muted mt-2">
          I love shipping usable software fast—especially where DX and UX both matter.
        </p>
        <div className="mt-6">
          <Link
            to="/contact"
            className="px-5 py-3 rounded-xl bg-brand-500 text-white hover:bg-brand-600 transition-colors font-medium"
          >
            Get in touch
          </Link>
        </div>
      </Container>
    </section>
  )
}
