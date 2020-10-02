import React from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import fdata from './VolunteerSectiondata';
import './Register.css'
function Register() {
    const {id} = useParams()
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data =>{
        if(isNaN(data.name)){
            console.log(data.name);
        }
    };
  
const filtervalue = fdata.find(data => parseInt(data.id)  === parseInt(id))

    return (
        <div className="register">
            <img src="https://github.com/ProgrammingHero1/volunteer-network/raw/main/logos/Group%201329.png" alt="" className="register-img" />
              {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
    <form onSubmit={handleSubmit(onSubmit)} className="register-form">
    {/* register your input into the hook by invoking the "register" function */}
     
      <div className="form-group">
          <h1 className="display-6">Register as a volunteer</h1>
          <input type="text" name="name" className="form-control" placeholder="Full Name" ref={register({ required: true })}/>
          {errors.name && <span>Name is required</span>}
          </div>
          <div className="form-group">
          <input type="text" name="email" className="form-control" placeholder="Email"  ref={register({ required: true })}/>
          {errors.email && <span>Email is required</span>}
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
