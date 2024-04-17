import React, { useState, useEffect, useRef } from 'react';
import style from "./StopWatch.module.css"

const StopWatch = (props) => {
  
  const [isRunning, setIsRunning] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0)

  const intervalIdRef = useRef(null)
  const startTimeRef = useRef(0)

  useEffect(() => {

    if(isRunning){
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current)
      }, 10)  
    }

    return () => {
      clearInterval(intervalIdRef.current)
    }
  }, [isRunning])
  
  function start() {
    setIsRunning(true)
    startTimeRef.current = Date.now() - elapsedTime
  }

  function stop() {
    setIsRunning(false)
  }

  function reset() {
    setIsRunning(false)
    setElapsedTime(0)
  }

  function formatTime() {

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60)
    let seconds = Math.floor(elapsedTime / (1000) % 60)
    let milliseconds = Math.floor((elapsedTime % 1000) / 10)

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`
  }

  function pad(n) {
    return n > 9 ? n : `0${n}`
  }

  return (
    <>
      <div className={style.watch}>
        <img src={props.texture} className={style.grunge} />
        <div className={style.displayTime}>{formatTime()}</div>
        
        <div className={style.btnWrapper}>
          <button onClick={start} className={style.watchBtn}>Start</button>
          <button onClick={stop} className={style.watchBtn}>Stop</button>
          <button onClick={reset} className={style.watchBtn}>Reset</button>
        </div>
      </div>
    </>
  )
}

export default StopWatch