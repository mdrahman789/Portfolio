import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import { SectionHeading } from './SectionHeading'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  eyebrow?: string
  title?: string
  description?: string
}

export function Section({ children, className, id, eyebrow, title, description }: SectionProps) {
  return (
    <section id={id} className={cn('py-20 md:py-28', className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-container">
        {title && (
          <ScrollReveal>
            <SectionHeading eyebrow={eyebrow} title={title} description={description} />
          </ScrollReveal>
        )}
        {children}
      </div>
    </section>
  )
}
