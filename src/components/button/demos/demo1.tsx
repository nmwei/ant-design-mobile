import React, {useRef} from 'react'
import { Button, Space } from 'antd-mobile'
import { DemoBlock } from 'demos'
import './demo1.less'

export default () => {
  const ref= useRef();
  return (
    <>
      <DemoBlock title='填充模式'>
        <Space wrap>
          <Button className={'btn1'} ref={ref} onClick={() => {
            console.log(ref);
          }} color='primary' fill='solid'>
            Solid
          </Button>
          <Button color='primary' fill='outline'>
            Outline
          </Button>
          <Button color='primary' fill='none'>
            None
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title='块级按钮'>
        <Button block color='primary' size='large'>
          Block Button
        </Button>
      </DemoBlock>

      <DemoBlock title='按钮尺寸'>
        <Space wrap align='center'>
          <Button size='mini' color='primary'>
            Mini
          </Button>
          <Button size='small' color='primary'>
            Small
          </Button>
          <Button size='middle' color='primary'>
            Middle
          </Button>
          <Button size='large' color='primary'>
            Large
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title='语义按钮'>
        <Space wrap>
          <Button
            onClick={() => {
              alert('hello.')
            }}
          >
            Default
          </Button>
          <Button color='primary'>Primary</Button>
          <Button color='success'>Success</Button>
          <Button color='danger'>Danger</Button>
          <Button color='warning'>Warning</Button>
        </Space>
      </DemoBlock>
    </>
  )
}
