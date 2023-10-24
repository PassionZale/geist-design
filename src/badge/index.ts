import Badge from './src/badge.vue'

import { withInstallComponent } from '../_utils'

export const GBadge = withInstallComponent(Badge)

export type BadgeInstance = InstanceType<typeof Badge>

export * from './src/interface'

export default GBadge
