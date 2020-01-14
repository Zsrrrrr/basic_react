import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// **********************************
import ul from './components/demo1.jsx'
import Mycomponent from './components/demo2'




// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Mycomponent />,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
