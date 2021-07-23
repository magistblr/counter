import React from 'react'
import { ButtonValueType } from '../App'
import { Button } from './Button'
import s from "./Display.module.css"

export type SettingsType = {
  count: number
  resetCount: () => void
  incCount: () => void
  buttonSet: ButtonValueType
}


export const Settings: React.FC<SettingsType> = ({buttonSet}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.app}>
        <div className={s.display}>
          <div className={s.wrapper_input}>
            <span className={s.text}>max value</span>
            <input className={s.input} type="number" step="1" />
          </div>
          <div className={s.wrapper_input}>
            <span className={s.text}>start value</span>
            <input className={s.input} type="number" step="1" />
          </div>
        </div>
        <Button    buttonSet={buttonSet}    />
      </div>
    </div>
  )
}

export default Settings
