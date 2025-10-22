import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  // DEBUG: enable sourcemaps and disable minify to make production stack traces readable.
  // Remove or revert these options after debugging to restore optimized builds.
  build: {
    sourcemap: true,
    minify: false,
  },
})
