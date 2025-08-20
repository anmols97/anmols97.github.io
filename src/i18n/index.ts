import { createIntl, createIntlCache } from 'react-intl'
import enMessages from './en.json'

// Create intl cache
export const cache = createIntlCache()

// Define supported locales
export const locales = ['en'] as const
export type Locale = (typeof locales)[number]

// Messages for each locale
export const messages = {
  en: enMessages,
} as const

// Create intl instance for use outside of React components
export const intl = createIntl(
  {
    locale: 'en',
    messages: messages.en,
  },
  cache
)

// Get current locale (could be extended to read from localStorage, URL, etc.)
export const getCurrentLocale = (): Locale => {
  return 'en'
}