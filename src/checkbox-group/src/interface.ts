import type { CheckboxGroupProps, CheckboxGroupModelValue } from './props'

export type { CheckboxGroupProps } from './props'

export type CheckboxGroupProvide = CheckboxGroupProps & {
  setChange: (changedValue: CheckboxGroupModelValue) => void
}
