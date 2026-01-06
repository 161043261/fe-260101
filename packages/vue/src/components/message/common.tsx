import { shallowReactive } from 'vue'
import type { IMessageContext } from './types'

export const contexts = shallowReactive<IMessageContext[]>([])

export function getPreviousBottomOffset(id: string) {
  const idx = contexts.findIndex((ctx) => ctx.id === id)
  if (idx <= 0) {
    return 0
  }
  console.log(contexts[idx])
  return 0
}

export function closeAll() {
  contexts.forEach((ctx) => ctx.close())
}
