import React,{useState} from 'react'
import { useContext } from 'react';

import { useEffect } from 'react';
import { UserSignin } from '../App';
import EventsCard from './EventsCard';


function Events() {
    const [events,setEvents] = useState([])
    const [userinfo,setUserinfo] = useContext(UserSignin)
   
 


useEffect(() => {
    fetch(`https://warm-inlet-36031.herokuapp.com/getfilteredevents?email=${userinfo.email}`)
    .then(res => res.json())
    .then(data => setEvents(data))
},[events])



console.log(events);
const cancelevents =(registeractivityid) =>{
   

    fetch(`https://warm-inlet-36031.herokuapp.com/deleteevents/${registeractivityid}`,{
        method:"DELETE",
        headers:{"Content-Type":'application/json'}
    })
    .then(res => res.json())
    .then(data => {
        console.log("deleted")
})


} 


    return (
        <div style={{display:'grid',gridTemplateColumns:"auto auto auto"}}>
            {
                events.map(data => <EventsCard key={data._id} registeractivityimg={data.registeractivityimg} registeractivtiyname={data.registeractivityname} date={data.date} registeractivityid={data.registeractivityid} cancelevents={cancelevents}   events={events}  /> )
            }
    

        </div>
    )
}

export default Events
