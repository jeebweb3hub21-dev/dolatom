import { useState, type FormEvent } from 'react'
import Button from '../components/Button'
import FormField from '../components/FormField'
import Icon from '../components/Icon'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import { company } from '../data/company'
import { usePageMeta } from '../hooks/usePageMeta'

interface ContactData {
  name: string
  email: string
  subject: string
  message: string
}

type ContactErrors = Partial<Record<keyof ContactData, string>>

const initialValues: ContactData = { name: '', email: '', subject: '', message: '' }

const subjectOptions = [
  { value: 'training', label: 'Computer training' },
  { value: 'nin', label: 'NIN registration' },
  { value: 'laptops', label: 'Laptop purchase' },
  { value: 'other', label: 'Something else' },
]

function validate(values: ContactData): ContactErrors {
  const errors: ContactErrors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }
  if (!values.message.trim()) errors.message = 'Please enter a message.'
  return errors
}

export default function Contact() {
  usePageMeta({
    title: 'Contact',
    description:
      'Contact Dolatom Computer Resources for computer training, NIN registration or laptop enquiries. Phone, email, address and opening hours.',
  })

  const [values, setValues] = useState<ContactData>(initialValues)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function update<K extends keyof ContactData>(key: K, value: ContactData[K]) {
    const next = { ...values, [key]: value }
    setValues(next)
    if (errors[key]) setErrors(validate(next))
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const validation = validate(values)
    setErrors(validation)
    if (Object.keys(validation).length > 0) {
      document.getElementById(Object.keys(validation)[0])?.focus()
      return
    }
    if (import.meta.env.DEV) console.info('[DCR] Contact message (no backend yet):', values)
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        lead="Questions about training, NIN registration or laptops? Call, email or visit us — or send a message using the form and we will get back to you."
      />

      <Section>
        <div className="contact-grid">
          <div>
            <h2>Contact details</h2>
            <p className="text-muted">
              Walk-ins are welcome during opening hours. For NIN enrolment, calling ahead
              helps us reserve a slot for you.
            </p>

            <div className="contact-card">
              <span className="contact-card__icon" aria-hidden="true">
                <Icon name="map-pin" />
              </span>
              <div>
                <h3>Address</h3>
                <p>{company.address}</p>
              </div>
            </div>
            <div className="contact-card">
              <span className="contact-card__icon" aria-hidden="true">
                <Icon name="phone" />
              </span>
              <div>
                <h3>Phone / WhatsApp</h3>
                <p>
                  <a href={`tel:${company.phone.replace(/\s+/g, '')}`}>{company.phone}</a>
                </p>
              </div>
            </div>
            <div className="contact-card">
              <span className="contact-card__icon" aria-hidden="true">
                <Icon name="mail" />
              </span>
              <div>
                <h3>Email</h3>
                <p>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </p>
              </div>
            </div>
            <div className="contact-card">
              <span className="contact-card__icon" aria-hidden="true">
                <Icon name="clock" />
              </span>
              <div>
                <h3>Opening hours</h3>
                <p>{company.hours}</p>
              </div>
            </div>

            <div className="map-placeholder" role="img" aria-label="Map placeholder">
              Map coming soon — {company.address}
            </div>
          </div>

          <div className="form-card">
            {submitted ? (
              <div className="success-panel" role="status" aria-live="polite">
                <div className="success-panel__icon" aria-hidden="true">
                  <Icon name="check" />
                </div>
                <h2>Message sent</h2>
                <p>
                  Thank you, {values.name.trim()}. We have received your message and will reply
                  to <strong>{values.email.trim()}</strong> as soon as possible.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setValues(initialValues)
                    setErrors({})
                    setSubmitted(false)
                  }}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <>
                <h2>Send us a message</h2>
                <p className="text-muted">We usually reply within one working day.</p>
                <form className="form" onSubmit={handleSubmit} noValidate>
                  <div className="form__row">
                    <FormField
                      id="name"
                      name="name"
                      label="Your name"
                      required
                      autoComplete="name"
                      value={values.name}
                      onChange={(e) => update('name', e.target.value)}
                      error={errors.name}
                    />
                    <FormField
                      id="email"
                      name="email"
                      type="email"
                      label="Email address"
                      required
                      autoComplete="email"
                      value={values.email}
                      onChange={(e) => update('email', e.target.value)}
                      error={errors.email}
                    />
                  </div>
                  <FormField
                    as="select"
                    id="subject"
                    name="subject"
                    label="Subject"
                    placeholder="What is this about?"
                    options={subjectOptions}
                    value={values.subject}
                    onChange={(e) => update('subject', e.target.value)}
                  />
                  <FormField
                    as="textarea"
                    id="message"
                    name="message"
                    label="Message"
                    required
                    rows={5}
                    value={values.message}
                    onChange={(e) => update('message', e.target.value)}
                    error={errors.message}
                  />
                  <div className="form__actions">
                    <Button type="submit" variant="primary" size="lg">
                      Send message
                    </Button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </Section>

      <Section variant="alt" tight aria-label="Register call to action">
        <div className="cta-banner">
          <div>
            <h2>Looking to enrol?</h2>
            <p>Skip the message and go straight to student registration.</p>
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
