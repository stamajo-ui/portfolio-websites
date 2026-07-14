import type { LucideIcon } from 'lucide-react'
import { Globe, TrendingUp, ServerCog, ShieldCheck } from 'lucide-react'

export interface ServiceCategory {
  icon: LucideIcon
  title: string
  description: string
  items: string[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Custom-built sites that launch fast and convert from day one.',
    items: ['AI Website Development', 'Shopify Stores', 'WordPress Websites', 'Business Websites', 'Landing Pages'],
  },
  {
    icon: TrendingUp,
    title: 'Growth & Marketing',
    description: 'Tools and optimization that turn traffic into customers.',
    items: ['SEO Optimization', 'AI Chatbots', 'Automation', 'Analytics', 'Email Marketing'],
  },
  {
    icon: ServerCog,
    title: 'Infrastructure & Care',
    description: 'We keep your site fast, online, and up to date — always.',
    items: ['Hosting', 'Domain Management', 'Business Email', 'Website Maintenance', 'Performance Optimization'],
  },
  {
    icon: ShieldCheck,
    title: 'Security & Compliance',
    description: 'Enterprise-grade protection for businesses of any size.',
    items: ['Security', 'SSL', 'Backups', 'Accessibility', 'GDPR Support'],
  },
]
