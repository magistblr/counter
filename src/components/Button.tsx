import React, { useState } from 'react';
import { v1 } from 'uuid';
// import { ValueButtonType } from '../App'
import s from './Button.module.css';

export type ButtonType = {
  incCount: () => void;
  resetCount: () => void;
  // setCount: () => void
  // count: number
  // disabled?: boolean
  valueButton: string;
};

export const Button: React.FC<ButtonType> = ({ valueButton, incCount, resetCount }) => {
  
  
  
  const inc = () => incCount;
  const reset = () => resetCount;
  // const onclick = () => buttonSet?.type
  console.log(inc);

  

  return (
    <div className={s.btn_wrapper}>
      <button
        onClick={() =>  {resetCount()}}
        className={s.btn}
        >
        {valueButton}
      </button>
    </div>
  );
};
