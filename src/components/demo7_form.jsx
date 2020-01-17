import React, { Component } from 'react'

/**
 * 输入用户名和密码，点击登录提示输入信息，不提交表单
 */
export default class LoginForm extends Component {

    constructor (props) {
        super (props)

        // 初始化状态
        this.state = {
            pwd: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit (event) {

        const name = this.nameInput.value
        const {pwd} = this.state
        alert(`准备提交的用户名为：${name}，密码为${pwd}`)

        // 阻止事件的默认行为
        event.preventDefault()
    }

    handleChange (event) {
        // 读取输入框的值
        const pwd = event.target.value
        // 更新pwd
        this.setState({pwd})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    用户名：<input type="text" ref={input => this.nameInput = input}/>
                    <br/>
                    密&nbsp;&nbsp;&nbsp;码： <input type="password" value = {this.state.pwd}
                        onChange = {this.handleChange}/>
                    <br/>
                    <input type="submit" value="登录"/>
                </form>
            </div>
        )
    }
}
