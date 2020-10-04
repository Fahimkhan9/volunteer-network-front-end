import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
function Nav() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink class="navbar-brand ml-4" to="/">
    <img style={{width:"80px"}} src="https://github.com/ProgrammingHero1/volunteer-network/raw/main/logos/Group%201329.png" alt=""/>
  </NavLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <NavLink class="nav-link" to="/">Home <span class="sr-only">(current)</span></NavLink>
      </li>
      
      <li class="nav-item">
        <NavLink class="nav-link" to="/events">Evants</NavLink>
      </li>
      
      <li class="nav-item">
        <NavLink class="nav-link  btn btn-primary text-white" to="/login">Login</NavLink>
      </li>
      
      
    </ul>
    
  </div>
</nav>
        </div>
    )
}

export default Nav
