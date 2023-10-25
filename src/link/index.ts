import Link from './src/link.vue'

import { withInstallComponent } from '../_utils'

export const GLink = withInstallComponent(Link)

export type LinkInstance = InstanceType<typeof Link>

export * from './src/interface'

export default GLink
