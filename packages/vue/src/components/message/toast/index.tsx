import { render, type VNode } from 'vue'
import Message from '../index.vue'
import { useZIndex } from '@/hooks'
import type { IExpose, IMessageContext, IProps } from '../types'
import { createHash } from '@/utils'
import { messageContexts, closeAll } from '../common'

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

  const handleClose = () => {
    const idx = messageContexts.findIndex((ctx) => ctx.id === messageId)
    if (idx != -1) {
      messageContexts.splice(idx, 1)
    }
    render(null, container)
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

  const vNode: VNode = <Message {...newProps} />
  const ctx: IMessageContext = {
    id: messageId,
    onClose: handleClose,
  }
  messageContexts.push(ctx)
  render(vNode, container)
  ctx.expose = vNode.component?.exposed as IExpose
}

type TToastFunc = (message: string, duration?: number, showClose?: boolean) => void

interface IToast {
  success: TToastFunc
  error: TToastFunc
  warning: TToastFunc
  info: TToastFunc
  closeAll: () => void
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
