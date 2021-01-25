import React, { Component } from 'react'
import {Collapse} from 'antd'

const {Panel} = Collapse;

export default function CollapseComp() {
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
  return (
      <Collapse>
          <Panel header="This is panel header 1" key="1">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 3" key="3">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 4" key="4">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 5" key="5">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 6" key="6">
            <p>{text}</p>
          </Panel>
        </Collapse>
  )
}

