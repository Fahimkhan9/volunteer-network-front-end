import React from 'react'
import { Link } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css'


function VolunteerSectionCard(props) {
    return (
        <Link to={"/register/"+props.id}  >  
        <div class="card m-4" >
  <div className="card-body">
      
  <img src={props.img} class="card-img-top" alt="image"/>
  </div>
  <div class="card-footer text-dark text-center text-decoration-none">

    {props.name}
  </div>
</div>
        </Link>
      
    )
}

export default VolunteerSectionCard
