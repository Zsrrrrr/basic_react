import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages'
import * as serviceWorker from './serviceWorker';

// **********************************
import Life from './components/demo8_life';
import DOMdiff from './components/demo9_DOMdiff';
// **********************************



const info = {
    name:'zsr',
    age:23,
    sex:'male'
}


/**
 * 扩展运算符...作用：
 * 1. 打包
 *  function fn(...as) {} fn(1,2,3)
 * 2. 解包
 *  const arr1 = [1,2,3]
 *  const arr2 = [6,...arr1,9]
 */

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Life msg="React 太难了"/>,document.getElementById('root'));
ReactDOM.render(<App />,document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
