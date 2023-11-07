import FilesItem from './src/files-item.vue'

import { withInstallComponent } from '../_utils'

export const GFilesItem = withInstallComponent(FilesItem)

export type FilesItemInstance = InstanceType<typeof FilesItem>

export * from './src/interface'

export default GFilesItem
