<script setup lang="ts">
import { computed, ref, useTemplateRef } from 'vue';
import type { IProps } from './types';

const props = withDefaults(defineProps<IProps>(), {
  type: 'info',
  duration: 3000,
  offset: 20,
})

const display = ref(true)
const nodeRef = useTemplateRef('message-ref')

const height = ref(0)


const getTopSiblingBottomOffset = (id: string) => {
  const index = 
}


const topOffset = computed

</script>

<template>
  <div></div>
</template>
