import Radio from './src/radio.vue'

import { withInstallComponent } from '../_utils'

export const GRadio = withInstallComponent(Radio)

export type RadioInstance = InstanceType<typeof Radio>

export * from './src/interface'

export default GRadio
