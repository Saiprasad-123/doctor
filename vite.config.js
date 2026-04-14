import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    transformer: 'postcss', // Force postcss to avoid Lightning CSS Vite 8 bug
  },
  build: {
    cssMinify: 'esbuild', // Force esbuild minify to avoid Lightning CSS plugin crashes
  }
})
