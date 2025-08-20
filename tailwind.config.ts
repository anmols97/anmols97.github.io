import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        brand: {
          50: '#f4f7ff',
          100: '#e9efff',
          200: '#c9d7ff',
          300: '#a8c0ff',
          400: '#6f97ff',
          500: '#3770ff',
          600: '#1d5af0',
          700: '#1446c0',
          800: '#0c3090',
          900: '#071e60',
        },
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)',
        glow: 'radial-gradient(800px circle at 50% -20%, rgba(55,112,255,0.22), transparent 40%)',
        'glow-dark':
          'radial-gradient(800px circle at 50% -20%, rgba(55,112,255,0.35), transparent 40%)',
      },
    },
  },
  plugins: [],
} satisfies Config
