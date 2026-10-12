import { useState, type FormEvent } from 'react'
import Button from '../components/Button'
import FormField from '../components/FormField'
import Icon from '../components/Icon'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import { company } from '../data/company'
import { trainingDurations, trainingPrograms } from '../data/training'
import { usePageMeta } from '../hooks/usePageMeta'

/** Shape of a registration submission. Ready to be POSTed to a backend later. */
export interface RegistrationData {
  fullName: string
  months: string
  phone: string
  email: string
  course: string
  message: string
}

type FormErrors = Partial<Record<keyof RegistrationData, string>>

const initialValues: RegistrationData = {
  fullName: '',
  months: '',
  phone: '',
  email: '',
  course: '',
  message: '',
}

const courseOptions = [
  ...trainingPrograms.map((p) => ({ value: p.id, label: p.title })),
  { value: 'undecided', label: 'Not sure yet — help me choose' },
]

function validate(values: RegistrationData): FormErrors {
  const errors: FormErrors = {}

  if (!values.fullName.trim()) {
    errors.fullName = 'Please enter your full name.'
  } else if (values.fullName.trim().length < 3) {
    errors.fullName = 'Full name must be at least 3 characters.'
  }

  if (!values.months) {
    errors.months = 'Please select how many months you would like to train for.'
  } else if (!trainingDurations.some((d) => d.value === values.months)) {
    errors.months = 'Please choose a valid training duration.'
  }

  if (values.phone.trim()) {
    const digits = values.phone.replace(/[\s()-]/g, '')
    if (!/^\+?\d{7,15}$/.test(digits)) {
      errors.phone = 'Enter a valid phone number (digits only, e.g. 08012345678).'
    }
  }

  if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }

  return errors
}

/**
 * Placeholder submit handler. Replace the body of this function with a
 * fetch/axios call to your backend when it is ready — the rest of the form
 * does not need to change.
 */
async function submitRegistration(data: RegistrationData): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 500))
  if (import.meta.env.DEV) {
    console.info('[DCR] Registration submitted (no backend yet):', data)
  }
}

