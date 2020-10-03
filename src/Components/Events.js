import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Nav from './Nav'

function Events() {
    const [events,setEvents] = useState([])
    useEffect(() => {
fetch('http://localhost:5000/getevents')
.then(res => res.json())
.then(data => setEvents(data))


    },[])
console.log(events);

    return (
        <div>
            
            <div class="card mb-3" style={{maxWidth:"540px"}}>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="https://github.com/ProgrammingHero1/volunteer-network/raw/main/images/ITHelp.png" class="card-img" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}

export default Events
