import { Layout } from '../components/Layout'
import { Container } from '../components/Container'
import { Seo } from '../lib/seo'
import { Download } from 'lucide-react'
import { FormattedMessage } from 'react-intl'
import { FloatingVideo } from '../components/FloatingVideo'

export default function About() {
  return (
    <Layout>
      <Seo title="About" path="/about" />
      <section className="section">
        <Container className="max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Text Content - Takes up 3 columns */}
            <div className="lg:col-span-3 space-y-8">
              <h2 className="text-3xl font-bold tracking-tight">
                <FormattedMessage id="about.title" />
              </h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-muted">
                  <FormattedMessage id="about.paragraph1" />
                </p>
                <p className="text-muted">
                  <FormattedMessage id="about.paragraph2" />
                </p>
                <p className="text-muted">
                  <FormattedMessage id="about.paragraph3" />
                </p>
              </div>

              {/* Resume Button */}
              <div className="pt-4">
                <a
                  href="/Anmol_Singh_Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
                >
                  <Download size={18} />
                  <FormattedMessage id="about.downloadResume" />
                </a>
              </div>
            </div>

            {/* Floating Video - Takes up 2 columns */}
            <div className="lg:col-span-2 lg:sticky lg:top-8">
              <FloatingVideo />
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  )
}
