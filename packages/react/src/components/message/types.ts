import type { ComponentType, JSXElementConstructor, ReactElement, ReactNode } from 'react'
import type { Root } from 'react-dom/client'

export interface IProps {
  id: string
  message?: ReactNode
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

  // ========== React ==========
  container?: HTMLDivElement
  root?: Root
  element?: ReactElement<IProps, ComponentType<IProps>>
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
