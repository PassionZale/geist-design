import Spacer from './src/spacer.vue'

import { withInstallComponent } from '../_utils'

export const GSpacer = withInstallComponent(Spacer)

export type SpacerInstance = InstanceType<typeof Spacer>

export * from './src/interface'

export default GSpacer
