import { motion } from 'motion/react'
import { Check } from 'lucide-react'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'
import { serviceCategories } from '../data/services'

export function Services() {
  return (
    <section id="services" className="bg-gray-50 py-24 lg:py-32 dark:bg-white/[0.02]">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Everything your website needs"
          subtitle="From first line of code to long-term growth — one team, one partner."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {serviceCategories.map((category, i) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg dark:border-white/10 dark:bg-surface-dark-2/40"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-primary-light/10 dark:text-primary-light">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-ink dark:text-white">{category.title}</h3>
                <p className="mt-1.5 text-sm text-ink-secondary">{category.description}</p>

                <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-ink dark:text-gray-200">
                      <Check className="size-4 shrink-0 text-success" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
