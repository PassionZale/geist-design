export const getRealShape = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect()

  const { width, height } = window.getComputedStyle(el)

  const getCSSStyleVal = (str: string, parentNum: number) => {
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

export const getRect = (el: HTMLElement) => {
  return el.getBoundingClientRect()
}
