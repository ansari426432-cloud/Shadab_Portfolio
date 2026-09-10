import { projects } from '../../data/portfolioData.js'
import SectionHeading from '../ui/SectionHeading.jsx'
import ProjectCard from '../ui/ProjectCard.jsx'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
      <SectionHeading
        index="03"
        title="Projects"
        description="Tap a project to expand it — three systems, three different problems."
      />
      <div className="space-y-4">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}
