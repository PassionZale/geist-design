import { resolve } from 'path'
import type { UserConfig } from 'vite'

export default (): UserConfig => {
  return {
    optimizeDeps: {
      exclude: ['vitepress']
    },
    root: './docs',
    server: {
      port: 9999
    },
    resolve: {
      alias: {
        'geist-design': resolve(__dirname, '../src/index.ts'),
        'geist-design-styles': resolve(__dirname, '../src/_styles/index.scss')
      }
    }
  }
}
