import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Sparkles, TrendingUp, ShieldCheck } from 'lucide-react'
import { Container } from './ui/Container'
import { Button } from './ui/Button'
import { heroStats } from '../data/site'

gsap.registerPlugin(ScrollTrigger)

const headline = 'AI Websites that grow your business.'

export function Hero() {
  const words = headline.split(' ')
  const mockupRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mockupRef.current) return
    const ctx = gsap.context(() => {
      gsap.to(mockupRef.current, {
        y: 60,
        ease: 'none',
        scrollTrigger: {
          trigger: mockupRef.current,
          start: 'top center',
          end: 'bottom top',
          scrub: true,
        },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="home" className="relative overflow-hidden pt-40 pb-24 lg:pt-52 lg:pb-32">
      {/* Animated gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white dark:bg-surface-dark" />
        <div className="bg-gradient-animated absolute left-1/2 top-[-10%] size-[60rem] -translate-x-1/2 rounded-full opacity-20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.04)_1px,transparent_0)] bg-[size:32px_32px] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)]" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass mx-auto mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-ink dark:text-white"
          >
            <Sparkles className="size-3.5 text-primary" />
            AI Websites. Built Faster. Built Better.
          </motion.div>

          <h1 className="text-balance text-5xl font-extrabold tracking-tight text-ink sm:text-6xl lg:text-7xl dark:text-white">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: 'easeOut' }}
                className={`inline-block ${word === 'business.' ? 'text-gradient' : ''}`}
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-secondary lg:text-xl"
          >
            Professional websites, Shopify stores and AI integrations delivered in days—not months.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button href="#contact" variant="primary" icon>
              Get a Free Consultation
            </Button>
            <Button href="#portfolio" variant="secondary">
              View Portfolio
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-8 sm:grid-cols-4"
          >
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-ink sm:text-3xl dark:text-white">{stat.value}</div>
                <div className="mt-1 text-sm text-ink-secondary">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating UI mockup cards */}
        <div ref={mockupRef} className="relative mx-auto mt-24 hidden max-w-5xl lg:block">
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="glass absolute -left-4 top-4 w-56 rounded-2xl p-4 shadow-xl"
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-ink dark:text-white">
              <TrendingUp className="size-4 text-success" />
              Conversions up 3.2x
            </div>
            <div className="mt-3 h-14 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="glass absolute right-0 top-16 w-60 rounded-2xl p-4 shadow-xl"
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-ink dark:text-white">
              <ShieldCheck className="size-4 text-primary" />
              SSL &amp; GDPR ready
            </div>
            <p className="mt-2 text-xs text-ink-secondary">Secure by default on every build.</p>
          </motion.div>

          <div className="glass mx-auto h-72 w-full max-w-3xl rounded-3xl p-6 shadow-2xl">
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-red-400" />
              <span className="size-2.5 rounded-full bg-yellow-400" />
              <span className="size-2.5 rounded-full bg-green-400" />
            </div>
            <div className="mt-6 space-y-3">
              <div className="h-4 w-2/3 rounded-full bg-gradient-to-r from-primary/40 to-accent/30" />
              <div className="h-3 w-1/2 rounded-full bg-gray-200 dark:bg-white/10" />
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="h-20 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10" />
                <div className="h-20 rounded-xl bg-gradient-to-br from-accent/20 to-primary/10" />
                <div className="h-20 rounded-xl bg-gradient-to-br from-primary/10 to-accent/20" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
