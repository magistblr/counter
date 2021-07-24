import React from 'react'
// import { ValueButtonType } from '../App'
import { Button } from './Button'
import s from "./Display.module.css"
import NumberCount from './NumberCount'
import ss from './Button.module.css'

export type CounterType = {
  count: number
  resetCount: () => void
  incCount: () => void
  settingsCount: () => void
  valueButton: string
}


export const Counter: React.FC<CounterType> = ({count, valueButton, incCount, resetCount, settingsCount}) => {
  return (
    <div className={s.app_wrapper}>
      <div className={s.app}>
        <div className={s.display}>
          <NumberCount count={count}/>
        </div>
        <div className={ss.counter_wrapper}>
          {/* <Button valueButton={valueButton} incCount={incCount} resetCount={resetCount} settingsCount={settingsCount}/> */}
          {/* <Button valueButton={valueButton} resetCount={resetCount} incCount={incCount} settingsCount={settingsCount}/> */}
        </div>
      </div>
    </div>
  )
}

export default Counter
