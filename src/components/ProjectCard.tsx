import type { FC } from 'react'
import type { Project } from '../constants/portfolioData'

interface ProjectCardProps {
  project: Project
}

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className={`proj ${project.colorClass}`}>
      <div className="proj_top">
        <span className="proj_idx">{project.num}</span>
        <div className="proj_badges">
          {project.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="proj_microtag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h3 className="proj_name">{project.title}</h3>
        <p className="proj_desc">{project.description}</p>
      </div>
      <span className="proj_role">{project.role}</span>
    </article>
  )
}
