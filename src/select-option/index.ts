import Option from './src/option.vue'

import { withInstallComponent } from '../_utils'

export const GOption = withInstallComponent(Option)

export type OptionInstance = InstanceType<typeof Option>

export * from './src/interface'

export default GOption
