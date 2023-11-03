export interface RateEmits {
  /**
   * v-model
   *
   * @event update:modelValue
   * @param {number} event
   */
  (eventName: 'update:modelValue', event: number): void
}
