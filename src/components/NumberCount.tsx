import React from 'react'
import s from "./NumberCount.module.css"

export type NumberType = {
  count: number
  maxValue: number
  incorrectClass: boolean
}


export const NumberCount: React.FC<NumberType> = ({count, maxValue, incorrectClass}) => {

  const incorrect = "Incorrect value!"
  const enter = "enter values and press 'set'"

  return (
    <div className={s.wrapper}>
      {incorrectClass
      ? <span className={s.incorrect}>{incorrect}</span>
      : <span className={count === maxValue ? s.number_red : s.number}>{count}</span>}
    </div>
  )
}

