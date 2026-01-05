import type { ComponentInternalInstance, VNode } from 'vue'

export interface IProps {
  id: string
  message?: string | VNode
  duration?: number
  showClose?: boolean
  type?: 'success' | 'warning' | 'danger' | 'info'
  zIndex?: number;
  offset?: number;
  onClose: () => void
}

export interface IMessageContext {
  id: string
  jsxElement: VNode
  vm: ComponentInternalInstance
  props: IProps
  destroy: () => void
}

export type TCreateMessageProps = Omit<IProps, 'id' | 'zIndex' | 'onDestroy'>
