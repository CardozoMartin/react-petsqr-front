import  './navbar.css'

const Navbar = () => {
  return (
    <div className="navContainer">
        <div className="wrapper">
        <span className='left' >
            <h1 className='logo'>PetsQr</h1>
        <ul className="menu">
            <li className="menuItem">Home</li>
            <li className="menuItem">Registro</li>
            <li className="menuItem">Ayuda</li>
        </ul>
        </span>
        <button className='navButton'>Ingresar</button>
        </div>
    </div>
  )
}

export default Navbar