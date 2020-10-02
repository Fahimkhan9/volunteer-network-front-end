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



export const UserSignin = createContext()

function App() {
  const [issignedin,setIssignedin] = useState()
  return (
    <UserSignin.Provider value={[issignedin,setIssignedin] }>
 <Router>
  <Nav/>
  <Switch>
<Route exact path="/">
<SearchSection/>
  <VolunteerSection/>
</Route>
<PrivateRoute exact path='/register/:id'>
<Register/>
</PrivateRoute>

<Route exact path='/login'>
<Login  />
</Route>
  </Switch>
 
  </Router>

    </UserSignin.Provider>
 
  
  );
}

export default App;
