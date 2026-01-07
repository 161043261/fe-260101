import { useZIndex } from '@/hooks'
import type { IMessageContext, IProps, IToast } from '../types'
import { createHash } from '@/utils'
import { closeAll, messageContexts } from '../common'
import LarkMessage from '..'
import type { FC, ReactElement } from 'react'
import { createRoot } from 'react-dom/client'

function createToast(
  type: IProps['type'],
  message: string,
  duration?: number,
  showClose?: boolean,
) {
  const { nextZIndex } = useZIndex()
  const messageId = createHash()

  // const container = document.body
  const container = document.createElement('div')
  document.body.appendChild(container)

  // ========== React ==========
  const root = createRoot(container)

  const handleClose = () => {
    const idx = messageContexts.findIndex((ctx) => ctx.id === messageId)
    if (idx != -1) {
      messageContexts.splice(idx, 1)
    }
    // ========== Vue ==========
    // render(null, container)
    // ========== React ==========
    root.unmount()
    container.remove()
  }

  const newProps: IProps = {
    ...{ type, message, duration, showClose },
    id: messageId,
    zIndex: nextZIndex(),
    onClose: handleClose,
  }

  if (import.meta.env.DEV) {
    // Will be tree shaken in production
    console.log('ToastComponent', newProps)
  }

  // ComponentType: Class Component, Function Component
  // FC: Function Component
  const elementObj: ReactElement<IProps, FC<IProps>> = <LarkMessage {...newProps} />
  const ctx: IMessageContext = {
    id: messageId,
    onClose: handleClose,
    // const container = document.createElement('div')
    // document.body.appendChild(container)
    container,
    // const root = createRoot(container)
    root,
    // const element = <LarkMessage {...newProps} />,
    element: elementObj,
  }

  messageContexts.push(ctx)
  // render(elem, container)
  root.render(elementObj)
}

const LarkToast: IToast = {
  success: (message: string, duration?: number, showClose?: boolean) => {
    createToast('success', message, duration, showClose)
  },
  error: (message: string, duration?: number, showClose?: boolean) => {
    createToast('error', message, duration, showClose)
  },
  warning: (message: string, duration?: number, showClose?: boolean) => {
    createToast('warning', message, duration, showClose)
  },
  info: (message: string, duration?: number, showClose?: boolean) => {
    createToast('info', message, duration, showClose)
  },
  closeAll,
}

export default LarkToast
