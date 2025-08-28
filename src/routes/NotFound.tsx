import { Layout } from '../components/Layout'
import { Container } from '../components/Container'
import { FormattedMessage } from 'react-intl'

export default function NotFound() {
  return (
    <Layout>
      <section className="section">
        <Container className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            <FormattedMessage id="notFound.title" />
          </h2>
          <p className="text-muted mt-2">
            <FormattedMessage id="notFound.description" />
          </p>
        </Container>
      </section>
    </Layout>
  )
}
