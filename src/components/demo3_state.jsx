import React from 'react'
import ReactDOM from 'react-dom'

class Mycomponent extends React.Component {

    constructor (props) {
        super(props)    //  调用父类的构造函数
        // 1.  初始化状态
        this.state = {
            isGood : false,
        }

        // 4. 将新增的方法中的this强制绑定为组件对象
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {    //  新添加的方法，内部的this默认不是组件对象，而是undefined
        console.log(this)
        // 获取原来的状态
        const isGood = !this.state.isGood
        // 3. 更新状态
        this.setState({isGood})
    }

    render () { //  重写组件类的方法，this指向组件对象
        // 2. 读取状态
        const isGood = this.state.isGood;
        // const {isGood} = this.state  //  解构赋值
        return(
            <h2 onClick = {this.handleClick}>
                {isGood ? '梁红好' : '我也好'}
            </h2>
        )
    }
}


export default Mycomponent