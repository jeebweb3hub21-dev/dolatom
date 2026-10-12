import Button from '../components/Button'
import { usePageMeta } from '../hooks/usePageMeta'

export default function NotFound() {
  usePageMeta({ title: 'Page not found' })

  return (
    <section className="section not-found" aria-labelledby="nf-title">
      <div className="container">
        <p className="not-found__code" aria-hidden="true">
          404
        </p>
        <h1 id="nf-title">Page not found</h1>
        <p className="lead">The page you are looking for does not exist or has moved.</p>
        <Button to="/" variant="primary">
          Back to home
        </Button>
      </div>
    </section>
  )
}
