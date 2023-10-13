const { toString } = Object.prototype

export const is = (value: unknown, type: string): boolean => {
  return toString.call(value) === `[object ${type}]`
}
