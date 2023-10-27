import Description from './src/description.vue'

import { withInstallComponent } from '../_utils'

export const GDescription = withInstallComponent(Description)

export type DescriptionInstance = InstanceType<typeof Description>

export * from './src/interface'

export default GDescription
