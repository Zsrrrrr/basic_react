import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import ClassComp from './ClassComp'

class MYcomponent extends React.Component {

    constructor (props) {
        super(props)
        this.myRef_unfor = React.createRef()
        this.myRef_for = React.createRef()
    }

    handleClick_unfor = () => {
      console.log(this.myRef_unfor.current)
    }

    handleClick_for = () => {
      console.log(this.myRef_for.current)
    }



    render () {
        return (
            <div>
              <FancyButton myRef={this.myRef_unfor}></FancyButton>
              <FancyButtonRef ref={this.myRef_for}></FancyButtonRef>
              <br/>
              <button onClick={this.handleClick_unfor}>unfor</button>
              <button onClick={this.handleClick_for}>for</button>
            </div>
        )
    }
}

export default MYcomponent


const FancyButton = (props) => {
  return(
    <button ref={props.myRef}>
      fancyButton_unforward:{props.children ? props.children : 'null'}
    </button>
  )
}

const FancyButtonRef = React.forwardRef((props, ref) => (
  <button ref={ref}>
    fancyButton_forward:{props.children ? props.children : 'null'}
  </button>
))