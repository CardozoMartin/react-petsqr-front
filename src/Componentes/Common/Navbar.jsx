import  './navbar.css'

const Navbar = () => {
  return (
    <div className="navContainer">
        <div className="wrapper">
        <span className='left' >
            <h1 className='logo'>Logo</h1>
        <ul className="menu">
            <li className="menuItem">Home</li>
            <li className="menuItem">Services</li>
            <li className="menuItem">Pricing</li>
            <li className="menuItem">contact</li>
            <li className="menuItem">Features</li>
        </ul>
        </span>
        <button className='navButton'>Ingresar</button>
        </div>
    </div>
  )
}

export default Navbar