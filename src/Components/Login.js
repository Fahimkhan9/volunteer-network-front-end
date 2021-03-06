import React from 'react'
import { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserSignin } from '../App';
import auth, { provider } from './firebase'

function Login(props) {


    const [userinfo,setUserinfo] = useContext(UserSignin)

let history = useHistory();
let location = useLocation();

let { from } = location.state || { from: { pathname: "/" } }

const registeruser =() => {
    auth.signInWithPopup(provider)
    .then(res => {
      
        // setIssignedin(true)
      
        userinfo.name = res.user.displayName
        userinfo.email = res.user.email
        userinfo.issignedin = true
        history.replace(from)
    })
    .catch(err => alert("error occured in firebase login :" + err))
}

    return (
    
            <div className="card mt-5 mx-auto" style={{width:"25rem"}}>
                <div className="card-title  mx-auto">
                    <h2>Login to Register</h2>
                </div>
  <div className="card-body mx-auto">
    <button className="btn btn-primary" onClick={registeruser}> Continue With Google </button>
  </div>
</div>
        
    )
}

export default Login
