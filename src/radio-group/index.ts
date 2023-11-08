import RadioGroup from './src/radio-group.vue'

import { withInstallComponent } from '../_utils'

export const GRadioGroup = withInstallComponent(RadioGroup)

export type RadioGroupInstance = InstanceType<typeof RadioGroup>

export * from './src/interface'

export default GRadioGroup
