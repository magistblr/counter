import React from 'react'
import { ButtonValueType } from '../App'
import { Button } from './Button'
import s from "./Display.module.css"
import NumberCount from './NumberCount'

export type CounterType = {
  count: number
  resetCount: () => void
  incCount: () => void
  buttonInc: ButtonValueType
  buttonReset: ButtonValueType
}


export const Counter: React.FC<CounterType> = ({count, incCount, resetCount, buttonInc, buttonReset}) => {
  return (
    <div className={s.app_wrapper}>
      <div className={s.app}>
        <div className={s.display}>
          <NumberCount count={count}/>
        </div>
          <Button incCount={incCount}
                  resetCount={resetCount}
                  count={count}
                  buttonInc={buttonInc}
                  buttonReset={buttonReset}
                  />
      </div>
    </div>
  )
}

export default Counter
