import React from 'react'
import { Link } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css'


function VolunteerSectionCard(props) {
    return (
        <Link to={"/register/"+props.id}  >  
        <div className="card">
        <img src={props.img} className="card-img-top" alt="..."/>
        <div className="card-body">
    <p className="card-text">{props.name}</p>
        </div>
      </div>
        </Link>
      
    )
}

export default VolunteerSectionCard
