export interface TextareaEmits {
  /**
   * v-model
   *
   * @event update:modelValue
   * @param {string} event
   */
  (eventName: 'update:modelValue', event: string): void
}
