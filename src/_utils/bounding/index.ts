import type { CSSProperties } from 'vue'

/**
 * 获取元素的宽度和高度
 * 
 * @param { Element } el 
 * @returns 元素的宽高
 * 
 * @example const { width, height } = getRealShape(document.querySelector('#geist-design'))
 */
export const getRealShape = (el: Element): CSSProperties => {
  const rect = el.getBoundingClientRect()

  const { width, height } = window.getComputedStyle(el)

  const getCSSStyleVal = (str: string, parentNum: number): number => {
    if (!str) return 0

    const strVal = str.includes('px')
      ? +str.split('px')[0]
      : str.includes('%')
      ? +str.split('%')[0] * parentNum * 0.01
      : str

    return Number.isNaN(+strVal) ? 0 : +strVal
  }

  return {
    width: getCSSStyleVal(`${width}`, rect.width),
    height: getCSSStyleVal(`${height}`, rect.height)
  }
}

/**
 * 获取元素的 DOMRect
 * 
 * @param { Element } el 
 * @returns {DOMRect} object
 * 
 * @example const rect = getRect(document.querySelector('#geist-design'))
 */
export const getRect = (el: Element): DOMRect => {
  return el.getBoundingClientRect()
}
