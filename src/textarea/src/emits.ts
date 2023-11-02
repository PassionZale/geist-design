export interface TextareaEmits {
  /**
   * v-model
   *
   * @event click
   * @param {string} event
   */
  (eventName: 'update:modelValue', event: string): void
}
