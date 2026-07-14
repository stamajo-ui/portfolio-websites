import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

type Variant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: Variant
  icon?: boolean
  className?: string
  type?: 'button' | 'submit'
  onClick?: () => void
}

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-white shadow-[0_8px_30px_-8px_rgba(79,70,229,0.6)] hover:shadow-[0_12px_40px_-8px_rgba(79,70,229,0.75)]',
  secondary:
    'bg-white text-ink border border-gray-200 hover:border-gray-300 dark:bg-white/5 dark:text-white dark:border-white/10 dark:hover:border-white/20',
  ghost: 'text-ink hover:bg-gray-100 dark:text-white dark:hover:bg-white/10',
}

export function Button({ children, href, variant = 'primary', icon, className = '', type = 'button', onClick }: ButtonProps) {
  const classes = `group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${variants[variant]} ${className}`

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </>
  )

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
  }

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps}>
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button type={type} onClick={onClick} className={classes} {...motionProps}>
      {content}
    </motion.button>
  )
}
