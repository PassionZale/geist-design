import Button from './src/button.vue'

import { withInstallComponent } from '../_utils'

export const GButton = withInstallComponent(Button)

export type ButtonInstance = InstanceType<typeof Button>

export * from './src/interface'

export default GButton
