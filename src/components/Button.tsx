import React, { useEffect, useState } from 'react';
import { TitleType } from '../App';
import s from './Button.module.css';

export type ButtonType = {
  descr: TitleType
  callback: (value: string) => void
  count: number
  disabledCallback: (value: string) => void
  disableButton: boolean
};


export const Button: React.FC<ButtonType> = ({descr, callback, disabledCallback, disableButton}) => {

  let [valueButton, setValueButton] = useState<TitleType>("")


  useEffect(() => {
    if(descr === "inc"){
      valueButton = "inc"
      setValueButton(valueButton)
    }if(descr === "reset"){
      valueButton = "reset"
      setValueButton(valueButton)
    }if(descr === "set"){
      valueButton = "set"
      setValueButton(valueButton)
    }
  }, [])


  const onclick = () => {
    if(valueButton === "inc"){
      callback("inc")
    }if(valueButton === "reset"){
      callback("reset")
    }if(valueButton === "set"){
      callback("set")
    }
  }

  const disable = () => {
    if(disableButton && (valueButton === "inc")) {
      return disableButton
    } if(disableButton && (valueButton === "reset")) {
      return disableButton
    }if(disableButton && (valueButton === "set")) {
      return disableButton
    } else return false
  }


  disabledCallback(valueButton)


  return (
    <div className={s.btn_wrapper}>
      <button
        onClick={() => {onclick()}}
        className={s.btn}
        disabled={disable()}
        >
        {valueButton}
      </button>
    </div>
  );
};
