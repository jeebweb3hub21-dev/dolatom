import Button from '../components/Button'
import Icon from '../components/Icon'
import Section from '../components/Section'
import ServiceCard from '../components/ServiceCard'
import { company } from '../data/company'
import { services } from '../data/services'
import { usePageMeta } from '../hooks/usePageMeta'

const yearsOfService = new Date().getFullYear() - company.foundedYear

const highlights = [
  {
    date: 'New intake',
    title: 'Enrolment now open for the next training cohort',
    text: 'Classes run weekday mornings and afternoons, with a Saturday option for secondary school students.',
    media: 'highlight-card__media',
    icon: 'calendar' as const,
    to: '/register',
    cta: 'Register now',
  },
  {
    date: 'Service update',
    title: 'Walk-in NIN enrolment and modification support',
    text: 'Bring your documents and complete your NIN enrolment or correction with guided assistance.',
    media: 'highlight-card__media highlight-card__media--alt',
    icon: 'nin' as const,
    to: '/nin-registration',
    cta: 'See requirements',
  },
  {
    date: 'New stock',
    title: 'Student laptop bundles now available',
    text: 'Affordable, tested laptops with Office pre-installed — ideal for coursework and training.',
    media: 'highlight-card__media highlight-card__media--accent',
    icon: 'laptop' as const,
    to: '/laptops',
    cta: 'Browse laptops',
  },
]

export default function Home() {
  usePageMeta({
    title: 'Home',
    description:
      'Dolatom Computer Resources offers computer training for students, NIN registration and laptop sales in Nigeria.',
  })

  return (
    <>
      {/* Hero ------------------------------------------------------- */}
      <section className="home-hero" aria-labelledby="home-title">
        <div className="container">
          <div>
            <span className="eyebrow">Dolatom Computer Resources</span>
            <h1 id="home-title">Practical computer skills for the next generation</h1>
            <p className="home-hero__lead">
              {company.tagline} We train students in the digital skills they need, help
              Nigerians complete their NIN registration, and supply dependable laptops at
              honest prices.
            </p>
            <div className="home-hero__actions">
              <Button to="/register" variant="accent" size="lg">
                Register as a student
              </Button>
              <Button to="/training" variant="ghost" size="lg">
                Explore training programs
              </Button>
            </div>
          </div>

          <aside className="home-hero__panel" aria-label="Why students choose DCR">
            <h2>Why students choose DCR</h2>
            <ul>
              <li>
                <Icon name="check-circle" />
                <span>Small classes with hands-on practice on every topic</span>
              </li>
              <li>
                <Icon name="check-circle" />
                <span>Flexible 1, 3, 6 and 12-month programs</span>
              </li>
              <li>
                <Icon name="check-circle" />
                <span>Certificate and project portfolio on completion</span>
              </li>
              <li>
                <Icon name="check-circle" />
                <span>Affordable fees with student laptop options</span>
              </li>
            </ul>
            <Button to="/about" variant="ghost" size="sm">
              Learn more about us
            </Button>
          </aside>
        </div>
      </section>

      {/* Services --------------------------------------------------- */}
      <Section
        eyebrow="What we do"
        title="Our services"
        lead="Three core services, delivered with the same care: clear guidance, fair pricing and real results."
      >
        <div className="card-grid">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Section>

      {/* Stats ------------------------------------------------------ */}
      <Section variant="primary" tight aria-label="Key figures">
        <ul className="stats">
          <li>
            <span className="stats__value">1,200+</span>
            <span className="stats__label">Students trained</span>
          </li>
          <li>
            <span className="stats__value">5</span>
            <span className="stats__label">Training programs</span>
          </li>
          <li>
            <span className="stats__value">3,500+</span>
            <span className="stats__label">NIN enrolments assisted</span>
          </li>
          <li>
            <span className="stats__value">{yearsOfService}+</span>
            <span className="stats__label">Years of service</span>
          </li>
        </ul>
      </Section>

      {/* Highlights ------------------------------------------------- */}
      <Section
        variant="alt"
        eyebrow="Highlights"
        title="News and updates"
        lead="What's happening at Dolatom Computer Resources."
      >
        <div className="card-grid">
          {highlights.map((item) => (
            <article key={item.title} className="highlight-card">
              <div className={item.media} aria-hidden="true">
                <Icon name={item.icon} />
              </div>
              <div className="highlight-card__body">
                <span className="highlight-card__date">{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Button to={item.to} variant="secondary" size="sm">
                  {item.cta}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* CTA -------------------------------------------------------- */}
      <Section tight aria-label="Register call to action">
        <div className="cta-banner">
          <div>
            <h2>Ready to start learning?</h2>
            <p>
              Tell us your name and how many months you would like to train for. Our team
              will contact you to confirm a start date and class schedule.
            </p>
          </div>
          <div className="cta-banner__actions">
            <Button to="/register" variant="accent" size="lg">
              Start registration
            </Button>
            <Button to="/contact" variant="ghost" size="lg">
              Talk to us
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
