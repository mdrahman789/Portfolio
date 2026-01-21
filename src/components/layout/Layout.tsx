import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Header } from './Header'
import { Footer } from './Footer'
import { ScrollProgress } from './ScrollProgress'
import { CommandPalette } from './CommandPalette'
import { CommandPaletteProvider } from '@/contexts/CommandPaletteContext'
import { initTheme } from '@/lib/theme'

export function Layout() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false)

  useEffect(() => {
    initTheme()
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setCommandPaletteOpen((open) => !open)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <HelmetProvider>
      <CommandPaletteProvider
        value={{ open: commandPaletteOpen, setOpen: setCommandPaletteOpen }}
      >
        <div className="relative z-10 min-h-screen bg-[var(--color-bg)] text-slate-800 dark:text-slate-100 transition-colors">
          <ScrollProgress />
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
          <CommandPalette open={commandPaletteOpen} onOpenChange={setCommandPaletteOpen} />
        </div>
      </CommandPaletteProvider>
    </HelmetProvider>
  )
}
