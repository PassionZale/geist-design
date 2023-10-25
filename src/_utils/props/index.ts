import type { PropType, VNode, Component } from 'vue'

export type ValidatorFn<T> = (value: T) => boolean

export type GeistIcon = VNode | Component

/**
 * 设置 boolean 类型的 prop 参数
 *
 * @param { boolean } [defaultValue = false] 默认值
 * @returns { Object } 配置对象
 */
export const setBooleanProp = (
  defaultValue: boolean = false
): {
  readonly type: BooleanConstructor
  readonly default: boolean
} => {
  return {
    type: Boolean,
    default: defaultValue
  } as const
}

/**
 * 设置 number 类型 props 参数
 *
 * @param { number } [defaultValue = undefined] 默认值
 * @returns { Object } 配置对象
 */
export const setNumberProp = (
  defaultValue?: number
): {
  readonly type: NumberConstructor
  readonly default: number | undefined
} => {
  return { type: Number, default: defaultValue } as const
}

/**
 * 设置 string 类型的 prop 参数
 *
 * @param { string } [defaultValue = undefined] 默认值
 * @param { Function } [validator] 校验方法
 * @returns { Object } 配置对象
 */
export const setStringProp = <T extends string>(
  defaultValue?: T,
  validator?: (value: T) => boolean
): {
  readonly type: PropType<T>
  readonly default: T extends string ? T : undefined
  readonly validator?: ValidatorFn<T>
} => {
  const prop = {
    type: String as unknown as PropType<T>,
    default: defaultValue
  } as {
    type: PropType<T>
    default: T extends string ? T : undefined
    validator?: (value: T) => boolean
  }

  if (validator) {
    prop.validator = validator
  }

  return prop
}

/**
 * 设置 string & number 类型 props 参数
 *
 * @param { string | number } [defaultValue = undefined] 默认值
 * @returns { Object } 配置对象
 */
export const setStringNumberProp = <T extends string | number>(
  defaultValue?: T
): {
  readonly type: PropType<string | number>
  readonly default: T | undefined
} => {
  return {
    type: [String, Number] as unknown as PropType<string | number>,
    default: defaultValue
  } as const
}

/**
 * 设置 object 类型 props 参数
 *
 * @param { Object } [defaultValue = null] 默认值
 * @returns { Object } 配置对象
 */
export const setObjectProp = <T extends object>(
  defaultValue = null
): {
  readonly type: PropType<T>
  readonly default: () => T | null
} => {
  return {
    type: Object as PropType<T>,
    default: (): T | null => defaultValue
  } as const
}

/**
 * 设置 function 类型 props 参数
 *
 * @param { Function } [defaultValue = null] 默认值
 * @returns { Object } 配置对象
 */
export const setFunctionProp = <T extends Function>(
  defaultValue = null
): {
  readonly type: PropType<T>
  readonly default: T | null
} => {
  return {
    type: Function as PropType<T>,
    default: defaultValue
  } as const
}

/**
 * 设置 array 类型 props 参数
 *
 * @param { Array } [defaultValue = null] 默认值
 * @returns { Object } 配置对象
 */
export const setArrayProp = <T>(
  defaultValue = null
): {
  readonly type: PropType<T>
  readonly default: () => T | null
} => {
  return {
    type: Array as unknown as PropType<T>,
    default: (): T | null => defaultValue
  } as const
}
