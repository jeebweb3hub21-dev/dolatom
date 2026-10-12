import Button from '../components/Button'
import Icon from '../components/Icon'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import { company } from '../data/company'
import { usePageMeta } from '../hooks/usePageMeta'

const values = [
  {
    icon: 'users' as const,
    title: 'Student-first teaching',
    text: 'Our instructors teach at the pace of the class, repeat where needed and make sure every student practises on a real computer.',
  },
  {
    icon: 'shield' as const,
    title: 'Honest, transparent service',
    text: 'Clear fees for training, straightforward NIN guidance and laptop advice that fits your budget — no hidden charges.',
  },
  {
    icon: 'award' as const,
    title: 'Results you can show',
    text: 'Students finish with a DCR certificate and a portfolio of real work they can present to schools and employers.',
  },
  {
    icon: 'star' as const,
    title: 'Community commitment',
    text: `Serving our community since ${company.foundedYear}, we reinvest in better equipment and support for local schools.`,
  },
]

export default function About() {
  usePageMeta({
    title: 'About',
    description:
      'Learn about Dolatom Computer Resources: our mission, the students we serve and why families trust DCR for computer training, NIN registration and laptops.',
  })

  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Building digital confidence, one student at a time"
        lead={`${company.name} is a Nigerian computer services company founded in ${company.foundedYear}. We exist to make computer skills, identity registration and reliable hardware accessible to students and families.`}
      />

      <Section eyebrow="Our mission" title="Why we do this">
        <div className="split">
          <div>
            <p className="lead">
              Too many bright students leave school without ever having typed a document,
              built a spreadsheet or published anything online. We are closing that gap.
            </p>
            <p>
              Our mission is to equip every student who walks through our doors with
              practical, job-relevant computer skills — and to be the trusted place in our
              community for NIN registration and dependable laptops.
            </p>
            <p>
              We believe technology education should be hands-on, patient and affordable.
              That is why our classes are small, our programs are flexible (from one month to
              a full year) and our fees are published upfront.
            </p>
            <Button to="/training" variant="primary">
              See our training programs
            </Button>
          </div>
          <div className="split__visual" aria-hidden="true">
            <div>
              <Icon name="training" />
              <blockquote>
                “Every student should leave DCR able to do something they could not do before.”
              </blockquote>
            </div>
          </div>
        </div>
      </Section>

      <Section
        variant="alt"
        eyebrow="Who we serve"
        title="Designed for students"
        lead="Our programs are built around the realities of student life in Nigeria."
      >
        <div className="card-grid">
          <article className="card">
            <h3>Secondary school students</h3>
            <p className="text-muted">
              Weekend and holiday classes covering computer basics, typing and Microsoft
              Office, so students arrive at tertiary level already confident with a computer.
            </p>
          </article>
          <article className="card">
            <h3>Tertiary students & graduates</h3>
            <p className="text-muted">
              Office skills, graphics design and web fundamentals that strengthen project
              work, NYSC applications and first job interviews.
            </p>
          </article>
          <article className="card">
            <h3>Parents & guardians</h3>
            <p className="text-muted">
              Clear schedules, published fees and progress updates — plus honest guidance
              when choosing a first laptop for your child.
            </p>
          </article>
        </div>
      </Section>

      <Section eyebrow="Why DCR" title="What sets us apart">
        <ul className="feature-list">
          {values.map((value) => (
            <li key={value.title} className="feature-list__item">
              <span className="feature-list__icon" aria-hidden="true">
                <Icon name={value.icon} />
              </span>
              <div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section tight aria-label="Register call to action">
        <div className="cta-banner">
          <div>
            <h2>Join our next cohort</h2>
            <p>Registration takes less than two minutes. We will call you back to confirm.</p>
          </div>
          <div className="cta-banner__actions">
            <Button to="/register" variant="accent" size="lg">
              Register as a student
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
