import { useMemo } from 'react'
import type { IProps } from './types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function LarkIcon(props: IProps) {
  const { color } = props
  const propsNoColor = useMemo(
    () => ({
      ...props,
      color: undefined,
    }),
    [props],
  )

  const style = useMemo(() => {
    if (color) {
      return { color }
    }
    return {}
  }, [color])

  return (
    <div className="lark-icon" style={style}>
      <FontAwesomeIcon {...propsNoColor} />
    </div>
  )
}

export default LarkIcon
