import { useState } from "react"

const ColorPicker = () => {
  const [color, setColor] = useState("#FFFFFF")

  const handleColorChange = (e) => {
    setColor(e.target.value)
  }

  return (
    <div className="color-picker-container">
      <h1 className="rainbow-text">Color Picker</h1>

      <div className="color-display" style={{backgroundColor: color}}>
        <p>Selected color: {color}</p>
      </div>

      <label htmlFor="colorInput">Select a color: </label><br />
      <input type="color" id="colorInput" onChange={handleColorChange} />
    </div>
  )
}

export default ColorPicker