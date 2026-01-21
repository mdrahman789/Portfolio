import { motion, useScroll, useSpring } from 'framer-motion'
import { prefersReducedMotion } from '@/lib/utils'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const reduced = prefersReducedMotion()

  if (reduced) return null

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-slate-700 dark:bg-slate-400 origin-left z-50"
      style={{ scaleX }}
    />
  )
}
