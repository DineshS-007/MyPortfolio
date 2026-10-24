import { Fragment } from 'react'
import type { FC } from 'react'

interface TickerProps {
  items: string[]
}

export const Ticker: FC<TickerProps> = ({ items }) => {
  // Duplicate list to achieve infinite seamless translation
  const duplicated = [...items, ...items, ...items]

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker_track">
        {duplicated.map((item, index) => (
          <Fragment key={`${item}-${index}`}>
            <span>{item}</span>
            <i className="ast">✳</i>
          </Fragment>
        ))}
      </div>
    </div>
  )
}
