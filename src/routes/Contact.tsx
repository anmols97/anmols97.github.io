import { Layout } from '../components/Layout'
import { Container } from '../components/Container'
import { Seo } from '../lib/seo'

export default function Contact() {
  return (
    <Layout>
      <Seo title="Contact" path="/contact" />
      <section className="section">
        <Container className="max-w-xl">
          <div className="card p-6">
            <h2 className="text-2xl font-semibold">Let’s talk</h2>
            <p className="text-muted mt-2">
              The best way to reach me is email. I usually respond within a day.
            </p>
            <a
              href="mailto:you@example.com"
              className="mt-6 inline-block px-5 py-3 rounded-xl bg-white text-[#0b0f1a] font-medium"
            >
              Email me
            </a>
          </div>
        </Container>
      </section>
    </Layout>
  )
}
