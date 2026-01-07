import { shallowReactive } from "vue";
import type { IMessageContext } from "./types";

export const messageContexts = shallowReactive<IMessageContext[]>([]);

export function getPrevBottomOffset(id: string) {
  const idx = messageContexts.findIndex((item) => item.id === id);
  if (idx <= 0) {
    return 0;
  }
  const prev = messageContexts[idx - 1];
  return prev?.expose?.bottomOffset ?? 0;
}

export function closeAll() {
  messageContexts.forEach((item) => item.onClose());
}
