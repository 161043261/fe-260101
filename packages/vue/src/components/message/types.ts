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
  jsxElement: VNode
  props: IProps
  onClose: () => void
}

export interface IExpose {
  bottomOffset: number
  display: Ref<boolean>
}

export type TPartialProps = Omit<IProps, 'id' | 'zIndex' | 'onDestroy'>
