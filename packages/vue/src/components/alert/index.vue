<script setup lang="ts">
import { computed, ref } from 'vue'
import type { IEmits, IProps } from './types'
import LarkIcon from '@/components/icon/index.vue'

defineOptions({
  name: 'LarkAlert',
})

const props = withDefaults(defineProps<IProps>(), {
  closable: true,
  effect: 'light',
})
// const { type, closable, center, showIcon, effect } = toRefs(props)
const { type, closable, center, showIcon, effect } = props

const emit = defineEmits<IEmits>()

const computedClass = computed(() => {
  return [`lark-alert--${type}`, `lark-alert--${effect}`, { 'is-center': center }]
})

const visible = ref(true)

const handleClose = (e: MouseEvent) => {
  visible.value = false
  emit('close', e)
}

const getAlertIcon = () => {
  switch (type) {
    case 'error': {
      return 'circle-xmark'
    }
    case 'info': {
      return 'circle-info'
    }
    case 'success': {
      return 'circle-check'
    }
    case 'warning': {
      return 'circle-exclamation'
    }
    default: {
      return 'circle-info'
    }
  }
}
</script>

<template>
  <!-- name 是 CSS 类选择器名的前缀, 默认值是 v- -->
  <!-- v-[enter | leave]-[from | active | to] -->
  <Transition name="lark-alert-fade">
    <div class="lark-alert" :class="computedClass" v-show="visible">
      <div class="lark-alert__content">
        <span v-if="showIcon" class="lark-alert__icon">
          <!-- .stop: event.stopPropagation() -->
          <LarkIcon :icon="getAlertIcon()" @click.stop="visible = false" />
        </span>

        <div class="lark-alert__message">
          <p class="lark-alert__title">
            <slot name="title">{{ title }}</slot>
          </p>

          <p v-if="description" class="lark-alert__description">
            <slot>{{ description }}</slot>
          </p>
        </div>
      </div>

      <!-- <template /> 类似 React Fragment </> -->
      <template v-if="closable">
        <div v-if="closeText" @click="handleClose" class="close-btn">{{ closeText }}</div>
        <LarkIcon v-else icon="xmark" @click="handleClose" class="close-btn" />
      </template>
    </div>
  </Transition>
</template>
