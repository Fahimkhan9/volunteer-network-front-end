import React from 'react'
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';

import './Register.css'
import { useContext } from 'react';
import { UserSignin } from '../App';
import { useEffect } from 'react';
import { useState } from 'react';
function Register() {
    const {activityid} = useParams()
    const { register, handleSubmit, watch, errors } = useForm();
    const location = useLocation()
    const history = useHistory()
    const [filtereddata,setFilteredData] = useState([])
   useEffect(()=> {
fetch(`http://localhost:5000/getfilteredevents/${activityid}`)
.then(res  => res.json())
.then(data  => setFilteredData(data))
   },[activityid])
console.log(filtereddata);
const {name,img} = filtereddata
console.log(name,img);
const [userinfo,setUserinfo] = useContext(UserSignin)

    const onSubmit = data =>{
        const username =userinfo.name
        const useremail = userinfo.email
        const date =data.date
        const description = data.description
        const registeractivityname = name
        const registeractivityimg= img
        const registeractivityid = activityid


        
    



        const values = {username,useremail,date,description,registeractivityname,registeractivityimg,registeractivityid}
        fetch("http://localhost:5000/addregistrations",{
            method:"POST",
            headers:{"Content-Type":'application/json'},
            body: JSON.stringify(values)
        })
        .then(res => res.json())
        .then(d => console.log(d))
console.log(location);
console.log(history);
history.replace('/events')
    };
  

    return (
        <div className="register">
            <img src="https://github.com/ProgrammingHero1/volunteer-network/raw/main/logos/Group%201329.png" alt="" className="register-img" />
              {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
    <form  onSubmit={handleSubmit(onSubmit)} className="register-form">
    {/* register your input into the hook by invoking the "register" function */}
     
      <div className="form-group">
          <h1 className="display-6">Register as a volunteer</h1>
          <input type="text" name="name" value={userinfo.name} className="form-control" placeholder="Full Name" disabled ref={register}/>
        
          </div>
          <div className="form-group">
          <input type="text" name="email" value={userinfo.email} className="form-control" placeholder="Email" disabled ref={register}/>
    
          </div> 
           <div className="form-group">
          <input type="date" name="date" className="form-control" placeholder="Date"  ref={register({ required: true })}/>
          {errors.date && <span>Date is required</span>}
          </div> 
           <div className="form-group">
          <input type="text" name="description" className="form-control" placeholder="Description" ref={register({ required: true })}/>
          {errors.description && <span>Description is required</span>}
          </div>
          <div className="form-group">
          <input type="text" name="activity" className="form-control" value={name} disabled ref={register}/>
        
          </div>
      
      <input type="submit" className="btn btn-primary btn-large" />
    
    </form>
        </div>
    )
}

export default Register
