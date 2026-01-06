import { shallowReactive } from 'vue'
import type { IMessageContext } from './types'

export const messageContexts = shallowReactive<IMessageContext[]>([])

export function getPreviousBottomOffset(id: string) {
  const idx = messageContexts.findIndex((ctx) => ctx.id === id)
  console.log(messageContexts[idx])
  if (idx <= 0) {
    return 0
  }
  return 0
}

export function closeAll() {
  messageContexts.forEach((ctx) => ctx.onClose())
}
