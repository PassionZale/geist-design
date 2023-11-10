const THEMES = ['dark', 'light'] as const

const setTheme = (theme: (typeof THEMES)[number]): void => {
  if (typeof document === 'undefined') return

  const html = document.querySelector('html')

  html?.classList.remove(...THEMES)
  html?.classList.add(theme)
}

/** 切换为默认色系 */
export const enableLight = (): void => {
  setTheme('light')
}

/** 切换为暗黑色系 */
export const enableDark = (): void => {
  setTheme('dark')
}
