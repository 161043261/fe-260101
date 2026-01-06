import { defineComponent, Teleport, type RenderFunction, type VNode } from 'vue'
import Message from '../index.vue'
import { useZIndex } from '@/hooks'
import type { IProps, TPartialProps } from '../types'
import { createHash } from '@/utils'
import { contexts } from '../common'

const ToastComponent = defineComponent<TPartialProps>((props: TPartialProps) => {
  const { nextZIndex } = useZIndex()
  const messageId = createHash()
  const handleClose = () => {
    const idx = contexts.findIndex((ctx) => ctx.id === messageId)
    if (idx == -1) {
      return
    }
    contexts.splice(idx, 1)
  }

  const newProps: IProps = {
    ...props,
    id: messageId,
    zIndex: nextZIndex(),
    onClose: handleClose
  }

  const vNode: VNode = (
    <Teleport to="#app">
      <Message {...newProps} />
    </Teleport>
  )

  contexts.push({
    id: messageId,
    props: newProps,
    // JSX.Element, React.ReactElement ≈ Vue.VNode
    jsxElement: vNode,
    close: handleClose
  })

  const ret: RenderFunction = () => vNode
  return ret;
})

type TToastFunc = (message: string, duration?: number, showClose?: boolean) => void

interface IToast {
  success: TToastFunc
  error: TToastFunc
  warning: TToastFunc
  info: TToastFunc
}

const LarkToast: IToast = {
  success: (message: string, duration?: number, showClose?: boolean) => {
    return <ToastComponent type="success" message={message} duration={duration} showClose={showClose} />
  },
  error: (message: string, duration?: number, showClose?: boolean) => {
    return <ToastComponent type="error" message={message} duration={duration} showClose={showClose} />
  },
  warning: (message: string, duration?: number, showClose?: boolean) => {
    return <ToastComponent type="warning" message={message} duration={duration} showClose={showClose} />
  },
  info: (message: string, duration?: number, showClose?: boolean) => {
    return <ToastComponent type="info" message={message} duration={duration} showClose={showClose} />
  }
}

export default LarkToast
