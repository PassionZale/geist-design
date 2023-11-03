import Image from './src/image.vue'

import { withInstallComponent } from '../_utils'

export const GImage = withInstallComponent(Image)

export type ImageInstance = InstanceType<typeof Image>

export * from './src/interface'

export default GImage
