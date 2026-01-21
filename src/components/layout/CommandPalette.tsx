import { Command } from 'cmdk'
import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { siteData } from '@/content/siteData'
import { FileText, User, Briefcase, FolderOpen, Mail, Home } from 'lucide-react'

interface CommandPaletteProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (!open) {
      setSearch('')
    }
  }, [open])

  const pages = [
    { id: 'home', label: 'Home', path: '/', icon: Home },
    { id: 'about', label: 'About', path: '/about', icon: User },
    { id: 'experience', label: 'Experience', path: '/experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', path: '/projects', icon: FolderOpen },
    { id: 'contact', label: 'Contact', path: '/contact', icon: Mail },
  ]

  const homeSections = [
    { id: 'projects-section', label: 'Projects Section', path: '/#projects' },
    { id: 'experience-section', label: 'Experience Section', path: '/#experience' },
    { id: 'now-section', label: 'Now Section', path: '/#now' },
    { id: 'contact-section', label: 'Contact Section', path: '/#contact' },
  ]

  const projectPages = siteData.projects.map((project) => ({
    id: project.slug,
    label: project.title,
    path: `/projects/${project.slug}`,
    icon: FileText,
  }))

  const handleSelect = (path: string) => {
    navigate(path)
    onOpenChange(false)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] px-4">
      <div className="fixed inset-0 bg-slate-900/40 dark:bg-black/50" onClick={() => onOpenChange(false)} />
      <Command className="relative w-full max-w-2xl rounded-2xl border border-[var(--color-border)] bg-white dark:bg-[var(--color-bg-elevated)] shadow-soft-lg dark:shadow-dark-soft-lg overflow-hidden">
        <div className="flex items-center border-b border-[var(--color-border)] px-4">
          <Command.Input
            value={search}
            onValueChange={setSearch}
            placeholder="Type a command or search..."
            className="flex h-14 w-full bg-transparent py-3 text-body outline-none placeholder:text-slate-500 dark:placeholder:text-slate-400 font-sans"
            autoFocus
          />
        </div>
        <Command.List className="max-h-96 overflow-y-auto p-2">
          <Command.Empty className="py-8 text-center text-body-sm text-slate-500 dark:text-slate-400">
            No results found.
          </Command.Empty>

          <Command.Group heading="Pages" className="font-sans text-caption font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 px-2 py-2">
            {pages.map((page) => {
              const Icon = page.icon
              return (
                <Command.Item
                  key={page.id}
                  value={page.label}
                  onSelect={() => handleSelect(page.path)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800/80 aria-selected:bg-slate-100 dark:aria-selected:bg-slate-800/80 text-slate-900 dark:text-white transition-colors"
                >
                  <Icon className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  <span>{page.label}</span>
                </Command.Item>
              )
            })}
          </Command.Group>

          {location.pathname === '/' && (
            <Command.Group heading="Home Sections" className="font-sans text-caption font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 px-2 py-2">
              {homeSections.map((section) => (
                <Command.Item
                  key={section.id}
                  value={section.label}
                  onSelect={() => handleSelect(section.path)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800/80 aria-selected:bg-slate-100 dark:aria-selected:bg-slate-800/80 text-slate-900 dark:text-white transition-colors"
                >
                  <FileText className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  <span>{section.label}</span>
                </Command.Item>
              ))}
            </Command.Group>
          )}

          <Command.Group heading="Project Details" className="font-sans text-caption font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 px-2 py-2">
            {projectPages.map((project) => {
              const Icon = project.icon
              return (
                <Command.Item
                  key={project.id}
                  value={project.label}
                  onSelect={() => handleSelect(project.path)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800/80 aria-selected:bg-slate-100 dark:aria-selected:bg-slate-800/80 text-slate-900 dark:text-white transition-colors"
                >
                  <Icon className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  <span>{project.label}</span>
                </Command.Item>
              )
            })}
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  )
}
