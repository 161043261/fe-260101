<script setup lang="ts">
import { provide, ref, toRefs, watch } from 'vue'
import type { IContext, IEmits, IProps, TName } from './types'
import { KEY } from './constants'

defineOptions({
  name: 'LarkCollapse',
})

const props = defineProps<IProps>()
const emits = defineEmits<IEmits>()

// const modelValue = toRef(props, 'modelValue');
const { modelValue, accordion } = toRefs(props)

const activeNames = ref<TName[]>([])

// watch(() => props.modelValue, () => {
watch(modelValue, () => {
  activeNames.value = modelValue.value
})

const setActiveNames = (names: TName[]) => {
  activeNames.value = names
  emits('update:modelValue', names)
  emits('change', names)
}

const handleClick = (name: TName) => {
  if (accordion.value) {
    setActiveNames(activeNames.value.length === 0 || activeNames.value[0] !== name ? [name] : [])
    return
  }

  if (activeNames.value.includes(name)) {
    setActiveNames(activeNames.value.filter((item) => item !== name))
  } else {
    setActiveNames([...activeNames.value, name])
  }
}

provide<IContext>(KEY, {
  activeNames,
  handleClick,
})
</script>

<template>
  <div class="lark-collapse">
    <slot></slot>
  </div>
</template>
