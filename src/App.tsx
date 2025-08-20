import { Route, Routes } from 'react-router-dom'
import { IntlProvider, FormattedMessage } from 'react-intl'
import { ThemeProvider } from './components/ThemeProvider'
import { Layout } from './components/Layout'
import { HeroSimple } from './components/HeroSimple'
import { LogoCloud } from './components/LogoCloud'
import { FeatureSection } from './components/FeatureSection'
import { CTASection } from './components/CTASection'
import { messages, getCurrentLocale } from './i18n'

function HomePage() {
  return (
    <Layout>
      <HeroSimple />
      <LogoCloud />
      <FeatureSection />
      <CTASection />
    </Layout>
  )
}

export default function App() {
  const locale = getCurrentLocale()

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="*"
            element={
              <div style={{ backgroundColor: 'red', color: 'white', padding: '20px' }}>
                <FormattedMessage id="notFound.message" />
              </div>
            }
          />
        </Routes>
      </ThemeProvider>
    </IntlProvider>
  )
}
