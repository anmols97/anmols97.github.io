import { ExternalLink } from 'lucide-react'
import type { Project } from '../data/projects'

export function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="card p-6 hover:translate-y-[-2px] hover:shadow-lg transition">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{p.title}</h3>
          <p className="text-muted mt-1">{p.description}</p>
        </div>
        <a
          href={p.href}
          className="p-2 rounded-lg hover:bg-white/5"
          aria-label="Open project"
          title="Open project"
        >
          <ExternalLink size={18} />
        </a>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span key={t} className="text-xs bg-white/5 px-2 py-1 rounded-md border border-white/10">
            {t}
          </span>
        ))}
      </div>
      {p.repo && (
        <a href={p.repo} className="text-xs mt-4 inline-block text-muted hover:text-white">
          View repo →
        </a>
      )}
    </article>
  )
}
