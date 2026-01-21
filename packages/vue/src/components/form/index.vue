<script setup lang="ts">
import { provide, readonly } from 'vue'
import {
  FORM_CONTEXT_KEY,
  type IProps,
  type IFormContext,
  type IFormItemContext,
  type TExpose,
  type IEmits,
} from './types'

defineOptions({
  name: 'LarkForm',
})

const props = withDefaults(defineProps<IProps>(), {
  trigger: 'blur',
})

const emits = defineEmits<IEmits>()

const itemContexts: IFormItemContext[] = []

const addField: IFormContext['addField'] = (ctx: IFormItemContext) => {
  itemContexts.push(ctx)
}

const removeField: IFormContext['removeField'] = (ctx: IFormItemContext) => {
  itemContexts.splice(itemContexts.indexOf(ctx), 1)
}

const resetFields: IFormContext['resetFields'] = (fields: string[] = []) => {
  const contexts =
    fields.length > 0
      ? itemContexts.filter((context) => fields.includes(context.field))
      : itemContexts
  contexts.forEach((ctx) => ctx.resetField())
}

const clearValidates: IFormContext['clearValidates'] = (fields: string[] = []) => {
  const contexts =
    fields.length > 0
      ? itemContexts.filter((context) => fields.includes(context.field))
      : itemContexts
  contexts.forEach((ctx) => ctx.clearValidate())
}

const validates: IFormContext['validates'] = async () => {
  const aggregateErrors = []
  for (const ctx of itemContexts) {
    try {
      await ctx.validate(props.trigger)
    } catch (err) {
      aggregateErrors.push(err)
    }
  }
  if (aggregateErrors.length === 0) {
    return
  }
  throw aggregateErrors
}

defineExpose<TExpose>({
  resetFields,
  validates,
  clearValidates,
})

provide<IFormContext>(FORM_CONTEXT_KEY, {
  ...readonly(props),
  addField,
  removeField,
  resetFields,
  clearValidates,
  validates,
  setModelValue(value) {
    emits('update:model-value', value)
  },
})
</script>

<template>
  <form class="lark-form">
    <slot></slot>
  </form>
</template>
