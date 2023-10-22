import { h } from 'vue'
import type { App, Component } from 'vue'
import DefaultTheme from 'vitepress/theme'
import GeistDesign from 'geist-design'
import GeistLogo from './components/geist-logo.vue'

import 'geist-design-styles/index.scss'
import './styles/reset.scss'
import './styles/prism.scss'

type Module = { [key: string]: any }

const modules = import.meta.glob(['./examples/**/*.vue', './components/**/*.vue'], {
  eager: true
})

const components: Component[] = []

for (const path in modules) {
  components.push((modules[path] as Module).default)
}

export default {
  ...DefaultTheme,

  Layout() {
    return h(DefaultTheme.Layout, null, {
      /**
       * 插槽参考
       *
       * @see layout-slots https://vitepress.dev/guide/extending-default-theme#layout-slots
       */
      'nav-bar-title-before': () =>
        h(GeistLogo, { width: 24, height: 24, style: { marginRight: 8 } })
    })
  },

  enhanceApp({ app }: { app: App }) {
    app.use(GeistDesign)

    components.forEach(component => {
      if (component.name) {
        app.component(component.name, component)
      }
    })
  }
}
