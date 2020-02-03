import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Life extends Component {

    constructor (props) {
        super(props)

        // 初始化状态
        this.state = {
            opacity: 1
        }
        this.destoryComponent = this.destoryComponent.bind(this);

        console.log('1. constructor()：创建初始化对象state')
    }

    componentDidMount () {
        console.log('2. componentWillMount：将要插入回调')
    }

    // 重写回调函数componentDidMount，它在创建阶段render之后调用
    componentDidMount () {
        // 启动循环定时器
        this.intervalId = setInterval(function () { // 要在另一个函数中找到定时器信息，需要把它放在一个大家都能看到的地方
            console.log("定时器执行...")
            let {opacity} = this.state // 这里不能用this，因为setInterval函数的this代表的是window 需要在后面绑定
            opacity -= 0.05
            if(opacity <= 0){
                opacity = 1
            }
            this.setState({opacity})
        }.bind(this), 500)
        console.log('4. componentDidMount：已经插入回调')

    }

    componentWillUpdate () {
        console.log('5. componentWillUpdate：将要更新回调')
    }

    componentDidUpdate () {
        console.log('6. componentDidUpdate：已经更新回调')
    }



    destoryComponent () {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    render() {
        console.log('3. render：用于插入虚拟DOM回调')

        const {opacity} = this.state
        return (
            <div>
                <h2 style={{opacity: opacity}}>{this.props.msg}</h2>
                {/* style 外面的大括号表示要写js代码，里面的大括号表示的是js对象 */}
                <button onClick={this.destoryComponent}>不活了</button>
            </div>
        )
    }

    componentWillUnmount () {
        // 清理定时器
        clearInterval(this.intervalId)
        console.log('7. componentWillUnmount：组件将要被移除回调')
    }
}
