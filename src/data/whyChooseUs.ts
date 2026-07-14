import type { LucideIcon } from 'lucide-react'
import { Zap, Users, Clock, DollarSign, TrendingUp, Lock, Search, Smartphone, Layers } from 'lucide-react'

export interface WhyItem {
  icon: LucideIcon
  title: string
  description: string
}

export const whyChooseUs: WhyItem[] = [
  { icon: Zap, title: 'AI-accelerated production', description: 'AI handles the repetitive work so we spend our time on what actually moves the needle.' },
  { icon: Users, title: 'Human-guaranteed quality', description: 'Every project is reviewed and refined by experienced designers and engineers.' },
  { icon: Clock, title: 'Fast delivery', description: '7-day average turnaround, without cutting corners on craft.' },
  { icon: DollarSign, title: 'Transparent pricing', description: 'You see the full quote upfront. No hidden costs, ever.' },
  { icon: Layers, title: 'Built to scale', description: 'Architecture that grows with your business, from launch to enterprise.' },
  { icon: Lock, title: 'Secure by default', description: 'SSL, hardened forms, and best-practice security on every build.' },
  { icon: Search, title: 'SEO-first', description: 'Structured data, performance, and semantics built in from day one.' },
  { icon: Smartphone, title: 'Mobile-first', description: 'Every site is designed for the device most of your customers use first.' },
  { icon: TrendingUp, title: 'Results-driven', description: 'We build toward conversions and revenue, not just aesthetics.' },
]
