import React, { ChangeEvent, HtmlHTMLAttributes, useState } from 'react'
import { TitleType } from '../App'
import { Button } from './Button'
import s from "./Display.module.css"
import ss from './Button.module.css'

export type SettingsType = {
  count: number
  descrSet: TitleType
  callback: (value: string) => void
  titleMax: number
  titleStart: number
  callbackInputValueStart: (value: number) => void
  callbackInputValueMax: (value: number) => void
  incorrectClass: boolean
  text: string
  disable: boolean
  setDisable: (value: boolean) => void
  setText: (value: string) => void
}

export const Settings: React.FC<SettingsType> = ({descrSet, callback, titleStart, titleMax, callbackInputValueStart, callbackInputValueMax,count, incorrectClass, text, disable, setDisable, setText}) => {

  let [valueMax, setValueMax] = useState(0)
  let [valueStart, setValueStart] = useState(0)

  const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValueMax(+e.currentTarget.value)
    setDisable(false)
  }
  callbackInputValueMax(valueMax)

  const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValueStart(+e.currentTarget.value)
    setDisable(false)
  }

  callbackInputValueStart(valueStart)

  let inputClass = incorrectClass ? s.input_incorrect : s.input

  return (
    <div className={s.wrapper}>
      <div className={s.app}>
        <div className={s.display}>
          <div className={s.wrapper_input}>
            <span className={s.text}>max value</span>
            <input className={inputClass} onChange={onChangeMaxHandler} type="number" step="1" value={titleMax}/>
          </div>
          <div className={s.wrapper_input}>
            <span className={s.text}>start value</span>
            <input className={inputClass} onChange={onChangeStartHandler} type="number" step="1" value={titleStart}/>
          </div>
        </div>
        <div className={ss.settings_wrapper}>
          <Button descr={descrSet} callback={callback} count={count} maxValue={titleMax} incorrectClass={incorrectClass} startValue={titleStart} text={text} disableSet={disable}/>
        </div>
      </div>
    </div>
  )
}

