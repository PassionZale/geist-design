import { useToast } from './src/toast'
import { withInstallFn } from '../_utils'

const { Toast } = useToast()

export const GToast = withInstallFn(Toast, '$toast')

export * from './src/interface'
