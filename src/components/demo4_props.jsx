import React from 'react'
import ReactDOM from 'react-dom'
import propTypes from 'prop-types'

// function Mycomponent (props) {
//     return (
//         <div>
//             <ul>
//                 <li>姓名：{props.name}</li>
//                 <li>年龄：{props.age}</li>
//                 <li>性别：{props.sex}</li>
//             </ul>
//         </div>
//     )
// }

class Mycomponent extends React.Component {


    render () {

        console.log(this)
        return (
            <ul>
                <li>姓名：{this.props.name}</li>
                <li>年龄：{this.props.age}</li>
                <li>性别：{this.props.sex}</li>
            </ul>
        )

    }
}


// 设置属性的默认值
Mycomponent.defaultProps = {
    sex:'male',
    age:'18'
}

// 指定属性值的类型和必要性
Mycomponent.propTypes = {
    name: propTypes.string.isRequired,
    age: propTypes.number,
}

export default Mycomponent