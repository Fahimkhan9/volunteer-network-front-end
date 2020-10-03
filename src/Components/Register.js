import React from 'react'
import { useForm } from 'react-hook-form';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import fdata from './VolunteerSectiondata';
import './Register.css'
import { useContext } from 'react';
import { UserSignin } from '../App';
function Register() {
    const {id} = useParams()
    const { register, handleSubmit, watch, errors } = useForm();
    const location = useLocation()
    const history = useHistory()
    const filtervalue = fdata.find(data => parseInt(data.id)  === parseInt(id))
const [userinfo,setUserinfo] = useContext(UserSignin)

    const onSubmit = data =>{
        const name =userinfo.name
        const email = data.email
        const date =data.date
        const description = data.description
        const activityValue = filtervalue.name



        if(isNaN(name)){
            console.log(name);
        }
    



        const values = {name,email,date,description,activityValue}
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
          <input type="text" name="activity" className="form-control" value={filtervalue.name} disabled ref={register}/>
        
          </div>
      
      <input type="submit" className="btn btn-primary btn-large" />
    </form>
        </div>
    )
}

export default Register
