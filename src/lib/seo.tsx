import { Helmet } from 'react-helmet-async'
import { site } from '../config/site.config'

type Props = {
  title?: string
  description?: string
  path?: string
}

export function Seo({ title, description, path }: Props) {
  const t = title ? `${title} — ${site.author}` : site.title
  const d = description ?? site.description
  const url = path ? `${site.url}${path}` : site.url

  return (
    <Helmet>
      <title>{t}</title>
      <meta name="description" content={d} />
      <meta property="og:title" content={t} />
      <meta property="og:description" content={d} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={t} />
      <meta property="twitter:description" content={d} />
    </Helmet>
  )
}
