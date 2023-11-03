export interface InputEmits {
  /**
   * v-model
   *
   * @event update:modelValue
   * @param {string | number} event
   */
  (eventName: 'update:modelValue', event: string | number): void
}
