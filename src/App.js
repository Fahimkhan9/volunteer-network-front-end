import React from 'react';
import Nav from './Components/Nav';
import SearchSection from './Components/SearchSection';
import VolunteerSection from './Components/VolunteerSection';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Register from './Components/Register';
import Login from './Components/Login';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './Components/PrivateRoute';
import Events from './Components/Events';



export const UserSignin = createContext()

function App() {
  const [allactivitydata,setAllactivitydata] = useState([])
  const [userinfo,setUserinfo] = useState({
    name: '',
    email:'',
    issignedin: false
  })

  
  return (
    <UserSignin.Provider value={[userinfo,setUserinfo]}>
 <Router>
  <Nav/>
  <Switch>
<Route exact path="/">
<SearchSection allactivitydata={allactivitydata} setAllactivitydata={setAllactivitydata} />
  <VolunteerSection allactivitydata={allactivitydata} setAllactivitydata={setAllactivitydata}/>
</Route>
<PrivateRoute exact path='/register/:activityid'>
<Register/>
</PrivateRoute>

<Route exact path='/login'>
<Login  />
</Route>
<PrivateRoute exact path='/events' >
  <Events/>
</PrivateRoute>
  </Switch>
 
  </Router>

    </UserSignin.Provider>
 
  
  );
}

export default App;
