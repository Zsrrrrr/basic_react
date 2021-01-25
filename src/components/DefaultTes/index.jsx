
import tag from './test'

import React, { Component } from 'react'

export default class DefaultTes extends Component {


  test = () => {
    tag.add()
  }

  


  render() {
    this.test()
    return (
      <div>
        123
      </div>
    )
  }
}

