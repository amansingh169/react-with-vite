
const Greeting = (props) => {
  return (
    props.isLogged ? <div className="log-greeting">Welcome back {props.name}!</div>
                   : <div className="log-message">Please login to continue!</div>
  )
}

export default Greeting