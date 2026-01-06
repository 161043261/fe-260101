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
  display: Ref<boolean>
}
