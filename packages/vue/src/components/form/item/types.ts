import type { VNode } from 'vue'

export interface IProps {
  label: string
  field: string
  showErrorMsg?: boolean
}

export interface IValidateStatus {
  state: 'idle' | 'validating' | 'error'
  errorMsg: string
}

export interface IExpose {
  validateStatus: IValidateStatus
  resetField: () => void
  clearValidate: () => void
  validate: () => Promise<void>
}

export interface ISlots {
  default: (props: { validate: IExpose['validate'] }) => VNode
  label: (props: { label: string }) => VNode
}
