import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css'

import VolunteerSectionCard from './VolunteerSectionCard'



function VolunteerSection({setAllactivitydata,allactivitydata}) {


useEffect(() => {


    fetch("https://warm-inlet-36031.herokuapp.com/activitydata")
    .then(res => res.json())
    .then(data => setAllactivitydata(data))


},[])



console.log(allactivitydata);

    return (
        <div className="mt-5" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr"}}>
            {
                allactivitydata.length === 0 ?
                <h2 className="text-center">Loading.Please wait...</h2>
                :
                allactivitydata.map(data => <VolunteerSectionCard key={data.id} name={data.name} img={data.img} id={data.id} />)
            }
        </div>
    )
}

export default VolunteerSection
