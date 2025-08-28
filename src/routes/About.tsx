import { Layout } from '../components/Layout'
import { Container } from '../components/Container'
import { Seo } from '../lib/seo'
import { Download } from 'lucide-react'
import { FormattedMessage } from 'react-intl'
import { FloatingVideo } from '../components/FloatingVideo'
import { useTheme } from '../components/ThemeProvider'

export default function About() {
  const { dark } = useTheme()
  return (
    <Layout>
      <Seo title="About" path="/about" />
      
      {/* Hero Video Background Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <FloatingVideo isHeroBackground className="absolute inset-0" />
        
        {/* Content overlay */}
        <Container className="relative z-20 max-w-4xl text-center">
          <div className="space-y-8">
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight ${dark ? 'text-white' : 'text-gray-900'}`}>
              <FormattedMessage id="about.title" />
            </h1>
            
            <p className={`text-lg md:text-xl ${dark ? 'text-white/80' : 'text-gray-700'}`}>
              <FormattedMessage id="about.tagline" />
            </p>
            
            <div className={`space-y-6 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto ${dark ? 'text-white/90' : 'text-gray-800'}`}>
              <p>
                <FormattedMessage id="about.paragraph1" />
              </p>
              <p>
                <FormattedMessage id="about.paragraph2" />
              </p>
              <p>
                <FormattedMessage id="about.paragraph3" />
              </p>
            </div>

            {/* Resume Button */}
            <div className="pt-8">
              <a
                href="/Anmol_Singh_Resume.pdf"
                download
                className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl font-medium transition-all duration-200 hover:shadow-2xl hover:scale-105 backdrop-blur-sm border ${
                  dark 
                    ? 'bg-white/10 hover:bg-white/20 text-white border-white/20'
                    : 'bg-black/10 hover:bg-black/20 text-gray-900 border-gray-900/20'
                }`}
              >
                <Download size={20} />
                <FormattedMessage id="about.downloadResume" />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  )
}
