import { Mail } from 'lucide-react'
import { Container } from './ui/Container'
import { navLinks } from '../data/site'
import { LinkedinIcon, GithubIcon } from './ui/SocialIcons'

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms', href: '#' },
  { label: 'Cookie Policy', href: '#' },
]

export function Footer() {
  return (
    <footer className="border-t border-gray-100 py-12 dark:border-white/10">
      <Container>
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="text-center lg:text-left">
            <a href="#home" className="text-lg font-bold tracking-tight text-ink dark:text-white">
              SWEB<span className="text-primary">services</span>
            </a>
            <p className="mt-2 max-w-xs text-sm text-ink-secondary">
              AI Websites. Built Faster. Built Better.
            </p>
            <div className="mt-4 flex justify-center gap-3 lg:justify-start">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex size-9 items-center justify-center rounded-full border border-gray-200 text-ink-secondary transition-colors hover:border-primary hover:text-primary dark:border-white/10 dark:hover:border-primary-light dark:hover:text-primary-light"
              >
                <LinkedinIcon className="size-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex size-9 items-center justify-center rounded-full border border-gray-200 text-ink-secondary transition-colors hover:border-primary hover:text-primary dark:border-white/10 dark:hover:border-primary-light dark:hover:text-primary-light"
              >
                <GithubIcon className="size-4" />
              </a>
              <a
                href="mailto:hello@swebservices.com"
                aria-label="Email"
                className="flex size-9 items-center justify-center rounded-full border border-gray-200 text-ink-secondary transition-colors hover:border-primary hover:text-primary dark:border-white/10 dark:hover:border-primary-light dark:hover:text-primary-light"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 lg:justify-start">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-ink-secondary transition-colors hover:text-primary dark:hover:text-primary-light"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-6 text-xs text-ink-secondary lg:flex-row dark:border-white/10">
          <p>© {new Date().getFullYear()} SWEBservices. All rights reserved.</p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-primary dark:hover:text-primary-light">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
