import * as components from './components'
import { version } from '../package.json'

import type { App } from 'vue'

const install = (app: App): App => {
  Object.entries(components).forEach(([key, value]) => {
    app.component(key, value)
  })

  return app
}

export default {
  install,
  version
}
