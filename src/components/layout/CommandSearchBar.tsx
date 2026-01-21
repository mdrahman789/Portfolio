import { useEffect, useState } from 'react'
import { Search } from 'lucide-react'
import { useCommandPalette } from '@/contexts/CommandPaletteContext'

interface CommandSearchBarProps {
  variant?: 'hero' | 'compact'
  className?: string
}

export function CommandSearchBar({ variant = 'hero', className = '' }: CommandSearchBarProps) {
  const { setOpen } = useCommandPalette() ?? { setOpen: () => {} }
  const [shortcut, setShortcut] = useState('⌘K')

  useEffect(() => {
    const isMac =
      typeof navigator !== 'undefined' &&
      /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
    setShortcut(isMac ? '⌘K' : 'Ctrl+K')
  }, [])

  if (variant === 'compact') {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-body-sm text-slate-600 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-400 hover:border-slate-300 hover:bg-slate-50 dark:hover:border-slate-600 dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f6f2ea] dark:focus-visible:ring-slate-100 dark:focus-visible:ring-offset-slate-950 ${className}`}
        aria-label="Open command palette for quick navigation"
      >
        <Search className="w-4 h-4" />
        <span>Search...</span>
        <kbd className="ml-1 hidden sm:inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded bg-slate-100 px-1.5 font-sans text-caption text-slate-500 dark:bg-slate-700 dark:text-slate-400">
          {shortcut}
        </kbd>
      </button>
    )
  }

  return (
    <div className={className}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex w-full items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3.5 text-left text-body text-slate-600 dark:border-slate-700 dark:bg-slate-800/40 dark:text-slate-400 hover:border-slate-300 hover:bg-slate-50 dark:hover:border-slate-600 dark:hover:bg-slate-800/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f6f2ea] dark:focus-visible:ring-slate-100 dark:focus-visible:ring-offset-slate-950"
        aria-label="Open command palette for quick navigation"
      >
        <Search className="w-5 h-5 shrink-0 text-slate-500 dark:text-slate-400" />
        <span className="flex-1">Search or jump to a page...</span>
        <kbd className="hidden sm:inline-flex h-6 min-w-[2rem] items-center justify-center rounded-md border border-slate-200 bg-slate-50 px-2 font-sans text-caption font-medium text-slate-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-400">
          {shortcut}
        </kbd>
      </button>
      <p className="mt-2 text-caption text-slate-500 dark:text-slate-400">
        Pages · Home sections · Projects
      </p>
    </div>
  )
}
