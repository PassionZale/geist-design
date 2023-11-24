import { version, name } from '../../../package.json'

export const nav = [
  {
    text: '指南',
    activeMatch: '^/guide/',
    link: '/guide/introduction'
  },
  {
    text: '组件',
    activeMatch: '^/components/',
    link: '/components/button'
  },
  {
    text: '教程',
    link: 'https://www.lovchun.com/tags/vuejs'
  },
  {
    text: `v${version}`,
    link: `https://www.npmjs.com/package/${name}?activeTab=versions`
  }
]
