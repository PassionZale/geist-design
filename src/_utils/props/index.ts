import type { PropType } from 'vue'

type ValidatorFn<T> = (value: T) => boolean

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
) => {
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