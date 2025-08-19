import { Layout } from '../components/Layout'
import { Container } from '../components/Container'
import { Seo } from '../lib/seo'

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
            This portfolio is designed to be clean and fast, with a Raycast-inspired aesthetic and
            keyboard-first UX.
          </p>
        </Container>
      </section>
    </Layout>
  )
}
