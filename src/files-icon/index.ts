import FilesIcon from './src/files-icon.vue'

import { withInstallComponent } from '../_utils'

export const GFilesIcon = withInstallComponent(FilesIcon)

export type FilesIconInstance = InstanceType<typeof FilesIcon>

export * from './src/interface'

export default GFilesIcon
