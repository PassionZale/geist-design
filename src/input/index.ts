import Input from './src/input.vue'

import { withInstallComponent } from '../_utils'

export const GInput = withInstallComponent(Input)

export type InputInstance = InstanceType<typeof Input>

export * from './src/interface'

export default GInput
