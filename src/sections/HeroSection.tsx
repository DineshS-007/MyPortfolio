import type { FC } from 'react'
import { PORTFOLIO_DATA } from '../constants/portfolioData'
import { Pill } from '../components/Pill'
import heroPhoto from '../assets/hero-portrait.jpg'

export const HeroSection: FC = () => {
  const { meta } = PORTFOLIO_DATA

  return (
    <section className="hero" id="top">
      {/* <div className="hero_meta">
        <span>{meta.roleTag}</span>
        <span>{meta.location}</span>
        <span>{meta.experienceBadge}</span>
      </div> */}

      <h1 className='lg:text-[48px] text-[24px]'>Hey, I'm Dinesh.</h1>

      <h1 className="hero_word">
        <span className="hero_line hero_line--left">{meta.heroLine1}</span>
        <span className="hero_line hero_line--right">{meta.heroLine2}</span>
      </h1>

      {/* <div className="hero_circle" aria-hidden="true">
        <span>{meta.circleBadge}</span>
      </div> */}

      <figure className="hero_photo reveal" data-reveal="right">
        <img
          src={heroPhoto}
          alt="Dinesh S"
          loading="eager"
        />
        <figcaption>{meta.heroCaption}</figcaption>
      </figure>

      <div className="hero_cta">
        <Pill href="#projects" variant="lime" size="big">
          View projects
        </Pill>
        <Pill href="#doposle" variant="ghost" size="big" showArrow={false}>
          View Resume
        </Pill>
      </div>
    </section>
  )
}
