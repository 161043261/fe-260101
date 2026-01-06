<script lang="ts" setup>
import LarkButton from '@/components/button/index.vue'
import LarkToast from '@/components/message/toast';
</script>

<template>
  <LarkButton type="success" @click="LarkToast.success('Success')">Success</LarkButton>
  <LarkButton type="error" @click="LarkToast.success('Error')">Error</LarkButton>
  <LarkButton type="warning" @click="LarkToast.success('Warning')">Warning</LarkButton>
  <LarkButton type="info" @click="LarkToast.success('Info')">Info</LarkButton>
</template>
