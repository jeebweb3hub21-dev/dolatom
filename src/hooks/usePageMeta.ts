import { useEffect } from 'react'
import { company } from '../data/company'

interface PageMeta {
  title: string
  description?: string
}

/**
 * Sets the document <title> and <meta name="description"> for the current route.
 * Kept deliberately small so it can be swapped for react-helmet-async later.
 */
export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = title ? `${title} | ${company.shortName}` : company.name

    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const previousDescription = meta?.getAttribute('content') ?? ''
    if (meta && description) {
      meta.setAttribute('content', description)
    }

    return () => {
      document.title = previousTitle
      if (meta) meta.setAttribute('content', previousDescription)
    }
  }, [title, description])
}
