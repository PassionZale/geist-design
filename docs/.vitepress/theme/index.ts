import DefaultTheme from 'vitepress/theme'
import GeistDesign from '../../../src/index'
import 'geist-design-styles'
import './styles/reset.scss'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(GeistDesign)
  }
}
