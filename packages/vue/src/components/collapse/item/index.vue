<script setup lang="ts">
import type { IProps } from './types'
import { KEY } from '../constants'
import type { IContext } from '../types'
import { computed, inject } from 'vue'
import LarkIcon from '@/components/icon/index.vue'

defineOptions({
  name: 'LarkCollapseItem',
})

const { disabled, name } = defineProps<IProps>()
const context = inject<IContext>(KEY)

const isActive = computed(() => {
  return context?.activeNames.includes(name)
})

const handleClick = () => {
  if (disabled) {
    return
  }
  context?.handleClick(name)
}
</script>

<template>
  <div class="lark-collapse-item" :class="{ 'is-disabled': disabled }">
    <div class="lark-collapse-item__title" :class="{ 'is-active': isActive }" @click="handleClick">
      {{ title }}
      <LarkIcon icon="angle-right" />
    </div>

    <div class="lark-collapse-item__content" v-show="isActive">
      <slot></slot>
    </div>
  </div>
</template>
