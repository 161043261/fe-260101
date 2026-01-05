import { computed, ref } from 'vue'

function createUseZIndex() {
  const deltaIndex = ref(0)

  return (initialIndex = 2000) => {
    const zIndex = computed(() => initialIndex + deltaIndex.value)
    const nextZIndex = () => {
      deltaIndex.value++
      return zIndex.value
    }

    return {
      zIndex,
      nextZIndex,
    }
  }
}

const useZIndex = createUseZIndex()

export default useZIndex
