import { projects } from '../data/site'
import type { Project } from '../data/site'
import { useReveal } from '../hooks/useReveal'
import { ProjectVisual } from './ProjectVisual'

function ProjectCard({ project }: { project: Project }) {
  const ref = useReveal<HTMLElement>()

  return (
    <article className={`project reveal${project.featured ? ' project--featured' : ''}`} ref={ref}>
      {project.visual && <ProjectVisual visual={project.visual} />}
      <div className="project__body">
        <div className="project__top">
          <h3 className="project__title">{project.title}</h3>
          {project.featured && <span className="project__badge">Featured</span>}
        </div>
        <p className="project__tagline">{project.tagline}</p>
        <p className="project__desc">{project.description}</p>
        <div className="project__tech">
          {project.tech.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>
        <div className="project__links">
          {project.live && (
            <a className="project__link" href={project.live} target="_blank" rel="noreferrer">
              Live Site
            </a>
          )}
          {project.repo && (
            <a className="project__link" href={project.repo} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
          {!project.live && !project.repo && (
            <span className="project__private">{project.privateNote ?? 'Personal project'}</span>
          )}
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="wrap">
        <span className="eyebrow">What I&apos;ve Built</span>
        <h2 className="section-title">Projects</h2>
        <div className="projects__grid">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
