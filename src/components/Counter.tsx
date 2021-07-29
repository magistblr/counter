import React from 'react'
import { Button } from './Button'
import s from "./Display.module.css"
import {NumberCount} from './NumberCount'
import ss from './Button.module.css'
import { TitleType } from '../App'

export type CounterType = {
  count: number
  descrInc: TitleType
  descrReset: TitleType
  callback: (value: string) => void
  disabledCallback: (value: string) => void
  disableButton: boolean
  titleMax: number
  titleStart: number
  incorrectClass: boolean
}


export const Counter: React.FC<CounterType> = ({count, descrReset, descrInc,callback, disabledCallback,disableButton, titleMax, incorrectClass}) => {
  return (
    <div className={s.app_wrapper}>
      <div className={s.app}>
        <div className={s.display}>
          <NumberCount count={count} maxValue={titleMax} incorrectClass={incorrectClass}/>
        </div>
        <div className={ss.counter_wrapper}>
          <Button descr={descrInc} callback={callback} count={count} disabledCallback={disabledCallback} disableButton={disableButton} />
          <Button descr={descrReset} callback={callback} count={count} disabledCallback={disabledCallback} disableButton={disableButton} />
        </div>
      </div>
    </div>
  )
}

