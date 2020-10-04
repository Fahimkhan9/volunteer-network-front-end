import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css'
import Events from './Events'
import VolunteerSectionCard from './VolunteerSectionCard'



function VolunteerSection() {
    const [allactivitydata,setAllactivitydata] = useState([])

useEffect(() => {
fetch("http://localhost:5000/activitydata")
.then(res => res.json())
.then(data  =>setAllactivitydata(data))


},[])



console.log(allactivitydata);

    return (
        <div className="mt-5" style={{display:"grid",gridTemplateColumns:"auto auto auto"}}>
            {
                allactivitydata.map(data => <VolunteerSectionCard name={data.name} img={data.img} id={data.id} />)
            }
        </div>
    )
}

export default VolunteerSection
