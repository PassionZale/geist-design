import FilesStatus from './src/files-status.vue'

import { withInstallComponent } from '../_utils'

export const GFilesStatus = withInstallComponent(FilesStatus)

export type FilesStatusInstance = InstanceType<typeof FilesStatus>

export * from './src/interface'

export default GFilesStatus