export default function Register() {
  usePageMeta({
    title: 'Student Registration',
    description:
      'Register for computer training at Dolatom Computer Resources. Tell us your name and how many months you want to train for, and we will call you back.',
  })

  const [values, setValues] = useState<RegistrationData>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof RegistrationData, boolean>>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [submitted, setSubmitted] = useState<RegistrationData | null>(null)

  const requiredFilled = values.fullName.trim().length > 0 && values.months !== ''
  const hasErrors = Object.keys(validate(values)).length > 0
  const canSubmit = requiredFilled && !hasErrors && status !== 'submitting'

  function update<K extends keyof RegistrationData>(key: K, value: RegistrationData[K]) {
    const next = { ...values, [key]: value }
    setValues(next)
    // Re-validate only fields the user has already interacted with.
    if (touched[key]) {
      setErrors(validate(next))
    }
  }

  function blur(key: keyof RegistrationData) {
    setTouched((prev) => ({ ...prev, [key]: true }))
    setErrors(validate(values))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const validation = validate(values)
    setErrors(validation)
    setTouched({ fullName: true, months: true, phone: true, email: true, course: true, message: true })

    if (Object.keys(validation).length > 0) {
      // Focus the first invalid field for keyboard and screen-reader users.
      const firstInvalid = Object.keys(validation)[0]
      document.getElementById(firstInvalid)?.focus()
      return
    }

    setStatus('submitting')
    try {
      await submitRegistration(values)
      setSubmitted(values)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  function reset() {
    setValues(initialValues)
    setErrors({})
    setTouched({})
    setSubmitted(null)
    setStatus('idle')
  }

  const visibleError = (key: keyof RegistrationData) => (touched[key] ? errors[key] : undefined)

  const monthsLabel = (value: string) =>
    trainingDurations.find((d) => d.value === value)?.label ?? `${value} month(s)`
  const courseLabel = (value: string) =>
    courseOptions.find((c) => c.value === value)?.label ?? '—'

  return (
    <>
      <PageHero
        eyebrow="Student registration"
        title="Register for computer training"
        lead="Fill in the short form below. The only required details are your full name and how many months you would like to train for — we will take care of the rest when we call you."
        crumb="Register"
      />

      <Section>
        <div className="register-layout">
          <div className="form-card">
            {status === 'success' && submitted ? (
              <div className="success-panel" role="status" aria-live="polite">
                <div className="success-panel__icon" aria-hidden="true">
                  <Icon name="check" />
                </div>
                <h2>Thank you, {submitted.fullName.trim().split(/\s+/)[0]}!</h2>
                <p>
                  Your registration has been received. A member of the DCR team will contact
                  you shortly to confirm your program and start date.
                </p>
                <dl>
                  <dt>Full name</dt>
                  <dd>{submitted.fullName}</dd>
                  <dt>Training duration</dt>
                  <dd>{monthsLabel(submitted.months)}</dd>
                  {submitted.course && (
                    <>
                      <dt>Course interest</dt>
                      <dd>{courseLabel(submitted.course)}</dd>
                    </>
                  )}
                  {submitted.phone && (
                    <>
                      <dt>Phone</dt>
                      <dd>{submitted.phone}</dd>
                    </>
                  )}
                  {submitted.email && (
                    <>
                      <dt>Email</dt>
                      <dd>{submitted.email}</dd>
                    </>
                  )}
                </dl>
                <div className="form__actions" style={{ justifyContent: 'center' }}>
                  <Button onClick={reset} variant="outline">
                    Register another student
                  </Button>
                  <Button to="/training" variant="secondary">
                    View training programs
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <h2>Student details</h2>
                <p className="text-muted">
                  Fields marked <span aria-hidden="true">*</span>
                  <span className="visually-hidden">with an asterisk</span> are required.
                </p>

                {status === 'error' && (
                  <div className="alert alert--error" role="alert">
                    Something went wrong while sending your registration. Please try again or
                    call us on {company.phone}.
                  </div>
                )}

                <form className="form" onSubmit={handleSubmit} noValidate>
                  <FormField
                    id="fullName"
                    name="fullName"
                    label="Full name"
                    required
                    autoComplete="name"
                    placeholder="e.g. Adaeze Okonkwo"
                    value={values.fullName}
                    onChange={(e) => update('fullName', e.target.value)}
                    onBlur={() => blur('fullName')}
                    error={visibleError('fullName')}
                  />

                  <FormField
                    as="select"
                    id="months"
                    name="months"
                    label="Months for training"
                    required
                    hint="How long would you like to train for? Programs run for 1, 3, 6 or 12 months."
                    placeholder="Select a duration"
                    options={trainingDurations}
                    value={values.months}
                    onChange={(e) => update('months', e.target.value)}
                    onBlur={() => blur('months')}
                    error={visibleError('months')}
                  />

                  <div className="form__row">
                    <FormField
                      id="phone"
                      name="phone"
                      type="tel"
                      label="Phone number"
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="e.g. 08012345678"
                      hint="Optional — we will use this to call you back."
                      value={values.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      onBlur={() => blur('phone')}
                      error={visibleError('phone')}
                    />
                    <FormField
                      id="email"
                      name="email"
                      type="email"
                      label="Email address"
                      autoComplete="email"
                      inputMode="email"
                      placeholder="e.g. you@example.com"
                      hint="Optional"
                      value={values.email}
                      onChange={(e) => update('email', e.target.value)}
                      onBlur={() => blur('email')}
                      error={visibleError('email')}
                    />
                  </div>

                  <FormField
                    as="select"
                    id="course"
                    name="course"
                    label="Course interest"
                    hint="Optional — pick a program if you already have one in mind."
                    placeholder="Select a program"
                    options={courseOptions}
                    value={values.course}
                    onChange={(e) => update('course', e.target.value)}
                  />

                  <FormField
                    as="textarea"
                    id="message"
                    name="message"
                    label="Message"
                    hint="Optional — tell us about your goals, availability or any questions."
                    rows={4}
                    value={values.message}
                    onChange={(e) => update('message', e.target.value)}
                  />

                  <div className="form__actions">
                    <Button type="submit" variant="primary" size="lg" disabled={!canSubmit}>
                      {status === 'submitting' ? 'Submitting…' : 'Submit registration'}
                    </Button>
                    <p className="form__note">
                      By submitting you agree to be contacted by DCR about your training.
                    </p>
                  </div>
                </form>
              </>
            )}
          </div>

          <aside className="info-panel" aria-label="What happens next">
            <h3>What happens next</h3>
            <ul>
              <li>We review your registration within one working day.</li>
              <li>A DCR team member calls to recommend a program and confirm your schedule.</li>
              <li>You receive your start date, fee summary and a list of what to bring.</li>
            </ul>
            <p style={{ marginTop: 'var(--space-4)', marginBottom: 0 }}>
              Prefer to talk first? Call <a href={`tel:${company.phone.replace(/\s+/g, '')}`}>{company.phone}</a>{' '}
              during opening hours ({company.hours}).
            </p>
          </aside>
        </div>
      </Section>
    </>
  )
}
