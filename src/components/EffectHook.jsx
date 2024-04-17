import React, { useState, useEffect } from "react";

// useEffect() = React Hook that tells react to DO SOME CODE WHEN (pick one):
//               This component Re-renders
//               This component Mounts
//               The state of a value changes
              
//               useEffect(function, [dependencies])

//               1. useEffect(() => {})          // Runs after every Re-render
//               2. useEffect(() => {}, [])      // Runs onlt on Mount
//               3. useEffect(() => {}, [value]) // Runs on Mount + when value changes

function EffectHook() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("green")

  useEffect(() => {
      document.title = `Count : ${count} ${color}`

      return () => {
        // some cleanup code before next re-render
      }
  }, [count, color]) // both count and color are going to affect the title
  
  function addCount(){
    setCount(c => c + 1)
  }
  function subCount(){
    setCount(c => c - 1)
  }
  function changeColor(){
    // color === "green" ? setColor("red") : setColor("green")
    // or
    setColor(c => c === "green" ? "red" : "green")
  }

  return (
    <div>
      <p style={{color: color}}>Count : {count}</p>
      <button onClick={addCount}>Add</button><br />
      <button onClick={subCount}>Subtract</button><br />
      <button onClick={changeColor}>Change color</button>
    </div>
  )
}

export default EffectHook