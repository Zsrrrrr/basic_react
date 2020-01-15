import React from 'react'
import ReactDOM from 'react-dom'

class MYcomponent extends React.Component {

    constructor (props) {
        super(props)
        this.showInput = this.showInput.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }

    showInput () {
        // const input = this.refs.content
        // alert(input.value)
        alert(this.input.value)
    }

    handleBlur (event) {
        alert(event.target.value)
    }
    
    render () {
        return (
            <div>
                <input type="text" ref="content"/>
                <input type="text" ref={input => this.input = input}/>
                <button onClick={this.showInput}>提示输入</button>
                <input type="text" placeholder="失去焦点提示标签" onBlur={this.handleBlur}/>
            </div>
        )
    }
}

export default MYcomponent