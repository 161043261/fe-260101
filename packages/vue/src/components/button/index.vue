<script setup lang="ts">
import { computed, useTemplateRef } from 'vue'
import type { IProps } from './types'
import LarkIcon from '@/components/icon/index.vue'

defineOptions({
  name: 'LarkButton',
})

const props = withDefaults(defineProps<IProps>(), {
  type: 'primary',
  size: 'medium',
})

const { type, size, round, loading, circle, disabled, plain } = props

const computedClass = computed(() => {
  return [
    `lark-button--${type}`,
    `lark-button--${size}`,
    {
      'is-round': round, // Seems like it will be compiled to props.round since Vue 3.5
      'is-circle': circle,
      'is-disabled': disabled,
      'is-plain': plain,
    },
  ]
})

const ref = useTemplateRef('button-ref')

defineExpose({
  ref,
})
</script>

<template>
  <button class="lark-button" ref="button-ref" :class="computedClass" :type="nativeType">
    <LarkIcon icon="spinner" v-if="loading" spin />
    <LarkIcon :icon="icon" v-if="icon" />
    <span>
      <slot> </slot>
    </span>
  </button>
</template>
