/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), './src'),
      '@/components': path.resolve(process.cwd(), './src/components'),
      '@/hooks': path.resolve(process.cwd(), './src/hooks'),
      '@/lib': path.resolve(process.cwd(), './src/lib'),
      '@/config': path.resolve(process.cwd(), './src/config'),
      '@/data': path.resolve(process.cwd(), './src/data'),
      '@/routes': path.resolve(process.cwd(), './src/routes'),
      '@/styles': path.resolve(process.cwd(), './src/styles'),
      '@/theme': path.resolve(process.cwd(), './src/theme'),
      '@/assets': path.resolve(process.cwd(), './src/assets'),
      '@/i18n': path.resolve(process.cwd(), './src/i18n'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test-setup.ts'],
  },
})
