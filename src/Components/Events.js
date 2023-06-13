import React,{useState} from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import {Link} from 'react-router-dom'
import { UserSignin } from '../App';
import EventsCard from './EventsCard';


function Events() {
    const [events,setEvents] = useState([])
    const [userinfo,setUserinfo] = useContext(UserSignin)
   
    


useEffect(() => {
    fetch(`https://volunteernetwork-backend.onrender.com/getfilteredevents?email=${userinfo.email}`)
    .then(res => res.json())
    .then(data => setEvents(data))
},[events])



console.log(events);
const cancelevents =(registeractivityid) =>{
   

    fetch(`https://volunteernetwork-backend.onrender.com/deleteevents/${registeractivityid}`,{
        method:"DELETE",
        headers:{"Content-Type":'application/json'}
    })
    .then(res => res.json())
    .then(data => {
        console.log("deleted")
})


} 


    return (
        <div className="container">
             <h2 className="text-center tect-brand p-5">Your's activities</h2>
             <div style={{display:'grid',gridTemplateColumns:"1fr 1fr 1fr"}}>
           
            {
                events.length ===0 ?
    <div className="text-center text-dark ">
                <p >you have no activities</p>
            <Link to="/" ><p className="text-decoration-none">Register for a volunteer activity here</p></Link>
    </div>
                :
                events.map(data => <EventsCard key={data._id} registeractivityimg={data.registeractivityimg} registeractivtiyname={data.registeractivityname} date={data.date} registeractivityid={data.registeractivityid} cancelevents={cancelevents}   events={events}  /> )
            }
    

        </div>
        </div>
        
    )
}

export default Events
