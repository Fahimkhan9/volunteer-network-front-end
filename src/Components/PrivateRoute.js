import React from 'react'
import { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { UserSignin } from '../App'

function PrivateRoute({ children, ...rest }) {
    
//  const   [issignedin,setIssignedin] = useContext(UserSignin)
 const [userinfo,setUserinfo] = useContext(UserSignin)

    return (
        <div>
             <Route
      {...rest}
      render={({ location }) =>
        userinfo.issignedin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
        </div>
    )
}

export default PrivateRoute
