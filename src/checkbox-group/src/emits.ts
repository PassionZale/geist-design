import type { CheckboxGroupModelValue } from './props'

export interface CheckboxGroupEmits {
  /**
   * v-model
   *
   * @event update:modelValue
   * @param {CheckboxGroupModelValue} event
   */
  (eventName: 'update:modelValue', event: CheckboxGroupModelValue): void
}
