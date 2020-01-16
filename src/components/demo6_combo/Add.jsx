import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Add extends Component {

    constructor (props) {
        super(props)
        this.add = this.add.bind(this)
    }

    add () {
        // 1. 读取输入的数据
        const todo = this.todoInput.value.trim()    // trim去掉两边空格
        // 2. 检查合法性
        if (!todo) {
            return
        } else {
            // 3. 添加
            this.props.addTodo(todo)
            // 4. 清除输入
            this.todoInput.value = ""
        }
        
    }

    render() {
        return (
            <div>
                <input type="text" ref={input => this.todoInput = input}/>
                <button onClick={this.add}>add #
                    {this.props.count + 1}
                </button>
            </div>
        )
    }
}

Add.propTypes = {
    count: PropTypes.number.isRequired,
    addTodo: PropTypes.func.isRequired
}