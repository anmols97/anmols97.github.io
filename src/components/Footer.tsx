import { Container } from './Container'
import { FormattedMessage } from 'react-intl'

export function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <Container className="py-8 text-sm text-center text-muted">
        <p>
          <FormattedMessage id="footer.copyright" values={{ year: new Date().getFullYear() }} />
        </p>
      </Container>
    </footer>
  )
}
