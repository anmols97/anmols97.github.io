import { ReactNode, useEffect } from 'react'
import { useTheme } from '../hooks/useTheme'

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { dark } = useTheme()

  useEffect(() => {
    // Ensure the theme class is applied to the document
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return <>{children}</>
}