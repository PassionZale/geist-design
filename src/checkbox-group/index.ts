import CheckboxGroup from './src/checkbox-group.vue'

import { withInstallComponent } from '../_utils'

export const GCheckboxGroup = withInstallComponent(CheckboxGroup)

export type CheckboxGroupInstance = InstanceType<typeof CheckboxGroup>

export * from './src/interface'

export default GCheckboxGroup
