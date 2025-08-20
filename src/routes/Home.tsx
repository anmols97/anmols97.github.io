import { Layout } from '../components/Layout'
import { HeroSimple } from '../components/HeroSimple'
import { LogoCloud } from '../components/LogoCloud'
import { FeatureSection } from '../components/FeatureSection'
import { CTASection } from '../components/CTASection'
import { Seo } from '../lib/seo'

export default function Home() {
  return (
    <Layout>
      <Seo title="Home" path="/" />
      <HeroSimple />
      <LogoCloud />
      <FeatureSection />
      <CTASection />
    </Layout>
  )
}
