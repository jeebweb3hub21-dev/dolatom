import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface PageHeroProps {
  eyebrow?: string
  title: string
  lead?: string
  /** Current page label shown at the end of the breadcrumb trail. */
  crumb?: string
  children?: ReactNode
}

export default function PageHero({ eyebrow, title, lead, crumb, children }: PageHeroProps) {
  return (
    <section className="page-hero" aria-labelledby="page-title">
      <div className="container">
        <nav aria-label="Breadcrumb">
          <ol className="breadcrumbs">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li aria-current="page">{crumb ?? title}</li>
          </ol>
        </nav>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 id="page-title">{title}</h1>
        {lead && <p className="page-hero__lead">{lead}</p>}
        {children}
      </div>
    </section>
  )
}
