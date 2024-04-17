import React, { useState, useEffect} from 'react'

const Dimensions = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  function handleResize() {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  // non-react method ---> this will add an event listener each time width or height changes
  // window.addEventListener("resize", handleResize)
  
  // react method
  useEffect(() => {
    window.addEventListener("resize", handleResize)
    console.log("Event listener added!");

    return () => {
      window.removeEventListener("resize", handleResize)
      console.log("Event listener removed!");
    }
  }, []) // only adding the event listener when the component is mounted using "[]"
  
  return (
    <div>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  )
}

export default Dimensions