import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './components/ThemeProvider'
import { Layout } from './components/Layout'
import { HeroSimple } from './components/HeroSimple'
import { LogoCloud } from './components/LogoCloud'
import { FeatureSection } from './components/FeatureSection'
import { CTASection } from './components/CTASection'
import { ThemeDebug } from './components/ThemeDebug'

function HomePage() {
  return (
    <Layout>
      <ThemeDebug />
      <HeroSimple />
      <LogoCloud />
      <FeatureSection />
      <CTASection />
    </Layout>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<div style={{backgroundColor: 'red', color: 'white', padding: '20px'}}>404 - Page not found</div>} />
      </Routes>
    </ThemeProvider>
  )
}