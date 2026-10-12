import { Link } from 'react-router-dom'
import type { Service } from '../data/services'
import Icon from './Icon'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="card service-card">
      <div className="service-card__icon" aria-hidden="true">
        <Icon name={service.icon} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <Link to={service.to} className="service-card__link">
        {service.cta}
        <Icon name="arrow-right" />
      </Link>
    </article>
  )
}
