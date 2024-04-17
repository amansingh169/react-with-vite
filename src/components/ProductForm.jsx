import { useState } from 'react'

const SetName = () => {
  const [name, setName] = useState("Guest")
  const [quantity, setQuantity] = useState(1)
  const [comment, setComment] = useState("")
  const [payment, setPayment] = useState("")
  const [shipping, setShipping] = useState("Home Delivery")

  // this function is updating the values on a button click (not realtime)
  const updateFields = () => {
    setName(document.querySelector("#name").value)
    setQuantity(document.querySelector("#quan").value)
    setComment(document.querySelector("#comment").value)
    setPayment(document.querySelector("#payment").value)
  }
  
  // this is a realtime updation function
  const handleShip = (e) => {
    setShipping(e.target.value)    
  }

  return (
    <div>
      <h3>Name: {name}</h3>
      <h3>Quantity: {quantity}</h3>
      <h3>Your comment: {comment}</h3>
      <h3>Payment method: {payment}</h3>
      <h3>Shipping method: {shipping}</h3><br />

      <label htmlFor="name">Enter the name:</label><br />
      <input type="text" id="name" placeholder="Nightfury8004" /><br />

      <label htmlFor="quan">Enter the quantity:</label><br />
      <input type="number" id="quan" placeholder={quantity} /><br />

      <label htmlFor="comment">Enter a comment:</label><br />
      <textarea type="text" id="comment" placeholder="Enter delivery instructions..." /><br />

      <label htmlFor="payment">Enter a comment:</label><br />
      <select name="paymethod" id="payment">
        <option value="">Select a payemnt method</option>
        <option>Visa</option>
        <option>Credit card</option>
        <option>Debit card</option>
      </select>
      <br />
      <br />

      <p>Enter shipping method:</p>
      <label><input type="radio" id="pickup" value="Pick up" checked={shipping === "Pick up"} onChange={handleShip} />Pick up</label><br />
      <label><input type="radio" id="homedeli" value="Home Delivery" checked={shipping === "Home Delivery"} onChange={handleShip} />Home Delivery</label><br />

      <button onClick={() => updateFields()}>Update fields</button>
    </div>
  )
}

export default SetName