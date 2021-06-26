import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { render } from 'react-dom';

// useState
let _state = [];
let indexOfUseState = 0;  // useState计数

// useEffect
let _lastDepsBoxs = []; // 记录依赖，通过依赖来判断触发哪次useEffect
let _lastClearCallback = [];
let indexOfUseEffect = 0; // useEffect计数

/**
 * 手写useState
 * @param {any} init 初始化状态值
 * @returns [state, setState]
 */
function myUseState(init) {
  _state[indexOfUseState] = _state[indexOfUseState] || init;
  const _index = indexOfUseState;
  function dispatch(newState) {
    _state[_index] = newState;
    indexOfUseState = 0;
    indexOfUseEffect = 0;
    render(<HookTest />, document.getElementById('root'))
  }
  return [_state[indexOfUseState++], dispatch]
}

/**
 * 手写useEffect
 * @param {function} callback 副作用执行函数
 * @param {Array} deps 副作用执行的依赖
 */
function myUseEffect(callback, deps) {
  const lastDeps = _lastDepsBoxs[indexOfUseEffect];
  const changed = 
    !lastDeps // first render
    || !deps  // the second parameters were passed
    || deps.some((dep, idx) => dep !== lastDeps[idx])  // dependent parameters changed
  if (changed) {
    _lastDepsBoxs[indexOfUseEffect] = deps;
    if (_lastClearCallback[indexOfUseEffect]) {
      _lastClearCallback[indexOfUseEffect]();
    }
    _lastClearCallback[indexOfUseEffect] = callback();
  }
  indexOfUseEffect++;
}

export default function HookTest() {

  console.log('start');

  // const [count, setCount] = useState(0);
  const [count, setCount] = myUseState(0)
  const [str, setStr] = myUseState('e');
  const [boo, setBoo] = myUseState(false);

  myUseEffect(() => {
    console.log('useEffect 1');
    return () => {
      console.log('clear useEffect 1')
    }
  }, [count, str])

  myUseEffect(() => {
    console.log('useEffect 2');
    return () => {
      console.log('clear useEffect 2')
    }
  }, [count])

  return (
    <div>
      { count }
      <Button onClick={() => setCount(count + 1)}> + </Button>
      { str }
      <Button onClick={() => setStr(str + 'e')}> + </Button>
      { boo.toString() }
      <Button onClick={() => setBoo(!boo)}> + </Button>
    </div>
  )
}
