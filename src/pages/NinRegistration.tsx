import Button from '../components/Button'
import Icon from '../components/Icon'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import { company } from '../data/company'
import { usePageMeta } from '../hooks/usePageMeta'

const requirements = [
  'Be a Nigerian citizen or legal resident (16 years and above for self-enrolment; minors enrol with a parent or guardian)',
  'One valid supporting document, e.g. birth certificate or declaration of age, voter’s card, international passport, driver’s licence or school ID',
  'A working phone number that belongs to you (needed for your NIN slip and future verification)',
  'Proof of address if available, such as a utility bill',
  'For modifications: your existing NIN slip and documents supporting the change',
]

const services = [
  {
    title: 'New NIN enrolment',
    text: 'Guided capture of your details and biometrics for first-time registration.',
  },
  {
    title: 'NIN retrieval & slip printing',
    text: 'Forgotten your NIN? We help you retrieve it and print a fresh slip.',
  },
  {
    title: 'Data modification support',
    text: 'Assistance with name, date of birth, phone number and address corrections.',
  },
  {
    title: 'NIN–SIM linking guidance',
    text: 'Step-by-step help linking your NIN to your phone lines.',
  },
]

export default function NinRegistration() {
  usePageMeta({
    title: 'NIN Registration',
    description:
      'NIN registration support at Dolatom Computer Resources: new enrolment, NIN retrieval, slip printing and data modification assistance. See requirements and how to proceed.',
  })

  return (
    <>
      <PageHero
        eyebrow="NIN registration"
        title="National Identification Number services"
        lead="We make NIN enrolment simple. Our trained staff guide you through document checks, data capture and follow-up so your registration is completed correctly the first time."
        crumb="NIN Registration"
      >
        <Button to="/contact" variant="accent" size="lg">
          Book a visit
        </Button>
      </PageHero>

      <Section eyebrow="Our NIN services" title="How we can help">
        <div className="card-grid">
          {services.map((item) => (
            <article key={item.title} className="card">
              <div className="service-card__icon" aria-hidden="true">
                <Icon name="nin" />
              </div>
              <h3>{item.title}</h3>
              <p className="text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section variant="alt" eyebrow="Requirements" title="What to bring">
        <div className="split split--narrow-aside">
          <div>
            <p className="lead">
              Having the right documents ready keeps your visit short. Please bring the
              following:
            </p>
            <ul className="checklist">
              {requirements.map((req) => (
                <li key={req}>
                  <Icon name="check-circle" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="info-panel">
            <h3>Important</h3>
            <ul>
              <li>NIN enrolment is a federal government service; DCR provides enrolment support and guidance.</li>
              <li>Only the applicant can be captured — biometrics cannot be done on someone’s behalf.</li>
              <li>Service and processing charges are explained before we begin.</li>
            </ul>
          </aside>
        </div>
      </Section>

      <Section eyebrow="How to proceed" title="Four simple steps">
        <ol className="steps">
          <li>
            <h3>Gather your documents</h3>
            <p>Check the list above and bring originals where possible.</p>
          </li>
          <li>
            <h3>Visit or call us</h3>
            <p>
              Walk in during opening hours ({company.hours}) or call ahead to reserve a slot.
            </p>
          </li>
          <li>
            <h3>Data & biometric capture</h3>
            <p>We verify your documents and guide you through the capture process.</p>
          </li>
          <li>
            <h3>Collect your NIN</h3>
            <p>Receive your tracking details and NIN slip once your enrolment is processed.</p>
          </li>
        </ol>
      </Section>

      <Section tight aria-label="Contact call to action">
        <div className="cta-banner">
          <div>
            <h2>Have a question about NIN?</h2>
            <p>
              Call {company.phone} or send us a message and we will walk you through your
              specific situation.
            </p>
          </div>
          <div className="cta-banner__actions">
            <Button to="/contact" variant="accent" size="lg">
              Contact us
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
