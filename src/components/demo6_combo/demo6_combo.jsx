import React,{Component} from 'react'
import ReactDOM from 'react-dom'

import Add from './Add'
import List from './List'

/**
 * 组件化实现功能：
 * 1. 显示所有todo列表
 * 2. 输入文本，点击按钮显示到列表的首位，并清除输入文本
 */

/**
 * 组件化编写流程：
 * 
 * 1. 拆分组件
 * 2. 实现静态组件：只有静态界面，没有动态数据和交互
 * 3. 实现动态组件：
 *      （1）实现初始化数据的动态显示：数据保存在哪个组件内
 *      （2）实现交互功能：绑定事件监听
 */

class TestApp extends Component {

    constructor (props) {
        super(props)
        this.state = {
            todos : ['eat', 'sleep', 'coding']
        }

        // 自定义方法时都加上绑定
        this.addTodo = this.addTodo.bind(this)
    }

    addTodo (todo) {
        const {todos} = this.state
        todos.unshift(todo)

        // 更新状态
        this.setState({todos})
    }

    render () {

        const {todos} = this.state

        return (
            <div>
                <h1>Simple TODO List</h1>
                <Add count={todos.length} addTodo={this.addTodo}/>
                <List todos={todos}/>
            </div>
        )
    }
}

 export default TestApp