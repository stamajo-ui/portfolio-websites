import { motion } from 'motion/react'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'
import { whyChooseUs } from '../data/whyChooseUs'

export function WhyChooseUs() {
  return (
    <section id="pricing" className="py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why Us"
          title="Why businesses choose SWEBservices"
          subtitle="AI gives us speed. Human expertise guarantees the result is worth shipping."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="rounded-2xl border border-gray-100 p-6 transition-colors duration-300 hover:border-primary/30 hover:bg-primary/[0.03] dark:border-white/10 dark:hover:border-primary-light/30 dark:hover:bg-primary-light/[0.04]"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-ink dark:text-white">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-secondary">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
