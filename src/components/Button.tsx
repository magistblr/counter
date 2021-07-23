import React, { useState } from 'react'
import { v1 } from 'uuid'
import { ButtonValueType } from '../App'
import s from "./Button.module.css"


export type ButtonType = {
  incCount: () => void
  resetCount: () => void
  setCount: () => void
  count: number
  disabled?: boolean
  buttonInc?: ButtonValueType
  buttonReset?: ButtonValueType
  buttonSet?: ButtonValueType
}


export const Button: React.FC<ButtonType> = ({count, buttonInc, buttonReset, buttonSet}) => {

  const inc = () => buttonInc?.type
  const reset = () => buttonReset?.type
  const set = () => buttonSet?.type




  if(buttonInc){
    return (
      <div className={s.btn_wrapper}>
              <button className={s.btn} disabled={count === 5} onClick={inc}>inc</button>
      </div>
    )
  } else if (buttonReset) {
    return (
    <div className={s.btn_wrapper}>
            <button className={s.btn} disabled={count > 5} onClick={reset}>reset</button>
    </div>
  ) } else if (buttonSet) {
    return (
      <div className={s.btn_wrapper}>
              <button className={s.btn} disabled={count === 0} onClick={set}>set</button>
      </div>
    )
  }
}

