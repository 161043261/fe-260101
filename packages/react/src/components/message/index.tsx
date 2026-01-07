import { useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'
import type { IExpose, IProps } from './types'
import { getPrevBottomOffset } from './common'
import type { PropsWithClassName, PropsWithRef } from '@/types'
import { CSSTransition } from 'react-transition-group'
import classNames from 'classnames'
import LarkIcon from '@/components/icon'

function LarkMessage(props: PropsWithClassName<PropsWithRef<IProps, IExpose>>) {
  const {
    type = 'info',
    duration = 3000,
    offset = 20,
    id,
    zIndex,
    showClose,
    className,
    ref,
    message,
    onClose,
  } = props

  const nodeRef = useRef<HTMLDivElement | null>(null)
  const [alive, setAlive] = useState(true)
  const [height, setHeight] = useState(0)

  const topOffset = useMemo(() => {
    return getPrevBottomOffset(id) + offset
  }, [id, offset])

  const bottomOffset = useMemo(() => topOffset + height, [topOffset, height])

  useImperativeHandle<IExpose, IExpose>(
    ref,
    () => ({
      bottomOffset,
      alive,
    }),
    [bottomOffset, alive],
  )

  const computedClass = useMemo(
    () => ({
      [`lark-message--${type}`]: type,
      'has-close': showClose,
    }),
    [type, showClose],
  )

  const computedStyle = useMemo(
    () => ({
      top: `${topOffset}px`,
      zIndex: zIndex,
    }),
    [topOffset, zIndex],
  )

  let timer: number | null | NodeJS.Timeout = null

  const startTimer = () => {
    if (duration === 0) {
      return
    }
    timer = setTimeout(() => {
      setAlive(false)
    }, duration)
  }

  const clearTimer = () => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setAlive(false)
    }
  }

  document.addEventListener('keydown', handleKeyDown)

  useEffect(() => {
    startTimer()
    return () => {
      clearTimer()
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const handleEnter = () => {
    setHeight(nodeRef.current?.getBoundingClientRect().height ?? 0)
  }

  const handleExited = () => {
    onClose?.()
  }

  return (
    <CSSTransition
      nodeRef={nodeRef}
      classNames="fade-up"
      in={alive}
      unmountOnExit
      timeout={duration}
      onEnter={handleEnter}
      onExited={handleExited}
    >
      <div
        ref={nodeRef}
        className={classNames(className, 'lark-message', computedClass)}
        style={computedStyle}
      >
        <div className="lark-message__content">{message && <span>{message}</span>}</div>
        {showClose && (
          <div className="lark-message__close">
            <LarkIcon icon="xmark" />
          </div>
        )}
      </div>
    </CSSTransition>
  )
}

export default LarkMessage
