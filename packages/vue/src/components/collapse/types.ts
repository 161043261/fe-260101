import type { TName } from './item/types'
export type { TName } from './item/types'

export interface IContext {
  activeNames: TName[]
  handleClick: (name: TName) => void
}

export interface IProps {
  modelValue: TName[]
  // 是否开启手风琴模式, 即同时只能展开一个折叠项
  accordion?: boolean
}

export interface IEmits {
  (eventName: 'update:modelValue', value: TName[]): void
  (eventName: 'change', value: TName[]): void
}
