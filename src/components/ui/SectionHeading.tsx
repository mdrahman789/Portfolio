import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: ReactNode
  className?: string
}

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <header className={cn('mb-12 md:mb-14', className)}>
      {eyebrow && (
        <p className="font-sans text-caption font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-display-lg md:text-display-xl lg:text-display-2xl font-normal text-slate-900 dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-body-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </header>
  )
}
