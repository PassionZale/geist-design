import type { App, Component } from 'vue'
import DefaultTheme from 'vitepress/theme'
import GeistDesign from 'geist-design'

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
  extends: DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.use(GeistDesign)

    components.forEach(component => {
      if (component.name) {
        app.component(component.name, component)
      }
    })
  }
}
