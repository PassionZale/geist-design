import Files from './src/files.vue'

import { withInstallComponent } from '../_utils'

export const GFiles = withInstallComponent(Files)

export type FilesInstance = InstanceType<typeof Files>

export * from './src/interface'

export default GFiles
