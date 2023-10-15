import type { PropType, VNode, Component } from 'vue'

export type ValidatorFn<T> = (value: T) => boolean

export type GeistIcon = VNode | Component

export const setBooleanProp = (
  defaultValue = false
): {
  readonly type: BooleanConstructor
  readonly default: boolean
} => {
  return {
    type: Boolean,
    default: defaultValue
  } as const
}

export const setStringProp = <T extends string>(
  defaultValue?: T,
  validator?: ValidatorFn<T>
): {
  readonly type: PropType<T>
  readonly default: T extends string ? T : undefined
  readonly validator?: ValidatorFn<T>
} => {
  const props = {
    type: String as unknown as PropType<T>,
    default: defaultValue
  } as {
    type: PropType<T>
    default: T extends string ? T : undefined
    validator?: ValidatorFn<T>
  }

  if (validator) {
    props.validator = validator
  }

  return props
}

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
