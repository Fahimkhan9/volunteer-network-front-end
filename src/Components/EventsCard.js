import React from 'react'

function EventsCard(props) {

  const cancelevents = () => {

  }
    return (
        <div>
  <div class="card mb-3" style={{maxWidth:"540px"}}>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src={props.registeractivityimg} class="card-img" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
    <h5 class="card-title">{props.registeractivtiyname}</h5>
    <p class="card-text">{props.date}</p>
        <p class="card-text"><button className="btn btn-danger" onClick={cancelevents}>Cancel</button></p>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default EventsCard
