<script setup lang="ts">
import LarkAlert from '@/components/alert/index.vue'
</script>

<template>
  <div class="alert-demo">
    <h3>基础用法</h3>
    <LarkAlert title="Success 提示" type="success" effect="light" />
    <LarkAlert title="Info 提示" type="info" effect="light" />
    <LarkAlert title="Warning 提示" type="warning" effect="light" />
    <LarkAlert title="Error 提示" type="error" effect="light" />

    <h3>Dark 主题</h3>
    <LarkAlert title="Success 提示" type="success" effect="dark" />
    <LarkAlert title="Info 提示" type="info" effect="dark" />
    <LarkAlert title="Warning 提示" type="warning" effect="dark" />
    <LarkAlert title="Error 提示" type="error" effect="dark" />

    <h3>带图标</h3>
    <LarkAlert title="带图标的提示" type="success" effect="light" show-icon />
    <LarkAlert title="带图标的提示" type="info" effect="light" show-icon />
    <LarkAlert title="带图标的提示" type="warning" effect="light" show-icon />
    <LarkAlert title="带图标的提示" type="error" effect="light" show-icon />

    <h3>带描述</h3>
    <LarkAlert title="带描述的提示" type="success" effect="light" description="这是一段描述文字" />

    <h3>居中</h3>
    <LarkAlert title="居中显示" type="info" effect="light" center />

    <h3>自定义关闭文字</h3>
    <LarkAlert title="自定义关闭" type="warning" effect="light" close-text="知道了" />

    <h3>不可关闭</h3>
    <LarkAlert title="不可关闭的提示" type="error" effect="light" :closable="false" />
  </div>
</template>

<style scoped>
.alert-demo {
  padding: 20px;
  width: 300px;
}

.alert-demo h3 {
  margin: 20px 0 10px;
  color: #333;
}

.alert-demo .lark-alert {
  margin-bottom: 10px;
}
</style>
