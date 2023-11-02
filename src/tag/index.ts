import Tag from './src/tag.vue'

import { withInstallComponent } from '../_utils'

export const GTag = withInstallComponent(Tag)

export type TagInstance = InstanceType<typeof Tag>

export * from './src/interface'

export default GTag
