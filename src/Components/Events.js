import React,{useState} from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { UserSignin } from '../App';
import EventsCard from './EventsCard';

import Nav from './Nav'

function Events() {
    const [events,setEvents] = useState([])
    const [userinfo,setUserinfo] = useContext(UserSignin)


useEffect(() => {
    fetch(`http://localhost:5000/getfilteredevents?email=${userinfo.email}`)
    .then(res => res.json())
    .then(data => setEvents(data))
},[])



console.log(events);

    return (
        <div>
            {
                events.map(data => <EventsCard registeractivityimg={data.registeractivityimg} registeractivtiyname={data.registeractivityname} date={data.date}  /> )
            }
    

        </div>
    )
}

export default Events
