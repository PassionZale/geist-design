import User from './src/user.vue'

import { withInstallComponent } from '../_utils'

export const GUser = withInstallComponent(User)

export type UserInstance = InstanceType<typeof User>

export * from './src/interface'

export default GUser
