import { useMemo } from 'react'
import { useTheme } from './useTheme'

type StylesCreator<T = any> = (theme: ThemeObject, props?: T) => Record<string, React.CSSProperties>
type StylesObject = Record<string, React.CSSProperties>

interface ThemeObject {
  palette: {
    mode: 'light' | 'dark'
    primary: {
      main: string
      light: string 
      dark: string
    }
    background: {
      default: string
      paper: string
    }
    text: {
      primary: string
      secondary: string
    }
  }
  spacing: (factor: number) => string
  breakpoints: {
    up: (breakpoint: string) => string
  }
}

const lightTheme: ThemeObject = {
  palette: {
    mode: 'light',
    primary: {
      main: '#3770ff',
      light: '#6f97ff', 
      dark: '#1d5af0',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
    text: {
      primary: '#1f2937',
      secondary: '#64748b',
    },
  },
  spacing: (factor: number) => `${factor * 8}px`,
  breakpoints: {
    up: (breakpoint: string) => `@media (min-width: ${breakpoint === 'md' ? '768px' : '640px'})`,
  },
}

const darkTheme: ThemeObject = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#3770ff',
      light: '#6f97ff',
      dark: '#1d5af0', 
    },
    background: {
      default: '#0b0f1a',
      paper: 'rgba(255, 255, 255, 0.05)',
    },
    text: {
      primary: '#ffffff',
      secondary: '#64748b',
    },
  },
  spacing: (factor: number) => `${factor * 8}px`,
  breakpoints: {
    up: (breakpoint: string) => `@media (min-width: ${breakpoint === 'md' ? '768px' : '640px'})`,
  },
}

function createClassName(styles: React.CSSProperties): string {
  const styleString = Object.entries(styles)
    .map(([key, value]) => {
      if (typeof value === 'object') return '' // Skip nested objects for now
      const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
      return `${cssKey}: ${value}`
    })
    .filter(Boolean)
    .join('; ')
  
  // Create a simple hash for the className
  const hash = Math.abs(
    styleString.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0)
      return a & a
    }, 0)
  ).toString(36)
  
  return `makeStyles-${hash}`
}

export function makeStyles<T = any>(stylesCreator: StylesCreator<T> | StylesObject) {
  return function useStyles(props?: T) {
    const { dark } = useTheme()
    const theme = dark ? darkTheme : lightTheme

    return useMemo(() => {
      const styles = typeof stylesCreator === 'function' 
        ? stylesCreator(theme, props) 
        : stylesCreator

      // Create CSS classes and inject them into the document
      const classes: Record<string, string> = {}
      
      Object.entries(styles).forEach(([key, styleObj]) => {
        const className = createClassName(styleObj)
        classes[key] = className
        
        // Check if style already exists
        if (!document.querySelector(`style[data-class="${className}"]`)) {
          const styleElement = document.createElement('style')
          styleElement.setAttribute('data-class', className)
          
          let cssText = `.${className} { `
          Object.entries(styleObj).forEach(([prop, value]) => {
            const cssProp = prop.replace(/([A-Z])/g, '-$1').toLowerCase()
            cssText += `${cssProp}: ${value}; `
          })
          cssText += '}'
          
          styleElement.textContent = cssText
          document.head.appendChild(styleElement)
        }
      })
      
      return classes
    }, [theme, props])
  }
}