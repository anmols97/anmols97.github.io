import { Layout } from '../components/Layout'
import { Container } from '../components/Container'

export default function NotFound() {
  return (
    <Layout>
      <section className="section">
        <Container className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">404</h2>
          <p className="text-muted mt-2">The page you’re looking for doesn’t exist.</p>
        </Container>
      </section>
    </Layout>
  )
}
