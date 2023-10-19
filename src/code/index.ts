import Code from './src/code.vue'

import { withInstallComponent } from '../_utils'

export const GCode = withInstallComponent(Code)

export type CodeInstance = InstanceType<typeof Code>

export * from './src/interface'

export default GCode
