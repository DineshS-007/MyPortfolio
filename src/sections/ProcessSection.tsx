import React from 'react'
import { PORTFOLIO_DATA } from '../constants/portfolioData'
import { SectionHead } from '../components/SectionHead'

export const ProcessSection: React.FC = () => {
  const { processSteps } = PORTFOLIO_DATA

  return (
    <section className="process" id="process">
      <SectionHead
        idx="(04)"
        title="How the work goes"
        note="// 4 steps, no magic"
      />

      <ol className="process_steps">
        {processSteps.map((step) => (
          <li key={step.num} className="reveal">
            <span className="process_num">{step.num}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
