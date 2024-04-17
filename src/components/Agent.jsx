import ptypes from 'prop-types'

const Agent = ({agent}) => {
  const {pfp, id, name, age, nation, isRadiant: rad} = agent // object destructuring

  return (
    <div className='card'>
      <div className="bg-id">{id || "???"}</div>
      <div className='pic-container'>
        <img src={pfp || "https://via.placeholder.com/100"} alt="Profile picture" />
      </div>
      <h2>{name || "UNKNOWN"}</h2>
      <p>Age: {age || "UNKNOWN"}</p>
      <p>Nationality: {nation || "UNKNOWN"}</p>
      <p>Is Radiant: {rad ? "Yes" : "No"}</p>
    </div>
  )
}

// Good practice to include proptypes
Agent.propTypes = {
  agent: ptypes.shape({
    pfp: ptypes.string,
    name: ptypes.string,
    age: ptypes.number,
    nation: ptypes.string,
    isRadiant: ptypes.bool
  }).isRequired
};

// Default properties (props)
// if they dont work we can also use above method ----^

// Agent.defaultProps = {
//   agent: {
//     id: 0,
//     pfp: "https://via.placeholder.com/100",
//     name: "Guest",
//     age: 0,
//     nation: "None",
//     isRadiant: false
//   }
// }

export default Agent