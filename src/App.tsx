import React, { useState } from 'react';
import './App.module.css';
import { Counter } from './components/Counter';
import s from "./App.module.css"
import {Settings} from './components/Settings';


export type TitleType = "inc" | "reset" | "set" | ""



export const App = () => {

  let descrInc: TitleType = "inc"
  let descrReset: TitleType = "reset"
  let descrSet: TitleType = "set"


  let [count, setCount] = useState(0)
  let [maxValue, setMaxValue] = useState(0)
  let [startValue, setStartValue] = useState(0)
  let [disableButton, setDisableButton] = useState(false)

  const incorrectClass: boolean = (startValue < 0) || (maxValue < 0) || (startValue >= maxValue)

  function settingsCount() {
    return (
      setCount(startValue)
      )
    }

    const inputValueMax = (value: number) => {
      setMaxValue(value)
    }

    const inputValueStart = (value: number) => {
      setStartValue(value)
    }

    const incCount = () => {
      if(count < maxValue){
        setCount(count + 1)
      }
    }

    const resetCount = () => {
      setCount(count = startValue)
    }


  const onclick = (value: string) => {
      if(value === "inc"){
        incCount()
      }if(value === "reset"){
        resetCount()
      }if(value === "set"){
        settingsCount()
    }
  }

  // const disabled = (value: string) => {
  //   if((incorrectClass) && (value === "inc")) {
  //     setDisableButton(true)
  //   }else setDisableButton(false)
  // }


  const disabled = (value: string) => {
    if((value === "inc") && (maxValue === count)) {
      return setDisableButton(true)
    }if((value === "set") && (startValue === count)) {
      return setDisableButton(true)
    } if (startValue > 0) {setDisableButton(false)}
  }


  return (
    <div className={s.app_wrapper}>
        <Settings count={count}
                  descrSet={descrSet}
                  callback={onclick}
                  titleMax={maxValue}
                  titleStart={startValue}
                  callbackInputValueStart={inputValueStart}
                  callbackInputValueMax={inputValueMax}
                  disableButton={disableButton}
                  disabledCallback={disabled}
                  incorrectClass={incorrectClass}
                  />
        <Counter  count={count}
                  callback={onclick}
                  descrInc={descrInc}
                  descrReset={descrReset}
                  disableButton={disableButton}
                  disabledCallback={disabled}
                  titleMax={maxValue}
                  titleStart={startValue}
                  incorrectClass={incorrectClass}
                  />
    </div>
  );
}

