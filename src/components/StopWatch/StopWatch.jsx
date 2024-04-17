import React, { useState, useEffect, useRef } from 'react';
import style from "./StopWatch.module.css"

const StopWatch = () => {
  
  const [isRunning, setIsRunning] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0)

  const intervalIdRef = useRef(null)
  const startTimeRef = useRef(0)

  useEffect(() => {

  }, [isRunning])
  
  function start() {

  }

  function stop() {

  }

  function reset() {

  }

  function formatTime() {
    return `00:00:00`
  }

  return (
    <>
      <div className={style.watch}>
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