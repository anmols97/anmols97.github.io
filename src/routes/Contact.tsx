import { Layout } from '../components/Layout'
import { Container } from '../components/Container'
import { Seo } from '../lib/seo'
import { FormattedMessage } from 'react-intl'

export default function Contact() {
  return (
    <Layout>
      <Seo title="Contact" path="/contact" />
      <section className="section">
        <Container className="max-w-xl">
          <div className="card p-6">
            <h2 className="text-2xl font-semibold">
              <FormattedMessage id="contact.title" />
            </h2>
            <p className="text-muted mt-2">
              <FormattedMessage id="contact.description" />
            </p>
            <a
              href="mailto:anmolsingh2282@gmail.com"
              className="mt-6 inline-block px-5 py-3 rounded-xl bg-white text-[#0b0f1a] font-medium"
            >
              <FormattedMessage id="contact.emailButton" />
            </a>
          </div>
        </Container>
      </section>
    </Layout>
  )
}
