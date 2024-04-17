import React, { useState, useEffect } from 'react'
import style from './DigitalClock.module.css'

const DigitalClock = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(new Date())
    }, 1000);

    return () => {
      clearInterval(timeInterval)
    }
  }, [])
  
  function formatTime() {
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()
    let meridiem = hours >= 12 ? "PM" : "AM"

    hours = hours % 12 || 12

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${meridiem}`
  }

  function pad(num) {
    return (num < 10 ? "0" : "") + num
  }

  return (
    <div className={style.clockContainer}>
      <div className={style.clock}>
        <span>{formatTime()}</span>
      </div>
    </div>
  )
}

export default DigitalClock