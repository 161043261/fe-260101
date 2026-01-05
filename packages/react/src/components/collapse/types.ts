import type { TName } from './item/types'
export type { TName } from './item/types'

export interface IContext {
  activeNames: TName[]
  handleClick: (name: TName) => void
}

export interface IProps {
  activeNames: TName[]
  onChange?: (names: TName[]) => void
  accordion?: boolean
}
