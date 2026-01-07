import type { Ref, VNode } from 'vue'

export interface IProps {
  id: string
  message?: string | VNode
  duration?: number
  showClose?: boolean
  type?: 'success' | 'warning' | 'error' | 'info'
  zIndex?: number
  offset?: number
  onClose?: () => void
}

export interface IMessageContext {
  id: string
  expose?: IExpose
  onClose: () => void
}

export interface IExpose {
  bottomOffset: number
  alive: Ref<boolean>
}

export type TToastFunc = (message: string, duration?: number, showClose?: boolean) => void

export interface IToast {
  success: TToastFunc
  error: TToastFunc
  warning: TToastFunc
  info: TToastFunc
  closeAll: () => void
}
