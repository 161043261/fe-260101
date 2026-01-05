import { defineComponent, type VNode } from "vue";

interface IProps {
  functionComponent: VNode
}

const ReturnJSXElement = defineComponent<IProps>((props: IProps/** , ctx */) => {
  const { functionComponent } = props
  return () => (
    <>{functionComponent}</>
  )
}, {
  // name, props, emits, slots
  props: ['functionComponent']
})

export default ReturnJSXElement
