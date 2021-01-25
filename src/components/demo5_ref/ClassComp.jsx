import React, { Component } from 'react'

export default class ClassComp extends Component {


  render() {
    return (
      <div>
        a class Component
        <input ref={this.props.test} type="text" placeholder='classcomp focus'/>
      </div>
    )
  }
}
