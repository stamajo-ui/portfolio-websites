export interface Testimonial {
  name: string
  role: string
  company: string
  quote: string
  initials: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    role: 'Owner',
    company: 'Coastal Fitness Studio',
    quote:
      'We went from a broken website to a fully booked calendar in under two weeks. The team understood exactly what a fitness brand needed.',
    initials: 'SM',
  },
  {
    name: 'David Chen',
    role: 'Principal',
    company: 'Chen Wealth Advisors',
    quote:
      'Clients trust us more the moment they land on our site. SWEBservices made a financial practice feel like a category leader.',
    initials: 'DC',
  },
  {
    name: 'Maria Gonzalez',
    role: 'Founder',
    company: 'Lumen & Co. Interiors',
    quote:
      'The portfolio site they built is the single biggest driver of new inquiries we have. It looks like it belongs in a design magazine.',
    initials: 'MG',
  },
  {
    name: 'James Okafor',
    role: 'Managing Partner',
    company: 'Okafor & Reyes Law',
    quote:
      'Delivered ahead of schedule, exactly on brief, zero back-and-forth chaos. This is what working with professionals feels like.',
    initials: 'JO',
  },
  {
    name: 'Priya Patel',
    role: 'Founder',
    company: 'Willowbrook Skincare',
    quote:
      'Our Shopify relaunch paid for itself in the first month. Checkout conversion alone jumped noticeably after the redesign.',
    initials: 'PP',
  },
]
