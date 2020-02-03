import React, { Component } from 'react'

export default class DOMdiff extends Component {

    constructor (props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }

    // 箭头函数比较方便
    // componentDidMount () {
    //     setInterval(() => {
    //         this.setState({
    //             date: new Date()
    //         })
    //     },1000)
    // }

    componentDidMount () {
        setInterval(function () {
            let {date} = this.state
            date = new Date()
            this.setState({date})
        }.bind(this),1000)
    }

    render() {
        return (
            <div>
                <p>
                    Hello,&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" placeholder="Your name here"/>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>It is {this.state.date.toTimeString()}</span>
                </p>
            </div>
        )
    }
}
