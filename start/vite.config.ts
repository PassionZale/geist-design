import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  root: './start',
  plugins: [vue()],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      'geist-design': resolve(__dirname, '../src/index.ts'),
      'geist-design-styles': resolve(__dirname, '../src/_styles/index.scss'),
    }
  }
})
