import React from 'react';
import { Form, Input, Checkbox, Button } from 'antd';


export default function CustomForm() {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  }

  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16
    }
  }

  return (
    <Form
      { ...layout }
    >
      <Form.Item
        label="Username"
        name="username"
        { ...tailLayout }
      >
        <Input></Input>
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        { ...tailLayout }
      >
        <Input></Input>
      </Form.Item>
      <Form.Item
        label="Remember"
        name="remember"
        { ...tailLayout }
      >
        <Checkbox></Checkbox>
      </Form.Item>
      <Form.Item { ...tailLayout } >
        <Button locale="esUN" >确认</Button>
      </Form.Item>
    </Form>
  )
}
