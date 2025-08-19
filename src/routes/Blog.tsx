import { Layout } from '../components/Layout'
import { Container } from '../components/Container'
import { Seo } from '../lib/seo'

export default function Blog() {
  return (
    <Layout>
      <Seo title="Blog" path="/blog" />
      <section className="section">
        <Container>
          <h2 className="text-3xl font-bold tracking-tight">Blog</h2>
          <p className="text-muted mt-2">Coming soon.</p>
        </Container>
      </section>
    </Layout>
  )
}
