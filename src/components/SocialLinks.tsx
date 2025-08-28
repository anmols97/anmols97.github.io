import { Github, Linkedin, Mail } from 'lucide-react'
import { useIntl } from 'react-intl'
import { site } from '../config/site.config'
import { useTheme } from './ThemeProvider'

interface SocialLinksProps {
  className?: string
}

export function SocialLinks({ className = '' }: SocialLinksProps) {
  const { dark } = useTheme()
  const intl = useIntl()

  const socialLinks = [
    {
      href: site.social.github,
      icon: Github,
      label: intl.formatMessage({ id: 'accessibility.github' }),
    },
    {
      href: site.social.linkedin,
      icon: Linkedin,
      label: intl.formatMessage({ id: 'accessibility.linkedin' }),
    },
    {
      href: site.social.email,
      icon: Mail,
      label: intl.formatMessage({ id: 'accessibility.email' }),
    },
  ]

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map(({ href, icon: Icon, label }) => (
        <a
          key={href}
          className={`p-2 rounded-lg transition-colors ${
            dark ? 'hover:bg-white/5' : 'hover:bg-gray-100'
          }`}
          href={href}
          aria-label={label}
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  )
}
