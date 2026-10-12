export const company = {
  name: 'Dolatom Computer Resources',
  shortName: 'DCR',
  tagline: 'Practical computer skills, trusted services, reliable laptops.',
  phone: '0803 067 8004',
  email: 'dola_tom@yahoo.com',
  address: 'Dolatom Buildings, Orita, Odigbo, Ondo State, Nigeria',
  hours: 'Mon – Sat, 8:00am – 6:00pm',
  foundedYear: 2015,
}

export interface NavLinkItem {
  to: string
  label: string
}

export const navLinks: NavLinkItem[] = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/training', label: 'Training' },
  { to: '/nin-registration', label: 'NIN Registration' },
  { to: '/laptops', label: 'Laptops' },
  { to: '/contact', label: 'Contact' },
]
