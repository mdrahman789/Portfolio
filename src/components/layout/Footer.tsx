import { Github, Linkedin } from 'lucide-react'
import { siteData } from '@/content/siteData'

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-white/70 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-body-sm text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} {siteData.profile.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <a
              href={siteData.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700/60 bg-slate-50/80 hover:bg-slate-100 dark:bg-slate-800/60 dark:hover:bg-slate-800 transition-colors focus-ring"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-slate-600 dark:text-slate-400" />
            </a>
            <a
              href={siteData.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700/60 bg-slate-50/80 hover:bg-slate-100 dark:bg-slate-800/60 dark:hover:bg-slate-800 transition-colors focus-ring"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-slate-600 dark:text-slate-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
