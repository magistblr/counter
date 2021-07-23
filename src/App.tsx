import React, { useState } from 'react';
import './App.module.css';
import { Counter } from './components/Counter';
import s from "./App.module.css"
import Settings from './components/Settings';
import { v1 } from 'uuid';

export type CounterType = number

export type ButtonValueType = {
  id: string
  value: "inc" | "reset" | "set"
  type: () => void
}


function App() {


  const counterValue = {
    start: 3,
    end: 5
  }


  let [count, setCount] = useState<CounterType>(counterValue.start)


  const incCount = () => {
    if (count <= counterValue.end) {
      setCount(count + 1)
    }
  }


  const resetCount = () => {
    setCount(count = 0)
  }

  const setSetCount = () => {
    // setCount(count = 0)
  }

  const buttonInc: ButtonValueType = {id: v1(), value: "inc", type: resetCount}
  const buttonReset: ButtonValueType = {id: v1(), value: "reset", type: incCount}
  const buttonSet: ButtonValueType = {id: v1(), value: "set", type: setSetCount}


  return (
    <div className={s.app_wrapper}>
        <Settings />
        <Counter count={count} buttonInc={buttonInc} buttonReset={buttonReset} buttonSet={buttonSet}/>
    </div>
  );
}

export default App;
