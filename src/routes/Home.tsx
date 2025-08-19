import { Layout } from '../components/Layout'
import { Hero } from '../components/Hero'
import { LogoCloud } from '../components/LogoCloud'
import { FeatureSection } from '../components/FeatureSection'
import { CTASection } from '../components/CTASection'
import { Seo } from '../lib/seo'

export default function Home() {
  return (
    <Layout>
      <Seo title="Home" path="/" />
      <Hero />
      <LogoCloud />
      <FeatureSection />
      <CTASection />
    </Layout>
  )
}
