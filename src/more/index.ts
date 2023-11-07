import More from './src/more.vue'

import { withInstallComponent } from '../_utils'

export const GMore = withInstallComponent(More)

export type MoreInstance = InstanceType<typeof More>

export * from './src/interface'

export default GMore
