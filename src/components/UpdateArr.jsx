import React, {useState} from 'react'

const UpdateArr = () => {
  const [foods, setFoods] = useState(["Orange", "Banana", "Grapes"])

  const handleAddFood = () => {
    const newFood = document.getElementById("foodInput").value
    setFoods(f => [...f, newFood])
    document.getElementById("foodInput").value = ""
  }

  const handleRemoveFood = (index) => {
    // this will keep only the elements who's 'i' (index) is != current's index
    setFoods(f => f.filter((_, i) => i != index)) // '_' as a parameter is a convention for ignored arguments/parameters
  }

  return (
    <div>
      <h2>List of foods : </h2>

      <ol>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>
        ))}
      </ol>

      <input type="text" id="foodInput" placeholder="Enter food name" />
      <button onClick={handleAddFood}>Add food</button>

      <br />
      <br />
    </div>
  )
}

export default UpdateArr