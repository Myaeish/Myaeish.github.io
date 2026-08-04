import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

// This is the modern 2026 replacement for __dirname
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // This allows you to use "@" instead of "../../src" in your imports
      "@": fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})