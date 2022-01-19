import React from "react";

function Header () {
    return (
      <nav className='navbar'>
        <img className="logo-img" src="react-logo.png"></img>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    )
  }
  export default Header