export interface ToggleEmits {
  /**
   * v-model
   *
   * @event update:modelValue
   * @param {boolean} event
   */
  (eventName: 'update:modelValue', event: boolean): void
}
