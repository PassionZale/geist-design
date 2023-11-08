import Slider from './src/slider.vue'

import { withInstallComponent } from '../_utils'

export const GSlider = withInstallComponent(Slider)

export type SliderInstance = InstanceType<typeof Slider>

export * from './src/interface'

export default GSlider
