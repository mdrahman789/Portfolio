import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <motion.div
      className={cn(
        'rounded-card border border-[var(--color-border)] bg-white p-6 md:p-8 shadow-soft transition-all duration-200 dark:bg-[var(--color-bg-elevated)] dark:shadow-dark-soft',
        hover &&
          'hover:shadow-soft-lg hover:-translate-y-0.5 hover:border-slate-200 dark:hover:border-slate-600/50 dark:hover:shadow-dark-soft-lg',
        className
      )}
      whileHover={hover ? { y: -2 } : {}}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
