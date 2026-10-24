import React from 'react'
import { PORTFOLIO_DATA } from '../constants/portfolioData'
import { SectionHead } from '../components/SectionHead'

export const ExperienceSection: React.FC = () => {
  const { experience, education, languages } = PORTFOLIO_DATA

  return (
    <section className="experience" id="experience">
      <SectionHead
        idx="(03)"
        title="Experience & Education"
        note="// track record & credentials"
      />

      <div className="experience_grid">
        {/* Work Experience */}
        <div className="experience_work">
          <h3 className="subhead-label">// PROFESSIONAL EXPERIENCE</h3>
          {experience.map((exp, idx) => (
            <article key={idx} className="exp-card reveal">
              <div className="exp-card_header">
                <div>
                  <span className="exp-card_period">{exp.period}</span>
                  <h4 className="exp-card_role">{exp.role}</h4>
                  <p className="exp-card_company">
                    {exp.company} · {exp.location}
                  </p>
                </div>
              </div>

              <ul className="exp-card_highlights">
                {exp.highlights.map((point, pIdx) => (
                  <li key={pIdx}>
                    <span className="bullet">→</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="exp-card_stack">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="tag tag--sm">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Education & Languages */}
        <div className="experience_sidebar">
          <h3 className="subhead-label">// EDUCATION</h3>
          <div className="edu-list">
            {education.map((edu, idx) => (
              <div key={idx} className="edu-card reveal">
                <span className="edu-card_period">{edu.period}</span>
                <h4 className="edu-card_degree">{edu.degree}</h4>
                <p className="edu-card_school">{edu.institution}</p>
                <p className="edu-card_location">{edu.location}</p>
              </div>
            ))}
          </div>

          <div className="lang-box reveal">
            <h3 className="subhead-label">// LANGUAGES</h3>
            <div className="lang-box_tags">
              {languages.map((lang) => (
                <span key={lang} className="tag">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
