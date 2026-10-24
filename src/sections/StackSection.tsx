import React from 'react'
import { PORTFOLIO_DATA } from '../constants/portfolioData'
import { SectionHead } from '../components/SectionHead'

export const StackSection: React.FC = () => {
  const { stackCategories } = PORTFOLIO_DATA

  return (
    <section className="stack" id="stack">
      <SectionHead
        idx="(01)"
        title="What I work with"
        note="// languages & tools"
      />

      {stackCategories.map((cat) => (
        <div key={cat.idx} className="stack_row reveal">
          <span className="stack_idx">{cat.idx}</span>
          <div className="stack_main">
            <h3>{cat.title}</h3>
            <p>{cat.description}</p>
          </div>
          <div className="stack_tags">
            {cat.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
