import { Link } from 'react-router-dom'
import { company, navLinks } from '../data/company'
import { services } from '../data/services'
import Icon from './Icon'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div className="site-footer__about">
            <h3>{company.name}</h3>
            <p>
              A Nigerian computer services company helping students gain practical digital
              skills, supporting NIN enrolment, and supplying dependable laptops.
            </p>
            <p className="text-muted" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Serving our community since {company.foundedYear}.
            </p>
          </div>

          <nav aria-label="Footer">
            <h3>Quick links</h3>
            <ul className="site-footer__list">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
              <li>
                <Link to="/register">Student registration</Link>
              </li>
            </ul>
          </nav>

          <div>
            <h3>Services</h3>
            <ul className="site-footer__list">
              {services.map((service) => (
                <li key={service.id}>
                  <Link to={service.to}>{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Contact</h3>
            <ul className="site-footer__list site-footer__contact">
              <li>
                <Icon name="map-pin" />
                <span>{company.address}</span>
              </li>
              <li>
                <Icon name="phone" />
                <a href={`tel:${company.phone.replace(/\s+/g, '')}`}>{company.phone}</a>
              </li>
              <li>
                <Icon name="mail" />
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li>
                <Icon name="clock" />
                <span>{company.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>
            © {year} {company.name}. All rights reserved.
          </span>
          <span>Computer Training · NIN Registration · Laptop Sales</span>
        </div>
      </div>
    </footer>
  )
}
