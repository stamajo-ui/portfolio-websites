import { motion } from 'motion/react'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'
import { processSteps } from '../data/process'

export function Process() {
  return (
    <section className="bg-gray-50 py-24 lg:py-32 dark:bg-white/[0.02]">
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="From idea to launch, in six steps"
          subtitle="A clear, proven path — so you always know what happens next."
        />

        <div className="relative mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="absolute inset-x-0 top-14 hidden h-px bg-gray-200 lg:block dark:bg-white/10" />
          {processSteps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="relative"
              >
                <div className="relative z-10 flex size-14 items-center justify-center rounded-2xl bg-white text-primary shadow-md ring-1 ring-gray-100 dark:bg-surface-dark-2 dark:text-primary-light dark:ring-white/10">
                  <Icon className="size-6" />
                </div>
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="text-sm font-bold text-primary/40 dark:text-primary-light/40">{step.number}</span>
                  <h3 className="text-lg font-bold text-ink dark:text-white">{step.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{step.description}</p>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
