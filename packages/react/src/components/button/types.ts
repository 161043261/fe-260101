import type { IconProp } from '@fortawesome/fontawesome-svg-core'

export type TButtonType = 'primary' | 'success' | 'info' | 'warning' | 'error'
export type TButtonSize = 'small' | 'medium' | 'large'
export type TButtonNativeType = 'button' | 'submit' | 'reset'

export interface IProps {
  type?: TButtonType
  size?: TButtonSize
  nativeType?: TButtonNativeType
  plain?: boolean
  round?: boolean
  circle?: boolean
  disabled?: boolean
  autofocus?: boolean
  loading?: boolean
  icon?: IconProp
}
