import { Layout } from '../components/Layout'
import { Container } from '../components/Container'
import { projects } from '../data/projects'
import { ProjectCard } from '../components/ProjectCard'
import { Seo } from '../lib/seo'
import { FormattedMessage } from 'react-intl'

export default function Projects() {
  return (
    <Layout>
      <Seo title="Projects" path="/projects" />
      <section className="section">
        <Container>
          <h2 className="text-3xl font-bold tracking-tight">
            <FormattedMessage id="projects.title" />
          </h2>
          <p className="text-muted mt-2">
            <FormattedMessage id="projects.description" />
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {projects.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        </Container>
      </section>
    </Layout>
  )
}
