import React from 'react'

const Button_s = () => {
  const style = {
      padding: "15px",
      cursor: "pointer",
      backgroundImage: "linear-gradient(-45deg, white 25%, lightgrey 25%, lightgrey 50%,white 50%, white 75%, lightgrey 75%, lightgrey 100%)",
      backgroundSize: "18px 18px",
    
      border: "3px solid black",
      borderRadius: "5px",
      boxShadow: "5px 5px 0 black",
    
      color: "black",
      fontSize: "1.45rem",
      fontWight: "600",
      fontFamily: "monospace",
    
      transition: "all 0.1s",
  }

  return (
    <button style={style}>Click me!</button>
  )
}

export default Button_s