import type { HTMLAttributes, ReactNode } from 'react'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'alt' | 'primary'
  tight?: boolean
  eyebrow?: string
  title?: string
  lead?: string
  centered?: boolean
  children: ReactNode
}

/**
 * Standard page section: consistent vertical rhythm, optional background
 * variant, and an optional header block (eyebrow / title / lead).
 */
export default function Section({
  variant = 'default',
  tight,
  eyebrow,
  title,
  lead,
  centered,
  children,
  className,
  ...rest
}: SectionProps) {
  const cls = [
    'section',
    variant !== 'default' ? `section--${variant}` : '',
    tight ? 'section--tight' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  const headingId = title ? `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-heading` : undefined

  return (
    <section className={cls} aria-labelledby={headingId} {...rest}>
      <div className="container">
        {(eyebrow || title || lead) && (
          <div className={`section__header${centered ? ' section__header--center' : ''}`}>
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {title && <h2 id={headingId}>{title}</h2>}
            {lead && <p className="lead">{lead}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
