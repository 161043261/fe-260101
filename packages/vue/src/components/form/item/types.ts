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
  validate: (trigger?: 'blur' | 'change') => Promise<void>
}
