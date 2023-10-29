import Keyboard from './src/keyboard.vue'

import { withInstallComponent } from '../_utils'

export const GKeyboard = withInstallComponent(Keyboard)

export type KeyboardInstance = InstanceType<typeof Keyboard>

export * from './src/interface'

export default GKeyboard
