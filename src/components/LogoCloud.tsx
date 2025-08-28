import { Container } from './Container'
import { FormattedMessage } from 'react-intl'

export function LogoCloud() {
  const expertise = [
    { key: 'fullstack', messageId: 'logoCloud.fullstack' },
    { key: 'cloudarch', messageId: 'logoCloud.cloudarch' },
    { key: 'apiintegration', messageId: 'logoCloud.apiintegration' },
    { key: 'algorithms', messageId: 'logoCloud.algorithms' },
    { key: 'mentoring', messageId: 'logoCloud.mentoring' },
    { key: 'agile', messageId: 'logoCloud.agile' },
  ]
  return (
    <div className="py-10 border-y logo-cloud-border border-white/10">
      <Container className="flex flex-wrap items-center justify-center gap-6">
        {expertise.map((l) => (
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
