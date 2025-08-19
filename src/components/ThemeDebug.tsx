import { useTheme } from '../hooks/useTheme'

export function ThemeDebug() {
  const { dark } = useTheme()
  
  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      padding: '8px',
      backgroundColor: dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
      color: dark ? 'white' : 'black',
      fontSize: '12px',
      zIndex: 9999,
      borderRadius: '4px'
    }}>
      Theme: {dark ? 'DARK' : 'LIGHT'}
    </div>
  )
}