import { useMemo, useState } from 'react'

function createUseZIndex() {
  const [deltaIndex, setDeltaIndex] = useState(0)

  return (initialIndex = 2000) => {
    const zIndex = useMemo(() => initialIndex + deltaIndex, [deltaIndex])
    const nextZIndex = () => {
      setDeltaIndex(deltaIndex + 1)
      return zIndex
    }

    return {
      zIndex,
      nextZIndex,
    }
  }
}

function createUseZIndexV2() {
  let deltaIndex = 0

  return (initialIndex = 2000) => {
    const zIndex = () => initialIndex + deltaIndex
    const nextZIndex = () => {
      deltaIndex++
      return zIndex()
    }

    return {
      zIndex,
      nextZIndex,
    }
  }
}

const useZIndex = createUseZIndex()
const useZIndexV2 = createUseZIndexV2()

export { useZIndex, useZIndexV2 }
