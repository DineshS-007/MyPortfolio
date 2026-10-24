import type { FC, ReactNode } from 'react'

interface PillProps {
  href: string
  variant?: 'lime' | 'ghost'
  size?: 'normal' | 'big'
  children: ReactNode
  showArrow?: boolean
  className?: string
  external?: boolean
}

export const Pill: FC<PillProps> = ({
  href,
  variant = 'lime',
  size = 'normal',
  children,
  showArrow = true,
  className = '',
  external = false,
}) => {
  const classes = [
    'pill',
    variant === 'lime' ? 'pill--lime' : 'pill--ghost',
    size === 'big' ? 'pill--big' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
      {showArrow && (
        <svg
          className="arr-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M18 8L22 12L18 16" />
          <path d="M2 12H22" />
        </svg>
      )}
    </a>
  )
}
