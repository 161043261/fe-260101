import LarkButton from '@/components/button'
import LarkToast from '@/components/message/toast'

function Index() {
  return (
    <>
      <LarkButton type="success" onClick={() => LarkToast.success('Success')}>
        Success
      </LarkButton>
      <LarkButton type="error" onClick={() => LarkToast.error('Error')}>
        Error
      </LarkButton>
      <LarkButton type="warning" onClick={() => LarkToast.warning('Warning')}>
        Warning
      </LarkButton>
      <LarkButton type="info" onClick={() => LarkToast.info('Info')}>
        Info
      </LarkButton>
      <LarkButton type="success" plain onClick={() => LarkToast.closeAll()}>
        Close All
      </LarkButton>
    </>
  )
}

export default Index
