import { Container } from './Container'

export function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <Container className="py-8 text-sm text-center text-muted">
        <p>
          © {new Date().getFullYear()} · Built with React + Vite · Deployed to your favorite host
        </p>
      </Container>
    </footer>
  )
}
