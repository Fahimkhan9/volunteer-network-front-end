import React from 'react'


function EventsCard(props) {


    return (
        <div >
  <div className="card m-2" style={{maxWidth:"540px"}}>
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={props.registeractivityimg} className="card-img" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
    <h5 className="card-title">{props.registeractivtiyname}</h5>
    <p className="card-text">{props.date}</p>
      
        <p className="card-text"><button className="btn btn-danger" onClick={() => props.cancelevents(props.registeractivityid)}>Cancel</button></p>
    
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default EventsCard
