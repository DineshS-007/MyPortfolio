import React from 'react'
import { PORTFOLIO_DATA } from '../constants/portfolioData'
import { StatRow } from '../components/StatRow'
import beforePhoto from '../assets/before-chaos.jpg'
import afterPhoto from '../assets/after-calm.jpg'

export const BeforeAfterSection: React.FC = () => {
  const { beforeAfter } = PORTFOLIO_DATA

  return (
    <section className="ba" id="doposle">
      <div className="ba_word" aria-hidden="true">
        <span className="ba_line ba_line--left">BEFORE</span>
        <div className="ba_circle">
          <span>&amp;</span>
        </div>
        <span className="ba_line ba_line--right">AFTER</span>
      </div>

      <p className="ba_note">{beforeAfter.note}</p>

      <div className="ba_photos">
        <figure className="ba_photo reveal" data-reveal="left">
          <img
            src={beforePhoto}
            alt="Late night desk with red error logs and cables"
            loading="lazy"
          />
          <figcaption>{beforeAfter.beforeCaption}</figcaption>
        </figure>

        <figure className="ba_photo reveal" data-reveal="right">
          <img
            src={afterPhoto}
            alt="Software engineer smiling with open laptop in front of lime green wall"
            loading="lazy"
          />
          <figcaption>{beforeAfter.afterCaption}</figcaption>
        </figure>
      </div>

      <div className="ba_stats">
        {beforeAfter.stats.map((stat) => (
          <StatRow key={stat.label} stat={stat} />
        ))}
      </div>
    </section>
  )
}
