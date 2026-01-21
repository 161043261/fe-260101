export type WithModelProps<IProps, T = unknown> = IProps & {
  modelValue: T
}

export type WithModelEmits<IEmits, T = unknown> = IEmits & {
  (eventName: 'update:model-value', value: T): void
}
