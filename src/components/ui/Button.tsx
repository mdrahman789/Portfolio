import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { MagneticButton } from '@/components/motion/MagneticButton'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  disabled?: boolean
  as?: 'button' | 'a' | 'link'
  href?: string
  to?: string
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f6f2ea] disabled:opacity-50 disabled:pointer-events-none dark:focus-visible:ring-slate-100 dark:focus-visible:ring-offset-slate-950'

const variants = {
  primary:
    'bg-slate-900 text-white border border-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:border-slate-100 dark:hover:bg-slate-200',
  secondary:
    'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 dark:bg-slate-950 dark:text-slate-100 dark:border-slate-800 dark:hover:bg-slate-900',
  ghost:
    'bg-transparent text-slate-900 border border-transparent hover:bg-slate-50 dark:text-slate-100 dark:hover:bg-slate-900',
}

export function Button({
  children,
  onClick,
  variant = 'primary',
  className,
  disabled = false,
  as = 'button',
  href,
  to,
}: ButtonProps) {
  const classes = cn(base, variants[variant], className)

  if (as === 'link' && to) {
    return <Link to={to} className={classes}>{children}</Link>
  }

  if (as === 'a' && href) {
    return <a href={href} className={classes}>{children}</a>
  }

  return (
    <MagneticButton onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </MagneticButton>
  )
}
