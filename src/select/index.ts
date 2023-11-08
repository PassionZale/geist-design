import Select from './src/select.vue'

import { withInstallComponent } from '../_utils'

export const GSelect = withInstallComponent(Select)

export type SelectInstance = InstanceType<typeof Select>

export * from './src/interface'

export default GSelect
