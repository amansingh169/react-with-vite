const Food = () => {
  const food1 = "Grapes"
  const food2 = "Mandarin"

  return (
    <div id="food">
      <h2>Food list</h2>
      <ol>
        <li>{food1}</li>
        <li>{food2.toUpperCase()}</li>
        <li>Dragon fruit</li>
      </ol>
    </div>
  )
}

export default Food