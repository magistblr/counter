import React, { useEffect, useState } from 'react';
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
  let [text, setText] = useState("Incorrect value!")

  const incorrectClass: boolean = (startValue < 0) || (maxValue < 0) || (startValue >= maxValue)

  const incorrect = "Incorrect value!"


    const onText = () => {
      if(incorrectClass){
        setText(incorrect)
      } if(count === 0){
        setText("enter values and press 'set'")
      }else setText("enter values and press 'set'")
    }


    function settingsCount() {
      onText()
      return setCount(startValue)
    }

    const inputValueMax = (value: number) => {
      onText()
      setMaxValue(value)
    }

    const inputValueStart = (value: number) => {
      onText()
      setStartValue(value)
    }

    const incCount = () => {
      onText()
      if(count < maxValue){
        setCount(count + 1)
      }
    }

    const resetCount = () => {
      onText()
      setCount(count = startValue)
    }


  const onclick = (value: string) => {
      onText()
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

 

  return (
    <div className={s.app_wrapper}>
        <Settings count={count}
                  descrSet={descrSet}
                  callback={onclick}
                  titleMax={maxValue}
                  titleStart={startValue}
                  callbackInputValueStart={inputValueStart}
                  callbackInputValueMax={inputValueMax}
                  incorrectClass={incorrectClass}
                  text={text}
                  />
        <Counter  count={count}
                  callback={onclick}
                  descrInc={descrInc}
                  descrReset={descrReset}
                  titleMax={maxValue}
                  titleStart={startValue}
                  incorrectClass={incorrectClass}
                  text={text}
                  />
    </div>
  );
}

