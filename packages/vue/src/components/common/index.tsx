import { defineComponent, type Component, type RenderFunction, type VNode } from 'vue'

interface IProps {
  element: string | VNode
}

const LarkComponent: Component<IProps> = defineComponent<IProps>(
  (props: IProps /** , ctx */) => {
    const { element } = props
    const vNode: VNode = (
      // Support JSX Fragment
      <>
        {import.meta.env.DEV && <span class="mr-2">lark</span>}
        <span>{element}</span>
      </>
    )
    const renderFunc: RenderFunction = () => vNode
    return renderFunc
  },
  {
    props: ['element'],
  },
)

export default LarkComponent
