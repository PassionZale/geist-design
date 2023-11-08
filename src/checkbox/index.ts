import Checkbox from './src/checkbox.vue'

import { withInstallComponent } from '../_utils'

export const GCheckbox = withInstallComponent(Checkbox)

export type CheckboxInstance = InstanceType<typeof Checkbox>

export * from './src/interface'

export default GCheckbox
