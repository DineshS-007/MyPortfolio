import type { FC } from 'react'

interface SectionHeadProps {
  idx: string
  title: string
  note: string
}

export const SectionHead: FC<SectionHeadProps> = ({ idx, title, note }) => {
  return (
    <div className="section-head">
      <span className="section-head_idx">{idx}</span>
      <h2 className="section-head_title">{title}</h2>
      <span className="section-head_note">{note}</span>
    </div>
  )
}
