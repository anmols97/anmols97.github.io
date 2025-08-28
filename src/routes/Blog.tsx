import { Layout } from '../components/Layout'
import { Container } from '../components/Container'
import { Seo } from '../lib/seo'
import { FormattedMessage } from 'react-intl'

export default function Blog() {
  return (
    <Layout>
      <Seo title="Blog" path="/blog" />
      <section className="section">
        <Container>
          <h2 className="text-3xl font-bold tracking-tight">
            <FormattedMessage id="blog.title" />
          </h2>
          <p className="text-muted mt-2">
            <FormattedMessage id="blog.description" />
          </p>
        </Container>
      </section>
    </Layout>
  )
}
