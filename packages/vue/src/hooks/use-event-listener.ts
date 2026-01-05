import { isRef, onBeforeUnmount, onMounted, unref, watch, type Ref } from "vue";

function useEventListener(target: EventTarget | Ref<EventTarget | null>, eventName: string, cb: (e: Event) => void) {
  if (isRef(target)) {
    watch(target, (target, oldTarget) => {
      oldTarget?.removeEventListener(eventName, cb)
      target?.addEventListener(eventName, cb)
    })
  } else {
    onMounted(() => {
      target?.addEventListener(eventName, cb)
    })
  }

  onBeforeUnmount(() => {
    unref(target)?.removeEventListener(eventName, cb)
  })
}

export default useEventListener
