import { resolve } from 'path'
import type { UserConfig } from 'vite'

export default (): UserConfig => {
  return {
    root: './docs',

    optimizeDeps: {
      exclude: ['vitepress']
    },
    server: {
      port: 9999
    },
    resolve: {
      alias: {
        'geist-design': resolve(__dirname, '../src/index.ts'),
        'geist-design-styles': resolve(__dirname, '../src/_styles')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "geist-design-styles/foundation/methods.scss";'
        }
      }
    }
  }
}
