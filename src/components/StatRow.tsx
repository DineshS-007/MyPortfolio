import type { FC } from 'react'
import type { BeforeAfterStat } from '../constants/portfolioData'
import { useCountUp } from '../hooks/useCountUp'

interface StatRowProps {
  stat: BeforeAfterStat
}

export const StatRow: FC<StatRowProps> = ({ stat }) => {
  const { value, elementRef } = useCountUp(stat.targetValue, stat.decimals)

  return (
    <div className="stat reveal" ref={elementRef}>
      <div className="stat_meta">
        <span className="stat_label">{stat.label}</span>
        {stat.note && <span className="stat_subnote">// {stat.note}</span>}
      </div>
      <span className="stat_before">{stat.before}</span>
      <span className="stat_arrow">→</span>
      <span className="stat_after">
        {stat.prefix && <i>{stat.prefix}</i>}
        <b className="count">{value}</b>
        {stat.suffix && <i>{stat.suffix}</i>}
      </span>
    </div>
  )
}
