import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { prefersReducedMotion } from '@/lib/utils'

interface PageTransitionProps {
  children: ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const reduced = prefersReducedMotion()

  return (
    <motion.div
      initial={reduced ? {} : { opacity: 0, y: 10, filter: 'blur(3px)' }}
      animate={reduced ? {} : { opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={reduced ? {} : { opacity: 0, y: -8, filter: 'blur(3px)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
