import { defineComponent, type Component, type RenderFunction, type VNode } from 'vue'

interface IProps {
  element: string | VNode
}

const LarkComponent: Component<IProps> = defineComponent<IProps>(
  (props: IProps /** , ctx */) => {
    const { element } = props
    const vNode: VNode = (
      <div>
        {import.meta.env.DEV ? "Lark Component" : ""}
        {element}
      </div>
    )
    const renderFunc: RenderFunction = () => vNode
    return renderFunc
  }
)

export default LarkComponent
