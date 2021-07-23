import React from 'react'
import s from "./NumberCount.module.css"

export type NumberType = {
  count: number
}


const NumberCount: React.FC<NumberType> = ({count}) => {
  return (
    <div className={s.wrapper}>
      <span className={count === 5 ? s.number_red : s.number}>{count}</span>
    </div>
  )
}

export default NumberCount
