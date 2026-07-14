export interface PortfolioItem {
  slug: string
  title: string
  industry: string
  traits: string[]
  services: string[]
  technologies: string[]
  gradient: [string, string]
}

export const portfolioItems: PortfolioItem[] = [
  {
    slug: 'modern-shopify-store',
    title: 'Modern Shopify Store',
    industry: 'Fashion ecommerce',
    traits: ['Ecommerce', 'Fashion'],
    services: ['Cart', 'Checkout', 'Payments', 'Email', 'Analytics', 'Inventory', 'Mobile optimized'],
    technologies: ['Shopify', 'Stripe', 'Klaviyo'],
    gradient: ['#4F46E5', '#EC4899'],
  },
  {
    slug: 'financial-consultancy',
    title: 'Financial Consultancy',
    industry: 'Financial services',
    traits: ['Professional', 'Elegant', 'Trustworthy'],
    services: ['Appointment booking', 'Lead generation', 'Secure contact forms'],
    technologies: ['React', 'TypeScript', 'Calendly'],
    gradient: ['#0EA5E9', '#4F46E5'],
  },
  {
    slug: 'fitness-coach',
    title: 'Fitness Coach',
    industry: 'Personal training',
    traits: ['Dynamic', 'Energetic'],
    services: ['Booking system', 'Testimonials', 'Membership', 'Programs'],
    technologies: ['React', 'Stripe', 'Booking API'],
    gradient: ['#F97316', '#EF4444'],
  },
  {
    slug: 'restaurant',
    title: 'Restaurant',
    industry: 'Hospitality',
    traits: ['Warm', 'Inviting'],
    services: ['Reservations', 'Menu', 'Gallery', 'Maps'],
    technologies: ['React', 'Google Maps API', 'CMS'],
    gradient: ['#D97706', '#DC2626'],
  },
  {
    slug: 'law-firm',
    title: 'Law Firm',
    industry: 'Legal services',
    traits: ['Professional', 'Minimal'],
    services: ['Case results', 'Attorney profiles', 'Consultation requests'],
    technologies: ['React', 'TypeScript', 'Tailwind'],
    gradient: ['#1E293B', '#4F46E5'],
  },
  {
    slug: 'dental-practice',
    title: 'Dental Practice',
    industry: 'Healthcare',
    traits: ['Clean', 'Reassuring'],
    services: ['Appointment scheduling', 'Patient forms', 'Service overview'],
    technologies: ['React', 'Calendly', 'Secure forms'],
    gradient: ['#06B6D4', '#4F46E5'],
  },
  {
    slug: 'real-estate-agency',
    title: 'Real Estate Agency',
    industry: 'Real estate',
    traits: ['Polished', 'Data-driven'],
    services: ['Listings', 'Filters', 'Maps'],
    technologies: ['React', 'MLS API', 'Google Maps'],
    gradient: ['#7C3AED', '#0EA5E9'],
  },
  {
    slug: 'construction-company',
    title: 'Construction Company',
    industry: 'Construction',
    traits: ['Bold', 'Industrial'],
    services: ['Projects', 'Quote request'],
    technologies: ['React', 'Tailwind', 'CMS'],
    gradient: ['#EA580C', '#78350F'],
  },
  {
    slug: 'marketing-agency',
    title: 'Marketing Agency',
    industry: 'Marketing',
    traits: ['Bold', 'Creative'],
    services: ['Modern animations', 'Case studies', 'Lead capture'],
    technologies: ['React', 'GSAP', 'Framer Motion'],
    gradient: ['#7C3AED', '#EC4899'],
  },
  {
    slug: 'luxury-interior-design',
    title: 'Luxury Interior Design',
    industry: 'Interior design',
    traits: ['Premium', 'Editorial'],
    services: ['Premium portfolio', 'Project galleries', 'Consultation requests'],
    technologies: ['React', 'GSAP', 'Headless CMS'],
    gradient: ['#78716C', '#4F46E5'],
  },
]
