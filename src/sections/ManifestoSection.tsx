import React from 'react'
import { PORTFOLIO_DATA } from '../constants/portfolioData'

export const ManifestoSection: React.FC = () => {
  const { manifesto } = PORTFOLIO_DATA

  return (
    <section className="manifest">
      <p className="manifest_note">{manifesto.subtitle}</p>

      <h2 className="manifest_lines">
        <span className="reveal">
          {manifesto.line1.text}
          <mark className="mk mk--lime">{manifesto.line1.mark}</mark>
        </span>
        <span className="reveal">
          {manifesto.line2.text}
          <mark className="mk mk--mint">{manifesto.line2.mark}</mark>
        </span>
        <span className="reveal">
          {manifesto.line3.text}
          <mark className="mk mk--gold">{manifesto.line3.mark}</mark>
        </span>
      </h2>

      <p className="manifest_sub">{manifesto.description}</p>
    </section>
  )
}
