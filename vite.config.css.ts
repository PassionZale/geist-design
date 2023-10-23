import { defineConfig } from 'vite'
import postcssPresetEnv from 'postcss-preset-env'
import autoprefixer from 'autoprefixer'
import { resolve } from 'node:path'

export default defineConfig({
  css: {
    postcss: {
      plugins: [postcssPresetEnv(), autoprefixer()]
    }
  },
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: false,
    rollupOptions: {
      input: resolve(__dirname, 'src/_styles/index.scss'),
      output: {
        assetFileNames: '[name].[ext]'
      }
    }
  }
})
