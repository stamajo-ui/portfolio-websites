import { trustLogos } from '../data/site'
import { Container } from './ui/Container'

export function TrustBar() {
  return (
    <section className="border-y border-gray-100 py-12 dark:border-white/10">
      <Container>
        <p className="text-center text-sm font-medium uppercase tracking-wider text-ink-secondary">
          Trusted by growing businesses
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 grayscale opacity-60">
          {trustLogos.map((name) => (
            <span key={name} className="text-lg font-bold tracking-tight text-ink dark:text-white">
              {name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  )
}
