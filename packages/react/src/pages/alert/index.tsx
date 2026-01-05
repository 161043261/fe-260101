import LarkAlert from '@/components/alert/index'
import styled from 'styled-components'

const Container = styled.div`
  padding: 1.25rem;
  width: 18.75rem;
  h3 {
    margin: 1.25rem 0 0.625rem;
    color: #333;
  }

  .lark-alert {
    margin-bottom: 0.625rem;
  }
`

function AlertDemo() {
  return (
    <Container>
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
      <LarkAlert title="带图标的提示" type="success" effect="light" showIcon />
      <LarkAlert title="带图标的提示" type="info" effect="light" showIcon />
      <LarkAlert title="带图标的提示" type="warning" effect="light" showIcon />
      <LarkAlert title="带图标的提示" type="error" effect="light" showIcon />

      <h3>带描述</h3>
      <LarkAlert
        title="带描述的提示"
        type="success"
        effect="light"
        description="这是一段描述文字"
      />

      <h3>居中</h3>
      <LarkAlert title="居中显示" type="info" effect="light" center />

      <h3>自定义关闭文字</h3>
      <LarkAlert title="自定义关闭" type="warning" effect="light" closeText="知道了" />

      <h3>不可关闭</h3>
      <LarkAlert title="不可关闭的提示" type="error" effect="light" closable={false} />
    </Container>
  )
}

export default AlertDemo
