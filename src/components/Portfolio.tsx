import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'
import { PortfolioCard } from './PortfolioCard'
import { portfolioItems } from '../data/portfolio'

const portfolioSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: portfolioItems.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'CreativeWork',
      name: item.title,
      about: item.industry,
      keywords: item.services.join(', '),
    },
  })),
}

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 lg:py-32">
      <script type="application/ld+json">{JSON.stringify(portfolioSchema)}</script>
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
          subtitle="Examples of websites we can build for your business."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, i) => (
            <PortfolioCard key={item.slug} item={item} index={i} />
          ))}
        </div>
      </Container>
    </section>
  )
}
