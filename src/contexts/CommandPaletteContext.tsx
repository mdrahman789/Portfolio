import { createContext, useContext, ReactNode } from 'react'

type CommandPaletteContextType = {
  open: boolean
  setOpen: (open: boolean) => void
}

const CommandPaletteContext = createContext<CommandPaletteContextType | null>(null)

export function CommandPaletteProvider({
  children,
  value,
}: {
  children: ReactNode
  value: CommandPaletteContextType
}) {
  return (
    <CommandPaletteContext.Provider value={value}>
      {children}
    </CommandPaletteContext.Provider>
  )
}

export function useCommandPalette() {
  const ctx = useContext(CommandPaletteContext)
  return ctx
}
