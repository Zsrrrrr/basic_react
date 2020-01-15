import React from 'react'
import ReactDOM from 'react-dom'

// 定义组件：
/*
    方式一：工厂函数组件（简单组件：没有状态）
*/

// function MyComponent(){
//     return(
//         <h2>
//             function 工厂函数组件
//         </h2>
//     )
// }


/*
    方式二：ES6类组件（复杂组件）
*/
class MyComponent extends React.Component {

    render () {

        console.log(this)
        return (
            <h2>
                ES6类组件
            </h2>
        )
    }
}

export default MyComponent;
