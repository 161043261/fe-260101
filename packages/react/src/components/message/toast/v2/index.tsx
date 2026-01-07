import { useZIndex } from '@/hooks'
import type { IExpose, IMessageContext, IProps, IToast } from '@/components/message/types'
import { createHash } from '@/utils'
import { closeAll, messageContexts } from '@/components/message/common'
import LarkMessage from '@/components/message'
import { type FC, type ReactElement } from 'react'
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

  const ctx: IMessageContext = {
    id: messageId,
    onClose: handleClose,
    expose: null,
  }

  const refCallback = (expose: IExpose) => {
    if (import.meta.env.DEV) {
      console.log('Attached', expose)
    }
    ctx.expose = expose
    return () => {
      if (import.meta.env.DEV) {
        console.log('Clean up', expose)
      }
      // handleClose();
      queueMicrotask(handleClose)
    }
  }

  // ComponentType: Class Component, Function Component
  // FC: Function Component
  const element: ReactElement<IProps, FC<IProps>> = <LarkMessage {...newProps} ref={refCallback} />

  messageContexts.push(ctx)
  root.render(element)
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
