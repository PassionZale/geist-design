/**
 * 复制文本到剪切板
 * 
 * @param {string} text 
 * @returns 
 * 
 * @example copy('geist-design')
 */
export const copy = (text: string): void => {
  if (!text) return

  const clipboardEl = document.querySelector('#geist-clipboard')

  const copyText = (el: Element): void => {
    const selection = window.getSelection()
    const range = document.createRange()
    range.selectNode(el)

    selection?.removeAllRanges()

    selection?.addRange(range)

    try {
      document.execCommand('Copy')
    } catch (error) {
      console.error('copy failed!')
    }
    selection?.removeAllRanges()

    el.textContent = ''
  }

  if (clipboardEl) {
    clipboardEl.textContent = text
    copyText(clipboardEl)
    return
  }

  const el = document.createElement('div')

  el.id = 'geist-clipboard'
  el.style.whiteSpace = 'pre'
  el.textContent = text
  document.body.appendChild(el)
  copyText(el)
}
