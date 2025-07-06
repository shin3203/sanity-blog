import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// MINIMAL AI THEME BUILD - 2025-01-07
console.log('✨ Building with MINIMAL AI theme')
console.log('📦 Package version:', process.env.npm_package_version)
console.log('🏗️  Vercel:', process.env.VERCEL ? 'YES' : 'NO')

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    open: true
  },
  build: {
    cssMinify: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      }
    }
  }
})
