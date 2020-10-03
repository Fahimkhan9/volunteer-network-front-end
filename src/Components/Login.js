import React from 'react'
import { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserSignin } from '../App';
import auth, { provider } from './firebase'

function Login(props) {


    // const [issignedin,setIssignedin]   = useContext(UserSignin)
    const [userinfo,setUserinfo] = useContext(UserSignin)
// console.log(issignedin);
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
    .catch(err => alert(err))
}

    return (
    
            <div class="card">
                <div className="card-title">Login</div>
  <div class="card-body">
    <button className="btn" onClick={registeruser}> Continue With Google </button>
  </div>
</div>
        
    )
}

export default Login
