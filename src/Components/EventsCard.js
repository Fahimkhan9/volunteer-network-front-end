import React from 'react'

function EventsCard(props) {
    return (
        <div>
  <div class="card mb-3" style={{maxWidth:"540px"}}>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src={props.activityimg} class="card-img" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
    <h5 class="card-title">{props.activtiyname}</h5>
    <p class="card-text">{props.date}</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default EventsCard
