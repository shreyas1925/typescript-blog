import React from 'react'
import "../styles/Navbar.css"

const NavBar= ():JSX.Element  => {
  return (
         <header>
                <div className="logo--header">
                    <h1>The Artifact</h1>
                    <h3>Culture & Art Blog</h3>
                </div>
                <nav>
                    <ul>
                        <li>Blog</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
          </header>
  )
}

export default NavBar