import logo from '../assets/valo-logo.png'

const Header = () => {
  return (
    <header>
        <img src={logo} alt="Logo" />
      <nav>
        <ul className='nav-ul'>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header