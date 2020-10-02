import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css'
import VolunteerSectionCard from './VolunteerSectionCard'
import fdata from './VolunteerSectiondata'

function VolunteerSection() {




    return (
        <div className="mt-5" style={{display:"grid",gridTemplateColumns:"auto auto auto"}}>
            {
                fdata.map(data => <VolunteerSectionCard name={data.name} img={data.img} id={data.id} />)
            }
        </div>
    )
}

export default VolunteerSection
