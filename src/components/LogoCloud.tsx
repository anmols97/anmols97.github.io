import { Container } from './Container'
import { FormattedMessage } from 'react-intl'

export function LogoCloud() {
  const logos = [
    { key: 'react', messageId: 'logoCloud.react' },
    { key: 'typescript', messageId: 'logoCloud.typescript' },
    { key: 'tailwind', messageId: 'logoCloud.tailwind' },
    { key: 'vite', messageId: 'logoCloud.vite' },
    { key: 'azure', messageId: 'logoCloud.azure' },
    { key: 'oracle', messageId: 'logoCloud.oracle' },
  ]
  return (
    <div className="py-10 border-y logo-cloud-border border-white/10">
      <Container className="flex flex-wrap items-center justify-center gap-6">
        {logos.map((l) => (
          <div
            key={l.key}
            className="text-sm text-muted px-4 py-2 rounded-lg logo-cloud-item bg-white/5"
          >
            <FormattedMessage id={l.messageId} />
          </div>
        ))}
      </Container>
    </div>
  )
}
