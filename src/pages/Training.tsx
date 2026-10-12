import Button from '../components/Button'
import Icon from '../components/Icon'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import { trainingPrograms } from '../data/training'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Training() {
  usePageMeta({
    title: 'Computer Training',
    description:
      'Computer training programs for students at Dolatom Computer Resources: computer basics, Microsoft Office, graphics design, web development and a 12-month ICT diploma.',
  })

  return (
    <>
      <PageHero
        eyebrow="Computer training"
        title="Training programs for students"
        lead="Choose a program that fits your goals and schedule — from a one-month introduction to a full twelve-month ICT diploma. Every program is hands-on, with one student per computer."
        crumb="Training"
      >
        <Button to="/register" variant="accent" size="lg">
          Register for a program
        </Button>
      </PageHero>

      <Section
        eyebrow="Programs"
        title="What you can study"
        lead="All programs include course materials, practical assessments and a DCR certificate on completion."
      >
        <div className="card-grid">
          {trainingPrograms.map((program) => (
            <article key={program.id} className="card program-card">
              <div>
                <div className="program-card__meta">
                  <span className="badge">{program.level}</span>
                  <span className="badge badge--muted">{program.duration}</span>
                </div>
                <h3>{program.title}</h3>
                <p className="text-muted">{program.summary}</p>
              </div>
              <div>
                <h4>What you will be able to do</h4>
                <ul className="program-card__outcomes">
                  {program.outcomes.map((outcome) => (
                    <li key={outcome}>
                      <Icon name="check" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="program-card__footer">
                <span className="program-card__duration">Duration: {program.duration}</span>
                <Button to="/register" variant="secondary" size="sm">
                  Register
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section variant="alt" eyebrow="How it works" title="From enrolment to certificate">
        <ol className="steps">
          <li>
            <h3>Register online</h3>
            <p>Submit your name and the number of months you want to train for.</p>
          </li>
          <li>
            <h3>Placement call</h3>
            <p>We call you to recommend a program and agree a class schedule.</p>
          </li>
          <li>
            <h3>Learn by doing</h3>
            <p>Attend small classes, complete weekly exercises and build real projects.</p>
          </li>
          <li>
            <h3>Graduate</h3>
            <p>Pass your final assessment and receive your DCR certificate and portfolio.</p>
          </li>
        </ol>
      </Section>

      <Section eyebrow="Good to know" title="Schedules and fees">
        <div className="split split--narrow-aside">
          <div>
            <p>
              Classes run Monday to Friday in morning (9am – 12pm) and afternoon (1pm – 4pm)
              sessions, with a Saturday session for secondary school students. Each student
              works on their own computer throughout the program.
            </p>
            <p>
              Fees depend on the program and duration you choose, and are confirmed before you
              start. Payment can be made per month or per program. Students who need a laptop
              can take advantage of our student laptop bundles.
            </p>
            <Button to="/contact" variant="outline">
              Ask about fees
            </Button>
          </div>
          <aside className="info-panel">
            <h3>Program durations</h3>
            <ul>
              <li>
                <strong>1 month</strong> — Computer Basics &amp; Typing
              </li>
              <li>
                <strong>3 months</strong> — Office Essentials or Graphics Design
              </li>
              <li>
                <strong>6 months</strong> — Web Development Fundamentals
              </li>
              <li>
                <strong>12 months</strong> — Comprehensive ICT Diploma
              </li>
            </ul>
          </aside>
        </div>
      </Section>
    </>
  )
}
