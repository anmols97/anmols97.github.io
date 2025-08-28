import { Layout } from '../components/Layout'
import { Container } from '../components/Container'
import { Seo } from '../lib/seo'
import { Download } from 'lucide-react'
import { FormattedMessage } from 'react-intl'

export default function About() {
  return (
    <Layout>
      <Seo title="About" path="/about" />
      <section className="section">
        <Container className="prose prose-invert max-w-3xl">
          <h2><FormattedMessage id="about.title" /></h2>
          <p>
            <FormattedMessage id="about.paragraph1" />
          </p>
          <p>
            <FormattedMessage id="about.paragraph2" />
          </p>
          <p>
            <FormattedMessage id="about.paragraph3" />
          </p>

          <div className="not-prose mt-8">
            <a
              href="/Anmol_Singh_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              <Download size={18} />
              <FormattedMessage id="about.downloadResume" />
            </a>
          </div>
        </Container>
      </section>
    </Layout>
  )
}
