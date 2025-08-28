import { Layout } from '../components/Layout'
import { Container } from '../components/Container'
import { Seo } from '../lib/seo'
import { Download } from 'lucide-react'

export default function About() {
  return (
    <Layout>
      <Seo title="About" path="/about" />
      <section className="section">
        <Container className="prose prose-invert max-w-3xl">
          <h2>About</h2>
          <p>
            I’m a hands-on engineer with a product mindset. I value shipping fast without
            sacrificing quality. My focus areas include React, TypeScript, Node, cloud functions,
            and integrations with complex enterprise systems.
          </p>
          <p>
            This portfolio is designed to be clean and fast, with a minimalist aesthetic and
            keyboard-first UX.
          </p>
          
          <div className="not-prose mt-8">
            <a
              href="/Anmol_Singh_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </Container>
      </section>
    </Layout>
  )
}
