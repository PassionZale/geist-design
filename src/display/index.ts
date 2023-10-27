import Display from './src/display.vue'

import { withInstallComponent } from '../_utils'

export const GDisplay = withInstallComponent(Display)

export type DisplayInstance = InstanceType<typeof Display>

export * from './src/interface'

export default GDisplay
