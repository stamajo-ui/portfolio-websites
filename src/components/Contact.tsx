import { useState, type FormEvent } from 'react'
import { motion } from 'motion/react'
import { CheckCircle2, Mail, MessageSquare, Clock } from 'lucide-react'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'
import { Button } from './ui/Button'

const budgetOptions = ['Under $2,000', '$2,000 – $5,000', '$5,000 – $15,000', '$15,000+']
const timelineOptions = ['ASAP', 'Within 2 weeks', 'Within a month', 'Just exploring']

const inputClasses =
  'w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-gray-400 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          subtitle="Tell us about your project — we'll reply within one business day."
        />

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary-light/10 dark:text-primary-light">
                  <Mail className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink dark:text-white">Email us</p>
                  <p className="text-sm text-ink-secondary">hello@swebservices.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary-light/10 dark:text-primary-light">
                  <Clock className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink dark:text-white">Response time</p>
                  <p className="text-sm text-ink-secondary">Within one business day</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary-light/10 dark:text-primary-light">
                  <MessageSquare className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink dark:text-white">Prefer to talk?</p>
                  <p className="text-sm text-ink-secondary">Book a free strategy call — no pressure, no pitch deck.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full flex-col items-center justify-center rounded-3xl border border-gray-100 bg-white p-12 text-center shadow-sm dark:border-white/10 dark:bg-surface-dark-2/40"
              >
                <CheckCircle2 className="size-12 text-success" />
                <h3 className="mt-4 text-xl font-bold text-ink dark:text-white">Message sent</h3>
                <p className="mt-2 text-sm text-ink-secondary">
                  Thanks for reaching out. We'll be in touch within one business day.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 rounded-3xl border border-gray-100 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-surface-dark-2/40"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-ink dark:text-white">
                      Name
                    </label>
                    <input id="name" name="name" required className={inputClasses} placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-ink dark:text-white">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className={inputClasses}
                      placeholder="jane@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-1.5 block text-xs font-semibold text-ink dark:text-white">
                      Company
                    </label>
                    <input id="company" name="company" className={inputClasses} placeholder="Your business name" />
                  </div>
                  <div>
                    <label htmlFor="website" className="mb-1.5 block text-xs font-semibold text-ink dark:text-white">
                      Current website
                    </label>
                    <input id="website" name="website" className={inputClasses} placeholder="https://" />
                  </div>
                  <div>
                    <label htmlFor="budget" className="mb-1.5 block text-xs font-semibold text-ink dark:text-white">
                      Budget
                    </label>
                    <select id="budget" name="budget" className={inputClasses} defaultValue="">
                      <option value="" disabled>
                        Select a range
                      </option>
                      {budgetOptions.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="mb-1.5 block text-xs font-semibold text-ink dark:text-white">
                      Timeline
                    </label>
                    <select id="timeline" name="timeline" className={inputClasses} defaultValue="">
                      <option value="" disabled>
                        Select a timeline
                      </option>
                      {timelineOptions.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="mb-1.5 block text-xs font-semibold text-ink dark:text-white">
                    Project description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={4}
                    className={inputClasses}
                    placeholder="Tell us a bit about your business and what you're looking for..."
                  />
                </div>

                <Button type="submit" variant="primary" icon className="w-full">
                  Send message
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
