import React, { useState } from 'react'

const UpdateObj = () => {
  const [car, setCar] = useState({year: 2024, maker: "koenigsegg", model: "regera"})

  const handleYear = (e) => {
    // spread op (...) used to include all values of car there (year is going to repeat, preference to later defined)
    
    // setCar({...c, year: e.target.value})

    // better practice to use updater functions
    setCar(c => ({...c, year: e.target.value})) // can't use {} so surround them with ()
  }
  const handleMaker = (e) => {
    setCar(c => ({...c, maker: e.target.value}))
  }
  const handleModel = (e) => {
    setCar(c => ({...c, model: e.target.value}))
  }


  return (
    <div>
      <h2>Your favorite car is : {car.year} {car.maker} {car.model}</h2><br />
      <h3>Enter the details of the car: </h3>

      <label>Enter the year :
        <input type="number" id="year" value={car.year} onChange={handleYear} />
      </label>
      <br />

      <label>Enter the maker :
        <input type="text" id="maker" value={car.maker} onChange={handleMaker} />
      </label>
      <br />
      
      <label>Enter the model name :
        <input type="text" id="model" value={car.model} onChange={handleModel} />
      </label>
      <br />
      <br />
    </div>
  )
}

export default UpdateObj