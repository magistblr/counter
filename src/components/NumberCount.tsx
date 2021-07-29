import React from 'react'
import s from "./NumberCount.module.css"

export type NumberType = {
  count: number
  maxValue: number
  text: string
  incorrectClass: boolean
}


export const NumberCount: React.FC<NumberType> = ({count, maxValue, text, incorrectClass}) => {




  return (
    <div className={s.wrapper}>
      {incorrectClass
      ? <span className={s.incorrect}>{text}</span>
      : <span className={count === maxValue ? s.number_red : s.number}>{count}</span>}
    </div>
  )
}

