import Button from '../components/Button'
import Icon from '../components/Icon'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import { company } from '../data/company'
import { formatNaira, laptops } from '../data/laptops'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Laptops() {
  usePageMeta({
    title: 'Laptops',
    description:
      'Buy new and refurbished laptops from Dolatom Computer Resources. Student-friendly prices, tested hardware and honest advice.',
  })

  return (
    <>
      <PageHero
        eyebrow="Laptop sales"
        title="Reliable laptops for students and professionals"
        lead="Every laptop we sell is tested, cleaned and set up before it leaves our shop. Prices below are indicative — contact us to confirm current stock and pricing."
        crumb="Laptops"
      >
        <Button to="/contact" variant="accent" size="lg">
          Ask about a laptop
        </Button>
      </PageHero>

      <Section eyebrow="Catalogue" title="Available laptops">
        <div className="card-grid">
          {laptops.map((laptop) => (
            <article key={laptop.id} className="card product-card">
              <div className="product-card__media" aria-hidden="true">
                <Icon name="laptop" strokeWidth={1.25} />
                {laptop.badge && (
                  <span className="badge badge--accent product-card__badge">{laptop.badge}</span>
                )}
              </div>
              <div className="product-card__body">
                <span
                  className={`badge product-card__condition${laptop.condition === 'New' ? '' : ' badge--muted'}`}
                >
                  {laptop.condition}
                </span>
                <h3>{laptop.name}</h3>
                <ul className="product-card__specs">
                  {laptop.specs.map((spec) => (
                    <li key={spec}>{spec}</li>
                  ))}
                </ul>
                <div className="product-card__footer">
                  {laptop.price !== null ? (
                    <span className="product-card__price">{formatNaira(laptop.price)}</span>
                  ) : (
                    <span className="product-card__price product-card__price--contact">
                      Contact for price
                    </span>
                  )}
                  <Button to="/contact" variant="secondary" size="sm">
                    Enquire
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section variant="alt" eyebrow="Buying with confidence" title="What is included">
        <ul className="feature-list">
          <li className="feature-list__item">
            <span className="feature-list__icon" aria-hidden="true">
              <Icon name="shield" />
            </span>
            <div>
              <h3>Tested and warranted</h3>
              <p>Every unit passes a hardware check and comes with a warranty on refurbished stock.</p>
            </div>
          </li>
          <li className="feature-list__item">
            <span className="feature-list__icon" aria-hidden="true">
              <Icon name="check-circle" />
            </span>
            <div>
              <h3>Ready to use</h3>
              <p>Windows, Office and essential software set up before collection.</p>
            </div>
          </li>
          <li className="feature-list__item">
            <span className="feature-list__icon" aria-hidden="true">
              <Icon name="users" />
            </span>
            <div>
              <h3>Student bundles</h3>
              <p>Discounted pricing for students enrolled in a DCR training program.</p>
            </div>
          </li>
          <li className="feature-list__item">
            <span className="feature-list__icon" aria-hidden="true">
              <Icon name="phone" />
            </span>
            <div>
              <h3>After-sales support</h3>
              <p>Call {company.phone} for setup help and basic troubleshooting.</p>
            </div>
          </li>
        </ul>
      </Section>
    </>
  )
}
