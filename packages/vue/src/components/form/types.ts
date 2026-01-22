import type { RuleItem } from 'async-validator'
import type { DeepReadonly, InjectionKey } from 'vue'

export interface IProps {
  rules: LarkFormRules
  trigger?: 'blur' | 'change'
}

export interface IFormItemRule extends RuleItem {
  // blur 失去焦点时, 触发表单校验
  // change 表单项的值改变时, 触发表单校验
  trigger?: IProps['trigger']
}

export type LarkFormRules<T = Record<string, unknown>> = Partial<Record<keyof T, IFormItemRule[]>>

export interface IFormContext extends DeepReadonly<IProps> {
  // const modelValue = defineModel<Record<string, unknown>>()
  modelValue: Record<string, unknown>

  addField: (itemContext: IFormItemContext) => void
  removeField: (itemContext: IFormItemContext) => void
  resetFields: (fields?: string[]) => void
  clearValidates: (fields?: string[]) => void
  validates: () => Promise<void>
  setModelValue: (value: Record<string, unknown>) => void
}

export interface IFormItemContext {
  $el: HTMLDivElement | null
  field: string
  resetField: () => void
  clearValidate: () => void
  validate: (trigger?: IProps['trigger']) => Promise<void>
}

export const FORM_CONTEXT_KEY: InjectionKey<IFormContext> = Symbol('FORM_CONTEXT_KEY')
export const FORM_ITEM_CONTEXT_KEY: InjectionKey<IFormItemContext> = Symbol('FORM_ITEM_CONTEXT_KEY')

export type TExpose = Pick<IFormContext, 'validates' | 'resetFields' | 'clearValidates'>
