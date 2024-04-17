import React, { useState } from 'react'

const Arr_of_Obj = () => {
  const [cars, setCars] = useState([])
  const [year, setYear] = useState(new Date().getFullYear())
  const [maker, setMaker] = useState("")
  const [model, setModel] = useState("")

  function handleCarEntry() {
    let newCar = {
      year: year,
      maker: maker,
      model: model
    }

    setCars(c => [...c, newCar])

    setYear(new Date().getFullYear())
    setMaker("")
    setModel("")
  }

  function handleYearChange(e) {
    setYear(e.target.value)
  }

  function handleMakerChange(e) {
    setMaker(e.target.value)
  }

  function handleModelChange(e) {
    setModel(e.target.value)
  }

  function handleCarRemove(index) {
    setCars(cars.filter((_, i) => i != index))
  }

  return (
    <div>
      <h2>Car objects list :</h2>
      <ol>
        {cars.map((car, index) => (
          <li onClick={() => handleCarRemove(index)} key={index}>{car.year} {car.maker} {car.model}</li>
        ))}
      </ol>

      <label><input type="number" id="carYear" onChange={handleYearChange} placeholder="Enter year" value={year} /></label><br />
      <label><input type="text" id="carMaker" onChange={handleMakerChange} placeholder="Enter maker" value={maker} /></label><br />
      <label><input type="text" id="carModel" onChange={handleModelChange} placeholder="Enter model" value={model} /></label><br />

      <button onClick={handleCarEntry}>Add car</button>
      <br /><br />
    </div>
  )
}

export default Arr_of_Obj