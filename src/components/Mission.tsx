import { motion } from 'motion/react'
import { Container } from './ui/Container'

export function Mission() {
  return (
    <section id="about" className="py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-2xl font-medium leading-relaxed text-ink sm:text-3xl dark:text-white">
            We help small businesses launch modern websites in{' '}
            <span className="text-gradient font-bold">days instead of months</span> — combining AI with
            professional design and human expertise.
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
