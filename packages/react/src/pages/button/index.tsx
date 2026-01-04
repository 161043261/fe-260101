import LarkButton from '@/components/button'

function Index() {
  return (
    <>
      <LarkButton>Button</LarkButton>
      <LarkButton type="danger">Button</LarkButton>
      <LarkButton type="info">Button</LarkButton>
      <LarkButton type="warning">Button</LarkButton>
      <LarkButton type="success" plain>
        Button
      </LarkButton>
      <LarkButton loading>Button</LarkButton>
    </>
  )
}

export default Index
