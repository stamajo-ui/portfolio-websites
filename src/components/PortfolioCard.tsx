import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import type { PortfolioItem } from '../data/portfolio'

export function PortfolioCard({ item, index }: { item: PortfolioItem; index: number }) {
  const [from, to] = item.gradient
  const visibleServices = item.services.slice(0, 4)
  const extra = item.services.length - visibleServices.length

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-white/10 dark:bg-surface-dark-2/40"
    >
      {/* Mockup */}
      <div
        className="relative flex h-48 items-center justify-center overflow-hidden p-6"
        style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
      >
        <div className="glass w-full max-w-[85%] rounded-xl p-4 shadow-lg">
          <div className="flex gap-1.5">
            <span className="size-1.5 rounded-full bg-white/70" />
            <span className="size-1.5 rounded-full bg-white/70" />
            <span className="size-1.5 rounded-full bg-white/70" />
          </div>
          <div className="mt-3 h-2.5 w-3/5 rounded-full bg-white/60" />
          <div className="mt-2 h-2 w-2/5 rounded-full bg-white/40" />
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="h-8 rounded-lg bg-white/30" />
            <div className="h-8 rounded-lg bg-white/20" />
            <div className="h-8 rounded-lg bg-white/30" />
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary dark:text-primary-light">
          {item.industry}
        </p>
        <h3 className="mt-1.5 text-xl font-bold text-ink dark:text-white">{item.title}</h3>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {visibleServices.map((s) => (
            <span
              key={s}
              className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-ink-secondary dark:bg-white/5 dark:text-gray-300"
            >
              {s}
            </span>
          ))}
          {extra > 0 && (
            <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-ink-secondary dark:bg-white/5 dark:text-gray-300">
              +{extra} more
            </span>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2 text-xs text-ink-secondary">
          {item.technologies.map((t, i) => (
            <span key={t}>
              {t}
              {i < item.technologies.length - 1 && <span className="mx-1.5">·</span>}
            </span>
          ))}
        </div>

        <a
          href="#contact"
          className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary-dark dark:text-primary-light"
        >
          Start a project like this
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </motion.article>
  )
}
