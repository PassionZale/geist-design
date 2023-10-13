import Avatar from './src/avatar.vue'

import { withInstallComponent } from '../_utils'

export const GAvatar = withInstallComponent(Avatar)

export type AvatarInstance = InstanceType<typeof Avatar>

export * from './src/interface'

export default GAvatar
