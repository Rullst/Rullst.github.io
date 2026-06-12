import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/Rullst/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        privacy: resolve(__dirname, 'privacy.html')
      }
    }
  }
})
