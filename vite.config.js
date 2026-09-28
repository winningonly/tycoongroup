import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        plus: resolve(__dirname, 'tycoon-plus.html'),
        oil: resolve(__dirname, 'tycoon-oil.html'),
        motors: resolve(__dirname, 'tycoon-motors.html'),
        homes: resolve(__dirname, 'tycoon-homes.html'),
        joibslink: resolve(__dirname, 'joibslink.html'),
      },
    },
  },
})