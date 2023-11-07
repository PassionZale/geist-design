/**
 * 判断当前环境是否为 mac platform
 *
 * @returns {boolean} 是否为 mac platform
 */
export const isMac = (): boolean => {
  if (typeof window === 'undefined' || !window.navigator) return false
  const agent = navigator.userAgent.toLowerCase()
  return /macintosh|mac os x/i.test(agent)
}

/**
 * 校验 props 是否在枚举值中
 *
 * @param { (string | number)[] } params
 * @returns { boolean } 枚举值是否在给定的 params 中
 *
 * @example { validator: enums(['small', 'medium', 'big', 'huge']) }
 */
export const enums =
  (params: (string | number)[]) =>
  (val: string | number): boolean => {
    if (!Array.isArray(params)) return false
    return !!params.find(item => item === val)
  }
