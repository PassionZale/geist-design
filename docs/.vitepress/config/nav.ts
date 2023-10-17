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
    link: '/components/avatar'
  },
  {
    text: `v${version}`,
    link: `https://www.npmjs.com/package/${name}?activeTab=versions`
  }
]
