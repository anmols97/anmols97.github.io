import { Route, Routes } from 'react-router-dom'
import { IntlProvider, FormattedMessage } from 'react-intl'
import { ThemeProvider } from './components/ThemeProvider'
import { Layout } from './components/Layout'
import { HeroSimple } from './components/HeroSimple'
import { LogoCloud } from './components/LogoCloud'
import { FeatureSection } from './components/FeatureSection'
import { CTASection } from './components/CTASection'
import { messages, getCurrentLocale } from './i18n'
import Projects from './routes/Projects'
import About from './routes/About'
import Blog from './routes/Blog'
import Contact from './routes/Contact'

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
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
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
