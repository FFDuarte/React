import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from '../pages/Home'
import SignIn from '../pages/SignIn'



const Routes = () => {
   return(
       <BrowserRouter>
            <Route component = { SignIn }  path="/" exact />
           <Route component = { Home }  path="/home"  />
       </BrowserRouter>
   )
}

export default Routes;