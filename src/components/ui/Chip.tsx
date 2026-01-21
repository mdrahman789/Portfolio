import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ChipProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'selected'
  as?: 'span' | 'button'
  onClick?: () => void
}

export function Chip({
  children,
  className,
  variant = 'default',
  as: Component = 'span',
  onClick,
}: ChipProps) {
  const base =
    'inline-flex items-center rounded-full border text-body-sm font-medium transition-colors duration-200 px-3.5 py-1.5'
  const variants = {
    default:
      'border-slate-200 bg-slate-100/90 text-slate-700 dark:border-slate-600/60 dark:bg-slate-800/50 dark:text-slate-300',
    selected:
      'border-slate-700 bg-slate-800 text-white dark:border-slate-300 dark:bg-slate-200 dark:text-slate-800',
  }
  const interactive =
    Component === 'button'
      ? 'cursor-pointer hover:border-slate-300 hover:bg-slate-200/80 dark:hover:border-slate-500 dark:hover:bg-slate-700/60'
      : ''

  return (
    <Component className={cn(base, variants[variant], interactive, className)} onClick={onClick}>
      {children}
    </Component>
  )
}
