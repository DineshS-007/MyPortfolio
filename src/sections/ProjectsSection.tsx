import React, { useRef, useState, useEffect } from 'react'
import { PORTFOLIO_DATA } from '../constants/portfolioData'
import { SectionHead } from '../components/SectionHead'
import { ProjectCard } from '../components/ProjectCard'

export const ProjectsSection: React.FC = () => {
  const { projects } = PORTFOLIO_DATA
  const railRef = useRef<HTMLDivElement | null>(null)
  const [activeDot, setActiveDot] = useState<number>(0)

  const handleScroll = () => {
    const rail = railRef.current
    if (!rail) return
    const cardWidth = rail.scrollWidth / projects.length
    const currentIndex = Math.round(rail.scrollLeft / cardWidth)
    setActiveDot(Math.min(currentIndex, projects.length - 1))
  }

  const scrollToIndex = (index: number) => {
    const rail = railRef.current
    if (!rail) return
    const cards = rail.querySelectorAll<HTMLElement>('.proj')
    if (cards[index]) {
      cards[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      })
    }
  }

  useEffect(() => {
    const rail = railRef.current
    if (!rail) return
    rail.addEventListener('scroll', handleScroll, { passive: true })
    return () => rail.removeEventListener('scroll', handleScroll)
  }, [projects.length])

  return (
    <section className="projects" id="projects">
      <SectionHead
        idx="(02)"
        title="Selected work"
        note="// scroll sideways →"
      />

      <div className="projects_rail" ref={railRef} id="rail">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="projects_controls">
        <div className="projects_dots" id="dots">
          {projects.map((p, idx) => (
            <button
              key={p.id}
              type="button"
              className={activeDot === idx ? 'is-active' : ''}
              onClick={() => scrollToIndex(idx)}
              aria-label={`Jump to project ${idx + 1}`}
            />
          ))}
        </div>

        <div className="projects_arrows">
          <button
            type="button"
            className="rail-arrow"
            onClick={() => scrollToIndex(Math.max(0, activeDot - 1))}
            disabled={activeDot === 0}
            aria-label="Previous project"
          >
            ←
          </button>
          <button
            type="button"
            className="rail-arrow"
            onClick={() => scrollToIndex(Math.min(projects.length - 1, activeDot + 1))}
            disabled={activeDot === projects.length - 1}
            aria-label="Next project"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}
