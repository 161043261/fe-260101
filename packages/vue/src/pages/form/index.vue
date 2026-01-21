<script lang="ts" setup>
import LarkForm from '@/components/form/index.vue'
import LarkFormItem from '@/components/form/item/index.vue'
import LarkButton from '@/components/button/index.vue'
import { reactive } from 'vue'
import type { LarkFormRules } from '@/components/form/types'

interface IFormData {
  email: string
  password: string
}

const formData = reactive<IFormData>({
  email: '161043261@qq.com',
  password: 'forget?',
})

const rules: LarkFormRules<IFormData> = {
  email: [{ type: 'email', required: true, trigger: 'blur' }],
  password: [
    {
      min: 4,
      max: 8,
      type: 'string',
      required: true,
      trigger: 'blur',
      message: '4 <= password.length <= 8',
    },
  ],
}
</script>

<template>
  <LarkForm ref="lark-form" v-model="formData" :rules="rules">
    <LarkFormItem label="Email" field="email">
      <input v-model="formData.email" />
    </LarkFormItem>
    <LarkFormItem label="Password" field="password">
      <input v-model="formData.password" />
    </LarkFormItem>
    <div>
      <LarkButton type="primary">Submit</LarkButton>
      <LarkButton type="info">Reset</LarkButton>
    </div>
  </LarkForm>
</template>
