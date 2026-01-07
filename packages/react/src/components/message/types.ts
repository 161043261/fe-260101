import type { ReactNode } from 'react'

export interface IProps {
  id: string
  message?: ReactNode
  duration?: number
  showClose?: boolean
  type?: 'success' | 'warning' | 'error' | 'info'
  zIndex?: number
  offset?: number
  shouldHandleExited?: boolean
  onClose?: () => void
}

export interface IMessageContext {
  id: string
  expose: IExpose | null
  onClose: () => void
}

export interface IExpose {
  bottomOffset: number
  alive: boolean
}

type TToastFunc = (message: string, duration?: number, showClose?: boolean) => void

export interface IToast {
  success: TToastFunc
  error: TToastFunc
  warning: TToastFunc
  info: TToastFunc
  closeAll: () => void
}
