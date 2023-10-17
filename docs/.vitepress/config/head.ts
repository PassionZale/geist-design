import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
  /** 标签栏略缩图 */
  [
    'link',
    {
      rel: 'icon',
      href: '/public/favicon.svg'
    }
  ],
  /** viewport */
  [
    'meta',
    {
      name: 'viewport',
      content: 'initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover'
    }
  ],
  /** Keywords */
  [
    'meta',
    {
      name: 'Keywords',
      content: '组件库, vue3, vite, typescript, sass, vercel design, geist design'
    }
  ],
  /** author */
  [
    'meta',
    {
      name: 'author',
      content: 'Lei Zhang'
    }
  ],
  /** og title */
  [
    'meta',
    {
      property: 'og:title',
      content: 'geist design 基于 vercel design 的 vue3 组件库'
    }
  ],
  /** og type */
  [
    'meta',
    {
      property: 'og:type',
      content: 'website'
    }
  ],
  /** og image */
  [
    'meta',
    {
      property: 'og:image',
      content: '/public/favicon.svg'
    }
  ],
  /** og description */
  [
    'meta',
    {
      property: 'og:description',
      content: 'geist design 基于 vercel design 的 vue3 组件库'
    }
  ],
    /** OG site_name */
    [
      'meta',
      {
        property: 'og:site_name',
        content: 'Geist Design'
      }
    ]
] as HeadConfig[]
