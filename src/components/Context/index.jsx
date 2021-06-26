import React from 'react';
import { Button } from 'antd';

// export default function App() {
//   return (
//     <div>
//       <Toolbar theme="danger" ></Toolbar>
//     </div>
//   )
// }

// function Toolbar(props) {
//   return (
//     <div>
//       <ThemedButton theme={props.theme} ></ThemedButton>
//     </div>
//   )
// }

// class ThemedButton extends React.Component {
//   render() {
//     return <Button type={this.props.theme} >22</Button>
//   }
// }

const ThemeContext = React.createContext("lh");

export default class Test extends React.Component {

  render() {
    let name = 'zsr'
    return (
      <ThemeContext.Provider value={name} >
        <div style={{
          border: '1px solid blue',
          width: '300px',
          height: '300px',
          color: 'blue'
        }}>
          { name }
          <Father></Father>
        </div>
      </ThemeContext.Provider>
    )
  }
}

function Father() {
  return (
    <ThemeContext.Consumer>
      {
        name => {
          return (
            <div style={{
              border: '1px solid red',
              width: '200px',
              height: '200px',
              color: 'red'
            }}>
              {name}
              <Son />
            </div>
          )
        }
      }
    </ThemeContext.Consumer>
  );
}


function Son() {
  return (
    <ThemeContext.Consumer>
      {
        name => {
          return <div style={{
            border: '1px solid black',
            width: '100px',
            height: '100px',
            color: 'black'
          }}>
            {name}
          </div>
        }
      }
    </ThemeContext.Consumer>
  );
}