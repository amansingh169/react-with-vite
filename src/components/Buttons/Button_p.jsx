import React from 'react'
import style from './Button_p.module.css'

const Button = () => {
  let count = 0

  function handleClick() {
    count++

    if(count == 1)
      console.log("Did i just got clicked?");

    if(count == 2)
      console.log("Why are you clicking me???");

    if(count == 3)
      console.log("OUCH!!!");

    if(count == 4)
      console.log("STOP CLICKING ME!!!");

    if(count > 4)
      console.log("STOP YOU DUMB ASS!!!!");
  }

  return (
    // always use ()=> fxns for handling clicks cuz they be getting clicked by themselves otherwise...
    <button className={style.btn} onClick={() => handleClick()}>Click me!</button>
  )
}

export default Button