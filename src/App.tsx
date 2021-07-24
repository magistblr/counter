import React, { useState } from 'react';
import './App.module.css';
import { Counter } from './components/Counter';
import s from "./App.module.css"
import Settings from './components/Settings';
import { v1 } from 'uuid';

export type CounterType = number

// export type ValueButtonType = "inc" | "reset" | "set" | null

// export type ClickButtonType = (() => void) | null

// type SettingsType = 

function App() {




  let [count, setCount] = useState<CounterType>(0)
  // let [settingsButton, setSettingsButton] = useState<SettingsType>(null)
  let [valueButton, setValueButton] = useState("")
  // let [click, setClick] = useState<ClickButtonType>(null)
  let [maxValue, setMaxValue] = useState<Number>(0)
  let [startValue, setStartValue] = useState<Number>(0)


  const incCount = () => {
    setValueButton("inc")
    setCount(count + 1)
    // setClick(click)
  }

  const resetCount = () => {
    setValueButton("reset")

    setCount(count = 0)
    // setClick(click)
  }


  const settingsCount = () => {
    // setCount(count = 0)
  }




  return (
    <div className={s.app_wrapper}>
        {/* <Settings buttonSet={buttonSet}/> */}
        <Counter count={count} valueButton={valueButton} incCount={incCount} resetCount={resetCount} settingsCount={settingsCount}/>
    </div>
  );
}

export default App;
