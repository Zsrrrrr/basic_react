import React, {useState} from 'react'

import { Form, Row, Col, Input, Button, Icon, Select, Modal } from 'antd';

const {Option} = Select

const FormCheck = props => {
  
  const [select, setSelect] = useState({})
  const [inp, setInp] = useState()

  const validateSelect = sel => {
    console.log(sel)
    if(sel){
      return {
        validateStatus: 'success',
        errorMsg: null,
      }
    }
    return {
      validateStatus: 'error',
      errorMsg: '请选择',
    }
  }

  const selectOnChange = (sel) => {
    setSelect({
      ...validateSelect(sel),
      sel,
    })
    return {
      ...validateSelect(sel),
      sel,
    }
  }


  const handleOnOk = () => {
    let a = selectOnChange(inp)
    console.log(a)
  }


  return (
    <div>
      <Modal
        visible={true}
        onOk={handleOnOk}
      >
        <Form>
          <Form.Item 
            label="Select" 
            validateStatus={select.validateStatus}
            help={select.errorMsg}
          >
            <Select onChange={selectOnChange}>
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}


export default Form.create({name: 'test'})(FormCheck)