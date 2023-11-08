import type { RadioGroupProps } from './props'

export type { RadioGroupProps } from './props'

export type RadioGroupProvide = RadioGroupProps & {
  setChange: (value: string | number) => void
}
