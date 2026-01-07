import type { IMessageContext } from './types'

export const messageContexts: IMessageContext[] = []

export function getPrevBottomOffset(id: string) {
  const index = messageContexts.findIndex((item) => item.id === id)
  if (index === -1) return 0
  const prev = messageContexts[index - 1]
  return prev?.expose?.bottomOffset ?? 0
}

export function closeAll() {
  messageContexts.forEach((item) => item.onClose())
}
