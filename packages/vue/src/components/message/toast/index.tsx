import { defineComponent, render, Teleport, type RenderFunction, type VNode } from 'vue'
import Message from '../index.vue'
import { useZIndex } from '@/hooks'
import type { IProps, TPartialProps } from '../types'
import { createHash } from '@/utils'
import { messageContexts } from '../common'

const ToastComponent = defineComponent<TPartialProps>(
  (props: TPartialProps) => {
    const { nextZIndex } = useZIndex()
    const messageId = createHash()
    const container = document.body

    const handleClose = () => {
      const idx = messageContexts.findIndex((ctx) => ctx.id === messageId)
      if (idx == -1) {
        return
      }
      messageContexts.splice(idx, 1)
      render(null, container)
    }

    const newProps: IProps = {
      ...props,
      id: messageId,
      zIndex: nextZIndex(),
      onClose: handleClose,
    }

    if (import.meta.env.DEV) {
      // Will be tree shaken in production
      console.log('ToastComponent', newProps)
    }

    const vNode: VNode = (
      <Teleport to={document.body}>
        <Message {...newProps} />
      </Teleport>
    )

    messageContexts.push({
      id: messageId,
      props: newProps,
      // JSX.Element, React.ReactElement ≈ Vue.VNode
      jsxElement: vNode,
      onClose: handleClose,
    })

    const ret: RenderFunction = () => vNode
    return ret
  },
  {
    props: ['type', 'message', 'duration', 'showClose'],
  },
)

type TToastFunc = (message: string, duration?: number, showClose?: boolean) => void

interface IToast {
  success: TToastFunc
  error: TToastFunc
  warning: TToastFunc
  info: TToastFunc
}

function createToast(
  type: IProps['type'],
  message: string,
  duration?: number,
  showClose?: boolean,
) {
  const container = document.body
  const vNode = (
    <ToastComponent type={type} message={message} duration={duration} showClose={showClose} />
  )
  render(vNode, container)
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
}

export default LarkToast
