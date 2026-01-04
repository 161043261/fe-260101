<script setup lang="ts">
import LarkButton from '@/components/button/index.vue'
</script>

<template>
  <div class="button-demo">
    <h3>按钮类型</h3>
    <div class="demo-row">
      <LarkButton type="primary">Primary</LarkButton>
      <LarkButton type="success">Success</LarkButton>
      <LarkButton type="info">Info</LarkButton>
      <LarkButton type="warning">Warning</LarkButton>
      <LarkButton type="danger">Danger</LarkButton>
    </div>

    <h3>朴素按钮</h3>
    <div class="demo-row">
      <LarkButton type="primary" plain>Primary</LarkButton>
      <LarkButton type="success" plain>Success</LarkButton>
      <LarkButton type="info" plain>Info</LarkButton>
      <LarkButton type="warning" plain>Warning</LarkButton>
      <LarkButton type="danger" plain>Danger</LarkButton>
    </div>

    <h3>圆角按钮</h3>
    <div class="demo-row">
      <LarkButton type="primary" round>Primary</LarkButton>
      <LarkButton type="success" round>Success</LarkButton>
      <LarkButton type="info" round>Info</LarkButton>
      <LarkButton type="warning" round>Warning</LarkButton>
      <LarkButton type="danger" round>Danger</LarkButton>
    </div>

    <h3>圆形按钮</h3>
    <div class="demo-row">
      <LarkButton type="primary" circle icon="search" />
      <LarkButton type="success" circle icon="check" />
      <LarkButton type="info" circle icon="message" />
      <LarkButton type="warning" circle icon="star" />
      <LarkButton type="danger" circle icon="remove" />
    </div>

    <h3>按钮尺寸</h3>
    <div class="demo-row">
      <LarkButton type="primary" size="large">Large</LarkButton>
      <LarkButton type="primary" size="medium">Medium</LarkButton>
      <LarkButton type="primary" size="small">Small</LarkButton>
    </div>

    <h3>禁用状态</h3>
    <div class="demo-row">
      <LarkButton type="primary" disabled>Disabled</LarkButton>
      <LarkButton type="success" disabled>Disabled</LarkButton>
    </div>

    <h3>加载状态</h3>
    <div class="demo-row">
      <LarkButton type="primary" loading>Loading</LarkButton>
      <LarkButton type="success" loading>Loading</LarkButton>
    </div>

    <h3>带图标</h3>
    <div class="demo-row">
      <LarkButton type="primary" icon="edit">编辑</LarkButton>
      <LarkButton type="success" icon="check">确认</LarkButton>
      <LarkButton type="danger" icon="remove">删除</LarkButton>
    </div>
  </div>
</template>

<style scoped>
.button-demo {
  padding: 20px;
}

.button-demo h3 {
  margin: 20px 0 10px;
  color: #333;
}

.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}
</style>
