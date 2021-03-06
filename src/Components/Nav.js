import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand ml-4" to="/">
    <img style={{width:"80px"}} src="https://github.com/ProgrammingHero1/volunteer-network/raw/main/logos/Group%201329.png" alt=""/>
  </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      
      <li className="nav-item">
        <NavLink className="nav-link" to="/events">Events</NavLink>
      </li>
      
      <li className="nav-item">
        <NavLink className="nav-link  btn btn-primary text-white" to="/login">Login</NavLink>
      </li>
      
      
    </ul>
    
  </div>
</nav>
        </div>
    )
}

export default Nav
