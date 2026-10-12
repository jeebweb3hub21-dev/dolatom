export type ServiceIcon = 'training' | 'nin' | 'laptop'

export interface Service {
  id: string
  title: string
  description: string
  icon: ServiceIcon
  to: string
  cta: string
}

export const services: Service[] = [
  {
    id: 'training',
    title: 'Computer Training for Students',
    description:
      'Hands-on courses in computer basics, Microsoft Office, internet skills, graphics and web fundamentals — taught at a pace students can follow.',
    icon: 'training',
    to: '/training',
    cta: 'View programs',
  },
  {
    id: 'nin',
    title: 'NIN Registration',
    description:
      'Fast, guided National Identification Number enrolment and support. We help you prepare your documents and complete the process correctly.',
    icon: 'nin',
    to: '/nin-registration',
    cta: 'How it works',
  },
  {
    id: 'laptops',
    title: 'Laptop Sales',
    description:
      'Quality new and refurbished laptops for students, professionals and small businesses — with honest advice on what fits your budget.',
    icon: 'laptop',
    to: '/laptops',
    cta: 'Browse laptops',
  },
]
