type TAlertType = 'success' | 'warning' | 'info' | 'error'
type TEffectType = 'light' | 'dark'

export interface IProps {
  title: string
  type: TAlertType
  description?: string
  closable?: boolean
  center?: boolean
  showIcon?: boolean
  effect: TEffectType
  closeText?: string
}

export interface IEmits {
  // key: 事件名
  // value: 事件回调函数的参数, 具名元组
  close: [e: MouseEvent]
}

export interface IExpose {
  hide: () => void
}
