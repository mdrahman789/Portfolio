export type Theme = 'light' | 'dark'

const THEME_KEY = 'theme'

export function getTheme(): Theme {
  if (typeof window === 'undefined') return 'light'

  const saved = localStorage.getItem(THEME_KEY) as Theme | null
  if (saved) return saved

  return 'light'
}

export function setTheme(theme: Theme) {
  if (typeof window === 'undefined') return
  localStorage.setItem(THEME_KEY, theme)
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

export function initTheme() {
  const theme = getTheme()
  setTheme(theme)
}
