import { Button, Progress } from 'antd'
import React, { Component, useState, useEffect, useRef } from 'react'

// const HookTest = (props) => {
//   console.log("重新渲染了页面")

//   const [num, setNum] = useState(0);
  
  
//   // useEffect(() => {
//   //   let timeInt = setInterval(() => {
//   //     if(num === 100) clearInterval(timeInt)
//   //     setNum(num + 1);
//   //   }, 2000);
//   // }, [num])


//     let timeInt = setInterval(() => {
//       console.log("new interval")
//       // if(num === 100) clearInterval(timeInt)
//       // setNum(num + 1);
//     }, 2000);

  

//   const handleClick = () => {
//     setNum(num + 1)
//   }

//   return (
//     <div>
      // <Button onClick={handleClick} >+</Button>
      // {num}
      // <Progress
      //   strokeColor={{
      //     '0%': '#108ee9',
      //     '100%': '#87d068',
      //   }}
      //   percent={num}
      //   showInfo={false}
      //   status='active'
      //   style={{ width: '104vw', margin: 20 }}
      // />
//     </div>
//   )
// }

class HookTest extends React.Component {
  constructor(){
    super()
    this.state = {
      num: 0,
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log(this.state.num)
      if (this.state.num === 100) clearInterval(this.timer)
      this.setState({
        num: this.state.num + 1,
      })
    }, 50);
  }

  render () {
    return (
      <div>
        {this.state.num}
      <Progress
        strokeColor={{
          '0%': '#108ee9',
          '100%': '#87d068',
        }}
        percent={this.state.num}
        showInfo={false}
        status='active'
        style={{ width: '104vw', margin: 20 }}
      />
      </div>
    )
  }
}




export default HookTest


