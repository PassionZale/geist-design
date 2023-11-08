import Toggle from './src/toggle.vue'

import { withInstallComponent } from '../_utils'

export const GToggle = withInstallComponent(Toggle)

export type ToggleInstance = InstanceType<typeof Toggle>

export * from './src/interface'

export default GToggle
