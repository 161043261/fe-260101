import { render, shallowReactive } from 'vue'
import Message from './index.vue'
import { useZIndex } from '@/hooks'
import type { IMessageContext, TCreateMessageProps } from './types'
import { createHash } from '@/utils'

let seed = 1

const contexts = shallowReactive<IMessageContext[]>([])

export function createMessage(props: TCreateMessageProps) {
  const { nextZIndex } = useZIndex()
  const messageId = createHash()
  const container = document.createElement('div')

  const destroy = () => {
    const idx = contexts.findIndex((context) => context.id === messageId)
    if (idx == -1) {
      return
    }
    contexts.splice(idx, 1)
    render(null, container)
  }
}
