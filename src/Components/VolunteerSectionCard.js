import React from 'react'
import { Link } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css'


function VolunteerSectionCard(props) {
    return (
        <Link to={"/register/"+props.id}  >  
        <div class="card">
        <img src={props.img} class="card-img-top" alt="..."/>
        <div class="card-body">
    <p class="card-text">{props.name}</p>
        </div>
      </div>
        </Link>
      
    )
}

export default VolunteerSectionCard
