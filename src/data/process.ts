import type { LucideIcon } from 'lucide-react'
import { Search, Compass, PenTool, Code2, Rocket, LineChart } from 'lucide-react'

export interface ProcessStep {
  number: string
  icon: LucideIcon
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery',
    description: 'We learn your business, goals, and customers before a single pixel gets designed.',
  },
  {
    number: '02',
    icon: Compass,
    title: 'Strategy',
    description: 'We map the site structure, content, and conversion path built around your goals.',
  },
  {
    number: '03',
    icon: PenTool,
    title: 'Design',
    description: 'AI-accelerated concepts, refined by our design team into a polished, on-brand look.',
  },
  {
    number: '04',
    icon: Code2,
    title: 'Development',
    description: 'Production-grade code — fast, responsive, secure, and built to scale with you.',
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Launch',
    description: 'We handle domains, hosting, and go-live checks so launch day is effortless.',
  },
  {
    number: '06',
    icon: LineChart,
    title: 'Growth',
    description: 'Ongoing optimization, SEO, and support to keep performance improving after launch.',
  },
]
